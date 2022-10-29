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
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import { Images } from "../../../Utils/images";

const StepOneScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        leftImg={Images.CANCEL_IMG}
        HeaderText="1 of 5"
        RightImg={null}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={styles.centermanimg}>
        <Image
          resizeMode="contain"
          style={styles.centerimgstye}
          source={Images.PROJECT_IMG}
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
