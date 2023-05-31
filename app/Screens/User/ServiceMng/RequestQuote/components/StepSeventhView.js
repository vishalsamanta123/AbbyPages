import { TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import ScaleText from "../../../../../Components/ScaleText";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import { RequestQutProviderContext } from "../../../../../Utils/UserContext";
import { COLORS } from "../../../../../Utils/Constant";
import MainButton from "../../../../../Components/MainButton";

const StepSeventhView = (props) => {
  const [requestQuote, setRequestQuote] = useContext(RequestQutProviderContext);
  return (
    <View style={CommonStyles.container}>
      <View style={[{ flex: 1, justifyContent: "center" }]}>
        <ScaleText style={styles.centermntxt}>
          Would you like to compare quotes from similar businesses?
        </ScaleText>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <ScaleText style={styles.suggstTxt}>
            You can share your project details with other recommended businesses
            to help choose the one that's right for you.
          </ScaleText>
          <TouchableOpacity
            onPress={() => {
              const getObj = {
                ...requestQuote[0],
                multiple: !requestQuote[0]?.multiple,
              };
              setRequestQuote([getObj]);
            }}
            style={CommonStyles.straightCon}
          >
            <IconX
              origin={ICON_TYPE.MATERIAL_ICONS}
              name={
                requestQuote[0]?.multiple
                  ? "radio-button-checked"
                  : "radio-button-unchecked"
              }
              color={requestQuote[0]?.multiple ? COLORS.YELLOW : COLORS.BLACK}
              size={24}
              paddingRight={8}
            />
            <ScaleText
              style={[styles.subTxt, { marginTop: 0, textAlign: "left" }]}
            >
              Yes, get multiple quotes
            </ScaleText>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btnvwe}>
        <MainButton
          buttonTxt="Next"
          backgroundColor={COLORS.YELLOW}
          txtColor={COLORS.WHITE}
          paddingHeight={10}
          onPressButton={() => props.onPressEnd()}
        />
      </View>
    </View>
  );
};

export default StepSeventhView;
