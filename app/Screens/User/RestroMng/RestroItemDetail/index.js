import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import _ from "lodash";
import { CartContext } from "../../../../Utils/UserContext";
import RestroItemDetailView from "./components/RestroItemDetailView";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import Success from "../../../../Components/Modal/success";
import Error from "../../../../Components/Modal/showMessage";
import { useFocusEffect } from "@react-navigation/native";

const RestroItemDetail = ({ navigation, route }) => {
  const { itemDetail = {} } = route.params;
  const [cartValData, setCartValData] = useState({
    spice_level: 2,
    special_instruct: "",
    quantity: 0,
    total_item_price: "",
  });
  const [cartData, setCartData] = useContext(CartContext);
  const [itemData, setItemData] = useState({});

  useFocusEffect(
    React.useCallback(() => {
      if (route?.params) {
        setItemData(itemDetail);
      }
      var getData = _.find(cartData, { item_id: itemDetail.item_id });
      if (getData?.business_item_category_id) {
        setCartValData({
          spice_level: getData?.spice_level,
          special_instruct: getData?.item_description,
          quantity: getData?.quantity,
          total_item_price: getData?.total_item_price,
        });
      } else {
        setCartValData({
          spice_level: "",
          special_instruct: "",
          quantity: 0,
          total_item_price: itemDetail?.discounted_price,
        });
      }
    }, [route?.params, navigation])
  );
  const onPressAddToCart = (item) => {
    if (cartData?.length > 0) {
      var getIndex = _.findIndex(cartData, { item_id: item.item_id });
      if (getIndex >= 0) {
        cartData[getIndex].spice_level = cartValData?.spice_level;
        cartData[getIndex].item_description = cartValData?.special_instruct;
        setCartData(cartData);
        navigation.navigate("RestroMenu", { detail: item });
      } else {
        const items = {
          ...item,
          discounted_price: item.discounted_price,
          total_item_price: item.discounted_price * cartValData?.quantity,
          item_discount: item.item_discount,
          quantity: cartValData?.quantity,
          spice_level: cartValData?.spice_level,
          item_description: cartValData?.special_instruct,
        };
        setCartData((curr) => [...curr, items]);
        setCartValData({
          ...cartValData,
          total_item_price: items.discounted_price * cartValData?.quantity,
        });
        navigation.navigate("RestroMenu", { detail: item });
      }
    } else {
      const items = {
        ...item,
        discounted_price: item.discounted_price,
        total_item_price: item.discounted_price * cartValData?.quantity,
        item_discount: item.item_discount === null ? 0 : item.item_discount,
        quantity: cartValData?.quantity,
        spice_level: cartValData?.spice_level,
        item_description: cartValData?.special_instruct,
      };
      setCartData((curr) => [...curr, items]);
      setCartValData({
        ...cartValData,
        total_item_price: items.discounted_price * cartValData?.quantity,
      });
      navigation.navigate("RestroMenu", { detail: item });
    }
  };
  const removeFromCart = (item, value) => {
    setCartValData({
      ...cartValData,
      quantity: value,
    });
    if (cartData.length > 0) {
      var getIndex = _.findIndex(cartData, { item_id: item.item_id });
      if (getIndex >= 0) {
        if (cartData[getIndex].quantity > 0 && value > 0) {
          const newObj = { ...cartData[getIndex] };
          newObj.quantity = newObj.quantity - 1;
          newObj.total_item_price =
            newObj.total_item_price - newObj.discounted_price;
          const newArray = [...cartData];
          newArray[getIndex] = newObj;
          setCartData(newArray);
        } else if (value === 0) {
          cartData.splice(getIndex, 1);
          setCartData(cartData);
        }
      }
    }
  };
  const addToCart = async (item, value) => {
    setCartValData({
      ...cartValData,
      quantity: value,
    });
    const items = {
      ...item,
      discounted_price: item.discounted_price,
      total_item_price: item.discounted_price * value,
      item_discount: item.item_discount === null ? 0 : item.item_discount,
      quantity: value,
      spice_level: "",
      item_description: "",
    };
    if (cartData.length > 0) {
      var getIndex = _.findIndex(cartData, { item_id: item.item_id });
      if (getIndex >= 0) {
        const newObj = { ...cartData[getIndex] };
        newObj.quantity = newObj.quantity + 1;
        newObj.total_item_price = newObj.discounted_price * value;
        const newArray = [...cartData];
        newArray[getIndex] = newObj;
        setCartData(newArray);
      } else {
        setCartData((curr) => [...curr, items]);
      }
    } else {
      setCartData((curr) => [...curr, items]);
    }
  };
  return (
    <View style={CommonStyles.container}>
      <RestroItemDetailView
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        onPressAddToCart={onPressAddToCart}
        itemData={itemData}
        cartValData={cartValData}
        setCartValData={setCartValData}
      />
    </View>
  );
};
export default RestroItemDetail;
