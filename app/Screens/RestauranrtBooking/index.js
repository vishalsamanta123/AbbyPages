import React, { useState, Fragment, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions, View, Text, Image } from "react-native";
import _ from "lodash";
import {
  GREY_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LINE_COMMON_COLOR_CODE,
  YELLOW_COLOR_CODE,
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

  const [showTimeBox, setShowTimeBox] = useState("");
  const [reservationDateTimeList, setReservationDateTimeList] = useState([]);
  const [reservationDateList, setReservationDateList] = useState([]);
  const [restaurantTimeData, setRestaurantTimeData] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  console.log("isDatePickerVisible: ", isDatePickerVisible);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(moment().format("LT"));
  const [SelectPeople, setSelectPeople] = useState("5");
  const [bookingType, setBookingType] = useState("");
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [restroDetail, setRestroDetail] = useState("");
  const { width, height } = Dimensions.get("window");
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
    const indexOfNextScreen = Math.floor(x / width);
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
    if (date == "") {
      setErrorMessage("Please Select Date");
      setVisibleErr(true);
      return false;
    }
    if (time == "") {
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
  const onPressTableFind = async () => {
    try {
      setVisible(true);
      const dateSend = moment(date).format("YYYY-MM-DD");
      const params = {
        business_id: restroDetail.business_id,
        booking_date: dateSend,
      };
      console.log("params: ", params);
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.RESTAURANT_TIME_SLOAT,
        params
      );
      console.log("data: ", data);
      if (data.status === 200) {
        setVisible(false);
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
      } else {
        setVisible(false);
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const onPressFindTable = async () => {
    setVisible(true);
    var dateFormater = moment(date).format("YYYY-MM-DD");
    try {
      var dateFormater = dateFormat(date, "yyyy-mm-dd");
      const params = {
        business_id: restroDetail.business_id,
        booking_date: date,
      };
      // const data = await apiCall(
      //   "POST",
      //   ENDPOINTS.RESTAURANT_TIME_SLOAT,
      //   params
      // );
      // console.log("dataTABLES: ", data.data);
      // if (data.status === 200) {
      //   // setVisible(false);
      //   var currentDate = moment().format("YYYY-MM-DD");
      //   const searchArray = [...data.data];
      //   const filterData = _.filter(searchArray, { date: currentDate });
      //   if (filterData.length > 0) {
      //     setRestaurantTimeData(filterData[0].timeslot);
      //     setVisible(false);
      //   } else {
      //     const filterData = _.filter(searchArray, { date: date });
      //     if (filterData.length > 0) {
      //       setRestaurantTimeData(filterData[0].timeslot);
      //       setVisible(false);
      //     } else {
      //       setVisible(false);
      //     }
      //   }
      // } else {
      //   setVisible(false);
      //   setErrorMessage(data.message);
      //   setVisibleErr(true);
      // }
    } catch (error) {
      setVisible(false);
      setErrorMessage(data.message);
      setVisibleErr(true);
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
    const times = moment(time).format("LTS");
    setTime(times);
    setTimePickerVisibility(false);
  };
  const onPressReservationOnOtherDate = async () => {
    setVisible(true);
    try {
      var dateFormater = dateFormat(date, "yyyy-mm-dd");
      const params = {
        business_id: restroDetail.business_id,
        booking_date: dateFormater,
        business_type: 1,
      };
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
    } catch (error) {
      setVisible(false);
      setErrorMessage(data.message);
      setVisibleErr(true);
    }
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
  const handleDateConfirm = (event, selectedDate) => {
    setDatePickerVisibility(false);
    const currentDate = moment(selectedDate).format("YYYY/MM/DD");
    if (event.type === "neutralButtonPressed") {
      setDate(new Date());
    } else {
      setDate(currentDate);
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
        onPressReservationOnOtherDate={onPressReservationOnOtherDate}
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
        onPressFindTable={onPressFindTable}
        onPressTableFind={onPressTableFind}
        setSelectPeople={setSelectPeople}
        SelectPeople={SelectPeople}
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
