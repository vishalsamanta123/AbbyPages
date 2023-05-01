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
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import Header from "../../../../../Components/Header";
import {
  SMALL_TEXT_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import ScaleText from "../../../../../Components/ScaleText";

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
        // onPress={() => props.handleCreateEvent()}
        RightImg={null}
      />
      <FlatList
        data={props?.eventsList}
        style={styles.allEventsVw}
        ListEmptyComponent={() => {
          return (
            <View style={[styles.emptyEventVw, { height: 200 }]}>
              <ScaleText style={styles.emptyEventTxt}>No Data Found</ScaleText>
            </View>
          );
        }}
        onMomentumScrollBegin={() => setScrollBegin(true)}
        onEndReached={() => {
          if (scrollBegin) {
            if (!props.stopOffset) {
              props?.getEventList(props?.offset + 1, props?.limit + 1, 0, "");
              setScrollBegin(false);
            } else {
              setScrollBegin(false);
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
                <ScaleText style={styles.nameTxt}>{item?.event_name}</ScaleText>
                <View style={styles.straightVw}>
                  <Image
                    style={styles.straightImg}
                    source={Images.CALENDER_IMG}
                  />
                  <ScaleText style={styles.straightTxt}>
                    {moment.unix(item?.event_date).format("MM/DD/YYYY")}
                  </ScaleText>
                </View>
                <View style={styles.straightVw}>
                  <Image
                    style={styles.straightImg}
                    source={Images.LOCATION_IMG}
                  />
                  <ScaleText style={styles.straightTxt}>
                    {item?.event_location}
                  </ScaleText>
                </View>
                <View style={styles.straightVw}>
                  <ScaleText
                    style={[
                      styles.straightTxt,
                      { color: SMALL_TEXT_COLOR_CODE },
                    ]}
                  >
                    {" "}
                    {item?.interested}{" "}
                  </ScaleText>
                  <ScaleText
                    style={[
                      styles.straightTxt,
                      { color: SMALL_TEXT_COLOR_CODE },
                    ]}
                  >
                    Interested
                  </ScaleText>
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
