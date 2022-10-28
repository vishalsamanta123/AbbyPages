import React, { useState, useEffect, useContext } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import styles from "./components/styles";
import BusinessOrderHistory from "./components/BusinessOrderHistory";
import CommonStyles from "../../../Utils/CommonStyles";
import { WHITE_COLOR_CODE, YELLOW_COLOR_CODE } from "../../../Utils/Constant";
import { apiCall, setDefaultHeader } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import { OrderCategorySelect } from "../../../Utils/UserContext";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/error";
import Success from "../../../Components/Modal/success";
import moment from "moment";
import {
  useFocusEffect,
  useLinkProps,
  useIsFocused,
} from "@react-navigation/native";
import { Images } from "../../../Utils/images";

const BusinessOrderHistoryView = ({ route, props, navigation }) => {
  const isFocused = useIsFocused();

  const [OrderCategorySel, setOrderCategorySel] =
    useContext(OrderCategorySelect);
  // const businessTypeCate = route.params ? route.params.BusinessType : 1
  // const businessTypeCate = OrderCategorySel.businsessType
  const selectIndex = OrderCategorySel.activeIndex;

  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [isSelectedCatgory, setIsSelectedCatgory] = useState(0);
  const [orderData, setorderData] = useState([]);
  const [BusinessType, setBusinessType] = useState(
    OrderCategorySel.businsessType
  );

  const [dataType, setDataType] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      setVisible(true);
      getBusinessTypeList(OrderCategorySel.businsessType);
      setTimeout(function () {
        setVisible(false);
      }, 5000);
      return () => getBusinessTypeList();
    }, [OrderCategorySel.businsessType])
  );

  // useEffect(() => {
  //     setVisible(true)
  //     setTimeout(function () { getBusinessTypeList(), setVisible(false) }, 5000);

  // }, [props])

  const getBusinessTypeList = async (type) => {
    setVisible(true);
    try {
      const params = {
        business_type: 1,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUSINESS_CATEGORY_LIST,
        params
      );
      if (data.status === 200) {
        setDataType(data.data);
        getOrderListFun(type);
        setIsSelectedCatgory(selectIndex);
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const getOrderListFun = async (businessType) => {
    try {
      setVisible(true);
      const params = {
        business_type: businessType,
        offset: 0,
        limit: 10,
      };
      const { data } = await apiCall("POST", ENDPOINTS.GET_ORDER_LIST, params);
      if (data.status === 200) {
        setorderData(data.data);
        setVisible(false);
      } else {
        setorderData([]);
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const _handleDataTypeSelected = (index, item) => {
    setOrderCategorySel({
      ...OrderCategorySel,
      activeIndex: index,
      businsessType: item.business_type_id,
    });
    setIsSelectedCatgory(index);
    getOrderListFun(item.business_type_id);
    setBusinessType(item.business_type_id);
  };

  const _renderCategory = (item, index) => {
    const selectedColor =
      index === isSelectedCatgory ? WHITE_COLOR_CODE : "#ffe98e";
    return (
      <TouchableOpacity
        onPress={() => _handleDataTypeSelected(index, item)}
        style={styles.lablestyle}
      >
        <Text
          style={[
            styles.txtCat,
            {
              color: selectedColor,
            },
          ]}
        >
          {item.business_type_name}
        </Text>
      </TouchableOpacity>
    );
  };

  const onpressButton = (item) => {
    if (item.business_type == 1) {
      item.order_booking_type == 1
        ? navigation.navigate("FoodOrderDetails", {
          orderId: item.order_id,
          BusinessType,
        })
        : item.order_booking_type == 3
          ? navigation.navigate("TableBookingDetails", {
            orderId: item.order_id,
            BusinessType,
          })
          : item.order_booking_type == 4
            ? navigation.navigate("OutSideBookingOrderDetails", {
              orderId: item.order_id,
              BusinessType,
            })
            : null;
    } else if (item.business_type == 3) {
      navigation.navigate("ServiceOrderDetails", {
        orderId: item.order_id,
        BusinessType,
      });
    } else if (item.business_type == 2) {
      navigation.navigate("ShoppingOrderDetails", {
        orderId: item.order_id,
        BusinessType,
      });
    }
  };
  const _handleOrders = (item, index) => {
    return (
      <TouchableOpacity
        style={styles.ConatinView}
        onPress={() => onpressButton(item)}
      >
        <Image
          style={[styles.DishImgeStyle]}
          resizeMode="center"
          source={{ uri: item.item_image }}
        />
        <View style={styles.DishDiscptnView}>
          <View>
            {item.order_booking_type_text ? (
              <Text style={styles.DishNameTxt}>
                Order Type: {item.order_booking_type_text}
              </Text>
            ) : (
              <Text style={styles.DishNameTxt}>{item.category_name}</Text>
            )}
          </View>
          {item.business_type == 1 ? (
            item.order_booking_type == 3 ? (
              <Text numberOfLines={1} style={styles.DiscrptnTxtStyle}>
                booking Id :- {item.order_id}
              </Text>
            ) : (
              <Text numberOfLines={1} style={styles.DiscrptnTxtStyle}>
                Order Id :- {item.order_id}
              </Text>
            )
          ) : item.business_type == 2 ? (
            <Text style={styles.DiscrptnTxtStyle}>
              Order Id :- {item.order_id}
            </Text>
          ) : null}
          {item.total_amount ? (
            <Text style={styles.DiscrptnTxtStyle}>
              Amount :- {item.total_amount}
            </Text>
          ) : null}
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
                {item.order_status == 0
                  ? "Pending"
                  : item.order_status == 1
                    ? "Confirmed"
                    : item.order_status == 4
                      ? "Canceled"
                      : null}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => onpressButton(item)}
              style={styles.AddBtnTouchable}
            >
              <Image source={Images.ARROW_RIGHT_IMG} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <BusinessOrderHistory
        dataType={dataType}
        _handleDataTypeSelected={_handleDataTypeSelected}
        isSelectedCatgory={isSelectedCatgory}
        _renderCategory={_renderCategory}
        _handleOrders={_handleOrders}
        orderData={orderData}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => ("Home", setVisibleSuccess(false))}
      />
    </View>
  );
};
export default BusinessOrderHistoryView;
