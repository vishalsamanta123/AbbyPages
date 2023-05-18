import { View, Modal, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import CommonStyles from "../../../../../Utils/CommonStyles";
import MainHeader from "../../../../../Components/MainHeader";
import ScaleText from "../../../../../Components/ScaleText";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../../../../Utils/Constant";
import { apiCall } from "../../../../../Utils/httpClient";
import apiEndPoints from "../../../../../Utils/apiEndPoints";
import ShowMessage from "../../../../../Components/Modal/showMessage";
import AsyncStorage from "@react-native-community/async-storage";
import MainButton from "../../../../../Components/MainButton";
import DateTimeModal from "../../../../../Components/DateTimeModal";
import { ICON_TYPE } from "../../../../../Components/Icons/Icon";
import { CartContext, UserContext } from "../../../../../Utils/UserContext";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

const OrderSetting = (props) => {
  const navigation = useNavigation();
  const [cartData, setCartData] = useContext(CartContext);
  const [userData, setUserData] = useContext(UserContext);

  const {
    visible,
    endVisible = () => {},
    onPressAddress = () => {},
    onPressDateTime = () => {},
    onPressApply = () => {},
  } = props;
  const [orderFormData, setOrderFormData] = useState({
    latitude: userData?.latitude ? userData.latitude : "",
    location: userData?.location ? userData.location : "",
    longitude: userData?.longitude ? userData.longitude : "",
    date_time: moment().format(Constants.TIME_DATE_FORMAT),
  });
  const [locations, setLocations] = useState([]);
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    getOrderData();
  }, [visible]);

  const getOrderData = async () => {
    const { data } = await apiCall("POST", apiEndPoints.DASHBOARD_DETAILS);
    if (data?.status === 200) {
      if (data?.data?.user_location?.length > 0) {
        setLocations(data?.data?.user_location);
        // await AsyncStorage.setItem("orderData", JSON?.stringify(data?.data));
      } else {
        setLocations([]);
        setMessageShow({
          visible: true,
          type: "error",
          message: "No Addresses available",
        });
      }
    } else {
      setMessageShow({
        visible: true,
        type: "error",
        message: data?.message,
      });
    }
  };

  const handleSelectAddrs = (item) => {
    setOrderFormData({
      ...orderFormData,
      latitude: item?.latitude,
      location: item?.location,
      longitude: item?.longitude,
    });
  };
  const handleSelectDateTime = (item) => {
    setOrderFormData({
      ...orderFormData,
      date_time: item,
    });
  };

  const handleApply = () => {
    onPressApply(orderFormData);
    endVisible(false);
  };
  return (
    <Modal visible={visible} onRequestClose={() => endVisible(false)}>
      <View style={CommonStyles.container}>
        <MainHeader
          onPressBack={() => endVisible(false)}
          headerText={"Order Setting"}
          notifyIcon={false}
          TxtMarginRight={"10%"}
        />
        <View style={styles.mainCon}>
          {cartData[0]?.delivery_type === 1 ? (
            <>
              <ScaleText style={styles.headTxt}>Select Address :</ScaleText>
              {locations?.length > 0 ? (
                <>
                  {locations?.map((item) => {
                    return item?.location ? (
                      <TouchableOpacity
                        onPress={() => handleSelectAddrs(item)}
                        style={styles.listVw}
                      >
                        <ScaleText
                          style={[
                            CommonStyles.dotTxt,
                            {
                              color:
                                item?.location === orderFormData?.location
                                  ? COLORS.YELLOW
                                  : COLORS.BLACK,
                            },
                          ]}
                        >
                          {Constants.dot}{" "}
                        </ScaleText>
                        <View>
                          <ScaleText
                            numberOfLines={1}
                            style={[
                              styles.titleTxt,
                              {
                                color:
                                  item?.location === orderFormData?.location
                                    ? COLORS.YELLOW
                                    : COLORS.BLACK,
                              },
                            ]}
                          >
                            {item?.location}
                          </ScaleText>
                          {item?.primary_status === 1 ? (
                            <ScaleText
                              style={[
                                styles.titleTxt,
                                {
                                  fontSize: FONT_SIZE.light,
                                },
                              ]}
                            >
                              {" (Primary Address)"}
                            </ScaleText>
                          ) : null}
                        </View>
                      </TouchableOpacity>
                    ) : null;
                  })}
                </>
              ) : null}
              <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
                <MainButton
                  onPressButton={() => {
                    navigation.navigate("AddNewLocation");
                    endVisible(false);
                  }}
                  buttonTxt={"Add New Location"}
                />
              </View>
            </>
          ) : null}
          <ScaleText style={styles.headTxt}>Schedule For :</ScaleText>
          <DateTimeModal
            rightImgOrigin={ICON_TYPE.Fontisto}
            rightImgName={"date"}
            borderRadius={5}
            value={orderFormData?.date_time}
            onPressokButton={(data) => {
              handleSelectDateTime(data);
            }}
          />
          <MainButton
            buttonTxt={"Apply"}
            paddingHeight={12}
            marginTop={20}
            backgroundColor={COLORS.YELLOW}
            txtColor={COLORS.WHITE}
            onPressButton={() => {
              handleApply();
            }}
          />
        </View>
      </View>
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
        onEndVisible={() => {
          setMessageShow({
            visible: false,
            message: "",
            type: "",
          });
        }}
      />
    </Modal>
  );
};

export default OrderSetting;
const styles = StyleSheet.create({
  mainCon: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  headTxt: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  listVw: {
    paddingHorizontal: 5,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 3,
    borderWidth: Constants.normalBW,
    borderColor: COLORS.BORDER_LINE,
    marginVertical: 5,
    borderRadius: 50,
  },
  titleTxt: {
    fontSize: FONT_SIZE.smallL,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    marginHorizontal: 6,
    marginRight: 10,
  },
});
