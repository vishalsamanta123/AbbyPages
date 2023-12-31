import React, { useState } from "react";
import { Image, View, Text, FlatList, TouchableOpacity } from "react-native";
import Header from "../../../Components/Header";
import moment from "moment";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import {
  YELLOW_COLOR_CODE,
  WHITE_COLOR_CODE,
  LIGHT_WHITE_COLOR,
  SMALL_TEXT_COLOR_CODE,
} from "../../../Utils/Constant";
import { Images } from "../../../Utils/images";
const OrderHistory = (props) => {
  const [scrollBegin, setScrollBegin] = useState();
  const _handleOrders = (item, index) => {
    return (
      <TouchableOpacity
        style={styles.ConatinView}
        onPress={() =>
          item.order_booking_type == 1 ? props.onpressOrder(item) : null
        }
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
              {item.order_booking_type === 1 && " Food Order"}
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
                    {Number(
                      parseFloat(item.total_amount).toFixed(2)
                    ).toLocaleString("en", {
                      minimumFractionDigits: 2,
                    })}
                  </Text>
                </View>
              )}
              <Text numberOfLines={1} style={styles.DiscrptnTxtStyle}>
                Order Id: {item.order_id}
              </Text>
              <View style={styles.DateContainer}>
                <Image
                  style={styles.DateImge}
                  source={Images.CALENDER_IMG}
                />
                <Text style={[styles.ReviewText, { paddingLeft: 10 }]}>
                  {moment(item.create_order).format("MM/DD/YYYY")}
                </Text>
              </View>
              <View style={styles.ViewContainer}>
                <View style={styles.PendingView}>
                  <Image
                    style={styles.CheckImge}
                    source={Images.ROUND_CHECK_IMG}
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
            <View style={styles.arrowCon}>
              <TouchableOpacity
                onPress={() => props.onpressOrder(item)}
                style={styles.arrowVw}
              >
                <Image
                  style={styles.arrowImg}
                  source={Images.ARROW_RIGHT_IMG}
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
        leftImg={Images.DRAWER_IMG}
        HeaderText="Order History"
        type="Drawer"
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
      />
      <View style={styles.topCont}>
        <TouchableOpacity
          onPress={() => {
            if (props.isSelectedCatgory != 0) {
              props.handleOrderedItemList(0, 0);
            }
          }}
          style={styles.lablestyle}
        >
          <Text
            style={[
              styles.txtCat,
              {
                color:
                  props.isSelectedCatgory === 0
                    ? WHITE_COLOR_CODE
                    : LIGHT_WHITE_COLOR,
              },
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <FlatList
          data={props?.itemCategoryList}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => props._renderCategory(item, index)}
        />
      </View>
      <View style={styles.FriendContainer}>
        <FlatList
          data={props.orderItemList}
          keyExtractor={(item, index) => index}
          ListEmptyComponent={() => {
            return (
              <View style={styles.emptyListVw}>
                <View style={[styles.cardCon]}>
                  <View style={styles.imgCon}>
                    <Image
                      source={Images.ORDERS_IMG}
                    />
                  </View>
                  <Text style={[CommonStyles.text, styles.emptyListTxt]}>
                    Look like you don't have any orders yet.
                  </Text>
                </View>
              </View>
            );
          }}
          ListFooterComponent={<View style={{ marginBottom: 20 }} />}
          onMomentumScrollBegin={() => setScrollBegin(true)}
          renderItem={({ item, index }) => _handleOrders(item, index)}
          onEndReached={() => {
            if (scrollBegin) {
              if (!props.stopOffset) {
                setScrollBegin(false);
                props?.handleOrderedItemList(
                  props?.orderItemList?.length > 5 ? props?.offSet + 1 : null,
                  props.isSelectedCatgory
                );
              } else {
                setScrollBegin(false);
              }
            }
          }}
        />
      </View>
    </View>
  );
};
export default OrderHistory;
