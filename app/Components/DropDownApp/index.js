import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Images } from "../../Utils/images";
import { COLORS, FONT_FAMILY } from "../../Utils/Constant";
import ScaleText from "../ScaleText";

const DropDownApp = (props) => {
  const {
    DropDownText = "DropDown",
    onPress = () => {},
    onLongPress = () => {},
    DropDownImg,
    onPressArrow = () => {},
    arrowShow = false,
  } = props;
  return (
    <View style={styles.MainOptinsView}>
      <TouchableOpacity
        onPress={() => onPress()}
        onLongPress={() => onLongPress()}
        style={styles.rowVw}
      >
        <View style={styles.OptnsImgContain}>
          <Image
            source={DropDownImg}
            style={DropDownImg ? styles.dropDownImg : null}
          />
        </View>
        <ScaleText style={styles.OptnsMainText}>{DropDownText}</ScaleText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressArrow()}
        style={styles.OptnsImgContain}
      >
        <Image
          style={styles.OptnsMainImg}
          source={arrowShow ? Images.ARROW_UP_IMG : Images.ARROW_DOWN_IMG}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DropDownApp;
const styles = StyleSheet.create({
  OptionsConatin: {
    flex: 3,
    backgroundColor: COLORS.WHITE,
  },
  MainOptinsView: {
    flexDirection: "row",
    borderBottomWidth: 0.9,
    paddingLeft: 16,
    borderBottomColor: COLORS.COMMON,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  dropDownImg: {
    width: 24,
    height: 24,
    tintColor: COLORS.LIGHT_BLACK,
  },
  rowVw: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
  },
  OptnsImgContain: {
    alignItems: "center",
    paddingRight: 15,
  },
  OptnsMainText: {
    fontSize: 19,
    color: COLORS.LIGHT_BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  OptnsMainImg: {
    width: 20,
    height: 20,
    tintColor: COLORS.LIGHT_BLACK,
  },
});
