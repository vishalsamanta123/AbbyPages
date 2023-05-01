import React, { Fragment } from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { COLORS, FONT_FAMILY } from "../../Utils/Constant";
import ScaleText from "../ScaleText";

const Button = (props) => {
  const {
    style,
    onPress,
    buttonText,
    LeftBtnImage,
    RightBtnImage,
    buttonLabelStyle,
    showIcon,
    tintColor,
    iconName,
    width = "90%",
    buttonTxtColor = COLORS.BLACK,
    fontSize = 18,
    paddingHeight = 17,
  } = props;
  const { button, buttonLabel, iconsVw } = styles;
  return (
    <Fragment>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={[
          button,
          style,
          {
            width: width,
            paddingVertical: paddingHeight,
          },
        ]}
      >
        {showIcon ? (
          <Image
            style={[iconsVw, { tintColor: tintColor }]}
            source={iconName}
          />
        ) : null}
        <Image source={LeftBtnImage} />
        <ScaleText
          style={[
            buttonLabel,
            buttonLabelStyle,
            {
              color: buttonTxtColor,
              fontSize: fontSize,
            },
          ]}
        >
          {buttonText}
        </ScaleText>
        <Image source={RightBtnImage} />
      </TouchableOpacity>
    </Fragment>
  );
};
Button.Button = { buttonText: "Submit" };

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.YELLOW,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    padding: 17,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  iconsVw: {
    width: 18,
    height: 18,
    right: 8,
  },
});
export default Button;
