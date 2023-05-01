import React, {  useState } from "react";
import { View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import BusinessPageDetailsView from "./components/BusinessPageDetailsView";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";

const BusinessPageDetails = ({ navigation, route }) => {
  const { detail = {} } = route?.params;
  const [visible, setVisible] = useState(false);
  const [moreInfoModal, setMoreInfoModal] = useState({
    open: false,
    type: "",
    moreData: {},
  });
  const [detailData, setDetailData] = useState({});

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

  const handleNavigation = (screenName, data) => {
    navigation.navigate(screenName, data);
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
        detailData={detailData}
        handleNavigation={handleNavigation}
        visible={visible}
      />
    </View>
  );
};
export default BusinessPageDetails;
