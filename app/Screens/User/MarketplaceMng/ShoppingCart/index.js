import React, { useState, useContext } from "react";
import { View } from "react-native";
import CommonStyles from "../../../../Utils/CommonStyles";
import ShoppingCartScreen from "./components/ShoppingCartScreen";
import _ from "lodash";
import { apiCall } from "../../../../Utils/httpClient";
import Loader from "../../../../Utils/Loader";
import QuestionModal from "../../../../Components/Modal/questionModal";
import {
  UserContext,
} from "../../../../Utils/UserContext";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import { useFocusEffect } from "@react-navigation/native";
import ShowMessage from "../../../../Components/Modal/showMessage";

const ShoppingCart = ({ navigation, route }) => {
  const [userData, setUserData] = useContext(UserContext);
  const [shoppingCartData, setShoppingCartData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [finalAmount, setFinalAmount] = useState(0);
  const [removeItem, setRemoveItem] = useState(false);
  const [allDelete, setAllDelete] = useState(false);
  const [removeIndex, setRemoveIndex] = useState("");
  const [updateCartQuantityData, setUpdateCartQuantityData] = useState({});
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });

  useFocusEffect(
    React.useCallback(() => {
      getCartProducts();
    }, [navigation, route, updateCartQuantityData])
  );

  const getCartProducts = async () => {
    console.log()
    try {
      const { data } = await apiCall("GET", apiEndPoints.GET_TO_CART_PRODUCT);
      if (data.status === 200) {
        setShoppingCartData(data?.data?.allProduct);
        setFinalAmount(data?.data?.total_amount);
      } else {
        setShoppingCartData({});
        setFinalAmount(0)
      }
    } catch (e) {
      console.log("🚀 ~ file: index.js:136 ~ e:", e);
    }
  };
  const handleUpdateQuantity = async (item, value) => {
    try {
      const params = {
        product_id: item?.product_id,
        work_status: value,
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.UPDATE_CART_QUANTITY,
        params
      );
      if (data.status === 200) {
        setUpdateCartQuantityData(data?.data);
        setRemoveItem(false);
        if (value === "clearAll") {
          setShoppingCartData([]);
          setAllDelete(false);
          navigation.goBack();
        }
        getCartProducts();
      } else {
        setUpdateCartQuantityData({});
        setRemoveItem(false);
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
  const onPressContinue = () => {
    if (userData?.login_type) {
      if (shoppingCartData?.length > 0) {
        navigation.navigate("CheckOut");
      } else {
        setMessageShow({
          visible: true,
          type: "error",
          message: "Please add product on cart",
        });
      }
    } else {
      setMessageShow({
        visible: true,
        type: "error",
        message: "Please log in to application",
      });
    }
  };
  const addProductOnCart = async (item, value) => {
    handleUpdateQuantity(item, "add");
  };
  const removeFromCart = (item, value) => {
    handleUpdateQuantity(item, "remove");
  };

  const handleRemoveProductFromCart = (item) => {
    handleUpdateQuantity(item, "clear");
  };
  const DeleteCart = async () => {
    handleUpdateQuantity({}, "clearAll");
  };

  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ShoppingCartScreen
        finalAmount={finalAmount}
        removeFromCart={removeFromCart}
        addProductOnCart={addProductOnCart}
        shoppingCartData={shoppingCartData?.length > 0 ? shoppingCartData : []}
        onPressContinue={onPressContinue}
        setRemoveItem={setRemoveItem}
        setRemoveIndex={setRemoveIndex}
        setAllDelete={setAllDelete}
        handleRemoveProductFromCart={handleRemoveProductFromCart}
      />
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
        positiveResponse={() => handleRemoveProductFromCart(removeIndex)}
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
