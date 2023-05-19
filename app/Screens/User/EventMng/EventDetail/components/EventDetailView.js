import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import moment from "moment";
import Button from "../../../../../Components/Button";
import {
  BLACK_COLOR_CODE,
  COLORS,
  GREY_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  LIGHT_GREY_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";
import Video from "react-native-video";
import { Images } from "../../../../../Utils/images";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import SliderImages from "../../../../../Components/SliderImages";
import { FullImageViewList } from "../../../../../Components/ListItemsView";
import { RECENT_TIME_FORMAT } from "../../../../../Utils/Globalfunctions";
import MainButton from "../../../../../Components/MainButton";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";

const EventDetailView = (props) => {
  const [videoShow, setVideoShow] = useState(false);
  const { width, height } = Dimensions.get("window");

  return (
    <View style={CommonStyles.container}>
      <MainHeader headerText="Events Details" />
      <ScrollView>
        {/* <SafeAreaView style={{ alignItems: "center", }}> */}
        {/* <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={props?.eventDetails?.events_image}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          onScroll={(event) => {
            props.setSliderPage(event);
          }}
          renderItem={({ item, index }) => {
            return (
              index <= 4 && (
                <View key={index} style={{ width, alignItems: "center" }}>
                  <Image
                    resizeMode="stretch"
                    source={{ uri: item.events_image }}
                    style={styles.imageStyle}
                  />
                </View>
              )
            );
          }}
        />
        <View style={styles.paginationWrapper}>
          {Array.from(
            Array(
              props?.eventDetails?.events_image?.length > 5
                ? 5
                : props?.eventDetails?.events_image?.length
            ).keys()
          ).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                { opacity: props.pageIndex === index ? 1 : 0.2 },
              ]}
              key={index}
            />
          ))}
        </View> */}
        {/* </SafeAreaView> */}
        <SliderImages
          data={props?.eventDetails?.events_image}
          posterImg={"events_image"}
        />
        {/* <View style={styles.infocon}>
          <ScaleText style={styles.nameTxt}>
            {props?.eventDetails?.event_name}
          </ScaleText>
          <View style={styles.basiccon}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={Images.CALENDER_IMG}
            />
            {props?.eventDetails?.event_start_date ? (
              <ScaleText style={styles.detailTxt}>
                {moment
                  .unix(props?.eventDetails?.event_start_date)
                  .format("ddd, MMM Do, YYYY")}{" "}
                <ScaleText style={styles.detailTxt}>
                  <ScaleText style={{ color: BLACK_COLOR_CODE }}>To </ScaleText>
                  {moment
                    .unix(props?.eventDetails?.event_end_date)
                    .format("ddd, MMM Do, YYYY")}
                </ScaleText>
              </ScaleText>
            ) : (
              <ScaleText style={styles.detailTxt}>
                {moment(props?.eventDetails?.event_date).format("MM/DD/YYYY")}
              </ScaleText>
            )}
          </View>
          <View style={styles.basiccon}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={Images.CHECKOUT_SCHDULD_IMG}
            />
            <ScaleText style={styles.detailTxt}>
              {props?.eventDetails?.event_start_time}{" "}
              <ScaleText style={{ color: BLACK_COLOR_CODE }}>To</ScaleText>
              {props?.eventDetails?.event_end_time}
            </ScaleText>
          </View>
          <View style={styles.basiccon}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={Images.LOCATION_IMG}
            />
            <ScaleText style={styles.detailTxt}>
              {props?.eventDetails?.event_location}
            </ScaleText>
          </View>
          <Button
            style={[
              styles.btncon,
              {
                backgroundColor:
                  props.eventDetails?.user_interested === 0
                    ? LINE_COMMON_COLOR_CODE
                    : YELLOW_COLOR_CODE,
                borderColor:
                  props.eventDetails?.user_interested === 0
                    ? GREY_COLOR_CODE
                    : LIGHT_GREY_COLOR_CODE,
              },
            ]}
            buttonText={"Interested"}
            showIcon={true}
            iconName={
              props.eventDetails?.user_interested === 0
                ? Images.STAR_FILLED_IMG
                : Images.ARROW_DOWN_IMG
            }
            tintColor={LIGHT_BLACK_COLOR_CODE}
            onPress={() => {
              if (props.eventDetails?.user_interested === 0) {
                props.setChangeInterest(1);
                props.onInterestResp(1);
              } else {
                props.setInterstedModal(true);
                props.getEventDetails(props.eventDetails?.event_id);
              }
            }}
          />
          <Button
            style={styles.btncon}
            buttonText={"Buy Ticket"}
            onPress={() => props.setBuyTicketModal(1)}
          />
          {props.videoUrl != "null" ? (
            <>
              <ScaleText style={styles.titleTxt}>Event Video</ScaleText>
              <View style={styles.videoVw}>
                <Video
                  source={{ uri: props.eventDetails?.events_video }} // Can be a URL or a local file.
                  style={styles.backgroundVideo}
                  resizeMode={"stretch"}
                  paused={videoShow}
                  repeat={true}
                />
                <View style={styles.videoContVw}>
                  <TouchableOpacity
                    onPress={() => setVideoShow(!videoShow)}
                    style={styles.startPauseVw}
                  >
                    <ScaleText style={{ color: WHITE_COLOR_CODE }}>
                      {!videoShow ? "Pause" : "Start"}
                    </ScaleText>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : null}
          {props.eventDetails?.event_description ? (
            <>
              <ScaleText style={[styles.titleTxt, { marginLeft: 0 }]}>
                Discription
              </ScaleText>
              <ScaleText style={[styles.subTitleTxt, { padding: 6 }]}>
                {props.eventDetails?.event_description}
              </ScaleText>
            </>
          ) : null}
        </View> */}
        <View style={{ bottom: 24 }}>
          <FullImageViewList
            shadow={false}
            marginHorizontal={5}
            fullImage={""}
            timeTxt={RECENT_TIME_FORMAT(props?.eventDetails?.event_date)}
            headTxt={props?.eventDetails?.event_name}
            subHeadTxt={props?.eventDetails?.event_location?.trim()}
            smallTxt={`${props?.eventDetails?.interested} Interested`}
            subSmallTxt={""}
            item={props?.eventDetails}
            marginBottom={0}
          />
          <View
            style={[
              CommonStyles.straightCon,
              { justifyContent: "space-evenly" },
            ]}
          >
            <MainButton
              paddingHeight={2}
              paddingHorizontal={25}
              buttonTxt={"Interested"}
              backgroundColor={
                props.eventDetails?.user_interested === 0
                  ? COLORS.COMMON
                  : COLORS.YELLOW
              }
              txtColor={COLORS.BLACK}
              borderRadius={10}
              borderColor={
                props.eventDetails?.user_interested === 0
                  ? COLORS.GREY
                  : COLORS.LIGHT_GREY
              }
              onPressButton={() => {
                if (props.eventDetails?.user_interested === 0) {
                  props.setChangeInterest(1);
                  props.onInterestResp(1);
                } else {
                  props.setInterstedModal(true);
                  props.getEventDetails(props.eventDetails?.event_id);
                }
              }}
            />
            <MainButton
              paddingHeight={2}
              paddingHorizontal={25}
              buttonTxt={"Buy Ticket"}
              borderRadius={10}
              backgroundColor={COLORS.YELLOW}
              txtColor={COLORS.WHITE}
              borderColor={COLORS.TRANSPARENT}
              // onPressButton={() => props.setBuyTicketModal(1)}
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
        </View>
        {props.videoUrl != "null" ? (
          <View style={{ marginHorizontal: 12 }}>
            <ScaleText style={styles.titleTxt}>Event Video</ScaleText>
            <View style={styles.videoVw}>
              <Video
                source={{ uri: props.eventDetails?.events_video }} // Can be a URL or a local file.
                style={styles.backgroundVideo}
                resizeMode={"stretch"}
                paused={videoShow}
                repeat={true}
              />
              <View style={styles.videoContVw}>
                <TouchableOpacity
                  onPress={() => setVideoShow(!videoShow)}
                  style={styles.startPauseVw}
                >
                  <ScaleText style={{ color: WHITE_COLOR_CODE }}>
                    {!videoShow ? "Pause" : "Start"}
                  </ScaleText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}
        {props.eventDetails?.event_description ? (
          <View style={{ marginHorizontal: 12 }}>
            <ScaleText style={[styles.titleTxt, { marginLeft: 0 }]}>
              Discription
            </ScaleText>
            <ScaleText style={[styles.subTitleTxt, { padding: 6 }]}>
              {props.eventDetails?.event_description}
            </ScaleText>
          </View>
        ) : null}
      </ScrollView>
      <Modal
        visible={props.interestedModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => {
          props.setInterstedModal(false);
        }}
      >
        <View
          style={[
            styles.modalCon,
            { justifyContent: "center", backgroundColor: "rgba(0,0,0,0.3)" },
          ]}
        >
          <View style={styles.interestedModalVw}>
            <View style={styles.respnsesTxtVw}>
              <ScaleText style={styles.responseTxt}>Your Response</ScaleText>
              <TouchableOpacity onPress={() => props.setInterstedModal(false)}>
                <Image
                  style={{ width: 32, height: 32, marginRight: 5 }}
                  source={Images.CANCEL_IMG}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => props.setChangeInterest(1)}
              style={styles.respnsesVw}
            >
              <View style={styles.straightVw}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    tintColor:
                      props?.changeInterest === 1
                        ? YELLOW_COLOR_CODE
                        : BLACK_COLOR_CODE,
                  }}
                  source={Images.STAR_FILLED_IMG}
                />
                <ScaleText style={styles.respnsesTxt}>Interested</ScaleText>
              </View>
              <Image
                source={
                  props?.changeInterest === 1
                    ? Images.RADIO_CHECK_IMG
                    : Images.RADIO_UNCHECK_IMG
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.setChangeInterest("")}
              style={styles.respnsesVw}
            >
              <View style={styles.straightVw}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    tintColor:
                      props?.changeInterest === ""
                        ? YELLOW_COLOR_CODE
                        : BLACK_COLOR_CODE,
                  }}
                  source={Images.VERIFIED_IMG}
                />
                <ScaleText style={styles.respnsesTxt}>Going</ScaleText>
              </View>
              <Image
                source={
                  props?.changeInterest === ""
                    ? Images.RADIO_CHECK_IMG
                    : Images.RADIO_UNCHECK_IMG
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.setChangeInterest(0)}
              style={styles.respnsesVw}
            >
              <View style={styles.straightVw}>
                <View
                  style={[
                    styles.notIntrstVw,
                    {
                      backgroundColor:
                        props?.changeInterest === 0
                          ? YELLOW_COLOR_CODE
                          : BLACK_COLOR_CODE,
                    },
                  ]}
                >
                  <Image
                    style={{ tintColor: WHITE_COLOR_CODE }}
                    source={Images.CANCEL_IMG}
                  />
                </View>
                <ScaleText style={styles.respnsesTxt}>Not Interested</ScaleText>
              </View>
              <Image
                source={
                  props?.changeInterest === 0
                    ? Images.RADIO_CHECK_IMG
                    : Images.RADIO_UNCHECK_IMG
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.setAddtoCaldr(!props.addtoCaldr)}
              style={styles.addToCalVw}
            >
              <Image
                style={styles.addToCalImg}
                source={
                  props.addtoCaldr
                    ? Images.RADIO_CHECK_IMG
                    : Images.RADIO_UNCHECK_IMG
                }
              />
              <ScaleText style={styles.addToCalTxt}>Add to calender</ScaleText>
            </TouchableOpacity>
            <View style={styles.respnsesBttnVw}>
              <Button
                buttonText={"Save"}
                onPress={() => props.onInterestResp()}
                style={[styles.respnsesBttn, { marginRight: 10 }]}
              />
              <Button
                buttonText={"Cancel"}
                onPress={() => {
                  props.setInterstedModal(false);
                  props.setChangeInterest("");
                }}
                style={[
                  styles.respnsesBttn,
                  { backgroundColor: SMALL_TEXT_COLOR_CODE },
                ]}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default EventDetailView;
