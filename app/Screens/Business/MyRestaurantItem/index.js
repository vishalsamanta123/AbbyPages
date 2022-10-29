import React, { useState, useContext } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import MyRestaurantItem from "./component/MyRestaurantItem";
import styles from "./component/styles";
import { YELLOW_COLOR_CODE, GREY_COLOR_CODE } from "../../../Utils/Constant";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/error";
import Success from "../../../Components/Modal/success";
import { useFocusEffect } from "@react-navigation/native";
import { AddItemCategory } from "../../../Utils/UserContext";
import { Images } from "../../../Utils/images";

const MyRestaurantItemView = ({ navigation }) => {
  const [activeCategory, setactiveCategory] = useContext(AddItemCategory);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [isSelectedCatgory, setIsSelectedCatgory] = useState(
    activeCategory.activeIndex
  );
  const [getItemList, setGetItemList] = useState([]);
  const [getCategoryList, setGetCategoryList] = useState([]);
  const [CategoryId, setCategoryId] = useState(activeCategory.categoryId);
  const [imgUrl, setImgUrl] = useState();

  useFocusEffect(
    React.useCallback(() => {
      getCategoryListFun(activeCategory.categoryId);
      return () => getCategoryListFun(activeCategory.categoryId);
    }, [activeCategory.categoryId])
  );

  // useEffect(() => {
  //     getCategoryListFun()
  //     setIsSelectedCatgory(0)
  // }, [])

  const getCategoryListFun = async (type) => {
    setVisible(true);
    try {
      const params = {
        business_type: 1,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_CATEGORY_LIST,
        params
      );
      if (data.status === 200) {
        // setCategoryId(data.data[0].business_item_category_id)
        getItemListFun(type);
        setGetCategoryList(data.data);
        setVisible(false);
      } else {
        setVisible(false);
        // setErrorMessage(data.message);
        // setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const getItemListFun = async (categoryId) => {
    setVisible(true);
    try {
      const params = {
        business_item_category_id: categoryId,
      };
      const { data } = await apiCall("POST", ENDPOINTS.GET_ITEM_LIST, params);
      if (data.status === 200) {
        setGetItemList(data.data);
        setImgUrl(data.image_path);
        setVisible(false);
      } else {
        setVisible(false);
        setGetItemList([]);
        // setErrorMessage(data.message);
        // setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setGetItemList([]);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const handleActiveStatus = async (item) => {
    try {
      const params = {
        active_status: item.status === 1 ? 0 : 1,
        business_type: item.business_type,
        is_delete: "view",
        item_id: item.item_id,
      };
      const response = await apiCall(
        "POST",
        ENDPOINTS.ITEMS_REMOVE_SHOW_CATEGORY,
        params
      );
      if (response.status === 200) {
        item.status === 0
          ? ToastAndroid.show("Item successfully active", ToastAndroid.SHORT)
          : ToastAndroid.show(
            "Item successfully un-active",
            ToastAndroid.SHORT
          );
        getItemListFun(activeCategory.categoryId);
      } else {
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const _handleDeleteItems = async (item) => {
    try {
      const params = {
        active_status: item.status === 1 ? 0 : 1,
        business_type: item.business_type,
        is_delete: "delete",
        item_id: item.item_id,
      };
      const response = await apiCall(
        "POST",
        ENDPOINTS.ITEMS_REMOVE_SHOW_CATEGORY,
        params
      );
      if (response.status === 200) {
        getItemListFun(activeCategory.categoryId);
      } else {
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const _handleDataTypeSelected = (index, item) => {
    setactiveCategory({
      ...activeCategory,
      activeIndex: index,
      categoryId: item.business_item_category_id,
    });
    setIsSelectedCatgory(index);
    setCategoryId(item.business_item_category_id);
    getItemListFun(item.business_item_category_id);
  };

  const _renderCategory = (item, index) => {
    const selectedColor =
      index === isSelectedCatgory ? YELLOW_COLOR_CODE : GREY_COLOR_CODE;
    return (
      <TouchableOpacity
        onPress={() => _handleDataTypeSelected(index, item)}
        style={[styles.lablestyle, { backgroundColor: selectedColor }]}
      >
        <Text style={styles.txtCat}>{item.category_name}</Text>
      </TouchableOpacity>
    );
  };

  const editItems = (item) => {
    navigation.navigate("AddItem", { itemData: item, type: "Edit", imgUrl });
  };

  const _handleSandwichDish = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => editItems(item)}
        style={styles.ConatinView}
      >
        <Image
          style={styles.DishImgeStyle}
          source={{ uri: imgUrl + item.item_image }}
        />
        <View style={styles.DishDiscptnView}>
          <View>
            <Text style={styles.DishNameTxt}>{item.item_name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[styles.PriceOfDishTxt, { color: YELLOW_COLOR_CODE }]}
              >
                ${item.price}{" "}
              </Text>
              <Text
                style={[
                  styles.PriceOfDishTxt,
                  { textDecorationLine: "line-through" },
                ]}
              >
                ${item.item_discount}
              </Text>
            </View>
            <Text numberOfLines={2} style={styles.DiscrptnTxtStyle}>
              {item.description}
            </Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 12 }}>
            <Image
              style={{ width: 13, height: 13, top: 2 }}
              source={Images.SQUARE_IMG}
            />
            <Text style={[styles.ReviewText, { paddingLeft: 10 }]}>
              {item.item_type == 1 || item.item_type === "Veg"
                ? "Veg"
                : "Non-Veg"}
            </Text>
          </View>
          {/* <View style={styles.AddBtnTouchable}>
                            <Image source={Images.ARROW_RIGHT_IMG} />
                        </View> */}
          <View style={styles.iconicicon}>
            <TouchableOpacity
              onPress={() => editItems(item)}
              style={styles.editdltbtn}
            >
              <Image
                style={styles.iconsize}
                source={Images.EDIT_PHOTO_IMG}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => _handleDeleteItems(item)}
              style={styles.editdltbtn}
            >
              <Image
                style={styles.iconsize}
                source={Images.DELETE_IMG}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.switchstyle}
              onPress={() => handleActiveStatus(item)}
            >
              <Image source={item.status === 1 ?
                Images.ACTIVE_SWITCH_IMG : Images.UNACTIVE_SWITCH_IMG} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const onPressAddCategory = () => {
    navigation.navigate("AddCategory");
  };
  const onPressEditCategory = (deleteType) => {
    navigation.navigate("AddCategory", { activeWithDelete: deleteType });
  };
  const onPressItem = () => {
    if (CategoryId === "") {
      setErrorMessage("Please create Category");
      setVisibleErr(true);
    } else {
      navigation.navigate("AddItem", { CategoryId, type: "AddItem", imgUrl });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <MyRestaurantItem
        _renderCategory={(item, index) => _renderCategory(item, index)}
        _handleDataTypeSelected={_handleDataTypeSelected}
        _handleSandwichDish={(item, index) => _handleSandwichDish(item, index)}
        onPressAddCategory={onPressAddCategory}
        onPressItem={onPressItem}
        getItemList={getItemList}
        getCategoryList={getCategoryList}
        onPressEditCategory={onPressEditCategory}
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
export default MyRestaurantItemView;
