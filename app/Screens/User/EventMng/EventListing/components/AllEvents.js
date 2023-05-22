import React, { useEffect, useState } from "react";
import { View, BackHandler } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import { FullImageViewList } from "../../../../../Components/ListItemsView";
import { RECENT_TIME_FORMAT } from "../../../../../Utils/Globalfunctions";
import ListingView from "../../../../../Components/ListingView";

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
      <MainHeader
        headerText={"All Events"}
        loginButton={false}
        TxtMarginRight={"5%"}
        backText={false}
        onPressBack={() => handleBack()}
      />
      <ListingView
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
            <FullImageViewList
              fullImage={item?.events_image}
              onPressView={() => props.navToEventDetail(item)}
              timeTxt={RECENT_TIME_FORMAT(item?.event_date)}
              headTxt={item?.event_name}
              subHeadTxt={item?.event_location?.trim()}
              smallTxt={`${item?.interested} Interested`}
              subSmallTxt={item?.category_name}
            />
          );
        }}
      />
    </View>
  );
};
export default EventListingScreen;
