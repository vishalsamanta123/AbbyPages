import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Linking,
  Platform,
  TextInput,
} from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";
import styles from "./styles";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { COLORS, Constants, FONT_SIZE } from "../../../../../Utils/Constant";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import StarShower from "../../../../../Components/StarShower";
import MoreInfo from "./MoreInfo";
import MainHeader from "../../../../../Components/MainHeader";
import { MainItemsView } from "../../../../../Components/ListItemsView";
import { Images } from "../../../../../Utils/images";
import ScaleText from "../../../../../Components/ScaleText";
import BusinessGallery from "./BusinessGallery";
import moment from "moment";
import Collage from "../../../../../Components/Collage";
import Button from "../../../../../Components/Button";
import { removeHttp } from "../../../../../Utils/Globalfunctions";
import MainButton from "../../../../../Components/MainButton";
import { BusinessDetail } from "../../../../../Components/ShimmerEffect";
import PageScroll from "../../../../../Components/PageScroll";
import { BLACK_ACORN, OUTLINE_ACORN } from "../../../../../Utils/svgImages";

const BusinessPageDetailsView = (props) => {
  const { detailData = {} } = props;
  const [specialIcon, setSpecialIcon] = useState(false);
  useEffect(() => {
    if (specialIcon) {
      setTimeout(async () => {
        setSpecialIcon(false);
      }, 2000);
    }
  }, [specialIcon]);
  function handleGetDirections(lattitude, longitude) {
    if (Platform.OS === "android") {
      const url = `${
        "http://maps.google.com/maps?daddr=" + lattitude + "," + longitude + ""
      }`;
      Linking.canOpenURL(url)
        .then((supported) => {
          if (supported) {
            Linking.openURL(
              "http://maps.google.com/maps?daddr=" +
                lattitude +
                "," +
                longitude +
                ""
            );
          } else {
            alert("Don't know how to go");
          }
        })
        .catch((err) => console.error("An error occurred", err));
    } else {
      Linking.canOpenURL(
        "http://maps.apple.com/maps?daddr=" + lattitude + "," + longitude + ""
      )
        .then((supported) => {
          if (supported) {
            Linking.openURL(
              "http://maps.apple.com/maps?daddr=" +
                lattitude +
                "," +
                longitude +
                ""
            );
          } else {
            alert("Don't know how to go");
          }
        })
        .catch((err) => console.error("An error occurred", err));
    }
  }
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${detailData?.latitude},${detailData?.longitude}&zoom=13&scale=2&size=600x300&maptype=roadmap&markers=scale%3A1%color:red%7Clabel:A%7C28.543707340175,-81.3514976796&format=png&key=AIzaSyCbDx7Lk4eTMzptrQKXZvOPYgEMggrq8o4`;
  const renderPopularDish = (item) => {
    return (
      <TouchableOpacity style={styles.popularCardTouch}>
        <Image source={{ uri: item.image }} style={styles.popularimage} />
        <ScaleText style={styles.popularNameTxt}>{item.item_name}</ScaleText>
        <ScaleText style={styles.popularPrice}>
          Price: ${item.discounted_price}
        </ScaleText>
      </TouchableOpacity>
    );
  };
  const renderBusinessHighlights = (item) => {
    return (
      <View style={styles.highlightsView}>
        <Image source={{ uri: item.icon }} style={styles.highlightsImage} />
        <ScaleText style={styles.highlightsText}>{item.highlights}</ScaleText>
      </View>
    );
  };

  const take_reservation =
    detailData?.amenities && detailData?.amenities?.length > 0
      ? detailData?.amenities
          ?.split(",")
          ?.some((amn) => amn == "Takes Reservations")
      : false;

  const offer_takeout =
    detailData?.amenities && detailData?.amenities?.length > 0
      ? detailData?.amenities
          ?.split(",")
          ?.some((amn) => amn == "Offers Takeout")
      : false;

  const offers_delivery =
    detailData?.amenities && detailData?.amenities?.length > 0
      ? detailData?.amenities
          ?.split(",")
          ?.some((amn) => amn == "Offers Delivery")
      : false;

  const outdoor_seating =
    detailData?.amenities &&
    detailData?.amenities?.length > 0 &&
    detailData?.amenities?.split(",")?.some((amn) => amn == "Outdoor Seating");

  const renderYouMayConsider = (considr) => {
    const pressAction = () => {
      if (considr.ad_button && considr.ad_website) {
        Linking.canOpenURL(considr.ad_website)
          .then((supported) => {
            if (supported) {
              Linking.openURL(considr.ad_website);
            } else {
              alert("Can't open url");
            }
          })
          .catch((err) => console.error("An error occurred", err));
      } else if (considr.ad_button && considr.ad_phone) {
        Linking.openURL(`tel:${considr.ad_phone}`);
      } else if (considr.ad_button && considr.ad_email) {
        Linking.openURL(`mailto:${considr.ad_email}`);
      }
    };
    return (
      <>
        {considr?.goal !== "3" ? (
          <TouchableOpacity
            style={styles.considrVw}
            // onPress={() => props.handleConsiderPress(considr)}
          >
            <View style={CommonStyles.straightCon}>
              <Image
                source={{ uri: considr?.logo }}
                style={styles.considerImage}
              />
              <View style={styles.considerView}>
                <ScaleText style={styles.considrHeadingTxt}>
                  {considr?.business_name}
                </ScaleText>
                <ScaleText style={styles.businessCategoryTxt}>
                  {considr?.business_category}
                </ScaleText>
                <ScaleText style={styles.businessAddressTxt}>
                  {considr?.address}
                </ScaleText>
              </View>
            </View>
            {considr?.text ? (
              <ScaleText style={[styles.businessCategoryTxt, { margin: 5 }]}>
                {considr?.text?.substring(0, 60)}
                {"..."}
              </ScaleText>
            ) : null}
            <TouchableOpacity
              style={styles.considerTouch}
              onPress={() => pressAction()}
            >
              <ScaleText style={styles.considerBtnTxt}>
                {JSON?.parse(considr?.ad_button)?.name}
              </ScaleText>
            </TouchableOpacity>
          </TouchableOpacity>
        ) : (
          <View>
            <TouchableOpacity
              style={styles.considrVw}
              // onPress={() => props.handleConsiderPress(considr)}
            >
              <View style={CommonStyles.straightCon}>
                <Image
                  source={{ uri: considr?.logo }}
                  style={styles.considerImage}
                />
                <View style={styles.considerView}>
                  <ScaleText style={styles.considrHeadingTxt}>
                    {considr?.business_name}
                  </ScaleText>
                  <ScaleText style={styles.businessCategoryTxt}>
                    {considr?.business_category}
                  </ScaleText>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.msgWrap}>
              <View style={styles.msgView}>
                <ScaleText style={styles.msgTxt}>
                  Here goes the question text and for now dummy Text
                </ScaleText>
              </View>
              <View style={styles.msgView}>
                <ScaleText style={styles.msgTxt}>
                  Here goes the question text and for now dummy Text
                </ScaleText>
              </View>
              <View style={styles.msgView}>
                <ScaleText style={styles.msgTxt}>
                  Here goes the question text and for now dummy Text
                </ScaleText>
              </View>
              <View style={styles.inputView}>
                <IconX
                  origin={ICON_TYPE.ENTYPO}
                  name={"chat"}
                  paddingRight={6}
                  size={25}
                />
                <TextInput
                  onChangeText={(e) => console.log(e)}
                  style={styles.inputstyle}
                  placeholder={`message ${considr?.business_name}`}
                />
              </View>
            </View>
          </View>
        )}
      </>
    );
  };

  return (
    <PageScroll
      scrollEnabled={!props?.visible}
      contentContainerStyle={[CommonStyles.otherScrollCon]}
    >
      {props?.visible ? (
        <BusinessDetail type="image" />
      ) : (
        <ImageBackground
          source={{ uri: detailData?.header_image }}
          style={{
            width: Constants.windowWidth,
            height: Constants.Ios ? 280 : 220,
          }}
          resizeMode={"cover"}
        >
          <MainHeader
            backgroundColor={COLORS.TRANSPARENT}
            isSearch={false}
            backIconColor={COLORS.WHITE}
            backTxtColor={COLORS.WHITE}
            loginButton={false}
          />
          <View style={styles.backImgVw}>
            <ScaleText style={styles.mainTxt}>
              {detailData?.business_name}
            </ScaleText>
            <View style={{ width: 132 }}>
              <StarShower
                counts={detailData?.rating ? detailData?.rating?.toString() : 0}
                starHeight={18}
                starWidth={18}
                starsBackColor={COLORS.RGBA}
                ActiveStarColor={COLORS.YELLOW}
                UnActiveStarColor={COLORS.WHITE}
              />
            </View>
            {detailData?.claimed ? (
              <View style={CommonStyles.straightCon}>
                {detailData?.claimed?.toString() === "1" && (
                  <IconX
                    origin={ICON_TYPE.ANT_ICON}
                    name={"checkcircle"}
                    color={COLORS.LIGHT_GREEN}
                    paddingRight={6}
                  />
                )}
                <ScaleText
                  style={[
                    styles.smallTxt,
                    {
                      color: COLORS.LIGHT_GREEN,
                      fontSize: FONT_SIZE.medium,
                    },
                  ]}
                >
                  {detailData?.claimed?.toString() === "1"
                    ? "Claimed"
                    : "UnClaimed"}
                </ScaleText>
              </View>
            ) : null}
          </View>
        </ImageBackground>
      )}
      <View style={styles.mainContainer}>
        {props?.visible ? (
          <BusinessDetail type="category" />
        ) : (
          <>
            {specialIcon ? (
              <View style={[CommonStyles.specialTxtVw, { top: -28, right: 5 }]}>
                <ScaleText style={CommonStyles.specialTxt}>
                  {detailData?.acorn_type ? detailData?.acorn_type : ""}
                </ScaleText>
              </View>
            ) : null}
            <View style={CommonStyles.straightCon}>
              <ScaleText style={[styles.businessCategoryTxt, { flex: 1 }]}>
                {detailData?.business_service_category}
              </ScaleText>
              {detailData?.acorn_type === "Black Supported" ? (
                <TouchableOpacity onPress={() => setSpecialIcon(true)}>
                  <OUTLINE_ACORN
                    width={27}
                    height={27}
                    style={{ left: 8, bottom: 10 }}
                  />
                </TouchableOpacity>
              ) : detailData?.acorn_type === "Black Owned" ? (
                <TouchableOpacity onPress={() => setSpecialIcon(true)}>
                  <BLACK_ACORN
                    width={27}
                    height={27}
                    style={{ left: 8, bottom: 10 }}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
            {detailData?.business_open_time ? (
              <View style={CommonStyles.straightCon}>
                <ScaleText
                  style={[
                    styles.subTitleTxt,
                    {
                      color:
                        detailData?.business_open_time?.closing_day === 1 &&
                        detailData?.business_open_time?.temporary_close === 1 &&
                        detailData?.business_open_time?.permanent_close === 1
                          ? COLORS.LIGHT_GREEN
                          : COLORS.LIGHT_RED,
                    },
                  ]}
                >
                  {detailData?.business_open_time?.closing_day === 1 &&
                  detailData?.business_open_time?.temporary_close === 1 &&
                  detailData?.business_open_time?.permanent_close === 1
                    ? "Open Now"
                    : "Closed Now"}
                </ScaleText>
                {detailData?.business_open_time?.closing_day === 1 &&
                detailData?.business_open_time?.temporary_close === 1 &&
                detailData?.business_open_time?.permanent_close === 1 ? (
                  <ScaleText style={styles.smallTxt}>
                    {" "}
                    - {detailData?.business_open_time?.timeline}
                  </ScaleText>
                ) : null}
              </View>
            ) : null}
          </>
        )}
        <View style={[CommonStyles.straightCon, styles.topHeaderVw]}>
          <View style={styles.optionsVw}>
            {detailData?.mobileno ? (
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.smallOptionVw}
                  onPress={() => {
                    Linking.openURL(`tel:${detailData?.mobileno}`);
                  }}
                >
                  <IconX
                    origin={ICON_TYPE.FEATHER_ICONS}
                    name={"phone-call"}
                    size={20}
                    color={COLORS.BLACK}
                  />
                </TouchableOpacity>
                <ScaleText style={styles.smallOptiontxt}>Call</ScaleText>
              </View>
            ) : null}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.smallOptionVw}
                onPress={() => {
                  handleGetDirections(
                    detailData?.latitude,
                    detailData?.longitude
                  );
                }}
              >
                <IconX
                  origin={ICON_TYPE.MATERIAL_COMMUNITY}
                  name={"map-marker-radius-outline"}
                  size={22}
                  color={COLORS.BLACK}
                />
              </TouchableOpacity>
              <ScaleText style={styles.smallOptiontxt}>View Map</ScaleText>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.smallOptionVw}
                onPress={() => {
                  if (detailData?.websites) {
                    Linking.openURL(detailData?.websites);
                  } else {
                    alert(`Can't open website`);
                  }
                }}
              >
                <IconX
                  origin={ICON_TYPE.MATERIAL_COMMUNITY}
                  name={"web"}
                  size={22}
                  color={COLORS.BLACK}
                />
              </TouchableOpacity>
              <ScaleText style={styles.smallOptiontxt}>Website</ScaleText>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={[
                  styles.smallOptionVw,
                  props.isSaved ? styles.onSaved : {},
                ]}
                onPress={() => props.handleSavepress()}
              >
                <IconX
                  origin={ICON_TYPE.MATERIAL_ICONS}
                  name={"save-alt"}
                  size={22}
                  color={props.isSaved ? COLORS.YELLOW : COLORS.BLACK}
                />
              </TouchableOpacity>
              <ScaleText
                style={[
                  styles.smallOptiontxt,
                  { color: props.isSaved ? COLORS.YELLOW : null },
                ]}
              >
                {props.isSaved ? "Saved" : "Save"}
              </ScaleText>
            </View>
          </View>
        </View>
      </View>
      {/* <View style={styles.mainContainer}>
        <ScaleText style={styles.longTxt}>Do You Recommend this businesss?</ScaleText>
        <View style={[CommonStyles.straightCon, { justifyContent: "center" }]}>
          <TouchableOpacity style={styles.smallCon}>
            <ScaleText style={[styles.titletxt, { fontSize: 16 }]}>YES</ScaleText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallCon}>
            <ScaleText style={[styles.titletxt, { fontSize: 16 }]}>NO</ScaleText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallCon}>
            <ScaleText style={[styles.titletxt, { fontSize: 16 }]}>MAYBE</ScaleText>
          </TouchableOpacity>
        </View>
      </View> */}
      <View style={styles.mainContainer}>
        <View style={[CommonStyles.straightCon, styles.topHeaderVw]}>
          <View style={styles.optionsVw}>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.smallOptionVw}
                onPress={() => props.handleNavigation("ReviewRating", {})}
              >
                <IconX
                  origin={ICON_TYPE.MATERIAL_COMMUNITY}
                  name={"star-box-outline"}
                  size={20}
                  color={COLORS.BLACK}
                />
              </TouchableOpacity>
              <ScaleText style={[styles.smallOptiontxt2]}>Add Review</ScaleText>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.smallOptionVw}
                onPress={() =>
                  props.setGalleryModal({
                    ...props?.moreInfoModal,
                    open: true,
                    type: "add",
                  })
                }
              >
                <IconX
                  origin={ICON_TYPE.FEATHER_ICONS}
                  name={"camera"}
                  size={20}
                  color={COLORS.BLACK}
                />
              </TouchableOpacity>
              <ScaleText style={[styles.smallOptiontxt2]}>Add Photo</ScaleText>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.smallOptionVw}
                onPress={() =>
                  props.setGalleryModal({
                    ...props?.moreInfoModal,
                    open: true,
                    type: "view",
                  })
                }
              >
                <IconX
                  origin={ICON_TYPE.FEATHER_ICONS}
                  name={"check-circle"}
                  size={20}
                  color={COLORS.BLACK}
                />
              </TouchableOpacity>
              <ScaleText style={[styles.smallOptiontxt2]}>
                View Gallery
              </ScaleText>
            </View>
          </View>
        </View>
      </View>
      {props?.visible ? (
        <BusinessDetail type="image" />
      ) : (
        <>
          {take_reservation && (
            <View style={styles.mainContainer}>
              <View style={styles.reservationView}>
                <ScaleText style={styles.sectionTxt}>
                  Make a Reservation
                </ScaleText>
                <TouchableOpacity
                  style={styles.orderTouch}
                  onPress={() => props.handleReservationPress()}
                >
                  <ScaleText style={[styles.orderTxt, styles.orderTxtSecond]}>
                    Find a Table
                  </ScaleText>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </>
      )}
      {offer_takeout || offers_delivery || outdoor_seating ? (
        <View style={[styles.mainContainer, { paddingVertical: 8 }]}>
          <ScaleText style={styles.sectionTxt}>Order Food</ScaleText>
          <View style={styles.triBttnVw}>
            {offer_takeout ? (
              <TouchableOpacity
                style={styles.orderTouch}
                onPress={() => props.onPressOrder(1)}
              >
                <ScaleText style={styles.orderTxt}>
                  Start Order Delivery
                </ScaleText>
              </TouchableOpacity>
            ) : null}
            {offers_delivery ? (
              <TouchableOpacity
                style={styles.orderTouch}
                onPress={() => props.onPressOrder(2)}
              >
                <ScaleText style={styles.orderTxt}>
                  Start Order Takeout
                </ScaleText>
              </TouchableOpacity>
            ) : null}
            {outdoor_seating ? (
              <TouchableOpacity
                style={styles.orderTouch}
                onPress={() => props.handleReservationPress()}
              >
                <ScaleText style={styles.orderTxt}>Outdoor Seating</ScaleText>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      ) : null}
      <View style={[styles.mainContainer, { paddingHorizontal: 0 }]}>
        <Image
          source={{ uri: imagePreviewUrl }}
          style={{ width: "100%", height: 150 }}
        />
        <ScaleText
          style={[
            styles.buttonsTxt,
            {
              marginLeft: 20,
            },
          ]}
        >
          {detailData?.address}
        </ScaleText>
        <TouchableOpacity
          style={styles.buttonsVw}
          onPress={() => {
            handleGetDirections(detailData?.latitude, detailData?.longitude);
          }}
        >
          <ScaleText style={styles.buttonsTxt}>{"Get Directions"}</ScaleText>
          <IconX
            origin={ICON_TYPE.MATERIAL_ICONS}
            name={"directions"}
            size={24}
            color={COLORS.BLACK}
          />
        </TouchableOpacity>
        {detailData?.mobileno ? (
          <TouchableOpacity
            style={styles.buttonsVw}
            onPress={() => {
              Linking.openURL(`tel:${detailData?.mobileno}`);
            }}
          >
            <View>
              <ScaleText style={styles.buttonsTxt}>{"Call"}</ScaleText>
              <ScaleText style={styles.smallTxt}>
                {detailData?.mobileno
                  ? detailData?.mobileno
                  : "Mobile no. Not Found"}
              </ScaleText>
            </View>
            <IconX
              origin={ICON_TYPE.FEATHER_ICONS}
              name={"phone-call"}
              size={20}
              color={COLORS.BLACK}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.mainContainer}>
        <ScaleText style={styles.sectionTxt}>About the Business</ScaleText>
        <View style={[CommonStyles.straightCon, { marginTop: 0 }]}>
          <Image
            source={{ uri: detailData?.owner_image }}
            style={styles.considrImgVw}
          />
          <View>
            <ScaleText style={styles.businessNameInDetailTxt}>
              {detailData?.business_user_name}
            </ScaleText>
            <ScaleText style={styles.smallTxt}>Business Owner</ScaleText>
          </View>
        </View>
        <ScaleText style={[styles.smallTxt, { marginTop: 10 }]}>
          {detailData?.about_business?.substring(0, 60)}
          {"..."}
        </ScaleText>
        <TouchableOpacity
          style={[
            CommonStyles.straightCon,
            { justifyContent: "space-between", marginTop: 10 },
          ]}
        >
          <View>
            <ScaleText style={styles.titletxt}>Services</ScaleText>
            <ScaleText style={styles.smallTxt}>
              {detailData?.service_offered}
            </ScaleText>
          </View>
          <IconX
            origin={ICON_TYPE.ENTYPO}
            name={"list"}
            size={20}
            color={COLORS.BLACK}
          />
        </TouchableOpacity>
        {detailData?.websites ? (
          <TouchableOpacity
            style={[
              CommonStyles.straightCon,
              { justifyContent: "space-between", marginVertical: 12 },
            ]}
            onPress={() => {
              if (detailData?.websites) {
                Linking.openURL(detailData?.websites);
              } else {
                alert(`Can't open website`);
              }
            }}
          >
            <ScaleText
              numberOfLines={1}
              style={[
                styles.titletxt,
                {
                  width: "90%",
                },
              ]}
            >
              {removeHttp(detailData?.websites)}
            </ScaleText>
            <IconX
              origin={ICON_TYPE.FONT_AWESOME}
              name={"share-square-o"}
              size={20}
              color={COLORS.BLACK}
            />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          onPress={() =>
            props.setMoreInfoModal({
              ...props?.moreInfoModal,
              open: true,
              type: "info",
            })
          }
          style={styles.tapButtonsVw}
        >
          <ScaleText style={styles.blueColorTxt}>More Info</ScaleText>
        </TouchableOpacity>
      </View>
      {Object.keys(props.recentFeedData)?.length !== 0 ? (
        <View style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() => {
              props.handleNavigation("NewsFeed", {
                business_name: detailData?.business_name,
              });
            }}
          >
            <ScaleText style={styles.sectionTxt}>News feeds</ScaleText>

            <TouchableOpacity
              style={styles.rowVw}
              onPress={() => {
                props.handleNavigation("NewsFeed", {
                  business_name: detailData?.business_name,
                });
              }}
            >
              <Image
                style={styles.smallImgVw}
                resizeMode="cover"
                source={{ uri: props.recentFeedData?.logo_url }}
              />
              <View style={{ flex: 1 }}>
                <View
                  style={[
                    styles.rowVw,
                    {
                      justifyContent: "space-between",
                      paddingHorizontal: 10,
                    },
                  ]}
                >
                  <View style={{ width: "70%" }}>
                    <ScaleText
                      style={[styles.ratingTxt, { color: COLORS.BLACK }]}
                    >
                      {props.recentFeedData?.business_name}
                    </ScaleText>
                    <View style={styles.rowVw}>
                      <ScaleText style={styles.lightTxt}>
                        {moment(props.recentFeedData?.post_created_date)
                          .startOf("seconds")
                          .fromNow()}
                      </ScaleText>
                    </View>
                  </View>
                </View>
                <ScaleText style={styles.headlineTxt}>
                  {props.recentFeedData?.headline
                    ? props.recentFeedData?.headline
                    : null}
                </ScaleText>
                <ScaleText style={styles.descriptionTxt}>
                  {props.recentFeedData?.description
                    ? props.recentFeedData?.description
                    : null}
                </ScaleText>
                {props.recentFeedData?.link ? (
                  <TouchableOpacity
                    onPress={() => Linking.openURL(props.recentFeedData?.link)}
                  >
                    <ScaleText style={styles.nullTxt}>
                      {props.recentFeedData?.link
                        ? props.recentFeedData?.link
                        : null}
                    </ScaleText>
                  </TouchableOpacity>
                ) : null}
              </View>
            </TouchableOpacity>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Collage imagesData={[props.recentFeedData?.photo?.[0]]} />
            </View>
            <TouchableOpacity
              onPress={() => {
                props.handleNavigation("NewsFeed", {
                  business_name: detailData?.business_name,
                });
              }}
              style={styles.tapButtonsVw}
            >
              <ScaleText style={styles.blueColorTxt}>See More</ScaleText>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      ) : null}
      {detailData?.popular_dish?.length > 0 ? (
        <View style={styles.mainContainer}>
          <ScaleText style={styles.sectionTxt}>Popular Dishes</ScaleText>
          <FlatList
            data={detailData?.popular_dish}
            renderItem={({ item }) => renderPopularDish(item)}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ) : null}
      {detailData?.highlights?.length > 0 ? (
        <View style={styles.mainContainer}>
          <ScaleText style={[styles.sectionTxt, { marginBottom: 20 }]}>
            Highlights from the Business
          </ScaleText>
          <FlatList
            data={detailData?.highlights}
            renderItem={({ item }) => renderBusinessHighlights(item)}
            // horizontal
            numColumns={2}
          />
        </View>
      ) : null}

      {detailData?.recommended_business?.length > 0 ? (
        <View style={styles.mainContainer}>
          <ScaleText style={styles.sectionTxt}>
            You might also consider
          </ScaleText>
          <ScaleText
            style={[
              styles.smallTxt,
              {
                marginLeft: 8,
              },
            ]}
          >
            Sponsored
          </ScaleText>
          <>
            {detailData?.recommended_business?.map((considr) => {
              return renderYouMayConsider(considr);
            })}
          </>
        </View>
      ) : null}
      <View style={styles.mainContainer}>
        <View
          style={[
            CommonStyles.straightCon,
            { justifyContent: "space-between" },
          ]}
        >
          <ScaleText style={styles.sectionTxt}>Photos</ScaleText>
          <TouchableOpacity
            onPress={() =>
              props.setGalleryModal({
                ...props?.moreInfoModal,
                open: true,
                type: "view",
              })
            }
          >
            <IconX
              color={COLORS.BLACK}
              origin={ICON_TYPE.ANT_ICON}
              name={"arrowright"}
            />
          </TouchableOpacity>
        </View>
        {detailData?.image?.length > 0 ? (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginVertical: 16 }}
            horizontal
          >
            {detailData?.image?.map((photo) => {
              return (
                <>
                  <Image
                    source={{ uri: photo.image }}
                    resizeMode={"cover"}
                    style={styles.photoImgVw}
                  />
                </>
              );
            })}
          </ScrollView>
        ) : null}
      </View>
      <View style={styles.mainContainer}>
        <ScaleText style={styles.sectionTxt}>Share this Business</ScaleText>
        <View style={[CommonStyles.straightCon, styles.topHeaderVw]}>
          <View style={styles.optionsVw}>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.smallOptionVw}
                onPress={() => {
                  Linking.openURL(`sms:`);
                }}
              >
                <IconX
                  origin={ICON_TYPE.ANT_ICON}
                  name={"message1"}
                  size={20}
                  color={COLORS.BLACK}
                />
              </TouchableOpacity>
              <ScaleText style={[styles.smallOptiontxt2]}>Message</ScaleText>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.smallOptionVw}
                onPress={() => {
                  Clipboard.setString(detailData?.websites);
                }}
              >
                <IconX
                  origin={ICON_TYPE.FEATHER_ICONS}
                  name={"copy"}
                  size={20}
                  color={COLORS.BLACK}
                />
              </TouchableOpacity>
              <ScaleText style={[styles.smallOptiontxt2]}>Copy Link</ScaleText>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.smallOptionVw}
                onPress={() => props.handleSharePress()}
              >
                <IconX
                  origin={ICON_TYPE.MATERIAL_COMMUNITY}
                  name={"dots-horizontal"}
                  size={22}
                  color={COLORS.BLACK}
                />
              </TouchableOpacity>
              <ScaleText style={[styles.smallOptiontxt2]}>More</ScaleText>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.mainContainer}>
        {detailData?.business_review?.length > 0 ? (
          <View>
            <ScaleText style={styles.sectionTxt}>Reviews and Ratings</ScaleText>

            {detailData?.business_review?.map((item, index) => {
              return (
                <MainItemsView
                  onPressView={props.onPressView}
                  item={item}
                  index={index}
                  largeImg={item?.profile_image}
                  largeName={item?.first_name + " " + item?.last_name}
                  smallTxt={item?.address}
                  rating={item?.business_rating?.toString()}
                  rowImgTxt1={item?.business_service_category}
                  rowImgTxt2={item?.create_date}
                  rowImgTxt3={item?.about_business}
                  listType={"review"}
                  description={item?.description}
                  title={item?.title}
                  profile_image={item?.profile_image}
                />
              );
            })}
          </View>
        ) : (
          <View>
            <ScaleText style={styles.sectionTxt}>No reviews yet</ScaleText>
            <TouchableOpacity style={styles.tapRowButtonsVw}>
              <ScaleText style={styles.titletxt}>
                Be the first to review
              </ScaleText>
              <IconX
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                color={COLORS.LIGHT_RED}
                name={"star-box"}
                size={32}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tapButtonsVw, { alignItems: "flex-start" }]}
            >
              <StarShower
                ActiveStarColor={COLORS.COMMON}
                UnActiveStarColor={COLORS.COMMON}
                starWidth={18}
                starHeight={18}
                marginLeft={14}
              />
              <ScaleText
                style={[
                  styles.smallOptiontxt2,
                  {
                    color: COLORS.GREY,
                    marginLeft: 14,
                  },
                ]}
              >
                Tap to review....
              </ScaleText>
            </TouchableOpacity>
          </View>
        )}
        {/* <View
          style={[
            CommonStyles.straightCon,
            {
              justifyContent: "space-between",
              marginTop: 20,
            },
          ]}
        >
          <TouchableOpacity style={styles.tapRowButtonsVw}>
            <IconX
              origin={ICON_TYPE.MATERIAL_COMMUNITY}
              name={"camera-plus-outline"}
              size={29}
              color={COLORS.BLACK}
            />
            <ScaleText
              style={[
                styles.titletxt,
                {
                  marginLeft: 12,
                },
              ]}
            >
              Add Photos
            </ScaleText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tapRowButtonsVw}>
            <IconX
              origin={ICON_TYPE.MATERIAL_COMMUNITY}
              name={"check-decagram-outline"}
              size={29}
              color={COLORS.BLACK}
            />
            <ScaleText
              style={[
                styles.titletxt,
                {
                  marginLeft: 12,
                },
              ]}
            >
              Check
            </ScaleText>
          </TouchableOpacity>
        </View> */}
      </View>
      <MoreInfo
        visible={props?.moreInfoModal?.open}
        setVisible={props.setMoreInfoModal}
        type={props?.moreInfoModal?.type}
        detailData={detailData}
        moreData={props?.moreInfoModal?.moreData}
      />
      <BusinessGallery
        visible={props?.galleryModal?.open}
        setVisible={props.setGalleryModal}
        type={props?.galleryModal?.type}
        detailData={detailData}
        moreData={props?.galleryModal?.moreData}
      />
    </PageScroll>
  );
};
export default BusinessPageDetailsView;
