import React, { useState, useEffect } from "react";
import CreateEvent from "./components/CreateEvent";
import GenerateTicket from "./components/GenerateTicket";
import StripeConnect from "./components/StripeConnect";
import EventPublish from "./components/EventPublish";
import moment from "moment";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CommonStyles from "../../Utils/CommonStyles";
import ImagePicker from "react-native-image-crop-picker";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import Success from "../../Components/Modal/success";
import Loader from "../../Utils/Loader";
import Error from "../../Components/Modal/error";
import styles from "./components/styles";

const CreateEventView = ({ route, navigation }) => {
  const { type, item, img_url, detail } = route?.params || {
    type: "",
    item: "",
    img_url: "",
    detail: "",
  };
  const [createEventData, setCreateEventData] = useState([
    {
      ticket_title: "",
      ticket_qty: "",
      ticket_price: "",
      tckt_start_date: "",
      tckt_end_date: "",
      tckt_start_time: "",
      tckt_end_time: "",
      tckt_description: "",
      hide_description: 0,
      display_inventry: 0,
      trasferable: 0,
      private_ticket: 0,
      password_req: 0,
      ticket_limit: 0,
      min_ticket: "",
      max_ticket: "",
      payOtp: 1,
      showMore: false,
      cardAmt: "",
      abbyPagesAmt: "",
      totalPrice: "",
      youGetAmt: "",
    },
  ]);
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const isFocused = useIsFocused();
  const [eventCategoryModalVisible, setEventCategoryModalVisible] =
    useState(false);
  const [categoryListData, setCategoryListData] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isStartDatePicker, setIsStartDatePicker] = useState(false);
  const [isEndDatePicker, setIsEndDatePicker] = useState(false);
  const [isStartTimePickerVisible, setIsStartTimePickerVisible] =
    useState(false);
  const [isEndTimePickerVisible, setIsEndTimePickerVisible] = useState(false);
  const [checkbox, SetCheckBox] = useState(false);
  const [visible, setVisible] = useState(false);
  const [formView, setFormView] = useState(1);
  const [eventModalVisible, setEventModalVisible] = useState("");
  const [contentType, setContentType] = useState("");
  const [updatePic, setUpdatePic] = useState([]);
  const [startDateModal, setStartDateModal] = useState(false);
  const [endDateModal, setEndDateModal] = useState(false);
  const [startTimeModal, setStartTimeModal] = useState(false);
  const [endTimeModal, setEndTimeModal] = useState(false);

  const [createEvent, setCreateEvent] = useState({
    event_photo: [],
    event_video: "", //new
    eventName: "",
    eventType: 1,
    date: "",
    startDate: "",
    endDate: "",
    start_time: "",
    end_time: "",
    event_address: "",
    event_Addr_lat: "",
    event_Addr_long: "",
    description: "",
    add_organiser: "", //new
    top_performer: "", //new
    category_id: "",
    category_name: "",
    event_address_type: 1,
    acceptRefundReq: 0, //new
    refund_policy: "", //new
    terms_cond: "", //new
    include_tax: 0, //new
    tax_amount: "", //new
    support_email: "", //new
    time_limit: 0, //new
    hide_endTime: 0, //new
    ticketAvailability_msg: 0, //new
    enable_best_feature: 0, //new
    embed_checkout_website: "", //new
    slug_url: "", //new
    fb_adds_pixelID: "", //new
    google_analysticId: "", //new
    google_adwordId: "", //new
    adRoll_pixelID: "", //new
    adRoll_advID: "", //new

    //not using
    find_me_in: "",
    find_me_lat: "",
    find_me_long: "",
    businessName: "",
    official_Web: "",
    ticketURL: "",
    priceFrom: "",
    priceTo: "",
    checkbox_venue: "",
    ticketType: "",
    ticketPrice: "",
    ticketAvailability: "",
    ticketLimit: "",
    email_Mysend: 0, //new
    callmail_Mysend: 0, //new
  });
  useFocusEffect(
    React.useCallback(() => {
      getFormDatas();
      return () => {
        getFormDatas();
        setUpdatePic([]);
      };
    }, [isFocused])
  );
  const getFormDatas = async () => {
    setVisible(true);
    // setCreateEvent({
    //   event_photo: item?.events_image ? item?.events_image : [],
    //   eventName: item?.event_name ? item?.event_name : "",
    //   date: item?.event_date
    //     ? moment.unix(item?.event_date).format("MM/DD/YYYY")
    //     : "",
    //   start_time: item?.event_start_time ? item?.event_start_time : "",
    //   end_time: item?.event_end_time ? item?.event_end_time : "",
    //   find_me_in: item?.near_by_address ? item?.near_by_address : "",
    //   find_me_lat: "",
    //   find_me_long: "",
    //   businessName: item?.business_name ? item?.business_name : "",
    //   event_address: item?.event_location ? item?.event_location : "",
    //   event_Addr_lat: item?.latitude ? item?.latitude : "",
    //   event_Addr_long: item?.longitude ? item?.longitude : "",
    //   description: item?.event_description ? item?.event_description : "",
    //   official_Web: item?.official_website_url
    //     ? item?.official_website_url
    //     : "",
    //   ticketURL: item?.tickets_url ? item?.tickets_url : "",
    //   priceFrom: item?.price_range_from ? item?.price_range_from : "",
    //   priceTo: item?.price_range_to ? item?.price_range_to : "",
    //   category_name: detail?.category_name ? detail?.category_name : "",
    //   category_id: item?.event_category_id ? item?.event_category_id : "",
    //   checkbox_venue: "",
    //   eventType: item?.event_type ? item?.event_type : 1,
    //   ticketType: item?.ticket_type ? item?.ticket_type : 1,
    //   ticketPrice: item?.ticket_price ? item?.ticket_price : "",
    //   ticketAvailability: item?.ticket_availability
    //     ? item?.ticket_availability
    //     : 1,
    //   ticketLimit: item?.total_ticket ? item?.total_ticket : "",
    //   endDate: item?.event_end_date
    //     ? moment.unix(item?.event_end_date).format("MM/DD/YYYY")
    //     : "",
    //   startDate: item?.event_start_date
    //     ? moment.unix(item?.event_start_date).format("MM/DD/YYYY")
    //     : "",
    //   //new
    //   event_video: "",
    //   add_organiser: "",
    //   top_performer: "",
    //   acceptRefundReq: 0,
    //   refund_policy: "",
    //   terms_cond: "",
    //   include_tax: 0,
    //   support_email: "",
    //   tax_amount: "",
    //   time_limit: 0,
    //   hide_endTime: 0,
    //   ticketAvailability_msg: 0,
    //   enable_best_feature: 0,
    //   embed_checkout_website: "",
    //   slug_url: "",
    //   fb_adds_pixelID: "",
    //   google_analysticId: "",
    //   google_adwordId: "",
    //   adRoll_pixelID: "",
    //   adRoll_advID: "",
    //   email_Mysend: 0,
    //   callmail_Mysend: 0,
    // });
    setVisible(false);
  };
  const getCategoryList = async () => {
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_EVENT_CATEGORY_LIST);
      if (data.status === 200) {
        setCategoryListData(data.data);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };
  const onPressOpenEventVideo = () => {
    ImagePicker.openPicker({
      width: windowWidth,
      height: windowHeight / 2,
      mediaType: "video",
      compressVideoPreset: "MediumQuality",
    }).then((video) => {
      setCreateEvent({
        ...createEvent,
        event_video: video,
      });
      setEventModalVisible(false);
      setContentType("");
    });
  };
  const onPressOpenEventImage = () => {
    ImagePicker.openPicker({
      width: windowWidth,
      height: windowHeight / 2,
      multiple: true,
      cropping: true,
      mediaType: "photo",
      compressImageQuality: 1,
    }).then((image) => {
      setUpdatePic(image);
      if (createEvent?.event_photo?.length > 0) {
        image?.map((img) => {
          createEvent.event_photo.push(img);
        });
      } else {
        setCreateEvent({
          ...createEvent,
          event_photo: image,
        });
      }

      setEventModalVisible(false);
      setContentType("");
    });
  };
  const handleConfirm = (date) => {
    const value = moment(date).format("MM/DD/YYYY");
    setCreateEvent({
      ...createEvent,
      date: value,
    });
    setDatePickerVisibility(false);
  };
  const handleStartConfirm = (date) => {
    const value = moment(date).format("MM/DD/YYYY");
    setCreateEvent({
      ...createEvent,
      startDate: value,
      date: value,
    });
    setIsStartDatePicker(false);
  };
  const handleEndConfirm = (date) => {
    const value = moment(date).format("MM/DD/YYYY");
    setCreateEvent({
      ...createEvent,
      endDate: value,
    });
    setIsEndDatePicker(false);
  };
  const handleTimeConfirm = (date) => {
    const value = moment(date).format("h:mm a");
    setCreateEvent({
      ...createEvent,
      start_time: value,
    });
    setIsStartTimePickerVisible(false);
  };
  const handleEndTimeConfirm = (date) => {
    const value = moment(date).format("h:mm a");
    setCreateEvent({
      ...createEvent,
      end_time: value,
    });
    setIsEndTimePickerVisible(false);
  };
  const renderEventImage = () => {
    return (
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={createEvent?.event_photo}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.imagesVw}>
              <TouchableOpacity
                style={styles.deleteImageVw}
                onPress={() => deleteImage(index)}
              >
                <Image
                  source={require("../../Assets/minus_icon_cart.png")}
                  style={styles.deleteImage}
                />
              </TouchableOpacity>
              <View style={{ marginLeft: "5%" }}>
                <Image
                  source={{
                    uri: item?.events_image
                      ? img_url + item?.events_image
                      : item?.path,
                  }}
                  style={styles.eventImg}
                />
              </View>
            </View>
          );
        }}
      />
    );
  };
  function deleteImage(index) {
    var imageArray = [...createEvent.event_photo];
    imageArray.splice(index, 1);
    setUpdatePic(imageArray);
    setCreateEvent({
      ...createEvent,
      event_photo: imageArray,
    });
  }
  const _handleSelectedCategory = (item) => {
    setCreateEvent({
      ...createEvent,
      category_name: item.name,
      category_id: item.id,
    });
    setEventCategoryModalVisible(false);
  };
  const renderCategoryListItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => _handleSelectedCategory(item)}
        style={styles.categoryItemVw}
      >
        <Text style={styles.categoryItemTxt}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  const onPressNextForm = () => {
    // const valid = validationFrom();
    // if (valid) {
    if (formView < 4) {
      setFormView(formView + 1);
    }
    // }
  };
  const handleMoreOptions = (key, value, index) => {
    let NewEventTicket = [...createEventData];
    const ticket = NewEventTicket[index];
    if (key === "showMore") {
      const tic = { ...ticket, showMore: value };
      NewEventTicket[index] = tic;
    }
    setCreateEventData(NewEventTicket);
  };
  const handleAddMoreTickets = () => {
    const arr = {
      ticket_title: "",
      ticket_qty: "",
      ticket_price: "",
      tckt_start_date: "",
      tckt_end_date: "",
      tckt_start_time: "",
      tckt_end_time: "",
      tckt_description: "",
      hide_description: 0,
      display_inventry: 0,
      trasferable: 0,
      private_ticket: 0,
      password_req: 0,
      ticket_limit: 0,
      min_ticket: "",
      max_ticket: "",
      payOtp: 1,
      showMore: false,
      cardAmt: "",
      abbyPagesAmt: "",
      totalPrice: "",
      youGetAmt: "",
    };
    setCreateEventData([...createEventData, arr]);
  };
  const handleRemoveTicket = (index) => {
    const ticketsList = [...createEventData];
    ticketsList.splice(index, 1);
    setCreateEventData(ticketsList);
  };
  const handleTicketInput = (key, value, index) => {
    let NewEventTicket = [...createEventData];
    const ticket = NewEventTicket[index];
    if (key == "ticket_title") {
      const tic = { ...ticket, ticket_title: value };
      NewEventTicket[index] = tic;
    }
    if (key == "ticket_qty") {
      const tic = { ...ticket, ticket_qty: value };
      NewEventTicket[index] = tic;
    }
    if (key === "ticket_price") {
      const totalExtraAmt = (value * 11.66) / 100 + (value * 1.66) / 100;
      const tic = {
        ...ticket,
        ticket_price: value,
        abbyPagesAmt: (value * 11.66) / 100,
        cardAmt: (value * 1.66) / 100,
        totalPrice: ticket.payOtp == 1 ? Number(value) + totalExtraAmt : value,
        youGetAmt:
          ticket.payOtp == 1 ? Number(value) : Number(value) - totalExtraAmt,
      };
      NewEventTicket[index] = tic;
    }
    if (key == "payOtp") {
      const totalExtraAmt =
        (ticket.ticket_price * 11.66) / 100 +
        (ticket.ticket_price * 1.66) / 100;
      const ff = {
        ...ticket,
        cardAmt: (ticket.ticket_price * 1.66) / 100,
        abbyPagesAmt: (ticket.ticket_price * 11.66) / 100,
        totalPrice:
          ticket.payOtp == 1
            ? Number(ticket.ticket_price) + totalExtraAmt
            : ticket.ticket_price,
        youGetAmt:
          ticket.payOtp == 1
            ? Number(ticket.ticket_price)
            : Number(ticket.ticket_price) - totalExtraAmt,
      };
      NewEventTicket[index] = ff;
    }
    if (key == "tckt_description") {
      const tic = { ...ticket, tckt_description: value };
      NewEventTicket[index] = tic;
    }
    if (key == "min_ticket") {
      const tic = { ...ticket, min_ticket: value };
      NewEventTicket[index] = tic;
    }
    if (key == "max_ticket") {
      const tic = { ...ticket, max_ticket: value };
      NewEventTicket[index] = tic;
    }
    setCreateEventData(NewEventTicket);
  };
  const handleCheckBoxes = (key, value, index) => {
    let NewEventTicket = [...createEventData];
    const ticket = NewEventTicket[index];
    if (key == "hide_description") {
      const tic = { ...ticket, hide_description: value };
      NewEventTicket[index] = tic;
    }
    if (key == "display_inventry") {
      const tic = { ...ticket, display_inventry: value };
      NewEventTicket[index] = tic;
    }
    if (key == "trasferable") {
      const tic = { ...ticket, trasferable: value };
      NewEventTicket[index] = tic;
    }
    if (key == "private_ticket") {
      const tic = { ...ticket, private_ticket: value };
      NewEventTicket[index] = tic;
    }
    if (key == "password_req") {
      const tic = { ...ticket, password_req: value };
      NewEventTicket[index] = tic;
    }
    if (key == "ticket_limit") {
      const tic = { ...ticket, ticket_limit: value };
      NewEventTicket[index] = tic;
    }
    setCreateEventData(NewEventTicket);
  };
  const handleTicketPicker = (key, value, index) => {
    let NewEventTicket = [...createEventData];
    const ticket = NewEventTicket[index];
    if (key == "payOtp") {
      const tic = {
        ...ticket,
        ticket_price: "",
        abbyPagesAmt: "",
        cardAmt: "",
        totalPrice: "",
        youGetAmt: "",
        payOtp: value,
      };
      NewEventTicket[index] = tic;
    }
    setCreateEventData(NewEventTicket);
  };
  const handleTicketDateTime = (key, datetime, index) => {
    let NewEventTicket = [...createEventData];
    const ticket = NewEventTicket[index];
    if (key == "tckt_start_date") {
      const startDate = moment(datetime).format("MM/DD/YYYY");
      const tic = { ...ticket, tckt_start_date: startDate };
      NewEventTicket[index] = tic;
    }
    if (key == "tckt_end_date") {
      const endDate = moment(datetime).format("MM/DD/YYYY");
      const tic = { ...ticket, tckt_end_date: endDate };
      NewEventTicket[index] = tic;
    }
    if (key == "tckt_start_time") {
      const startTime = moment(datetime).format("h:mm a");
      const tic = { ...ticket, tckt_start_time: startTime };
      NewEventTicket[index] = tic;
    }
    if (key == "tckt_end_time") {
      const endTime = moment(datetime).format("h:mm a");
      const tic = { ...ticket, tckt_end_time: endTime };
      NewEventTicket[index] = tic;
    }
    setCreateEventData(NewEventTicket);
  };

  const handleCheckBoxesOfStripe = (key, value) => {
    if (key === "acceptRefundReq") {
      setCreateEvent({
        ...createEvent,
        acceptRefundReq: value,
      });
    }
    if (key === "include_tax") {
      setCreateEvent({
        ...createEvent,
        include_tax: value,
      });
    }
  };
  const handleBackFun = () => {
    navigation.goBack(null);
    setFormView(1);
  };
  function validationFrom() {
    if (createEvent?.event_photo?.length === 0) {
      setErrorMessage("Please select event image");
      setVisibleErr(true);
      return false;
    }
    if (createEvent?.event_video === "") {
      setErrorMessage("Please select event video");
      setVisibleErr(true);
      return false;
    }
    // if (createEvent.eventName == "") {
    //   setErrorMessage("Please enter event name");
    //   setVisibleErr(true);
    //   return false;
    // }
    // if (createEvent.eventType === 2) {
    //   if (createEvent.startDate == "") {
    //     setErrorMessage("Please enter event start date");
    //     setVisibleErr(true);
    //     return false;
    //   }
    //   if (createEvent.endDate == "") {
    //     setErrorMessage("Please enter event end date");
    //     setVisibleErr(true);
    //     return false;
    //   }
    // } else {
    //   if (createEvent.date == "") {
    //     setErrorMessage("Please select event date");
    //     setVisibleErr(true);
    //     return false;
    //   }
    // }
    // if (createEvent.start_time == "") {
    //   setErrorMessage("Please select start time");
    //   setVisibleErr(true);
    //   return false;
    // }
    // if (createEvent.end_time == "") {
    //   setErrorMessage("Please select end time");
    //   setVisibleErr(true);
    //   return false;
    // }
    // if (createEvent.find_me_in == "") {
    //   setErrorMessage("Please enter nearby location");
    //   setVisibleErr(true);
    //   return false;
    // }
    // if (createEvent.businessName == "") {
    //   setErrorMessage("Please enter business name");
    //   setVisibleErr(true);
    //   return false;
    // }
    // if (createEvent.event_address == "") {
    //   setErrorMessage("Please enter event address");
    //   setVisibleErr(true);
    //   return false;
    // }
    // if (createEvent.description == "") {
    //   setErrorMessage("Please enter description");
    //   setVisibleErr(true);
    //   return false;
    // }
    // if (createEvent.official_Web == "") {
    //   setErrorMessage("Please enter official website URL");
    //   setVisibleErr(true);
    //   return false;
    // }
    // if (createEvent.ticketURL == "") {
    //   setErrorMessage("Please enter ticket URL");
    //   setVisibleErr(true);
    //   return false;
    // }
    // if (createEvent.priceFrom == "") {
    //   setErrorMessage("Enter price from");
    //   setVisibleErr(true);
    //   return false;
    // }
    // if (createEvent.priceTo == "") {
    //   setErrorMessage("Enter price upto");
    //   setVisibleErr(true);
    //   return false;
    // }
    // if (createEvent.category_name == "" || createEvent.category_id == "") {
    //   setErrorMessage("Please select event category");
    //   setVisibleErr(true);
    //   return false;
    // }
    // if (createEvent.ticketType === 2) {
    //   if (createEvent.ticketPrice === "") {
    //     setErrorMessage("Please enter ticket price");
    //     setVisibleErr(true);
    //     return false;
    //   }
    // }
    // if (createEvent.ticketAvailability === 2) {
    //   if (createEvent.ticketLimit === "") {
    //     setErrorMessage("Please enter ticket availability limit");
    //     setVisibleErr(true);
    //     return false;
    //   }
    // }
    return true;
  }
  const onPressCreateEvent = async () => {
    const valid = validationFrom();
    if (valid) {
      setVisible(true);
      try {
        let formData = new FormData();
        formData.append("event_id", item?.event_id ? item?.event_id : "0");
        formData.append("event_name", createEvent?.eventName);
        formData.append("event_type", createEvent.eventType);
        formData.append("event_date", createEvent.date);
        formData.append("event_start_date", createEvent.startDate);
        formData.append("event_end_date", createEvent.endDate);
        formData.append("event_start_time", createEvent.start_time);
        formData.append("event_end_time", createEvent.end_time);
        formData.append("event_location", createEvent.event_address);
        formData.append("latitude", createEvent.event_Addr_lat);
        formData.append("longitude", createEvent.event_Addr_long);
        formData.append("event_address_type", createEvent.event_address_type);
        formData.append("event_description", createEvent.description);
        formData.append("adittional_organizers", createEvent.add_organiser);
        formData.append("performers", createEvent.top_performer);
        formData.append("event_category_id", createEvent.category_id);
        formData.append("search_keyword", createEvent.category_name);
        formData.append("event_show_type", 1); //for type inperson
        formData.append("accept_refund_requests", createEvent.acceptRefundReq);
        formData.append("refund_policy", createEvent.refund_policy);
        formData.append("term_conditions", createEvent.terms_cond);
        formData.append("include_tax", createEvent.include_tax);
        formData.append("include_tax_amount", createEvent.tax_amount);
        formData.append("support_email", createEvent.support_email);
        formData.append(
          "time_limit_purchase",
          createEvent.time_limit === 1 ? "15" : "10"
        );
        formData.append("hide_event_end_time", createEvent.hide_endTime);
        formData.append(
          "customize_ticket_availability_message",
          createEvent.ticketAvailability_msg
        );
        formData.append(
          "enable_best_available_feature",
          createEvent.enable_best_feature
        );
        formData.append(
          "official_website_url",
          createEvent.embed_checkout_website
        );
        formData.append("slug_url", createEvent.slug_url);
        formData.append("facebook_ads_pixel_id", createEvent.fb_adds_pixelID);
        formData.append("google_analytics_id", createEvent.google_analysticId);
        formData.append("google_adwords_uid", createEvent.google_adwordId);
        formData.append("adroll_pixel_id", createEvent.adRoll_pixelID);
        formData.append("adroll_adv_id", createEvent.adRoll_advID);
        formData.append(
          "confirmation_email_ticket",
          createEvent.cnfrm_email_ticket
        );
        formData.append(
          "confirmation_email_ticket_will_call",
          createEvent.cnfrm_email_ticket_call
        );
        createEvent?.event_photo.length > 0 &&
          createEvent?.event_photo?.map((img, index) => {
            return formData.append("events_image", {
              uri: img.path,
              type: img.mime,
              name: img.path.substring(img.path.lastIndexOf("/") + 1),
            });
          });
        createEvent?.event_video != "" &&
          formData.append("events_video", {
            uri: createEvent?.event_video?.path.toString(),
            type: createEvent?.event_video?.mime,
            name: createEvent?.event_video?.path.substring(
              createEvent?.event_video?.path.lastIndexOf("/") + 1
            ),
          });
        createEventData?.length > 0 &&
          createEventData?.map((items) => {
            const event_ticket_types = {
              event_type_name: items.ticket_title,
              quantity: items.ticket_qty,
              ticket_price: items.ticket_price,
              ticket_sale_start_date: items.tckt_start_date,
              ticket_sale_end_date: items.tckt_end_date,
              ticket_start_sale_time: items.tckt_start_time,
              ticket_end_sale_time: items.tckt_end_time,
              ticket_description: items.tckt_description,
              description_hide_buyer: items.hide_description,
              abbypages_charge: items.abbyPagesAmt,
              card_charge: items.cardAmt,
              payment_options: items.payOtp,
              total_price_for_buyer: items.totalPrice,
              total_price_for_seller: items.youGetAmt,
              display_remaining_inventory: items.display_inventry,
              make_transferable: items.trasferable,
              make_ticket_private: items.private_ticket,
              password_required: items.password_req,
              limit_tickets_per_order: items.ticket_limit,
              buy_min_ticket: items.min_ticket,
              buy_max_ticket: items.max_ticket,
            };
            return formData.append(
              "event_ticket_types",
              JSON.stringify(event_ticket_types)
            );
          });
        console.log("formData", formData);
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.CREATE_EVENTS,
          formData,
          { "Content-Type": "multipart/form-data" }
        );
        console.log(":datadata ", data);
        if (data.status === 200) {
          setVisible(false);
          setSuccessMessage("Event added successfully");
          setVisibleSuccess(true);
        } else {
          setVisible(false);
          setErrorMessage(data.message);
          setVisibleErr(true);
        }
      } catch (error) {
        setVisible(false);
        setErrorMessage(error.message);
        setVisibleErr(true);
      }
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      {formView === 1 ? (
        <CreateEvent
          setFormView={setFormView}
          handleBackFun={handleBackFun}
          onPressOpenEventImage={onPressOpenEventImage}
          onPressOpenEventVideo={onPressOpenEventVideo}
          renderEventImage={renderEventImage}
          setEventModalVisible={setEventModalVisible}
          eventModalVisible={eventModalVisible}
          onPressCreateEvent={onPressCreateEvent}
          isEndTimePickerVisible={isEndTimePickerVisible}
          handleEndTimeConfirm={handleEndTimeConfirm}
          setIsEndTimePickerVisible={setIsEndTimePickerVisible}
          setDatePickerVisibility={setDatePickerVisibility}
          isDatePickerVisible={isDatePickerVisible}
          isStartDatePicker={isStartDatePicker}
          setIsStartDatePicker={setIsStartDatePicker}
          isEndDatePicker={isEndDatePicker}
          setIsEndDatePicker={setIsEndDatePicker}
          handleConfirm={handleConfirm}
          handleStartConfirm={handleStartConfirm}
          handleEndConfirm={handleEndConfirm}
          isStartTimePickerVisible={isStartTimePickerVisible}
          handleTimeConfirm={handleTimeConfirm}
          setIsStartTimePickerVisible={setIsStartTimePickerVisible}
          eventCategoryModalVisible={eventCategoryModalVisible}
          setEventCategoryModalVisible={setEventCategoryModalVisible}
          renderCategoryListItem={renderCategoryListItem}
          categoryListData={categoryListData}
          createEvent={createEvent}
          setCreateEvent={setCreateEvent}
          type={type}
          getCategoryList={getCategoryList}
          updatePic={updatePic}
          setUpdatePic={setUpdatePic}
          formView={formView}
          onPressNextForm={onPressNextForm}
          numbers={numbers}
          contentType={contentType}
          setContentType={setContentType}
        />
      ) : (
        <>
          {formView === 2 ? (
            <GenerateTicket
              handleBackFun={handleBackFun}
              type={type}
              onPressNextForm={onPressNextForm}
              numbers={numbers}
              setFormView={setFormView}
              handleRemoveTicket={handleRemoveTicket}
              createEventData={createEventData}
              setCreateEventData={setCreateEventData}
              formView={formView}
              handleMoreOptions={handleMoreOptions}
              handleAddMoreTickets={handleAddMoreTickets}
              handleTicketInput={handleTicketInput}
              handleCheckBoxes={handleCheckBoxes}
              handleTicketPicker={handleTicketPicker}
              handleTicketDateTime={handleTicketDateTime}
              startDateModal={startDateModal}
              setStartDateModal={setStartDateModal}
              endDateModal={endDateModal}
              setEndDateModal={setEndDateModal}
              startTimeModal={startTimeModal}
              setStartTimeModal={setStartTimeModal}
              endTimeModal={endTimeModal}
              setEndTimeModal={setEndTimeModal}
            />
          ) : (
            <>
              {formView === 3 ? (
                <StripeConnect
                  handleBackFun={handleBackFun}
                  type={type}
                  onPressNextForm={onPressNextForm}
                  numbers={numbers}
                  setFormView={setFormView}
                  formView={formView}
                  createEvent={createEvent}
                  setCreateEvent={setCreateEvent}
                  handleCheckBoxesOfStripe={handleCheckBoxesOfStripe}
                />
              ) : (
                <>
                  {formView === 4 && (
                    <EventPublish
                      handleBackFun={handleBackFun}
                      type={type}
                      onPressNextForm={onPressNextForm}
                      numbers={numbers}
                      setFormView={setFormView}
                      formView={formView}
                      createEvent={createEvent}
                      setCreateEvent={setCreateEvent}
                      onPressCreateEvent={onPressCreateEvent}
                    />
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => {
          setVisibleSuccess(false);
          // navigation.navigate("EventManagement");
        }}
      />
    </View>
  );
};
export default CreateEventView;
