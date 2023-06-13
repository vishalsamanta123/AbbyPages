import { FlatList, Image, Modal, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import MainHeader from "../../../../../Components/MainHeader";
import CommonStyles from "../../../../../Utils/CommonStyles";
import apiEndPoints from "../../../../../Utils/apiEndPoints";
import { apiCall } from "../../../../../Utils/httpClient";
import { OpenDoc } from "../../../../../Utils/Globalfunctions";
import MediaPicker from "../../../../../Components/MediaPicker";
import Button from "../../../../../Components/Button";
import styles from "./styles";
import ScaleText from "../../../../../Components/ScaleText";
import { Constants } from "../../../../../Utils/Constant";
import GalleryCarousalView from "../../../../../Components/GalleryCarousalView";
import ShowMessage from "../../../../../Components/Modal/showMessage";
import Loader from "../../../../../Utils/Loader";
import FastImages from "../../../../../Components/FastImage";

const BusinessGallery = (props) => {
  const {
    visible = false,
    setVisible = () => {},
    type = "",
    detailData = {},
    moreData,
  } = props;

  const [loading, setLoading] = useState(false);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [isVisibleCarousal, setIsisVisibleCarousal] = useState(false);
  const [index, setIndex] = useState(0);
  const [galleryData, setGalleryData] = useState([]);
  const [uploadData, setUploadData] = useState({});
  const [imageData, setImageData] = useState({});
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });
  const getGalleryDetails = async () => {
    try {
      setLoading(true);
      const params = {
        business_id: detailData?.business_id,
        business_type: detailData?.business_type,
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.USER_BUSINESS_GALLERY,
        params
      );
      if (data.status == 200) {
        setLoading(false);
        setGalleryData(data?.data);
      } else {
        if (data.status === 201) {
          setGalleryData({});
          setLoading(false);
        } else {
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGalleryDetails();
    setImageData({});
  }, [visible]);
  console.log("🚀 ~ file: BusinessGallery.js:183 ~ galleryData:", galleryData);

  const renderimage = (item, index) => {
    return (
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={() => {
          // OpenDoc(item?.image);
          setIsisVisibleCarousal(true);
          setIndex(index);
        }}
      >
        <FastImages
          source={{ uri: item?.image }}
          style={{
            height: 100,
            width: Constants.windowWidth / 3.8,
            margin: 10,
          }}
        />
      </TouchableOpacity>
    );
  };

  const validation = () => {
    if (Object.keys(imageData)?.length === 0) {
      setMessageShow({
        visible: true,
        type: "error",
        message: "Please select file to upload",
      });
      return false;
    }
    return true;
  };

  const handleUploadImage = async () => {
    const formData = new FormData();
    formData.append("business_id", detailData?.business_id);
    formData.append("business_type", detailData?.business_type);
    formData.append("image", imageData);
    if (validation()) {
      try {
        setLoading(true);
        const header = {
          "Content-Type": "multipart/form-data",
          "access-control-allow-origin": "*",
        };
        const { data } = await apiCall(
          "POST",
          apiEndPoints.USER_BUSINESS_UPLOAD_IMAGE,
          formData,
          header
        );
        if (data.status == 200) {
          setLoading(false);
          setUploadData(data?.data);
          setMessageShow({
            visible: true,
            type: "success",
            message: data?.message,
          });
          setTimeout(() => {
            setVisible({
              open: false,
              type: "",
            });
          }, 2000);
        } else {
          if (data.status === 201) {
            setUploadData({});
            setLoading(false);
            setVisible({
              open: false,
              type: "",
            });
            setMessageShow({
              visible: true,
              type: "error",
              message: data?.message,
            });
          } else {
            setLoading(false);
          }
        }
      } catch (error) {
        setLoading(false);
      }
    }
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={() =>
        setVisible({
          open: false,
          type: "",
        })
      }
    >
      {loading && <Loader state={loading} />}
      <View style={CommonStyles.container}>
        <MainHeader
          isSearch={false}
          headerText={type === "view" ? "Business Gallery" : "Upload photo"}
          loginButton={false}
          TxtMarginRight={"5%"}
          onPressBack={() => {
            setVisible({
              open: false,
              type: "",
            });
          }}
        />
        {type === "view" ? (
          <View style={{ alignItems: "center", flex: 1 }}>
            <FlatList
              data={galleryData}
              renderItem={({ item, index }) => renderimage(item, index)}
              numColumns={3}
            />
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={{ flex: 4 }}>
              {imageData.uri ? (
                <Image
                  source={{ uri: imageData.uri }}
                  style={styles.previewImage}
                  resizeMode="contain"
                />
              ) : (
                <ScaleText style={{ textAlign: "center", marginTop: 50 }}>
                  No Preview available
                </ScaleText>
              )}
            </View>
            <View style={{ flex: 2 }}>
              <MediaPicker
                modalType={"opened"}
                setVisible={() => {}}
                imageData={(data) => {
                  setImageData(data);
                }}
              />
              <Button
                buttonText="Upload"
                buttonLabelStyle={styles.uploadBtnTxt}
                onPress={() => handleUploadImage()}
                style={styles.uploadBtn}
                width={200}
              />
            </View>
          </View>
        )}
        {isVisibleCarousal ? (
          <GalleryCarousalView
            data={galleryData}
            isVisible={isVisibleCarousal}
            setIsVisible={setIsisVisibleCarousal}
            index={index}
          />
        ) : null}
      </View>
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
        onEndVisible={() =>
          setMessageShow({
            visible: false,
            type: "",
            message: "",
          })
        }
      />
    </Modal>
  );
};

export default BusinessGallery;
