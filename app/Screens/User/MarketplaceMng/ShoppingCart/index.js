import React, { useState, useContext, useEffect } from "react";
import { View, Alert } from "react-native";
import CommonStyles from "../../../../Utils/CommonStyles";
import ShoppingCartScreen from "./components/ShoppingCartScreen";
import _ from "lodash";
import { apiCall } from "../../../../Utils/httpClient";
import AsyncStorage from "@react-native-community/async-storage";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import Success from "../../../../Components/Modal/success";
import Error from "../../../../Components/Modal/showMessage";
import QuestionModal from "../../../../Components/Modal/questionModal";
import { ShoppingCartContext } from "../../../../Utils/UserContext";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import { useFocusEffect } from "@react-navigation/native";
import ShowMessage from "../../../../Components/Modal/showMessage";

const ShoppingCart = ({ navigation, route }) => {
  const [shoppingCartData, setShoppingCartData] = useState([]);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [reload, setReload] = useState(false);
  const [finalAmount, setFinalAmount] = useState("");
  const [removeItem, setRemoveItem] = useState(false);
  const [allDelete, setAllDelete] = useState(false);
  const [removeIndex, setRemoveIndex] = useState("");
  const [addToCartData, setAddToCartData] = useState({});
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    handleFinalAmount();
  }, [reload, removeIndex]);

  useFocusEffect(
    React.useCallback(() => {
      getCartProducts({});
    }, [navigation, route])
  );

  const getCartProducts = async (item, value) => {
    try {
      const { data } = await apiCall("GET", apiEndPoints.GET_TO_CART_PRODUCT);


      if (data.status === 200) {
        setShoppingCartData(data?.data?.allProduct);
        setFinalAmount(data?.data?.total_amount);
      } else {
        setShoppingCartData({});
      }
    } catch (e) {
      console.log("🚀 ~ file: index.js:136 ~ e:", e);
    }
  };

  const handleProductCount = async (item, value) => {
    try {
      const params = {
        product_id: item?.product_id,
        quantity: value,
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.ADD_TO_CART_PRODUCT,
        params
      );

      if (data.status === 200) {
        setAddToCartData(data?.data);
        // setMessageShow({
        //   visible: true,
        //   type: "success",
        //   message: data?.message,
        // });
      } else {
        setAddToCartData({});
        setMessageShow({
          visible: true,
          type: "error",
          message: data?.message,
        });
      }
    } catch (e) {
      console.log("🚀 ~ file: index.js:136 ~ e:", e);
      setMessageShow({
        visible: true,
        type: "error",
        message: e?.message,
      });
    }
  };

  const handleFinalAmount = () => {
    // const FinalAmount = shoppingCartData?.reduce(
    //   (accumulatedTotal, curr) => accumulatedTotal + curr.total,
    //   0
    // );
  };
  const onPressContinue = () => {
    // if (shoppingCartData.length !== 0) {
    // console.log("Checkout");
    // navigation.navigate("CheckOut");
    // }
  };
  const addProductOnCart = async (item, value) => {
    try {
      const cartProduct = {
        product_id: item.product_id,
        product_name: item.product_name,
        price: item.final_price,
        quantity: value,
        total_product_price: item.final_price * value,
        product_discount: item.price - item.final_price,
        product_weight: item.product_weight,
        product_size: item.product_size,
        product_color: item.product_color,
        product_brand: item.company_brand,
        product_description: item.description,
        product_image: item.product_image,
      };
      handleProductCount(item, value);
      // if (shoppingCartData?.length > 0) {
      //   var getIndex = _.findIndex(shoppingCartData, {
      //     product_id: item.product_id,
      //   });
      //   if (getIndex >= 0) {
      //     shoppingCartData[getIndex].quantity =
      //       shoppingCartData[getIndex].quantity + 1;
      //     shoppingCartData[getIndex].total_product_price =
      //       shoppingCartData[getIndex].price * value;
      //     setShoppingCartData(shoppingCartData);
      //     const data = [...shoppingCartData];
      //     setShoppingCartData(data);
      //   } else {
      //     setShoppingCartData((curr) => [...curr, cartProduct]);
      //   }
      // } else {
      //   setShoppingCartData((curr) => [...curr, cartProduct]);
      //   // await AsyncStorage.setItem('localCartData', JSON.stringify(shoppingCartData))
      // }
      handleFinalAmount();
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };
  const removeFromCart = (item, value) => {
    handleProductCount(item, value);
    // if (shoppingCartData.length > 0) {
    //   var getIndex = _.findIndex(shoppingCartData, {
    //     product_id: item.product_id,
    //   });
    //   if (getIndex >= 0) {
    //     if (shoppingCartData[getIndex].quantity > 0) {
    //       shoppingCartData[getIndex].quantity =
    //         shoppingCartData[getIndex].quantity - 1;
    //       shoppingCartData[getIndex].total_product_price =
    //         shoppingCartData[getIndex].total_product_price -
    //         shoppingCartData[getIndex].price;
    //       setShoppingCartData(shoppingCartData);
    //       const data = [...shoppingCartData];
    //       setShoppingCartData(data);
    //     }
    //     if (shoppingCartData[getIndex].quantity === 0) {
    //       shoppingCartData.splice(getIndex, 1);
    //       setShoppingCartData(shoppingCartData);
    //       const data = [...shoppingCartData];
    //       setShoppingCartData(data);
    //       shoppingCartData.length == 0;
    //     }
    //   }
    // }
    handleFinalAmount();
  };
  const getqty = (item) => {
    var getIndex = _.findIndex(shoppingCartData, {
      product_id: item.product_id,
    });
    if (getIndex >= 0) {
      return shoppingCartData?.[getIndex]?.quantity;
    }
  };
  const DeleteItem = (item) => {
    try {
      setVisible(true);
      setRemoveItem(false);
      if (shoppingCartData?.length > 0) {
        var getIndex = _.findIndex(shoppingCartData, {
          product_id: item.product_id,
        });
        if (getIndex >= 0) {
          const cartLocalFunctionData = [...shoppingCartData];
          cartLocalFunctionData.splice(getIndex, 1);
          setShoppingCartData(cartLocalFunctionData);
          setReload(!reload);
          handleFinalAmount();
          setRemoveIndex("");
          setVisible(false);
        }
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const DeleteCart = async () => {
    setShoppingCartData([]);
    await AsyncStorage.removeItem("productOrderData");
    setAllDelete(false);
    navigation.navigate("ShopList");
  };

  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ShoppingCartScreen
        finalAmount={finalAmount}
        getqty={getqty}
        removeFromCart={removeFromCart}
        addProductOnCart={addProductOnCart}
        shoppingCartData={shoppingCartData}
        onPressContinue={onPressContinue}
        setRemoveItem={setRemoveItem}
        setRemoveIndex={setRemoveIndex}
        setAllDelete={setAllDelete}
      />
      {/* <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(false)}
      /> */}
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
        onEndVisible={() => {
          setMessageShow({
            visible: false,
            message: "",
            type: "",
          });
        }}
      />
      <QuestionModal
        surringVisible={removeItem}
        topMessage={"Delete Product from Cart"}
        message={"Are you sure you want to delete product from cart ?"}
        positiveResponse={() => DeleteItem(removeIndex)}
        negativeResponse={() => setRemoveItem(false)}
      />
      <QuestionModal
        surringVisible={allDelete}
        topMessage={"Delete Carts"}
        message={"Do you want to delete this carts ?"}
        positiveResponse={() => DeleteCart()}
        negativeResponse={() => setAllDelete(false)}
      />
    </View>
  );
};
export default ShoppingCart;
