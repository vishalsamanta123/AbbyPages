import React, { useState, Fragment, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import CommonStyles from "../../Utils/CommonStyles";
import { Image } from "react-native";
import UpdateProfile from "./components/UpdateProfile";
import ImagePicker from "react-native-image-crop-picker";
import { WHITE_COLOR_CODE } from "../../Utils/Constant";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import Error from "../../Components/Modal/showMessage";
import { Images } from "../../Utils/images";
const UpdateProfileView = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [ProfileModal, setProfileModal] = useState(false);
  const [CameraImage, setCameraImage] = useState("");
  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    headline: "",
    i_love: "",
    find_me_in: "",
    hometown: "",
    blog_website: "",
    when_not_on_abbypages: "",
    why_should_read_my_reviews: "",
    second_website: "",
    great_book_read: "",
    favorite_movie: "",
    last_meal_on_earth: "",
    anyone_else_but: "",
    most_recent_discovery: "",
    current_crush: "",
    concert: "",
    nick_name: "",
    zip_code: "",
    birth_date: "",
    gender: 0,
    primary_language: "",
    hometown_lat: "",
    hometown_long: "",
    find_me_lat: "",
    find_me_long: "",
  });
  useEffect(() => {
    getProfileData();
  }, []);
  const openAlbum = () => {
    setProfileModal(false);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 1,
    }).then((image) => {
      handleUploadProfileImage(image);
    });
  };
  const openCamera = () => {
    setProfileModal(false);
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 1,
    }).then((image) => {
      handleUploadProfileImage(image);
    });
  };
  const handleUploadProfileImage = async (img) => {
    setVisible(true);
    try {
      let formdata = new FormData();
      formdata.append("profile_image", {
        uri: img.path,
        type: img.mime,
        name: img.path.substring(img.path.lastIndexOf("/") + 1),
      });
      const { data } = await apiCall(
        "post",
        ENDPOINTS.USER_PROFILE_IMAGE_UPLOAD,
        formdata,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      if (data.status === 200) {
        setVisibleSuccess(true);
        setSuccessMessage(data.message);
        getProfileData();
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
  const renderFileUri = () => {
    if (CameraImage != "") {
      return (
        <TouchableOpacity onPress={() => setProfileModal(true)}>
          <Image
            source={{ uri: CameraImage }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 55,
              borderWidth: 3,
              borderColor: WHITE_COLOR_CODE,
            }}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <Image
          source={Images.DEFAULT_IMG}
          style={{ width: 100, height: 100, borderRadius: 40 }}
        />
      );
    }
  };
  const getProfileData = async () => {
    try {
      setVisible(true);
      const { data } = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE);
      if (data.status === 200) {
        setProfileData({
          first_name: data.data.first_name ? data.data.first_name : "",
          last_name: data.data.last_name ? data.data.last_name : "",
          headline: data.data.headline ? data.data.headline : "",
          i_love: data.data.i_love ? data.data.i_love : "",
          find_me_in: data.data.find_me_in ? data.data.find_me_in : "",
          hometown: data.data.hometown ? data.data.hometown : "",
          blog_website: data.data.blog_website ? data.data.blog_website : "",
          when_not_on_abbypages: data.data.when_not_on_abbypages
            ? data.data.when_not_on_abbypages
            : "",
          why_should_read_my_reviews: data.data.why_should_read_my_reviews
            ? data.data.why_should_read_my_reviews
            : "",
          second_website: data.data.second_website
            ? data.data.second_website
            : "",
          great_book_read: data.data.great_book_read
            ? data.data.great_book_read
            : "",
          favorite_movie: data.data.favorite_movie
            ? data.data.favorite_movie
            : "",
          last_meal_on_earth: data.data.last_meal_on_earth
            ? data.data.last_meal_on_earth
            : "",
          anyone_else_but: data.data.anyone_else_but
            ? data.data.anyone_else_but
            : "",
          most_recent_discovery: data.data.most_recent_discovery
            ? data.data.most_recent_discovery
            : "",
          current_crush: data.data.current_crush ? data.data.current_crush : "",
          concert: data.data.concert ? data.data.concert : "",
          nick_name: data.data.nick_name ? data.data.nick_name : "",
          zip_code: data.data.zip_code ? data.data.zip_code : "",
          birth_date: data.data.birth_date ? data.data.birth_date : "",
          gender: data.data.gender ? data.data.gender : "",
          primary_language: data.data.primary_language
            ? data.data.primary_language
            : "",
          hometown_lat: data.data.hometown_lat ? data.data.hometown_lat : "",
          hometown_long: data.data.hometown_long ? data.data.hometown_long : "",
          find_me_lat: data.data.find_me_lat ? data.data.find_me_lat : "",
          find_me_long: data.data.find_me_long ? data.data.find_me_long : "",
        });
        setCameraImage(data.data.profile_image);
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
  const validationForEditProfile = () => {
    if (profileData.first_name == "") {
      setErrorMessage("Please Enter First Name");
      setVisibleErr(true);
      return false;
    }
    if (profileData.last_name == "") {
      setErrorMessage("Please Enter Last Name");
      setVisibleErr(true);
      return false;
    }
    if (profileData.gender == "") {
      setErrorMessage("Please Select Gender");
      setVisibleErr(true);
      return false;
    }
    if (profileData.birth_date == "") {
      setErrorMessage("Please Select Date of Birth");
      setVisibleErr(true);
      return false;
    }
    if (profileData.hometown == "") {
      setErrorMessage("Please Enter HomeTown");
      setVisibleErr(true);
      return false;
    }
    if (profileData.find_me_in == "") {
      setErrorMessage("Please Enter Find Me In");
      setVisibleErr(true);
      return false;
    }
    return true;
  };
  const handleEditProfile = async () => {
    const valid = validationForEditProfile();
    if (valid == true) {
      try {
        setVisible(true);
        const params = profileData;
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.EDIT_USER_PROFILE,
          params
        );
        if (data.status === 200) {
          setSuccessMessage(data.message);
          setVisibleSuccess(true);
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
  const onClickCancel = () => {
    navigation.goBack(null);
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <UpdateProfile
        onClickCancel={onClickCancel}
        ProfileModal={ProfileModal}
        setProfileModal={setProfileModal}
        openAlbum={openAlbum}
        openCamera={openCamera}
        handleEditProfile={handleEditProfile}
        profileData={profileData}
        setProfileData={setProfileData}
        renderFileUri={renderFileUri}
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
      // closeModel={() => {
      //   navigation.goBack(null)
      //   setVisibleSuccess(false)}}
      />
    </View>
  );
};
export default UpdateProfileView;
