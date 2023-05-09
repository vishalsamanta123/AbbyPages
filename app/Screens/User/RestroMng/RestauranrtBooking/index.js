import React, { useState, Fragment, useEffect } from "react";
import {
  Dimensions,
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import _ from "lodash";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import CommonStyles from "../../../../Utils/CommonStyles";
import moment from "moment";
import styles from "./components/styles";
import RestauranrtBookingScreen from "./components/RestauranrtBookingScreen";
import Loader from "../../../../Utils/Loader";
// import Success from "../../../../Components/Modal/success";
// import Error from "../../../../Components/Modal/error";
import { MainItemsView } from "../../../../Components/ListItemsView";

const RestroBooking = ({ route, navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [showTimeBox, setShowTimeBox] = useState();
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
  }, [date]);
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
  const onPressRestro = (item) => {
    setVisible(true);
    navigation.navigate("BusinessPageDetails", { detail: item });
    setVisible(false);
  };
  const _handleRecommended = (item) => {
    return (
      <Fragment>
        <TouchableOpacity
          onPress={() => onPressRestro(item)}
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
  const _handlePeopleSaying = (item, index) => {
    return (
      // <View style={styles.UserContainer}>
      //   <Image
      //     style={styles.UserProfileStyle}
      //     source={{ uri: item.profile_image }}
      //   />
      //   <View style={{ paddingLeft: 10, width: "70%" }}>
      //     <Text
      //       style={[styles.ReviewFullView, { lineHeight: 19, paddingTop: 10 }]}
      //     >
      //       {item.description}
      //     </Text>
      //   </View>
      // </View>
      <MainItemsView
        // onPressView={props.onPressView}
        item={item}
        index={index}
        largeImg={item?.profile_image}
        largeName={item?.first_name + " " + item?.last_name}
        smallTxt={item?.address}
        rating={item?.business_rating?.toString()}
        rowImgTxt1={item?.business_service_category}
        rowImgTxt2={item?.create_date}
        rowImgTxt3={item?.about_business}
        listType={"review"}
        description={item?.description}
        title={item?.title}
        profile_image={item?.profile_image}
      />
    );
  };
  const validation = () => {
    if (date == null) {
      setErrorMessage("Please Select Date");
      setVisibleErr(true);
      return false;
    }
    // if (time == null) {
    //   setErrorMessage("Please Select Time");
    //   setVisibleErr(true);
    //   return false;
    // }
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
      console.log("date: ", date);

      try {
        setVisible(true);
        const params = {
          business_id: restroDetail?.business_id.toString(),
          booking_date: date,
        };
        console.log("params: ", params);

        const { data } = await apiCall(
          "POST",
          ENDPOINTS.RESTAURANT_TIME_SLOAT,
          params
        );
        if (data.status === 200) {
          if (data.data.length == 0) {
            setVisible(false);
            setSuccessMessage("No table available for this restaurant");
            setVisibleSuccess(true);
          } else {
            if (find === 1) {
              if (data.data[0].timeslot.length == 0) {
                setVisible(false);
                setSuccessMessage(
                  "No table available on ask date for this restaurant"
                );
                setVisibleSuccess(true);
              } else {
                setVisible(false);
                setRestaurantTimeData(data.data[0].timeslot);
                setReservationDateList([]);
              }
            } else {
              setRestaurantTimeData([]);
              setReservationDateList(data.data);
              console.log("data.data: ", data.data);
              setVisible(false);
            }
          }
        } else {
          setVisible(false);
          setErrorMessage(data.message);
          console.log('data.message: ', data.message);
          setVisibleErr(true);
        }
      } catch (error) {
        setVisible(false);
        setErrorMessage(error.message);
        console.log('catch error.message: ', error.message);
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
    const filterData = _.filter(searchArray, { date: item?.date });
    setShowTimeBox(index);
    setVisible(false);
    const data = filterData[0]?.timeslot || [];
    if (data?.length > 0) {
      setReservationDateTimeList(data);
      setVisible(false);
    } else {
      setVisible(false);
      setReservationDateTimeList([]);
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
      {/* <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(false)}
      /> */}
    </View>
  );
};
export default RestroBooking;
