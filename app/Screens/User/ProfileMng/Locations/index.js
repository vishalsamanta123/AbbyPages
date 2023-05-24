import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Locations from "./components/Locations";
import styles from "./components/styles";
import CommonStyles from "../../../../Utils/CommonStyles";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import { Images } from "../../../../Utils/images";
import { apiCall } from "../../../../Utils/httpClient";
import ShowMessage from "../../../../Components/Modal/showMessage";
import ScaleText from "../../../../Components/ScaleText";
const LocationsView = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [SavedLocations, setSavedLocations] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      DashBoardDetails();
      return () => DashBoardDetails();
    }, [])
  );
  const DashBoardDetails = async () => {
    try {
      setVisible(true);
      const { data } = await apiCall("POST", ENDPOINTS.DASHBOARD_DETAILS);
      if (data.status === 200) {
        setSavedLocations(data.data.user_location);
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const OnDeleteLocation = async (item) => {
    setVisible(true);
    try {
      const params = {
        type: 1,
        location_id: item.location_id,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.DELETE_EMAIL_LOCATION,
        params
      );
      if (data?.status === 200) {
        DashBoardDetails();
        setVisibleSuccess(true);
        setSuccessMessage(data?.message);
        setVisible(false);
      } else {
        setErrorMessage(data?.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const _handleSavedLocation = (item, index) => {
    return (
      <>
        <View style={styles.emailContainerBox}>
          <View style={{ flex: 5 }}>
            <ScaleText style={styles.MainEmaliTXt}>{item.location} </ScaleText>
            {item.primary_status === 1 && (
              <ScaleText style={styles.PrimaryText}>Primary</ScaleText>
            )}
          </View>
          {item.primary_status !== 1 && (
            <View style={styles.addressOptionVw}>
              <TouchableOpacity
                onPress={() => onPressPrimary(item.location_id)}
                style={[styles.ImageDelete]}
              >
                <Image
                  style={{ height: 42, width: 42 }}
                  source={Images.PRIMARY_IMG}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ImageDelete}
                onPress={() => OnDeleteLocation(item)}
              >
                <Image source={Images.DELETE_IMG} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </>
    );
  };
  const onPressAddLocation = () => {
    navigation.navigate("AddLocation");
  };
  const onPressPrimary = async (location_id) => {
    try {
      setVisible(true);
      const params = {
        location_id: location_id,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.CHANGE_PRIMARY_LOCATION,
        params
      );
      if (data.status === 200) {
        DashBoardDetails();
        setVisibleSuccess(true);
        setSuccessMessage(data.message);
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <Locations
        SavedLocations={SavedLocations}
        _handleSavedLocation={_handleSavedLocation}
        onPressAddLocation={onPressAddLocation}
      />
      <ShowMessage
        visible={visibleErr || visibleSuccess}
        message={errorMessage || successMessage}
        messageViewType={visibleErr ? "error" : "success"}
        onEndVisible={() => {
          setErrorMessage("");
          setVisibleErr(false);
          setVisibleSuccess(false);
          setSuccessMessage("");
        }}
      />
    </View>
  );
};
export default LocationsView;
