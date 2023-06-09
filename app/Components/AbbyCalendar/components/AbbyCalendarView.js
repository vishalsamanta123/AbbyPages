import { Modal, View } from "react-native";
import React from "react";
import CommonStyles from "../../../Utils/CommonStyles";
import ScaleText from "../../../Components/ScaleText";
import style from "../../MainButton/styles";
import styles from "./styles";
import MainHeader from "../../MainHeader";
import { COLORS } from "../../../Utils/Constant";

const AbbyCalendarView = (props) => {
  return (
    <Modal
      onRequestClose={() => props.endVisible(false)}
      visible={props.visible}
      transparent
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <ScaleText>AbbyPages</ScaleText>
        </View>
      </View>
    </Modal>
  );
};

export default AbbyCalendarView;
