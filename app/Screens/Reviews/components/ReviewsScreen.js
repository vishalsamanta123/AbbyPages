import React from "react";
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import styles from "./styles";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";
const ReviewsScreen = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        leftImg={require("../../../Assets/hamburger_icon.png")}
        HeaderText="Reviews"
        type="Drawer"
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View
        style={[
          CommonStyles.body,
          { backgroundColor: WHITE_COLOR_CODE, justifyContent: "center" },
        ]}
      >
        <View style={styles.MainImgeStyle}>
          <Image source={require("../../../Assets/review_graphic.png")} />
        </View>
        <View style={{ paddingTop: 20 }}>
          <View style={styles.ParaViewText}>
            <Text style={styles.ParaMainText}>
              It your turn - review everything from your favorite burger to your
              favorite root canal. Write reviews to contribute to the AbbyPages
              community and help your friends find all the local gems that you
              love.
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ReviewsScreen;
