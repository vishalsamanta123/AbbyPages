import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import _ from "lodash";
import OrderHistory from "./component/OrderHistory";
import styles from "./component/styles";
import {
  SMALL_TEXT_COLOR_CODE,
  LIGHT_WHITE_COLOR,
  WHITE_COLOR_CODE,
  COLORS,
} from "../../../Utils/Constant";
import { useIsFocused } from "@react-navigation/native";
import CommonStyles from "../../../Utils/CommonStyles";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Success from "../../../Components/Modal/success";
import Error from "../../../Components/Modal/showMessage";
import { RowSingleTxtList } from "../../../Components/ListItemsView";

const OrderHistoryView = ({ navigation }) => {
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [offSet, setOffSet] = useState(0);
  const [stopOffset, setstopOffset] = useState(false);
  const [itemCategoryList, setItemCategoryList] = useState("");
  const [orderItemList, setOrderItemList] = useState("");
  const [isSelectedCatgory, setIsSelectedCatgory] = useState(0);
  const isFocus = useIsFocused();

  useEffect(() => {
    handleItemCategoryList();
    handleOrderedItemList(0, isSelectedCatgory);
  }, [isFocus]);

  const handleItemCategoryList = async () => {
    setVisible(true);
    try {
      const { data } = await apiCall("POST", ENDPOINTS.BUSINESS_CATEGORY_LIST);
      if (data.status === 200) {
        setItemCategoryList(data.data);
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
  const handleOrderedItemList = async (offset, category_id) => {
    setOffSet(offset);
    setIsSelectedCatgory(category_id);
    try {
      setVisible(true);
      const params = {
        offset: offset,
        business_type: category_id,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUSINESS_ITEM_ORDER_LIST,
        params
      );
      if (data.status === 200) {
        setOrderItemList(data.data);
        setVisible(false);
      } else {
        if (data.status === 201) {
          setOrderItemList([]);
          ToastAndroid.show(data.message, ToastAndroid.CENTER);
          setVisible(false);
          setstopOffset(true);
        } else {
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
        }
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const onpressOrder = (item) => {
    navigation.navigate("OrderDetailIndex", { OrderDetail: item });
  };
  const _renderCategory = (item, index) => {
    return (
      <>
        <RowSingleTxtList
          text={item.business_type_name}
          txtColor={
            item.business_type_id === isSelectedCatgory
              ? COLORS.YELLOW
              : COLORS.BLACK
          }
          borderColor={
            item.business_type_id === isSelectedCatgory
              ? COLORS.YELLOW
              : COLORS.BLACK
          }
          onPressItem={() => {
            if (item.business_type_id != isSelectedCatgory) {
              handleOrderedItemList(0, item.business_type_id);
            }
          }}
          borderBottomWidth={
            item.business_type_id === isSelectedCatgory ? 1 : 0
          }
        />
      </>
    );
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <OrderHistory
        orderItemList={orderItemList}
        itemCategoryList={itemCategoryList}
        onpressOrder={onpressOrder}
        _renderCategory={_renderCategory}
        offSet={offSet}
        setOffSet={setOffSet}
        stopOffset={stopOffset}
        isSelectedCatgory={isSelectedCatgory}
        handleOrderedItemList={handleOrderedItemList}
        setIsSelectedCatgory={setIsSelectedCatgory}
      />
    </View>
  );
};
export default OrderHistoryView;
