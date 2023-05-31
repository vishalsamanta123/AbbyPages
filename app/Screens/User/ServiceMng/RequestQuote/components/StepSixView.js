import React, { useContext } from "react";
import { View } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import ScaleText from "../../../../../Components/ScaleText";
import { RequestQutProviderContext } from "../../../../../Utils/UserContext";
import styles from "./styles";
import MainInput from "../../../../../Components/MainInput";
import DateTimeModal from "../../../../../Components/DateTimeModal";
import { ICON_TYPE } from "../../../../../Components/Icons/Icon";
import { COLORS, FONT_SIZE } from "../../../../../Utils/Constant";
import MainButton from "../../../../../Components/MainButton";

const StepSixView = (props) => {
  const [requestQuote, setRequestQuote] = useContext(RequestQutProviderContext);

  const handlevalidation = () => {
    if (requestQuote[0]?.first_name === "") {
      props?.setMessageShow({
        visible: true,
        message: "Please enter First name",
        type: "error",
      });
      return false;
    } else if (requestQuote[0]?.date === "") {
      props?.setMessageShow({
        visible: true,
        message: "Please select date",
        type: "error",
      });
      return false;
    } else if (requestQuote[0]?.time === "") {
      props?.setMessageShow({
        visible: true,
        message: "Please select time",
        type: "error",
      });
      return false;
    }
    return true;
  };
  return (
    <View style={CommonStyles.container}>
      <View style={[{ flex: 1, justifyContent: "center" }]}>
        <ScaleText style={styles.centermntxt}>
          What is your name, Date & Time ?
        </ScaleText>
        <View style={{ marginHorizontal: 18, marginTop: 20 }}>
          <MainInput
            header={false}
            placeholder={"First Name"}
            onChangeText={(txt) => {
              const getObj = {
                ...requestQuote[0],
                first_name: txt,
              };
              setRequestQuote([getObj]);
            }}
            value={
              requestQuote[0]?.first_name ? requestQuote[0]?.first_name : ""
            }
          />
          <View style={CommonStyles.straightCon}>
            <DateTimeModal
              mode={"date"}
              flex={1}
              marginHorizontal={5}
              header={false}
              placeholder={"Date"}
              rightImgOrigin={ICON_TYPE.Fontisto}
              rightImgName={"date"}
              rightImgSize={16}
              fontSize={FONT_SIZE.smallL}
              value={requestQuote[0]?.date ? requestQuote[0]?.date : ""}
              onPressokButton={(data) => {
                const getObj = {
                  ...requestQuote[0],
                  date: data,
                };
                setRequestQuote([getObj]);
              }}
            />
            <DateTimeModal
              mode={"time"}
              flex={1}
              marginHorizontal={5}
              header={false}
              placeholder={"Time"}
              rightImgSize={18}
              fontSize={FONT_SIZE.smallL}
              rightImgOrigin={ICON_TYPE.ICONICONS}
              rightImgName={"time-outline"}
              value={requestQuote[0]?.time ? requestQuote[0]?.time : ""}
              onPressokButton={(data) => {
                const getObj = {
                  ...requestQuote[0],
                  time: data,
                };
                setRequestQuote([getObj]);
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.btnvwe}>
        <MainButton
          buttonTxt="Next"
          backgroundColor={COLORS.YELLOW}
          txtColor={COLORS.WHITE}
          paddingHeight={10}
          onPressButton={() => {
            const valid = handlevalidation();
            if (valid) {
              props.setScreenPlay(7);
            }
          }}
        />
      </View>
    </View>
  );
};

export default StepSixView;
