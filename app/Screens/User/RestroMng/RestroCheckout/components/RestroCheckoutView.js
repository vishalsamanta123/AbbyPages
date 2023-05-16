import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import styles from "./styles";
import Input from "../../../../../Components/Input";
import Header from "../../../../../Components/Header";
import Button from "../../../../../Components/Button";
import CommonStyles from "../../../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  COLORS,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import { Images } from "../../../../../Utils/images";
import MainHeader from "../../../../../Components/MainHeader";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import PageScroll from "../../../../../Components/PageScroll";
import MainInput from "../../../../../Components/MainInput";

const RestroCheckoutView = (props) => {
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
      <PageScroll contentContainerStyle={{ marginHorizontal: 12 }}>
        <View style={CommonStyles.straightCon}>
          <IconX
            origin={ICON_TYPE.EVIL_ICONS}
            name={"user"}
            color={COLORS.BLACK}
            size={35}
            paddingLeft={6}
          />
          <Text style={styles.CheckoutText}>Checkout</Text>
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
        <View style={styles.ParaViewStyle}>
          <Text style={styles.ParaViewText}>
            You'll receive text about your order. Contact info will be sent to
            Grubhub for order fulfillment.
          </Text>
        </View>
        <View style={[styles.CheckOutView, { alignItems: "center" }]}>
          <Image source={Images.CHECKOUT_PAY_IMG} />
          <Text style={styles.TakeOutText}>Payment-Method</Text>
        </View>
        <View style={styles.paymentMethodVw}>
          <TouchableOpacity
            onPress={() => props.onPressPaymentMethod()}
            style={[styles.CheckOutView, { paddingTop: 5 }]}
          >
            <Image
              style={[{ marginRight: 5 }]}
              source={
                props?.localUserData?.order_payment_type === 2
                  ? Images.CHECK_IMG
                  : Images.UNCHECK_IMG
              }
            />
            <Text>Online</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.onPressPaymentMethod(
                props?.localUserData?.order_payment_type
              )
            }
            style={[styles.CheckOutView, { paddingTop: 5 }]}
          >
            <Image
              style={[{ marginRight: 5 }]}
              source={
                props?.localUserData?.order_payment_type === 1
                  ? Images.CHECK_IMG
                  : Images.UNCHECK_IMG
              }
            />
            <Text>Cash On Delievery</Text>
          </TouchableOpacity>
        </View>
        {props?.localUserData?.order_payment_type === 2 && (
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
        {props.delivery_type == 1 && (
          <>
            <View style={[styles.CheckOutView, { paddingLeft: 15 }]}>
              <Image
                style={{ top: 5, height: 32, width: 32 }}
                tintColor={BLACK_COLOR_CODE}
                resizeMode="contain"
                source={Images.CIRCLE_LOCATION_IMG}
              />
              <View style={{ justifyContent: "center" }}>
                <Text style={[styles.TakeOutText, { paddingLeft: 10 }]}>
                  Order-Delievery Address
                </Text>
              </View>
            </View>
            <View style={[styles.CheckOutView, { paddingBottom: 12 }]}>
              <View style={{ justifyContent: "center" }}>
                <Text style={[styles.AddressText, { width: 280 }]}>
                  {props?.location?.location}
                </Text>
              </View>
            </View>
            {props?.location?.location ? (
              <MapView
                showsUserLocation
                style={{ width: "100%", height: 190 }}
                provider={PROVIDER_GOOGLE}
                initialRegion={initialRegion}
              >
                <Marker coordinate={coordinate}>
                  <Image
                    source={Images.MAP_LOGO}
                    style={{ height: 50, width: 50 }}
                    resizeMode="contain"
                    resizeMethod="auto"
                  />
                </Marker>
              </MapView>
            ) : null}
          </>
        )}
        <View
          style={[
            styles.CheckOutView,
            { paddingLeft: 15, top: 5, marginTop: 10 },
          ]}
        >
          <Image resizeMode="contain" source={Images.CHECKOUT_SCHDULD_IMG} />
          <View style={{ justifyContent: "center" }}>
            <Text style={[styles.TakeOutText, { paddingLeft: 10 }]}>
              Scheduled
            </Text>
          </View>
        </View>
        <View style={[styles.CheckOutView, { paddingBottom: 12 }]}>
          <View style={{ top: 5, height: 32, width: 32 }} />
          <View style={{ justifyContent: "center" }}>
            <Text style={[styles.AddressText, { width: 280, paddingLeft: 0 }]}>
              {props.dateTime}
            </Text>
          </View>
        </View>
        <Button
          style={{ marginBottom: 10 }}
          buttonText="Continue"
          onPress={() => props.onPressContinue()}
        />
      </PageScroll>
    </View>
  );
};
export default RestroCheckoutView;
