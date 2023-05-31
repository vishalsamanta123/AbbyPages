import { View } from "react-native";
import React, { useContext } from "react";
import CommonStyles from "../../../../../Utils/CommonStyles";
import ScaleText from "../../../../../Components/ScaleText";
import styles from "./styles";
import AddressInput from "../../../../../Components/AddressInput";
import { RequestQutProviderContext } from "../../../../../Utils/UserContext";
import MainButton from "../../../../../Components/MainButton";
import { COLORS } from "../../../../../Utils/Constant";

const StepThirdView = (props) => {
  const [requestQuote, setRequestQuote] = useContext(RequestQutProviderContext);
  return (
    <View style={CommonStyles.container}>
      <View style={[{ flex: 1, justifyContent: "center" }]}>
        <ScaleText style={styles.centermntxt}>
          In Which locations are you looking for professionals?
        </ScaleText>
        <View style={{ marginHorizontal: 18, marginVertical: 20 }}>
          <AddressInput
            placeholder="Zip Code and Location"
            header={false}
            onPress={(data, details) => {
              const getObj = {
                ...requestQuote[0],
                location: data.description,
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              };
              setRequestQuote([getObj]);
            }}
            onChangeText={(txt) => {
              const getObj = {
                ...requestQuote[0],
                location: txt,
              };
              setRequestQuote([getObj]);
            }}
            value={requestQuote[0]?.location}
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
            if (requestQuote[0]?.location && requestQuote[0]?.location != "") {
              props.setScreenPlay(4);
            } else {
              props?.setMessageShow({
                visible: true,
                message: "Please select location",
                type: "error",
              });
            }
          }}
        />
      </View>
    </View>
  );
};

export default StepThirdView;
