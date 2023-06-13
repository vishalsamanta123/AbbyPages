import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import CommonStyles from "../../../../Utils/CommonStyles";
import moment from "moment";
import Header from "../../../../Components/Header";
import {
  SMALL_TEXT_COLOR_CODE,
  YELLOW_COLOR_CODE,
  FONT_SIZE,
} from "../../../../Utils/Constant";
import Button from "../../../../Components/Button";
import { Images } from "../../../../Utils/images";
import MainHeader from "../../../../Components/MainHeader";
import PageScroll from "../../../../Components/PageScroll";
import { handleBusinessShow } from "../../../../Utils/Globalfunctions";
import FastImages from "../../../../Components/FastImage";

const ItemOrderDetails = (props) => {
  const _handleItemList = (item, index) => {
    return (
      <View key={index} style={styles.ConatinView}>
        <View style={styles.itemImgCon}>
          <FastImages
            style={styles.DishImgeStyle}
            source={{ uri: item.item_image }}
          />
        </View>
        <View style={styles.DishDiscptnView}>
          <Text style={[styles.text, { fontSize: 18 }]}>
            {item.product_name}
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: 12.5, color: SMALL_TEXT_COLOR_CODE },
            ]}
          >
            {item?.product_description}
          </Text>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.text, { fontSize: 14, paddingRight: 20 }]}>
                Qty: {item.quantity}
              </Text>
              <Text style={[styles.text, { fontSize: 14 }]}>
                ${" "}
                {Number(parseFloat(item.price).toFixed(2)).toLocaleString(
                  "en",
                  {
                    minimumFractionDigits: 2,
                  }
                )}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={CommonStyles.container}>
      <MainHeader
        headerText={"Order Detail"}
        fontSize={FONT_SIZE.medium}
        loginButton={false}
        isLogin={true}
      />
      <PageScroll contentContainerStyle={{ flexGrow: 1 }}>
        {props?.orderDetail?.business_image && (
          <FastImages
            style={styles.restoImg}
            resizeMode="stretch"
            source={{ uri: props?.orderDetail?.business_image }}
          />
        )}
        <View style={styles.mainContentVw}>
          {props?.orderDetail?.business_name && (
            <TouchableOpacity
              onPress={() =>
                handleBusinessShow(props?.orderDetail, "", props.navigation)
              }
            >
              <Text style={styles.nameTxt}>
                {props?.orderDetail?.business_name}
              </Text>
            </TouchableOpacity>
          )}
          <Text style={styles.detailTxt}>
            <Text style={styles.detailTitleTxt}>Order Id :</Text>
            {" " + props?.orderDetail?.order_id}
          </Text>
          {props.orderDetail.total_amount !== null && (
            <Text style={styles.detailTxt}>
              <Text style={styles.detailTitleTxt}>Order Amount :</Text>
              {" $ " +
                Number(
                  parseFloat(props?.orderDetail?.total_amount).toFixed(2)
                ).toLocaleString("en", {
                  minimumFractionDigits: 2,
                })}
            </Text>
          )}
          <Text style={styles.detailTxt}>
            <Text style={styles.detailTitleTxt}>Order Date :</Text>
            {moment(props?.orderDetail?.create_order).format("MM/DD/YYYY")}
          </Text>
          <Text style={styles.detailTxt}>
            <Text style={styles.detailTitleTxt}>Order Status :</Text>
            {props?.orderDetail?.order_status === 0 && " Pending"}
            {props?.orderDetail?.order_status === 1 && " Accepted"}
            {props?.orderDetail?.order_status === 2 && " In Process"}
            {props?.orderDetail?.order_status === 3 && " Cancelled By User"}
            {props?.orderDetail?.order_status === 4 && " Cancelled By Business"}
            {props?.orderDetail?.order_status === 5 && " Completed"}
          </Text>
          {props?.orderDetail?.order_status === 3 ||
          props?.orderDetail?.order_status === 5 ||
          props?.orderDetail?.order_status === 4 ? null : (
            <View style={{ marginTop: 10 }}>
              <Button
                style={styles.bttnsVw}
                onPress={() => props.setCancelOrder(true)}
                buttonLabelStyle={styles.bttnsTxt}
                buttonText={
                  props?.orderDetail?.order_booking_type === 3
                    ? "Cancel Table Book"
                    : "Cancel Order"
                }
                paddingHeight={7}
              />
            </View>
          )}
        </View>
        {props?.orderDetail?.business_type === 3 ||
        props?.orderDetail?.order_booking_type === 3 ? null : (
          <>
            <FlatList
              data={props?.orderDetail?.item}
              keyExtractor={(item, index) => index}
              style={styles.orderItemVw}
              renderItem={({ item, index }) => _handleItemList(item, index)}
              ListFooterComponent={
                <View>
                  <View>
                    <Button
                      onPress={() => props.onPressInvoice()}
                      buttonText={"Invoice Download"}
                      style={styles.invoiceBttn}
                      paddingHeight={7}
                    />
                  </View>
                </View>
              }
            />
            <View style={{ padding: 20 }}>
              <Text style={styles.orderStatusTxt}>Order Status</Text>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    tintColor={
                      props?.orderDetail?.order_process >= 1
                        ? YELLOW_COLOR_CODE
                        : "#c1bcbc"
                    }
                    source={Images.FINAL_ORDERDOT_IMG}
                  />
                  <Text style={[styles.text, { fontSize: 15 }]}>
                    {""} Ordered
                  </Text>
                </View>
                <View style={styles.orderStatusVw}>
                  <Image
                    tintColor={
                      props?.orderDetail?.order_process >= 2
                        ? YELLOW_COLOR_CODE
                        : "#c1bcbc"
                    }
                    style={{ right: 2 }}
                    source={Images.FINAL_ORDER_IMG}
                  />
                  <Text style={[styles.text, { fontSize: 15 }]}>Packed</Text>
                </View>
                <View style={styles.orderStatusVw}>
                  <Image
                    tintColor={
                      props?.orderDetail?.order_process >= 3
                        ? YELLOW_COLOR_CODE
                        : "#c1bcbc"
                    }
                    style={{ right: 2 }}
                    source={Images.FINAL_ORDER_IMG}
                  />
                  <Text style={[styles.text, { fontSize: 15 }]}>Shipped</Text>
                </View>
                <View style={styles.orderStatusVw}>
                  <Image
                    tintColor={
                      props.orderDetail.order_process >= 4 ||
                      props?.orderDetail?.order_status === 5
                        ? YELLOW_COLOR_CODE
                        : "#c1bcbc"
                    }
                    style={{ right: 2 }}
                    source={Images.FINAL_ORDER_IMG}
                  />
                  <Text style={[styles.text, { fontSize: 15 }]}>
                    Delievered
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}
      </PageScroll>
    </View>
  );
};

export default ItemOrderDetails;
