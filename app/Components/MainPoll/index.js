import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import ScaleText from "../ScaleText";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import { COLORS } from "../../Utils/Constant";

const MainPoll = (props) => {
  const [option, setOption] = useState("");
  const {
    pollType = "",
    onPressButton = () => {},
    value = "",
    checkColor = COLORS.LIGHT_GREY,
    unCheckColor = COLORS.LIGHT_GREY,
  } = props;
  return (
    <>
      {pollType === "" ? (
        <View style={styles.columCon}>
          <TouchableOpacity
            onPress={() => {
              onPressButton(1);
              setOption("check");
            }}
            style={styles.container}
          >
            <IconX
              origin={ICON_TYPE.MATERIAL_ICONS}
              name={
                value === "check" || option === "check"
                  ? "radio-button-checked"
                  : "radio-button-unchecked"
              }
              color={checkColor}
              size={24}
            />
            <ScaleText style={styles.optionTxt}>Yes</ScaleText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onPressButton(2);
              setOption("uncheck");
            }}
            style={styles.container}
          >
            <IconX
              origin={ICON_TYPE.MATERIAL_ICONS}
              name={
                value === "uncheck" || option === "uncheck"
                  ? "radio-button-checked"
                  : "radio-button-unchecked"
              }
              color={unCheckColor}
              size={24}
            />
            <ScaleText style={styles.optionTxt}>No</ScaleText>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.rowCon}>
          <TouchableOpacity
            onPress={() => {
              onPressButton(1);
              setOption("check");
            }}
            style={styles.container}
          >
            <IconX
              origin={ICON_TYPE.MATERIAL_ICONS}
              name={
                value === "check" || option === "check"
                  ? "radio-button-checked"
                  : "radio-button-unchecked"
              }
              color={checkColor}
              size={24}
            />
            <ScaleText style={styles.optionTxt}>Yes</ScaleText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onPressButton(2);
              setOption("uncheck");
            }}
            style={styles.container}
          >
            <IconX
              origin={ICON_TYPE.MATERIAL_ICONS}
              name={
                value === "uncheck" || option === "uncheck"
                  ? "radio-button-checked"
                  : "radio-button-unchecked"
              }
              color={unCheckColor}
              size={24}
            />
            <ScaleText style={styles.optionTxt}>No</ScaleText>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default MainPoll;
