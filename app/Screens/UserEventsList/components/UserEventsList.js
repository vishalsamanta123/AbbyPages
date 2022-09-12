import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import moment from "moment";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import Header from "../../../Components/Header";
import {
  FONT_FAMILY_REGULAR,
  SMALL_TEXT_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";

const UserEventsScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="User Events"
        onPressBackFun={() => handleBack()}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        RightImg={require("../../../Assets/plus_icon_header.png")}
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
              <TouchableOpacity
                onPress={() => props.navToEventDetail(item)}
                style={styles.allTxtVw}
              >
                <Text style={styles.nameTxt}>{item?.event_name}</Text>
                <View style={styles.straightVw}>
                  <Image
                    style={styles.straightImg}
                    source={require("../../../Assets/profile_icon_list.png")}
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
              </TouchableOpacity>
              <View>
                <TouchableOpacity style={{ alignItems: "center" }}>
                  <Text style={styles.downloadTxt}>Download Ticket</Text>
                  <Image
                    style={styles.downloadImg}
                    resizeMode={"contain"}
                    source={require("../../../Assets/upload_icon_box.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default UserEventsScreen;
