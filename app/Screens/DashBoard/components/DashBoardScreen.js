import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import CommonStyles from "../../../Utils/CommonStyles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  GREY_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import { Images } from "../../../Utils/images";

const DashBoardScreen = (props) => {
  const openDeliveryObj = {
    business_type: 1,
    category_name: "Open Delivery",
    description: null,
    id: "",
    image: "no_image.png",
    is_both: 1,
    is_show: 1,
    main_parent_id: "",
    parents_id: "",
    status: 1,
    option: "1",
    selectOption: "1",
  };
  const reservationsObj = {
    business_type: 1,
    category_name: "Reservations",
    description: null,
    id: "",
    image: "no_image.png",
    is_both: 1,
    is_show: 1,
    main_parent_id: "",
    parents_id: "",
    status: 1,
    option: "2",
    selectOption: "2",
  };
  const [moreShow, setMoreShow] = useState(4);
  const handleShowMore = () => {
    if (moreShow === props?.newActivity?.recent_activity.length) {
      setMoreShow(4);
    } else {
      setMoreShow(props?.newActivity?.recent_activity.length);
    }
  };
  const SubCategories = () => {
    return (
      <>
        {props.subCatType === 1 || props.subCatType === 3 ? (
          <FlatList
            data={props.subCatData}
            contentContainerStyle={styles.subCatVw}
            ListHeaderComponent={() => {
              return (
                <>
                  {props.subCatType === 1 && (
                    <View style={styles.subCatVw}>
                      <TouchableOpacity
                        onPress={() => props.handleNavTo(openDeliveryObj)}
                        style={styles.subCatCon}
                      >
                        <Text style={styles.subCatTxt}>Open Delivery</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => props.handleNavTo(reservationsObj)}
                        style={styles.subCatCon}
                      >
                        <Text style={styles.subCatTxt}>Reservations</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </>
              );
            }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => props.handleNavTo(item, index)}
                  style={styles.subCatCon}
                >
                  <Text style={styles.subCatTxt}>{item.category_name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <View>
            {props.subCatType === 2 ? (
              <>
                <TouchableOpacity
                  onPress={() => props.handleNavTo("findJob")}
                  style={styles.subCatConTwo}
                >
                  <Text style={styles.subCatTwoTxt}>Find Job</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => props.handleNavTo("toBusiness")}
                  style={styles.subCatConTwo}
                >
                  <Text style={styles.subCatTwoTxt}>Post Jobs</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => props.handleNavTo("resumeUpload")}
                  style={styles.subCatConTwo}
                >
                  <Text style={styles.subCatTwoTxt}>Upload Your Resume</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                {props.subCatType === 4 ? (
                  <>
                    <TouchableOpacity
                      onPress={() => props.handleNavTo("findEvent")}
                      style={styles.subCatConTwo}
                    >
                      <Text style={styles.subCatTwoTxt}>Find Event</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => props.handleNavTo("toBusiness")}
                      style={styles.subCatConTwo}
                    >
                      <Text style={styles.subCatTwoTxt}>Create an Event</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subCatConTwo}>
                      <Text style={styles.subCatTwoTxt}>How it works</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subCatConTwo}>
                      <Text style={styles.subCatTwoTxt}>Pricing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subCatConTwo}>
                      <Text style={styles.subCatTwoTxt}>Featured</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    {props.subCatType === 5 ? (
                      <>
                        <TouchableOpacity
                          onPress={() => props.handleNavTo("shop")}
                          style={styles.subCatConTwo}
                        >
                          <Text style={styles.subCatTwoTxt}>Shop</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => props.handleNavTo("toBusiness")}
                          style={styles.subCatConTwo}
                        >
                          <Text style={styles.subCatTwoTxt}>Sell On ABBY</Text>
                        </TouchableOpacity>
                      </>
                    ) : null}
                  </>
                )}
              </>
            )}
          </View>
        )}
      </>
    );
  };
  return (
    <View style={CommonStyles.container}>
      <Header
        RightImg={null}
        leftImg={Images.DRAWER_IMG}
        HeaderText={""}
        HeaderMiddleImg={Images.BLACK_LOGO}
        type="Drawer"
        logoImg={true}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <ScrollView
        keyboardShouldPersistTaps={"always"}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <ImageBackground
          resizeMode={"stretch"}
          source={Images.EMPLOYESS_IMG}
          style={styles.LocatnSrchCntain}
        >
          <View style={[styles.straightVw, { justifyContent: "space-evenly" }]}>
            <TouchableOpacity
              onPress={() => props.handleNavTo("toBusiness")}
              style={styles.topVwsCon}
            >
              <Text style={styles.topVwsTxt}>For Busines</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.setWriteReview(true)}
              style={styles.topVwsCon}
            >
              <Text style={styles.topVwsTxt}>Write A Review</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => props.onPressSearchBusinessCategory()}
            style={styles.TextInputView}
          >
            {props?.businessCategory?.category_name === "" ? (
              <Text
                style={[
                  styles.TextInputStyle,
                  { paddingVertical: 12, color: GREY_COLOR_CODE },
                ]}
              >
                Eg: food, service, barber, hotel
              </Text>
            ) : (
              <Text style={[styles.TextInputStyle, { paddingVertical: 12 }]}>
                {props?.businessCategory?.category_name}
              </Text>
            )}
            <Image style={styles.TextInputImge} source={Images.SEARCH_IMG} />
          </TouchableOpacity>
          <View style={styles.TextInputView}>
            <GooglePlacesAutocomplete
              placeholder="Street Address"
              fetchDetails={true}
              onPress={(data, details = null) => {
                props.setLocation({
                  ...props.location,
                  address: details.formatted_address,
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                });
              }}
              textInputProps={{
                placeholderTextColor: GREY_COLOR_CODE,
                onChangeText: (address) => {
                  props.setLocation({
                    ...props.location,
                    address: address,
                  });
                },
                value: props.location.address,
              }}
              value={props.location.address}
              query={{
                key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
                language: "en",
              }}
              styles={styles.addressVw}
              minLength={2}
              autoFocus={false}
              returnKeyType={"default"}
            />
            <Image
              style={styles.TextInputImge}
              resizeMode={"contain"}
              source={Images.LOCATION_IMG}
            />
          </View>
          <Button
            buttonText="Search"
            buttonLabelStyle={styles.SearchTxtStyle}
            style={styles.SearchBtnStyle}
            onPress={() => props.onPressSearch()}
          />
        </ImageBackground>
        <View style={styles.OptionsConatin}>
          <View style={styles.MainOptinsView}>
            <TouchableOpacity
              onPress={() => props.onPressRestro()}
              style={styles.rowVw}
            >
              <View style={styles.OptnsImgContain}>
                <Image source={Images.RESTO_LIST_IMG} />
              </View>
              <Text style={styles.OptnsMainText}>Restaurant</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.handleSubItems(1)}
              style={styles.OptnsImgContain}
            >
              <Image
                style={styles.OptnsMainImg}
                source={
                  props.subCatType === 1
                    ? Images.ARROW_UP_IMG
                    : Images.ARROW_DOWN_IMG
                }
              />
            </TouchableOpacity>
          </View>
          {props.subCatType === 1 ? <SubCategories /> : null}
          <View style={styles.MainOptinsView}>
            <TouchableOpacity
              onPress={() => props.onPressJob()}
              style={styles.rowVw}
            >
              <View style={styles.OptnsImgContain}>
                <Image source={Images.JOB_LIST_IMG} />
              </View>
              <Text style={styles.OptnsMainText}>Job</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.handleSubItems(2)}
              style={styles.OptnsImgContain}
            >
              <Image
                style={styles.OptnsMainImg}
                source={
                  props.subCatType === 2
                    ? Images.ARROW_UP_IMG
                    : Images.ARROW_DOWN_IMG
                }
              />
            </TouchableOpacity>
          </View>
          {props.subCatType === 2 ? <SubCategories /> : null}
          <View style={styles.MainOptinsView}>
            <TouchableOpacity
              onPress={() => props.onPressEvents()}
              style={styles.rowVw}
            >
              <View style={styles.OptnsImgContain}>
                <Image source={Images.EVENT_LIST_IMG} />
              </View>
              <Text style={styles.OptnsMainText}>Event</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.handleSubItems(4)}
              style={styles.OptnsImgContain}
            >
              <Image
                style={styles.OptnsMainImg}
                source={
                  props.subCatType === 4
                    ? Images.ARROW_UP_IMG
                    : Images.ARROW_DOWN_IMG
                }
              />
            </TouchableOpacity>
          </View>
          {props.subCatType === 4 ? <SubCategories /> : null}
          <View style={styles.MainOptinsView}>
            <TouchableOpacity
              onPress={() => props.onPressShopping()}
              style={styles.rowVw}
            >
              <View style={styles.OptnsImgContain}>
                <Image source={Images.SHOPP_LIST_IMG} />
              </View>
              <Text style={styles.OptnsMainText}>Marketplace</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.handleSubItems(5)}
              style={styles.OptnsImgContain}
            >
              <Image
                style={styles.OptnsMainImg}
                source={
                  props.subCatType === 5
                    ? Images.ARROW_UP_IMG
                    : Images.ARROW_DOWN_IMG
                }
              />
            </TouchableOpacity>
          </View>
          {props.subCatType === 5 ? <SubCategories /> : null}
          <View style={styles.MainOptinsView}>
            <TouchableOpacity
              onPress={() => props.onPressProvider()}
              style={styles.rowVw}
            >
              <View style={styles.OptnsImgContain}>
                <Image source={Images.SERVICE_LIST_IMG} />
              </View>
              <Text style={styles.OptnsMainText}>More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.handleSubItems(3)}
              style={styles.OptnsImgContain}
            >
              <Image
                style={styles.OptnsMainImg}
                source={
                  props.subCatType === 3
                    ? Images.ARROW_UP_IMG
                    : Images.ARROW_DOWN_IMG
                }
              />
            </TouchableOpacity>
          </View>
          {props.subCatType === 3 ? <SubCategories /> : null}
          <View style={styles.otherConVw}>
            <Text style={styles.titlesTxt}>Our Directory</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {props?.directory?.ourDirectory?.map((item) => {
                return (
                  <TouchableOpacity
                    onPress={() => props.handleDirectory(item.type)}
                    style={[
                      styles.moreItemsCon,
                      {
                        width: null,
                        borderColor:
                          props.selectedType === item.type
                            ? YELLOW_COLOR_CODE
                            : GREY_COLOR_CODE,
                        marginLeft: 8,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.directoryTypTxt,
                        {
                          color:
                            props.selectedType === item.type
                              ? YELLOW_COLOR_CODE
                              : GREY_COLOR_CODE,
                        },
                      ]}
                    >
                      {item.search_type.toUpperCase()}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {props?.directory?.top_business?.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={[styles.moreItemsCon, { width: 200 }]}
                  >
                    <Image
                      source={{
                        uri: item.logo,
                      }}
                      style={styles.moreItemsImgs}
                    />
                    <Text style={[styles.moreItemsTxt, { width: null }]}>
                      {item.business_name}
                    </Text>
                    <Text>{item.business_phone}</Text>
                    <View style={styles.rowVw}>
                      <View style={styles.smallVw}>
                        <Text style={{ color: WHITE_COLOR_CODE }}>5.0</Text>
                      </View>
                      <Text style={styles.ratingTxt}>
                        {Number(item.rating).toFixed(2)} rating
                      </Text>
                    </View>
                    {item.address_first && (
                      <View style={styles.rowVw}>
                        <Image
                          resizeMode={"contain"}
                          style={{ width: 20, height: 20 }}
                          source={Images.LOCATION_IMG}
                        />
                        <Text numberOfLines={2} style={styles.smallSizeTxt}>
                          {item.address_first}
                        </Text>
                      </View>
                    )}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.otherConVw}>
            <Text style={styles.titlesTxt}>Recent Activities</Text>
            <View style={styles.moreItemsVw}>
              {props?.newActivity?.recent_activity?.map((item, index) => {
                return (
                  <>
                    {index < moreShow && (
                      <TouchableOpacity
                        style={[styles.moreItemsCon, { width: "47%" }]}
                      >
                        <Image
                          source={{
                            uri:
                              props?.newActivity?.product_url +
                              item.product_image,
                          }}
                          style={styles.moreItemsImgs}
                        />
                        <Text numberOfLines={1} style={styles.smallSizeTxt}>
                          {item.product_name}
                        </Text>
                        <View style={[styles.rowVw, styles.moreItemsTxtVw]}>
                          <Image
                            source={{
                              uri:
                                props?.newActivity?.base_url +
                                item.profile_image,
                            }}
                            style={styles.smallSizeImg}
                          />
                          <Text style={styles.moreItemsTxt}>
                            {item.business_name}
                          </Text>
                        </View>
                        <Text
                          style={[
                            styles.smallSizeTxt,
                            { alignSelf: "flex-start" },
                          ]}
                        >
                          {item.description}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </>
                );
              })}
            </View>
            <TouchableOpacity onPress={() => handleShowMore(1)}>
              <Text style={styles.otherTxt}>
                {moreShow === 4 ? "Show More Activity" : "Show Less Activity"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="fade"
        hardwareAccelerated={true}
        transparent={true}
        visible={props.businessCategoryModal}
        onRequestClose={() => {
          props.setBusinessCategoryModal(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.TouchableFlse}
              onPress={() => props.setBusinessCategoryModal(false)}
            >
              <Image
                style={{ width: 30, height: 30, tintColor: BLACK_COLOR_CODE }}
                source={Images.CANCEL_IMG}
              />
            </TouchableOpacity>
            <View style={{ width: "100%" }}>
              <TextInput
                placeholder={"Search"}
                onChangeText={(text) => props.SearchBusinessCategory(text)}
                style={styles.TxtInptStyle}
              />
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              data={props.dashBoardDetail}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={index}
                  style={styles.MainCntrySlctTouchble}
                  onPress={() => {
                    props.setBusinessCategory(item),
                      props.setBusinessCategoryModal(false);
                  }}
                >
                  <Text>{item.category_name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
      <Modal
        animationType={"none"}
        hardwareAccelerated={true}
        visible={props.writeReview}
        onRequestClose={() => {
          props.setWriteReview(false);
        }}
      >
        <View style={CommonStyles.container}>
          <Header
            RightImg={null}
            HeaderText={"Find Business"}
            MainHeadStyle={{ color: WHITE_COLOR_CODE }}
            tintColor={WHITE_COLOR_CODE}
            mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
            onPressBackFun={() => props.setWriteReview(false)}
          />
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View
              style={[styles.writeReviewVw, { flex: 0, backgroundColor: null }]}
            >
              <Text style={styles.bigTitleTxt}>Find a business to review</Text>
              <View style={styles.straightVw}>
                <Image
                  style={styles.starImg}
                  source={Images.COMPANY_REVIEW_IMG}
                />
                <Text
                  numberOfLines={2}
                  style={[
                    styles.subCatTxt,
                    { width: "85%", color: YELLOW_COLOR_CODE },
                  ]}
                >
                  Review anything from your favorite patio spot to your local
                  flower shop.
                </Text>
              </View>
            </View>
            <ImageBackground
              source={Images.ANALYSTIC_DATA}
              resizeMode={"contain"}
              style={[styles.writeReviewVw, { flex: 1 }]}
            >
              <TouchableOpacity style={styles.reviewCont}>
                <Image source={Images.SERVICE_LIST_IMG} />
                <Text style={styles.reviewContTxt}>
                  Try lunch,yoga studio,plumber
                </Text>
              </TouchableOpacity>
              <View style={styles.reviewCont}>
                <Image source={Images.LOCATION_IMG} />
                <Text style={styles.reviewContTxt}>Search places..</Text>
              </View>
            </ImageBackground>
            <View style={[styles.writeReviewVw, { flex: 1 }]}>
              <Text style={styles.bigTitleTxt}>
                Visited one of these places recently?
              </Text>
              <View style={{ alignItems: "center" }}>
                <Image source={Images.SATISFACTION_IMG} />
                <Text
                  numberOfLines={2}
                  style={[styles.subCatTxt, { width: "85%" }]}
                >
                  We’re out of suggestions for you right now. Keep on using
                  AbbyPages and we’ll have some more for you soon.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};
export default DashBoardScreen;
