import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import CommonStyles from "../../../Utils/CommonStyles";
import Styles from "./styles";
import {
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import { Images } from "../../../Utils/images";

const ListingMapScreen = (props) => {
  return (
    <>
      <StatusBar
        backgroundColor={YELLOW_COLOR_CODE}
        barStyle="dark-content"
        animated={true}
      />
      <View style={CommonStyles.container}>
        <View style={Styles.header}>
          <View style={Styles.headerBackBtnCon}>
            <TouchableOpacity onPress={() => props.onPressBack()}>
              <Image source={Images.HEADER_BCK_IMG} />
            </TouchableOpacity>
          </View>
          <View style={Styles.headerMiddleCon}>
            <View style={Styles.iptCon}>
              <View style={Styles.searchIconCon}>
                <Image
                  source={Images.SEARCH_IMG}
                />
              </View>
              <TextInput
                placeholder={"Tea Rooms Current..."}
                placeholderTextColor={BLACK_COLOR_CODE}
                style={Styles.iptStyles}
              />
            </View>
          </View>
          <View style={Styles.headerBackBtnCon}>
            <TouchableOpacity onPress={() => props.onPressDone()}>
              <Image
                tintColor={WHITE_COLOR_CODE}
                resizeMode="contain"
                style={{ height: 28, width: 28 }}
                source={Images.LIST_IMG}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
export default ListingMapScreen;
