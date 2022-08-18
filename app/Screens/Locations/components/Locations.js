import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import { WHITE_COLOR_CODE } from "../../../Utils/Constant";
const Locations = (props) => {
  return (
    <KeyboardAvoidingView style={CommonStyles.container}>
      <Header RightImg={null} HeaderText={"Locations"} />
      <View style={styles.EmailContainer}>
        <View style={styles.FlexViewContain}>
          <View style={{ flex: 5 }}>
            <Text style={styles.EmailNotifyTxt}>Your Saved Locations</Text>
          </View>
          <TouchableOpacity
            onPress={() => props.onPressAddLocation()}
            style={styles.AddLocationView}
          >
            <Image
              style={styles.addLocationImg}
              source={require("../../../Assets/add_location_icon.png")}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
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
