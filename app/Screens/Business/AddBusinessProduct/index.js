import React, { useState } from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import AddBusinessProductScreen from "./components/AddBusinessProductScreen";
import CommonStyles from "../../../Utils/CommonStyles";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import ImagePicker from "react-native-image-crop-picker";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/showMessage";
import Success from "../../../Components/Modal/success";
import { useFocusEffect } from "@react-navigation/native";
import { FONT_FAMILY_REGULAR, WHITE_COLOR_CODE } from "../../../Utils/Constant";

const AddBusinessProduct = ({ route, navigation }) => {
  const type = route.params ? route.params.type : null;
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [HedarType, setHedarType] = useState(type);

  const Id = route.params ? route.params.productId : null;
  const [productId, setProductId] = useState(Id);

  const [itemImage, setItemImage] = useState("");
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();

  const [productDiscount, setProductDiscount] = useState();
  const [productQuanlity, setProductQuanlity] = useState();
  const [productSize, setProductSize] = useState();
  const [productFinalPrice, setProductFinalPrice] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productColor, setProductColor] = useState();
  const [productWeight, setProductWeight] = useState();
  const [productBrand, setProductBrand] = useState();
  const [ProductImg, setProductImg] = useState();

  const [businessCategory, setbusinessCategory] = useState(false);
  const [CategoryData, SetCategoryData] = useState([]);
  const [CategoryId, SetCategoryId] = useState();
  const [CategoryName, SetCategoryName] = useState();
  const [SubCategoryData, SetSubCategoryData] = useState([]);
  const [SubCategory, SetSubCategory] = useState(false);
  const [SubCategoryId, SetSubCategoryId] = useState();
  const [SubCategoryName, SetSubCategoryName] = useState();

  const [BusiCategory, SetBusiCategory] = useState(false);
  const [SelectImgUri, setSelectImgUri] = useState();
  const [camerastate, setCamerastate] = useState(false);
  const [selectedSize, setSelectedSize] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      ProductDetails();
      return () => ProductDetails();
    }, [])
  );

  const staticContentData = [
    {
      id: 1,
      name: "Size M",
    },
    {
      id: 2,
      name: "Size L",
    },
    {
      id: 3,
      name: "Size XL",
    },
    {
      id: 4,
      name: "Size XXL",
    },
    {
      id: 5,
      name: "Size XXXL",
    },
  ];
  const handleSelectedName = (item) => {
    const array = [...selectedSize];
    array.push(item.name);
    // setSelectedSize(array);
    setSelectedSize(item.name);
    setModalVisible(false);
  };
  const renderStaticContentData = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => handleSelectedName(item)}
        style={{ flex: 1, padding: 10 }}
      >
        <Text
          style={{
            fontFamily: FONT_FAMILY_REGULAR,
            fontSize: 15,
            color: WHITE_COLOR_CODE,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const ProductDetails = async () => {
    if (productId) {
      try {
        setVisible(true);
        const params = { product_id: productId };
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.GET_BUSINESS_PRODUCT_DETAILS,
          params
        );
        if (data.status === 200) {
          setProductName(data.data.product_name);
          setProductPrice(data.data.price);
          setProductDiscount(data.data.discount);
          setProductQuanlity(data.data.quantity);
          setSelectedSize(data.data.product_size);
          setProductFinalPrice(data.data.final_price);
          setProductDescription(data.data.description);
          setProductColor(data.data.product_color);
          setProductWeight(data.data.product_weight);
          setProductBrand(data.data.company_brand);
          setProductImg(data.data.product_image);
          SetCategoryId(data.data.category_id);
          SetCategoryName(data.data.category_name);
          SetSubCategoryId(data.data.sub_category_id);
          SetSubCategoryName(data.data.sub_category_name);
          setVisible(false);
        } else {
          setVisible(false);
          setErrorMessage(data.message);
          setVisibleErr(true);
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
        setVisible(false);
      }
    }
  };
  const onPressSave = async () => {
    const valid = validationFrom();
    if (valid) {
      setVisible(true);
      try {
        let formdata = new FormData();
        SelectImgUri &&
          SelectImgUri.map((image) => {
            var filename = image.path.substring(
              image.path.lastIndexOf("/") + 1
            );
            return formdata.append("product_image", {
              uri: image.path,
              type: image.mime,
              name: filename,
            });
          });
        // formdata.append("business_type", 2)
        // formdata.append("category_id", CategoryId)
        // formdata.append("sub_category_id", SubCategoryId)
        // formdata.append("business_category_id", 1)
        // formdata.append("product_name", productName)
        // formdata.append("quantity", productQuanlity)
        // formdata.append("price", productPrice)
        // formdata.append("discount", productDiscount)
        // formdata.append("final_price", productFinalPrice)
        // formdata.append("description", productDescription)
        // formdata.append("product_size", selectedSize)
        // formdata.append("product_color", productColor)
        // formdata.append("product_weight", productWeight)
        // formdata.append("company_brand", productBrand)
        productId == null ? null : formdata.append("product_id", productId);
        formdata.append("business_type", 2);
        formdata.append("category_id", CategoryId);
        formdata.append("sub_category_id", SubCategoryId);
        formdata.append("business_category_id", 1);
        formdata.append("product_name", productName);
        formdata.append("quantity", productQuanlity);
        formdata.append("price", productPrice);
        formdata.append("discount", productDiscount);
        formdata.append("final_price", productFinalPrice);
        formdata.append("description", productDescription);
        formdata.append("product_size", selectedSize);
        formdata.append("product_color", productColor);
        formdata.append("product_weight", productWeight);
        formdata.append("company_brand", productBrand);
        formdata.append("dispatch_origin", 1);
        formdata.append("processing_time", 4);
        formdata.append("fixed_postage_prices", 100);
        formdata.append("destination", 2);
        formdata.append("What_is_it", 1);
        formdata.append("who_made_it", "i_did");
        formdata.append("When_it_made", 2019 - 2019);
        formdata.append("product_type", 1);

        const { data } = await apiCall(
          "POST",
          ENDPOINTS.ADD_PRODUCT_FOR_STORE,
          formdata
        );
        if (data.status === 200) {
          navigation.navigate("MyProductList");
          //   setVisibleSuccess(true);
          setSuccessMessage(data.message);
          setVisible(false);
        } else {
          setVisible(false);
          setErrorMessage(data.message);
          setVisibleErr(true);
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
        setVisible(false);
      }
    }
  };

  function validationFrom() {
    if (CategoryId == undefined) {
      setErrorMessage("Please select category");
      setVisibleErr(true);
      return false;
    }
    if (SubCategoryId == undefined) {
      setErrorMessage("Please select sub category");
      setVisibleErr(true);
      return false;
    }
    if (productName == undefined) {
      setErrorMessage("Please enter product name");
      setVisibleErr(true);
      return false;
    }
    if (productPrice == undefined) {
      setErrorMessage("Please enter product price");
      setVisibleErr(true);
      return false;
    }
    if (productDiscount == undefined) {
      setErrorMessage("Please enter product discount");
      setVisibleErr(true);
      return false;
    }
    if (productQuanlity == undefined) {
      setErrorMessage("Please enter product quanlity");
      setVisibleErr(true);
      return false;
    }
    if (productFinalPrice == undefined) {
      setErrorMessage("Please enter product final price");
      setVisibleErr(true);
      return false;
    }
    if (productDescription == undefined) {
      setErrorMessage("Please enter product description");
      setVisibleErr(true);
      return false;
    }
    if (selectedSize == undefined) {
      setErrorMessage("Please select product size");
      setVisibleErr(true);
      return false;
    }
    if (productColor == undefined) {
      setErrorMessage("Please enter product color");
      setVisibleErr(true);
      return false;
    }
    if (productWeight == undefined) {
      setErrorMessage("Please enter product weight");
      setVisibleErr(true);
      return false;
    }
    if (productBrand == undefined) {
      setErrorMessage("Please enter product brand");
      setVisibleErr(true);
      return false;
    }
    // if (SelectImgUri == undefined) {
    //     setErrorMessage('Please select item image');
    //     setVisibleErr(true);
    //     return false;
    // }
    return true;
  }

  const onPressProfileImage = () => {
    setCamerastate(true);
  };

  const onPressGallery = () => {
    setCamerastate(false);
    ImagePicker.openPicker({
      multiple: true,
      compressImageQuality: 1,
    }).then((images) => {
      setSelectImgUri(images);
    });
  };

  const onPressCamera = () => {
    setCamerastate(false);
    ImagePicker.openCamera({
      compressImageQuality: 1,
      // cropping: true,
      // freeStyleCropEnabled: true,
    }).then((image) => {
      setSelectImgUri([image]);
    });
  };

  const onPressCategories = async () => {
    setbusinessCategory(!businessCategory);
    !businessCategory ? categoryFun() : null;
  };

  const categoryFun = async () => {
    try {
      setVisible(true);
      const params = {
        business_type: 2,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_BUSINESS_CATEGORY_LIST,
        params
      );
      if (data.status === 200) {
        setErrorMessage(data.message);
        SetCategoryData(data.data.category_data);
        // navigation.navigate('JobManagementList')
        setVisible(false);
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const onClickCategory = async (item) => {
    setbusinessCategory(!businessCategory);
    SetCategoryId(item.id);
    SetCategoryName(item.category_name);
    try {
      setVisible(true);
      const params = {
        business_type: 2,
        category_id: item.id,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_BUSINESS_CATEGORY_LIST,
        params
      );
      if (data.status === 200) {
        setErrorMessage(data.message);
        SetSubCategoryData(data.data.category_data);
        setVisible(false);
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const onPressSubCategories = () => {
    SetSubCategory(!SubCategory);
  };
  const onClickSubCategory = (item) => {
    SetSubCategory(!SubCategory);
    SetSubCategoryId(item.id);
    SetSubCategoryName(item.category_name);
  };

  const onPressBusinessCategories = (item) => {
    SetBusiCategory(!BusiCategory);
    SubCategoryId ? busiCategoryFun() : null;
  };

  const busiCategoryFun = async () => {
    try {
      setVisible(true);
      const params = {
        business_type: 2,
        category_id: SubCategoryId,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_BUSINESS_PRODUCT_CATEGORY,
        params
      );
      if (data.status === 200) {
        setErrorMessage(data.message);
        // SetSubCategoryData(data.data.category_data)
        setVisible(false);
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const DeleteProductMsg = (item) =>
    Alert.alert(
      "",
      "Are you sure you want delete image",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => productImgDelete(item) },
      ],
      { cancelable: false }
    );

  const productImgDelete = async (item) => {
    setVisible(true);
    try {
      const params = {
        product_id: item.product_id,
        product_image_id: item.product_image_id,
        delete_type: "2",
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUSINESS_PRODUCT_DELETE,
        params
      );
      if (data.status === 200) {
        ProductDetails();
        // navigation.navigate('MyProductList')
        setVisible(false);
        // setSuccessMessage('Product delete successfully')
        // setVisibleSuccess(true)
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const localProductImgDelete = (index) => {
    const images = [...SelectImgUri];
    if (index > -1) {
      images.splice(index, 1);
    }
    setSelectImgUri(images);
  };

  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <AddBusinessProductScreen
        itemImage={itemImage}
        productName={productName}
        setProductName={setProductName}
        setProductPrice={setProductPrice}
        productPrice={productPrice}
        setProductDiscount={setProductDiscount}
        productDiscount={productDiscount}
        setProductQuanlity={setProductQuanlity}
        productQuanlity={productQuanlity}
        setProductSize={setProductSize}
        productSize={productSize}
        setProductFinalPrice={setProductFinalPrice}
        productFinalPrice={productFinalPrice}
        setProductDescription={setProductDescription}
        productDescription={productDescription}
        setProductColor={setProductColor}
        productColor={productColor}
        setProductWeight={setProductWeight}
        productWeight={productWeight}
        setProductBrand={setProductBrand}
        productBrand={productBrand}
        businessCategory={businessCategory}
        onPressCategories={onPressCategories}
        CategoryData={CategoryData}
        onClickCategory={onClickCategory}
        CategoryName={CategoryName}
        SubCategoryData={SubCategoryData}
        onPressSubCategories={onPressSubCategories}
        SubCategory={SubCategory}
        onClickSubCategory={onClickSubCategory}
        SubCategoryName={SubCategoryName}
        onPressBusinessCategories={onPressBusinessCategories}
        BusiCategory={BusiCategory}
        onPressSave={onPressSave}
        onPressProfileImage={onPressProfileImage}
        SelectImgUri={SelectImgUri}
        setSelectImgUri={setSelectImgUri}
        ProductImg={ProductImg}
        DeleteProductMsg={DeleteProductMsg}
        localProductImgDelete={localProductImgDelete}
        HedarType={HedarType}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        staticContentData={staticContentData}
        renderStaticContentData={renderStaticContentData}
        selectedSize={selectedSize}
        // itemImg={itemImg}
        // imgUrl={imgUrl}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(!visibleSuccess)}
      />
      <Dialog
        dialogStyle={{
          position: "absolute",
          bottom: 0,
          flex: 0.5,
          width: "100%",
          paddingBottom: 20,
        }}
        visible={camerastate}
        onTouchOutside={() => setCamerastate(false)}
        onHardwareBackPress={() => setCamerastate(false)}
      >
        <DialogContent>
          <View>
            <TouchableOpacity
              onPress={() => onPressCamera()}
              style={{ padding: 10, borderBottomWidth: 1 }}
            >
              <Text>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPressGallery()}
              style={{ padding: 10, borderBottomWidth: 1 }}
            >
              <Text>Gallery</Text>
            </TouchableOpacity>
          </View>
        </DialogContent>
      </Dialog>
    </View>
  );
};
export default AddBusinessProduct;
