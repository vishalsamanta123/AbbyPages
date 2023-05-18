import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { COLORS, Constants } from "../../Utils/Constant";
import CommonStyles from "../../Utils/CommonStyles";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import { IconX } from "../Icons/Icon";
import ScaleText from "../ScaleText";

const AddressInput = (props) => {
  const [onfocus, setOnfocus] = useState(false);
  const {
    onPress = () => {},
    onChangeText = () => {},
    value = "",
    fetchDetails = true,
    height = 56,
    paddingVertical = 0,
    backgroundColor = COLORS.WHITE,
    placeholder = "Input",
    headTxtBackColor = COLORS.WHITE,
    headTxt = placeholder,
    placeholderTextColor = COLORS.COMMON,
    header = true,
    flex = 0,
    borderRadius = 18,
    rightImgName = "",
    rightImgSize = 22,
    rightImgOrigin = "",
    rightImgColor = COLORS.DARK_PURPLE,
    leftImgName = "",
    leftImgSize = 22,
    leftImgOrigin = "",
    leftImgColor = COLORS.DARK_PURPLE,
    keyboardType = "default",
    marginTop = 10,
    borderColor = COLORS.GREY,
  } = props;
  return (
    <ScrollView keyboardShouldPersistTaps={"handled"}>
      {header && (
        <View
          style={[
            styles.headTxtVw,
            {
              backgroundColor: headTxtBackColor,
            },
          ]}
        >
          <ScaleText style={styles.headTxt}>{headTxt}</ScaleText>
        </View>
      )}
      {leftImgName != "" && leftImgOrigin != "" ? (
        <View style={styles.iconVw}>
          <IconX
            origin={leftImgOrigin}
            name={leftImgName}
            size={leftImgSize}
            color={leftImgColor}
          />
        </View>
      ) : null}
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        fetchDetails={fetchDetails}
        onPress={(data, details = null) => {
          onPress(data, details);
        }}
        textInputProps={{
          onFocus: () => setOnfocus(true),
          onBlur: () => setOnfocus(false),
          placeholderTextColor: COLORS.COMMON,
          onChangeText: (txt) => {
            if (onfocus) {
              if (txt == "") {
                onChangeText("");
              } else {
                onChangeText(txt);
              }
            }
          },
        }}
        query={{
          key: Constants.mapKey,
          language: "en",
        }}
        styles={{
          textInputContainer: styles.mainCont,
          textInput: styles.inputCon,
          listView: {},
        }}
        minLength={2}
        autoFocus={false}
        returnKeyType={"default"}
        keyboardShouldPersistTaps={"handled"}
      />
      {rightImgName != "" && rightImgOrigin != "" ? (
        <View style={styles.iconVw}>
          <IconX
            origin={rightImgOrigin}
            name={rightImgName}
            size={rightImgSize}
            color={rightImgColor}
          />
        </View>
      ) : null}
    </ScrollView>
  );
};

export default AddressInput;
