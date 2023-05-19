import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
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
  const [galleryData, setGalleryData] = useState([]);
  const [uploadData, setUploadData] = useState({});
  const [imageData, setImageData] = useState({});

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

  const renderimage = (item) => {
    return (
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={() => {
          OpenDoc(item.image);
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            height: 100,
            width: Constants.windowWidth / 3.8,
            margin: 10,
          }}
        />
      </TouchableOpacity>
    );
  };

  const handleUploadImage = async () => {
    const formData = new FormData();
    formData.append("business_id", detailData?.business_id);
    formData.append("business_type", detailData?.business_type);
    formData.append("image", imageData);
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
        setVisible({
          open: false,
          type: "",
        });
      } else {
        if (data.status === 201) {
          setUploadData({});
          setLoading(false);
          setVisible({
            open: false,
            type: "",
          });
        } else {
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Modal visible={visible}>
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
              renderItem={({ item }) => renderimage(item)}
              numColumns={3}
            />
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 4,
              }}
            >
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
                setVisible={false}
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
      </View>
    </Modal>
  );
};

export default BusinessGallery;
