import React, { useState } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import Header from "../../../../../Components/Header";
import Button from "../../../../../Components/Button";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import {
  Constants,
  FONT_FAMILY_REGULAR,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import Input from "../../../../../Components/Input";
import { Images } from "../../../../../Utils/images";
import MainHeader from "../../../../../Components/MainHeader";

const CheckOutScreen = (props) => {
  const screenlowerdata = (item) => {
    // return (
    // );
  };
  const _renderAddressList = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.setLocation([item]);
          props.setAddressListVisible(false);
        }}
        style={styles.dataCon}
      >
        <Text style={{ fontFamily: FONT_FAMILY_REGULAR, color: "#3a3838" }}>
          {item.location}
        </Text>
      </TouchableOpacity>
    );
  };
  const _renderCartItemList = (item) => {
    return (
      <View style={styles.dataCon}>
        <View style={{ flex: 2, justifyContent: "center" }}>
          <Image
            resizeMode="stretch"
            resizeMethod="auto"
            style={styles.posterimg}
            source={{ uri: item.product_image }}
          />
        </View>
        <View style={{ flex: 4 }}>
          <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
            <Text style={[styles.hdngtxt, { width: Constants.windowWidth / 2, fontSize: 15 }]}>
              {item.product_name}
            </Text>
            {/* <TouchableOpacity
              onPress={() => {
                props.setRemoveItem(true);
                props.setRemoveIndex(item);
              }}
            >
              <Image
                style={styles.icon}
                source={Images.CANCEL_IMG}
              />
            </TouchableOpacity> */}
          </View>
          <Text style={[styles.text, { fontSize: 12 }]}>
            {item.product_description}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={[styles.basiccon, { flex: 1 }]}>
              <Text style={[styles.hdngtxt, { width: null, fontSize: 15 }]}>
                {"Qty : " + item.quantity}
              </Text>
            </View>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={[styles.hdngtxt, { width: null, fontSize: 15 }]}>
                {"$ " +
                  Number(
                    parseFloat(item.price).toFixed(2) * item?.quantity
                  ).toLocaleString("en", {
                    minimumFractionDigits: 2,
                  })}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={CommonStyles.container}
    >
      <MainHeader
        headerText={"Checkout"}
        isSearch={false}
        loginButton={false}
        TxtMarginRight={"5%"}
        // onPressBack={() => onBackPress()}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <FlatList
          data={props?.shoppingCartData}
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => _renderCartItemList(item, index)}
        />
        <View style={styles.footerVw}>
          <View>
            <Text style={[styles.hdngtxt, styles.headingTxt]}>
              Delievery Address
            </Text>
            {props.location.length > 0 ? (
              <Text style={styles.locationTxt}>
                {props?.location && props?.location[0]?.location}
              </Text>
            ) : null}
            {props?.location.length > 0 ? (
              <TouchableOpacity
                onPress={() => props.setAddressListVisible(true)}
                style={styles.addressEditVw}
              >
                <Text style={styles.addressEditTxt}>Change Address</Text>
                <Image
                  style={styles.addressEditImg}
                  resizeMode="contain"
                  source={Images.EDIT_PENCIL_IMG}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => props.onPressAddAddress(true)}
                style={styles.addressEditVw}
              >
                <Text style={styles.addressEditTxt}>Add Address</Text>
                <Image
                  style={styles.addressEditImg}
                  resizeMode="contain"
                  source={Images.EDIT_PENCIL_IMG}
                />
              </TouchableOpacity>
            )}
            <Text style={[styles.hdngtxt, styles.headingTxt]}>
              Payment Method
            </Text>
            <View style={[styles.basiccon, styles.paymentCon]}>
              <TouchableOpacity
                onPress={() =>
                  props.setOrderPaymentType(1)
                }
                style={styles.basiccon}
              >
                <Image
                  style={{ height: 20, width: 20 }}
                  source={
                    props.order_payment_type === 1
                      ? Images.RADIO_CHECK_IMG
                      : Images.RADIO_UNCHECK_IMG
                  }
                />
                <Text style={[styles.hdngtxt, styles.paymentTxt]}>
                  Cash-on Delievery
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  props.setOrderPaymentType(2)
                }
                style={[styles.basiccon, { marginLeft: 10 }]}
              >
                <Image
                  style={{ height: 20, width: 20 }}
                  source={
                    props.order_payment_type === 2
                      ? Images.RADIO_CHECK_IMG
                      : Images.RADIO_UNCHECK_IMG
                  }
                />
                <Text style={[styles.hdngtxt, styles.paymentTxt]}>
                  Pay Online
                </Text>
              </TouchableOpacity>
            </View>
            {/* {!props.order_payment_type && (
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
            )} */}
          </View>
          <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
            <Text style={[styles.hdngtxt, styles.amountTxt]}>
              Original Price
            </Text>
            <Text style={[styles.hdngtxt, styles.amountTxt]}>
              ${" "}
              {Number(parseFloat(props.finalAmount).toFixed(2)).toLocaleString(
                "en",
                {
                  minimumFractionDigits: 2,
                }
              )}
            </Text>
          </View>
          <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
            <Text style={[styles.hdngtxt, styles.amountTxt]}>Offer</Text>
            <Text style={[styles.hdngtxt, styles.amountTxt]}>0.00</Text>
          </View>
          <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
            <Text style={[styles.hdngtxt, styles.amountTxt]}>Promocode</Text>
            <Text style={[styles.hdngtxt, styles.amountTxt]}>0.00</Text>
          </View>
          <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
            <Text style={[styles.hdngtxt, styles.amountTxt]}>
              Current Total Price
            </Text>
            <Text style={[styles.hdngtxt, styles.amountTxt]}>
              ${" "}
              {Number(parseFloat(props.finalAmount).toFixed(2)).toLocaleString(
                "en",
                {
                  minimumFractionDigits: 2,
                }
              )}
            </Text>
          </View>
          <Button
            buttonLabelStyle
            style={{ marginTop: 10, marginBottom: 10 }}
            buttonText="Continue"
            onPress={() => props.onPressContinue()}
          />
        </View>
      </ScrollView>
      <Dialog
        visible={props.addressListVisible}
        width={1}
        useNativeDriver={true}
        dialogAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        onTouchOutside={() => {
          props.setAddressListVisible(false);
        }}
      >
        <DialogContent>
          <View style={{ paddingTop: 10 }}>
            <FlatList
              data={props.locationList}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) => _renderAddressList(item, index)}
              ListFooterComponent={
                <View>
                  <Button
                    style={{ width: "50%", padding: 13 }}
                    buttonText="Add Address"
                    onPress={() => props.onPressAddAddress()}
                  />
                </View>
              }
            />
          </View>
        </DialogContent>
      </Dialog>
    </KeyboardAvoidingView>
  );
};
export default CheckOutScreen;
