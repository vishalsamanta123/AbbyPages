import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
  Platform
} from "react-native";
import moment from "moment";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Rating } from "react-native-ratings";
import Input from "../../../Components/Input";
import styles from "./styles";
import Button from "../../../Components/Button";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  LIGHT_RED_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
const ServiceProviderDetailsScreen = (props) => {
  const initialRegion = {
    latitude: props.serviceDetail.latitude
      ? parseInt(props.serviceDetail.latitude)
      : 22.72448,
    longitude: props.serviceDetail.longitude
      ? parseInt(props.serviceDetail.longitude)
      : 75.889267,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };
  const coordinate = {
    latitude: props.serviceDetail.latitude
      ? parseInt(props.serviceDetail.latitude)
      : 22.72448,
    longitude: props.serviceDetail.longitude
      ? parseInt(props.serviceDetail.longitude)
      : 75.889267,
  };
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? 'padding' : null}
    style={[CommonStyles.container]}>
      <Header
        HeaderText="Service Provider Details "
        RightImg={null}
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <View style={styles.mainfrsrvwe}>
            <Text style={styles.taichitxt}>
              {props.serviceDetail.business_name}{" "}
            </Text>
            <View style={styles.addressvwe}>
              <Text style={styles.addresstxt}>
                {props.serviceDetail &&
                  props.serviceDetail.business_star === 0 &&
                  "$ | "}
                {props.serviceDetail &&
                  props.serviceDetail.business_star === 1 &&
                  "$  | "}
                {props.serviceDetail &&
                  props.serviceDetail.business_star === 2 &&
                  "$$  | "}
                {props.serviceDetail &&
                  props.serviceDetail.business_star === 3 &&
                  "$$$  | "}
                {props.serviceDetail &&
                  props.serviceDetail.business_star === 4 &&
                  "$$$$  | "}
                {props.serviceDetail &&
                  props.serviceDetail.business_star === 5 &&
                  "$$$$$  | "}
                {props.serviceDetail &&
                  props.serviceDetail.business_service_category}
              </Text>
            </View>
            <View style={styles.fourmanvwe}>
              <View style={styles.fivevwe}>
                <Text style={styles.fivevwetxt}> 5.0 </Text>
              </View>
              <Text style={styles.fourratingstxt}>
                {" "}
                {props.serviceDetail && props.serviceDetail.rating} ratings
              </Text>
              <Text style={styles.standinglinetxt}> | </Text>
              <Text style={styles.closedtxt}>
                {" "}
                {props.serviceDetail && props.serviceDetail.login_status === 1
                  ? "Open"
                  : "Closed"}{" "}
              </Text>
              <Text style={styles.timetxt}>
                :{" "}
                {props.serviceDetail &&
                  props.serviceDetail.business_open_time &&
                  props.serviceDetail.business_open_time.open_time + "-"}
                {props.serviceDetail &&
                  props.serviceDetail.business_open_time &&
                  props.serviceDetail.business_open_time.close_time}{" "}
              </Text>
            </View>
            <Button
              buttonText="Request Quote"
              style={styles.requestQusVw}
              buttonLabelStyle={styles.startedbtntxt}
              onPress={() => props.onPressQuotes()}
            />
          </View>
          <View style={styles.centermainvwe}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => props.setAddPhotoModal(true)}
              style={styles.addphotovwe}
            >
              <Image source={require("../../../Assets/add_photo_icon.png")} />
              <Text style={styles.addtxt}>Add Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.shareTo();
              }}
              style={styles.addphotovwe}
            >
              <Image source={require("../../../Assets/share_icon.png")} />
              <Text style={styles.addtxt}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.saveResto();
              }}
              style={styles.sharephotovwe}
            >
              <Image
                style={{
                  tintColor:
                    props?.serviceDetail?.user_like > 0
                      ? YELLOW_COLOR_CODE
                      : null,
                }}
                source={require("../../../Assets/save_icon.png")}
              />
              <Text style={styles.addtxt}>Save</Text>
            </TouchableOpacity>
          </View>
          {/* <FlatList
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            // data={props?.serviceDetail?.recommended_business}
            data={props.handleOptions}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => props._handleOptions(item, index)}
          /> */}
          <View style={styles.dinevwe}>
            <View style={styles.coviduudatevew}>
              <Text style={styles.coviduudatetxt}>COVID-19 Updates</Text>
              {/* <View style={styles.editvwe}>
                                <Text style={styles.edittxt}>Edit </Text>
                                <Image style={{ height: 13, width: 13 }} source={require('../../../Assets/edit_pencil_icon.png')} />
                            </View> */}
            </View>
            <Text style={styles.dinetxt}>
              "Service is available with limited workers now Service also
              available through various Service or direct order through phone
              call & messages!"
            </Text>
            <View style={styles.postedvwe}>
              {/* <Text style={styles.posttetxt}>Posted on August 5, 2020</Text> */}
            </View>
            <View style={styles.healthyvwe}>
              <Text style={styles.healthtxt}>Health & Safety Measures</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 15 }}>
              <View style={styles.saveimg}>
                <View style={{ justifyContent: "center" }}>
                  {props.serviceDetail &&
                  props.serviceDetail.staff_wears_gloves == 1 ? (
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
                </View>
                <View style={{ paddingLeft: 8 }}>
                  <Text style={styles.stafftxt}>Staff wears gloves</Text>
                  <Text style={styles.accodingvwe}>Accoding to users</Text>
                </View>
              </View>
              <View style={[styles.saveimg, { paddingLeft: 10 }]}>
                <View style={{ justifyContent: "center" }}>
                  {props.serviceDetail &&
                  props.serviceDetail.masks_required == 1 ? (
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
                </View>
                <View style={{ paddingLeft: 8 }}>
                  <Text style={styles.stafftxt}>masks required</Text>
                  <Text style={styles.accodingvwe}>Accoding to users</Text>
                </View>
              </View>
            </View>
          </View>
          {props.serviceDetail.admin_approved == 1 && (
            <View style={styles.verfiedview}>
              <View style={styles.profileview}>
                <View style={styles.profileanotherview}>
                  <Image source={require("../../../Assets/verified_img.png")} />
                </View>
                <View style={styles.vervwe}>
                  <Text style={styles.VefiedLiesetxt}>Verified License </Text>
                  <Text style={styles.abbytxt}>
                    Abby confirmed a business or employee lincense.{" "}
                  </Text>
                </View>
              </View>
              <Button
                buttonText="See License Information"
                style={{ marginTop: "5%", width: "100%" }}
                buttonLabelStyle={styles.startedbtntxt}
                onPress={() => props.licenseInfo()}
              />
            </View>
          )}
          <View style={styles.tenYearbussinessvwe}>
            <Text style={styles.hightxt}>Highlights from the Business</Text>
            <View style={styles.tenanothervwe}>
              <Image source={require("../../../Assets/highlight_icon_1.png")} />
              <View style={styles.allpostjobsvwe}>
                <Text style={styles.allpostjobstxt}>
                  {moment(
                    props.serviceDetail.create_date &&
                      props.serviceDetail.create_date
                  )
                    .startOf("MM/DD/YYYY")
                    .fromNow() + " "}
                  in business{" "}
                </Text>
              </View>
            </View>
            <View style={styles.tenanothervwe}>
              <Image source={require("../../../Assets/highlight_icon_2.png")} />
              <View style={styles.allpostjobsvwe}>
                <Text style={styles.allpostjobstxt}>
                  Family-owened & oprated{" "}
                </Text>
              </View>
            </View>
            <View style={styles.tenanothervwe}>
              <Image source={require("../../../Assets/highlight_icon_3.png")} />
              <View style={styles.allpostjobsvwe}>
                <Text style={styles.allpostjobstxt}>
                  {" "}
                  Consulations available
                </Text>
              </View>
            </View>
            <View style={styles.tenanothervwe}>
              <Image source={require("../../../Assets/highlight_icon_4.png")} />
              <View style={styles.allpostjobsvwe}>
                <Text style={styles.allpostjobstxt}>Discounts available</Text>
              </View>
            </View>
            <View style={styles.tenanothervwe}>
              <Image source={require("../../../Assets/highlight_icon_5.png")} />
              <View style={styles.allpostjobsvwe}>
                <Text style={styles.allpostjobstxt}>
                  {" "}
                  Parts & labor guarannteed{" "}
                </Text>
              </View>
            </View>
            <View style={styles.tenanothervwe}>
              <Image source={require("../../../Assets/highlight_icon_6.png")} />
              <View style={styles.allpostjobsvwe}>
                <Text style={styles.allpostjobstxt}> LGBTQ friendly </Text>
              </View>
            </View>
          </View>
          {props?.serviceDetail?.image && (
            <View style={styles.photoview}>
              <View style={styles.photosecview}>
                <Text style={styles.pandvtxt}>Photos and Videos</Text>
              </View>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                data={props?.serviceDetail?.image}
                renderItem={({ item, index }) =>
                  props.handlePhotos(item, index)
                }
              />
            </View>
          )}
          <View style={styles.serviceview}>
            <View style={styles.sirsecview}>
              <Text style={styles.coviduudatetxt}>Services Offered</Text>
              <Text style={styles.sixmore}>
                {props?.serviceDetail?.business_category?.length} Services
              </Text>
            </View>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={props?.serviceDetail?.business_category}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.serceainview}>
                    <Image
                      style={styles.seviceIMG}
                      source={require("../../../Assets/musical-sign-of-one-dots.png")}
                    />
                    <Text style={styles.srcmntxt}>{item.category_name}</Text>
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.locationview}>
            <View style={styles.locationsec}>
              <Text style={styles.locktxt}>Location & Hours </Text>
              <TouchableOpacity
                onPress={() =>
                  props.handleGetDirections(
                    props.serviceDetail && props.serviceDetail.latitude,
                    props.serviceDetail && props.serviceDetail.longitude
                  )
                }
              >
                <Text style={styles.getlocktext}>Get Directions</Text>
              </TouchableOpacity>
            </View>
            <MapView
              showsUserLocation
              style={styles.googlebigimg}
              provider={PROVIDER_GOOGLE}
              initialRegion={initialRegion}
            >
              <Marker
                coordinate={coordinate}
                // image={require('../../../Assets/login_logo.png')}
                title={props.serviceDetail && props.serviceDetail.business_name}
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
            <View style={styles.twoaddvwe}>
              <Text style={styles.twotxt}>
                {props.serviceDetail && props.serviceDetail.address}
              </Text>
            </View>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={
                props.serviceDetail.business_service_time &&
                props.serviceDetail.business_service_time
              }
              renderItem={({ item, index }) => (
                <View
                  key={index}
                  style={[styles.mondaysecvwe, { flexDirection: "row" }]}
                >
                  <Text style={styles.timepmtxt}>{item.day} </Text>
                  <Text style={styles.timepmtxt}> {item.open_time}</Text>
                  <Text style={styles.timepmtxt}> {item.close_time}</Text>
                </View>
              )}
            />
            {/* <View style={styles.editwiewwew}>
                            <Image style={styles.pencilediticon} source={require('../../../Assets/edit_pencil_icon.png')} />
                            <Text style={styles.penciltxtedit}>Edit Business info</Text>
                        </View> */}
          </View>
          <View style={styles.aboutbussvwe}>
            <View style={styles.aboutview}>
              <Text style={styles.abouttxt}>About the Business</Text>
              {/* <Button
                                buttonText="Write A Review"
                                style={styles.revieewbtn}
                                onPress={() => setReviewModal(true)}
                                buttonLabelStyle={styles.buttonLabelStyle}
                            /> */}
            </View>
            <View style={styles.owenwerview}>
              <Image
                style={styles.bussinessimg}
                source={{
                  uri: props.serviceDetail && props.serviceDetail.logo,
                }}
              />
              <View style={styles.steveview}>
                <Text style={styles.stevetxt}>
                  {props.serviceDetail &&
                    props.serviceDetail.business_user_name}
                </Text>
                <Text style={styles.bussinessvwe}>Business Owner</Text>
              </View>
            </View>
            {props?.serviceDetail?.about_business && (
              <View style={styles.longbussinessvwe}>
                <Text style={styles.longbussinesstxt}>
                  {props.serviceDetail && props?.serviceDetail?.about_business}
                </Text>
              </View>
            )}
          </View>
          <View style={styles.reviewview}>
            <View style={styles.aboutview}>
              <Text style={styles.abouttxt}>Review & Ratings</Text>
              <Button
                buttonText="Write A Review"
                style={styles.revieewbtn}
                onPress={() => props.setReviewModal(!props.reviewModal)}
                buttonLabelStyle={styles.buttonLabelStyle}
              />
            </View>
            {/* <Text style={styles.reviewtxt}> </Text> */}
            {props.reviewModal && props.reviewModal === true && (
              <View>
                <Rating
                  style={{
                    paddingVertical: 10,
                    paddingLeft: 20,
                    alignSelf: "flex-start",
                  }}
                  onFinishRating={(rating) =>
                    props.setBusinessReviewRating(rating)
                  }
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
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              data={
                props.serviceDetail &&
                props.serviceDetail.business_review &&
                props.serviceDetail.business_review
              }
              renderItem={({ item, index }) => props._handleReview(item, index)}
            />
          </View>
          {props?.serviceDetail?.recommended_business && (
            <>
              <Text style={styles.relatedItemsTxt}>Related Services</Text>
              <View style={styles.relatedItems}>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  contentContainerStyle={{ flexGrow: 1 }}
                >
                  {props?.serviceDetail?.recommended_business.map((item) => {
                    return (
                      <TouchableOpacity
                        onPress={() => props.onPressService(item)}
                        style={styles.MainConatiner}
                      >
                        <View>
                          <Image
                            style={styles.MainImgeStyle}
                            resizeMode="contain"
                            source={{
                              uri: item.logo,
                            }}
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
                                <Text numberOfLines={1} style={styles.viewText}>
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
                          <Text style={styles.addressTxt}>{item.address}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            </>
          )}
        </ScrollView>
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
      </View>
    </KeyboardAvoidingView>
  );
};
export default ServiceProviderDetailsScreen;
//438
