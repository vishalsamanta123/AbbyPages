import React, { useEffect } from "react";
import {
  View,
  Image,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import CommonStyles from "../../../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  GREY_COLOR_CODE,
  LIGHT_GREEN_COLOR_CODE,
  LIGHT_RED_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  RGBA_COLOR,
  WHITE_COLOR_CODE,
  windowWidth,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import StarShower from "../../../../../Components/StarShower";
import MoreInfo from "./MoreInfo";

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
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=28.543707340175,-81.3514976796&zoom=13&scale=2&size=600x300&maptype=roadmap&markers=scale%3A1%color:red%7Clabel:A%7C28.543707340175,-81.3514976796&format=png&key=AIzaSyCbDx7Lk4eTMzptrQKXZvOPYgEMggrq8o4`;
  const imagess = [
    {
      image: Images.DEMO1,
    },
    {
      image: Images.DEMO2,
    },
    {
      image: Images.DEMO3,
    },
  ];
  return (
    <ScrollView contentContainerStyle={[CommonStyles.otherScrollCon]}>
      <ImageBackground
        source={Images.DEMO2}
        style={{ width: windowWidth, height: 220 }}
        resizeMode={"cover"}
      >
        <View style={[CommonStyles.straightCon, styles.topHeaderVw]}>
          <TouchableOpacity
            onPress={() => props.handleBack()}
            style={CommonStyles.straightCon}
          >
            <IconX
              origin={ICON_TYPE.ICONICONS}
              color={WHITE_COLOR_CODE}
              size={30}
              name={"chevron-back"}
            />
            <Text style={styles.topHeaderTxt}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.backImgVw}>
          <Text style={styles.mainTxt}>{props?.detailData?.business_name}</Text>
          <View style={{ width: 132 }}>
            <StarShower
              counts={
                props?.detailData?.rating
                  ? Number(props?.detailData?.rating)
                  : 0
              }
              starHeight={18}
              starWidth={18}
              starsBackColor={RGBA_COLOR}
              ActiveStarColor={YELLOW_COLOR_CODE}
              UnActiveStarColor={WHITE_COLOR_CODE}
            />
          </View>
          {props?.detailData?.claimed ? (
            <View style={CommonStyles.straightCon}>
              {props?.detailData?.claimed?.toString() === "1" && (
                <IconX
                  origin={ICON_TYPE.ANT_ICON}
                  name={"checkcircle"}
                  color={LIGHT_GREEN_COLOR_CODE}
                  paddingRight={6}
                />
              )}
              <Text
                style={[
                  styles.smallTxt,
                  {
                    color: LIGHT_GREEN_COLOR_CODE,
                  },
                ]}
              >
                {props?.detailData?.claimed?.toString() === "1"
                  ? "Claimed"
                  : "UnClaimed"}
              </Text>
            </View>
          ) : null}
        </View>
      </ImageBackground>
      <View style={styles.mainContainer}>
        <Text style={styles.titletxt}>
          {props?.detailData?.business_service_category}
        </Text>
        {props?.detailData?.business_open_time ? (
          <View style={CommonStyles.straightCon}>
            <Text
              style={[
                styles.subTitleTxt,
                {
                  color:
                    props?.detailData?.business_open_time?.closing_day === 1 &&
                    props?.detailData?.business_open_time?.temporary_close ===
                      1 &&
                    props?.detailData?.business_open_time?.permanent_close === 1
                      ? LIGHT_GREEN_COLOR_CODE
                      : LIGHT_RED_COLOR_CODE,
                },
              ]}
            >
              {props?.detailData?.business_open_time?.closing_day === 1 &&
              props?.detailData?.business_open_time?.temporary_close === 1 &&
              props?.detailData?.business_open_time?.permanent_close === 1
                ? "Open Now"
                : "Closed Now"}
            </Text>
            {props?.detailData?.business_open_time?.closing_day === 1 &&
            props?.detailData?.business_open_time?.temporary_close === 1 &&
            props?.detailData?.business_open_time?.permanent_close === 1 ? (
              <Text style={styles.smallTxt}>
                {" "}
                - {props?.detailData?.business_open_time?.timeline}
              </Text>
            ) : null}
          </View>
        ) : null}
        <View style={[CommonStyles.straightCon, styles.topHeaderVw]}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.FEATHER_ICONS}
                name={"phone-call"}
                size={20}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={styles.smallOptiontxt}>Call</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.ENTYPO}
                name={"location"}
                size={20}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={styles.smallOptiontxt}>View Map</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                name={"web"}
                size={22}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={styles.smallOptiontxt}>Website</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.ICONICONS}
                name={"bookmarks-outline"}
                size={20}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={styles.smallOptiontxt}>Save</Text>
          </View>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.longTxt}>Do You Recommend this businesss?</Text>
        <View style={[CommonStyles.straightCon, { justifyContent: "center" }]}>
          <TouchableOpacity style={styles.smallCon}>
            <Text style={[styles.titletxt, { fontSize: 16 }]}>YES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallCon}>
            <Text style={[styles.titletxt, { fontSize: 16 }]}>NO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallCon}>
            <Text style={[styles.titletxt, { fontSize: 16 }]}>MAYBE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={[CommonStyles.straightCon, styles.topHeaderVw]}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                name={"star-box"}
                size={20}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={[styles.smallOptiontxt2]}>Add Review</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.MATERIAL_ICONS}
                name={"add-a-photo"}
                size={20}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={[styles.smallOptiontxt2]}>Add Photo</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.FONT_AWESOME}
                name={"check-circle-o"}
                size={22}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={[styles.smallOptiontxt2]}>Check In</Text>
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
        <Text
          style={[
            styles.smallOptiontxt2,
            {
              marginLeft: 10,
            },
          ]}
        >
          Alexender Colony baypass orlando,USA
        </Text>
        <TouchableOpacity style={styles.buttonsVw}>
          <Text style={styles.buttonsTxt}>{"Get Directions"}</Text>
          <IconX
            origin={ICON_TYPE.MATERIAL_ICONS}
            name={"directions"}
            size={24}
            color={BLACK_COLOR_CODE}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonsVw}>
          <View>
            <Text style={styles.buttonsTxt}>{"Call"}</Text>
            <Text style={styles.smallTxt}>{"  (321)-4376487474"}</Text>
          </View>
          <IconX
            origin={ICON_TYPE.FEATHER_ICONS}
            name={"phone-call"}
            size={20}
            color={BLACK_COLOR_CODE}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.sectionTxt}>Info</Text>
        <TouchableOpacity
          style={[
            CommonStyles.straightCon,
            { justifyContent: "space-between" },
          ]}
        >
          <View>
            <Text style={styles.titletxt}>Services</Text>
            <Text style={styles.smallTxt}>
              Kids, HairCut, Saloons, Services, Barber , Neck Trim ,
              Accessories, Luxury Items ,Brands , T-Shirts , HandleLooms ,Other
            </Text>
          </View>
          <IconX
            origin={ICON_TYPE.ENTYPO}
            name={"list"}
            size={20}
            color={BLACK_COLOR_CODE}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            CommonStyles.straightCon,
            { justifyContent: "space-between", marginVertical: 12 },
          ]}
        >
          <Text
            numberOfLines={2}
            style={[
              styles.titletxt,
              {
                width: "80%",
              },
            ]}
          >
            SwitzcutBarbershop.busineess.com
          </Text>
          <IconX
            origin={ICON_TYPE.FONT_AWESOME}
            name={"share-square-o"}
            size={20}
            color={BLACK_COLOR_CODE}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.setMoreInfoModal({
              open: true,
              type: "info",
            })
          }
          style={styles.tapButtonsVw}
        >
          <Text style={styles.titletxt}>More Info</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.sectionTxt}>You might also consider</Text>
        <Text
          style={[
            styles.smallTxt,
            {
              marginLeft: 8,
            },
          ]}
        >
          Sponsored
        </Text>
        {considerd?.length > 0 ? (
          <>
            {considerd?.map((considr) => {
              return (
                <TouchableOpacity activeOpacity={1} style={styles.considrVw}>
                  <Text style={styles.considrTxt}>{considr.businees_name}</Text>
                  {considr.review ? (
                    <View>
                      <StarShower
                        counts={3}
                        marginTop={5}
                        starHeight={16}
                        starWidth={16}
                        ActiveStarColor={LIGHT_RED_COLOR_CODE}
                        UnActiveStarColor={LINE_COMMON_COLOR_CODE}
                      />
                    </View>
                  ) : null}
                  <View style={CommonStyles.straightCon}>
                    <Image
                      source={considr.profile}
                      style={styles.considrImgVw}
                    />
                    <Text style={styles.considrTxtVw}>
                      {considr.description.substring(0, 60)}
                      {"..."}
                      <Text
                        onPress={() =>
                          props.setMoreInfoModal({
                            open: true,
                            type: "read",
                          })
                        }
                        style={styles.blueColorTxt}
                      >
                        Read More
                      </Text>
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </>
        ) : null}
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.sectionTxt}>From this business</Text>
        <Text style={[styles.smallTxt, { marginTop: 20 }]}>
          Our BarberShop specilised in cutting hair and cleanong face make up
          for both male and female
        </Text>
        <View style={[CommonStyles.straightCon, { marginTop: 10 }]}>
          <Image source={considerd[0].profile} style={styles.considrImgVw} />
          <View>
            <Text style={styles.smallOptiontxt2}>Jenniefer louse</Text>
            <Text style={styles.smallTxt}>Business Owner</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            props.setMoreInfoModal({
              open: true,
              type: "read",
            })
          }
          style={styles.tapButtonsVw}
        >
          <Text style={styles.titletxt}>Read More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <View
          style={[
            CommonStyles.straightCon,
            { justifyContent: "space-between" },
          ]}
        >
          <Text style={styles.sectionTxt}>Photos</Text>
          <IconX
            color={BLACK_COLOR_CODE}
            origin={ICON_TYPE.ANT_ICON}
            name={"arrowright"}
          />
        </View>
        {imagess?.length > 0 ? (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginVertical: 16 }}
            horizontal
          >
            {imagess.map((photo) => {
              return (
                <>
                  <Image
                    source={photo.image}
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
        <Text style={styles.sectionTxt}>Share this Business</Text>
        <View style={[CommonStyles.straightCon, styles.topHeaderVw]}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.ANT_ICON}
                name={"message1"}
                size={20}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={[styles.smallOptiontxt2]}>Message</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.FEATHER_ICONS}
                name={"copy"}
                size={20}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={[styles.smallOptiontxt2]}>Copy Link</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                name={"dots-horizontal"}
                size={22}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={[styles.smallOptiontxt2]}>More</Text>
          </View>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.sectionTxt}>No reviews yet</Text>
        <TouchableOpacity style={styles.tapRowButtonsVw}>
          <Text style={styles.titletxt}>Be the first to review</Text>
          <IconX
            origin={ICON_TYPE.MATERIAL_COMMUNITY}
            color={LIGHT_RED_COLOR_CODE}
            name={"star-box"}
            size={32}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tapButtonsVw, { alignItems: "flex-start" }]}
        >
          <StarShower
            ActiveStarColor={LINE_COMMON_COLOR_CODE}
            UnActiveStarColor={LINE_COMMON_COLOR_CODE}
            starWidth={18}
            starHeight={18}
            marginLeft={14}
          />
          <Text
            style={[
              styles.smallOptiontxt2,
              {
                color: GREY_COLOR_CODE,
                marginLeft: 14,
              },
            ]}
          >
            Tap to review....
          </Text>
        </TouchableOpacity>
        <View
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
              color={BLACK_COLOR_CODE}
            />
            <Text
              style={[
                styles.titletxt,
                {
                  marginLeft: 12,
                },
              ]}
            >
              Add Photos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tapRowButtonsVw}>
            <IconX
              origin={ICON_TYPE.MATERIAL_COMMUNITY}
              name={"check-decagram-outline"}
              size={29}
              color={BLACK_COLOR_CODE}
            />
            <Text
              style={[
                styles.titletxt,
                {
                  marginLeft: 12,
                },
              ]}
            >
              Check
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <MoreInfo
        visible={props?.moreInfoModal?.open}
        setVisible={props.setMoreInfoModal}
        type={props?.moreInfoModal?.type}
      />
    </ScrollView>
  );
};
export default BusinessPageDetailsView;
