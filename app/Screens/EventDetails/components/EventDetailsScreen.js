import React from "react";
import {
  View,
  Text,
  Image,
  Modal,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import moment from "moment";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import {
  BLACK_COLOR_CODE,
  GREY_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  LIGHT_GREY_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import { SafeAreaView } from "react-native-safe-area-context";

const EventListingScreen = (props) => {
  const { width, height } = Dimensions.get("window");
  const eventDate = moment(props?.eventDetails?.created_at).format(
    "MM/DD/YYYY"
  );
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Events Details"
        RightImg={null}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
      />
      <ScrollView>
        <SafeAreaView style={{ alignItems: "center" }}>
          <FlatList
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
          </View>
        </SafeAreaView>
        <View style={styles.infocon}>
          <Text style={styles.nameTxt}>{props?.eventDetails?.event_name}</Text>
          <View style={styles.basiccon}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={require("../../../Assets/info_calendar_icon.png")}
            />
            <Text style={styles.detailTxt}>{eventDate}</Text>
          </View>
          <View style={styles.basiccon}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={require("../../../Assets/map_marker_icon.png")}
            />
            <Text style={styles.detailTxt}>
              {props?.eventDetails?.event_location}
            </Text>
          </View>
          <View style={styles.basiccon}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={require("../../../Assets/info_tag_icon.png")}
            />
            <Text style={styles.detailTxt}>
              {props?.eventDetails?.near_by_address}
            </Text>
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
                ? require("../../../Assets/star_icon_filled.png")
                : require("../../../Assets/dropdown_icon1.png")
            }
            tintColor={LIGHT_BLACK_COLOR_CODE}
            onPress={() => {
              if (props.eventDetails?.user_interested === 0) {
                props.setChangeInterest(1);
                props.onInterestResp(1);
              } else {
                props.setInterstedModal(true);
              }
            }}
          />
          <Button
            style={styles.btncon}
            buttonText={"Buy Ticket"}
            onPress={() => props.setBuyTicketModal(1)}
          />
        </View>
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
              <Text style={styles.responseTxt}>Your Response</Text>
              <TouchableOpacity onPress={() => props.setInterstedModal(false)}>
                <Image
                  style={{ width: 32, height: 32, marginRight: 5 }}
                  source={require("../../../Assets/cart_delete_icon.png")}
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
                  source={require("../../../Assets/star_icon_filled.png")}
                />
                <Text style={styles.respnsesTxt}>Interested</Text>
              </View>
              <Image
                source={
                  props?.changeInterest === 1
                    ? require("../../../Assets/radio_circled_checked.png")
                    : require("../../../Assets/radio_circled_unchecked.png")
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
                  source={require("../../../Assets/verified_icon.png")}
                />
                <Text style={styles.respnsesTxt}>Going</Text>
              </View>
              <Image
                source={
                  props?.changeInterest === ""
                    ? require("../../../Assets/radio_circled_checked.png")
                    : require("../../../Assets/radio_circled_unchecked.png")
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
                    source={require("../../../Assets/cart_delete_icon.png")}
                  />
                </View>
                <Text style={styles.respnsesTxt}>Not Interested</Text>
              </View>
              <Image
                source={
                  props?.changeInterest === 0
                    ? require("../../../Assets/radio_circled_checked.png")
                    : require("../../../Assets/radio_circled_unchecked.png")
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
                    ? require("../../../Assets/checked_circled_icon_box.png")
                    : require("../../../Assets/unchecked_circled_icon_box.png")
                }
              />
              <Text style={styles.addToCalTxt}>Add to calender</Text>
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
export default EventListingScreen;
