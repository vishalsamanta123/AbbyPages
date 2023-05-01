import React, { Fragment, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { COLORS, FONT_FAMILY } from "../../Utils/Constant";
import ScaleText from "../ScaleText";

const Input = (props) => {
  const [isFocused, setIsfocused] = useState(true);
  const {
    autoCapitalize,
    autoFocus,
    keyboardType,
    multiline,
    placeholder,
    returnKeyType,
    value,
    onChangeText,
    textInputStyle,
    placeholderTextColor,
    containerStyle,
    InputType,
    numberOfLines,
    maxLength,
    labelStyleMain,
    secureTextEntry,
    selectionColor,
    copyText,
    onPressCoptTxt,
    onBlurPress = () => {},
    onFocusPress = () => {},
  } = props;
  const { container, textInput, labelStyle, copyTextTxt } = style;
  const _handleFocus = () => {
    setIsfocused(false);
    onFocusPress();
  };
  const _handleBlur = () => {
    value === "" && setIsfocused(true);
    onBlurPress();
  };
  const onPressEye = () => {
    // setShowPassword(!showPassword);
  };
  return (
    <Fragment>
      <View style={[container, containerStyle]}>
        {InputType === "withScroll" ? (
          <ScaleText
            style={[
              labelStyle,
              {
                top: isFocused
                  ? value === ""
                    ? 20
                    : Platform.OS === "ios"
                    ? 11
                    : 5
                  : -13,
                color: isFocused
                  ? value === ""
                    ? COLORS.BLACK
                    : COLORS.BLACK
                  : "grey",
                backgroundColor: isFocused
                  ? value === ""
                    ? null
                    : null
                  : COLORS.WHITE,
                fontSize: isFocused ? (value === "" ? 17 : 16) : 16,
              },
              labelStyleMain,
            ]}
          >
            {placeholder}
          </ScaleText>
        ) : null}
        <TextInput
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          onChangeText={(text) => onChangeText(text)}
          autoCapitalize={autoCapitalize}
          autoFocus={autoFocus}
          // keyboardType={"visible-password"}
          keyboardType={keyboardType}
          multiline={multiline}
          placeholder={InputType === null ? placeholder : null}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry === true ? secureTextEntry : false}
          value={value}
          placeholderTextColor={placeholderTextColor}
          selectionColor={selectionColor ? selectionColor : "#a5a5a5"}
          style={[
            textInput,
            {
              fontSize: isFocused ? (value !== "" ? 18 : 18) : 19,
              marginTop:
                InputType == null ? 9 : Platform.OS === "ios" ? 20 : 14,
              width: copyText ? "85%" : "100%",
              bottom: Platform.OS === "ios" ? 2 : 0,
            },
            textInputStyle,
          ]}
          onFocus={_handleFocus}
          onBlur={_handleBlur}
        />
        {copyText && (
          <TouchableOpacity
            style={{ marginHorizontal: 6 }}
            onPress={onPressCoptTxt}
          >
            <ScaleText style={copyTextTxt}>Copy</ScaleText>
          </TouchableOpacity>
        )}
      </View>
    </Fragment>
  );
};
Input.defaultProps = {
  placeholder: "Name",
  placeholderTextColor: "#000000",
  keyboardType: "default",
  value: "",
  InputHeading: "Email",
  InputType: "withScroll",
};
const style = StyleSheet.create({
  container: {
    paddingVertical: Platform.OS === "ios" ? 0 : 0,
    borderColor: "#d8d8d8",
    borderWidth: 1,
    // height:60,
    borderRadius: 9,
    margin: 8,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  labelStyle: {
    position: "absolute",
    left: 25,
    justifyContent: "center",
    fontFamily: FONT_FAMILY.REGULAR,
  },
  textInput: {
    width: "100%",
    // fontSize: 18,
    paddingLeft: 20,
    marginLeft: 4,
    fontFamily: FONT_FAMILY.REGULAR,
    paddingVertical: 12,
  },
  copyTextTxt: {
    fontSize: 13,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});
export default Input;
