import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import AddTableScreen from "./components/AddTableScreen";
import CommonStyles from "../../../Utils/CommonStyles";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import ImagePicker from "react-native-image-crop-picker";
import ImageResizer from "react-native-image-resizer";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/error";
import Success from "../../../Components/Modal/success";
const AddTable = ({ route, navigation }) => {
  const HedarType = route.params ? route.params.type : null;
  const tableNo = route.params ? route.params.TableData.table_no : null;
  const sittingPerson = route.params
    ? route.params.TableData.sitting_person
    : null;
  const tableImg = route.params ? route.params.TableData.table_img : null;
  const ImgBaseUrl = route.params ? route.params.ImgBaseUrl : null;
  const tableIds = route.params ? route.params.TableData.id : null;

  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [itemImage, setItemImage] = useState("");
  const [tableNumber, setTableNumber] = useState(tableNo);
  const [sitingPerson, setSitingPerson] = useState(sittingPerson);
  const [SelectImgUri, setSelectImgUri] = useState("");
  const [tableId, setTableId] = useState(tableIds);
  const [camerastate, setCamerastate] = useState(false);
  const onPressSave = async () => {
    const valid = validationFrom();
    if (valid) {
      setVisible(true);
      try {
        let formdata = new FormData();
        tableId ? formdata.append("id", tableId) : null;
        formdata.append("table_no", tableNumber);
        formdata.append("sitting_person", sitingPerson);
        formdata.append("table_img", SelectImgUri);
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.ADD_RESTAURANT_TABLE,
          formdata
        );
        if (data.status === 200) {
          navigation.navigate("TableManagement");
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
    if (tableNumber == undefined) {
      setErrorMessage("Please enter table number");
      setVisibleErr(true);
      return false;
    }
    if (sitingPerson == undefined) {
      setErrorMessage("Please enter siting person");
      setVisibleErr(true);
      return false;
    }
    if (tableImg == "") {
      if (SelectImgUri == undefined) {
        setErrorMessage("Please select item image");
        setVisibleErr(true);
        return false;
      }
    }
    return true;
  }

  const onPressProfileImage = () => {
    setCamerastate(true);
  };
  const onPressGallery = () => {
    setCamerastate(false);
    ImagePicker.openPicker({}).then((images) => {
      ImagePicker.openCropper({
        path: images.path,
        freeStyleCropEnabled: true,
        compressImageQuality: 1,
      }).then((image) => {
        if (image.size >= 1000000) {
          ImageResizer.createResizedImage(image.path, 800, 800, "JPEG", 95)
            .then((response) => {
              setItemImage(response.uri);
              const uploadData = {
                uri: response.uri,
                type: image.mime,
                name: response.name,
              };
              setSelectImgUri(uploadData);
            })
            .catch((err) => {});
        } else {
          setItemImage(image.path);
          const uploadData = {
            uri: image.path,
            type: image.mime,
            name: image.path.substring(image.path.lastIndexOf("/") + 1),
          };
          setSelectImgUri(uploadData);
        }
      });
    });
  };

  const onPressCamera = () => {
    setCamerastate(false);
    ImagePicker.openCamera({
      cropping: true,
      freeStyleCropEnabled: true,
      compressImageQuality: 1,
    }).then((image) => {
      if (image.size >= 1000000) {
        ImageResizer.createResizedImage(image.path, 800, 800, "JPEG", 95)
          .then((response) => {
            setItemImage(response.uri);
            const uploadData = {
              uri: response.uri,
              type: image.mime,
              name: response.name,
            };
            setSelectImgUri(uploadData);
          })
          .catch((err) => {});
      } else {
        setItemImage(image.path);
        const uploadData = {
          uri: image.path,
          type: image.mime,
          name: image.path.substring(image.path.lastIndexOf("/") + 1),
        };
        setSelectImgUri(uploadData);
      }
    });
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <AddTableScreen
        HedarType={HedarType}
        itemImage={itemImage}
        tableNumber={tableNumber}
        setTableNumber={setTableNumber}
        setSitingPerson={setSitingPerson}
        sitingPerson={sitingPerson}
        onPressSave={onPressSave}
        onPressProfileImage={onPressProfileImage}
        tableImg={tableImg}
        ImgBaseUrl={ImgBaseUrl}
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
export default AddTable;
