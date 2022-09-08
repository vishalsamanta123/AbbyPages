import React, { useState } from "react";
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
import DateTimePickerModal from "react-native-modal-datetime-picker";

const EventListingScreen = (props) => {
  const [alsoSeeFor, setAlsoSeeFor] = useState(false);
  const _renderTime = (item, index) => {
    const selectedColor =
      index === props.isSelectedDay ? YELLOW_COLOR_CODE : BLACK_COLOR_CODE;
    return (
      <TouchableOpacity
        onPress={() => props._handleDaySelected(item.id, index)}
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
      <Header
        HeaderText="Events"
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        onPress={() => props.handleCreateEvent()}
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
                      .format("MM/DD/YYYY")}
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
          <Text style={styles.eventTitlesTxt}>Events</Text>
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
              <Text style={styles.seeOnTxt}>See Events For</Text>
              <Image
                style={styles.seeForImg}
                source={
                  alsoSeeFor
                    ? require("../../../Assets/link_dropdown_icon_up.png")
                    : require("../../../Assets/dropdown_icon1.png")
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.seeOnVw}
              onPress={() => handleSeeAll()}
            >
              <Text style={styles.seeOnTxt}>See All</Text>
            </TouchableOpacity>
          </View>
          {alsoSeeFor && (
            <>
              <FlatList
                data={props.dayData}
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
                            {moment.unix(item?.event_date).format("MM/DD/YYYY")}
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
              </>
            ) : (
              <View style={styles.emptyEventVw}>
                <Text style={styles.emptyEventTxt}>No Data Found for this</Text>
              </View>
            )}
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
                        {moment.unix(item?.event_date).format("MM/DD/YYYY")}
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
                        {moment.unix(item?.event_date).format("MM/DD/YYYY")}
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
    </View>
  );
};
export default EventListingScreen;
