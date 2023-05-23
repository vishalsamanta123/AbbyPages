import { TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import ScaleText from "../ScaleText";
import { COLORS, FONT_SIZE } from "../../Utils/Constant";
import { IconX } from "../Icons/Icon";

const MainButton = (props) => {
  const {
    buttonTxt = "Button",
    onPressButton = () => {},
    paddingHeight = 8,
    borderColor = COLORS.YELLOW,
    txtColor = COLORS.YELLOW,
    backgroundColor = null,
    borderRadius = 20,
    paddingHorizontal = 15,
    txtFontsize = FONT_SIZE.medium,
    marginTop = 0,
    rightImgName = "",
    rightImgSize = 22,
    rightImgOrigin = "",
    rightImgColor = COLORS.DARK_PURPLE,
    leftImgName = "",
    leftImgSize = 22,
    leftImgOrigin = "",
    leftImgColor = COLORS.DARK_PURPLE,
    leftImgBottom = 1,
    rightImgBottom = 1,
  } = props;
  return (
    <TouchableOpacity
      onPress={() => onPressButton()}
      style={[
        styles.mainCont,
        {
          paddingVertical: paddingHeight,
          borderColor: borderColor,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          paddingHorizontal: paddingHorizontal,
          marginTop: marginTop,
        },
      ]}
    >
      {leftImgOrigin !== "" && leftImgName !== "" ? (
        <View style={{ bottom: leftImgBottom, marginHorizontal: 5 }}>
          <IconX
            origin={leftImgOrigin}
            name={leftImgName}
            size={leftImgSize}
            color={leftImgColor}
          />
        </View>
      ) : null}
      <ScaleText
        style={[
          styles.buttonTxt,
          {
            color: txtColor,
            fontSize: txtFontsize,
          },
        ]}
      >
        {buttonTxt}
      </ScaleText>
      {rightImgOrigin !== "" && rightImgName !== "" ? (
        <View style={{ bottom: rightImgBottom, marginHorizontal: 5 }}>
          <IconX
            origin={rightImgOrigin}
            name={rightImgName}
            size={rightImgSize}
            color={rightImgColor}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default MainButton;
