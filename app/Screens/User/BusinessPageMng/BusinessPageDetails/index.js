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
  const handleBack=()=>{
    navigation.goBack()
  }

  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <BusinessPageDetailsView
        // _handlePhotos={_handlePhotos}
        // openAlbum={openAlbum}
        // openCamera={openCamera}
        // addPhotoModal={addPhotoModal}
        // setAddPhotoModal={setAddPhotoModal}
        // setBusinessReviewRating={setBusinessReviewRating}
        // reviewModal={reviewModal}
        // setReviewModal={setReviewModal}
        // onSubmitReviewData={onSubmitReviewData}
        // reviewData={reviewData}
        // setReviewData={setReviewData}
        // restroDetail={restroDetail}
        // handleGetDirections={handleGetDirections}
        setSliderPage={setSliderPage}
        pageIndex={pageIndex}
        handleBack={handleBack}
        // _handleOptions={_handleOptions}
        // _handlePopularDish={_handlePopularDish}
        // _handleReview={_handleReview}
        // onPressReservation={onPressReservation}
        // onPressFullMenu={onPressFullMenu}
        // DialogVisible={DialogVisible}
        // setDialogVisible={setDialogVisible}
        // onPressOrderFood={onPressOrderFood}
        // onPressSubmit={onPressSubmit}
        // shareTo={shareTo}
        // saveResto={saveResto}
        // onPressRestro={onPressRestro}
        // galleryPhotos={galleryPhotos}
        // setGalleryPhotos={setGalleryPhotos}
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
