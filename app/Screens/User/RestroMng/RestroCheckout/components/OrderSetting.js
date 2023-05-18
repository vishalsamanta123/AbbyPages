import { View, Modal, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
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

const OrderSetting = (props) => {
  const {
    visible,
    endVisible = () => {},
    onPressAddress = () => {},
    onPressDateTime = () => {},
  } = props;
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
        await AsyncStorage.setItem("orderData", JSON?.stringify(data?.data));
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
    onPressAddress(item);
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
                            item?.primary_status === 1
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
                              item?.primary_status === 1
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
                            { fontSize: FONT_SIZE.verysmall },
                          ]}
                        >
                          {" Primary Address "}
                        </ScaleText>
                      ) : null}
                    </View>
                  </TouchableOpacity>
                ) : null;
              })}
            </>
          ) : null}
          <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
            <MainButton buttonTxt={"Add New Location"} />
          </View>
          <ScaleText style={styles.headTxt}>Schedule For :</ScaleText>
          {/* <DateTimeModal /> */}
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
