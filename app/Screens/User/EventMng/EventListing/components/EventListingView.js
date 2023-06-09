import React, { useState } from "react";
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import moment from "moment";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import Header from "../../../../../Components/Header";
import { COLORS, Constants, FONT_SIZE } from "../../../../../Utils/Constant";
import Button from "../../../../../Components/Button";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Images } from "../../../../../Utils/images";
import Video from "react-native-video";
import { videos } from "../../../../../Utils/videos";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import EmptyList from "../../../../../Components/EmptyList";
import MainButton from "../../../../../Components/MainButton";
import { businessTypes, dayData } from "../../../../../Utils/staticData";
import {
  RECENT_TIME_FORMAT,
  handleBusinessNav,
} from "../../../../../Utils/Globalfunctions";
import {
  FullImageViewList,
  RowSingleTxtList,
} from "../../../../../Components/ListItemsView";
import PageScroll from "../../../../../Components/PageScroll";
import VideoPlayer from "../../../../../Components/VideoPlayer";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import Loader from "../../../../../Utils/Loader";

const EventListingView = (props) => {
  const [alsoSeeFor, setAlsoSeeFor] = useState(false);
  const _renderTime = (item, index) => {
    const selectedColor =
      index === props.isSelectedDay ? COLORS.YELLOW : COLORS.BLACK;
    return (
      <TouchableOpacity
        onPress={() => props._handleDaySelected(item.id, index)}
        style={styles.lablestyle}
      >
        <ScaleText style={[styles.txtTimeCat, { color: selectedColor }]}>
          {item.name}
        </ScaleText>
        <Image
          style={[styles.timeDataImg, { tintColor: selectedColor }]}
          source={Images.PROCEED_IMG}
        />
      </TouchableOpacity>
    );
  };
  const handleSeeAll = async () => {
    props.getEventList(0, 12, 0, "");
    props?.setEventType(0);
    await props.setOpenAll(true);
    setAlsoSeeFor(false);
  };
  const handleCloseDate = () => {
    props.setOpenSearchDate(false);
  };
  return (
    <View style={CommonStyles.container}>
      <MainHeader
        headerText={"Events"}
        loginButton={false}
        TxtMarginRight={"5%"}
        backText={false}
      />
      <PageScroll contentContainerStyle={CommonStyles.scrollCon}>
        <View style={styles.videoBannerView}>
          <VideoPlayer
            reqVideo={videos.FIND_EVENT_BANNER_VIDEO}
            videoHeight={320}
            pauseStartBttn={false}
          />
          <View style={styles.bannerView}>
            <ScaleText style={CommonStyles.bigTxtVw}>
              Sell Event Tickets on ABBYPAGES
            </ScaleText>
            <ScaleText
              style={[
                CommonStyles.mediumTxt,
                { marginTop: 12, marginBottom: 12 },
              ]}
            >
              Online ticket sales and the creation of fantastic events just got
              a whole lot simpler. Create
            </ScaleText>
            <Button
              style={styles.createbtn}
              buttonLabelStyle={styles.createBtnTxt}
              onPress={() => handleBusinessNav(businessTypes[0])}
              buttonText={"Create Event"}
              width={"50%"}
              paddingHeight={10}
            />
          </View>
        </View>
        {props?.events?.upcoming_events && (
          <>
            <ScaleText style={styles.eventTitlesTxt}>Upcoming Events</ScaleText>
            <View style={styles.containers}>
              <FullImageViewList
                onPressView={() =>
                  props.navToEventDetail(props?.events?.upcoming_events)
                }
                subSmallTxt2={"Tickets on Sale now"}
                fullImage={props?.events?.upcoming_events?.events_image}
                timeTxt={RECENT_TIME_FORMAT(
                  props?.events?.upcoming_events?.event_date
                )}
                headTxt={props?.events?.upcoming_events?.event_name}
                subHeadTxt={props?.events?.upcoming_events?.event_location?.trim()}
                smallTxt={`${props?.events?.upcoming_events?.interested} Interested`}
                subSmallTxt={props?.events?.upcoming_events?.category_name}
                onPressHeart={() =>
                  props.onPressLike(
                    props?.events?.upcoming_events,
                    null,
                    "upcoming"
                  )
                }
              />
            </View>
          </>
        )}
        <View style={styles.containers}>
          <ScaleText style={styles.eventTitlesTxt}>Events</ScaleText>
          <View style={styles.seeEventsVw}>
            <TouchableOpacity
              onPress={() => {
                setAlsoSeeFor(!alsoSeeFor);
                if (props.eventType !== 0) {
                  props.getEventList(0, 4, 0, "");
                  props.setEventType(0);
                }
                props.setIsSelectedDay(null);
              }}
              style={styles.seeOnVw}
            >
              <ScaleText style={styles.seeOnTxt}>See Events For</ScaleText>
              <IconX
                origin={ICON_TYPE.MATERIAL_ICONS}
                size={22}
                color={COLORS.BLACK}
                name={alsoSeeFor ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.seeOnVw}
              onPress={() => handleSeeAll()}
            >
              <ScaleText style={styles.seeOnTxt}>See All</ScaleText>
            </TouchableOpacity>
          </View>
          {alsoSeeFor && (
            <View style={{ marginLeft: 10, marginVertical: 5 }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
              >
                {dayData?.map((itm, index) => {
                  const selectedColor =
                    index === props.isSelectedDay
                      ? COLORS.YELLOW
                      : COLORS.BLACK;
                  return (
                    <View style={CommonStyles.straightCon}>
                      <RowSingleTxtList
                        text={itm.name}
                        txtColor={selectedColor}
                        paddingHorizontal={0}
                        paddingVertical={0}
                        borderColor={selectedColor}
                        onPressItem={() =>
                          props._handleDaySelected(itm.id, index)
                        }
                        borderBottomWidth={0}
                      />
                      <View style={{ right: 5 }}>
                        <IconX
                          origin={ICON_TYPE.ICONICONS}
                          name={"remove-outline"}
                          style={styles.timeDataImg}
                          color={selectedColor}
                        />
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
              <DateTimePickerModal
                isVisible={props?.openSearchDate}
                mode={"date"}
                onConfirm={(date) => props?.handleEndTimeConfirm(date)}
                onCancel={handleCloseDate}
              />
            </View>
          )}
          <ScrollView>
            {props.eventsList.length > 0 ? (
              <>
                {props.eventsList.map((item, index) => {
                  return (
                    <FullImageViewList
                      onPressView={() => props.navToEventDetail(item)}
                      fullImage={item?.events_image}
                      timeTxt={RECENT_TIME_FORMAT(item?.event_date)}
                      headTxt={item?.event_name}
                      subHeadTxt={item?.event_location?.trim()}
                      smallTxt={`${item?.interested} Interested`}
                      subSmallTxt={item?.category_name}
                      onPressHeart={() =>
                        props.onPressLike(item, index, "list")
                      }
                    />
                  );
                })}
              </>
            ) : (
              <>
                {!props?.messageShow?.loader && (
                  <View style={styles.emptyEventVw}>
                    <EmptyList message={"Event"} />
                  </View>
                )}
              </>
            )}
            {props?.messageShow?.loader ? <Loader type={"small"} /> : null}
          </ScrollView>
        </View>
        <View style={styles.containers}>
          <ScaleText style={styles.eventTitlesTxt}>
            Recently Added Events
          </ScaleText>
          <ScrollView>
            {props?.events?.recently_added?.map((item, index) => {
              return (
                <FullImageViewList
                  onPressView={() => props.navToEventDetail(item)}
                  fullImage={item?.events_image}
                  timeTxt={RECENT_TIME_FORMAT(item?.event_date)}
                  headTxt={item?.event_name}
                  subHeadTxt={item?.event_location?.trim()}
                  smallTxt={`${item?.interested} Interested`}
                  subSmallTxt={item?.category_name}
                  onPressHeart={() => props.onPressLike(item, index, "recent")}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.containers}>
          <ScaleText style={styles.eventTitlesTxt}>Popular Events</ScaleText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.isArray(props?.events?.popular_events) &&
              props?.events?.popular_events?.map((item, index) => {
                return (
                  <FullImageViewList
                    onPressView={() => props.navToEventDetail(item)}
                    fullImage={item?.events_image}
                    timeTxt={RECENT_TIME_FORMAT(item?.event_date)}
                    headTxt={item?.event_name}
                    subHeadTxt={item?.event_location?.trim()}
                    smallTxt={`${item?.interested} Interested`}
                    subSmallTxt={item?.category_name}
                    onPressHeart={() =>
                      props.onPressLike(item, index, "popular")
                    }
                  />
                );
              })}
          </ScrollView>
          <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
            <MainButton
              buttonTxt="See All"
              paddingHeight={12}
              txtColor={COLORS.WHITE}
              backgroundColor={COLORS.YELLOW}
              txtFontsize={FONT_SIZE.mediumL}
              onPressButton={() => handleSeeAll()}
            />
          </View>
        </View>
      </PageScroll>
    </View>
  );
};
export default EventListingView;
