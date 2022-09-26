import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../../Components/Button";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";

const StepOneScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        leftImg={require("../../../Assets/close_window_icon.png")}
        HeaderText="1 of 8"
        RightImg={null}
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={styles.centermanimg}>
        <Image
          resizeMode="contain"
          style={styles.centerimgstye}
          source={require("../../../Assets/project_icon.png")}
        />
      </View>
      <View style={styles.centervwe}>
        <Text style={styles.centermntxt}>
          Share a few project details so we can get your an acurate Quote
        </Text>
      </View>
      <View style={styles.btnvwe}>
        <Button
          buttonText="Get Started"
          buttonLabelStyle={styles.startedbtntxt}
          onPress={props.onPressStepSecond}
        />
      </View>
    </View>
  );
};
export default StepOneScreen;
