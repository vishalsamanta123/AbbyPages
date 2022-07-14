import React, { useState, Fragment, useEffect, useContext } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import ProductListingScreen from "./components/ProductListingScreen";
import { useFocusEffect, useLinkProps } from "@react-navigation/native";
import _ from "lodash";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import InputSpinner from "react-native-input-spinner";
import Button from "../../Components/Button";
import Error from "../../Components/Modal/error";
import styles from "./components/styles";
import {
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../Utils/Constant";
import { ShoppingCartContext } from "../../Utils/UserContext";
import AsyncStorage from "@react-native-community/async-storage";
import FilterPopUp from "./components/FilterPopUp";
const ProductListing = ({ navigation, route }) => {
  const [shoppingCartData, setShoppingCartData] =
    useContext(ShoppingCartContext);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [stopOffset, setstopOffset] = useState(false);
  const [offSet, setOffSet] = useState();
  const [productList, setProductList] = useState([]);
  const [filter, setFilter] = useState(false);
  const [filterData, setFilterData] = useState({
    color: "",
    category_id: "",
    sub_category_id: "",
    size: "",
    company_brand: "",
    max_price: "",
    min_price: "",
    product_size: "",
    product_tags: "",
  });
  console.log("filterData: ", filterData);

  // useEffect(() => {
  //   if (route.params) {
  //     const { detail } = route.params;
  //     setProductList(detail); //state (close because of the array error)
  //     // handleProductList(0); //function
  //     handleFilterProduct();
  //   }
  // }, []);
  useFocusEffect(
    React.useCallback(() => {
      if (route.params) {
        const { detail } = route.params;
        // setProductList(detail);//state (close because of the array error)
        // handleProductList(0); //function
        productOrderData(detail);
        handleFilterProduct(0);
      }
    }, [])
  );

  const productOrderData = async (detail) => {
    try {
      const data = {
        businessDetail: detail,
      };
      await AsyncStorage.setItem("productOrderData", JSON.stringify(data));
    } catch (error) {
      console.log("errorHuMe", error);
    }
  };
  const handleProductList = async (offset) => {
    setOffSet(offset);
    try {
      const limits = offset + 2;
      setVisible(true);
      const params = {
        limit: offset === 0 ? 20 : 10 * limits,
        offset: offset,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_PRODUCT_LIST,
        params
      );
      if (data.status === 200) {
        setVisible(false);
        setProductList(data.data);
      } else {
        setstopOffset(true);
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(data.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const handleFilterProduct = async (item) => {
    try {
      setVisible(true);
      const params = {
        category_id: filterData.category_id ? filterData.category_id : null,
        company_brand: filterData.company_brand
          ? filterData.company_brand
          : null,
        max_price: filterData.max_price ? filterData.max_price : null,
        min_price: filterData.min_price ? filterData.min_price : 0,
        product_color: filterData.color ? filterData.color : null,
        product_size: filterData.product_size ? filterData.product_size : null,
        product_tags: filterData.product_tags ? filterData.product_tags : null,
        status: 1,
        sub_category_id: filterData.sub_category_id
          ? filterData.sub_category_id
          : null,
      };
      console.log("params: ", params);
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.FILTER_PRODUCTLIST,
        params
      );
      console.log("data: ", data);
      if (data.status === 200) {
        setVisible(false);
        setProductList(data.data);
      } else {
        setstopOffset(true);
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {}
  };
  const SearchProduct = (searchKey) => {
    const lowerCased = searchKey.toLowerCase();
    const searchArray = [...productList];
    const list = _.filter(searchArray, (item) => {
      return item.product_name.toLowerCase().match(lowerCased);
    });
    if (searchKey == "") {
      // handleProductList(0);
      handleFilterProduct();
    }
    setProductList(list);
  };

  const onPressProductDetail = (detail) => {
    navigation.navigate("ProductDetails", { detail: detail });
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
      if (shoppingCartData.length > 0) {
        var getIndex = _.findIndex(shoppingCartData, {
          product_id: item.product_id,
        });
        if (getIndex >= 0) {
          shoppingCartData[getIndex].quantity =
            shoppingCartData[getIndex].quantity + 1;
          shoppingCartData[getIndex].total_product_price =
            shoppingCartData[getIndex].price * value;
          setShoppingCartData(shoppingCartData);
        } else {
          setShoppingCartData((curr) => [...curr, cartProduct]);
        }
      } else {
        setShoppingCartData((curr) => [...curr, cartProduct]);
        // await AsyncStorage.setItem('localCartData', JSON.stringify(shoppingCartData))
      }
    } catch (e) {
      setErrorMessage(e);
      setVisibleErr(true);
    }
  };
  const removeFromCart = (item) => {
    if (shoppingCartData.length > 0) {
      var getIndex = _.findIndex(shoppingCartData, {
        product_id: item.product_id,
      });
      if (getIndex >= 0) {
        if (shoppingCartData[getIndex].quantity > 0) {
          shoppingCartData[getIndex].quantity =
            shoppingCartData[getIndex].quantity - 1;
          shoppingCartData[getIndex].total_product_price =
            shoppingCartData[getIndex].total_product_price -
            shoppingCartData[getIndex].price;
          setShoppingCartData(shoppingCartData);
        }
        if (shoppingCartData[getIndex].quantity === 0) {
          shoppingCartData.splice(getIndex, 1);
          setShoppingCartData(shoppingCartData);
          shoppingCartData.length == 0;
        }
      }
    }
  };
  const getqty = (item) => {
    var getIndex = _.findIndex(shoppingCartData, {
      product_id: item.product_id,
    });
    if (getIndex >= 0) {
      return shoppingCartData[getIndex].quantity;
    }
  };
  const onPressAddProduct = (item, value) => {
    addProductOnCart(item, value);
  };
  const _renderProductList = (item, index) => {
    const setaddbtn = _.filter(shoppingCartData, {
      product_id: item.product_id,
    });
    const selected_row = setaddbtn.length > 0 ? true : false;
    // const selected_row = setaddbtn.length > 0 ? setaddbtn.product_id === item.product_id ? true : false : false
    return (
      <View key={index} style={styles.flatlistcon}>
        <TouchableOpacity onPress={() => onPressProductDetail(item)}>
          <Image
            resizeMode="stretch"
            style={styles.productimg}
            source={{ uri: item.product_image }}
          />
        </TouchableOpacity>
        <View style={{ paddingTop: 5 }}>
          <Text numberOfLines={1} style={[styles.text, { width: "95%" }]}>
            {item.product_name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
              {item.final_price}
            </Text>
            <View>
              <Text
                style={[
                  styles.text,
                  { marginLeft: 20, color: YELLOW_COLOR_CODE },
                ]}
              >
                {item.price}
              </Text>
              <View
                style={{
                  // borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  marginLeft: 20,
                  bottom: 9,
                  opacity: 0.2,
                }}
              />
            </View>
          </View>
          {selected_row ? (
            <InputSpinner
              value={getqty(item)}
              onDecrease={(val) => removeFromCart(item, val)}
              onIncrease={(val) => addProductOnCart(item, val)}
              // min={1}
              max={10}
              step={1}
              editable={false}
              rounded={false}
              textColor={WHITE_COLOR_CODE}
              colorMax={YELLOW_COLOR_CODE}
              colorMin={YELLOW_COLOR_CODE}
              colorPress={YELLOW_COLOR_CODE}
              color={YELLOW_COLOR_CODE}
              inputStyle={{ backgroundColor: "transparent" }}
              buttonPressStyle={{
                height: 25,
                width: 25,
                backgroundColor: YELLOW_COLOR_CODE,
              }}
              buttonStyle={{ height: 25, width: 25, justifyContent: "center" }}
              buttonFontFamily={FONT_FAMILY_REGULAR}
              style={styles.AddBtnTouchable}
            />
          ) : (
            <Button
              onPress={() => onPressAddProduct(item, 1)}
              style={{
                padding: 0,
                paddingVertical: 5,
                width: "100%",
                marginVertical: 5,
              }}
              buttonLabelStyle={{
                fontSize: 14,
                fontFamily: FONT_FAMILY_REGULAR,
              }}
              buttonText="Add"
            />
          )}
        </View>
      </View>
    );
  };
  const onPressFilter = () => {
    setFilter(true);
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ProductListingScreen
        shoppingCartData={shoppingCartData}
        onPressCart={() => {
          shoppingCartData.length !== 0 && navigation.navigate("ShoppingCart");
        }}
        _renderProductList={_renderProductList}
        SearchProduct={SearchProduct}
        productList={productList}
        onPressProductDetail={onPressProductDetail}
        handleProductList={handleProductList}
        onPressFilter={onPressFilter}
      />
      <FilterPopUp
        filter={filter}
        closeModel={() => setFilter(false)}
        setFilterData={setFilterData}
        filterData={filterData}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(false)}
      />
    </View>
  );
};
export default ProductListing;
//  {
// "business_type":2,
// "business_id":2,
// "item":[
// {"product_id":57,
// "product_name":"Royal Enfield Classic 350 Redditch Red",
// "price":"180000",
// "quantity":1,
// "total_product_price":180000,
// "product_discount":1,
// "product_brand":"royal Enfild",
// "product_weight":"100 kg",
// "product_size":"XXL",
// "product_color":"Red",
// "product_description":"hello"}],
// "first_name":"development itinformatix",
// "last_name":"it",
// "email":"devitinformatix@gmail.com",
// "mobile":"+917389892020",
// "address":"Indore, Madhya Pradesh, India",
// "latitude":"22.7195687",
// "longitude":"75.8577258",
// "order_description":"hello",
// "order_payment_type":1,
// "total_order_amount":180000,
// "order_discount":0,
// "total_amount":180000,
// "order_booking_type":2,
// "delivery_type":1
// }
