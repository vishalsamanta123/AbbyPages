import React from "react";
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
  Platform,
} from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import Input from "../../../../../Components/Input";
import Button from "../../../../../Components/Button";
import styles from "./styles";
import {
  COLORS,
} from "../../../../../Utils/Constant";
import { CardField } from "@stripe/stripe-react-native";
import MainHeader from "../../../../../Components/MainHeader";
import ScaleText from "../../../../../Components/ScaleText";
import PageScroll from "../../../../../Components/PageScroll";
const ConfirmOrder = (props) => {
  console.log(
    "🚀 ~ file: ConfirmOrder.js:176 ~ props?.location:",
    props?.location
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <MainHeader
        headerText={"Confirm Order"}
        isSearch={false}
        loginButton={false}
        TxtMarginRight={"5%"}
      />
      <View style={[CommonStyles.body, { backgroundColor: COLORS.WHITE }]}>
        <PageScroll>
          <Input
            value={props?.localUserData?.first_name}
            onChangeText={(val) =>
              props.setLocalUserData({
                ...props.localUserData,
                first_name: val,
              })
            }
            labelStyleMain={{
              color: COLORS.GREY,
              backgroundColor: "#f2f2f2",
            }}
            placeholderTextColor={COLORS.GREY}
            placeholder={"First Name"}
            containerStyle={{ backgroundColor: "#f2f2f2" }}
          />
          <Input
            value={props?.localUserData?.last_name}
            onChangeText={(val) =>
              props.setLocalUserData({
                ...props.localUserData,
                last_name: val,
              })
            }
            placeholderTextColor={COLORS.GREY}
            placeholder={"Last Name"}
            containerStyle={{ backgroundColor: "#f2f2f2" }}
          />
          <Input
            value={props?.localUserData?.email}
            onChangeText={(val) =>
              props.setLocalUserData({
                ...props.localUserData,
                email: val,
              })
            }
            placeholderTextColor={COLORS.GREY}
            placeholder={"Email"}
            containerStyle={{ backgroundColor: "#f2f2f2" }}
          />
          <Input
            value={props?.localUserData?.mobile}
            onChangeText={(val) =>
              props.setLocalUserData({
                ...props.localUserData,
                mobile: val,
              })
            }
            placeholderTextColor={COLORS.GREY}
            placeholder={"Phone"}
            keyboardType={"number-pad"}
            maxLength={10}
            containerStyle={{ backgroundColor: "#f2f2f2" }}
          />
          <Input
            value={props?.localUserData?.description}
            onChangeText={(val) =>
              props.setLocalUserData({
                ...props.localUserData,
                description: val,
              })
            }
            placeholderTextColor={COLORS.GREY}
            placeholder={"Description"}
            containerStyle={{ backgroundColor: "#f2f2f2" }}
          />
          <View style={styles.TextInputView}>
            <ScaleText style={styles.FirsNameTxt}>Payment Method</ScaleText>
            <ScaleText style={styles.NameTextStyle}>
              {props?.order_payment_type === 1
                ? "Cash On Delievery"
                : "Pay Online"}
            </ScaleText>
          </View>
          {props.order_payment_type === 2 && (
            <View>
              <ScaleText style={[styles.TakeOutText, styles.cardDetailsTxt]}>
                Enter Card Details
              </ScaleText>
              <CardField
                postalCodeEnabled={true}
                placeholders={{
                  number: "Number",
                  expiration: "Expiry",
                  cvc: "Cvv",
                  postalCode: "ZipCode",
                }}
                style={styles.cardStyleVw}
                cardStyle={styles.cardStyle}
                onCardChange={(cardDetails) => {
                  props.setOnlineDetail({
                    ...props.onlineDetail,
                    brand: cardDetails.brand,
                    expiryMonth: cardDetails.expiryMonth,
                    expiryYear: cardDetails.expiryYear,
                    last4: cardDetails.last4,
                    postalCode: cardDetails.postalCode,
                    validCVC: cardDetails.validCVC,
                    validExpiryDate: cardDetails.validExpiryDate,
                    validNumber: cardDetails.validNumber,
                  });
                }}
              />
            </View>
          )}
          <View style={styles.TextInputView}>
            <ScaleText style={styles.FirsNameTxt}>Address</ScaleText>
            {props?.location && (
              <ScaleText style={styles.NameTextStyle}>
                {props?.location[0]?.location}
              </ScaleText>
            )}
          </View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={props.shoppingCartData}
            renderItem={({ item, index }) =>
              props._handleConfirmOrder(item, index)
            }
          />
          <View style={styles.COnfirmBtnView}>
            <Button onPress={() => props.confirmPress()} buttonText="Confirm" />
          </View>
        </PageScroll>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ConfirmOrder;
