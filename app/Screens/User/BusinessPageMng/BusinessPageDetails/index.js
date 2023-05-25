import React, { useState } from "react";
import { Alert, View } from "react-native";
import Share from "react-native-share";
import { useFocusEffect } from "@react-navigation/native";
import BusinessPageDetailsView from "./components/BusinessPageDetailsView";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import ShowMessage from "../../../../Components/Modal/showMessage";

const BusinessPageDetails = ({ navigation, route }) => {
  const { detail = {} } = route?.params;
  const [visible, setVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(0);
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });
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
      getDetails();
      return () => {};
    }, [navigation, route])
  );
  const getDetails = async () => {
    try {
      setVisible(true);
      const params = {
        business_id: detail?.business_id,
        business_type: detail?.business_type,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.BUSINESS_DETAILS,
        params
      );
      if (data?.status == 200) {
        setVisible(false);
        setDetailData(data?.data);
        getRecentFeedDetails(data?.data);
        setIsSaved(data?.data?.user_like);
      } else {
        if (data?.status === 201) {
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

  const getRecentFeedDetails = async (item) => {
    try {
      // setVisible(true);
      const params = {
        business_name: item?.business_name,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GETABBYCONNECTPOST,
        params
      );
      if (data?.status == 200) {
        // setVisible(false);
        setRecentFeedData(data?.data?.abbyConnectData[0]);
      } else {
        if (data?.status === 201) {
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
      // setVisible(true);
      const params = {
        item_id: detail?.business_id,
        like: isSaved ? 0 : 1,
        favorite: isSaved ? 0 : 1,
        item_type: detail?.business_type,
      };

      const { data } = await apiCall("POST", ENDPOINTS.USERCOMMONLIKES, params);
      if (data?.status == 200) {
        // setVisible(false);
        setIsSaved(!isSaved);
      } else {
        if (data?.status === 201) {
          // setVisible(false);
        } else if (data?.status === 401) {
          setMessageShow({
            visible: true,
            message: data?.message,
            type: "error",
          });
        } else {
          // setVisible(false);
        }
      }
    } catch (error) {
      // setVisible(false);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSharePress = async () => {
    const finalName = detailData?.business_name.split(" ").join("-");
    const options = {
      message: `https://abbypages.com/business/${finalName}`,
    };
    const shareResponse = await Share.open(options);
  };

  const handleReservationPress = () => {
    navigation.navigate("RestroBooking", { detail: detailData });
  };
  const onPressOrder = (type) => {
    const getData = { ...detailData, delivery_type: type };
    navigation.navigate("RestroMenu", { detail: getData });
  };

  const handleConsiderPress = (item) => {
    navigation.navigate("BusinessPageDetails", { detail: item });
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
        handleSharePress={handleSharePress}
        handleReservationPress={handleReservationPress}
        onPressOrder={onPressOrder}
        handleConsiderPress={handleConsiderPress}
      />
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
        position={"bottom"}
        onEndVisible={() =>
          setMessageShow({
            visible: false,
            type: "",
            message: "",
          })
        }
      />
    </View>
  );
};
export default BusinessPageDetails;
