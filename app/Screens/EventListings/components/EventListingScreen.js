import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import moment from "moment";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import Header from "../../../Components/Header";
import {
  YELLOW_COLOR_CODE,
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  SMALL_TEXT_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../../Utils/Constant";
import Button from "../../../Components/Button";
const EventListingScreen = (props) => {
  const _renderTime = (item, index) => {
    const selectedColor =
      index === props.isSelectedDay ? YELLOW_COLOR_CODE : BLACK_COLOR_CODE;
    return (
      <TouchableOpacity
        onPress={() => props._handleDaySelected(item.id)}
        style={styles.lablestyle}
      >
        <Text style={[styles.txtTimeCat, { color: selectedColor }]}>
          {item.name}
        </Text>
        <Image
          style={[styles.timeDataImg, { tintColor: selectedColor }]}
          source={require("../../../Assets/processed.jpg")}
        />
      </TouchableOpacity>
    );
  };
  const handleSeeAll = () => {
    props.getEventList(0), props.setOpenAll(true);
    props.setLimit(12);
  };
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Events"
        onPress={() => props.handleCraeteEvent()}
        RightImg={require("../../../Assets/plus_icon_header.png")}
      />
      <ScrollView contentContainerStyle={CommonStyles.scrollCon}>
        {props?.events?.upcoming_events && (
          <View style={styles.containers}>
            <Text style={styles.eventTitlesTxt}>
              Abbypages Events
              <Text style={{ color: SMALL_TEXT_COLOR_CODE }}> (Latest) </Text>
            </Text>
            <View style={styles.containerVw}>
              <Image
                resizeMode={"contain"}
                style={styles.eventImg}
                source={{ uri: props?.events?.upcoming_events?.events_image }}
              />
              <TouchableOpacity
                onPress={() =>
                  props.navToEventDetail(props?.events?.upcoming_events)
                }
                style={styles.allTxtVw}
              >
                <Text style={styles.nameTxt}>
                  {props?.events?.upcoming_events?.event_name}
                </Text>
                <View style={styles.straightVw}>
                  <Image
                    style={styles.straightImg}
                    source={require("../../../Assets/calendar_icon.png")}
                  />
                  <Text style={styles.straightTxt}>
                    {moment
                      .unix(props?.events?.upcoming_events?.event_date)
                      .format("dddd, MMMM Do, YYYY")}
                  </Text>
                </View>
                <View style={styles.straightVw}>
                  <Image
                    style={styles.straightImg}
                    source={require("../../../Assets/info_marker_icon.png")}
                  />
                  <Text style={styles.straightTxt}>
                    {props?.events?.upcoming_events?.event_location}
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
                    {props?.events?.upcoming_events?.interested}
                    {" Interested "}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View style={styles.containers}>
          <View
            style={[styles.straightVw, { justifyContent: "space-between" }]}
          >
            <Text style={styles.eventTitlesTxt}>Events</Text>
            <TouchableOpacity onPress={() => handleSeeAll()}>
              <Text style={styles.seeAllTxt}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.straightVw}>
            <Text style={styles.seeForTxt}>See Events For</Text>
            <Image
              style={styles.seeForImg}
              source={require("../../../Assets/dropdown_icon1.png")}
            />
          </View>
          <FlatList
            data={props.dayData}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => _renderTime(item, index)}
          />
          <ScrollView>
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
          </ScrollView>
        </View>
        <View style={styles.containers}>
          <Text style={styles.eventTitlesTxt}>Recently Added Events</Text>
          <ScrollView>
            {props?.events?.recently_added?.map((item) => {
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
          </ScrollView>
        </View>
        <View style={styles.containers}>
          <Text style={styles.eventTitlesTxt}>Popular Events</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {props?.events?.popular_events?.map((item) => {
              return (
                <View style={styles.popularEventVw}>
                  <Image
                    resizeMode={"contain"}
                    style={[styles.eventImg, { width: 80, height: 80 }]}
                    source={{
                      uri: item?.events_image,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => props.navToEventDetail(item)}
                    style={styles.allTxtVw}
                  >
                    <Text style={[styles.nameTxt, { fontSize: 16 }]}>
                      {item?.event_name}
                    </Text>
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
          </ScrollView>
          <Button
            style={styles.seeAllBttn}
            buttonLabelStyle={styles.seeAllBttnTxt}
            onPress={() => handleSeeAll()}
            buttonText={"See All"}
          />
        </View>
      </ScrollView>
      {/* <View
        style={{
          borderTopWidth: 0.3,
          borderColor: "#ffe98e",
          borderBottomWidth: 0.3,
        }}
      >
        <FlatList
          data={props?.dataType}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: YELLOW_COLOR_CODE }}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => _renderCategory(item, index)}
        />
        <View
          style={{
            borderWidth: 0.3,
            borderColor: "#ffe98e",
          }}
        />
        <FlatList
          data={props.dayData}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: YELLOW_COLOR_CODE,
          }}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => _renderTime(item, index)}
        />
      </View>
      <View style={{ paddingTop: 10 }}>
        <FlatList
          data={props.eventsList}
          showsVerticalScrollIndicator={false}
          style={{}}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => _renderEventList(item, index)}
          onEndReached={() => {
            !props.stopOffset ? props.getEventList(props.offset + 1) : null;
          }}
        />
      </View> */}
    </View>
  );
};
export default EventListingScreen;
