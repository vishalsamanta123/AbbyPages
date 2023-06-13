import { TouchableOpacity, View, Image } from "react-native";
import React, { useContext } from "react";
import CommonStyles from "../../../../../Utils/CommonStyles";
import ScaleText from "../../../../../Components/ScaleText";
import styles from "./styles";
import MainButton from "../../../../../Components/MainButton";
import { COLORS, Constants } from "../../../../../Utils/Constant";
import { RequestQutProviderContext } from "../../../../../Utils/UserContext";
import FastImages from "../../../../../Components/FastImage";

const StepSecondView = (props) => {
  const [requestQuote, setRequestQuote] = useContext(RequestQutProviderContext);
  return (
    <View style={CommonStyles.container}>
      <View style={styles.centerVw}>
        <ScaleText style={styles.centermntxt}>
          What type of project are you looking to start ?
        </ScaleText>
        {props?.serviceData?.business_category?.length > 0 ? (
          <View style={styles.boxesCon}>
            {props?.serviceData?.business_category?.map((itm) => {
              const selectCat =
                requestQuote?.length > 0
                  ? requestQuote?.find(({ category_name }) => {
                      return category_name;
                    })
                  : false;
              return (
                <TouchableOpacity
                  onPress={() => {
                    const item = {
                      ...itm,
                      more_detail: "",
                      location: "",
                      latitude: "",
                      longitude: "",
                      email: "",
                      mobile_no: "",
                      first_name: "",
                      date: "",
                      time: "",
                      multiple: false,
                    };
                    setRequestQuote([item]);
                  }}
                  style={[
                    styles.boxesVw,
                    {
                      borderColor:
                        selectCat?.category_name === itm?.category_name
                          ? COLORS.YELLOW
                          : COLORS.COMMON2,
                      borderWidth:
                        selectCat?.category_name === itm?.category_name
                          ? Constants.standardBW
                          : Constants.normalBW,
                    },
                  ]}
                >
                  <FastImages
                    source={{ uri: itm?.category_image }}
                    style={{ width: 85, height: 85 }}
                  />
                  <ScaleText style={styles.boxesTxt}>
                    {itm?.category_name}
                  </ScaleText>
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
          onPressButton={() => props.onPressNext(3)}
        />
      </View>
    </View>
  );
};

export default StepSecondView;
