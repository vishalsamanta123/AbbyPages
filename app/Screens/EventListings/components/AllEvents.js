import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  FlatList,
} from "react-native";
import moment from "moment";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import Header from "../../../Components/Header";
import {
  SMALL_TEXT_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";

const EventListingScreen = (props) => {
  const [scrollBegin, setScrollBegin] = useState();
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBack
    );
    return () => backHandler.remove();
  }, []);
  const handleBack = () => {
    props.setOpenAll(false);
    props.setLimit(4);
    props.setoffset(0);
    props.getEventList(0, 4, 0, "");
    setScrollBegin(false);
  };
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="All Events"
        onPressBackFun={() => handleBack()}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        onPress={() => props.handleCreateEvent()}
        RightImg={require("../../../Assets/plus_icon_header.png")}
      />
      <FlatList
        data={props?.eventsList}
        style={styles.allEventsVw}
        ListEmptyComponent={() => {
          return (
            <View style={[styles.emptyEventVw, { height: 200 }]}>
              <Text style={styles.emptyEventTxt}>No Data Found</Text>
            </View>
          );
        }}
        onMomentumScrollBegin={() => setScrollBegin(true)}
        // onMomentumScrollEnd={() => setScrollBegin(false)}
        onEndReached={(distanceFromEnd) => {
          if (scrollBegin) {
            if (!props.stopOffset) {
              props?.getEventList(props.offset + 1, props.limit, 0, "");
              props.setLimit(props.limit + 1);
            }
          }
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.containerVw}>
              <Image
                resizeMode={"contain"}
                style={styles.eventImg}
                source={{
                  uri: item?.events_image,
                }}
              />
              <TouchableOpacity
                onPress={() => props.navToEventDetail(item)}
                style={styles.allTxtVw}
              >
                <Text style={styles.nameTxt}>{item?.event_name}</Text>
                <View style={styles.straightVw}>
                  <Image
                    style={styles.straightImg}
                    source={require("../../../Assets/calendar_icon.png")}
                  />
                  <Text style={styles.straightTxt}>
                    {moment
                      .unix(item?.event_date)
                      .format("dddd, MMMM Do, YYYY")}
                  </Text>
                </View>
                <View style={styles.straightVw}>
                  <Image
                    style={styles.straightImg}
                    source={require("../../../Assets/info_marker_icon.png")}
                  />
                  <Text style={styles.straightTxt}>{item?.event_location}</Text>
                </View>
                <View style={styles.straightVw}>
                  <Text
                    style={[
                      styles.straightTxt,
                      { color: SMALL_TEXT_COLOR_CODE },
                    ]}
                  >
                    {" "}
                    {item?.interested}{" "}
                  </Text>
                  <Text
                    style={[
                      styles.straightTxt,
                      { color: SMALL_TEXT_COLOR_CODE },
                    ]}
                  >
                    Interested
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
export default EventListingScreen;
