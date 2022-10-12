import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import moment from "moment";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import Header from "../../../Components/Header";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import { Images } from "../../../Utils/images";

const UserEventsScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="User Events"
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        RightImg={null}
        leftImg={require("../../../Assets/hamburger_icon.png")}
        type="Drawer"
      />
      <FlatList
        data={props?.eventsList}
        style={styles.allEventsVw}
        ListEmptyComponent={() => {
          return (
            <View style={styles.emptyEventVw}>
              <Text style={styles.emptyEventTxt}>No Data Found</Text>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.containerVw}>
              <View style={styles.allTxtVw}>
                <Text style={styles.nameTxt}>{item?.event_name}</Text>
                <View style={styles.straightVw}>
                  <Image
                    style={styles.straightImg}
                    source={Images.CHECKOUT_USER_IMG}
                  />
                  <Text style={styles.straightTxt}>
                    {item.ticket_user_name}
                  </Text>
                </View>
                <View style={styles.straightVw}>
                  <Image
                    style={styles.straightImg}
                    source={require("../../../Assets/info_marker_icon.png")}
                  />
                  <Text style={styles.straightTxt}>{item?.address}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => props.onPressDownloadTckt(item)}
                style={{ alignItems: "center" }}
              >
                <Text style={styles.downloadTxt}>Download Ticket</Text>
                <Image
                  style={styles.downloadImg}
                  resizeMode={"contain"}
                  source={require("../../../Assets/upload_icon_box.png")}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
export default UserEventsScreen;
