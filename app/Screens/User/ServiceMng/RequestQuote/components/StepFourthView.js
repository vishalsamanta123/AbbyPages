import { View } from "react-native";
import React, { useContext } from "react";
import CommonStyles from "../../../../../Utils/CommonStyles";
import ScaleText from "../../../../../Components/ScaleText";
import { RequestQutProviderContext } from "../../../../../Utils/UserContext";
import styles from "./styles";
import MainInput from "../../../../../Components/MainInput";
import MainButton from "../../../../../Components/MainButton";
import { COLORS } from "../../../../../Utils/Constant";

const StepFourthView = (props) => {
  const [requestQuote, setRequestQuote] = useContext(RequestQutProviderContext);
  return (
    <View style={CommonStyles.container}>
      <View style={[{ flex: 1, justifyContent: "center" }]}>
        <ScaleText style={styles.centermntxt}>
          In which near by location are you looking for professionals?
        </ScaleText>
        <View style={{ marginHorizontal: 18, marginVertical: 20 }}>
          <MainInput
            header={false}
            placeholder={
              "More details help businesses respond faster and more accurately."
            }
            multiline={true}
            onChangeText={(txt) => {
              const getObj = {
                ...requestQuote[0],
                more_detail: txt,
              };
              setRequestQuote([getObj]);
            }}
            value={
              requestQuote[0]?.more_detail ? requestQuote[0]?.more_detail : ""
            }
          />
        </View>
      </View>
      <View style={styles.btnvwe}>
        <MainButton
          buttonTxt="Next"
          backgroundColor={COLORS.YELLOW}
          txtColor={COLORS.WHITE}
          paddingHeight={10}
          onPressButton={() => {
            if (
              requestQuote[0]?.more_detail &&
              requestQuote[0]?.more_detail != ""
            ) {
              props.setScreenPlay(5);
            } else {
              props?.setMessageShow({
                visible: true,
                message: "Please enter more details",
                type: "error",
              });
            }
          }}
        />
      </View>
    </View>
  );
};

export default StepFourthView;
