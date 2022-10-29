import React from "react";
import { Image, View, Text } from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";
import { Images } from "../../../Utils/images";
import styles from "./styles";
const FollowingListScreen = () => {
  return (
    <View style={CommonStyles.container}>
      <Header
        RightImg={null}
        leftImg={Images.DRAWER_IMG}
        HeaderText={"Following"}
        type="Drawer"
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View
        style={[
          CommonStyles.body,
          {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f2f2f2",
          },
        ]}
      >
        <View style={styles.cardCon}>
          <View style={styles.imgCon}>
            <Image
              style={{}}
              source={Images.THEME_PROFILE_IMG}
            />
          </View>
          <Text
            style={[
              CommonStyles.text,
              {
                bottom: 25,
                fontSize: 16,
                color: "#6c6c6c",
                lineHeight: 25,
                textAlign: "center",
              },
            ]}
          >
            You haven't started following anyone yet. Follow reviewers to tag
            along on their local adventures.
          </Text>
        </View>
      </View>
    </View>
  );
};
export default FollowingListScreen;
