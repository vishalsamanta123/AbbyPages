import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";

import BusinessPageDetailsView from "./components/BusinessPageDetailsView";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import Success from "../../../../Components/Modal/success";
import Error from "../../../../Components/Modal/error";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const BusinessPageDetails = ({ navigation, route }) => {
  const { detail = {} } = route?.params;
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useState({});
  const [moreInfoModal, setMoreInfoModal] = useState({
    open: false,
    type: "",
    moreData: {}
  });
  const [detailData, setDetailData] = useState({});

  useFocusEffect(
    React.useCallback(() => {
      getDetails();
      return () => { };
    }, [navigation, route])
  );
  const getDetails = async () => {
    try {
      setVisible(true);
      const getUserData = await AsyncStorage.getItem("localuserdata");
      if (JSON?.parse(getUserData)?.login_type) {
        setUserData(JSON?.parse(getUserData));
      }
      const params = {
        business_id: detail?.business_id,
        business_type: detail?.search_business_type,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUSINESS_DETAILS,
        params
      );
      if (data.status == 200) {
        setVisible(false);
        setDetailData(data?.data);
      } else {
        if (data.status === 201) {
          setDetailData({});
          setVisible(false);
        } else {
          setVisible(false);
        }
      }
    } catch (error) {
      setVisible(false);
    }
  };

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName)
  }

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <BusinessPageDetailsView
        handleBack={handleBack}
        moreInfoModal={moreInfoModal}
        setMoreInfoModal={setMoreInfoModal}
        detailData={detailData}
        userData={userData}
        handleNavigation={handleNavigation}
      />
    </View>
  );
};
export default BusinessPageDetails;
