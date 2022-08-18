import React, { useEffect, useState, useContext } from "react";
import StepSecondScreen from "./components/StepSecondScreen";
import { View } from "react-native";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import Error from "../../Components/Modal/error";
import {
  ServiceProviderContext,
  ServiceProviderContextQueAnsData,
} from "../../Utils/UserContext";
const StepSecond = ({ navigation, route }) => {
  const [serviceProviderQueAnsData, setServiceProviderQueAnsData] = useContext(
    ServiceProviderContextQueAnsData
  );
  const [serviceProviderData, setServiceProviderData] = useContext(
    ServiceProviderContext
  );
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [serviceDetail, setServiceDetail] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [queAnsData, setQueAnsData] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  useEffect(() => {
    if (route.params) {
      const { serviceDetail } = route.params;
      setServiceDetail(serviceDetail);
    }
  }, []);
  const goBack = () => {
    navigation.goBack(null);
  };
  const validationForCategory = () => {
    if (selectedCategory == "") {
      setErrorMessage("Please Select Answer");
      setVisibleErr(true);
      return false;
    }
    return true;
  };
  const onPressNext = async () => {
    const valid = validationForCategory();
    if (valid) {
      try {
        setVisible(true);
        const params = {
          business_type: 3,
          category_id: selectedCategory.category_id,
          // category_id: 389,//selectedCategory.category_id
          parent_question_id: 0,
        };
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.SERVICE_QUESTION_ANSWER,
          params
        );
        if (data.status === 200) {
          const params = {
            serviceDetail,
            selectedCategory: selectedCategory,
            selectedSubCategory: selectedCategory,
          };
          setServiceProviderData(params);
          setVisible(false);
          if (data.question_status === "question_finished") {
            navigation.navigate("StepThird");
          } else {
            setQueAnsData(data.data);
          }
        } else {
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
        setVisible(false);
      }
    }
  };
  const onPressCategory = (item) => {
    setSelectedCategory(item);
  };
  const validationForSubCategory = () => {
    if (selectedAnswer == "") {
      setErrorMessage("Please Select Sub-Service");
      setVisibleErr(true);
      return false;
    }
    return true;
  };
  const onPressNextOfAnswer = async () => {
    if (serviceProviderQueAnsData.length > 0) {
      setServiceProviderQueAnsData((curr) => [...curr, selectedAnswer]);
    } else {
      setServiceProviderQueAnsData([selectedAnswer]);
    }
    const valid = validationForSubCategory();
    if (valid) {
      setVisible(true);
      try {
        const params = {
          business_type: 3,
          category_id: selectedCategory.category_id,
          // category_id: 389,//selectedCategory.category_id
          parent_question_id: selectedAnswer.question_ans_id,
        };
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.SERVICE_QUESTION_ANSWER,
          params
        );
        if (data.status === 200) {
          if (data.question_status == "question_finished") {
            navigation.navigate("StepThird");
            setVisible(false);
          } else {
            setVisible(false);
            setQueAnsData(data.data);
          }
        } else {
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
        setVisible(false);
      }
      // const params = {
      //     serviceDetail,
      //     selectedCategory,
      //     selectedSubCategory
      // }
      // setServiceProviderData(params)
      //
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <StepSecondScreen
        serviceProviderQueAnsData={serviceProviderQueAnsData}
        setServiceProviderData={setServiceProviderData} //context
        setServiceProviderQueAnsData={setServiceProviderQueAnsData} //context
        queAnsData={queAnsData}
        setQueAnsData={setQueAnsData}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        serviceDetail={serviceDetail}
        selectedCategory={selectedCategory}
        onPressCategory={onPressCategory}
        onPressNextOfAnswer={onPressNextOfAnswer}
        goBack={goBack}
        onPressNext={onPressNext}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(false)}
      />
    </View>
  );
};
export default StepSecond;
