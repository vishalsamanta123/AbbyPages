import React from "react";
import { View, Text, Image, ScrollView, YellowBox } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import Button from "../../../../../Components/Button";
import Header from "../../../../../Components/Header";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../../../../Utils/Constant";
import moment from "moment";

const OutSideBookingOrderDetailsScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Outside Booking Details"
        RightImg={null}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <ScrollView>
        <Image
          style={{ height: 180, width: "100%" }}
          resizeMode="contain"
          source={
            props?.orderData
              ? { uri: props?.orderData?.logo }
              : require("../../../../../Assets/default_image_box.png")
          }
        />
        <View style={CommonStyles.container}>
          <View style={styles.body}>
            <Text style={styles.text}>
              Order Id: {props?.orderData ? props?.orderData?.order_id : null}
            </Text>
            <Text style={[styles.MainText, { color: BLACK_COLOR_CODE }]}>
              Order Type:{" "}
              {props?.orderData ? props?.orderData?.order_booking_type_text : null}
            </Text>
            <View style={[styles.row, { paddingVertical: 5 }]}>
              <View style={[styles.row]}>
                <Image
                  style={{ height: 16, width: 14, marginHorizontal: 4 }}
                  source={require("../../../../../Assets/calendar_icon.png")}
                />
                <Text style={styles.text}>
                  {props?.orderData
                    ? moment(props?.orderData?.create_order).format("MM/DD/YYYY")
                    : null}
                </Text>
              </View>
              <View style={styles.row}>
                <Image
                  style={{ height: 15, width: 15, marginHorizontal: 10 }}
                  source={require("../../../../../Assets/clock_icon2.png")}
                />
                <Text style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
                  {props?.orderData
                    ? props?.orderData?.order_status == 0
                      ? "Pending"
                      : props?.orderData?.order_status == 1
                      ? "Confirmed"
                      : props?.orderData?.order_status == 4
                      ? "Canceled"
                      : null
                    : null}
                </Text>
              </View>
            </View>
            <Text style={[styles.text]}>
              UserName :{" "}
              {props?.orderData
                ? props?.orderData?.first_name + " " + props?.orderData?.last_name
                : null}
            </Text>
            <Text style={[styles.text]}>
              Email : {props?.orderData ? props?.orderData?.email : null}
            </Text>
            <Text style={[styles.text]}>
              Phone No. :{" "}
              {props?.orderData ? props?.orderData?.userInfo.phone : null}
            </Text>
            <Text style={styles.text}>
              {props?.orderData ? props?.orderData?.order_description : null}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={
          ([styles.localFooter],
          {
            position: "absolute",
            bottom: 5,
            flexDirection: "row",
            padding: 8,
          })
        }
      >
        {props?.orderData ? (
          props?.orderData?.order_status == "4" ? (
            <Button
              style={{
                borderWidth: 1,
                borderColor: WHITE_COLOR_CODE,
                width: "100%",
              }}
              buttonText="Canceled"
              // onPress={() => props.cancelOrder(props?.orderData?)}
            />
          ) : (
            <Button
              style={{
                borderWidth: 1,
                borderColor: WHITE_COLOR_CODE,
                width: "50%",
              }}
              buttonText="Cancel"
              onPress={() => props.cancelOrder(props?.orderData)}
            />
          )
        ) : null}
        {props?.orderData ? (
          props?.orderData?.order_status == "1" ? (
            <Button
              style={{
                borderWidth: 1,
                borderColor: WHITE_COLOR_CODE,
                width: "50%",
              }}
              buttonText="Confirmed"
            />
          ) : props?.orderData?.order_status == "0" ? (
            <Button
              style={{
                borderWidth: 1,
                borderColor: WHITE_COLOR_CODE,
                width: "50%",
              }}
              buttonText="Confirm"
              onPress={() => props.orderConfirm(props?.orderData)}
            />
          ) : null
        ) : null}
      </View>
    </View>
  );
};
export default OutSideBookingOrderDetailsScreen;
