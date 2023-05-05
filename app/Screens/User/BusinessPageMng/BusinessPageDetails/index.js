import React, { useState } from "react";
import { Alert, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import BusinessPageDetailsView from "./components/BusinessPageDetailsView";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";

const BusinessPageDetails = ({ navigation, route }) => {
  const { detail = {} } = route?.params;
  const [visible, setVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(0);
  const [moreInfoModal, setMoreInfoModal] = useState({
    open: false,
    type: "",
    moreData: {},
  });
  const [galleryModal, setGalleryModal] = useState({
    open: false,
    type: "",
    moreData: {},
  });
  const [detailData, setDetailData] = useState({});
  const [recentFeedData, setRecentFeedData] = useState({});

  useFocusEffect(
    React.useCallback(() => {
      if (detailData?.business_name) {
        getRecentFeedDetails();
      } else {
        getDetails();
      }
      return () => {};
    }, [navigation, route, detailData])
  );
  const getDetails = async () => {
    try {
      setVisible(true);
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
        getRecentFeedDetails();

        setIsSaved(data?.data?.user_like);
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

  const getRecentFeedDetails = async () => {
    try {
      // setVisible(true);
      const params = {
        business_name: detailData?.business_name,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GETABBYCONNECTPOST,
        params
      );

      if (data.status == 200) {
        // setVisible(false);
        setRecentFeedData(data?.data[0]);
      } else {
        if (data.status === 201) {
          setRecentFeedData({});
          // setVisible(false);
        } else {
          // setVisible(false);
        }
      }
    } catch (error) {
      setVisible(false);
    }
  };

  const handleNavigation = (screenName, data) => {
    navigation.navigate(screenName, data);
  };

  const handleSavepress = async () => {
    try {
      setVisible(true);
      const params = {
        item_id: detail?.business_id,
        like: isSaved ? 0 : 1,
        favorite: isSaved ? 0 : 1,
        item_type: detail?.business_type,
      };

      const { data } = await apiCall("POST", ENDPOINTS.USERCOMMONLIKES, params);
      if (data.status == 200) {
        setVisible(false);
        setIsSaved(!isSaved);
      } else {
        if (data.status === 201) {
          setVisible(false);
        } else if (data.status === 401) {
          Alert.alert(data.message);
        } else {
          setVisible(false);
        }
      }
    } catch (error) {
      setVisible(false);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={CommonStyles.container}>
      {/* {visible && <Loader state={visible} />} */}
      <BusinessPageDetailsView
        handleBack={handleBack}
        moreInfoModal={moreInfoModal}
        setMoreInfoModal={setMoreInfoModal}
        galleryModal={galleryModal}
        setGalleryModal={setGalleryModal}
        detailData={detailData}
        handleNavigation={handleNavigation}
        visible={visible}
        isSaved={isSaved}
        setIsSaved={setIsSaved}
        handleSavepress={handleSavepress}
        recentFeedData={recentFeedData}
      />
    </View>
  );
};
export default BusinessPageDetails;
