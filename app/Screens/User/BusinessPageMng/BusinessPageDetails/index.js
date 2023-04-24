import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";

import BusinessPageDetailsView from "./components/BusinessPageDetailsView";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import Success from "../../../../Components/Modal/success";
import Error from "../../../../Components/Modal/error";

const BusinessPageDetails = ({ navigation, route }) => {
  const { detail = {} } = route?.params;
  const { width, height } = Dimensions.get("window");
  const [visible, setVisible] = useState(false);
  const [moreInfoModal, setMoreInfoModal] = useState({
    open: false,
    type: "",
  });
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    getDetails();
  }, [navigation]);
  const getDetails = async () => {
    try {
      setVisible(true);
      const params = {
        business_id: detail?.business_id,
        business_type: detail?.search_business_type,
      };
      console.log("params", params);
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
      />
      {/* <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(false)}
      /> */}
    </View>
  );
};
export default BusinessPageDetails;
