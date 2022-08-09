import React from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import CommonStyles from "../../../../Utils/CommonStyles";
import styles from "./styles";
import Header from "../../../../Components/Header";
import Button from "../../../../Components/Button";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import {
  FONT_FAMILY_REGULAR,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
const CheckOutScreen = (props) => {
  const screenlowerdata = (item) => {
    return (
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
                source={require("../../../../Assets/edit_pencil_icon.png")}
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
                source={require("../../../../Assets/edit_pencil_icon.png")}
              />
            </TouchableOpacity>
          )}
          <Text style={[styles.hdngtxt, styles.headingTxt]}>
            Payment Method
          </Text>
          <View style={[styles.basiccon, styles.paymentCon]}>
            <TouchableOpacity
              // onPress={() => props.setOrderPaymentType(!props.order_payment_type)}
              style={styles.basiccon}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={
                  props.order_payment_type
                    ? require("../../../../Assets/radio_circled_checked.png")
                    : require("../../../../Assets/radio_circled_unchecked.png")
                }
              />
              <Text style={[styles.hdngtxt, styles.paymentTxt]}>
                CashOnDelievery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => props.setOrderPaymentType(!props.order_payment_type)}
              style={[styles.basiccon, { marginLeft: 10 }]}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={
                  !props.order_payment_type
                    ? require("../../../../Assets/radio_circled_checked.png")
                    : require("../../../../Assets/radio_circled_unchecked.png")
                }
              />
              <Text style={[styles.hdngtxt, styles.paymentTxt]}>
                Pay Online
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
          <Text style={[styles.hdngtxt, styles.amountTxt]}>Original Price</Text>
          <Text style={[styles.hdngtxt, styles.amountTxt]}>
            $ {props.finalAmount}
          </Text>
        </View>
        <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
          <Text style={[styles.hdngtxt, styles.amountTxt]}>Offer</Text>
          <Text style={[styles.hdngtxt, styles.amountTxt]}>0</Text>
        </View>
        <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
          <Text style={[styles.hdngtxt, styles.amountTxt]}>Promocode</Text>
          <Text style={[styles.hdngtxt, styles.amountTxt]}>0</Text>
        </View>
        <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
          <Text style={[styles.hdngtxt, styles.amountTxt]}>
            Current Total Price
          </Text>
          <Text style={[styles.hdngtxt, styles.amountTxt]}>
            $ {props.finalAmount}
          </Text>
        </View>
        <Button
          buttonLabelStyle
          style={{ marginTop: 10, marginBottom: 10 }}
          buttonText="Continue"
          onPress={() => props.onPressContinue()}
        />
      </View>
    );
  };
  const _renderAddressList = (item) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.setLocation(item, props.setAddressListVisible(false))
        }
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
            <Text style={[styles.hdngtxt, { width: null, fontSize: 15 }]}>
              {item.product_name}
            </Text>
            <TouchableOpacity onPress={() => props.onPressDeleteItem(item)}>
              <Image
                style={styles.icon}
                source={require("../../../../Assets/cart_delete_icon.png")}
              />
            </TouchableOpacity>
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
                {"$ " + item.total_product_price}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText={"Confirm Order"}
        logoImg={false}
        headerSecondText="confirm order with the following details"
        RightImg={require("../../../../Assets/trash_icon_header.png")}
        onPress={() => props.onPressDeleteCart()}
      />
      <View style={CommonStyles.body}>
        <FlatList
          data={props.shoppingCartData}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => screenlowerdata()}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => _renderCartItemList(item, index)}
        />
      </View>
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
    </View>
  );
};
export default CheckOutScreen;
