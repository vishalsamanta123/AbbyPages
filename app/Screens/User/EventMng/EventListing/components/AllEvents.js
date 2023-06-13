import React, { useEffect, useState } from "react";
import { View, BackHandler } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import { FullImageViewList } from "../../../../../Components/ListItemsView";
import { RECENT_TIME_FORMAT } from "../../../../../Utils/Globalfunctions";
import ListingView from "../../../../../Components/ListingView";
import EmptyList from "../../../../../Components/EmptyList";
import Loader from "../../../../../Utils/Loader";
import { JobList } from "../../../../../Components/ShimmerEffect";

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
    props.setoffset(0);
    props.getEventList(0, 4, 0, "");
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
      {props.loader ? <JobList/> : <ListingView
        data={props?.eventsList}
        style={styles.allEventsVw}
        ListEmptyComponent={() => {
          return <EmptyList message={"Events"} />;
        }}
        onEndReached={() => {
          if (props?.eventsList?.length < props?.moreData) {
            props?.getEventList(props?.offset + 1, 8, 0, "", false);
            props.setMessageShow({
              ...props.messageShow,
              loader: true,
            });
          }
        }}
        ListFooterComponent={() => {
          return (
            <>{props?.messageShow?.loader ? <Loader type={"small"} /> : null}</>
          );
        }}
        renderItem={({ item, index }) => {
          return (
            <FullImageViewList
              fullImage={item?.events_image}
              onPressView={() => props.navToEventDetail(item)}
              timeTxt={RECENT_TIME_FORMAT(item?.event_date)}
              headTxt={item?.event_name}
              subHeadTxt={item?.event_location?.trim()}
              smallTxt={`${item?.interested} Interested`}
              subSmallTxt={item?.category_name}
              onPressHeart={() => props.onPressLike(item, index, "list")}
            />
          );
        }}
      />}
    </View>
  );
};
export default EventListingScreen;
