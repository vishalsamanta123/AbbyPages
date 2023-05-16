import { TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import ScaleText from "../ScaleText";
import { COLORS, FONT_SIZE } from "../../Utils/Constant";

const MainButton = (props) => {
  const {
    buttonTxt = "Button",
    onPressButton = () => {},
    paddingHeight = 6,
    borderColor = COLORS.YELLOW,
    txtColor = COLORS.YELLOW,
    backgroundColor = null,
    borderRadius = 20,
    paddingHorizontal = 15,
    txtFontsize = FONT_SIZE.medium
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
