import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Header from "../../../../Components/Header";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import styles from "./styles";
import {
  FONT_FAMILY_REGULAR,
  LIGHT_GREY_COLOR_CODE,
  WHITE_COLOR_CODE,
  GREY_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
} from "../../../../Utils/Constant";
const RestroCheckout = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header HeaderText="Checkout" RightImg={null} />
      <View style={[CommonStyles.body, { flex: 4.5 }]}>
        <ScrollView>
          <View style={styles.typesVw}>
            <TouchableOpacity
              onPress={() => props.setDeliveryType(!props.delivery_type)}
              style={styles.deliverytypeVw}
            >
              <Image
                style={styles.typesCheckVw}
                source={
                  props.delivery_type
                    ? require("../../../../Assets/checked_box.png")
                    : require("../../../../Assets/uncheck_box.png")
                }
              />
              <Text style={styles.AddressTextStyle}>Delievery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.setDeliveryType(!props.delivery_type)}
              style={styles.deliverytypeVw}
            >
              <Image
                style={styles.typesCheckVw}
                source={
                  !props.delivery_type
                    ? require("../../../../Assets/checked_box.png")
                    : require("../../../../Assets/uncheck_box.png")
                }
              />
              <Text style={styles.AddressTextStyle}>Takeout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.MainContainer}>
            {props.delivery_type && (
              <View style={styles.AddressCOntain}>
                <Image
                  style={{ bottom: 5 }}
                  resizeMode={"contain"}
                  source={require("../../../../Assets/marker_icon_text.png")}
                />
                <View style={styles.AddressTextView}>
                  {props.location.length > 0 ? (
                    <>
                      <Text style={styles.AddressTextStyle}>
                        {props.location &&
                          props.location[0] &&
                          props.location[0].location &&
                          props.location[0].location}
                      </Text>
                      <Text style={styles.AddressTextStyle}>
                        {props.location &&
                          props.location[0] &&
                          props.location[0].pincode &&
                          props.location[0].pincode}
                      </Text>
                    </>
                  ) : (
                    <Text style={styles.notSelectTxt}>
                      Not selected address
                    </Text>
                  )}
                  <TouchableOpacity onPress={() => props.onPressChangeAdd()}>
                    <Text style={styles.ChangeTextStyle}>Change</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <View style={[styles.AddressCOntain, { paddingTop: 15 }]}>
              <Image
                style={{ top: 6 }}
                source={require("../../../../Assets/clock_icon_text.png")}
              />
              <View style={styles.AddressTextView}>
                <Text style={styles.AddressTextStyle}>
                  {props.dateTime && props.dateTime
                    ? "scheduled for " + props.dateTime
                    : "Please Select Schedule"}
                </Text>
                <DateTimePickerModal
                  isVisible={props.isDateTimePickerVisible}
                  mode="datetime"
                  onConfirm={props.handleDateTimeConfirm}
                  onCancel={props.hideDateTimePicker}
                  minimumDate={new Date()}
                />
                <TouchableOpacity
                  onPress={() => props.setDateTimePickerVisibility(true)}
                >
                  <Text style={styles.ChangeTextStyle}>
                    {props.dateTime === "" ? "Add Date Time" : "Change"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[styles.MainContainer, { marginTop: 10 }]}>
            <Text style={styles.CheckOutText}>Checkout</Text>
            <FlatList
              data={props.cartLocalData}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) =>
                props._handleDishItem(item, index)
              }
              ListFooterComponent={
                <View
                  style={[
                    styles.SubTotalView,
                    { marginTop: 10, paddingVertical: 10 },
                  ]}
                >
                  <Text style={styles.SubTotalText}>Subtotal</Text>
                  <Text style={styles.SubTotalText}>
                    {"$ " + props.totalAmount}
                  </Text>
                </View>
              }
            />
          </View>
          <View style={styles.CheckOutVw}>
            <Button onPress={props.onPressCheckOut} buttonText="Checkout" />
          </View>
        </ScrollView>
      </View>

      <Dialog
        visible={props.AddressVisible}
        width={0.9}
        useNativeDriver={true}
        dialogAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        onTouchOutside={() => {
          props.setAddressVisible(false);
        }}
      >
        <DialogContent>
          <View style={styles.MainContent}>
            <TouchableOpacity
              onPress={() => props.setAddressVisible(false)}
              style={styles.ArrowTouchable}
            >
              <Image
                source={require("../../../../Assets/cart_delete_icon.png")}
              />
            </TouchableOpacity>
            <Text style={styles.PleaseEnterTxt}>Change Address</Text>
            <FlatList
              data={props.locationList && props.locationList}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) =>
                props._handleLocationList(item, index)
              }
              ListFooterComponent={
                <Button
                  style={{ height: 50, marginTop: 15 }}
                  buttonText="Add New Address"
                  buttonLabelStyle={styles.ButtonLabel}
                  onPress={() => props.onPressAddNewAddress()}
                />
              }
            />
          </View>
        </DialogContent>
      </Dialog>
    </View>
  );
};
export default RestroCheckout;
