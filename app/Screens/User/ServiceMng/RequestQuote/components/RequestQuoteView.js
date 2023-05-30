import { View } from "react-native";
import React, { useState } from "react";
import CommonStyles from "../../../../../Utils/CommonStyles";
import MainHeader from "../../../../../Components/MainHeader";
import StepOneView from "./StepOneView";
import MainButton from "../../../../../Components/MainButton";
import { COLORS } from "../../../../../Utils/Constant";
import QuestionModal from "../../../../../Components/Modal/questionModal";
import PageScroll from "../../../../../Components/PageScroll";
import StepSecondView from "./StepSecondView";
import styles from "./styles";

const RequestQuoteView = (props) => {
  const [almostDoneModal, setAlmostDoneModal] = useState(false);
  return (
    <View style={CommonStyles.container}>
      <MainHeader
        headerText={"Request a Quote"}
        onPressBack={props?.screenPlay > 1 ? () => props.onPressBack() : false}
      />
      <PageScroll>
        {props?.screenPlay === 1 ? (
          <StepOneView
            screenPlay={props.screenPlay}
            setScreenPlay={props.setScreenPlay}
            service={props.service}
          />
        ) : (
          <>
            {props?.screenPlay === 2 ? (
              <StepSecondView
                screenPlay={props.screenPlay}
                setScreenPlay={props.setScreenPlay}
                service={props.service}
              />
            ) : null}
          </>
        )}
        <View style={styles.btnvwe}>
          <MainButton
            buttonTxt={"Cancel"}
            backgroundColor={COLORS.COMMON}
            txtColor={COLORS.BLACK}
            paddingHeight={10}
            borderColor={COLORS.LIGHT_GREY}
            onPressButton={() => setAlmostDoneModal(true)}
          />
        </View>
      </PageScroll>
      <QuestionModal
        topMessage={"You're almost done"}
        message={"Are you sure you want to leave now and lose your progress"}
        surringVisible={almostDoneModal}
        quesImg={true}
        modalType={""}
        cancelModel={() => setAlmostDoneModal(false)}
        positiveTxt={"Yes Discard"}
        negativeTxt={"No, Continue Request"}
        positiveResponse={() => {
          setAlmostDoneModal(false);
          props.handleBack();
        }}
        negativeResponse={() => setAlmostDoneModal(false)}
      />
    </View>
  );
};

export default RequestQuoteView;
