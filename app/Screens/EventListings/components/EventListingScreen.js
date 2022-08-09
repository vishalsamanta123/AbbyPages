import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
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
} from "../../../Utils/Constant";
const EventListingScreen = (props) => {
  const _renderCategory = (item, index) => {
    const selectedColor =
      index === props.isSelectedCatgory ? WHITE_COLOR_CODE : "#ffe98e";
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => props._handleDataTypeSelected(index, item)}
        style={styles.lablestyle}
      >
        <Text style={[styles.txtCat, { color: WHITE_COLOR_CODE }]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  const _renderTime = (item, index) => {
    const selectedColor =
      index === props.isSelectedDay ? WHITE_COLOR_CODE : "#ffe98e";
    return (
      <TouchableOpacity
        onPress={() => props._handleDaySelected(index, item)}
        style={styles.lablestyle}
      >
        <Text style={[styles.txtCat, { color: selectedColor }]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  const _renderEventList = (item, index) => {
    const eventDate = moment(JSON.parse(item?.event_date)).format("DD/MM/YYYY");
    return (
      <TouchableOpacity
        onPress={(item) => props.onPressEvent(item)}
        style={styles.mnCon}
      >
        <ImageBackground
          style={styles.bannerimg}
          source={{ uri: item.events_image }}
        >
          <View style={styles.btncon}>
            <Text style={styles.buytckttxt}>Buy Tickets</Text>
          </View>
        </ImageBackground>
        <View style={styles.infobox}>
          <Text style={styles.hdngtxt}>{item.event_name}</Text>
          <View style={styles.minicon}>
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={require("../../../Assets/info_calendar_icon.png")}
            />
            <Text style={[styles.text, { fontSize: 14, lineHeight: 16 }]}>
              {eventDate} {item.event_start_time} - {item.event_end_time}
            </Text>
          </View>
          <View style={styles.minicon}>
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={require("../../../Assets/info_marker_icon.png")}
            />
            <Text style={[styles.text, { fontSize: 14, lineHeight: 16 }]}>
              {item.event_location}
            </Text>
          </View>
          <Text
            style={[
              styles.text,
              {
                padding: 5,
                paddingBottom: 8,
                lineHeight: 18,
              },
            ]}
          >
            {item.event_description
              ? item.event_description
              : "There is not description for this events."}
          </Text>
          <View style={styles.intcon}>
            <Text style={[styles.yellowtxt, { lineHeight: 16 }]}>Others</Text>
            <Text style={[styles.text, { lineHeight: 16 }]}>
              {item.interested} interested
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Events"
        onPress={() => props.handleCraeteEvent()}
        RightImg={require("../../../Assets/plus_icon_header.png")}
      />
      <Text style={styles.eventTitlesTxt}>
        Abbypages Events
        <Text style={{ color: SMALL_TEXT_COLOR_CODE }}> (Latest) </Text>
      </Text>

      <View style={styles.latestVw}>
        <Image
          resizeMode={"contain"}
          style={styles.latestImg}
          source={{ uri: props?.events?.upcoming_events?.events_image }}
        />
        <View style={styles.latestTxtVw}>
          <Text style={styles.latestNameTxt}>
            {props?.events?.upcoming_events?.event_name}
          </Text>
          <Text style={styles.latestDateTxt}>
            {moment
              .unix(props?.events?.upcoming_events?.event_date)
              .format("dddd, MMMM Do, YYYY")}
          </Text>
        </View>
      </View>

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
