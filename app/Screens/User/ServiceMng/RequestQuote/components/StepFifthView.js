import React, { useContext } from "react";
import { View } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import ScaleText from "../../../../../Components/ScaleText";
import styles from "./styles";
import MainInput from "../../../../../Components/MainInput";
import { RequestQutProviderContext } from "../../../../../Utils/UserContext";
import MainButton from "../../../../../Components/MainButton";
import { COLORS, Regexs } from "../../../../../Utils/Constant";

const StepFifthView = (props) => {
  const [requestQuote, setRequestQuote] = useContext(RequestQutProviderContext);
  const handlevalidation = () => {
    if (requestQuote[0]?.email === "") {
      props?.setMessageShow({
        visible: true,
        message: "Please enter email",
        type: "error",
      });
      return false;
    } else if (Regexs.emailRegex.test(requestQuote[0]?.email) === false) {
      props?.setMessageShow({
        visible: true,
        message: "Please enter email correctly",
        type: "error",
      });
      return false;
    } else if (requestQuote[0]?.mobile_no === "") {
      props?.setMessageShow({
        visible: true,
        message: "Please enter mobile Number",
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
          Enter Email Address or Mobile No.
        </ScaleText>
        <ScaleText style={styles.subTxt}>
          You’ll get responses through abbypages here. Businesses will not see
          your contact information.
        </ScaleText>
        <View style={{ marginHorizontal: 18, marginTop: 20 }}>
          <MainInput
            header={false}
            placeholder={"Enter Email"}
            onChangeText={(txt) => {
              const getObj = {
                ...requestQuote[0],
                email: txt,
              };
              setRequestQuote([getObj]);
            }}
            value={requestQuote[0]?.email ? requestQuote[0]?.email : ""}
          />
          <MainInput
            header={false}
            placeholder={"Enter Mobile No."}
            onChangeText={(txt) => {
              const getObj = {
                ...requestQuote[0],
                mobile_no: txt,
              };
              setRequestQuote([getObj]);
            }}
            maxLength={10}
            keyboardType={"number-pad"}
            value={requestQuote[0]?.mobile_no ? requestQuote[0]?.mobile_no : ""}
          />
        </View>
        <ScaleText style={styles.smallTxt}>
          By proceeding, you agree to our Terms of Service and Privacy Policy.
        </ScaleText>
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
              props.setScreenPlay(6);
            }
          }}
        />
      </View>
    </View>
  );
};

export default StepFifthView;
