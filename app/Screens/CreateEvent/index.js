import React, { useState, useEffect } from "react";
import CreateEvent from "./components/CreateEvent";
import moment from "moment";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import {
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  Text
} from "react-native";
import CommonStyles from "../../Utils/CommonStyles";
import ImagePicker from "react-native-image-crop-picker";
import Success from "../../Components/Modal/success";
import Loader from "../../Utils/Loader";
import { BLACK_COLOR_CODE, FONT_FAMILY_REGULAR } from "../../Utils/Constant";

const CreateEventView = () => {
  const [eventCategoryModalVisible, setEventCategoryModalVisible] = useState(false);
  const [categoryListData, setCategoryListData] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [isStartTimePickerVisible, setIsStartTimePickerVisible] = useState(false);
  const [bookingDate, setBookingDate] = useState(false);
  const [checkbox, SetCheckBox] = useState(false);
  const [privateCheck, SetprivateCheck] = useState(false);
  const [FreeEvent, SetFreeEvent] = useState(false);
  const [EventName, setEventName] = useState("");
  const [BusinessName, setBusinessName] = useState("");
  const [NearBy, setNearBy] = useState("");
  const [WhatWhy, setWhatWhy] = useState("");
  const [OfficialWeb, setOfficialWeb] = useState("");
  const [TicketURL, setTicketURL] = useState("");
  const [PriceFrom, setPriceFrom] = useState("");
  const [PriceTo, setPriceTo] = useState("");
  const [isEndTimePickerVisible, setIsEndTimePickerVisible] = useState(false);
  const [selectedEndTime, setSelectedEndTime] = useState("");
  const [visible, setVisible] = useState(false);
  const [eventPhoto, setEventPhoto] = useState([]);
  const [eventModalVisible, setEventModalVisible] = useState("");
  const [description, setDescription] = useState("");
  const [locationData, setLocationData] = useState({
    find_me_in: "",
    find_me_lat: "",
    find_me_long: "",
  });
  useEffect(() => {
    getCategoryList()
  }, [])
  const _handleModalOpen = () => {
    setEventCategoryModalVisible(true)
  }
  const hideEndTimePicker = () => {
    setIsEndTimePickerVisible(false);
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const handleEndTimeConfirm = (date) => {
    const value = moment(date).format(" h:mm a");
    setSelectedEndTime(value);
    hideEndTimePicker();
  };
  const showEndTimePicker = () => {
    setIsEndTimePickerVisible(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    const value = moment(date).format("YYYY-MM-DD");
    setSelectedDate(value);
    hideDatePicker();
  };
  const showTimePicker = () => {
    setIsStartTimePickerVisible(true);
  };
  const hideTimePicker = () => {
    setIsStartTimePickerVisible(false);
  };
  const handleTimeConfirm = (date) => {
    const value = moment(date).format(" h:mm a");
    setStartTime(value);
    hideTimePicker();
  };
  const onPressPublicVenue = () => {
    SetCheckBox(!checkbox);
  };
  const onPressPrivateAdd = () => {
    SetprivateCheck(!privateCheck);
  };
  const onPressFreeEvent = () => {
    SetFreeEvent(!FreeEvent);
  };
  const onPressOpenEventImage = () => {
    ImagePicker.openPicker({
      width: windowWidth,
      height: windowHeight / 2,
      multiple: true,
      cropping: true,
    }).then((image) => {
      setEventPhoto(image);
      setEventModalVisible(false);
    });
  };
  const onPressCreateEvent = async () => {
    setVisible(true);
    try {
      let formData = new FormData();
      formData.append("event_id", 1);
      formData.append("business_name", BusinessName);
      formData.append("event_address_type", 2);
      formData.append("event_date", selectedDate);
      formData.append("event_description", description);
      formData.append("event_end_time", selectedEndTime);
      formData.append("event_location", locationData.find_me_in);
      formData.append("event_name", EventName);
      formData.append("event_start_time", startTime);
      formData.append("latitude", locationData.find_me_lat);
      formData.append("longitude", locationData.find_me_long);
      formData.append("near_by_address", "ll");
      formData.append("official_website_url", OfficialWeb);
      formData.append("price_range_from", PriceFrom);
      formData.append("price_range_to", PriceTo);
      formData.append("tickets_url", TicketURL);
      formData.append("event_category_id", selectedCategory.id);
      formData.append("event_charge_type", 1);
      eventPhoto?.map((img, index) => {
        return formData.append("events_image", {
          uri: img.path,
          type: img.mime,
          name: img.path.substring(img.path.lastIndexOf("/") + 1),
        });
      });
      console.log('formData: ', formData);
      const response = await apiCall("POST", ENDPOINTS.CREATE_EVENTS, formData,
        { "Content-Type": "multipart/form-data" }
      );
      console.log('response: ', response);
      if (response.status === 200) {
        setSuccessMessage("Event added successfully");
        setVisibleSuccess(true);
        // navigation.navigate('DashBoardScreen')
        setVisible(false);
      } else {
        console.log("else");
        setVisible(false);
      }
    } catch (error) {
      console.log("error: ", error);
      setVisible(false);
    }
  };
  function deleteImage(index) {
    var imageArray = [...eventPhoto];
    imageArray.splice(index, 1);
    setEventPhoto(imageArray);
  }
  const renderEventImage = () => {
    return (
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={eventPhoto}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: 120, height: 120, margin: 5 }}>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  position: "absolute",
                  zIndex: 9,
                  right: 5,
                }}
                onPress={() => deleteImage(index)}
              >
                <Image
                  source={require("../../Assets/minus_icon_cart.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    marginTop: 5,
                  }}
                />
              </TouchableOpacity>
              <View style={{ marginLeft: "5%", borderRadius: 30 }}>
                <Image
                  source={{ uri: item.path }}
                  style={{ width: 120, height: 120, borderRadius: 10 }}
                />
              </View>
            </View>
          );
        }}
      />
    );
  };
  const getCategoryList = async () => {
    try {
      const response = await apiCall('POST', ENDPOINTS.GET_EVENT_CATEGORY_LIST);
      if (response.status === 200) {
        setCategoryListData(response.data.data)
      } else {
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }
  const _handleSelectedCategory = (item) => {
    setSelectedCategory(item);
    setEventCategoryModalVisible(false);
  }
  const renderCategoryListItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => _handleSelectedCategory(item)}
        style={{
          flex: 1,
          borderBottomWidth: 0.3,
          borderBottomColor: '#f2f2f2',
          padding: 10,
          paddingVertical: 15,
          marginHorizontal: 15,
        }}>
        <Text
          style={{
            fontFamily: FONT_FAMILY_REGULAR,
            fontSize: 15,
            color: BLACK_COLOR_CODE,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <CreateEvent
        locationData={locationData}
        setLocationData={setLocationData}
        description={description}
        setDescription={setDescription}
        eventPhoto={eventPhoto}
        onPressOpenEventImage={onPressOpenEventImage}
        renderEventImage={renderEventImage}
        setEventModalVisible={setEventModalVisible}
        eventModalVisible={eventModalVisible}
        onPressCreateEvent={onPressCreateEvent}
        isEndTimePickerVisible={isEndTimePickerVisible}
        handleEndTimeConfirm={handleEndTimeConfirm}
        hideEndTimePicker={hideEndTimePicker}
        selectedEndTime={selectedEndTime}
        showEndTimePicker={showEndTimePicker}
        selectedDate={selectedDate}
        isDatePickerVisible={isDatePickerVisible}
        handleConfirm={handleConfirm}
        hideDatePicker={hideDatePicker}
        showDatePicker={showDatePicker}
        showTimePicker={showTimePicker}
        isStartTimePickerVisible={isStartTimePickerVisible}
        handleTimeConfirm={handleTimeConfirm}
        hideTimePicker={hideTimePicker}
        startTime={startTime}
        onPressPublicVenue={onPressPublicVenue}
        onPressPrivateAdd={onPressPrivateAdd}
        onPressFreeEvent={onPressFreeEvent}
        FreeEvent={FreeEvent}
        checkbox={checkbox}
        privateCheck={privateCheck}
        setEventName={setEventName}
        EventName={EventName}
        setBusinessName={setBusinessName}
        BusinessName={BusinessName}
        setNearBy={setNearBy}
        NearBy={NearBy}
        setWhatWhy={setWhatWhy}
        WhatWhy={WhatWhy}
        setOfficialWeb={setOfficialWeb}
        OfficialWeb={OfficialWeb}
        setTicketURL={setTicketURL}
        TicketURL={TicketURL}
        setPriceFrom={setPriceFrom}
        PriceFrom={PriceFrom}
        setPriceTo={setPriceTo}
        PriceTo={PriceTo}

        eventCategoryModalVisible={eventCategoryModalVisible}
        setEventCategoryModalVisible={setEventCategoryModalVisible}
        _handleModalOpen={_handleModalOpen}
        renderCategoryListItem={renderCategoryListItem}
        categoryListData={categoryListData}
        selectedCategory={selectedCategory}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(false)}
        // closeModel={() => navigation.navigate('ProfileSettings', setVisibleSuccess(false))}
      />
    </View>
  );
};
export default CreateEventView;
