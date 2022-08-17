import React, { useState, Fragment } from "react";
import { View } from "react-native";
import BusinessLocation from "./components/BusinessLocation";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/error";
import Success from "../../../Components/Modal/success";
import { apiCall, setDefaultHeader } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import { useFocusEffect, useLinkProps } from "@react-navigation/native";

const BusinessLocationView = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [textOptn, setTextOptn] = useState(false);
  const [miles, setMiles] = useState(2);

  useFocusEffect(
    React.useCallback(() => {
      getProfile();
      return () => getProfile();
    }, [])
  );

  const getProfile = async () => {
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
      if (data.status === 200) {
        data.data.business_info
          ? setMiles(data.data.business_info[0].location)
          : null;
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };

  const onPressTextOptn = () => {
    setTextOptn(!textOptn);
  };
  const onPressNext = async () => {
    const valid = validationFrom();
    if (valid) {
      setVisible(true);
      try {
        const params = {
          location: miles,
        };
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.ADD_BUSINEES_INFO,
          params
        );
        if (data.status === 200) {
          navigation.navigate("Budgets");
          setVisible(false);
        } else {
          setVisible(false);
          setErrorMessage(data.message);
          setVisibleErr(true);
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
        setVisible(false);
      }
    }
  };
  function validationFrom() {
    if (miles == "") {
      setErrorMessage("Please your location miles");
      setVisibleErr(true);
      return false;
    }
    return true;
  }

  const lacationMiles = (value) => {
    setMiles(value);
  };

  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <BusinessLocation
        onPressTextOptn={onPressTextOptn}
        textOptn={textOptn}
        onPressNext={onPressNext}
        lacationMiles={(value) => lacationMiles(value)}
        miles={miles}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => ("Home", setVisibleSuccess(false))}
      />
    </View>
  );
};
export default BusinessLocationView;
