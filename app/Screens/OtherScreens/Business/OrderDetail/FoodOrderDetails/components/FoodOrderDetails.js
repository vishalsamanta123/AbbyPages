import React from "react";
import { View, Text, Image, ScrollView, YellowBox } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import Button from "../../../../../Components/Button";
import Input from "../../../../../Components/Input";
import Header from "../../../../../Components/Header";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
} from "../../../../../Utils/Constant";
import moment from "moment";
import { Images } from "../../../../../Utils/images";
const OrderDetailScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Food Order Detail"
        RightImg={null}
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <Image
            style={{ height: 180, width: "100%" }}
            resizeMode="contain"
            source={
              props.orderData
                ? { uri: props.orderData.logo }
                : Images.DEFAULT_BOX_IMG
            }
          />
          <View style={CommonStyles.container}>
            <View style={styles.body}>
              <Text style={styles.text}>
                Order Id: {props.orderData ? props.orderData.order_id : null}
              </Text>
              <Text style={[styles.MainText, { color: BLACK_COLOR_CODE }]}>
                Order Type:{" "}
                {props.orderData
                  ? props.orderData.order_booking_type_text
                  : null}
              </Text>
              <View style={[styles.row, { paddingVertical: 5 }]}>
                <View style={[styles.row]}>
                  <Image
                    style={{ height: 16, width: 14, marginHorizontal: 4 }}
                    source={Images.CALENDER_IMG}
                  />
                  <Text style={styles.text}>
                    {props.orderData
                      ? moment(props.orderData.create_order).format(
                        "MM/DD/YYYY"
                      )
                      : null}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Image
                    style={{ height: 15, width: 15, marginHorizontal: 10 }}
                    source={Images.CLOCK_IMG}
                  />
                  <Text style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
                    {props.orderData
                      ? props.orderData.order_status == 0
                        ? "Pending"
                        : props.orderData.order_status == 1
                          ? "Confirmed"
                          : props.orderData.order_status == 4
                            ? "Canceled"
                            : null
                      : null}
                  </Text>
                </View>
              </View>
              <Text style={[styles.text]}>
                Amount : {props.orderData ? props.orderData.total_amount : null}
              </Text>
              <Text style={[styles.text]}>
                UserName :{" "}
                {props.orderData
                  ? props.orderData.order_user_info.first_name +
                  " " +
                  props.orderData.order_user_info.last_name
                  : null}
              </Text>
              <Text style={[styles.text]}>
                Email :{" "}
                {props.orderData ? props.orderData.order_user_info.email : null}
              </Text>
              <Text style={[styles.text]}>
                Phone No. :{" "}
                {props.orderData
                  ? props.orderData.order_user_info.mobile
                  : null}
              </Text>
              <Text style={[styles.text]}>
                Address. :{" "}
                {props.orderData
                  ? props.orderData.order_user_info.address
                  : null}
              </Text>
              <Text style={styles.text}>
                {props.orderData ? props.orderData.order_description : null}
              </Text>
            </View>
          </View>
          <View style={{ marginBottom: 80 }}>
            {props.orderData
              ? props.orderData.items.map((item) => {
                return (
                  <View style={{ padding: 10 }}>
                    <View
                      style={{
                        height: 100,
                        flexDirection: "row",
                        borderWidth: 1,
                        borderColor: "#DEE3E3",
                        borderRadius: 5,
                      }}
                    >
                      <View
                        style={{
                          width: "30%",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          style={{
                            height: 90,
                            width: 90,
                            marginHorizontal: 10,
                          }}
                          source={{ uri: item.item_image }}
                        />
                      </View>
                      <View style={{ padding: 10, width: "70%" }}>
                        <View>
                          <Text
                            numberOfLines={2}
                            style={{ fontWeight: "bold", fontSize: 13 }}
                          >
                            {item.item_name}
                          </Text>
                        </View>
                        <View
                          style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                          }}
                        >
                          <Text style={{ color: "#A9ADAD" }}>
                            x {item.quantity}
                          </Text>
                        </View>
                        <View>
                          <Text style={{ color: "#A9ADAD" }}>
                            $ {item.price}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })
              : null}
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
          {props.orderData ? (
            props.orderData.order_status == "4" ? (
              <Button
                style={{
                  borderWidth: 1,
                  borderColor: WHITE_COLOR_CODE,
                  width: "100%",
                }}
                buttonText="Canceled"
              // onPress={() => props.cancelOrder(props.orderData)}
              />
            ) : (
              <Button
                style={{
                  borderWidth: 1,
                  borderColor: WHITE_COLOR_CODE,
                  width: "50%",
                }}
                buttonText="Cancel"
                onPress={() => props.cancelOrder(props.orderData)}
              />
            )
          ) : null}
          {props.orderData ? (
            props.orderData.order_status == "1" ? (
              <Button
                style={{
                  borderWidth: 1,
                  borderColor: WHITE_COLOR_CODE,
                  width: "50%",
                }}
                buttonText="Confirmed"
              />
            ) : props.orderData.order_status == "0" ? (
              <Button
                style={{
                  borderWidth: 1,
                  borderColor: WHITE_COLOR_CODE,
                  width: "50%",
                }}
                buttonText="Confirm"
                onPress={() => props.orderConfirm(props.orderData)}
              />
            ) : null
          ) : null}
        </View>
      </View>
    </View>
  );
};
export default OrderDetailScreen;
