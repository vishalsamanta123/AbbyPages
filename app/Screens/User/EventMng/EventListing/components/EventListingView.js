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
import { COLORS, Constants } from "../../../../../Utils/Constant";
import Button from "../../../../../Components/Button";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Images } from "../../../../../Utils/images";
import Video from "react-native-video";
import { videos } from "../../../../../Utils/videos";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import EmptyList from "../../../../../Components/EmptyList";
import MainButton from "../../../../../Components/MainButton";
import { dayData } from "../../../../../Utils/staticData";
import { RECENT_TIME_FORMAT } from "../../../../../Utils/Globalfunctions";
import { FullImageViewList } from "../../../../../Components/ListItemsView";
import PageScroll from "../../../../../Components/PageScroll";

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
    props.setLimit(12);
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
          <Video
            source={videos.FIND_EVENT_BANNER_VIDEO}
            style={styles.bannervideoStyle}
            repeat
            resizeMode={"cover"}
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
              onPress={() => {}}
              buttonText={"Create Event"}
              width={"50%"}
              paddingHeight={10}
            />
          </View>
        </View>
        {props?.events?.upcoming_events && (
          <>
            <ScaleText style={styles.eventTitlesTxt}>
              Abbypages Events
              <ScaleText style={{ color: COLORS.SMALL_TEXT }}>
                {" "}
                (Latest){" "}
              </ScaleText>
            </ScaleText>
            <View style={styles.containers}>
              <FullImageViewList
                onPressView={() =>
                  props.navToEventDetail(props?.events?.upcoming_events)
                }
                fullImage={props?.events?.upcoming_events?.events_image}
                timeTxt={RECENT_TIME_FORMAT(
                  props?.events?.upcoming_events?.event_date
                )}
                headTxt={props?.events?.upcoming_events?.event_name}
                subHeadTxt={props?.events?.upcoming_events?.event_location?.trim()}
                smallTxt={`${props?.events?.upcoming_events?.interested} Interested`}
                subSmallTxt={props?.events?.upcoming_events?.category_name}
              />
            </View>
          </>
        )}
        <View style={styles.containers}>
          <ScaleText style={styles.eventTitlesTxt}>Events</ScaleText>
          <View
            style={[styles.straightVw, { justifyContent: "space-between" }]}
          >
            <TouchableOpacity
              onPress={() => {
                setAlsoSeeFor(!alsoSeeFor);
                if (props.eventType !== 0) {
                  props.getEventList(0, props.limit, 0, "");
                  props.setEventType(0);
                }
                props.setIsSelectedDay(null);
              }}
              style={[styles.straightVw, styles.seeOnVw]}
            >
              <ScaleText style={styles.seeOnTxt}>See Events For</ScaleText>
              <Image
                style={styles.seeForImg}
                source={
                  alsoSeeFor ? Images.ARROW_UP_IMG : Images.ARROW_DOWN_IMG
                }
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
            <>
              <FlatList
                data={dayData}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => _renderTime(item, index)}
              />
              <DateTimePickerModal
                isVisible={props?.openSearchDate}
                mode={"date"}
                onConfirm={(date) => props?.handleEndTimeConfirm(date)}
                onCancel={handleCloseDate}
              />
            </>
          )}
          <ScrollView>
            {props.eventsList.length > 0 ? (
              <>
                {props.eventsList.map((item) => {
                  return (
                    <FullImageViewList
                      onPressView={() => props.navToEventDetail(item)}
                      fullImage={item?.events_image}
                      timeTxt={RECENT_TIME_FORMAT(item?.event_date)}
                      headTxt={item?.event_name}
                      subHeadTxt={item?.event_location?.trim()}
                      smallTxt={`${item?.interested} Interested`}
                      subSmallTxt={item?.category_name}
                    />
                  );
                })}
              </>
            ) : (
              <View style={styles.emptyEventVw}>
                <EmptyList message={"Event"} />
              </View>
            )}
          </ScrollView>
        </View>
        <View style={styles.containers}>
          <ScaleText style={styles.eventTitlesTxt}>
            Recently Added Events
          </ScaleText>
          <ScrollView>
            {props?.events?.recently_added?.map((item) => {
              return (
                <FullImageViewList
                  onPressView={() => props.navToEventDetail(item)}
                  fullImage={item?.events_image}
                  timeTxt={RECENT_TIME_FORMAT(item?.event_date)}
                  headTxt={item?.event_name}
                  subHeadTxt={item?.event_location?.trim()}
                  smallTxt={`${item?.interested} Interested`}
                  subSmallTxt={item?.category_name}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.containers}>
          <ScaleText style={styles.eventTitlesTxt}>Popular Events</ScaleText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {props?.events?.popular_events?.map((item) => {
              return (
                <FullImageViewList
                  onPressView={() => props.navToEventDetail(item)}
                  fullImage={item?.events_image}
                  timeTxt={RECENT_TIME_FORMAT(item?.event_date)}
                  headTxt={item?.event_name}
                  subHeadTxt={item?.event_location?.trim()}
                  smallTxt={`${item?.interested} Interested`}
                  subSmallTxt={item?.category_name}
                />
              );
            })}
          </ScrollView>
          {/* <Button
            style={styles.seeAllBttn}
            buttonLabelStyle={styles.seeAllBttnTxt}
            onPress={() => handleSeeAll()}
            buttonText={"See All"}
            paddingHeight={10}
          /> */}
          <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
            <MainButton
              buttonTxt="See All"
              paddingHeight={12}
              onPressButton={() => handleSeeAll()}
            />
          </View>
        </View>
      </PageScroll>
    </View>
  );
};
export default EventListingView;
