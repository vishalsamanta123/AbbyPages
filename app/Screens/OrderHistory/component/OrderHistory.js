import React from "react";
import { Image, View, Text, FlatList, TouchableOpacity } from "react-native";
import Header from "../../../Components/Header";
import moment from "moment";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import {
  YELLOW_COLOR_CODE,
  WHITE_COLOR_CODE,
  LIGHT_WHITE_COLOR,
} from "../../../Utils/Constant";
const OrderHistory = (props) => {
  const _handleOrders = (item, index) => {
    return (
      <TouchableOpacity
        style={styles.ConatinView}
        onPress={() =>
          item.order_booking_type == 1
            ? props.onpressOrder(item)
            : console.log(item)
        }
        // item.order_booking_type == 2 ? props.onpressOrder(item) : console.log(item)}
      >
        <Image
          style={styles.DishImgeStyle}
          // resizeMode="contain"
          source={{ uri: item.logo }}
        />
        <View style={styles.DishDiscptnView}>
          {item.business_type === 1 && (
            <Text style={styles.ReviewText}>
              Order Type:
              {item.order_booking_type === 1 && " Food"}
              {item.order_booking_type === 2 && " Item Order"}
              {item.order_booking_type === 3 && " Table Reservation"}
              {item.order_booking_type === 4 && " AYCE Outdoor Seating"}
            </Text>
          )}
          {item.business_type === 3 && (
            <Text style={styles.ReviewText}>
              Service : {item.Order_category_name}
            </Text>
          )}
          <Text style={styles.DishNameTxt}>{item.business_name}</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              {item.total_amount && (
                <View style={styles.DateContainer}>
                  <Text style={[styles.ReviewText, { fontSize: 14 }]}>$</Text>
                  <Text
                    style={[
                      styles.ReviewText,
                      { paddingLeft: 5, fontSize: 14 },
                    ]}
                  >
                    {item.total_amount}
                  </Text>
                </View>
              )}
              <Text numberOfLines={1} style={styles.DiscrptnTxtStyle}>
                Order Id: {item.order_id}
              </Text>
              <View style={styles.DateContainer}>
                <Image
                  style={styles.DateImge}
                  source={require("../../../Assets/list_calendar_icon.png")}
                />
                <Text style={[styles.ReviewText, { paddingLeft: 10 }]}>
                  {moment(item.create_order).format("MM/DD/YYYY")}
                </Text>
              </View>
              <View style={styles.ViewContainer}>
                <View style={styles.PendingView}>
                  <Image
                    style={styles.CheckImge}
                    source={require("../../../Assets/checked_circled_icon_box.png")}
                  />
                  <Text
                    style={[
                      styles.ReviewText,
                      { paddingLeft: 10, color: YELLOW_COLOR_CODE },
                    ]}
                  >
                    {item.order_status === 0 && "Pending"}
                    {item.order_status === 1 && "Accepted"}
                    {item.order_status === 2 && "In Process"}
                    {item.order_status === 3 && "Cancelled By User"}
                    {item.order_status === 3 && "Cancelled By Business"}
                    {item.order_status === 5 && "Completed"}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-end",
                flex: 1,
              }}
            >
              <TouchableOpacity
                onPress={() => props.onpressOrder(item)}
                style={{
                  backgroundColor: YELLOW_COLOR_CODE,
                  padding: 8,
                  borderRadius: 30,
                }}
              >
                <Image
                  tintColor={WHITE_COLOR_CODE}
                  style={{
                    width: 8,
                    height: 10,
                    backgroundColor: YELLOW_COLOR_CODE,
                  }}
                  source={require("../../../Assets/arrow_right_icon.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={CommonStyles.container}>
      <Header
        RightImg={null}
        leftImg={require("../../../Assets/hamburger_icon.png")}
        HeaderText="Order History"
        type="Drawer"
      />
      <View style={[CommonStyles.body]}>
        <View
          style={[
            styles.FlatlistContain,
            { flexDirection: "row", backgroundColor: YELLOW_COLOR_CODE },
          ]}
        >
          <TouchableOpacity
            onPress={() => props._handleDataTypeSelected("a", "b", "allData")}
            style={[styles.lablestyle, { backgroundColor: YELLOW_COLOR_CODE }]}
          >
            <Text
              style={[
                styles.txtCat,
                {
                  color:
                    props.dataType == "allData"
                      ? WHITE_COLOR_CODE
                      : LIGHT_WHITE_COLOR,
                },
              ]}
            >
              All
            </Text>
          </TouchableOpacity>
          <FlatList
            data={props.itemCategoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{
              backgroundColor: YELLOW_COLOR_CODE,
            }}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => props._renderCategory(item, index)}
          />
        </View>
        {props.orderItemList ? (
          <View style={[styles.FriendContainer]}>
            <FlatList
              data={props.orderItemList}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) => _handleOrders(item, index)}
              onEndReached={() => {
                !props.stopOffset
                  ? props?.handleOrderedItemList(props.offSet + 1)
                  : null;
              }}
            />
          </View>
        ) : (
          <View
            style={[
              styles.FriendContainer,
              {
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <View style={[styles.cardCon]}>
              <View style={styles.imgCon}>
                <Image
                  source={require("../../../Assets/order_icon_box_large.png")}
                />
              </View>
              <Text
                style={[
                  CommonStyles.text,
                  {
                    bottom: 25,
                    fontSize: 18,
                    color: "#6c6c6c",
                    lineHeight: 25,
                    textAlign: "center",
                  },
                ]}
              >
                Look like you don't have any orders yet.
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
export default OrderHistory;
