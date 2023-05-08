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
      <TextInput
        style={[
          styles.inputCon,
          {
            height: height,
            width: rightImgName != "" && rightImgOrigin != "" ? "92%" : null,
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        selectionColor={COLORS.BLACK}
        onChangeText={(txt) => onChangeText(txt)}
        value={value}
      />
      {rightImgName != "" && rightImgOrigin != "" ? (
        <View style={{ paddingHorizontal: 5 }}>
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
