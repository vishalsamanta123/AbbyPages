import React, { useState, Fragment, useEffect } from "react";
import ServiceProviderDetailsScreen from "./components/ServiceProviderDetailsScreen";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Share,
  Platform,
} from "react-native";
import styles from "./components/styles";
import moment from "moment";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LIGHT_GREEN_COLOR_CODE,
  LIGHT_GREY_COLOR_CODE,
  YELLOW_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../Utils/Constant";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import Error from "../../Components/Modal/error";
import ImagePicker from "react-native-image-crop-picker";
import _ from "lodash";

const ServiceProviderDetails = ({ navigation, route }) => {
  const [businessReviewRating, setBusinessReviewRating] = useState(3);
  const [reviewModal, setReviewModal] = useState(false);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [addPhotoModal, setAddPhotoModal] = useState(false);
  const [reviewData, setReviewData] = useState({
    description: "",
    title: "",
    business_rating: "",
    business_type: 3,
    business_id: "",
  });
  const [serviceDetail, setServiceDetail] = useState([]);
  const [handleOptions, setHandleOptions] = useState([
    {
      id: "1",
      OptionsName: "Highlights from the Business",
    },
    {
      id: "2",
      OptionsName: "Photos",
    },
  ]);
  useEffect(() => {
    if (route.params) {
      const { detail } = route.params;
      handleServiceDetails(detail);
    }
  }, []);
  const handleServiceDetails = async (data) => {
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
        setServiceDetail(data.data);
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
  const handlePhotos = (item, index) => {
    return (
      <View key={index}>
        <View style={{ paddingRight: 10, paddingTop: 10 }}>
          <Image
            style={{ width: 125, height: 135, borderRadius: 10 }}
            source={{ uri: item?.image }}
          />
          <View>
            <Text>{item.userDescription}</Text>
          </View>
        </View>
      </View>
    );
  };
  const openAlbum = () => {
    setAddPhotoModal(false);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
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
    }).then((image) => {
      handleUploadImage(image);
    });
  };
  const handleUploadImage = async (img) => {
    setVisible(true);
    try {
      let formdata = new FormData();
      formdata.append("business_id", serviceDetail.business_id);
      formdata.append("business_type", 3);
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
        handleServiceDetails(serviceDetail);
        setVisible(false);
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
  const _handleOptions = (item) => {
    return (
      <View style={styles.highlighsvwe}>
        <Text style={styles.highlightxt}>{item.OptionsName} </Text>
      </View>
    );
  };

  const _handleReview = (item, index) => {
    return (
      <View style={styles.ratedVws}>
        <View style={styles.ratedProfileVw}>
          {item.profile_image ? (
            <Image
              style={styles.ratedProfile}
              source={{ uri: item.profile_image }}
            />
          ) : (
            <Image
              style={styles.ratedProfile}
              source={require("../../Assets/extraImages/salooonimg.jpg")}
            />
          )}
          <View style={{ paddingLeft: 10 }}>
            <View style={{ width: "75%" }}>
              <Text style={styles.titleTxt}>{item.title}</Text>
            </View>
            <Text style={styles.nameTxt}>
              by{" "}
              <Text style={styles.nameTxt}>
                {item.first_name + item.last_name}
              </Text>{" "}
              | {moment(item.create_date).endOf("day").fromNow()}{" "}
            </Text>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.ratingVw}>
                <Text style={styles.ratingTxt}>{item.business_rating}</Text>
              </View>
              <Text style={styles.ratingNameTxt}>
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
        <View>
          <Text style={styles.descriptionTxt}>{item.description}</Text>
        </View>
      </View>
    );
  };

  function validationFormReview() {
    if (reviewData.title == "") {
      setErrorMessage("Please enter title");
      setVisibleErr(true);
      return false;
    }
    if (businessReviewRating == "") {
      setErrorMessage("Please Select Rating");
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
      params.business_id = serviceDetail.business_id;
      try {
        const { data } = await apiCall("POST", ENDPOINTS.POST_REVIEW, params);
        if (data.status === 200) {
          setReviewData({
            title: "",
            description: "",
          });
          setBusinessReviewRating(3);
          setSuccessMessage(data.message);
          setVisibleSuccess(true);
          setVisible(false);
          handleServiceDetails(serviceDetail);
          setReviewModal(false);
        } else {
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
        }
      } catch (error) {
        setVisibleErr(true);
        setErrorMessage(error.message);
      }
    }
  };
  const onPressQuotes = () => {
    navigation.navigate("StepOne", { serviceDetail: serviceDetail });
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
  const licenseInfo = () => {
    alert("Coming Soon");
  };
  const seeAll = () => {
    alert("Coming Soon");
  };
  const shareTo = async () => {
    const result = await Share.share({
      message: "Share Service with others",
    });
    if (result.action) {
      console.log("result: ", result.action);
    }
  };
  const saveResto = async () => {
    try {
      setVisible(true);
      const params = {
        item_type: 1, //serviceDetail.business_type,
        item_id: serviceDetail.business_id,
        like: serviceDetail.likes,
        favorite: serviceDetail?.favorite,
        interest: serviceDetail?.interest,
        views: serviceDetail.views,
      };
      const { data } = await apiCall("POST", ENDPOINTS.USERCOMMONLIKES, params);
      if (data.status === 200) {
        setVisible(false);
        setVisibleSuccess(true);
        setSuccessMessage(data.message);
        handleServiceDetails(serviceDetail);
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
  const onPressService = (item) => {
    handleServiceDetails(item);
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <ServiceProviderDetailsScreen
        setBusinessReviewRating={setBusinessReviewRating}
        reviewModal={reviewModal}
        setReviewModal={setReviewModal}
        reviewData={reviewData}
        setReviewData={setReviewData}
        onSubmitReviewData={onSubmitReviewData}
        serviceDetail={serviceDetail}
        handleGetDirections={handleGetDirections}
        handlePhotos={(item, index) => handlePhotos(item, index)}
        _handleOptions={_handleOptions}
        handleOptions={handleOptions}
        onPressQuotes={onPressQuotes}
        _handleReview={_handleReview}
        openAlbum={openAlbum}
        licenseInfo={licenseInfo}
        seeAll={seeAll}
        openCamera={openCamera}
        setAddPhotoModal={setAddPhotoModal}
        addPhotoModal={addPhotoModal}
        saveResto={saveResto}
        shareTo={shareTo}
        onPressService={onPressService}
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
export default ServiceProviderDetails;
