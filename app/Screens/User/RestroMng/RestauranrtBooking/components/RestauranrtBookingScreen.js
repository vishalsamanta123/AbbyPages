import React from "react";
import {
  View,
  Image,
  ScrollView,
  FlatList,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from "react-native";
import _ from "lodash";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from "./styles";
import CommonStyles from "../../../../../Utils/CommonStyles";
import moment from "moment";
import Button from "../../../../../Components/Button";
import {
  BLACK_COLOR_CODE,
  COLORS,
  Constants,
  FONT_SIZE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import MainHeader from "../../../../../Components/MainHeader";
import ScaleText from "../../../../../Components/ScaleText";
import StarShower from "../../../../../Components/StarShower";
import { ICON_TYPE, IconX } from "../../../../../Components/Icons/Icon";

const RestauranrtBookingScreen = (props) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props?.restroDetail?.latitude},${props?.restroDetail?.longitude}&zoom=13&scale=2&size=600x300&maptype=roadmap&markers=scale%3A1%color:red%7Clabel:A%7C28.543707340175,-81.3514976796&format=png&key=AIzaSyCbDx7Lk4eTMzptrQKXZvOPYgEMggrq8o4`;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <MainHeader
        headerText={"Find a Table"}
        fontSize={FONT_SIZE.large}
        loginButton={false}
        isLogin={true}
      />
      <ScrollView>
        <ImageBackground
          source={{ uri: props?.restroDetail.header_image }}
          style={{
            width: Constants.windowWidth,
            height: Constants.Ios ? 200 : 180,
          }}
          resizeMode={"cover"}
        >
          <View style={styles.backImgVw}>
            <ScaleText style={styles.mainTxt}>
              {props?.restroDetail?.business_name}
            </ScaleText>
            <View style={{ width: 132 }}>
              <StarShower
                counts={
                  props?.restroDetail?.rating
                    ? props?.restroDetail?.rating?.toString()
                    : 0
                }
                starHeight={18}
                starWidth={18}
                starsBackColor={COLORS.RGBA}
                ActiveStarColor={COLORS.YELLOW}
                UnActiveStarColor={COLORS.WHITE}
              />
            </View>
            {props?.restroDetail?.claimed ? (
              <View style={CommonStyles.straightCon}>
                {props?.restroDetail?.claimed?.toString() === "1" && (
                  <IconX
                    origin={ICON_TYPE.ANT_ICON}
                    name={"checkcircle"}
                    color={COLORS.LIGHT_GREEN}
                    paddingRight={6}
                  />
                )}
                <ScaleText
                  style={[
                    styles.smallTxt,
                    {
                      color: COLORS.LIGHT_GREEN,
                      fontSize: FONT_SIZE.medium,
                    },
                  ]}
                >
                  {props?.restroDetail?.claimed?.toString() === "1"
                    ? "Claimed"
                    : "UnClaimed"}
                </ScaleText>
                <Text style={styles.RatingTextMain}>
                  {": " +
                    props?.restroDetail?.business_open_time?.open_time +
                    " - "}
                  {props?.restroDetail?.business_open_time?.close_time}
                </Text>
              </View>
            ) : null}
          </View>
        </ImageBackground>
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
            <View style={styles.TextInputImg}>
              <IconX
                origin={ICON_TYPE.ANT_ICON}
                name={"calendar"}
                color={COLORS.BLACK}
                size={30}
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
              <IconX
                origin={ICON_TYPE.ICONICONS}
                name={"people-outline"}
                color={COLORS.BLACK}
                size={30}
              />
            </View>
          </TouchableOpacity>
          {props?.peoplePicker &&
            props?.peopleWith?.map((item, index) => {
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
            borderRadius={10}
            buttonLabelStyle={styles.buttonLabelStyle}
            fontSize={FONT_SIZE.medium}
          />
          {props?.restaurantTimeData?.length > 0 && (
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
              numColumns={6}
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
                      source={Images.ARROW_UP_IMG}
                    />
                    <Text style={styles.SeereservatnTxt}>
                      See reservations on other dates
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          )}
          {props?.reservationDateList?.length > 0 && (
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={props?.reservationDateList}
              contentContainerStyle={styles.timeCon}
              ListHeaderComponent={() => {
                return (
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.availableTimeTxt}>
                      This time slot is upto 7 days from{" "}
                      {moment(props.date).format("YYYY-MM-DD")}
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
                        <Text style={styles.timeTxtHead}>{item.date}</Text>
                      </View>
                      <View style={{ justifyContent: "center" }}>
                        <IconX
                          origin={ICON_TYPE.ENTYPO}
                          name={"chevron-thin-down"}
                          size={20}
                          color={COLORS.BLACK}
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={CommonStyles.justifyCenter}>
                      {props?.showTimeBox === index ? (
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
            <Text
              style={[styles.MainCovidPara, { lineHeight: 21, paddingTop: 10 }]}
            >
              {props?.restroDetail?.about_business}
            </Text>
            <Image
              source={{ uri: imagePreviewUrl }}
              style={{ width: "100%", height: 150, marginTop: 10 }}
            />
          </View>
        </View>
        <View style={styles.PopularDishContain}>
          <Text style={styles.CovidMainTxt}>Photos</Text>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={props?.restroDetail?.image}
            horizontal={true}
            renderItem={({ item, index }) =>
              props._handlePopularDish(item, index)
            }
          />
        </View>
        {props?.restroDetail?.business_review?.length > 0 && (
          <View style={styles.AboutBusinessContain}>
            <View style={styles.FlexDirectnStyle}>
              <Text style={styles.CovidMainTxt}>What are people saying?</Text>
            </View>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={props?.restroDetail?.business_review}
              renderItem={({ item, index }) =>
                props._handlePeopleSaying(item, index)
              }
            />
          </View>
        )}
        <View style={styles.ReviewFullList}>
          <Text style={[styles.CovidMainTxt]}>Recommended Business</Text>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={props?.restroDetail?.recommended_business}
            horizontal={true}
            renderItem={({ item, index }) =>
              props._handleRecommended(item, index)
            }
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default RestauranrtBookingScreen;
