import React, { useState, useEffect } from "react";
import { View } from "react-native";
import AppliedJobDetails from "./components/AppliedJobDetails";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import Error from "../../../../Components/Modal/error";
import Success from "../../../../Components/Modal/success";
import moment from "moment";
import FileViewer from "react-native-file-viewer";

const AppliedJobDetailsVw = ({ navigation, route }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [orderData, setorderData] = useState();
  const [jobAccepted, setJobAccepted] = useState(false);
  const [isDatePicker, setDatePicker] = useState(false);
  const [isTimePicker, setIsTimePicker] = useState(false);
  const [jobAcceptData, setJobAcceptData] = useState({
    date: "",
    time: "",
    description: "",
  });
  const { BusinessType, orderId } = route.params || {
    BusinessType: 5,
    orderId: null,
  };
  useEffect(() => {
    getOrderDetailsFun(orderId, BusinessType);
  }, [route.params]);

  const getOrderDetailsFun = async (orderId, BusinessType) => {
    setVisible(true);
    try {
      const params = {
        business_type: BusinessType,
        order_id: orderId,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_ORDER_DETAILS,
        params
      );
      if (data.status === 200) {
        setorderData(data.data);
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
  };

  const onPressResume = async () => {
    if (orderData?.userInfo.resume) {
      try {
        await FileViewer.open(orderData?.userInfo.resume, {
          showOpenWithDialog: true,
          showAppsSuggestions: true,
        });
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
      }
    } else {
      setErrorMessage("No Résumé Uploaded");
      setVisibleErr(true);
    }
  };
  const scheduleConfirm = async (item) => {
    setJobAccepted(false);
    setVisible(true);
    try {
      const params = {
        applyed_id: orderData?.userInfo?.id,
        description: jobAcceptData.description,
        interview_date: jobAcceptData.date,
        interview_time: jobAcceptData.time,
        job_approved: orderData?.userInfo?.job_approved,
        job_id: orderData?.userInfo?.job_id,
        user_id: orderData?.userInfo?.user_id,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.JOBAPPROVEDBUSINESS,
        params
      );
      if (data.status === 200) {
        setVisible(false);
        getOrderDetailsFun(orderId, BusinessType);
        setSuccessMessage(data.message);
        setVisibleSuccess(true);
        setJobAcceptData({
          date: "",
          time: "",
          description: "",
        });
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
  };

  const handleConfirm = (date) => {
    const value = moment(date).format("MM/DD/YYYY");
    setJobAcceptData({
      ...jobAcceptData,
      date: value,
    });
    setDatePicker(false);
  };
  const handleTimeConfirm = (date) => {
    const value = moment(date).format("h:mm a");
    setJobAcceptData({
      ...jobAcceptData,
      time: value,
    });
    setIsTimePicker(false);
  };
  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <AppliedJobDetails
        orderData={orderData}
        onPressResume={onPressResume}
        scheduleConfirm={scheduleConfirm}
        jobAccepted={jobAccepted}
        setJobAccepted={setJobAccepted}
        isDatePicker={isDatePicker}
        setDatePicker={setDatePicker}
        isTimePicker={isTimePicker}
        setIsTimePicker={setIsTimePicker}
        handleConfirm={handleConfirm}
        handleTimeConfirm={handleTimeConfirm}
        jobAcceptData={jobAcceptData}
        setJobAcceptData={setJobAcceptData}
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
export default AppliedJobDetailsVw;
