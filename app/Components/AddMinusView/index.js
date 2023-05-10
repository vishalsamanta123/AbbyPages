import { View } from "react-native";
import React from "react";
import InputSpinner from "react-native-input-spinner";
import { COLORS, FONT_FAMILY } from "../../Utils/Constant";
import styles from "./styles";

const AddMinusView = (props) => {
  const {
    value = 0,
    onPressAdd = () => {},
    onPressMinus = () => {},
    textColor = COLORS.WHITE,
    colorMax = COLORS.YELLOW,
    colorMin = COLORS.YELLOW,
    colorPress = COLORS.YELLOW,
    buttonPressTextColor = COLORS.YELLOW,
    buttonFontSize = 25,
    buttonFontFamily = FONT_FAMILY.REGULAR,
    minVal = 0,
    getMaxVal = 10,
    height = 30,
    width = "80%",
    steps = 1,
  } = props;
  return (
    <View style={{ marginVertical: 10 }}>
      <InputSpinner
        value={value}
        onIncrease={(value) => onPressAdd(value)}
        onDecrease={(value) => onPressMinus(value)}
        max={getMaxVal}
        step={steps}
        min={minVal}
        editable={false}
        rounded={false}
        height={height}
        width={width}
        textColor={textColor}
        colorMax={colorMax}
        colorMin={colorMin}
        colorPress={colorPress}
        buttonPressTextColor={buttonPressTextColor}
        buttonFontSize={buttonFontSize}
        buttonTextColor={COLORS.WHITE}
        inputStyle={styles.spinnerInput}
        buttonStyle={styles.addItemBttn}
        buttonFontFamily={buttonFontFamily}
        style={styles.spinnerVw}
      />
    </View>
  );
};

export default AddMinusView;
