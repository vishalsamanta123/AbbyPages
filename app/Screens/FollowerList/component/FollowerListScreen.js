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
const FollowerListScreen = () => {
  return (
    <View style={CommonStyles.container}>
      <Header
        RightImg={null}
        leftImg={Images.DRAWER_IMG}
        HeaderText={"Followers"}
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
            It doesn't look like anyone has follwed you on AbbyPages yet.Just
            keep that awesome content and i'm sure your fans will come roilin`
            in "soon!";
          </Text>
        </View>
      </View>
    </View>
  );
};
export default FollowerListScreen;
