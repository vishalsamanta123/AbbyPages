import React, { useState } from "react";
import { Image, View, Text, FlatList, TouchableOpacity } from "react-native";
import moment from "moment";
import CommonStyles from "../../../../Utils/CommonStyles";
import styles from "./styles";
import {
  YELLOW_COLOR_CODE,
  FONT_SIZE,
  COLORS,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";
import MainHeader from "../../../../Components/MainHeader";
import { RowSingleTxtList } from "../../../../Components/ListItemsView";
import OrderCard from "../../../../Components/OrderCard";
const OrderHistory = (props) => {
  const [scrollBegin, setScrollBegin] = useState();
  const _handleOrders = (item, index) => {
    return (
      <>
      {/* <TouchableOpacity
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
                  <Text
                    style={[styles.ReviewText, { fontSize: FONT_SIZE.smallL }]}
                  >
                    $
                  </Text>
                  <Text
                    style={[
                      styles.ReviewText,
                      { paddingLeft: 5, fontSize: FONT_SIZE.smallL },
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
                <Image style={styles.DateImge} source={Images.CALENDER_IMG} />
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
      </TouchableOpacity> */}
      <OrderCard item={item} onpressOrder={() => props.onpressOrder(item)} />
      </>
    );
  };
  return (
    <View style={CommonStyles.container}>
      <MainHeader
        headerText={"Order History"}
        fontSize={FONT_SIZE.medium}
        loginButton={false}
        isLogin={true}
      />
      <View style={styles.topCont}>
        <RowSingleTxtList
          text={"All"}
          txtColor={
            props.isSelectedCatgory === 0 ? COLORS.YELLOW : COLORS.BLACK
          }
          borderColor={
            props.isSelectedCatgory === 0 ? COLORS.YELLOW : COLORS.BLACK
          }
          onPressItem={() => {
            if (props.isSelectedCatgory != 0) {
              props.handleOrderedItemList(0, 0);
            }
          }}
          borderBottomWidth={props.isSelectedCatgory === 0 ? 1 : 0}
        />
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
                    <Image source={Images.ORDERS_IMG} />
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
