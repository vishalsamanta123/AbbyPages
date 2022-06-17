import React, { Fragment, useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK_COLOR_CODE, FONT_FAMILY_REGULAR, WHITE_COLOR_CODE } from '../../Utils/Constant'
const Input = (props) => {
  const [isFocused, setIsfocused] = useState(true)
  const {
    autoCapitalize, autoFocus, keyboardType, multiline,
    placeholder, returnKeyType, value,
    onChangeText, textInputStyle,
    placeholderTextColor, containerStyle,
    InputType, numberOfLines, maxLength, labelStyleMain,secureTextEntry
  } = props;
  const {
    container, textInput, labelStyle
  } = style;
  const _handleFocus = () => {
    setIsfocused(false)
  }
  const _handleBlur = () => {
    value === '' && setIsfocused(true);
  }
  const onPressEye = () => {
    setShowPassword(!showPassword)
  }
  return (
    <Fragment>
      <View style={[container, containerStyle]}>
        {InputType === "withScroll" ?
          <Text
            style={[labelStyle, labelStyleMain, {
              top: isFocused ? value === '' ? 20 : 11 : -13,
              color: isFocused ? value === '' ? BLACK_COLOR_CODE : BLACK_COLOR_CODE : 'grey',
              backgroundColor: isFocused ? value === '' ? null : null : WHITE_COLOR_CODE,
              fontSize: isFocused ? value === '' ? 17 : 16 : 16,
            }]}>
            {placeholder}
          </Text>
          :
          null
        }
        <TextInput
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          onChangeText={(text) => onChangeText(text)}
          keyboardType="default"
          autoCapitalize={autoCapitalize}
          autoFocus={autoFocus}
          // keyboardType={"visible-password"}
          keyboardType={keyboardType}
          multiline={multiline}
          placeholder={InputType === null ? placeholder : null}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          value={value}
          placeholderTextColor={placeholderTextColor}
          selectionColor={"#a5a5a5"}
          style={[textInput, textInputStyle,
            {
              fontSize: isFocused ? value !== '' ? 18 : 18 : 19,
              marginTop: InputType == null ? 9 : 19
            }
          ]}
          onFocus={_handleFocus}
          onBlur={_handleBlur}
        />
      </View>
    </Fragment>
  );
}
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
    borderColor: '#d8d8d8',
    borderWidth: 1,
    // height:60,
    borderRadius: 9,
    margin: 8,
    marginLeft: 15,
    marginRight: 15,
  },
  labelStyle: {
    position: 'absolute',
    left: 25,
    justifyContent: "center",
    fontFamily: FONT_FAMILY_REGULAR,
  },
  textInput: {
    // fontSize: 18,
    paddingLeft: 20,
    marginLeft: 4,
    fontFamily: FONT_FAMILY_REGULAR,
  }
})
export default Input;