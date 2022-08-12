import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from "react-native";
import moment from "moment";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import Header from "../../../Components/Header";
import { SMALL_TEXT_COLOR_CODE } from "../../../Utils/Constant";

const EventListingScreen = (props) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBack
    );
    return () => backHandler.remove();
  }, []);
  const handleBack = () => {
    props.setOpenAll(false);
    props.getEventList(0);
    props.setLimit(4);
    props.setEventType(0);
  };
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="All Events"
        onPressBackFun={() => handleBack()}
        onPress={() => props.handleCraeteEvent()}
        RightImg={require("../../../Assets/plus_icon_header.png")}
      />
      <ScrollView
        onScrollEndDrag={() => {
          !props.stopOffset
            ? props.getEventList(
                props.eventsList.length > 5 ? props.offset + 1 : 0
              )
            : null;
        }}
        contentContainerStyle={styles.allEventsVw}
      >
        {props.eventsList.length > 0 ? (
          <>
            {props.eventsList.map((item) => {
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
                      <Text style={styles.straightTxt}>
                        {item?.event_location}
                      </Text>
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
            })}
          </>
        ) : (
          <View style={styles.emptyEventVw}>
            <Text style={styles.emptyEventTxt}>No Data Found for this</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default EventListingScreen;
