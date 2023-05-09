import { TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import ScaleText from "../ScaleText";
import { COLORS } from "../../Utils/Constant";

const MainButton = (props) => {
  const {
    buttonTxt = "Button",
    onPressButton = () => {},
    paddingHeight = 6,
    borderColor = COLORS.LIGHT_GREY,
    txtColor = COLORS.BLACK,
  } = props;
  return (
    <TouchableOpacity
      onPress={() => onPressButton()}
      style={[
        styles.mainCont,
        {
          paddingVertical: paddingHeight,
          borderColor: borderColor,
        },
      ]}
    >
      <ScaleText
        style={[
          styles.buttonTxt,
          {
            color: txtColor,
          },
        ]}
      >
        {buttonTxt}
      </ScaleText>
    </TouchableOpacity>
  );
};

export default MainButton;
