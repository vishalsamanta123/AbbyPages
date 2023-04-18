import React, { useState } from "react";
import { Dimensions, View } from "react-native";

import BusinessPageDetailsView from "./components/BusinessPageDetailsView";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import Success from "../../../../Components/Modal/success";
import Error from "../../../../Components/Modal/error";

const BusinessPageDetails = ({ navigation, route }) => {
  const { width, height } = Dimensions.get("window");
  const [visible, setVisible] = useState(false);
  const [moreInfoModal, setMoreInfoModal] = useState({
    open: false,
    type: "",
  });
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { currentPage: pageIndex } = sliderState;

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.ceil(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <BusinessPageDetailsView
        setSliderPage={setSliderPage}
        pageIndex={pageIndex}
        handleBack={handleBack}
        moreInfoModal={moreInfoModal}
        setMoreInfoModal={setMoreInfoModal}
      />
      {/*    <Error
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
