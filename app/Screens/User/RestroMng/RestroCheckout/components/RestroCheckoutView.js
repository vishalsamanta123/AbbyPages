import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { COLORS } from "../../../../../Utils/Constant";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import MainHeader from "../../../../../Components/MainHeader";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import PageScroll from "../../../../../Components/PageScroll";
import MainInput from "../../../../../Components/MainInput";
import ScaleText from "../../../../../Components/ScaleText";
import MainButton from "../../../../../Components/MainButton";
import OrderSetting from "./OrderSetting";

const RestroCheckoutView = (props) => {
  const [restroCheckOut, setRestroCheckOut] = useState(false);
  const initialRegion = {
    latitude: props?.location?.latitude
      ? parseInt(props?.location?.latitude)
      : null,
    longitude: props?.location?.longitude
      ? parseInt(props?.location?.longitude)
      : null,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };
  const coordinate = {
    latitude: props?.location?.latitude
      ? parseInt(props?.location?.latitude)
      : null,
    longitude: props?.location?.longitude
      ? parseInt(props?.location?.longitude)
      : null,
  };

  return (
    <View style={CommonStyles.container}>
      <MainHeader headerText={"Checkout"} />
      <PageScroll
        bottomButton={false}
        contentContainerStyle={{ marginHorizontal: 12 }}
      >
        <View style={CommonStyles.straightCon}>
          <IconX
            origin={ICON_TYPE.EVIL_ICONS}
            name={"user"}
            color={COLORS.BLACK}
            size={35}
            paddingLeft={6}
          />
          <ScaleText style={styles.headTxt}>Checkout</ScaleText>
        </View>
        <View style={{ marginTop: 10, marginHorizontal: 5 }}>
          <MainInput
            borderRadius={20}
            height={54}
            borderColor={COLORS.BLACK}
            marginTop={15}
            onChangeText={(FirstName) =>
              props.setLocalUserData({
                ...props.localUserData,
                first_name: FirstName,
              })
            }
            value={props?.localUserData?.first_name}
            placeholder="First Name"
          />
          <MainInput
            borderRadius={20}
            height={54}
            borderColor={COLORS.BLACK}
            marginTop={15}
            onChangeText={(last_name) =>
              props.setLocalUserData({
                ...props.localUserData,
                last_name: last_name,
              })
            }
            value={props?.localUserData?.last_name}
            placeholder="Last Name"
          />
          <MainInput
            borderRadius={20}
            height={54}
            borderColor={COLORS.BLACK}
            marginTop={15}
            onChangeText={(email) =>
              props.setLocalUserData({
                ...props.localUserData,
                email: email,
              })
            }
            value={props?.localUserData?.email}
            placeholder="Email Address"
          />
          <MainInput
            borderRadius={20}
            height={54}
            borderColor={COLORS.BLACK}
            marginTop={15}
            onChangeText={(mobile) =>
              props.setLocalUserData({
                ...props.localUserData,
                mobile: mobile,
              })
            }
            value={props?.localUserData?.mobile}
            placeholder="Phone Number"
            maxLength={10}
            keyboardType={"phone-pad"}
          />
          <MainInput
            borderRadius={20}
            height={54}
            borderColor={COLORS.BLACK}
            marginTop={15}
            onChangeText={(order_description) =>
              props.setLocalUserData({
                ...props.localUserData,
                order_description: order_description,
              })
            }
            value={props?.localUserData?.order_description}
            placeholder="Description"
            multiline={true}
          />
        </View>
        <ScaleText style={styles.subTxt}>
          You'll receive text about your order. Contact info will be sent to
          Grubhub for order fulfillment.
        </ScaleText>
        <View style={styles.containerVw}>
          <IconX
            origin={ICON_TYPE.MATERIAL_ICONS}
            name={"payment"}
            size={28}
            color={COLORS.BLACK}
          />
          <ScaleText style={styles.subheadTxt}>Payment-Method</ScaleText>
        </View>
        <View style={styles.paymentMethodVw}>
          <TouchableOpacity
            onPress={() => props.onPressPaymentMethod()}
            style={CommonStyles.straightCon}
          >
            <IconX
              origin={ICON_TYPE.MATERIAL_ICONS}
              name={
                props?.localUserData?.order_payment_type === 2
                  ? "radio-button-checked"
                  : "radio-button-unchecked"
              }
              color={COLORS.YELLOW}
              size={24}
              paddingRight={10}
            />
            <ScaleText style={styles.subHeadTxt}>Online</ScaleText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.onPressPaymentMethod(
                props?.localUserData?.order_payment_type
              )
            }
            style={CommonStyles.straightCon}
          >
            <IconX
              origin={ICON_TYPE.MATERIAL_ICONS}
              name={
                props?.localUserData?.order_payment_type === 1
                  ? "radio-button-checked"
                  : "radio-button-unchecked"
              }
              color={COLORS.YELLOW}
              size={24}
              paddingRight={10}
              paddingLeft={10}
            />
            <ScaleText style={styles.subHeadTxt}>Cash On Delievery</ScaleText>
          </TouchableOpacity>
        </View>
        {props?.localUserData?.order_payment_type === 2 && (
          <View>
            <ScaleText style={[styles.subheadTxt, { marginVertical: 12 }]}>
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
        {/* {props.delivery_type === 1 && ( */}
        <>
          <View style={styles.containerVw}>
            <IconX
              origin={ICON_TYPE.ENTYPO}
              name={"location-pin"}
              size={26}
              color={COLORS.BLACK}
            />
            <ScaleText style={styles.subheadTxt}>
              Order-Delievery Address
            </ScaleText>
          </View>
          <View style={styles.smallTxtVw}>
            <ScaleText style={styles.smallTxt}>
              {props?.localUserData?.location}
            </ScaleText>
            <TouchableOpacity
              onPress={() => setRestroCheckOut(true)}
              style={{ marginTop: 4 }}
            >
              <ScaleText style={[styles.smallTxt, { color: COLORS.YELLOW }]}>
                Change Address
              </ScaleText>
            </TouchableOpacity>
          </View>
        </>
        {/* )} */}
        <View style={styles.containerVw}>
          <IconX
            origin={ICON_TYPE.MATERIAL_COMMUNITY}
            name={"timelapse"}
            size={24}
            paddingLeft={6}
            color={COLORS.BLACK}
          />
          <ScaleText style={styles.subheadTxt}>Scheduled</ScaleText>
        </View>
        <View style={styles.smallTxtVw}>
          <ScaleText style={styles.smallTxt}>
            {props?.localUserData?.date_time}
          </ScaleText>
          <TouchableOpacity
            onPress={() => setRestroCheckOut(true)}
            style={{ marginTop: 4 }}
          >
            <ScaleText style={[styles.smallTxt, { color: COLORS.YELLOW }]}>
              Change Time
            </ScaleText>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 16, marginVertical: 20 }}>
          <MainButton
            buttonTxt={"Continue"}
            paddingHeight={16}
            backgroundColor={COLORS.YELLOW}
            txtColor={COLORS.WHITE}
            onPressButton={() => props.onPressContinue()}
          />
        </View>
      </PageScroll>
      <OrderSetting
        visible={restroCheckOut}
        endVisible={() => setRestroCheckOut(false)}
        onPressAddress={(data) => {
          props.setLocalUserData({
            ...props.localUserData,
            latitude: data?.latitude,
            location: data?.location,
            longitude: data?.longitude,
          });
        }}
      />
    </View>
  );
};
export default RestroCheckoutView;
