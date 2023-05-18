import React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
  Platform,
} from "react-native";
import Header from "../../../../../Components/Header";
import CommonStyles from "../../../../../Utils/CommonStyles";
import Input from "../../../../../Components/Input";
import Button from "../../../../../Components/Button";
import styles from "./styles";
import {
  GREY_COLOR_CODE,
  YELLOW_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import { CardField } from "@stripe/stripe-react-native";
import MainHeader from "../../../../../Components/MainHeader";
const ConfirmOrder = (props) => {
  console.log("🚀 ~ file: ConfirmOrder.js:176 ~ props?.location:", props?.location)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding' : null}
      style={[CommonStyles.container]}>
      {/* <Header
        RightImg={Images.TRASH_IMG}
        HeaderText={" Confirm Order "}
        headerSecondText={false}
        onPress={() => props.setAllDelete(true)}
        logoImg={false}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
      /> */}
       <MainHeader
        headerText={"Confirm Order"}
        isSearch={false}
        loginButton={false}
        TxtMarginRight={"5%"}
        // onPressBack={() => onBackPress()}
      />
      <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
        <ScrollView>
          <Input
            value={props?.localUserData?.first_name}
            onChangeText={(val) =>
              props.setLocalUserData({
                ...props.localUserData,
                first_name: val,
              })
            }
            labelStyleMain={{
              color: GREY_COLOR_CODE,
              backgroundColor: "#f2f2f2",
            }}
            placeholderTextColor={GREY_COLOR_CODE}
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
            placeholderTextColor={GREY_COLOR_CODE}
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
            placeholderTextColor={GREY_COLOR_CODE}
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
            placeholderTextColor={GREY_COLOR_CODE}
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
            placeholderTextColor={GREY_COLOR_CODE}
            placeholder={"Description"}
            containerStyle={{ backgroundColor: "#f2f2f2" }}
          />
          <View style={styles.TextInputView}>
            <Text style={styles.FirsNameTxt}>Payment Method</Text>
            <Text style={styles.NameTextStyle}>
              {props?.order_payment_type === 1
                ? "Cash On Delievery"
                : "Pay Online"}
            </Text>
          </View>
          {props.order_payment_type === 2&& (
              <View>
                <Text style={[styles.TakeOutText, styles.cardDetailsTxt]}>
                  Enter Card Details
                </Text>
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
            <Text style={styles.FirsNameTxt}>Address</Text>
            {props?.location && (
              <Text style={styles.NameTextStyle}>
                {props?.location[0]?.location}
              </Text>
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
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ConfirmOrder;
