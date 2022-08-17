import React, { useState, Fragment } from "react";
import OpeningHours from "./components/OpeningHours";
import { View, Image, Text } from "react-native";
import styles from "./components/styles";
import { apiCall, setDefaultHeader } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/error";
import Success from "../../../Components/Modal/success";
import { useFocusEffect, useLinkProps } from "@react-navigation/native";
import moment from "moment";
const OpeningHoursView = (props) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [MonShowPickerTime, setMonShowPickerTime] = useState(false);
  const [monCloseShowPic, setMonCloseShowPic] = useState(false);
  const [TuesOpenShowPic, setTuesOpenShowPic] = useState(false);
  const [TuesCloseShowPic, setTuesCloseShowPic] = useState(false);
  const [WednesOpenShowPic, setWednesOpenShowPic] = useState(false);
  const [WednesCloseShowPic, setWednesCloseShowPic] = useState(false);
  const [ThursOpenShowPic, setThursOpenShowPic] = useState(false);
  const [ThursCloseShowPic, setThursCloseShowPic] = useState(false);
  const [FriOpenShowPic, setFriOpenShowPic] = useState(false);
  const [FriCloseShowPic, setFriCloseShowPic] = useState(false);
  const [SaturOpenShowPic, setSaturOpenShowPic] = useState(false);
  const [SaturCloseShowPic, setSaturCloseShowPic] = useState(false);
  const [SunOpenShowPic, setSunOpenShowPic] = useState(false);
  const [SunCloseShowPic, setSunCloseShowPic] = useState(false);
  const [MonOpenTime, setMonOpenTime] = useState("");
  const [MonCloeTime, setMonCloseTime] = useState("");
  const [TuesOpenTime, setTuesOpenTime] = useState("");
  const [TuesCloseTime, setTuesCloseTime] = useState("");
  const [WednesOpenTime, setWednesOpenTime] = useState("");
  const [WednesCloseTime, setWednesCloseTime] = useState("");
  const [ThursOpenTime, setThursOpenTime] = useState("");
  const [ThursCloseTime, setThursCloseTime] = useState("");
  const [FriOpenTime, setFriOpenTime] = useState("");
  const [FriCloseTime, setFriCloseTime] = useState("");
  const [SaturOpenTime, setSaturOpenTime] = useState("");
  const [SaturCloseTime, setSaturCloseTime] = useState("");
  const [SunOpenTime, setSunOpenTime] = useState("");
  const [SunCloseTime, setSunCloseTime] = useState("");

  const [MondayCloseOpen, setMondayCloseOpen] = useState(1);
  const [tuesdayCloseOpen, setTuesdayCloseOpen] = useState(1);
  const [WednesdayCloseOpen, setWednesdayCloseOpen] = useState(1);
  const [ThursdayCloseOpen, setThursdayCloseOpen] = useState(1);
  const [FridayCloseOpen, setFridayCloseOpen] = useState(1);
  const [SaturdayCloseOpen, setSaturdayCloseOpen] = useState(1);
  const [SundayCloseOpen, setSundayCloseOpen] = useState(1);
  const [ButtonStatus, setButtonStatus] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      getTimeHoursFun();
      return () => getTimeHoursFun();
    }, [])
  );

  const getTimeHoursFun = async () => {
    setVisible(true);
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_OPENING_CLOSE_HOURS);
      if (data.status === 200) {
        setMonOpenTime(data.data[0].Mon.open_time);
        setMonCloseTime(data.data[0].Mon.close_time);
        setTuesOpenTime(data.data[0].Tue.open_time);
        setTuesCloseTime(data.data[0].Tue.close_time);
        setWednesOpenTime(data.data[0].Wed.open_time);
        setWednesCloseTime(data.data[0].Wed.close_time);
        setThursOpenTime(data.data[0].Thu.open_time);
        setThursCloseTime(data.data[0].Thu.close_time);
        setFriOpenTime(data.data[0].Fri.open_time);
        setFriCloseTime(data.data[0].Fri.close_time);
        setSaturOpenTime(data.data[0].Sat.open_time);
        setSaturCloseTime(data.data[0].Sat.close_time);
        setSunOpenTime(data.data[0].Sun.open_time);
        setSunCloseTime(data.data[0].Sun.close_time);

        setMondayCloseOpen(data.data[0].Mon.closing_day);
        setTuesdayCloseOpen(data.data[0].Tue.closing_day);
        setWednesdayCloseOpen(data.data[0].Wed.closing_day);
        setThursdayCloseOpen(data.data[0].Thu.closing_day);
        setFridayCloseOpen(data.data[0].Fri.closing_day);
        setSaturdayCloseOpen(data.data[0].Sat.closing_day);
        setSundayCloseOpen(data.data[0].Sun.closing_day);

        setVisible(false);
      } else {
        setVisible(false);
        // setErrorMessage(data.message);
        // setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const monOpenTimeShowPicker = () => {
    setMonShowPickerTime(true);
  };
  const monCloseTimeShowPicker = () => {
    setMonCloseShowPic(true);
  };
  const TuesOpenTimeShowPicker = () => {
    setTuesOpenShowPic(true);
  };
  const TuesCloseTimeShowPicker = () => {
    setTuesCloseShowPic(true);
  };
  const WednesOpenTimeShowPicker = () => {
    setWednesOpenShowPic(true);
  };
  const WednesCloseTimeShowPicker = () => {
    setWednesCloseShowPic(true);
  };
  const ThursOpenShowPicker = () => {
    setThursOpenShowPic(true);
  };
  const ThursCloseShowPicker = () => {
    setThursCloseShowPic(true);
  };
  const FriOpenShowPicker = () => {
    setFriOpenShowPic(true);
  };
  const FriCloseShowPicker = () => {
    setFriCloseShowPic(true);
  };
  const SaturOpenShowPicker = () => {
    setSaturOpenShowPic(true);
  };
  const SaturCloseShowPicker = () => {
    setSaturCloseShowPic(true);
  };
  const SunOpenShowPicker = () => {
    setSunOpenShowPic(true);
  };
  const SunCloseShowPicker = () => {
    setSunCloseShowPic(true);
  };

  const hideDatePicker = () => {
    setMonShowPickerTime(false);
    setMonCloseShowPic(false);
    setTuesOpenShowPic(false);
    setTuesCloseShowPic(false);
    setWednesOpenShowPic(false);
    setWednesCloseShowPic(false);
    setThursCloseShowPic(false);
    setFriOpenShowPic(false);
    setFriCloseShowPic(false);
    setSaturOpenShowPic(false);
    setSaturCloseShowPic(false);
    setSunOpenShowPic(false);
    setSunCloseShowPic(false);
  };
  const MondayOpenConfirmTime = (date) => {
    const value = moment(date).format(" h:mm a");
    setMonOpenTime(value);
    hideDatePicker();
  };
  const MondayCloseConfirmTime = (date) => {
    const value = moment(date).format(" h:mm a");
    setMonCloseTime(value);
    hideDatePicker();
  };
  const TuesdayOpenConfirmTime = (date) => {
    const value = moment(date).format(" h:mm a");
    setTuesOpenTime(value);
    hideDatePicker();
  };
  const TuesdayCloseConfirmTime = (date) => {
    const value = moment(date).format(" h:mm a");
    setTuesCloseTime(value);
    hideDatePicker();
  };
  const WednesOpenConfirmTime = (date) => {
    const value = moment(date).format(" h:mm a");
    setWednesOpenTime(value);
    hideDatePicker();
  };
  const WednesCloseConfirmTime = (date) => {
    const value = moment(date).format(" h:mm a");
    setWednesCloseTime(value);
    hideDatePicker();
  };
  const ThursOpenConfirmTime = (date) => {
    const value = moment(date).format(" h:mm a");
    setThursOpenTime(value);
    hideDatePicker();
  };
  const ThursCloseConfirmTime = (date) => {
    const value = moment(date).format(" h:mm a");
    setThursCloseTime(value);
    hideDatePicker();
  };
  const FriOpenConfirmTime = (date) => {
    const value = moment(date).format(" h:mm a");
    setFriOpenTime(value);
    hideDatePicker();
  };
  const FriCloseConfirmTime = (date) => {
    const value = moment(date).format(" h:mm a");
    setFriCloseTime(value);
    hideDatePicker();
  };
  const SaturOpenConfirmTime = (date) => {
    const value = moment(date).format(" h:mm a");
    setSaturOpenTime(value);
    hideDatePicker();
  };
  const SaturCloseConfirmTime = (date) => {
    const value = moment(date).format(" h:mm a");
    setSaturCloseTime(value);
    hideDatePicker();
  };
  const SunOpenConfirmTime = (date) => {
    const value = moment(date).format(" h:mm a");
    setSunOpenTime(value);
    hideDatePicker();
  };
  const SunCloseConfirmTime = (date) => {
    const value = moment(date).format(" h:mm a");
    setSunCloseTime(value);
    hideDatePicker();
  };

  const mondayCloseFun = () => {
    setMondayCloseOpen(0);
  };
  const mondayOpenFun = () => {
    setMondayCloseOpen(1);
  };
  const tuesdayCloseFun = () => {
    setTuesdayCloseOpen(0);
  };
  const tuesdayOpenFun = () => {
    setTuesdayCloseOpen(1);
  };
  const WednesdayCloseFun = () => {
    setWednesdayCloseOpen(0);
  };
  const WednesdayOpenFun = () => {
    setWednesdayCloseOpen(1);
  };
  const ThursdayCloseFun = () => {
    setThursdayCloseOpen(0);
  };
  const ThursdayOpenFun = () => {
    setThursdayCloseOpen(1);
  };
  const FridayCloseFun = () => {
    setFridayCloseOpen(0);
  };
  const FridayOpenFun = () => {
    setFridayCloseOpen(1);
  };
  const SaturdayCloseFun = () => {
    setSaturdayCloseOpen(0);
  };
  const SaturdayOpenFun = () => {
    setSaturdayCloseOpen(1);
  };
  const SundayCloseFun = () => {
    setSundayCloseOpen(0);
  };
  const SundayOpenFun = () => {
    setSundayCloseOpen(1);
  };

  const SaveDetails = async () => {
    setVisible(true);
    setButtonStatus(false);
    try {
      const params = {
        business_type: 1,
        timeSchedule: [
          {
            day: "Sun",
            open_time: SunOpenTime,
            close_time: SunCloseTime,
            closing_day: SundayCloseOpen,
          },
          {
            day: "Mon",
            open_time: MonOpenTime,
            close_time: MonCloeTime,
            closing_day: MondayCloseOpen,
          },
          {
            day: "Tue",
            open_time: TuesOpenTime,
            close_time: TuesCloseTime,
            closing_day: tuesdayCloseOpen,
          },
          {
            day: "Wed",
            open_time: WednesOpenTime,
            close_time: WednesCloseTime,
            closing_day: WednesdayCloseOpen,
          },
          {
            day: "Thu",
            open_time: ThursOpenTime,
            close_time: TuesCloseTime,
            closing_day: ThursdayCloseOpen,
          },
          {
            day: "Fri",
            open_time: FriOpenTime,
            close_time: FriCloseTime,
            closing_day: FridayCloseOpen,
          },
          {
            day: "Sat",
            open_time: SaturOpenTime,
            close_time: SaturCloseTime,
            closing_day: SaturdayCloseOpen,
          },
        ],
        temporary_close: 1,
        permanent_close: 1,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.SET_OPENING_CLOSE_HOURS,
        params
      );
      if (data.status === 200) {
        setVisible(false);
        setButtonStatus(true);
        setSuccessMessage("Updated Successfully");
        setVisibleSuccess(true);
      } else {
        setVisible(false);
        setButtonStatus(true);

        // setErrorMessage(data.message);
        // setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
      setButtonStatus(true);
    }
  };

  const cancelFun = () => {
    props.navigation.goBack(null);
  };

  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      {/* <View style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }}>
                <Loader state={visible} />

            </View> */}
      <OpeningHours
        monOpenTimeShowPicker={monOpenTimeShowPicker}
        MonShowPickerTime={MonShowPickerTime}
        MondayOpenConfirmTime={MondayOpenConfirmTime}
        MonOpenTime={MonOpenTime}
        monCloseTimeShowPicker={monCloseTimeShowPicker}
        monCloseShowPic={monCloseShowPic}
        MondayCloseConfirmTime={MondayCloseConfirmTime}
        MonCloeTime={MonCloeTime}
        TuesOpenTimeShowPicker={TuesOpenTimeShowPicker}
        TuesOpenShowPic={TuesOpenShowPic}
        TuesdayOpenConfirmTime={TuesdayOpenConfirmTime}
        TuesOpenTime={TuesOpenTime}
        TuesCloseTimeShowPicker={TuesCloseTimeShowPicker}
        TuesCloseShowPic={TuesCloseShowPic}
        TuesdayCloseConfirmTime={TuesdayCloseConfirmTime}
        TuesCloseTime={TuesCloseTime}
        WednesOpenTimeShowPicker={WednesOpenTimeShowPicker}
        WednesOpenShowPic={WednesOpenShowPic}
        WednesOpenConfirmTime={WednesOpenConfirmTime}
        WednesOpenTime={WednesOpenTime}
        WednesCloseTimeShowPicker={WednesCloseTimeShowPicker}
        WednesCloseShowPic={WednesCloseShowPic}
        WednesCloseConfirmTime={WednesCloseConfirmTime}
        WednesCloseTime={WednesCloseTime}
        ThursOpenShowPicker={ThursOpenShowPicker}
        ThursOpenShowPic={ThursOpenShowPic}
        ThursOpenConfirmTime={ThursOpenConfirmTime}
        ThursOpenTime={ThursOpenTime}
        ThursCloseShowPicker={ThursCloseShowPicker}
        ThursCloseShowPic={ThursCloseShowPic}
        ThursCloseConfirmTime={ThursCloseConfirmTime}
        ThursCloseTime={ThursCloseTime}
        FriOpenShowPicker={FriOpenShowPicker}
        FriOpenShowPic={FriOpenShowPic}
        FriOpenConfirmTime={FriOpenConfirmTime}
        FriOpenTime={FriOpenTime}
        FriCloseShowPicker={FriCloseShowPicker}
        FriCloseShowPic={FriCloseShowPic}
        FriCloseConfirmTime={FriCloseConfirmTime}
        FriCloseTime={FriCloseTime}
        SaturOpenShowPicker={SaturOpenShowPicker}
        SaturOpenShowPic={SaturOpenShowPic}
        SaturOpenConfirmTime={SaturOpenConfirmTime}
        SaturOpenTime={SaturOpenTime}
        SaturCloseShowPicker={SaturCloseShowPicker}
        SaturCloseShowPic={SaturCloseShowPic}
        SaturCloseConfirmTime={SaturCloseConfirmTime}
        SaturCloseTime={SaturCloseTime}
        SunOpenShowPicker={SunOpenShowPicker}
        SunOpenShowPic={SunOpenShowPic}
        SunOpenConfirmTime={SunOpenConfirmTime}
        SunOpenTime={SunOpenTime}
        SunCloseShowPicker={SunCloseShowPicker}
        SunCloseShowPic={SunCloseShowPic}
        SunCloseConfirmTime={SunCloseConfirmTime}
        SunCloseTime={SunCloseTime}
        hideDatePicker={hideDatePicker}
        mondayCloseFun={mondayCloseFun}
        MondayCloseOpen={MondayCloseOpen}
        mondayOpenFun={mondayOpenFun}
        tuesdayCloseFun={tuesdayCloseFun}
        tuesdayCloseOpen={tuesdayCloseOpen}
        tuesdayOpenFun={tuesdayOpenFun}
        WednesdayCloseFun={WednesdayCloseFun}
        WednesdayCloseOpen={WednesdayCloseOpen}
        WednesdayOpenFun={WednesdayOpenFun}
        ThursdayCloseFun={ThursdayCloseFun}
        ThursdayCloseOpen={ThursdayCloseOpen}
        ThursdayOpenFun={ThursdayOpenFun}
        FridayCloseFun={FridayCloseFun}
        FridayCloseOpen={FridayCloseOpen}
        FridayOpenFun={FridayOpenFun}
        SaturdayCloseFun={SaturdayCloseFun}
        SaturdayCloseOpen={SaturdayCloseOpen}
        SaturdayOpenFun={SaturdayOpenFun}
        SundayCloseFun={SundayCloseFun}
        SundayCloseOpen={SundayCloseOpen}
        SundayOpenFun={SundayOpenFun}
        SaveDetails={SaveDetails}
        ButtonStatus={ButtonStatus}
        cancelFun={cancelFun}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => ("Home", setVisibleSuccess(false))}
      />
    </View>
  );
};
export default OpeningHoursView;
