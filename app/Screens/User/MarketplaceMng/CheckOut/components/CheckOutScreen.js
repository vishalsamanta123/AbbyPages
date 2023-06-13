import React from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import Button from "../../../../../Components/Button";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import { Constants } from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import MainHeader from "../../../../../Components/MainHeader";
import ScaleText from "../../../../../Components/ScaleText";
import PageScroll from "../../../../../Components/PageScroll";
import FastImages from "../../../../../Components/FastImage";

const CheckOutScreen = (props) => {
  const _renderAddressList = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.setLocation([item]);
          props.setAddressListVisible(false);
        }}
        style={styles.dataCon}
      >
        <ScaleText style={styles.locationTxt}>{item.location}</ScaleText>
      </TouchableOpacity>
    );
  };
  const _renderCartItemList = (item) => {
    return (
      <View style={styles.dataCon}>
        <View style={{ flex: 2, justifyContent: "center" }}>
          <FastImages
            resizeMethod="auto"
            style={styles.posterimg}
            source={{ uri: item.product_image }}
          />
        </View>
        <View style={{ flex: 4 }}>
          <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
            <ScaleText
              style={[
                styles.hdngtxt,
                { width: Constants.windowWidth / 2, fontSize: 15 },
              ]}
            >
              {item.product_name}
            </ScaleText>
          </View>
          <ScaleText style={[styles.text, { fontSize: 12 }]}>
            {item.product_description}
          </ScaleText>
          <View style={{ flexDirection: "row" }}>
            <View style={[styles.basiccon, { flex: 1 }]}>
              <ScaleText
                style={[styles.hdngtxt, { width: null, fontSize: 15 }]}
              >
                {"Qty : " + item.quantity}
              </ScaleText>
            </View>
            <View style={{ flex: 1, marginRight: 10 }}>
              <ScaleText
                style={[styles.hdngtxt, { width: null, fontSize: 15 }]}
              >
                {"$ " +
                  Number(
                    parseFloat(item.price).toFixed(2) * item?.quantity
                  ).toLocaleString("en", {
                    minimumFractionDigits: 2,
                  })}
              </ScaleText>
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
      />
      <PageScroll contentContainerStyle={{ flexGrow: 1 }}>
        <FlatList
          data={props?.shoppingCartData}
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => _renderCartItemList(item, index)}
        />
        <View style={styles.footerVw}>
          <View>
            <ScaleText style={[styles.hdngtxt, styles.headingTxt]}>
              Delievery Address
            </ScaleText>
            {props.location.length > 0 ? (
              <ScaleText style={styles.locationTxt}>
                {props?.location && props?.location[0]?.location}
              </ScaleText>
            ) : null}
            {props?.location.length > 0 ? (
              <TouchableOpacity
                onPress={() => props.setAddressListVisible(true)}
                style={styles.addressEditVw}
              >
                <ScaleText style={styles.addressEditTxt}>
                  Change Address
                </ScaleText>
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
                <ScaleText style={styles.addressEditTxt}>Add Address</ScaleText>
                <Image
                  style={styles.addressEditImg}
                  resizeMode="contain"
                  source={Images.EDIT_PENCIL_IMG}
                />
              </TouchableOpacity>
            )}
            <ScaleText style={[styles.hdngtxt, styles.headingTxt]}>
              Payment Method
            </ScaleText>
            <View style={[styles.basiccon, styles.paymentCon]}>
              <TouchableOpacity
                onPress={() => props.setOrderPaymentType(1)}
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
                <ScaleText style={[styles.hdngtxt, styles.paymentTxt]}>
                  Cash-on Delievery
                </ScaleText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.setOrderPaymentType(2)}
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
                <ScaleText style={[styles.hdngtxt, styles.paymentTxt]}>
                  Pay Online
                </ScaleText>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
            <ScaleText style={[styles.hdngtxt, styles.amountTxt]}>
              Original Price
            </ScaleText>
            <ScaleText style={[styles.hdngtxt, styles.amountTxt]}>
              ${" "}
              {Number(parseFloat(props.finalAmount).toFixed(2)).toLocaleString(
                "en",
                {
                  minimumFractionDigits: 2,
                }
              )}
            </ScaleText>
          </View>
          <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
            <ScaleText style={[styles.hdngtxt, styles.amountTxt]}>
              Offer
            </ScaleText>
            <ScaleText style={[styles.hdngtxt, styles.amountTxt]}>
              0.00
            </ScaleText>
          </View>
          <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
            <ScaleText style={[styles.hdngtxt, styles.amountTxt]}>
              Promocode
            </ScaleText>
            <ScaleText style={[styles.hdngtxt, styles.amountTxt]}>
              0.00
            </ScaleText>
          </View>
          <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
            <ScaleText style={[styles.hdngtxt, styles.amountTxt]}>
              Current Total Price
            </ScaleText>
            <ScaleText style={[styles.hdngtxt, styles.amountTxt]}>
              ${" "}
              {Number(parseFloat(props.finalAmount).toFixed(2)).toLocaleString(
                "en",
                {
                  minimumFractionDigits: 2,
                }
              )}
            </ScaleText>
          </View>
          <Button
            buttonLabelStyle
            style={{ marginTop: 10, marginBottom: 10 }}
            buttonText="Continue"
            onPress={() => props.onPressContinue()}
          />
        </View>
      </PageScroll>
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
