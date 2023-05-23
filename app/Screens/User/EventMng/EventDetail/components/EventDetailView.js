import React from "react";
import { View, Image, Modal, TouchableOpacity } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import moment from "moment";
import Button from "../../../../../Components/Button";
import { COLORS, Constants } from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import SliderImages from "../../../../../Components/SliderImages";
import { FullImageViewList } from "../../../../../Components/ListItemsView";
import { RECENT_TIME_FORMAT } from "../../../../../Utils/Globalfunctions";
import MainButton from "../../../../../Components/MainButton";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import PageScroll from "../../../../../Components/PageScroll";
import VideoPlayer from "../../../../../Components/VideoPlayer";

const EventDetailView = (props) => {
  return (
    <View style={CommonStyles.container}>
      <MainHeader headerText="Events Details" />
      <PageScroll>
        <SliderImages
          data={props?.eventDetails?.events_image}
          posterImg={"events_image"}
        />
        <View style={{ bottom: 24 }}>
          <FullImageViewList
            shadow={false}
            marginHorizontal={5}
            fullImage={""}
            timeTxt={
              props?.eventDetails?.event_start_date
                ? `${moment
                    .unix(props?.eventDetails?.event_start_date)
                    .format(Constants.TIME_DATE_FORMAT)} To ${moment
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
          {/* {moment(props?.eventDetails?.event_end_date).format(
            Constants.TIME_DATE_FORMAT
          ) > moment().format(Constants.TIME_DATE_FORMAT) ? ( */}
            <View
              style={[
                CommonStyles.straightCon,
                { justifyContent: "space-evenly" },
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
                paddingHorizontal={25}
                buttonTxt={"Buy Ticket"}
                borderRadius={10}
                backgroundColor={COLORS.YELLOW}
                txtColor={COLORS.WHITE}
                borderColor={COLORS.TRANSPARENT}
                onPressButton={() => props.setBuyTicketModal(1)}
              />
              <TouchableOpacity
                style={{ backgroundColor: COLORS.COMMON, borderRadius: 10 }}
              >
                <IconX
                  origin={ICON_TYPE.MATERIAL_COMMUNITY}
                  name={"dots-horizontal"}
                  size={26}
                />
              </TouchableOpacity>
            </View>
          {/* ) : null} */}
        </View>
        {props.videoUrl != "null" ? (
          <View style={[styles.containVw, { paddingHorizontal: 0 }]}>
            <ScaleText style={styles.titleTxt}>Event Video</ScaleText>
            <View style={{ paddingHorizontal: 10 }}>
              <VideoPlayer video={props.eventDetails?.events_video} />
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
            <TouchableOpacity onPress={() => {}} style={styles.addToCalVw}>
              <IconX
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                name={"checkbox-blank-circle-outline"}
                size={25}
                color={COLORS.BLACK}
                paddingRight={6}
              />
              <ScaleText style={styles.addToCalTxt}>Add to calender</ScaleText>
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
