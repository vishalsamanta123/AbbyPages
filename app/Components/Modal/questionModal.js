import React from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import CommonStyles from "../../Utils/CommonStyles";
import Button from "../Button";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_BOLD,
  LIGHT_BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
} from "../../Utils/Constant";

const QuestionModal = (props) => {
  const {
    surringVisible,
    negativeResponse,
    positiveResponse,
    space,
    spaceFromTop,
    message,
    topMessage,
    positiveTxt,
    negativeTxt,
  } = props;
  return (
    <Modal animationType="slide" transparent={true} visible={surringVisible}>
      <View style={styles.modal}>
        {spaceFromTop ? <View style={{ flex: space ? space : 0.65 }} /> : null}
        <View style={styles.modalVw}>
          {topMessage ? (
            <Text style={styles.topMssgTxt}>{topMessage}</Text>
          ) : null}
          <Text style={styles.confrTxt}>{message}</Text>
          <View style={styles.modalBttnVw}>
            <Button
              style={styles.modalBttn}
              onPress={positiveResponse}
              buttonText={positiveTxt ? positiveTxt : "Yes"}
            />
            <Button
              style={styles.modalBttn}
              onPress={negativeResponse}
              buttonText={negativeTxt ? negativeTxt : "No"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default QuestionModal;
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalVw: {
    backgroundColor: WHITE_COLOR_CODE,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 30,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  topMssgTxt: {
    fontSize: 18,
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHT_BLACK_COLOR_CODE,
  },
  confrTxt: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: FONT_FAMILY_BOLD,
    color: LIGHT_BLACK_COLOR_CODE,
  },
  modalBttnVw: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
  },
  modalBttn: {
    width: "45%",
    marginHorizontal: 5,
    paddingVertical: 10,
  },
});
