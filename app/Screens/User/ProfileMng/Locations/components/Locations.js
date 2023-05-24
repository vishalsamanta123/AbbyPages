import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import styles from "./styles";
import Header from "../../../../../Components/Header";
import CommonStyles from "../../../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  FONT_SIZE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import MainHeader from "../../../../../Components/MainHeader";
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
            <Text style={styles.EmailNotifyTxt}>Your Saved Locations</Text>
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
