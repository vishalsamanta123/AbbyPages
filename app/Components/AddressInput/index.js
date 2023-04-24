import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Constants, GREY_COLOR_CODE, MAP_KEY } from "../../Utils/Constant";
import CommonStyles from "../../Utils/CommonStyles";

const AddressInput = (props) => {
  const [onfocus, setOnfocus] = useState(false);
  const { onPress = () => {}, onChangeText, value } = props;
  return (
    <GooglePlacesAutocomplete
      placeholder="Search Place"
      fetchDetails={true}
      onPress={(data, details = null) => {
        onPress(data, details);
      }}
      textInputProps={{
        onFocus: () => setOnfocus(true),
        onBlur: () => setOnfocus(false),
        placeholderTextColor: GREY_COLOR_CODE,
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
    />
  );
};

export default AddressInput;
