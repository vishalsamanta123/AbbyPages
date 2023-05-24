import React from "react";
import {
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import styles from "./styles";
import CommonStyles from "../../../../../Utils/CommonStyles";
import {
  FONT_SIZE,
} from "../../../../../Utils/Constant";
import MainHeader from "../../../../../Components/MainHeader";
import ScaleText from "../../../../../Components/ScaleText";
const Locations = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding' : null}
      style={CommonStyles.container}>
      <MainHeader
        headerText={"Locations"}
        fontSize={FONT_SIZE.medium}
        notifyIcon={false}
      />
      <View style={styles.EmailContainer}>
        <View style={styles.FlexViewContain}>
          <View style={{ flex: 5 }}>
            <ScaleText style={styles.EmailNotifyTxt}>Your Saved Locations</ScaleText>
          </View>
          {/* <TouchableOpacity
            onPress={() => props.onPressAddLocation()}
            style={styles.AddLocationView}
          >
            <Image
              style={styles.addLocationImg}
              source={Images.THEME_ADD_IMG}
            />
          </TouchableOpacity> */}
        </View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          data={props.SavedLocations}
          renderItem={({ item, index }) =>
            props._handleSavedLocation(item, index)
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default Locations;
