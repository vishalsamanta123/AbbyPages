import React, { useEffect, useState } from "react";
import { View, Image, Modal, TouchableOpacity } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import moment from "moment";
import { COLORS, Constants } from "../../../../../Utils/Constant";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import SliderImages from "../../../../../Components/SliderImages";
import { FullImageViewList } from "../../../../../Components/ListItemsView";
import {
  handleSharePress,
  RECENT_TIME_FORMAT,
} from "../../../../../Utils/Globalfunctions";
import MainButton from "../../../../../Components/MainButton";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import PageScroll from "../../../../../Components/PageScroll";
import VideoPlayer from "../../../../../Components/VideoPlayer";
import FastImages from "../../../../../Components/FastImage";

const EventDetailView = (props) => {
  const [moreDot, setMoreDot] = useState(false);
  useEffect(() => {
    const unsubscribe = props?.navigation.addListener("blur", () => {
      setMoreDot(false);
    });
    return unsubscribe;
  }, [props?.navigation]);
  const timestampInSeconds = Math.floor(new Date().getTime() / 1000);
  return (
    <View style={CommonStyles.container}>
      <MainHeader headerText="Events Details" />
      <PageScroll>
        {props?.eventDetails?.events_image?.length > 0 ? (
          <View>
            <SliderImages
              data={props?.eventDetails?.events_image}
              posterImg={"events_image"}
            />
          </View>
        ) : (
          <View>
            <FastImages
              style={{ height: 200, width: "100%" }}
              source={{ uri: props?.eventDetails?.header_image }}
            />
          </View>
        )}
        <View
          style={[
            styles.containVw,
            { paddingVertical: 0, paddingHorizontal: 0 },
          ]}
        >
          <View style={{ bottom: 8 }}>
            <FullImageViewList
              shadow={false}
              marginHorizontal={5}
              fullImage={""}
              timeTxt={
                props?.eventDetails?.event_start_date
                  ? `${moment
                      .unix(props?.eventDetails?.event_start_date)
                      .format(Constants.TIME_DATE_FORMAT)} to ${moment
                      .unix(props?.eventDetails?.event_end_date)
                      .format(Constants.TIME_DATE_FORMAT)}`
                  : RECENT_TIME_FORMAT(props?.eventDetails?.event_date)
              }
              headTxt={props?.eventDetails?.event_name}
              subHeadTxt={props?.eventDetails?.event_location?.trim()}
              smallTxt={`${props?.eventDetails?.interested} Interested`}
              subSmallTxt={props?.eventDetails?.category_name}
              item={props?.eventDetails}
              marginBottom={0}
            />
            {props?.userData?.login_type &&
            (timestampInSeconds < props?.eventDetails?.event_end_date ||
              timestampInSeconds < props?.eventDetails?.event_date) ? (
              <View
                style={[
                  CommonStyles.straightCon,
                  { justifyContent: "space-evenly", marginRight: 35 },
                ]}
              >
                <MainButton
                  paddingHeight={2}
                  paddingHorizontal={16}
                  buttonTxt={"Interested"}
                  backgroundColor={
                    props.eventDetails?.user_interested === 0
                      ? COLORS.COMMON
                      : COLORS.YELLOW
                  }
                  txtColor={
                    props.eventDetails?.user_interested === 0
                      ? COLORS.BLACK
                      : COLORS.WHITE
                  }
                  borderRadius={10}
                  borderColor={
                    props.eventDetails?.user_interested === 0
                      ? COLORS.GREY
                      : COLORS.TRANSPARENT
                  }
                  onPressButton={() => {
                    setMoreDot(false);
                    if (props.eventDetails?.user_interested === 0) {
                      props.onInterestPress(1);
                    } else {
                      props.setInterstedModal(true);
                    }
                  }}
                  leftImgOrigin={ICON_TYPE.ANT_ICON}
                  leftImgName={"star"}
                  leftImgSize={13}
                  leftImgColor={
                    props.eventDetails?.user_interested === 0
                      ? COLORS.RGBA1
                      : COLORS.WHITE
                  }
                  rightImgOrigin={
                    props.eventDetails?.user_interested === 1
                      ? ICON_TYPE.ANT_ICON
                      : ""
                  }
                  rightImgName={"caretdown"}
                  rightImgSize={13}
                  rightImgColor={
                    props.eventDetails?.user_interested === 0
                      ? COLORS.RGBA1
                      : COLORS.WHITE
                  }
                />
                <MainButton
                  paddingHeight={2}
                  paddingHorizontal={30}
                  buttonTxt={"Buy Ticket"}
                  borderRadius={10}
                  backgroundColor={COLORS.YELLOW}
                  txtColor={COLORS.WHITE}
                  borderColor={COLORS.TRANSPARENT}
                  onPressButton={() => {
                    props.setBuyTicketModal(1);
                    setMoreDot(false);
                  }}
                />
              </View>
            ) : null}
            <TouchableOpacity
              onPress={() => setMoreDot(moreDot ? false : true)}
              style={styles.moreBttnVw}
            >
              <IconX
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                name={"dots-horizontal"}
                size={25}
              />
            </TouchableOpacity>
            {moreDot ? (
              <View style={styles.moreDotVw}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={styles.moreDotItmVw}
                >
                  <IconX
                    origin={ICON_TYPE.OCTICONS}
                    name={"calendar"}
                    size={20}
                    color={COLORS.BLACK}
                    paddingRight={10}
                  />
                  <ScaleText style={styles.moreDotItmTxt}>
                    Add to Calender
                  </ScaleText>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    props.onPressLike(props?.eventDetails);
                    setMoreDot(false);
                  }}
                  style={styles.moreDotItmVw}
                >
                  <IconX
                    origin={ICON_TYPE.ANT_ICON}
                    name={"hearto"}
                    // name={heartDark ? "heart" : "hearto"}
                    color={COLORS.BLACK}
                    // color={heartDark ? COLORS.YELLOW : COLORS.BLACK}
                    size={21}
                    paddingRight={10}
                  />
                  <ScaleText style={styles.moreDotItmTxt}>
                    Add to Favourite
                  </ScaleText>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleSharePress({
                      message: props?.eventDetails?.event_name,
                      title: props?.eventDetails?.event_name,
                      urlName: props?.eventDetails?.event_name,
                      imageUrl: props?.eventDetails?.events_image,
                      image: props?.eventDetails?.events_image,
                      url: `https://abbypages.com/events/${props?.eventDetails?.event_name
                        ?.split(" ")
                        .join("-")}`,
                    });
                    setMoreDot(false);
                  }}
                  style={[styles.moreDotItmVw, { borderBottomWidth: 0 }]}
                >
                  <IconX
                    origin={ICON_TYPE.ICONICONS}
                    name={"share-social-outline"}
                    color={COLORS.BLACK}
                    size={23}
                    paddingRight={10}
                  />
                  <ScaleText style={styles.moreDotItmTxt}>Share</ScaleText>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>

        {props.eventDetails?.business_name ? (
          <View style={styles.containVw}>
            <View style={CommonStyles.straightCon}>
              <Image
                source={{ uri: props.eventDetails?.owner_image }}
                style={{ width: 45, height: 45, marginLeft: 3 }}
              />
              <View style={{ flex: 1, marginHorizontal: 10 }}>
                <ScaleText style={styles.nameTxt}>
                  {props.eventDetails?.first_name
                    ? props.eventDetails?.first_name +
                      " " +
                      props.eventDetails?.last_name +
                      " "
                    : ""}
                  ({props.eventDetails?.business_name})
                </ScaleText>
                <ScaleText
                  style={[
                    styles.detailTxt,
                    { marginLeft: 0, marginVertical: 0 },
                  ]}
                >
                  Event Organiser
                </ScaleText>
              </View>
            </View>
            <View style={{ marginLeft: 7, marginVertical: 5 }}>
              <View style={CommonStyles.straightCon}>
                <IconX
                  origin={ICON_TYPE.MATERIAL_ICONS}
                  name={"category"}
                  size={22}
                />
                <ScaleText style={styles.detailTxt}>
                  {props.eventDetails?.business_service_category}
                </ScaleText>
              </View>
              <View style={CommonStyles.straightCon}>
                <IconX
                  origin={ICON_TYPE.FEATHER_ICONS}
                  name={"thumbs-up"}
                  size={19}
                />
                <ScaleText style={styles.detailTxt}>
                  14 Users like this business*
                </ScaleText>
              </View>
              <View style={CommonStyles.straightCon}>
                <IconX origin={ICON_TYPE.ANT_ICON} name={"star"} size={19} />
                <ScaleText style={styles.detailTxt}>
                  {props.eventDetails?.rating} Rating
                </ScaleText>
              </View>
              <View style={CommonStyles.straightCon}>
                <IconX
                  origin={ICON_TYPE.FONT_AWESOME5}
                  name={"directions"}
                  size={19}
                />
                <ScaleText style={styles.detailTxt}>
                  {props.eventDetails?.address?.trim()}
                </ScaleText>
              </View>
            </View>
          </View>
        ) : null}

        {props.videoUrl != "null" ? (
          <View style={[styles.containVw, { paddingHorizontal: 0 }]}>
            <ScaleText style={styles.titleTxt}>Event Video</ScaleText>
            <View style={{ paddingHorizontal: 10 }}>
              <VideoPlayer uriVideo={props.eventDetails?.events_video} />
            </View>
          </View>
        ) : null}
        {props.eventDetails?.event_description ? (
          <View style={styles.containVw}>
            <ScaleText style={styles.titleTxt}>Discription</ScaleText>
            <ScaleText style={[styles.subTitleTxt, { padding: 6 }]}>
              {props.eventDetails?.event_description}
            </ScaleText>
          </View>
        ) : null}
      </PageScroll>
      <Modal
        visible={props.interestedModal}
        transparent={true}
        onRequestClose={() => {
          props.setInterstedModal(false);
        }}
      >
        <View
          style={[
            styles.modalCon,
            { justifyContent: "center", backgroundColor: COLORS.RGBA2 },
          ]}
        >
          <View style={styles.interestedModalVw}>
            <View style={styles.respnsesTxtVw}>
              <ScaleText style={styles.responseTxt}>Your Response</ScaleText>
              <TouchableOpacity onPress={() => props.setInterstedModal(false)}>
                <IconX
                  name={"cross"}
                  origin={ICON_TYPE.ENTYPO}
                  size={25}
                  color={COLORS.RGBA}
                  paddingRight={8}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => props.setInterest(1)}
              style={styles.respnsesVw}
            >
              <View style={styles.straightVw}>
                <IconX
                  origin={ICON_TYPE.ANT_ICON}
                  name={"star"}
                  size={20}
                  color={COLORS.RGBA1}
                />
                <ScaleText style={styles.respnsesTxt}>Interested</ScaleText>
              </View>
              <IconX
                origin={ICON_TYPE.Fontisto}
                name={
                  props.interest === 1
                    ? "radio-btn-active"
                    : "radio-btn-passive"
                }
                size={20}
                color={COLORS.YELLOW}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.setInterest(2)}
              style={styles.respnsesVw}
            >
              <View style={styles.straightVw}>
                <IconX
                  origin={ICON_TYPE.ANT_ICON}
                  name={"checkcircle"}
                  size={18}
                  color={COLORS.RGBA1}
                />
                <ScaleText style={styles.respnsesTxt}>Going</ScaleText>
              </View>
              <IconX
                origin={ICON_TYPE.Fontisto}
                name={
                  props.interest === 2
                    ? "radio-btn-active"
                    : "radio-btn-passive"
                }
                size={20}
                color={COLORS.YELLOW}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.setInterest(0)}
              style={styles.respnsesVw}
            >
              <View style={styles.straightVw}>
                <IconX
                  name={"circle-with-cross"}
                  origin={ICON_TYPE.ENTYPO}
                  size={22}
                  color={COLORS.RGBA1}
                />
                <ScaleText style={styles.respnsesTxt}>Not Interested</ScaleText>
              </View>
              <IconX
                origin={ICON_TYPE.Fontisto}
                name={
                  props.interest === 0
                    ? "radio-btn-active"
                    : "radio-btn-passive"
                }
                size={20}
                color={COLORS.YELLOW}
              />
            </TouchableOpacity>
            <View style={styles.respnsesBttnVw}>
              <MainButton
                paddingHeight={2}
                paddingHorizontal={35}
                buttonTxt={"Save"}
                backgroundColor={COLORS.YELLOW}
                txtColor={COLORS.WHITE}
                borderRadius={10}
                borderColor={COLORS.TRANSPARENT}
                onPressButton={() => {
                  props.onInterestPress(props.interest);
                }}
              />
              <MainButton
                paddingHeight={2}
                paddingHorizontal={30}
                buttonTxt={"Cancel"}
                backgroundColor={COLORS.COMMON}
                txtColor={COLORS.BLACK}
                borderRadius={10}
                borderColor={COLORS.GREY}
                onPressButton={() => {
                  props.setInterest(props.eventDetails?.user_interested);
                  props.setInterstedModal(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default EventDetailView;
