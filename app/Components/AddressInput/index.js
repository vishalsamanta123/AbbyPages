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
    paddingVertical = 4,
    placeholder = "Location",
    headTxtBackColor = COLORS.WHITE,
    headTxt = placeholder,
    placeholderTextColor = COLORS.COMMON,
    header = true,
    iconTop = 25,
    borderRadius = 16,
    rightImgName = "",
    rightImgSize = 22,
    rightImgOrigin = "",
    rightImgColor = COLORS.DARK_PURPLE,
    leftImgName = "",
    leftImgSize = 22,
    leftImgOrigin = "",
    leftImgColor = COLORS.DARK_PURPLE,
    marginTop = 10,
    marginBottom = 10,
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
        <View
          style={[
            styles.iconVw,
            {
              top: iconTop,
            },
          ]}
        >
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
          placeholderTextColor: placeholderTextColor,
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
        value={value}
        query={{
          key: Constants.mapKey,
          language: "en",
        }}
        styles={{
          textInputContainer: [
            styles.mainCont,
            {
              paddingLeft: leftImgName != "" && leftImgOrigin != "" ? 26 : 0,
              paddingVertical: paddingVertical,
              marginTop: marginTop,
              marginBottom: marginBottom,
              borderRadius: borderRadius,
            },
          ],
          textInput: styles.inputCon,
          listView: {},
        }}
        minLength={2}
        autoFocus={false}
        returnKeyType={"default"}
        keyboardShouldPersistTaps={"handled"}
      />
      {rightImgName != "" && rightImgOrigin != "" ? (
        <View style={[styles.iconVw, { alignSelf: "flex-end", top: iconTop }]}>
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
