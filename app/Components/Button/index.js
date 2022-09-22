import React, { Fragment } from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  YELLOW_COLOR_CODE,
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
} from "../../Utils/Constant";
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
  } = props;
  const { button, buttonLabel, iconsVw } = styles;
  return (
    <Fragment>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={[button, style]}
      >
        {buttonText == "Continue with Facebook" ? (
          <Image
            style={{ width: 30, height: 30, right: 8 }}
            source={require("../../Assets/facebook_icon.png")}
          />
        ) : null}
        {buttonText == "Continue with Google" ? (
          <Image
            style={{ width: 30, height: 31, right: 8 }}
            source={require("../../Assets/google_icon.png")}
          />
        ) : null}
        {showIcon ? (
          <Image
            style={[iconsVw, { tintColor: tintColor }]}
            source={iconName}
          />
        ) : null}
        <Image source={LeftBtnImage} />
        <Text style={[buttonLabel, buttonLabelStyle]}>{buttonText}</Text>
        <Image source={RightBtnImage} />
      </TouchableOpacity>
    </Fragment>
  );
};
Button.Button = { buttonText: "Submit" };
const styles = StyleSheet.create({
  button: {
    backgroundColor: YELLOW_COLOR_CODE,
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    padding: 17,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: 18,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  iconsVw: {
    width: 18,
    height: 18,
    right: 8,
  },
});
export default Button;
