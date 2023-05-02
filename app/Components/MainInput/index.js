import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../Utils/Constant";

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
  } = props;
  return (
    <View
      style={[
        styles.mainCont,
        {
          paddingVertical: paddingVertical,
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <View style={styles.headTxtVw}>
        <Text style={styles.headTxt}>{headTxt}</Text>
      </View>
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
    borderRadius: 18,
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
