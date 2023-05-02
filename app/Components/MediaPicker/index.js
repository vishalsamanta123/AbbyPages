import { TouchableOpacity, View } from "react-native";
import React from "react";
import ScaleText from "../ScaleText";
import ImagePicker from "react-native-image-crop-picker";
import DocumentPicker from "react-native-document-picker";
import {
  handlePermission,
  openPermissionSetting,
} from "../../Utils/Globalfunctions";
import styles from "./styles";
import { ICON_TYPE, IconX } from "../Icons/Icon";
import { COLORS } from "../../Utils/Constant";

const MediaPicker = (props) => {
  const handleCameraPress = () => {
    ImagePicker.openCamera({
      // width: 100,
      // height: 100,
      cropping: true,
      multiple: props.multiple ? props.multiple : false,
      compressImageQuality: 1,
      freeStyleCropEnabled: true,
    }).then((image) => {
      props.setVisible(false);
      if (props.multiple && image?.length > 0) {
        const allArray = image?.map((itm) => {
          return {
            uri: itm?.path,
            type: itm?.mime,
            name: itm?.path?.substring(itm?.path?.lastIndexOf("/") + 1),
          };
        });
        if (props?.value?.length === 0 || typeof props?.value === "undefined") {
          props.imageData(allArray);
        } else {
          var newAdd = [...props?.value];
          const getNew = newAdd.concat(allArray);
          props.imageData(getNew);
        }
      } else {
        if (
          props?.value === "" ||
          props?.value === undefined ||
          props?.value === null ||
          props?.value === "undefined" ||
          (props?.value?.length === 0 && Array.isArray(props?.value))
        ) {
          if (props?.value?.length === 0 && Array.isArray(props?.value)) {
            props.imageData([
              {
                uri: image?.path,
                type: image?.mime,
                name: image?.path?.substring(image?.path?.lastIndexOf("/") + 1),
              },
            ]);
          } else {
            props.imageData({
              uri: image?.path,
              type: image?.mime,
              name: image?.path?.substring(image?.path?.lastIndexOf("/") + 1),
            });
          }
        } else {
          var newAdd = [...props?.value];
          const getNew = newAdd.concat({
            uri: image?.path,
            type: image?.mime,
            name: image?.path?.substring(image?.path?.lastIndexOf("/") + 1),
          });
          props.imageData(getNew);
        }
      }
    });
  };
  const handleGalleryPress = () => {
    ImagePicker.openPicker({
      // width: 100,
      // height: 100,
      cropping: true,
      multiple: props.multiple ? props.multiple : false,
      compressImageQuality: 1,
      freeStyleCropEnabled: true,
    }).then((image) => {
      props.setVisible(false);
      if (props.multiple && image?.length > 0) {
        const allArray = image?.map((itm) => {
          return {
            uri: itm?.path,
            type: itm?.mime,
            name: itm?.path?.substring(itm?.path?.lastIndexOf("/") + 1),
          };
        });
        if (props?.value?.length === 0 || typeof props?.value === "undefined") {
          props.imageData(allArray);
        } else {
          var newAdd = [...props?.value];
          const getNew = newAdd.concat(allArray);
          props.imageData(getNew);
        }
      } else {
        props.imageData({
          uri: image?.path,
          type: image?.mime,
          name: image?.path?.substring(image?.path?.lastIndexOf("/") + 1),
        });
      }
    });
  };
  const handleBrowsePress = async () => {
    const result = await DocumentPicker.pick({
      type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
    });
    if (result?.length > 0) {
      props.setVisible(false);
      props.imageData({
        uri: result[0]?.uri,
        type: result[0]?.type,
        name: result[0]?.name,
      });
    }
  };
  return (
    <View style={styles.pickerContainer}>
      <View style={styles.straightVw}>
        <TouchableOpacity
          onPress={async () => {
            const res = await handlePermission(
              "gallery",
              "Abby Pages Would Like to Access Your Photos",
              "To allow, tap on Settings and turn on Photos."
            );
            console.log("res", res);
            if (res == "setting1") {
              openPermissionSetting(
                "Abby Pages Would Like to Access Your Photos",
                "To allow, tap on Settings and turn on Photos."
              );
            } else if (res) {
              if (props.docType === "all") {
                handleBrowsePress();
              } else {
                handleGalleryPress();
              }
            }
          }}
          style={styles.componentsVw}
        >
          <IconX
            origin={ICON_TYPE.ENTYPO}
            name={"images"}
            size={50}
            // color={COLORS.BLACK}
          />
          <ScaleText style={styles.componentsTxt}>
            {"Choose from Gallery"}
          </ScaleText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.componentsVw}
          onPress={async () => {
            const res = await handlePermission(
              "camera",
              "Justo Would Like to Access the Camera",
              "To allow, tap on Settings and turn on Camera"
            );

            if (res == "setting1") {
              openPermissionSetting(
                "Justo Would Like to Access the Camera",
                "To allow, tap on Settings and turn on Camera"
              );
            } else if (res) {
              handleCameraPress();
            }
          }}
        >
          <IconX
            origin={ICON_TYPE.ANT_ICON}
            name={"camerao"}
            size={50}
            // color={COLORS.BLACK}
          />
          <ScaleText style={styles.componentsTxt}>{"Open Camera"}</ScaleText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MediaPicker;
