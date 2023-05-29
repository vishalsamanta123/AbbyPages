import { View } from "react-native";
import React from "react";
import ScaleText from "../../../../../Components/ScaleText";
import CommonStyles from "../../../../../Utils/CommonStyles";
import MainHeader from "../../../../../Components/MainHeader";
import StepOneView from "./StepOneView";

const RequestQuoteView = (props) => {
  return (
    <View style={CommonStyles.container}>
      <MainHeader headerText={"Request a Quote"} />
      {props.screenPlay === 1 ? <StepOneView /> : null}
    </View>
  );
};

export default RequestQuoteView;
