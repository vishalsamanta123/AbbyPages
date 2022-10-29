import React from "react";
import { View, Text, Image, StatusBar, ScrollView } from "react-native";
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
const CashBackScreen = (props) => {
  return (
    <View style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText={"Cashback"}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <ScrollView>
        <View style={[styles.BoxContainer, { marginTop: 10 }]}>
          <View styl={CommonStyles.editPencilVw}>
            <Image
              style={{ tintColor: WHITE_COLOR_CODE }}
              source={Images.CHECKOUT_PAY_IMG} />
          </View>
          <Text style={styles.FreeSignUpText}>Free SignUp</Text>
          <Text style={styles.BoxTextMain}>Activate your credit or </Text>
          <Text style={styles.BoxTextMain}>debit cards.</Text>
        </View>
        <View style={[styles.BoxContainer, { marginTop: 10 }]}>
          <Image source={Images.DINEOUT_IMG} />
          <Text style={styles.FreeSignUpText}>Dine Out</Text>
          <Text style={styles.BoxTextMain}>
            Pay with your card at thousands
          </Text>
          <Text style={styles.BoxTextMain}>of participating restaurants.</Text>
        </View>
        <View style={[styles.BoxContainer, { marginTop: 10 }]}>
          <Image source={Images.CASHBACK_IMG} />
          <Text style={styles.FreeSignUpText}>Get Cash Back</Text>
          <Text style={styles.BoxTextMain}>Get upto 10% credit back to</Text>
          <Text style={styles.BoxTextMain}>your card's account.</Text>
        </View>
        <Button
          buttonText="Sign Up for Cash Back"
          onPress={props.onPressSignup}
          style={{ marginBottom: 10 }}
        />
      </ScrollView>
    </View>
  );
};
export default CashBackScreen;
