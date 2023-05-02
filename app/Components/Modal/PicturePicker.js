import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet} from "react-native";
import { Images } from "../../Utils/images";
import ImagePicker from "react-native-image-crop-picker";
import DocumentPicker from "react-native-document-picker";
import { COLORS, FONT_FAMILY } from "../../Utils/Constant";
import { normalize } from "../../Utils/scaleFontSize";
import { handlePermission, openPermissionSetting } from "../../Utils/Globalfunctions";

const PicturePickerModal = (props) => {
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
    // <Modal
    //   style={styles.fullContainer}
    //   coverScreen={true}
    //   isVisible={props.Visible}
    //   backdropOpacity={0.3}
    // >
      <View style={styles.pickerModal}>
        <View style={styles.pickerModalCon}>
          <View style={styles.cancelModalVw}>
            <TouchableOpacity onPress={() => props.setVisible(false)}>
              <Image source={Images.ARROW_LEFT_IMG} style={styles.componentsImg} />
            </TouchableOpacity>
          </View>
          <View style={styles.straightVw}>
            <TouchableOpacity
              onPress={async () => {
                const res = await handlePermission(
                  "gallery",
                  "Abby Pages Would Like to Access Your Photos",
                  "To allow, tap on Settings and turn on Photos."
                );
                console.log('res', res)
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
              <Image
                style={styles.componentsImg}
                resizeMode={"contain"}
                source={Images.CALL_IMG}
              />
              <Text style={styles.componentsTxt}>{"Gallery"}</Text>
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
              <Image
                style={styles.componentsImg}
                resizeMode={"contain"}
                source={Images.CALL_IMG}
              />
              <Text style={styles.componentsTxt}>{"Camera"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    // </Modal>
  );
};

const styles = StyleSheet.create({
    fullContainer: {
      marginLeft: 0,
      width: '100%',
      marginBottom: 0,
    },
    cancelModalVw: {
      position: 'absolute',
      alignSelf: 'center',
      top: -30,
      backgroundColor: COLORS.YELLOW,
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      paddingHorizontal: normalize(14),
      paddingVertical: normalize(5)
    },
    pickerModal: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    pickerModalCon: {
      backgroundColor: COLORS.YELLOW,
      paddingHorizontal: 10,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      paddingVertical: normalize(20)
    },
    straightVw: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    componentsVw: {
      paddingVertical: normalize(5),
      borderWidth: 1,
      borderColor: COLORS.WHITE,
      alignItems: 'center',
      marginHorizontal: normalize(10),
      borderRadius: 10,
      width: normalize(70)
    },
    componentsImg: {
      width: normalize(24),
      height: normalize(24),
      tintColor: COLORS.WHITE,
    },
    componentsTxt: {
      fontSize: normalize(14),
      color: COLORS.WHITE,
      fontFamily: FONT_FAMILY.REGULAR
    },
  });

export default PicturePickerModal;

