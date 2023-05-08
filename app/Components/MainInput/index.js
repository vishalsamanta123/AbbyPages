import { View, TextInput } from "react-native";
import React from "react";
import { COLORS } from "../../Utils/Constant";
import ScaleText from "../ScaleText";
import styles from "./styles";
import { IconX } from "../Icons/Icon";

const MainInput = (props) => {
  const {
    height = 48,
    paddingVertical = 0,
    backgroundColor = COLORS.WHITE,
    placeholder = "Input",
    headTxt = placeholder,
    placeholderTextColor = COLORS.COMMON,
    onChangeText = () => {},
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
        },
      ]}
    >
      {header && (
        <View style={styles.headTxtVw}>
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
      <TextInput
        style={[
          styles.inputCon,
          {
            height: height,
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
    </View>
  );
};

export default MainInput;
