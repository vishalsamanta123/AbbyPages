import { TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import ScaleText from "../ScaleText";
import { COLORS, FONT_SIZE } from "../../Utils/Constant";

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
    </TouchableOpacity>
  );
};

export default MainButton;
