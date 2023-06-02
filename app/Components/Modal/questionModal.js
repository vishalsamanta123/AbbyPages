import React from "react";
import { View, Modal, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";
import { Images } from "../../Utils/images";
import ScaleText from "../ScaleText";
import MainButton from "../MainButton";
import { IconX, ICON_TYPE } from "../Icons/Icon";

const QuestionModal = (props) => {
  const {
    modalType = "normal",
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
    quesImg = false,
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
              <View style={{ flex: space ? space : 0.3 }} />
            ) : null}
            <View style={styles.normalModalVw}>
              {topMessage ? (
                <ScaleText style={styles.normalTopMssgTxt}>
                  {topMessage}
                </ScaleText>
              ) : null}
              <ScaleText style={styles.normalConfrTxt}>{message}</ScaleText>
              <View style={styles.normalModalBttnVw}>
                <MainButton
                  paddingHorizontal={40}
                  borderRadius={10}
                  backgroundColor={COLORS.YELLOW}
                  txtColor={COLORS.WHITE}
                  onPressButton={positiveResponse}
                  buttonTxt={positiveTxt ? positiveTxt : "Yes"}
                />
                <MainButton
                  paddingHorizontal={40}
                  borderRadius={10}
                  backgroundColor={COLORS.YELLOW}
                  txtColor={COLORS.WHITE}
                  onPressButton={negativeResponse}
                  buttonTxt={negativeTxt ? negativeTxt : "No"}
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
                  <IconX origin={ICON_TYPE.ENTYPO} name={"cross"} size={30} />
                </TouchableOpacity>
              </View>
              {quesImg ? (
                <Image
                  source={Images.QUES_IMG}
                  style={{ width: 45, height: 45, alignSelf: "center" }}
                />
              ) : null}
              {topMessage === "" ? (
                <ScaleText style={styles.topMssgTxt}>{topMessage}</ScaleText>
              ) : null}
              <ScaleText style={styles.confrTxt}>{message}</ScaleText>
              <View style={{ marginHorizontal: 16 }}>
                <MainButton
                  borderRadius={10}
                  onPressButton={positiveResponse}
                  buttonTxt={positiveTxt}
                  marginTop={14}
                  paddingHeight={14}
                  borderColor={COLORS.GREY}
                  txtColor={COLORS.GREY}
                />
                <MainButton
                  borderRadius={10}
                  onPressButton={negativeResponse}
                  buttonTxt={negativeTxt}
                  marginTop={14}
                  paddingHeight={14}
                  borderColor={COLORS.GREY}
                  txtColor={COLORS.GREY}
                />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};
QuestionModal.defaultProps = {
  modalType: "normal",
  negativeTxt: "No",
  positiveTxt: "Yes",
};
export default QuestionModal;
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    padding: 10,
  },
  normalModalVw: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 40,
    marginHorizontal: 24,
    paddingVertical: 16,
  },
  normalTopMssgTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_BLACK,
    textAlign: "center",
  },
  normalConfrTxt: {
    fontSize: FONT_SIZE.medium,
    textAlign: "center",
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.LIGHT_BLACK,
  },
  normalModalBttnVw: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
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
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.LIGHT_BLACK,
    textAlign: "center",
  },
  confrTxt: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_BLACK,
    marginTop: 10,
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
    paddingHorizontal: 2,
    marginBottom: 10,
  },
});
