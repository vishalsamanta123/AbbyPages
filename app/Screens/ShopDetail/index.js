import React, { useState, Fragment, useEffect, useContext } from "react";
import {
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Share,
  Platform,
  ToastAndroid,
} from "react-native";
import {
  GREY_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LINE_COMMON_COLOR_CODE,
  YELLOW_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../Utils/Constant";
import { useFocusEffect } from "@react-navigation/native";
import ImagePicker from "react-native-image-crop-picker";
import _ from "lodash";
import styles from "./components/styles";
import moment from "moment";
import ShopDetailScreen from "./components/ShopDetail";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import Error from "../../Components/Modal/error";
import { ShoppingCartContext, UserContext } from "../../Utils/UserContext";

const ShopDetail = ({ navigation, route }) => {
  const [shoppingCartData, setShoppingCartData] =
    useContext(ShoppingCartContext);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [reviewModal, setReviewModal] = useState(false);
  const [restroDetail, setRestroDetail] = useState("");
  const [shopDetail, setShopDetail] = useState("");
  const [addPhotoModal, setAddPhotoModal] = useState(false);
  const [businessReviewRating, setBusinessReviewRating] = useState(3);
  const [reviewData, setReviewData] = useState({
    description: "",
    title: "",
    business_rating: "",
    business_type: 2,
    business_id: shopDetail.business_id,
  });
  // const [business_id, setBusinessId] = useState(0);
  const [isSelected, setIsSelected] = useState(0);
  const [DialogVisible, setDialogVisible] = useState(false);
  const { width, height } = Dimensions.get("window");
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { currentPage: pageIndex } = sliderState;

  useFocusEffect(
    React.useCallback(() => {
      if (route.params) {
        const { detail } = route.params;
        handleShopDetail(detail); //function
        setShoppingCartData([]);
      }
    }, [])
  );
  const handleShopDetail = async (data) => {
    setVisible(true);
    const params = {
      business_type: 2,
      business_id: data.business_id,
    };
    try {
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUSINESS_DETAILS,
        params
      );
      if (data.status === 200) {
        setShopDetail(data.data);
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.ceil(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };
  const _handleDataTypeSelected = (index, item) => {
    setIsSelected(index);
  };
  const _handleOptions = (item, index) => {
    const selectedColor =
      index === isSelected ? BLACK_COLOR_CODE : GREY_COLOR_CODE;
    return (
      <TouchableOpacity
        onPress={() => _handleDataTypeSelected(index, item)}
        style={styles.OptionsContain}
      >
        <Text
          style={[
            styles.OptionsText,
            {
              color: selectedColor,
            },
          ]}
        >
          {item.OptionName}
        </Text>
      </TouchableOpacity>
    );
  };
  const _handleReview = (item) => {
    return (
      <Fragment>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: LINE_COMMON_COLOR_CODE,
            paddingBottom: 12,
          }}
        >
          <View style={styles.ReviewContainer}>
            {item.profile_image ? (
              <Image
                style={{ width: 80, height: 75, borderRadius: 75 }}
                source={{ uri: item.profile_image }}
              />
            ) : (
              <Image
                style={{ width: 80, height: 75, borderRadius: 75 }}
                source={require("../../Assets/extraImages/salooonimg.jpg")}
              />
            )}
            <View style={{ paddingLeft: 20, width: "70%" }}>
              <Text style={{ fontFamily: FONT_FAMILY_REGULAR, fontSize: 19 }}>
                {item.title}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontFamily: FONT_FAMILY_REGULAR,
                    color: GREY_COLOR_CODE,
                    fontSize: 13,
                  }}
                >
                  by{" "}
                </Text>
                <Text
                  style={{
                    fontFamily: FONT_FAMILY_REGULAR,
                    color: YELLOW_COLOR_CODE,
                    fontSize: 13,
                  }}
                >
                  {item.first_name + item.last_name}
                </Text>
                <Text
                  style={{
                    fontFamily: FONT_FAMILY_REGULAR,
                    color: GREY_COLOR_CODE,
                    fontSize: 13,
                  }}
                >
                  {" "}
                  |{moment(item.create_date).endOf("MM/DD/YYYY").fromNow()}
                </Text>
              </View>
              <View style={{ flexDirection: "row", paddingTop: 5 }}>
                <View style={styles.RatingStyles}>
                  <Text style={styles.RatingStylesTxt}>
                    {item.business_rating}
                  </Text>
                </View>
                <Text style={styles.RatingTextMain}>
                  {item.business_rating == 0 && "No Rating Yet"}
                  {item.business_rating == 1 && "Bad"}
                  {item.business_rating == 2 && "Ok"}
                  {item.business_rating == 3 && "Good"}
                  {item.business_rating == 4 && "Very Good"}
                  {item.business_rating == 5 && "Excellent"}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 0 }}>
            <Text
              style={{
                color: GREY_COLOR_CODE,
                fontFamily: FONT_FAMILY_REGULAR,
                fontSize: 14,
              }}
            >
              Note- {item.description}
            </Text>
          </View>
        </View>
      </Fragment>
    );
  };
  const onPressReservation = (data, booking_type) => {
    navigation.navigate("RestauranrtBooking", {
      detail: data,
      booking_type: booking_type,
    });
  };
  const onPressShopNow = () => {
    navigation.navigate("ProductListing", { detail: shopDetail });
  };
  const onPressOrderFood = () => {
    setDialogVisible(true);
  };
  const onPressSubmit = () => {
    setDialogVisible(false);
    navigation.navigate("ShowMenu");
  };
  function handleGetDirections(lattitude, longitude) {
    if (Platform.OS === "android") {
      const url = `${
        "http://maps.google.com/maps?daddr=" + lattitude + "," + longitude + ""
      }`;
      Linking.canOpenURL(url)
        .then((supported) => {
          if (supported) {
            Linking.openURL(
              "http://maps.google.com/maps?daddr=" +
                lattitude +
                "," +
                longitude +
                ""
            );
          } else {
            alert("Don't know how to go");
          }
        })
        .catch((err) => console.error("An error occurred", err));
    } else {
      Linking.canOpenURL(
        "http://maps.apple.com/maps?daddr=" + lattitude + "," + longitude + ""
      )
        .then((supported) => {
          if (supported) {
            Linking.openURL(
              "http://maps.apple.com/maps?daddr=" +
                lattitude +
                "," +
                longitude +
                ""
            );
          } else {
            alert("Don't know how to go");
          }
        })
        .catch((err) => console.error("An error occurred", err));
    }
  }
  const shareTo = async () => {
    const result = await Share.share({
      message: "Share details with others",
    });
    if (result.action) {
      console.log("result: ", result.action);
    }
  };
  const saveResto = async () => {
    try {
      setVisible(true);
      const params = {
        item_type: shopDetail.business_type === 2 ? 1 : 1,
        item_id: shopDetail.business_id,
        like: shopDetail.user_like === 1 ? 0 : 1,
        favorite: shopDetail?.favorite ? shopDetail?.favorite : 0,
        interest: shopDetail?.interest ? shopDetail?.interest : 0,
        views: shopDetail.views,
      };
      const { data } = await apiCall("POST", ENDPOINTS.USERCOMMONLIKES, params);
      if (data.status === 200) {
        setVisible(false);
        ToastAndroid.show(data.message, ToastAndroid.SHORT);
        handleShopDetail(shopDetail);
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setVisible(false);
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };
  function validationFormReview() {
    if (reviewData.title == "") {
      setErrorMessage("Please enter title");
      setVisibleErr(true);
      return false;
    }
    if (reviewData.description == "") {
      setErrorMessage("Please enter description");
      setVisibleErr(true);
      return false;
    }
    return true;
  }
  const onSubmitReviewData = async () => {
    const valid = validationFormReview();
    if (valid) {
      setVisible(true);
      const params = reviewData;
      params.business_rating = businessReviewRating;
      params.business_id = shopDetail.business_id;
      try {
        const { data } = await apiCall("POST", ENDPOINTS.POST_REVIEW, params);
        if (data.status === 200) {
          setVisible(false);
          handleShopDetail(shopDetail);
          setReviewModal(false);
          setVisibleSuccess(true);
          setSuccessMessage(data.message);
        } else {
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
        }
      } catch (error) {
        setVisibleErr(true);
        setErrorMessage(error);
      }
    }
  };
  const openAlbum = () => {
    setAddPhotoModal(false);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 1,
    }).then((image) => {
      handleUploadImage(image);
    });
  };
  const openCamera = () => {
    setAddPhotoModal(false);
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 1,
    }).then((image) => {
      handleUploadImage(image);
    });
  };
  const handleUploadImage = async (img) => {
    setVisible(true);
    try {
      let formdata = new FormData();
      formdata.append("business_id", shopDetail.business_id);
      formdata.append("business_type", 2);
      formdata.append("image", {
        uri: img.path,
        type: img.mime,
        name: img.path.substring(img.path.lastIndexOf("/") + 1),
      });
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.ADD_BUSINESS_PHOTO_VIDEO,
        formdata,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      if (data.status === 200) {
        setVisibleSuccess(true);
        setSuccessMessage(data.message);
        handleShopDetail(shopDetail);
        setVisible(false);
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setVisible(false);
      setErrorMessage(error);
      setVisibleErr(true);
    }
  };
  const _handlePhotos = (item, index) => {
    return (
      <View key={index} style={styles.photosVw}>
        <Image
          resizeMode={"stretch"}
          style={styles.photosCon}
          source={{ uri: item.image }}
        />
      </View>
    );
  };
  const onPressShop = (item) => {
    handleShopDetail(item);
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ShopDetailScreen
        _handlePhotos={_handlePhotos}
        openAlbum={openAlbum}
        openCamera={openCamera}
        addPhotoModal={addPhotoModal}
        setAddPhotoModal={setAddPhotoModal}
        setBusinessReviewRating={setBusinessReviewRating}
        reviewModal={reviewModal}
        setReviewModal={setReviewModal}
        onSubmitReviewData={onSubmitReviewData}
        reviewData={reviewData}
        setReviewData={setReviewData}
        shopDetail={shopDetail}
        handleGetDirections={handleGetDirections}
        setSliderPage={setSliderPage}
        pageIndex={pageIndex}
        _handleOptions={_handleOptions}
        _handleReview={_handleReview}
        onPressReservation={onPressReservation}
        onPressShopNow={onPressShopNow}
        DialogVisible={DialogVisible}
        setDialogVisible={setDialogVisible}
        onPressOrderFood={onPressOrderFood}
        onPressSubmit={onPressSubmit}
        shareTo={shareTo}
        saveResto={saveResto}
        onPressShop={onPressShop}
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
export default ShopDetail;
