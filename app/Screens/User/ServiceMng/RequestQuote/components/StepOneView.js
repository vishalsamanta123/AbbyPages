import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { Images } from "../../../../../Utils/images";
import ScaleText from "../../../../../Components/ScaleText";
import MainButton from "../../../../../Components/MainButton";
import { COLORS } from "../../../../../Utils/Constant";
import CommonStyles from "../../../../../Utils/CommonStyles";

const StepOneView = (props) => {
  return (
    <View style={CommonStyles.container}>
      <View style={styles.centermanimg}>
        <Image
          resizeMode="contain"
          style={styles.centerimgstye}
          source={Images.PROJECT_IMG}
        />
      </View>
      <View style={styles.centervwe}>
        <ScaleText style={styles.centermntxt}>
          Share a few project details so we can get your an acurate Quote
        </ScaleText>
      </View>
      <View style={styles.btnvwe}>
        <MainButton
          buttonTxt="Get Started"
          backgroundColor={COLORS.YELLOW}
          txtColor={COLORS.WHITE}
          //   onPressButton={() => props.onPressStepSecond()}
        />
      </View>
    </View>
  );
};

export default StepOneView;
