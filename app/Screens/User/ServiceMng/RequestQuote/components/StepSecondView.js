import { TouchableOpacity, View, Image } from "react-native";
import React from "react";
import CommonStyles from "../../../../../Utils/CommonStyles";
import ScaleText from "../../../../../Components/ScaleText";
import styles from "./styles";
import MainButton from "../../../../../Components/MainButton";
import { COLORS } from "../../../../../Utils/Constant";

const StepSecondView = (props) => {
  return (
    <View style={CommonStyles.container}>
      <View style={styles.centerVw}>
        <ScaleText style={styles.centermntxt}>
          What type of project are you looking to start ?
        </ScaleText>
        {props?.service?.business_category?.length > 0 ? (
          <View style={styles.boxesCon}>
            {props?.service?.business_category?.map((itm) => {
              return (
                <TouchableOpacity style={styles.boxesVw}>
                  <Image
                    source={{ uri: itm?.category_image }}
                    style={{ width: 75, height: 75 }}
                  />
                  <ScaleText style={styles.boxesTxt}>{itm?.category_name}</ScaleText>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
      </View>
      <View style={styles.btnvwe}>
        <MainButton
          buttonTxt="Next"
          backgroundColor={COLORS.YELLOW}
          txtColor={COLORS.WHITE}
          paddingHeight={10}
          onPressButton={() => props.setScreenPlay(2)}
        />
      </View>
    </View>
  );
};

export default StepSecondView;
