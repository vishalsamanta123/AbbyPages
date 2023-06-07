import { TouchableOpacity, View } from "react-native";
import React from "react";
import CommonStyles from "../../../../../Utils/CommonStyles";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import styles from "./styles";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import { COLORS, FONT_SIZE } from "../../../../../Utils/Constant";
import MainButton from "../../../../../Components/MainButton";
import MediaPicker from "../../../../../Components/MediaPicker";

const UploadResumeView = (props) => {
  return (
    <View style={CommonStyles.container}>
      <MainHeader
        headerText={"Upload Resume"}
        loginButton={false}
        isLogin={true}
      />
      <View style={styles.containerVw}>
        <ScaleText style={styles.headTxt}>Select Resume</ScaleText>
        <TouchableOpacity
          onPress={() => props.setMediaOpen(true)}
          style={styles.itemCon}
        >
          {props?.uploadData?.name ? (
            <IconX
              origin={ICON_TYPE.FONT_AWESOME}
              name={"file-pdf-o"}
              size={150}
              color={COLORS.LIGHT_RED}
            />
          ) : (
            <View>
              <ScaleText style={styles.headTxt}>Upload</ScaleText>
            </View>
          )}
        </TouchableOpacity>
        <MainButton
          backgroundColor={COLORS.YELLOW}
          txtColor={COLORS.WHITE}
          txtFontsize={FONT_SIZE.mediumL}
          paddingHeight={11}
          marginTop={30}
          buttonTxt={"Upload"}
        />
      </View>
      <MediaPicker
        Visible={props?.mediaOpen}
        setVisible={() => props.setMediaOpen(false)}
        docType={"doc"}
        imageData={(data) => {
          props.setUploadData(data);
        }}
      />
    </View>
  );
};

export default UploadResumeView;
