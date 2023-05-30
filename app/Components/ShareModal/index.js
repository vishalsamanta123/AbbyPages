import React, { useEffect } from "react";
import { StyleSheet, Modal, View, Image, Share } from "react-native";
import ScaleText from "../ScaleText";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../Utils/Constant";
import { Images } from "../../Utils/images";
import { handleSharePress } from "../../Utils/Globalfunctions";

const ShareModal = (props) => {
  const {
    visible,
    endVisible = () => {},
    topTxt = "",
    topImg = "",
    message = "Share this url",
    title = message,
  } = props;
  useEffect(() => {
    if (visible) {
      handleSharePress({
        message: message,
        title: title,
        urlName: topTxt,
        image: topImg,
      });
    }
  }, [props]);
  return (
    <>
      {/* <Modal
        visible={visible}
        onRequestClose={() => endVisible(false)}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.container}>
          <View style={{ flex: 0.5 }} />
          <View style={styles.mainCon}>
            <View style={styles.topContVw}>
              <Image
                source={topImg === "" ? Images.DEFAULT_IMG : { uri: topImg }}
                style={{ width: 40, height: 40, marginLeft: 20 }}
              />
              <View>
                <ScaleText style={styles.topTxtVw}>{topTxt}</ScaleText>
                <ScaleText style={styles.smallTxt}>{"AbbyPages.com"}</ScaleText>
              </View>
            </View>
          </View>
        </View>
      </Modal> */}
    </>
  );
};

export default ShareModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
  },
  mainCon: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.WHITE,
  },
  topContVw: {
    borderBottomWidth: Constants.normalBW,
    borderColor: COLORS.BORDER_LINE,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  topTxtVw: {
    fontSize: FONT_SIZE.largeM,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    marginLeft: 10,
  },
  smallTxt: {
    fontSize: FONT_SIZE.small,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    marginLeft: 10,
  },
});
