import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./styles";
import Input from "../../../../Components/Input";
import Button from "../../../../Components/Button";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LIGHT_GREY_COLOR_CODE,
  BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";
const Addcartcashback = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <Header
        RightImg={null}
        HeaderText={"Cash Back"}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <ScrollView>
        <View style={styles.ContainerView}>
          <Text style={styles.MainLinkText}>
            Link your card and get cash back
          </Text>
        </View>
        <Input
          onChangeText={(CardNumber) => props.setCardNumber(CardNumber)}
          value={props.CardNumber}
          secureTextEntry={false}
          placeholder="Card Number"
          InputType="withScroll"
        />
        <Input
          onChangeText={(CVVNumber) => props.setCVVNumber(CVVNumber)}
          value={props.CVVNumber}
          secureTextEntry={false}
          placeholder="CVV2"
          InputType="withScroll"
        />
        <Input
          onChangeText={(Expiration) => props.setExpiration(Expiration)}
          value={props.Expiration}
          secureTextEntry={false}
          placeholder="Expiration"
          InputType="withScroll"
        />
        <Input
          onChangeText={(ZipNumber) => props.setZipNumber(ZipNumber)}
          value={props.ZipNumber}
          secureTextEntry={false}
          placeholder="Zip"
          InputType="withScroll"
        />
        <View style={styles.ContainerView}>
          <Text style={styles.WeTrustTxt}>We're trusted by</Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.CardImgeStyle}
              source={require("../../../Assets/extraImages/VisaCard.png")}
            />
            <Image
              style={styles.CardImgeStyle}
              source={require("../../../Assets/extraImages/mastercard.png")}
            />
            <Image
              style={styles.CardImgeStyle}
              source={require("../../../Assets/extraImages/mastercard.png")}
            />
          </View>
          <View style={styles.LockViewCOntain}>
            <Image source={Images.LOCK_IMG} />
            <Text style={styles.LockTextStyle}>
              256-bit-Bank-Level Encryption
            </Text>
          </View>
          <Text style={styles.ParaTextStyle}>
            By clicking on "link Card a. S.rt Earning", I agree that AbbyPages,
            Empyr (a service provider to AbbyPages), participating merchants and
            card networks (Visa, Mastercard and American Express) May use and
            share detaiLs of my transactions made at participating merchants to
            calcuLate points, redeem rewards a. otherwise faciLitate my
            participation in AbbyPages Cash Back, and that Abbypages may target
            offers that be of interest me, all as set forth in the{" "}
            <Text style={styles.YellowText}>Terms of Use </Text>
            and <Text style={styles.YellowText}>Privacy Policy</Text>. You may
            remove your card by clicking{" "}
            <Text style={styles.YellowText}>here</Text>. You can Learn more
            about the prograrn <Text style={styles.YellowText}>here</Text>.
          </Text>
        </View>
        <Button
          style={{ marginVertical: 5 }}
          buttonText="Link Card and Start Earning"
        />
        <View
          style={{
            paddingLeft: 25,
            paddingRight: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: LIGHT_GREY_COLOR_CODE,
              fontFamily: FONT_FAMILY_REGULAR,
              fontSize: 12,
              lineHeight: 20,
              paddingTop: 10,
            }}
          >
            You card is never charged. Its how we credit you cash back
          </Text>
          <Image
            style={{ width: 50, height: 28, margin: 8 }}
            source={Images.EMPTY_IMG}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Addcartcashback;
