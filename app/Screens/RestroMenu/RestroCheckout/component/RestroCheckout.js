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
  WHITE_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";
const RestroCheckout = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Checkout"
        RightImg={null}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
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
                    ? Images.THEME_CHECK_IMG
                    : Images.THEME_UNCHECK_IMG
                }
              />
              <Text style={styles.commonTxtStyle}>Delievery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.setDeliveryType(!props.delivery_type)}
              style={styles.deliverytypeVw}
            >
              <Image
                style={styles.typesCheckVw}
                source={
                  !props.delivery_type
                    ? Images.THEME_CHECK_IMG
                    : Images.THEME_UNCHECK_IMG
                }
              />
              <Text style={styles.commonTxtStyle}>Takeout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.MainContainer}>
            {props.delivery_type && (
              <View style={styles.AddressCOntain}>
                <Image
                  style={{ bottom: 5, width: 22, height: 22 }}
                  resizeMode={"contain"}
                  source={Images.LOCATION_IMG}
                />
                <View style={styles.AddressTextView}>
                  {props.location.length > 0 ? (
                    <>
                      <Text style={styles.commonTxtStyle}>
                        {props.location &&
                          props.location[0] &&
                          props.location[0].location &&
                          props.location[0].location}
                      </Text>
                      <Text style={styles.commonTxtStyle}>
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
                source={Images.CLOCK_IMG}
              />
              <View style={styles.AddressTextView}>
                <Text style={styles.commonTxtStyle}>
                  {props?.dateTime
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
                <View style={styles.SubTotalView}>
                  <Text style={styles.SubTotalText}>Subtotal</Text>
                  <Text style={styles.SubTotalText}>
                    {"$ " +
                      Number(
                        parseFloat(props.totalAmount).toFixed(2)
                      ).toLocaleString("en", {
                        minimumFractionDigits: 2,
                      })}
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
        height={0.42}
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
                resizeMode={"contain"}
                source={Images.CANCEL_IMG}
              />
            </TouchableOpacity>
            <Text style={styles.PleaseEnterTxt}>Change Address</Text>
            <FlatList
              data={props?.locationList}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) =>
                props._handleLocationList(item, index)
              }
              ListEmptyComponent={
                <View style={styles.emptyAddressVw}>
                  <Text>No Address available</Text>
                </View>
              }
              ListFooterComponent={
                <Button
                  style={{ padding: 12, marginVertical: 20 }}
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
