import { TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import ScaleText from "../ScaleText";

const MainButton = (props) => {
  const { buttonTxt = "Button", onPressButton = () => {} } = props;
  return (
    <TouchableOpacity onPress={() => onPressButton()} style={styles.mainCont}>
      <ScaleText style={styles.buttonTxt}>{buttonTxt}</ScaleText>
    </TouchableOpacity>
  );
};

export default MainButton;
