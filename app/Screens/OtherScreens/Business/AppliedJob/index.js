import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./components/styles";
import AppliedJob from "./components/AppliedJob";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import CommonStyles from "../../../Utils/CommonStyles";
import moment from "moment";
import Error from "../../../Components/Modal/showMessage";
import Success from "../../../Components/Modal/success";

const AppliedJobView = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [businessJobList, setJobBusinessList] = useState([]);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    getBussinessJobList();
  }, []);

  const getBussinessJobList = async () => {
    setVisible(true);
    try {
      const params = {
        business_type: 5,
        offset: 0,
      };
      const { data } = await apiCall("POST", ENDPOINTS.GET_ORDER_LIST, params);
      if (data.status === 200) {
        setJobBusinessList(data.data);
        setVisible(false);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const navToDetailPage = (item) => {
    navigation.navigate("AppliedJobDetails", {
      orderId: item.order_id,
      BusinessType: 5,
    });
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <AppliedJob
        businessJobList={businessJobList}
        navToDetailPage={navToDetailPage}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => navigateAndCloseSuccessModal()}
      />
    </View>
  );
};
export default AppliedJobView;
