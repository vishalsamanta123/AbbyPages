import React from "react";
import {
  View,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
  FlatList,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Platform,
} from "react-native";
import styles from "./styles";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import CommonStyles from "../../../Utils/CommonStyles";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import {
  LIGHT_RED_COLOR_CODE,
  YELLOW_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";
import { Rating, AirbnbRating } from "react-native-ratings";
const { width, height } = Dimensions.get("window");
const ShopDetail = (props) => {
  const initialRegion = {
    latitude: props?.shopDetail?.latitude
      ? parseInt(props?.shopDetail?.latitude)
      : 22.72448,
    longitude: props?.shopDetail?.longitude
      ? parseInt(props?.shopDetail?.longitude)
      : 75.889267,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };
  const coordinate = {
    latitude: props?.shopDetail?.latitude
      ? parseInt(props?.shopDetail?.latitude)
      : 22.72448,
    longitude: props?.shopDetail?.longitude
      ? parseInt(props?.shopDetail?.longitude)
      : 75.889267,
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <Header
        RightImg={null}
        HeaderText={"Shop Detail"}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
      />
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <View>
            <Dialog
              visible={props.addPhotoModal}
              dialogAnimation={
                new SlideAnimation({
                  slideFrom: "bottom",
                })
              }
              transparent={true}
              onTouchOutside={() => {
                props.setAddPhotoModal(false);
              }}
              onRequestClose={() => props.setAddPhotoModal(false)}
            >
              <DialogContent>
                <View style={styles.alertBackground}>
                  <Text style={[styles.modalItem, { paddingBottom: 10 }]}>
                    Please select
                  </Text>
                  <View style={styles.alertBox}>
                    <TouchableOpacity
                      style={styles.profileModal}
                      onPress={() => props.openCamera()}
                      underlayColor={"#F5F5F5"}
                    >
                      <Image
                        style={{ height: 40, width: 40 }}
                        source={require("../../../Assets/camera.png")}
                      />
                      <Text style={styles.modalItem}>Open camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.profileModal}
                      onPress={() => props.openAlbum()}
                      underlayColor={"#F5F5F5"}
                    >
                      <Image
                        style={{ height: 40, width: 40 }}
                        source={require("../../../Assets/image-gallery.png")}
                      />
                      <Text style={styles.modalItem}>Open album</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.profileModal}
                      underlayColor={"#F5F5F5"}
                      onPress={() => props.setAddPhotoModal(false)}
                    >
                      <Image
                        style={{ height: 40, width: 40 }}
                        source={require("../../../Assets/cancelModalBtn.png")}
                      />
                      <Text style={styles.modalItem}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </DialogContent>
            </Dialog>
          </View>
          <SafeAreaView style={{ alignItems: "center" }}>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={props?.shopDetail?.image && props?.shopDetail?.image}
              scrollEventThrottle={16}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              onScroll={(event) => {
                props.setSliderPage(event);
              }}
              renderItem={({ item, index }) => {
                return (
                  index <= 4 && (
                    <View key={index} style={{ width, alignItems: "center" }}>
                      <Image
                        resizeMode="stretch"
                        source={{ uri: item.image }}
                        style={styles.imageStyle}
                      />
                    </View>
                  )
                );
              }}
            />
            {/* {props?.shopDetail?.image.length} */}
            <View style={styles.paginationWrapper}>
              {Array.from(
                Array(
                  props?.shopDetail?.image?.length > 5
                    ? 5
                    : props?.shopDetail?.image?.length
                ).keys()
              ).map((key, index) => (
                <View
                  style={[
                    styles.paginationDots,
                    { opacity: props.pageIndex === index ? 1 : 0.2 },
                  ]}
                  key={index}
                />
              ))}
            </View>
          </SafeAreaView>
          <View style={styles.RestroDetailView}>
            <Text style={styles.RestroNameTxt}>
              {props?.shopDetail?.business_name}
            </Text>
            <View style={styles.FlexRowView}>
              <Text style={styles.RateTextStyle}>
                {props?.shopDetail?.business_star === 0 && "$ | "}
                {props?.shopDetail?.business_star === 1 && "$  | "}
                {props?.shopDetail?.business_star === 2 && "$$  | "}
                {props?.shopDetail?.business_star === 3 && "$$$  | "}
                {props?.shopDetail?.business_star === 4 && "$$$$  | "}
                {props?.shopDetail?.business_star === 5 && "$$$$$  | "}
              </Text>
              {/* <FlatList
                                keyExtractor={(item, index) => index.toString()}
                                data={props?.shopDetail?.business_category && props?.shopDetail?.business_category}
                                // horizontal={true}
                                numColumns={4}
                                renderItem={({ item, index }) => (item)}
                            /> */}
              <Text style={styles.RateTextStyle}>
                {props?.shopDetail?.business_service_category}
              </Text>
            </View>
            <View style={styles.RatingContainer}>
              <View style={styles.RatingStyles}>
                <Text style={styles.RatingStylesTxt}>5.0</Text>
              </View>
              <Text style={styles.RatingTextMain}>
                {" "}
                {Number(props?.shopDetail.rating).toFixed(1)} ratings |{" "}
              </Text>
              <Text style={styles.MainClosedTime}>
                {props?.shopDetail?.login_status === 1 ? "Open" : "Closed"}
              </Text>
              <Text style={styles.RatingTextMain}>
                {props?.shopDetail?.business_open_time &&
                  ": " + props?.shopDetail?.business_open_time?.open_time + "-"}
                {props?.shopDetail?.business_open_time &&
                  props?.shopDetail?.business_open_time?.close_time}
              </Text>
            </View>
          </View>
          <View style={styles.AddShareContainer}>
            <View style={styles.AddShareView}>
              <TouchableOpacity
                onPress={() => props.setAddPhotoModal(true)}
                style={styles.AddPhotoCOntainer}
              >
                <Image source={require("../../../Assets/add_photo_icon.png")} />
                <Text style={styles.AddOptnsTextMain}>Add Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.shareTo()}
                style={{ alignItems: "center", flex: 2 }}
              >
                <Image
                  style={{ width: 19, height: 15 }}
                  source={require("../../../Assets/share_icon.png")}
                />
                <Text style={styles.AddOptnsTextMain}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.saveResto()}
                style={styles.SaveContainer}
              >
                <Image
                  style={{
                    tintColor:
                      props?.shopDetail?.user_like === 1
                        ? YELLOW_COLOR_CODE
                        : null,
                  }}
                  source={require("../../../Assets/save_icon.png")}
                />
                <Text style={styles.AddOptnsTextMain}>
                  {props?.shopDetail?.user_like === 1 ? "Saved" : "Save"}
                </Text>
              </TouchableOpacity>
            </View>
            {
              // props?.shopDetail?.offers_delivery === 1 &&
              <TouchableOpacity
                onPress={() => props.onPressShopNow()}
                // onPress={() => props.onPressOrderFood()}
                style={styles.CameraViewStyle}
              >
                <Text style={styles.CameraMainText}>Shop Now</Text>
              </TouchableOpacity>
            }
          </View>
          {/* <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={props.handleOptions}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => props._handleOptions(item, index)
                        }
                    /> */}
          <View style={styles.MainUpdateContainer}>
            <View style={styles.UpdatesViewStyle}>
              <Text style={styles.CovidMainTxt}>COVID-19 Updates</Text>
              {/* <View style={styles.FlexRowView}>
                                <Text style={styles.EditTextStyle}>Edit </Text>
                                <Image source={require('../../../Assets/edit_pencil_icon.png')} />
                            </View> */}
            </View>
            {/* <View style={styles.CovidParaView}>
                            <Text style={styles.MainCovidPara}>
                                "Dine-in- service is available with limited
                                seating now! Takeout & Delivery Service also
                                available through various services or direct order through
                                phone call & messages!"
                            </Text>
                        </View> */}
            {/* <View style={styles.CovidParaView}>
                            <Text style={styles.PostDateText}>Posted on August 5, 2020</Text>
                        </View> */}
            <View style={styles.CovidParaView}>
              <Text style={styles.UpdatedServics}>Updated Services</Text>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.UpdateOptions}>
                  {props?.shopDetail?.accept_credit_card === 1 ? (
                    <View style={{}}>
                      <ImageBackground
                        style={styles.RightImgeStyle}
                        source={require("../../../Assets/text_check_icon.png")}
                      />
                    </View>
                  ) : (
                    <Image
                      style={[styles.RightImgeStyle, { height: 25, width: 25 }]}
                      source={require("../../../Assets/cart_delete_icon.png")}
                      tintColor={YELLOW_COLOR_CODE}
                    />
                  )}
                  <Text style={styles.OutDoorSeatingTxt}>
                    Accepts Credit Cards
                  </Text>
                </View>
                <View style={styles.UpdateOptions}>
                  {props?.shopDetail?.bike_parking === 1 ? (
                    <View style={{}}>
                      <Image
                        style={styles.RightImgeStyle}
                        source={require("../../../Assets/text_check_icon.png")}
                      />
                    </View>
                  ) : (
                    <Image
                      style={[styles.RightImgeStyle, { height: 25, width: 25 }]}
                      source={require("../../../Assets/cart_delete_icon.png")}
                      tintColor={YELLOW_COLOR_CODE}
                    />
                  )}
                  <Text style={styles.OutDoorSeatingTxt}>Street Parking</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.UpdateOptions}>
                  {props?.shopDetail?.dogs_allowed === 1 ? (
                    <View style={{}}>
                      <Image
                        style={styles.RightImgeStyle}
                        source={require("../../../Assets/text_check_icon.png")}
                      />
                    </View>
                  ) : (
                    <Image
                      style={[styles.RightImgeStyle, { height: 25, width: 25 }]}
                      source={require("../../../Assets/cart_delete_icon.png")}
                      tintColor={YELLOW_COLOR_CODE}
                    />
                  )}
                  <Text style={styles.OutDoorSeatingTxt}>Dogs Allowed</Text>
                </View>
                <View style={styles.UpdateOptions}>
                  {props?.shopDetail?.offers_delivery === 1 ? (
                    <View style={{}}>
                      <Image
                        style={styles.RightImgeStyle}
                        source={require("../../../Assets/text_check_icon.png")}
                      />
                    </View>
                  ) : (
                    <Image
                      style={[styles.RightImgeStyle, { height: 25, width: 25 }]}
                      source={require("../../../Assets/cart_delete_icon.png")}
                      tintColor={YELLOW_COLOR_CODE}
                    />
                  )}
                  <Text style={styles.OutDoorSeatingTxt}>Delievery</Text>
                </View>
              </View>
            </View>
            <View style={styles.CovidParaView}>
              <Text style={styles.UpdatedServics}>
                Health & Safety Measures
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.UpdateOptions}>
                  {props?.shopDetail?.masks_required === 1 ? (
                    <View>
                      <Image
                        style={styles.RightImgeStyle}
                        source={require("../../../Assets/text_check_icon.png")}
                      />
                    </View>
                  ) : (
                    <Image
                      style={[styles.RightImgeStyle, { height: 25, width: 25 }]}
                      source={require("../../../Assets/cart_delete_icon.png")}
                      tintColor={YELLOW_COLOR_CODE}
                    />
                  )}
                  <View>
                    <Text style={styles.OutDoorSeatingTxt}>Masks required</Text>
                    {/* <Text style={styles.Accordingusers}>According to 1 users</Text> */}
                  </View>
                </View>

                <View style={styles.UpdateOptions}>
                  {props?.shopDetail?.staff_wears_gloves === 1 ? (
                    <View>
                      <Image
                        style={styles.RightImgeStyle}
                        source={require("../../../Assets/text_check_icon.png")}
                      />
                    </View>
                  ) : (
                    <Image
                      style={[styles.RightImgeStyle, { height: 25, width: 25 }]}
                      source={require("../../../Assets/cart_delete_icon.png")}
                      tintColor={YELLOW_COLOR_CODE}
                    />
                  )}
                  <View>
                    <Text style={styles.OutDoorSeatingTxt}>
                      Staff wears gloves
                    </Text>
                    {/* <Text style={styles.Accordingusers}>According to 3 users</Text> */}
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                {/* <View style={styles.UpdateOptions}>
                                    {props?.shopDetail?.masks_required === 1 ?
                                        <View>
                                            <Image style={styles.RightImgeStyle} source={require('../../../Assets/text_check_icon.png')} />
                                        </View>
                                        :
                                        <Image
                                            style={[styles.RightImgeStyle, { height: 25, width: 25 }]}
                                            source={require('../../../Assets/cart_delete_icon.png')}
                                            tintColor={YELLOW_COLOR_CODE} />
                                    }
                                    <View>
                                        <Text style={styles.OutDoorSeatingTxt}>Masks required</Text>
                                        <Text style={styles.Accordingusers}>According to 1 users</Text>
                                    </View>
                                </View>
                                 */}
              </View>
            </View>
          </View>
          <View style={styles.LocationContainer}>
            <View style={styles.LocationTxtView}>
              <Text style={styles.CovidMainTxt}>Location & Hours</Text>
              <TouchableOpacity
                onPress={() =>
                  props.handleGetDirections(
                    props?.shopDetail?.latitude,
                    props?.shopDetail?.longitude
                  )
                }
              >
                <Text style={styles.ViewFullmenu}>Get Directions</Text>
              </TouchableOpacity>
            </View>
            <MapView
              showsUserLocation
              style={{ width: "95%", height: 190, alignSelf: "center" }}
              provider={PROVIDER_GOOGLE}
              initialRegion={initialRegion}
            >
              <Marker
                coordinate={coordinate}
                // image={require('../../../Assets/login_logo.png')}
                title={props?.shopDetail?.business_name}
                // description={marker.description}
              >
                <Image
                  source={require("../../../Assets/abby_pages_map_icon.png")}
                  style={{ height: 50, width: 50 }}
                  resizeMode="contain"
                  resizeMethod="auto"
                />
              </Marker>
            </MapView>

            <Text style={styles.ChoosedLocationTxt}>
              {props?.shopDetail?.address}
            </Text>
            {props?.shopDetail?.business_service_time?.length > 0 && (
              <View style={styles.DaysContainer}>
                <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  data={props?.shopDetail?.business_service_time}
                  renderItem={({ item, index }) => (
                    <View key={index} style={{ flexDirection: "row" }}>
                      <Text style={styles.DaysMainText}>{item.day} </Text>
                      <Text style={styles.DaysMainText}> {item.open_time}</Text>
                      <Text style={styles.DaysMainText}>
                        {" "}
                        {item.close_time}
                      </Text>
                    </View>
                  )}
                />
              </View>
            )}
            {/*  <View style={styles.EditBusinessInfoView}>
                                <Image source={require('../../../Assets/edit_pencil_icon.png')} />
                                <Text style={styles.EditTextStyle}> Edit bussiness info</Text>
                            </View>
                        </View> */}
          </View>
          {props?.shopDetail?.image?.length > 0 && (
            <View>
              <Text style={[styles.CovidMainTxt, { paddingLeft: 10 }]}>
                Photos Gallery
              </Text>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={props?.shopDetail?.image}
                numColumns={2}
                contentContainerStyle={{ alignItems: "center" }}
                renderItem={({ item, index }) =>
                  props._handlePhotos(item, index)
                }
              />
            </View>
          )}
          <View style={styles.AboutBusinessContain}>
            <View style={styles.FlexDirectnStyle}>
              <Text style={styles.CovidMainTxt}>About the Business</Text>
            </View>
            <View style={styles.UserContainer}>
              <Image
                style={styles.UserProfileStyle}
                source={{ uri: props?.shopDetail?.logo }}
              />
              <View style={{ paddingLeft: 20 }}>
                <Text style={styles.CovidMainTxt}>
                  {props?.shopDetail?.business_user_name}
                </Text>
                <Text style={styles.PostDateText}>Business Owner</Text>
              </View>
            </View>
            <View style={styles.CovidParaView}>
              <Text style={styles.ReviewFullView}>
                {props?.shopDetail?.about_business}
              </Text>
            </View>
          </View>
          <View style={styles.ReviewFullList}>
            <View style={[styles.FlexDirectnStyle, { paddingTop: 0 }]}>
              <Text style={styles.CovidMainTxt}>Review & Ratings</Text>
              <TouchableOpacity
                onPress={() => props.setReviewModal(!props.reviewModal)}
              >
                <Text style={styles.WriteReviewTxt}>Write a Review</Text>
              </TouchableOpacity>
            </View>
            {props.reviewModal && (
              <View>
                <Rating
                  onFinishRating={(rating) =>
                    props.setBusinessReviewRating(rating)
                  }
                  // onFinishRating={(rating) => props.setReviewData({
                  //     ...props.reviewData,
                  //     business_rating: rating
                  // })}
                  style={styles.ratingConVw}
                  imageSize={30}
                />
                <Input
                  onChangeText={(title) =>
                    props.setReviewData({
                      ...props.reviewData,
                      title: title,
                    })
                  }
                  value={props.reviewData.title}
                  secureTextEntry={false}
                  placeholder="Subject"
                  InputType="withScroll"
                />
                <Input
                  onChangeText={(description) =>
                    props.setReviewData({
                      ...props.reviewData,
                      description: description,
                    })
                  }
                  value={props.reviewData.description}
                  secureTextEntry={false}
                  placeholder="Description"
                  InputType="withScroll"
                  multiline={true}
                />
                <Button
                  style={{ height: 50, paddingVertical: 3 }}
                  buttonText="Submit"
                  buttonLabelStyle={styles.ButtonLabel}
                  onPress={() => props.onSubmitReviewData()}
                />
              </View>
            )}
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={props?.shopDetail?.business_review}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => props._handleReview(item, index)}
            />
            {props?.shopDetail?.recommended_business && (
              <>
                <Text style={styles.relatedItemsTxt}>Related Shops</Text>
                <View style={styles.relatedItems}>
                  <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    contentContainerStyle={{ flexGrow: 1 }}
                  >
                    {props?.shopDetail?.recommended_business.map((item) => {
                      return (
                        <TouchableOpacity
                          onPress={() => props.onPressShop(item)}
                          style={styles.MainConatiner}
                        >
                          <View>
                            <Image
                              style={styles.MainImgeStyle}
                              resizeMode="contain"
                              source={{ uri: item.logo }}
                            />
                          </View>
                          <View style={styles.MainConatinerView}>
                            <View style={styles.InformationView}>
                              <View style={{ flex: 5 }}>
                                <Text style={styles.MainServiceName}>
                                  {item.business_name}
                                </Text>
                                <View style={styles.RatingVw}>
                                  <View style={styles.RatingStyles}>
                                    <Text style={styles.RatingStylesTxt}>
                                      5.0
                                    </Text>
                                  </View>
                                  <Text
                                    numberOfLines={1}
                                    style={styles.RatingTextMain}
                                  >
                                    {item.rating} ratings
                                  </Text>
                                  <Text
                                    numberOfLines={1}
                                    style={styles.viewText}
                                  >
                                    Views {item.views}
                                  </Text>
                                </View>
                              </View>
                            </View>
                            {item.business_service_category ? (
                              <Text
                                numberOfLines={2}
                                style={[
                                  styles.AddressTextStyles,
                                  { paddingRight: 5 },
                                ]}
                              >
                                {item.business_service_category}
                              </Text>
                            ) : null}
                            {item.login_status === 1 ? (
                              <Text numberOfLines={2} style={styles.statusTxt}>
                                Open Now
                              </Text>
                            ) : (
                              <Text
                                numberOfLines={2}
                                style={[
                                  styles.statusTxt,
                                  {
                                    color: LIGHT_RED_COLOR_CODE,
                                  },
                                ]}
                              >
                                Close Now
                              </Text>
                            )}
                            <Text style={styles.addressTxt}>
                              {item.address}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                </View>
              </>
            )}
          </View>
          <Dialog
            visible={props.DialogVisible}
            width={0.8}
            useNativeDriver={true}
            dialogAnimation={new SlideAnimation({ slideFrom: "bottom" })}
            onTouchOutside={() => {
              props.setDialogVisible(false);
            }}
            footer={
              <TouchableOpacity
                onPress={() => props.setDialogVisible(false)}
                style={styles.MainBtnTouchable}
              >
                <Button
                  style={{ height: 50, paddingVertical: 3 }}
                  buttonText="Submit"
                  buttonLabelStyle={styles.ButtonLabel}
                  onPress={() => props.onPressSubmit()}
                />
              </TouchableOpacity>
            }
          >
            <DialogContent>
              <View style={styles.MainContent}>
                <TouchableOpacity
                  onPress={() => props.setDialogVisible(false)}
                  style={styles.ArrowTouchable}
                >
                  <Image
                    source={require("../../../Assets/cart_delete_icon.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.PleaseEnterTxt}>
                  Please enter your pincode
                </Text>
                <TextInput
                  style={styles.txtInputStyle}
                  placeholder={"Pincode"}
                />
              </View>
            </DialogContent>
          </Dialog>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ShopDetail;
