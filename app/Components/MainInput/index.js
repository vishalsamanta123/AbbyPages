import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../Utils/Constant";
import ScaleText from "../ScaleText";

const MainInput = (props) => {
  const {
    height = 45,
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
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        selectionColor={COLORS.BLACK}
        onChangeText={(txt) => onChangeText(txt)}
        value={value}
      />
    </View>
  );
};

export default MainInput;
const styles = StyleSheet.create({
  mainCont: {
    marginVertical: 10,
    marginHorizontal: 12,
    borderWidth: Constants.standardBW,
    borderColor: COLORS.DARK_PURPLE,
    paddingHorizontal: 10,
  },
  headTxtVw: {
    position: "absolute",
    top: -12,
    marginLeft: 16,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 2,
  },
  headTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.DARK_PURPLE,
    fontSize: FONT_SIZE.smallL,
  },
  inputCon: {
    fontSize: FONT_SIZE.normal,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});
