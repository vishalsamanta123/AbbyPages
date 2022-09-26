import React from "react";
import { Image, View, Text, FlatList } from "react-native";
import styles from "./styles";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
const ManageFriendInvite = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Manage Friend Invitations"
        RightImg={null}
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <View style={styles.FlatlistContain}>
          <FlatList
            data={props.dataType}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{
              backgroundColor: YELLOW_COLOR_CODE,
            }}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => props._renderCategory(item, index)}
          />
        </View>
        <View style={styles.FriendContainer}>
          <View style={[styles.cardCon]}>
            <View style={styles.imgCon}>
              <Image
                source={require("../../../Assets/user_icon_box_large.png")}
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
              You have to not added any friends to your list.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ManageFriendInvite;
