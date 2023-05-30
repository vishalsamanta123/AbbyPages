import React, { useContext, useState, useEffect } from "react";
import { ServiceProviderContextQueAnsData } from "../../../../Utils/UserContext";
import RequestQuoteView from "./components/RequestQuoteView";

const RequestQuote = ({ navigation, route }) => {
  const { detail = {} } = route?.params || { detail: {} };
  const [screenPlay, setScreenPlay] = useState(1);
  const [service, setService] = useState({});
  const [serviceProviderQueAnsData, setServiceProviderQueAnsData] = useContext(
    ServiceProviderContextQueAnsData
  );
  useEffect(() => {
    setScreenPlay(1);
    setService(detail);
  }, [navigation, detail]);

  const onPressBack = () => {
    setScreenPlay(screenPlay - 1);
  };
  return (
    <RequestQuoteView
      screenPlay={screenPlay}
      setScreenPlay={setScreenPlay}
      onPressBack={onPressBack}
      handleBack={() => navigation.goBack(null)}
      serviceProviderQueAnsData={serviceProviderQueAnsData}
      setServiceProviderQueAnsData={setServiceProviderQueAnsData}
      service={service}
    />
  );
};

export default RequestQuote;
