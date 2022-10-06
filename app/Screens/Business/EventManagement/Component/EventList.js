import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../../../../Components/Header";
import {
  BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import CommonStyles from "../../../../Utils/CommonStyles";
import styles from "./styles";

const EventList = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Events"
        RightImg={null}
        leftImg={require("../../../../Assets/hamburger_icon.png")}
        type="Drawer"
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
      />
      <TouchableOpacity
        style={styles.moreOptionVw}
        onPress={() => props.onPressCreate()}
      >
        <View style={styles.moreOptionInnrVw}>
          <Image
            resizeMode={"contain"}
            style={{ width: 28, height: 28 }}
            source={require("../../../../Assets/calendar_icon.png")}
          />
          <Text style={styles.JobDscrptn}>Create an Event</Text>
        </View>
        <Image
          style={styles.listImg}
          resizeMode={"contain"}
          source={require("../../../../Assets/qty_plus_icon.png")}
        />
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props?.eventData}
        style={{ marginHorizontal: 10 }}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => props.handleEvents({ item, index })}
        ListFooterComponent={() => <View style={{ height: 50 }} />}
      />
    </View>
  );
};

export default EventList;
