import React, { useState } from "react";
import {
  View,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
  FlatList,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import _ from "lodash";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from "./styles";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import Input from "../../../Components/Input";
import moment from "moment";
import Button from "../../../Components/Button";
import { BLACK_COLOR_CODE, YELLOW_COLOR_CODE } from "../../../Utils/Constant";

const RestauranrtBookingScreen = (props) => {
  const initialRegion = {
    latitude: props.restroDetail.latitude
      ? parseInt(props.restroDetail.latitude)
      : 22.72448,
    longitude: props.restroDetail.longitude
      ? parseInt(props.restroDetail.longitude)
      : 75.889267,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };
  const coordinate = {
    latitude: props.restroDetail.latitude
      ? parseInt(props.restroDetail.latitude)
      : 22.72448,
    longitude: props.restroDetail.longitude
      ? parseInt(props.restroDetail.longitude)
      : 75.889267,
  };
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Header RightImg={null} HeaderText={"Restaurant Booking"} />
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <SafeAreaView style={{ alignItems: "center" }}>
            {/* <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            data={props.restroDetail.image && props.restroDetail.image}
                            scrollEventThrottle={16}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            onScroll={(event) => { props.setSliderPage(event) }}
                            renderItem={({ item, index }) =>
                                <View key={index} style={{ width, alignItems: 'center' }}>
                                    <Image
                                        resizeMode='contain'
                                        source={{ uri: item.image }}
                                        style={styles.imageStyle}
                                    />
                                </View>
                            }
                        /> */}
            <View style={styles.paginationWrapper}>
              {Array.from(
                Array(
                  props?.restroDetail?.image?.length > 5
                    ? 5
                    : props?.restroDetail?.image?.length
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
          <View style={styles.RestroDetailView}>
            <Text style={styles.RestroNameTxt}>
              {props.restroDetail.business_name}
            </Text>
            <View style={styles.FlexRowView}>
              <Text style={styles.RateTextStyle}>
                {props.restroDetail.business_star === 0 && "$ | "}
                {props.restroDetail.business_star === 1 && "$  | "}
                {props.restroDetail.business_star === 2 && "$$  | "}
                {props.restroDetail.business_star === 3 && "$$$  | "}
                {props.restroDetail.business_star === 4 && "$$$$  | "}
                {props.restroDetail.business_star === 5 && "$$$$$  | "}
              </Text>
              <Text style={styles.RateTextStyle}>
                {props.restroDetail.business_service_category}
              </Text>
            </View>
            <View style={styles.RatingContainer}>
              <View style={styles.RatingStyles}>
                <Text style={styles.RatingStylesTxt}>5.0</Text>
              </View>
              <Text style={styles.RatingTextMain}>
                {" "}
                {props.restroDetail.rating} ratings |{" "}
              </Text>
              <Text style={styles.MainClosedTime}>
                {props.restroDetail.login_status === 1 ? "Open" : "Closed"}
              </Text>
              <Text style={styles.RatingTextMain}>
                {props.restroDetail &&
                  props.restroDetail.business_open_time &&
                  ": " +
                    props.restroDetail.business_open_time.open_time +
                    " - "}
                {props.restroDetail &&
                  props.restroDetail.business_open_time &&
                  props.restroDetail.business_open_time.close_time}
              </Text>
            </View>
          </View>
          <View style={styles.AddShareContainer}>
            <TouchableOpacity
              onPress={() =>
                props.setDatePickerVisibility(!props.isDatePickerVisible)
              }
              style={styles.CalenderSelect}
            >
              <Text style={styles.DateSTyles}>
                {props?.date ? props.date : "Date"}
              </Text>
              <View style={[styles.TextInputImg, { marginRight: 25 }]}>
                <Image
                  style={[styles.TextInputImageStyle, { height: 24 }]}
                  source={require("../../../Assets/info_calendar_icon.png")}
                />
              </View>
              <DateTimePickerModal
                isVisible={props.isDatePickerVisible}
                mode="date"
                date={new Date()}
                minimumDate={new Date()}
                onConfirm={props.handleDateConfirm}
                onCancel={() => props.setDatePickerVisibility(false)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                props.setTimePickerVisibility(!props.isTimePickerVisible)
              }
              style={styles.CalenderSelect}
            >
              <Text style={styles.DateSTyles}>
                {props?.time ? props.time : "Time"}
              </Text>
              <View style={[styles.TextInputImg, { marginRight: 25 }]}>
                <Image
                  style={[styles.TextInputImageStyle, { height: 24 }]}
                  resizeMode="contain"
                  source={require("../../../Assets/clock_icon2.png")}
                />
              </View>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={props.isTimePickerVisible}
              mode="time"
              date={new Date()}
              minimumDate={new Date()}
              onConfirm={props.handleTimeConfirm}
              onCancel={() => props.setTimePickerVisibility(false)}
            />
            <TouchableOpacity
              onPress={() => props.setPeoplePicker(!props.peoplePicker)}
              style={[
                styles.CalenderSelect,
                { marginBottom: props.peoplePicker ? 2 : 10 },
              ]}
            >
              <Text style={styles.DateSTyles}>
                {props.SelectPeople ? props.SelectPeople : "People"}
              </Text>
              <View style={styles.TextInputImg}>
                <Image
                  style={styles.TextInputImageStyle}
                  resizeMode="contain"
                  source={require("../../../Assets/dropdown_icon.png")}
                />
              </View>
            </TouchableOpacity>
            {props.peoplePicker &&
              props.peopleWith.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.peopleWithVw,
                      {
                        backgroundColor:
                          1 + index === props.SelectPeople
                            ? YELLOW_COLOR_CODE
                            : null,
                      },
                    ]}
                    onPress={() => {
                      props.setSelectPeople(item.people);
                      props.setPeoplePicker(!props.peoplePicker);
                    }}
                  >
                    <Text style={styles.peopleWithTxt}>{item.people}</Text>
                  </TouchableOpacity>
                );
              })}
            <Button
              onPress={() => props.onPressTableFind(1)}
              buttonText="Find a Table"
              style={styles.FindTableContain}
            />
            {props?.restaurantTimeData.length > 0 && (
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={props?.restaurantTimeData}
                contentContainerStyle={styles.timeCon}
                ListEmptyComponent={() => {
                  return (
                    <View style={{ alignItems: "center" }}>
                      <Text style={styles.availableTimeTxt}>
                        No time slot available for this
                      </Text>
                    </View>
                  );
                }}
                numColumns={5}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() => props.onPressTime(item, index)}
                    key={index}
                    style={styles.timePickVw}
                  >
                    <Text style={styles.timeTxt}>{item.startTime}</Text>
                  </TouchableOpacity>
                )}
                ListFooterComponent={() => {
                  return (
                    <TouchableOpacity
                      onPress={() => props.onPressTableFind(0)}
                      style={styles.SeereservatnView}
                    >
                      <Image
                        style={styles.ArrowImge}
                        source={require("../../../Assets/link_dropdown_icon.png")}
                      />
                      <Text style={styles.SeereservatnTxt}>
                        See reservations on other dates
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            )}
            {props?.reservationDateList.length > 0 && (
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={props?.reservationDateList}
                contentContainerStyle={styles.timeCon}
                ListHeaderComponent={() => {
                  return (
                    <View style={{ alignItems: "center" }}>
                      <Text style={styles.availableTimeTxt}>
                        This time slot is upto 7 days from{" "}
                        {moment(props.date).format("MM/DD/YYYY")}
                      </Text>
                    </View>
                  );
                }}
                renderItem={({ item, index }) => {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() => props.onSelectDate(item, index)}
                        // key={index}
                        style={[
                          styles.datePickerVw,
                          {
                            backgroundColor:
                              props?.showTimeBox === index
                                ? YELLOW_COLOR_CODE
                                : null,
                          },
                        ]}
                      >
                        <View style={{ flex: 5 }}>
                          <Text style={styles.timeTxt}>{item.date}</Text>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                          <Image
                            style={styles.ArrowImge}
                            tintColor={BLACK_COLOR_CODE}
                            source={require("../../../Assets/link_dropdown_icon.png")}
                          />
                        </View>
                      </TouchableOpacity>
                      {props?.showTimeBox == index ? (
                        <FlatList
                          keyExtractor={(item, index) => index.toString()}
                          data={props?.reservationDateTimeList}
                          numColumns={5}
                          ListEmptyComponent={() => {
                            return (
                              <View style={{ alignItems: "center" }}>
                                <Text
                                  style={[
                                    styles.availableTimeTxt,
                                    { paddingVertical: 3 },
                                  ]}
                                >
                                  No time slot available for this
                                </Text>
                              </View>
                            );
                          }}
                          renderItem={({ item, index }) => (
                            <TouchableOpacity
                              onPress={() => props.onPressTime(item, index)}
                              // key={index}
                              style={[
                                styles.timePickVw,
                                {
                                  borderColor: BLACK_COLOR_CODE,
                                },
                              ]}
                            >
                              <Text style={styles.timeTxt}>
                                {item.startTime}
                              </Text>
                            </TouchableOpacity>
                          )}
                        />
                      ) : null}
                    </View>
                  );
                }}
              />
            )}
          </View>
          <View style={styles.MainUpdateContainer}>
            <Text style={styles.CovidMainTxt}>Notes from the Business</Text>
            <View style={styles.CovidParaView}>
              <Text
                style={[
                  styles.MainCovidPara,
                  {
                    lineHeight: 20,
                    paddingTop: 10,
                  },
                ]}
              >
                Please call us if your reservation request is not available
                online. We will help you book your reservation. Thanks!
              </Text>
            </View>
          </View>
          <View style={styles.LocationContainer}>
            <View style={styles.LocationTxtView}>
              <Text style={styles.CovidMainTxt}>About</Text>
              <View style={styles.AboutContainer}>
                <View style={styles.flexDirectionStyle}>
                  <Image
                    style={styles.AboutImge}
                    source={require("../../../Assets/about_icon_1.png")}
                  />
                  <Text style={styles.MainCovidPara}>Good for Groups</Text>
                </View>
                <View style={{ flexDirection: "row", paddingLeft: 15 }}>
                  <Image
                    style={styles.AboutImge}
                    source={require("../../../Assets/about_icon_2.png")}
                  />
                  <Text style={styles.MainCovidPara}>Greate Date Spot</Text>
                </View>
              </View>
              <View style={styles.AboutContainer}>
                <View style={styles.flexDirectionStyle}>
                  <Image
                    style={styles.AboutImge}
                    source={require("../../../Assets/about_icon_3.png")}
                  />
                  <Text style={styles.MainCovidPara}>Casual Attire</Text>
                </View>
                <View style={{ flexDirection: "row", paddingLeft: 15 }}>
                  <Image
                    style={styles.AboutImge}
                    source={require("../../../Assets/about_icon_4.png")}
                  />
                  <Text style={styles.MainCovidPara}>
                    Parking: Street, Private Lot
                  </Text>
                </View>
              </View>
              <Text
                style={[
                  styles.MainCovidPara,
                  { lineHeight: 21, paddingTop: 10 },
                ]}
              >
                {props.restroDetail.about_business}
              </Text>
              <MapView
                showsUserLocation
                style={styles.MapImgeStyle}
                provider={PROVIDER_GOOGLE}
                initialRegion={initialRegion}
              >
                <Marker
                  coordinate={coordinate}
                  title={props.restroDetail.business_name}
                  // description={marker.description}
                >
                  <Image
                    source={require("../../../Assets/abby_pages_map_icon.png")}
                    style={{ height: 50, width: 50 }}
                    resizeMode="contain"
                    resizeMethod="auto"
                  />
                </Marker>
              </MapView>
            </View>
          </View>
          <View style={styles.PopularDishContain}>
            <Text style={styles.CovidMainTxt}>Photos</Text>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={
                props.restroDetail &&
                props.restroDetail.image &&
                props.restroDetail.image
              }
              horizontal={true}
              renderItem={({ item, index }) =>
                props._handlePopularDish(item, index)
              }
            />
          </View>
          <View style={styles.AboutBusinessContain}>
            <View style={styles.FlexDirectnStyle}>
              <Text style={styles.CovidMainTxt}>What are people saying?</Text>
            </View>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={
                props.restroDetail &&
                props.restroDetail.business_review &&
                props.restroDetail.business_review
              }
              renderItem={({ item, index }) =>
                props._handlePeopleSaying(item, index)
              }
            />
          </View>
          <View style={styles.ReviewFullList}>
            <Text style={[styles.CovidMainTxt]}>
              Recommended by Taichi Pot Shabu Shabu
            </Text>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={
                props.restroDetail &&
                props.restroDetail.recommended_business &&
                props.restroDetail.recommended_business
              }
              // data={props.handleReview}
              horizontal={true}
              renderItem={({ item, index }) =>
                props._handleRecommended(item, index)
              }
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default RestauranrtBookingScreen;
