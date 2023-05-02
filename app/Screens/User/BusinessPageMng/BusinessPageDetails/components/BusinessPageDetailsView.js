import React, { useEffect } from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Linking,
  Platform,
} from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";
import styles from "./styles";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { COLORS, Constants, FONT_SIZE } from "../../../../../Utils/Constant";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import StarShower from "../../../../../Components/StarShower";
import MoreInfo from "./MoreInfo";
import MainHeader from "../../../../../Components/MainHeader";
import ListItemsView from "../../../../../Components/ListItemsView";
import { Images } from "../../../../../Utils/images";
import ScaleText from "../../../../../Components/ScaleText";
import BusinessGallery from "./BusinessGallery";
import PicturePickerModal from "../../../../../Components/Modal/PicturePicker";

const BusinessPageDetailsView = (props) => {
  const considerd = [
    {
      businees_name: "Sandeepan da san",
      description:
        "Hair and cut solution and more for you and lorem upseum dolor sit amet",
      profile: require("../../../../../Assets/extraImages/demo-profile-image.png"),
      review: { businees_review: 3 },
    },
    {
      businees_name: "Sunshine glamour",
      description:
        "Hair and cut solution and more for you and lorem upseum dolor sit amet",
      profile: require("../../../../../Assets/extraImages/demo-profile-image.png"),
    },
    {
      businees_name: "First Impression",
      description:
        "Hair and cut solution and more for you and lorem upseum dolor sit amet",
      profile: require("../../../../../Assets/extraImages/cap.png"),
    },
  ];
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
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props?.detailData?.latitude},${props?.detailData?.longitude}&zoom=13&scale=2&size=600x300&maptype=roadmap&markers=scale%3A1%color:red%7Clabel:A%7C28.543707340175,-81.3514976796&format=png&key=AIzaSyCbDx7Lk4eTMzptrQKXZvOPYgEMggrq8o4`;

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
        {/* <Image source={{ uri: item.icon }} style={styles.highlightsImage} /> */}
        <IconX
          origin={ICON_TYPE.FEATHER_ICONS}
          name={"phone-call"}
          size={40}
          color={COLORS.BLACK}
        />
        <ScaleText style={styles.highlightsText}>{item.highlights}</ScaleText>
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={[CommonStyles.otherScrollCon]}>
      <ImageBackground
        source={{ uri: props?.detailData.header_image }}
        style={{
          width: Constants.windowWidth,
          height: Constants.Ios ? 280 : 220,
        }}
        resizeMode={"cover"}
      >
        <MainHeader
          backgroundColor={COLORS.TRANSPARENT}
          notify={false}
          isSearch={false}
          backIconColor={COLORS.WHITE}
          backTxtColor={COLORS.WHITE}
          loginButton={false}
        />
        {/* <View style={[CommonStyles.straightCon, styles.topHeaderVw]}>
          <TouchableOpacity
            onPress={() => props.handleBack()}
            style={CommonStyles.straightCon}
          >
            <IconX
              origin={ICON_TYPE.ICONICONS}
              color={COLORS.WHITE}
              size={30}
              name={"chevron-back"}
            />
            <ScaleText style={styles.topHeaderTxt}>Back</ScaleText>
          </TouchableOpacity>
        </View> */}

        <View style={styles.backImgVw}>
          <ScaleText style={styles.mainTxt}>
            {props?.detailData?.business_name}
          </ScaleText>
          <View style={{ width: 132 }}>
            <StarShower
              counts={
                props?.detailData?.rating
                  ? props?.detailData?.rating?.toString()
                  : 0
              }
              starHeight={18}
              starWidth={18}
              starsBackColor={COLORS.RGBA}
              ActiveStarColor={COLORS.YELLOW}
              UnActiveStarColor={COLORS.WHITE}
            />
          </View>
          {props?.detailData?.claimed ? (
            <View style={CommonStyles.straightCon}>
              {props?.detailData?.claimed?.toString() === "1" && (
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
                {props?.detailData?.claimed?.toString() === "1"
                  ? "Claimed"
                  : "UnClaimed"}
              </ScaleText>
            </View>
          ) : null}
        </View>
      </ImageBackground>
      <View style={styles.mainContainer}>
        <ScaleText style={styles.businessCategoryTxt}>
          {props?.detailData?.business_service_category}
        </ScaleText>
        {props?.detailData?.business_open_time ? (
          <View style={CommonStyles.straightCon}>
            <ScaleText
              style={[
                styles.subTitleTxt,
                {
                  color:
                    props?.detailData?.business_open_time?.closing_day === 1 &&
                    props?.detailData?.business_open_time?.temporary_close ===
                      1 &&
                    props?.detailData?.business_open_time?.permanent_close === 1
                      ? COLORS.LIGHT_GREEN
                      : COLORS.LIGHT_RED,
                },
              ]}
            >
              {props?.detailData?.business_open_time?.closing_day === 1 &&
              props?.detailData?.business_open_time?.temporary_close === 1 &&
              props?.detailData?.business_open_time?.permanent_close === 1
                ? "Open Now"
                : "Closed Now"}
            </ScaleText>
            {props?.detailData?.business_open_time?.closing_day === 1 &&
            props?.detailData?.business_open_time?.temporary_close === 1 &&
            props?.detailData?.business_open_time?.permanent_close === 1 ? (
              <ScaleText style={styles.smallTxt}>
                {" "}
                - {props?.detailData?.business_open_time?.timeline}
              </ScaleText>
            ) : null}
          </View>
        ) : null}
        <View style={[CommonStyles.straightCon, styles.topHeaderVw]}>
          {props?.detailData?.mobileno ? (
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <TouchableOpacity
                style={styles.smallOptionVw}
                onPress={() => {
                  Linking.openURL(`tel:${props?.detailData?.mobileno}`);
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
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ alignItems: "center", marginTop: 10, flex: 1 }}>
              <TouchableOpacity
                style={styles.smallOptionVw}
                onPress={() => {
                  handleGetDirections(
                    props?.detailData?.latitude,
                    props?.detailData?.longitude
                  );
                }}
              >
                <IconX
                  origin={ICON_TYPE.ENTYPO}
                  name={"location"}
                  size={20}
                  color={COLORS.BLACK}
                />
              </TouchableOpacity>
              <ScaleText style={styles.smallOptiontxt}>View Map</ScaleText>
            </View>
            <View style={{ alignItems: "center", marginTop: 10, flex: 1 }}>
              <TouchableOpacity
                style={styles.smallOptionVw}
                onPress={() => {
                  if (props?.detailData?.websites) {
                    Linking.openURL(props?.detailData?.websites);
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
            <View style={{ alignItems: "center", marginTop: 10, flex: 1 }}>
              <TouchableOpacity style={styles.smallOptionVw}>
                <IconX
                  origin={ICON_TYPE.ICONICONS}
                  name={"bookmarks-outline"}
                  size={20}
                  color={COLORS.BLACK}
                />
              </TouchableOpacity>
              <ScaleText style={styles.smallOptiontxt}>Save</ScaleText>
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
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.smallOptionVw}
              onPress={() => props.handleNavigation("ReviewRating", {})}
            >
              <IconX
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                name={"star-box"}
                size={20}
                color={COLORS.BLACK}
              />
            </TouchableOpacity>
            <ScaleText style={[styles.smallOptiontxt2]}>Add Review</ScaleText>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}
            onPress={() =>
              props.setGalleryModal({
                ...props?.moreInfoModal,
                open: true,
                type: "add",
              })
            }>
              <IconX
                origin={ICON_TYPE.MATERIAL_ICONS}
                name={"add-a-photo"}
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
                origin={ICON_TYPE.FONT_AWESOME}
                name={"check-circle-o"}
                size={22}
                color={COLORS.BLACK}
              />
            </TouchableOpacity>
            <ScaleText style={[styles.smallOptiontxt2]}>View Gallery</ScaleText>
          </View>
        </View>
        {/* <SliderImages
          data={imagess}
          renderItem={({ item }) => {
            return <RenderSlideItem posterImg={item.image} />;
          }}
        /> */}
      </View>
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
          {props?.detailData?.address}
        </ScaleText>
        <TouchableOpacity
          style={styles.buttonsVw}
          onPress={() => {
            handleGetDirections(
              props?.detailData?.latitude,
              props?.detailData?.longitude
            );
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
        {props?.detailData?.mobileno ? (
          <TouchableOpacity
            style={styles.buttonsVw}
            onPress={() => {
              Linking.openURL(`tel:${props?.detailData?.mobileno}`);
            }}
          >
            <View>
              <ScaleText style={styles.buttonsTxt}>{"Call"}</ScaleText>
              <ScaleText style={styles.smallTxt}>
                {props?.detailData?.mobileno
                  ? props?.detailData?.mobileno
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
        <TouchableOpacity
          style={[
            CommonStyles.straightCon,
            { justifyContent: "space-between" },
          ]}
        >
          <View>
            <ScaleText style={styles.titletxt}>Services</ScaleText>
            <ScaleText style={styles.smallTxt}>
              {props?.detailData?.service_offered}
            </ScaleText>
          </View>
          <IconX
            origin={ICON_TYPE.ENTYPO}
            name={"list"}
            size={20}
            color={COLORS.BLACK}
          />
        </TouchableOpacity>
        {props?.detailData?.websites ? (
          <TouchableOpacity
            style={[
              CommonStyles.straightCon,
              { justifyContent: "space-between", marginVertical: 12 },
            ]}
            onPress={() => {
              if (props?.detailData?.websites) {
                Linking.openURL(props?.detailData?.websites);
              } else {
                alert(`Can't open website`);
              }
            }}
          >
            <ScaleText
              numberOfLines={2}
              style={[
                styles.titletxt,
                {
                  width: "95%",
                },
              ]}
            >
              {props?.detailData?.websites}
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
      <View style={styles.mainContainer}>
        {props?.detailData?.business_review?.length > 0 ? (
          <View>
            <ScaleText style={styles.sectionTxt}>News feeds</ScaleText>

            <TouchableOpacity style={styles.rowVw}>
              <Image
                style={styles.smallImgVw}
                resizeMode="cover"
                source={Images.DEMO1}
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
                      New post from the business
                    </ScaleText>
                    <View style={styles.rowVw}>
                      <ScaleText style={styles.lightTxt}>By Owner | </ScaleText>
                      <ScaleText style={styles.lightTxt}>a month ago</ScaleText>
                    </View>
                  </View>
                  <View style={styles.straightVw}>
                    <View style={styles.ratingVw}>
                      <ScaleText style={styles.ratingTxt}>12 likes</ScaleText>
                    </View>
                    {/* <ScaleText
                      style={[styles.ratingTxt, { color: BLACK_COLOR_CODE }]}
                    >
                      rating
                    </ScaleText> */}
                  </View>
                </View>
                <ScaleText>
                  abhwdbrg derh rtj rtj sr tjsrtk t cvuk ctyictuo, cou,.tidgrgr
                  th rth rthrtjy jttuk
                </ScaleText>
              </View>
            </TouchableOpacity>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={styles.postImageStyle}
                resizeMode="cover"
                source={Images.DEMO1}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                props.handleNavigation("NewsFeed", {
                  business_id: props?.detailData?.business_id,
                });
              }}
              style={styles.tapButtonsVw}
            >
              <ScaleText style={styles.blueColorTxt}>See More</ScaleText>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      {props?.detailData?.popular_dish?.length > 0 ? (
        <View style={styles.mainContainer}>
          <ScaleText style={styles.sectionTxt}>Popular Dishes</ScaleText>
          <FlatList
            data={props?.detailData?.popular_dish}
            renderItem={({ item }) => renderPopularDish(item)}
            horizontal
          />
        </View>
      ) : null}
      <View style={styles.mainContainer}>
        <ScaleText style={styles.sectionTxt}>
          Highlights from the Business
        </ScaleText>

        <FlatList
          data={props?.detailData?.highlights}
          renderItem={({ item }) => renderBusinessHighlights(item)}
          // horizontal
          numColumns={2}
        />
      </View>

      {props?.detailData?.recommended_business?.length > 0 ? (
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
            {props?.detailData?.recommended_business?.map((considr) => {
              return (
                <TouchableOpacity activeOpacity={1} style={styles.considrVw}>
                  <ScaleText style={styles.considrTxt}>
                    {considr?.business_name}
                  </ScaleText>
                  {considr?.rating ? (
                    <View>
                      <StarShower
                        counts={considr?.rating}
                        marginTop={5}
                        starHeight={16}
                        starWidth={16}
                        ActiveStarColor={COLORS.LIGHT_RED}
                        UnActiveStarColor={COLORS.COMMON}
                      />
                    </View>
                  ) : null}
                  <View style={CommonStyles.straightCon}>
                    <Image source={considr?.logo} style={styles.considrImgVw} />
                    <ScaleText style={styles.considrTxtVw}>
                      {considr?.about_business?.substring(0, 60)}
                      {"..."}
                      <ScaleText
                        onPress={() =>
                          props.setMoreInfoModal({
                            open: true,
                            type: "read",
                            moreData: considr,
                          })
                        }
                        style={styles.blueColorTxt}
                      >
                        Read More
                      </ScaleText>
                    </ScaleText>
                  </View>
                </TouchableOpacity>
              );
            })}
          </>
        </View>
      ) : null}
      <View style={styles.mainContainer}>
        <ScaleText style={styles.sectionTxt}>From this business</ScaleText>
        <ScaleText style={[styles.smallTxt, { marginTop: 20 }]}>
          {props?.detailData?.about_business?.substring(0, 40)}
          {"..."}
        </ScaleText>
        <View style={[CommonStyles.straightCon, { marginTop: 10 }]}>
          <Image source={considerd[0].profile} style={styles.considrImgVw} />
          <View>
            <ScaleText style={styles.businessNameInDetailTxt}>
              {props?.detailData?.business_user_name}
            </ScaleText>
            <ScaleText style={styles.smallTxt}>Business Owner</ScaleText>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            props.setMoreInfoModal({
              ...props?.moreInfoModal,
              open: true,
              type: "read",
            })
          }
          style={styles.tapButtonsVw}
        >
          <ScaleText style={styles.blueColorTxt}>Read More</ScaleText>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <View
          style={[
            CommonStyles.straightCon,
            { justifyContent: "space-between" },
          ]}
        >
          <ScaleText style={styles.sectionTxt}>Photos</ScaleText>
          <IconX
            color={COLORS.BLACK}
            origin={ICON_TYPE.ANT_ICON}
            name={"arrowright"}
          />
        </View>
        {props?.detailData?.image?.length > 0 ? (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginVertical: 16 }}
            horizontal
          >
            {props?.detailData?.image.map((photo) => {
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
                Clipboard.setString(props?.detailData?.websites);
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
            <TouchableOpacity style={styles.smallOptionVw}>
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
      <View style={styles.mainContainer}>
        {props?.detailData?.business_review?.length > 0 ? (
          <View>
            <ScaleText style={styles.sectionTxt}>Reviews and Ratings</ScaleText>

            {props?.detailData?.business_review.map((item, index) => {
              return (
                <ListItemsView
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
        detailData={props?.detailData}
        moreData={props?.moreInfoModal?.moreData}
      />
      <BusinessGallery
        visible={props?.galleryModal?.open}
        setVisible={props.setGalleryModal}
        type={props?.galleryModal?.type}
        detailData={props?.detailData}
        moreData={props?.galleryModal?.moreData}
      />
      {/* <PicturePickerModal
        Visible={false}
        setVisible={() => {}}
        imageData={(data) => {
          console.log("data", data);
        }}
      /> */}
    </ScrollView>
  );
};
export default BusinessPageDetailsView;
