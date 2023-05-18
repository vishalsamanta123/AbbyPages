import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { COLORS, Constants } from "../../Utils/Constant";
import CommonStyles from "../../Utils/CommonStyles";
import { ScrollView, View } from "react-native";

const AddressInput = (props) => {
  const [onfocus, setOnfocus] = useState(false);
  const {
    onPress = () => {},
    onChangeText,
    value,
    fetchDetails = true,
  } = props;
  return (
    <ScrollView keyboardShouldPersistTaps={"handled"}>
      <GooglePlacesAutocomplete
        placeholder="Search Place"
        fetchDetails={fetchDetails}
        onPress={(data, details = null) => {
          onPress(data, details);
        }}
        textInputProps={{
          onFocus: () => setOnfocus(true),
          onBlur: () => setOnfocus(false),
          placeholderTextColor: COLORS.GREY,
          onChangeText: (txt) => {
            if (onfocus) {
              if (txt == "") {
                onChangeText("");
              } else {
                onChangeText(txt);
              }
            }
          },
          value: value,
        }}
        query={{
          key: Constants.mapKey,
          language: "en",
        }}
        styles={CommonStyles.locSearchVw}
        minLength={2}
        autoFocus={false}
        returnKeyType={"default"}
        keyboardShouldPersistTaps={"handled"}
      />
    </ScrollView>
  );
};

export default AddressInput;
