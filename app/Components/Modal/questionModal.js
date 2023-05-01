import React from "react";
import { View, Modal, StyleSheet, TouchableOpacity, Image } from "react-native";
import Button from "../Button";
import { COLORS, FONT_FAMILY } from "../../Utils/Constant";
import { Images } from "../../Utils/images";
import ScaleText from "../ScaleText";

const QuestionModal = (props) => {
  const {
    modalType,
    surringVisible,
    negativeResponse,
    positiveResponse,
    cancelModel,
    space,
    spaceFromTop,
    message,
    topMessage,
    positiveTxt,
    negativeTxt,
  } = props;
  return (
    <>
      {modalType === "normal" ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={surringVisible}
        >
          <View style={styles.modal}>
            {spaceFromTop ? (
              <View style={{ flex: space ? space : 0.65 }} />
            ) : null}
            <View style={styles.normalModalVw}>
              {topMessage ? (
                <ScaleText style={styles.normalTopMssgTxt}>
                  {topMessage}
                </ScaleText>
              ) : null}
              <ScaleText style={styles.normalConfrTxt}>{message}</ScaleText>
              <View style={styles.normalModalBttnVw}>
                <Button
                  style={styles.modalBttn}
                  width={"45%"}
                  paddingHeight={10}
                  onPress={positiveResponse}
                  buttonText={positiveTxt ? positiveTxt : "Yes"}
                />
                <Button
                  style={styles.modalBttn}
                  width={"45%"}
                  paddingHeight={10}
                  onPress={negativeResponse}
                  buttonText={negativeTxt ? negativeTxt : "No"}
                />
              </View>
            </View>
          </View>
        </Modal>
      ) : (
        <Modal
          animationType="slide"
          transparent={true}
          visible={surringVisible}
        >
          <View style={styles.modal}>
            <View style={styles.modalVw}>
              <View style={styles.closeModalVw}>
                <TouchableOpacity onPress={cancelModel}>
                  <Image
                    style={{ width: 35, height: 35 }}
                    source={Images.CANCEL_IMG}
                  />
                </TouchableOpacity>
              </View>
              <ScaleText style={styles.topMssgTxt}>{topMessage}</ScaleText>
              <ScaleText style={styles.confrTxt}>{message}</ScaleText>
              <Button
                style={[styles.modalBttnVw, { marginTop: 20 }]}
                buttonLabelStyle={{ color: COLORS.GREY }}
                buttonText={positiveTxt}
                onPress={positiveResponse}
              />
              <Button
                style={styles.modalBttnVw}
                buttonLabelStyle={{ color: COLORS.GREY }}
                buttonText={negativeTxt}
                onPress={negativeResponse}
              />
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};
QuestionModal.defaultProps = {
  modalType: "normal",
  positiveResponse: "Yes",
  negativeTxt: "No",
};
export default QuestionModal;
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
  },
  normalModalVw: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 30,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  normalTopMssgTxt: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_BLACK,
  },
  normalConfrTxt: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.LIGHT_BLACK,
  },
  normalModalBttnVw: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
  },
  modalBttn: {
    width: "45%",
    marginHorizontal: 5,
    paddingVertical: 10,
  },

  //for second modal
  modalVw: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    marginHorizontal: 30,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  topMssgTxt: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.LIGHT_BLACK,
    textAlign: "center",
  },
  confrTxt: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_BLACK,
    marginTop: 8,
  },
  modalBttnVw: {
    backgroundColor: "transparent",
    borderWidth: 0.8,
    borderColor: COLORS.GREY,
    borderRadius: 2,
    marginVertical: 10,
  },
  closeModalVw: {
    position: "absolute",
    right: 0,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
});
