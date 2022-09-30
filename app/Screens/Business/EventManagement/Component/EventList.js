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
      {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              color: BLACK_COLOR_CODE,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Create an Event
          </Text>
          <TouchableOpacity onPress={() => props.onPressCreate()}>
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../../../../Assets/qty_minus_icon3.png")}
            />
          </TouchableOpacity>
        </View> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props?.eventData}
        style={{ marginHorizontal: 10 }}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => props.handleEvents(item)}
        ListFooterComponent={() => <View style={{ height: 50 }} />}
      />
    </View>
  );
};

export default EventList;

const styles = StyleSheet.create({});
