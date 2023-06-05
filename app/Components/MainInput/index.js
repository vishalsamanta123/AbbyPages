import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../Utils/Constant";
import ScaleText from "../ScaleText";
import styles from "./styles";
import { IconX, ICON_TYPE } from "../Icons/Icon";

const MainInput = (props) => {
  const [secure, setSecure] = useState(true);
  const {
    height = 56,
    paddingVertical = 0,
    backgroundColor = COLORS.WHITE,
    placeholder = "Input",
    headTxtBackColor = COLORS.WHITE,
    headTxt = placeholder,
    placeholderTextColor = COLORS.COMMON,
    onChangeText = () => { },
    onFocus = () => { },
    onBlur = () => { },
    value = "",
    header = true,
    flex = 0,
    borderRadius = 18,
    rightImgName = "",
    rightImgSize = 22,
    rightImgOrigin = "",
    rightImgColor = COLORS.DARK_PURPLE,
    leftImgName = "",
    leftImgSize = 22,
    leftImgOrigin = "",
    leftImgColor = COLORS.DARK_PURPLE,
    keyboardType = "default",
    maxLength = 200,
    secureTextEntry = false,
    marginTop = 10,
    borderColor = COLORS.GREY,
    multiline = false,
    leftTextPlaceholder = "",
    marginHorizontal = 0
  } = props;
  return (
    <View
      style={[
        styles.mainCont,
        {
          flex: flex,
          paddingVertical: paddingVertical,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          marginTop: marginTop,
          borderColor: borderColor,
          marginHorizontal: marginHorizontal
        },
      ]}
    >
      {header && (
        <View
          style={[
            styles.headTxtVw,
            {
              backgroundColor: headTxtBackColor,
            },
          ]}
        >
          <ScaleText style={styles.headTxt}>{headTxt}</ScaleText>
        </View>
      )}
      {leftImgName != "" && leftImgOrigin != "" ? (
        <View style={styles.iconVw}>
          <IconX
            origin={leftImgOrigin}
            name={leftImgName}
            size={leftImgSize}
            color={leftImgColor}
          />
        </View>
      ) : null}
      {leftTextPlaceholder != "" ?
        <ScaleText style={styles.leftTextPlaceholderTxt}>$</ScaleText> : null
      }
      <TextInput
        style={[
          styles.inputCon,
          {
            height: multiline ? 80 : height,
            marginLeft: leftImgName != "" && leftImgOrigin != "" ? 0 : 8,
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        selectionColor={COLORS.BLACK}
        onChangeText={(txt) => onChangeText(txt)}
        value={value}
        maxLength={maxLength}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry && secure ? secure : false}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        multiline={multiline}
      />
      {rightImgName != "" && rightImgOrigin != "" ? (
        <View style={styles.iconVw}>
          <IconX
            origin={rightImgOrigin}
            name={rightImgName}
            size={rightImgSize}
            color={rightImgColor}
          />
        </View>
      ) : null}
      {secureTextEntry ? (
        <TouchableOpacity
          onPress={() => setSecure(secure ? false : true)}
          style={styles.iconVw}
        >
          <IconX
            origin={ICON_TYPE.FEATHER_ICONS}
            name={!secure ? "eye" : "eye-off"}
            size={22}
            color={COLORS.DARK_PURPLE}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default MainInput;
