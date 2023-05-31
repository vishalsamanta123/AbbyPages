import React, { useContext, useState, useEffect } from "react";
import ShowMessage from "../../../../Components/Modal/showMessage";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import { apiCall } from "../../../../Utils/httpClient";
import { RequestQutProviderContext } from "../../../../Utils/UserContext";
import RequestQuoteView from "./components/RequestQuoteView";

const RequestQuote = ({ navigation, route }) => {
  const { detail = {} } = route?.params || { detail: {} };
  const [screenPlay, setScreenPlay] = useState(1);
  const [serviceData, setServiceData] = useState({});
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });
  const [requestQuote, setRequestQuote] = useContext(RequestQutProviderContext);

  useEffect(() => {
    setServiceData(detail);
    const unsubscribe = navigation.addListener("blur", () => {
      setScreenPlay(1);
      setRequestQuote([]);
    });
    return unsubscribe;
  }, [navigation, detail]);

  const onPressBack = () => {
    setScreenPlay(screenPlay - 1);
  };
  const onPressNext = async (type) => {
    if (requestQuote?.length > 0) {
      const params = {
        business_type: 3,
        category_id: requestQuote[0].category_id,
        parent_question_id: 0,
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.SERVICE_QUESTION_ANSWER,
        params
      );
      if (data?.status === 200) {
        if (data?.question_status === "question_finished") {
          setScreenPlay(type);
        } else {
          setServiceData({
            ...serviceData,
            question_data: data?.data,
          });
        }
      } else {
        setMessageShow({
          visible: true,
          message: data?.message,
          type: "error",
        });
      }
    } else {
      setMessageShow({
        visible: true,
        message: "Please select service",
        type: "error",
      });
    }
  };

  const onPressEnd = async () => {
    const params = {
      selected_service_answer: serviceData?.question_data
        ? serviceData?.question_data
        : [],
      business_id: serviceData?.business_id,
      service_provide_type: requestQuote[0]?.business_type,
      business_type: 3,
      bookingDate: requestQuote[0]?.date,
      bookingTime: requestQuote[0]?.date,
      category_id: requestQuote[0]?.category_id,
      what_type_project_are_looking_start: requestQuote[0]?.category_id,
      latitude: requestQuote[0]?.latitude,
      longitude: requestQuote[0]?.longitude,
      address: requestQuote[0]?.location,
      username: requestQuote[0]?.first_name,
      email: requestQuote[0]?.email,
      phone: requestQuote[0]?.mobile_no,
      description: requestQuote[0]?.more_detail,
      booking_time: requestQuote[0]?.date,
      booking_date: requestQuote[0]?.time,
    };
    const { data } = await apiCall(
      "POST",
      apiEndPoints.SERVICE_BOOKING,
      params
    );
    if (data?.status === 200) {
      setMessageShow({
        visible: true,
        message: data?.message,
        type: "success",
      });
      navigation.goBack(null);
    } else {
      setMessageShow({
        visible: true,
        message: data?.message,
        type: "error",
      });
    }
  };
  return (
    <>
      <RequestQuoteView
        screenPlay={screenPlay}
        setScreenPlay={setScreenPlay}
        onPressBack={onPressBack}
        handleBack={() => navigation.goBack(null)}
        requestQuote={requestQuote}
        setRequestQuote={setRequestQuote}
        serviceData={serviceData}
        onPressNext={onPressNext}
        messageShow={messageShow}
        setMessageShow={setMessageShow}
        onPressEnd={onPressEnd}
      />
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
        onEndVisible={() => {
          setMessageShow({
            visible: false,
            message: "",
            type: "",
          });
        }}
      />
    </>
  );
};

export default RequestQuote;
