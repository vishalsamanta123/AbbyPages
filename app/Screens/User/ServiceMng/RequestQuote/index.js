import React, { useState } from "react";
import RequestQuoteView from "./components/RequestQuoteView";

const RequestQuote = ({ navigation, route }) => {
  const [screenPlay, setScreenPlay] = useState(1);
  return (
    <RequestQuoteView screenPlay={screenPlay} setScreenPlay={setScreenPlay} />
  );
};

export default RequestQuote;
