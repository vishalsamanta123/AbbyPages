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

const RestroItemDetail = ({ navigation, route }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [cartValData, setCartValData] = useState({
    spice_level: "",
    special_instruct: "",
  });
  const [totalItemPrice, setTotalItemPrice] = useState("");
  const [cartData, setCartData] = useContext(CartContext);
  const [spiceLevel, setspiceLevel] = useState("");
  const [ShowSpiceLevel, setShowSpiceLevel] = useState("");
  const [ShowSpiceDigit, setShowSpiceDigit] = useState("");
  const [itemDetail, setItemDetail] = useState("");

  const [Quantity, setQuantity] = useState("");
  const [Special, setSpecial] = useState("");
  useEffect(() => {
    if (route.params) {
      const { itemDetail } = route.params;
      setItemDetail(itemDetail);
      handleFinalAmount(itemDetail);
    }
  }, []);
  const onPressSave = () => {
    // navigation.navigate('Searching')
  };
  const onPressSpiceLevel = () => {
    setShowSpiceLevel(!ShowSpiceLevel);
  };
  const onPressSpiceLevelValue = (value) => {
    setspiceLevel(value);
    setShowSpiceLevel(!ShowSpiceLevel);
    if (value === -"Low") {
      setShowSpiceDigit(1);
    }
    if (value === "Medium") {
      setShowSpiceDigit(2);
    }
    if (value === "High") {
      setShowSpiceDigit(3);
    }
  };
  const onPressAddToCart = (item) => {
    if (cartData.length > 0) {
      var getIndex = _.findIndex(cartData, { item_id: item.item_id });
      if (getIndex >= 0) {
        setVisible(true);
        cartData[getIndex].spice_level = ShowSpiceDigit;
        cartData[getIndex].item_description = Special;
        setCartData(cartData);
        navigation.navigate("RestroMenu", { orderDetail: item });
        setVisible(false);
      }
    }
  };
  const handleFinalAmount = (item) => {
    var getIndex = _.findIndex(cartData, { item_id: item.item_id });
    if (getIndex >= 0) {
      if (cartData[getIndex].total_item_price) {
        setTotalItemPrice(cartData[getIndex].total_item_price);
      }
      if (cartData[getIndex].special_instruction) {
        setSpecial(cartData[getIndex].special_instruction);
      }
      if (cartData[getIndex].spice_level) {
        cartData[getIndex].spice_level == 1 && setspiceLevel("Low");
        cartData[getIndex].spice_level == 2 && setspiceLevel("Medium");
        cartData[getIndex].spice_level == 3 && setspiceLevel("High");
      }
    }
  };
  const getqty = (item) => {
    var getIndex = _.findIndex(cartData, { item_id: item.item_id });
    if (getIndex >= 0) {
      setTotalItemPrice(cartData[getIndex].total_item_price); //not permanent hatana h sahi nahi h yaha pr
      return cartData[getIndex].quantity;
    }
  };
  const removeFromCart = (item) => {
    if (cartData.length > 0) {
      var getIndex = _.findIndex(cartData, { item_id: item.item_id });
      if (getIndex >= 0) {
        if (cartData[getIndex].quantity > 0) {
          cartData[getIndex].quantity = cartData[getIndex].quantity - 1;
          cartData[getIndex].total_item_price =
            cartData[getIndex].total_item_price - cartData[getIndex].price;
          // setTotalPrice(totalPrice - cartData[getIndex].price)
          setCartData(cartData);
        }
        if (cartData[getIndex].quantity === 0) {
          // setTotalPrice(totalPrice - cartData[getIndex].price)
          cartData.splice(getIndex, 1);
          setCartData(cartData);
          cartData.length == 0;
        }
      }
    }
  };
  const addToCart = async (item, value) => {
    try {
      const cartItem = {
        item_id: item.item_id,
        item_name: item.item_name,
        price: item.price,
        quantity: value,
        total_item_price: item.price * value,
        item_discount: item.item_discount,
      };
      if (cartData.length > 0) {
        var getIndex = _.findIndex(cartData, { item_id: item.item_id });
        if (getIndex >= 0) {
          cartData[getIndex].quantity = cartData[getIndex].quantity + 1;
          cartData[getIndex].total_item_price =
            cartData[getIndex].price * value;
          setCartData(cartData);
        } else {
          setCartData((curr) => [...curr, cartItem]);
          // setTotalPrice(totalPrice + item.price);
        }
      } else {
        setCartData((curr) => [...curr, cartItem]);
      }
    } catch (e) {
      setErrorMessage(e);
      setVisibleErr(true);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <RestroItemDetailView
        totalItemPrice={totalItemPrice}
        handleFinalAmount={handleFinalAmount}
        getqty={getqty}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        itemDetail={itemDetail}
        ShowSpiceLevel={ShowSpiceLevel}
        setShowSpiceLevel={setShowSpiceLevel}
        spiceLevel={spiceLevel}
        setspiceLevel={setspiceLevel}
        onPressSpiceLevel={onPressSpiceLevel}
        onPressSpiceLevelValue={onPressSpiceLevelValue}
        Quantity={Quantity}
        Special={Special}
        setQuantity={setQuantity}
        setSpecial={setSpecial}
        onPressSave={onPressSave}
        onPressAddToCart={onPressAddToCart}
        setCartValData={setCartValData}
        cartValData={cartValData}
      />
    </View>
  );
};
export default RestroItemDetail;
