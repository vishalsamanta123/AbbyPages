import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import Button from "../../../../../Components/Button";
import Header from "../../../../../Components/Header";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
} from "../../../../../Utils/Constant";
import moment from "moment";
import { Picker } from "@react-native-community/picker";

const ShoppingOrderDetailsScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Marketplace Order Detail"
        RightImg={null}
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      {/* <View style={{ height: 50, backgroundColor: YELLOW_COLOR_CODE, flexDirection: 'row', alignItems: 'center', }}>
                <TouchableOpacity onPress={() => props.goBackFun()} style={{ width: '20%', alignItems: 'center' }}>
                    <Image
                        style={{ width: 35, height: 25 }}
                        source={require('../../../../../Assets/header_back_btn.png')}
                    />
                </TouchableOpacity>
                <View style={{ width: '60%', alignItems: 'center' }}>
                    <Text style={{
                        fontFamily: FONT_FAMILY_BOLD,
                        fontSize: 17,
                        color: WHITE_COLOR_CODE
                    }}>Shoping Order Detail</Text>
                </View>
            </View> */}
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <Image
            style={{ height: 180, width: "100%" }}
            resizeMode="contain"
            resizeMethod="auto"
            source={
              props.orderData
                ? { uri: props.orderData.logo }
                : require("../../../../../Assets/default_image_box.png")
            }
          />
          <View style={CommonStyles.container}>
            <View style={styles.body}>
              <Text style={styles.text}>
                Order Id:{props.orderData ? props.orderData.order_id : null}
              </Text>
              <Text style={styles.text}>
                Total amount:{" "}
                {props.orderData ? props.orderData.total_amount : null}
              </Text>
              <View style={[styles.row, { paddingVertical: 5 }]}>
                <View style={[styles.row]}>
                  <Image
                    style={{ height: 16, width: 14, marginHorizontal: 4 }}
                    source={require("../../../../../Assets/calendar_icon.png")}
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
                    source={require("../../../../../Assets/clock_icon2.png")}
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
                UserName:{" "}
                {props.orderData
                  ? props.orderData.order_user_info.first_name +
                    " " +
                    props.orderData.order_user_info.last_name
                  : null}
              </Text>
              <Text style={[styles.text]}>
                Email:{" "}
                {props.orderData ? props.orderData.order_user_info.email : null}
              </Text>
              <Text style={[styles.text]}>
                Phone No. :{" "}
                {props.orderData
                  ? props.orderData.order_user_info.mobile
                  : null}
              </Text>
              <Text style={[styles.text]}>
                Address :{" "}
                {props.orderData
                  ? props.orderData.order_user_info.address
                  : null}
              </Text>
              <Text style={styles.text}>
                {props.orderData ? props.orderData.order_description : null}
              </Text>
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
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
                              {item.product_name}
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

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <View style={styles.selectvwe}>
              <TouchableOpacity style={styles.tchvwe}>
                <Picker
                  selectedValue={props.orderProcess?.process}
                  style={styles.pickerVw}
                  onValueChange={(itemValue, itemIndex) =>
                    props.setOrderProcess({
                      ...props.orderProcess,
                      process: itemValue,
                    })
                  }
                  mode={"dropdown"}
                >
                  <Picker.Item label="Update Order Process" />
                  <Picker.Item label="ordered" value={1} />
                  <Picker.Item label="packed" value={2} />
                  <Picker.Item label="shipped" value={3} />
                  <Picker.Item label="delivered" value={4} />
                </Picker>
              </TouchableOpacity>
            </View>
            <View style={styles.selectvwe}>
              <TouchableOpacity style={styles.tchvwe}>
                <Picker
                  selectedValue={props?.orderProcess?.orderStatus}
                  style={styles.pickerVw}
                  onValueChange={(itemValue, itemIndex) =>
                    props.setOrderProcess({
                      ...props.orderProcess,
                      orderStatus: itemValue,
                    })
                  }
                  mode={"dropdown"}
                >
                  <Picker.Item label="Update status" />
                  <Picker.Item label="Pending" value={0} />
                  <Picker.Item label="Accept" value={1} />
                  <Picker.Item label="In process" value={2} />
                  <Picker.Item label="Cancel" value={4} />
                  <Picker.Item label="Completed" value={5} />
                </Picker>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Button
              style={{
                borderWidth: 1,
                borderColor: WHITE_COLOR_CODE,
                width: "100%",
              }}
              buttonText="Update"
              onPress={() => props?.orderStatusUpdate(props.orderData)}
              // isDisabled={props.orderProcess.}
            />
          </View>

          <View style={{ padding: 20 }}>
            <Text style={styles.orderStatusTxt}>OrderStatus</Text>
            {props.orderData ? (
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    tintColor={
                      props?.orderData?.order_process >= 1
                        ? YELLOW_COLOR_CODE
                        : "#c1bcbc"
                    }
                    source={require("../../../../../Assets/final_order1.png")}
                  />
                  <Text style={[styles.text, { fontSize: 15 }]}>
                    {""} Ordered
                  </Text>
                </View>
                <View style={styles.orderStatusVw}>
                  <Image
                    tintColor={
                      props?.orderData?.order_process >= 2
                        ? YELLOW_COLOR_CODE
                        : "#c1bcbc"
                    }
                    style={{ right: 2 }}
                    source={require("../../../../../Assets/final_order.png")}
                  />
                  <Text style={[styles.text, { fontSize: 15 }]}>Packed</Text>
                </View>
                <View style={styles.orderStatusVw}>
                  <Image
                    tintColor={
                      props?.orderData?.order_process >= 3
                        ? YELLOW_COLOR_CODE
                        : "#c1bcbc"
                    }
                    style={{ right: 2 }}
                    source={require("../../../../../Assets/final_order.png")}
                  />
                  <Text style={[styles.text, { fontSize: 15 }]}>Shipped</Text>
                </View>
                <View style={styles.orderStatusVw}>
                  <Image
                    tintColor={
                      props?.orderData.order_process >= 4 ||
                      props?.orderData?.order_status === 5
                        ? YELLOW_COLOR_CODE
                        : "#c1bcbc"
                    }
                    style={{ right: 2 }}
                    source={require("../../../../../Assets/final_order.png")}
                  />
                  <Text style={[styles.text, { fontSize: 15 }]}>
                    Delievered
                  </Text>
                </View>
              </View>
            ) : null}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default ShoppingOrderDetailsScreen;
