import React, { useState, Fragment, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions, View, Text, Image, Platform } from "react-native";
import _ from "lodash";
import {
  GREY_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LINE_COMMON_COLOR_CODE,
  YELLOW_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  LIGHT_GREEN_COLOR_CODE,
} from "../../Utils/Constant";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import CommonStyles from "../../Utils/CommonStyles";
import moment from "moment";
import styles from "./components/styles";
import RestauranrtBookingScreen from "./components/RestauranrtBookingScreen";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import Error from "../../Components/Modal/error";
import dateFormat from "dateformat";

const RestauranrtBookingView = ({ route, navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [showTimeBox, setShowTimeBox] = useState(0);
  const [reservationDateTimeList, setReservationDateTimeList] = useState([]);
  const [reservationDateList, setReservationDateList] = useState([]);
  const [restaurantTimeData, setRestaurantTimeData] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [peoplePicker, setPeoplePicker] = useState(false);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [SelectPeople, setSelectPeople] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [restroDetail, setRestroDetail] = useState("");
  const { width, height } = Dimensions.get("window");
  const peopleWith = [
    { people: 1 },
    { people: 2 },
    { people: 3 },
    { people: 4 },
    { people: 5 },
    { people: 6 },
  ];
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  useEffect(() => {
    if (route.params) {
      const { detail, booking_type } = route.params;
      setRestroDetail(detail); //state
      setBookingType(booking_type);
    }
  }, []);
  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.ceil(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };
  const { currentPage: pageIndex } = sliderState;
  const _handlePopularDish = (item, index) => {
    return (
      <View key={index} style={styles.PopularConatiner}>
        <Image style={styles.PopularDishImg} source={{ uri: item.image }} />
      </View>
    );
  };
  const onPressRecRestro = (item) => {
    setVisible(true);
    navigation.navigate("RestaurantDetails", { detail: item });
    setVisible(false);
  };
  const _handleRecommended = (item) => {
    return (
      <Fragment>
        <TouchableOpacity
          onPress={() => onPressRecRestro(item)}
          style={styles.RecommendedConatiner}
        >
          <Image
            resizeMode="contain"
            style={styles.RecommndedDishImg}
            source={{ uri: item.logo }}
          />
          <View style={{ padding: 15 }}>
            <Text numberOfLines={1} style={styles.DishNameTxt}>
              {item.business_name}
            </Text>
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
              <View style={styles.RatingStyles}>
                <Text style={styles.RatingStylesTxt}>{item.rating}</Text>
              </View>
              <Text style={styles.RatingTextMain}>
                {item.rating == 0 && "No Rating Yet"}
                {item.rating == 1 && "Bad"}
                {item.rating == 2 && "Ok"}
                {item.rating == 3 && "Good"}
                {item.rating == 4 && "Very Good"}
                {item.rating == 5 && "Excellent"}
              </Text>
            </View>
            <Text style={styles.ImgeDetailTxt}>
              {item.business_star == 0 && "$ "}
              {item.business_star == 1 && "$ "}
              {item.business_star == 2 && "$$ "}
              {item.business_star == 3 && "$$$ "}
              {item.business_star == 4 && "$$$$ "}
              {item.business_star == 5 && "$$$$$ "}|
              {" " + item.business_service_category}
            </Text>
            <Text
              numberOfLines={3}
              style={[styles.MainCovidPara, { width: 160 }]}
            >
              {item.about_business}
            </Text>
          </View>
        </TouchableOpacity>
      </Fragment>
    );
  };
  const _handlePeopleSaying = (item) => {
    return (
      <View style={styles.UserContainer}>
        <Image
          style={styles.UserProfileStyle}
          source={{ uri: item.profile_image }}
        />
        <View style={{ paddingLeft: 10, width: "70%" }}>
          <Text
            style={[styles.ReviewFullView, { lineHeight: 19, paddingTop: 10 }]}
          >
            {item.description}
          </Text>
        </View>
      </View>
    );
  };
  const validation = () => {
    if (date == null) {
      setErrorMessage("Please Select Date");
      setVisibleErr(true);
      return false;
    }
    if (time == null) {
      setErrorMessage("Please Select Time");
      setVisibleErr(true);
      return false;
    }
    if (SelectPeople == "") {
      setErrorMessage("Please Enter People");
      setVisibleErr(true);
      return false;
    }
    if (bookingType == "") {
      setErrorMessage("Please Try Again");
      setVisibleErr(true);
      return false;
    }
    return true;
  };
  const onPressTableFind = async (find) => {
    const valid = validation();
    if (valid) {
      try {
        setVisible(true);
        const params = {
          business_id: restroDetail.business_id,
          booking_date: date,
        };
        if (find == 0) {
          const { data } = await apiCall(
            "POST",
            ENDPOINTS.RESTAURANT_TIME_SLOAT,
            params
          );
          if (data.status === 200) {
            setVisible(false);
            if (data.data.length < 1) {
              setVisible(false);
              setSuccessMessage("No table available for this restaurant");
              setVisibleSuccess(true);
            } else {
              var currentDate = moment().format("YYYY-MM-DD");
              const searchArray = [...data.data];
              const filterData = _.filter(searchArray, { date: currentDate });
              if (filterData.length > 0) {
                setRestaurantTimeData(filterData[0].timeslot);
                setVisible(false);
              } else {
                const filterData = _.filter(searchArray, { date: date });
                if (filterData.length > 0) {
                  setRestaurantTimeData(filterData[0].timeslot);
                  setVisible(false);
                } else {
                  setVisible(false);
                }
              }
            }
          } else {
            setVisible(false);
            setErrorMessage(data.message);
            setVisibleErr(true);
          }
        } else {
          const { data } = await apiCall(
            "POST",
            ENDPOINTS.RESTAURANT_TIME_SLOAT,
            params
          );
          if (data.status == 200) {
            setVisible(false);
            setRestaurantTimeData("");
            setReservationDateList(data.data);
          } else {
            setVisible(false);
            setErrorMessage(data.message);
            setVisibleErr(true);
          }
        }
      } catch (error) {
        setVisible(false);
        setErrorMessage(error.message);
        setVisibleErr(true);
      }
    }
  };
  const onPressTime = (item, index) => {
    const reservationData = {
      date: date,
      time: item.startTime,
      people: SelectPeople,
      booking_type: bookingType,
    };
    navigation.navigate("ConfirmReservation", {
      reservationData: reservationData,
      restroDetail: restroDetail,
    });
  };
  const handleTimeConfirm = (time) => {
    setTimePickerVisibility(false);
    const timeData = moment(time).format("LT");
    setTime(timeData);
  };
  const handleDateConfirm = (selectedDate) => {
    setDatePickerVisibility(false);
    const dateData = moment(selectedDate).format("YYYY-MM-DD");
    setDate(dateData);
  };

  const onSelectDate = (item, index) => {
    setVisible(true);
    const searchArray = [...reservationDateList];
    const filterData = _.filter(searchArray, { date: item.date });
    if (filterData.length > 0) {
      const data = filterData[0].timeslot;
      setReservationDateTimeList(data);
      setShowTimeBox(index);
      setVisible(false);
    } else {
      setVisible(false);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <RestauranrtBookingScreen
        showTimeBox={showTimeBox}
        onSelectDate={onSelectDate}
        reservationDateTimeList={reservationDateTimeList}
        reservationDateList={reservationDateList}
        onPressTime={onPressTime}
        restaurantTimeData={restaurantTimeData}
        setRestaurantTimeData={setRestaurantTimeData}
        restroDetail={restroDetail}
        date={date}
        setDate={setDate}
        isDatePickerVisible={isDatePickerVisible}
        setDatePickerVisibility={setDatePickerVisibility}
        handleDateConfirm={handleDateConfirm}
        time={time}
        setTime={setTime}
        setTimePickerVisibility={setTimePickerVisibility}
        isTimePickerVisible={isTimePickerVisible}
        handleTimeConfirm={handleTimeConfirm}
        setSliderPage={setSliderPage}
        pageIndex={pageIndex}
        _handlePopularDish={_handlePopularDish}
        _handleRecommended={_handleRecommended}
        _handlePeopleSaying={_handlePeopleSaying}
        onPressTableFind={onPressTableFind}
        setSelectPeople={setSelectPeople}
        SelectPeople={SelectPeople}
        peopleWith={peopleWith}
        peoplePicker={peoplePicker}
        setPeoplePicker={setPeoplePicker}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(false)}
      />
    </View>
  );
};
export default RestauranrtBookingView;
