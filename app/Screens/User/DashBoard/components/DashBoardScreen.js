import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  RefreshControl,
  TextInput,
} from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  WHITE_COLOR_CODE,
  windowWidth,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";
import Carousel, { Pagination } from "react-native-snap-carousel";
import BoxContainer from "../../../../Components/BoxContainer";
import StarShower from "../../../../Components/StarShower";
import ByCategory from "./ByCategory";
import Loader from "../../../../Utils/Loader";
import { ICON_TYPE, IconX } from "../../../../Components/Icons/Icon";
import MainHeader from "../../../../Components/MainHeader";

const DashBoardScreen = (props) => {
  const [searchModal, setSearchModal] = useState(false);
  const [viewPhotos, setViewPhotos] = useState(false);

  const renderSlideItem = ({ item }) => {
    return (
      <View style={{ flex: 1, marginHorizontal: 4 }}>
        <View>
          <Image
            source={{ uri: item.business_type_image }}
            style={{ height: 200, width: "97%" }}
          />
          <Text style={styles.posterTitleTxt}>{item.business_type_name}</Text>
          <Text style={styles.posterTxt}>
            {item.total_business_count + " " + "Listing"}
          </Text>
        </View>
        <Pagination
          dotsLength={props.businessTypes.length}
          activeDotIndex={props.pageIndex}
          containerStyle={{
            paddingVertical: 0,
          }}
          inactiveDotStyle={styles.dotInActiveVw}
          dotStyle={styles.dotActiveVw}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  };
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText={""}
        HeaderMiddleImg={Images.LOGO}
        leftImg={Images.DRAWER_IMG}
        middleImgStyl={CommonStyles.middleLogoVw}
        RightImg={Images.SEARCH_IMG}
        type="Drawer"
        logoImg={true}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
        onPressRightImg={() => props.navigation.navigate("CategorySearch")}
      />
      {/* <MainHeader /> */}
      <ScrollView
        refreshControl={
          <RefreshControl
            colors={[YELLOW_COLOR_CODE]}
            refreshing={props.refreshing}
            onRefresh={props.onRefresh}
          />
        }
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={{ flexGrow: 1 }}
        nestedScrollEnabled={true}
      >
        <ImageBackground
          source={Images.EMPLOYESS_IMG}
          style={styles.backgroundImgVw}
        >
          <View style={styles.imgInnerVw}>
            <Text style={CommonStyles.bigTxtVw}>
              <Text style={{ fontFamily: FONT_FAMILY_REGULAR }}>Support </Text>
              Black Excellence!
            </Text>
            <Text style={[CommonStyles.mediumTxt, { marginTop: 16 }]}>
              Discover Events, Jobs, Goods, Services, Directions, Reviews,
              Deals, and More on ABBYPAGES.
            </Text>
          </View>
          <View style={styles.searchView}>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.inputStyle}
                onPress={() => props.onSearchByCategoryPress()}
              >
                <IconX
                  color={BLACK_COLOR_CODE}
                  origin={ICON_TYPE.EVIL_ICONS}
                  name={"search"}
                  size={30}
                  paddingRight={5}
                />
                <Text style={styles.searchText}>Search by category</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.mainVw}>
          <View style={styles.containersVw}>
            <Text style={styles.titlesTxt}>Recent Activities</Text>
            <View style={styles.activityConVw}>
              {props?.recent_activity?.length > 0 ? (
                <>
                  {props?.recent_activity?.map((activity) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={1}
                        style={styles.activityCon}
                        onPress={() => props.handleOnActivity(activity)}
                      >
                        <View style={styles.rowVw}>
                          <Image
                            source={{ uri: activity?.user?.profile }}
                            style={styles.activityProfileVw}
                          />
                          <View style={styles.textVw}>
                            <Text style={styles.activityNameTxt}>
                              {activity?.user?.first_name +
                                " " +
                                activity?.user?.last_name}
                            </Text>
                            <Text style={styles.activityRvwTxt}>
                              {activity?.review
                                ? "Wrote a Review"
                                : activity?.image?.length > 0
                                ? `${
                                    "Added " +
                                    activity?.image?.length +
                                    " Photos"
                                  }`
                                : null}
                            </Text>
                          </View>
                        </View>
                        {activity?.image?.length > 0 ? (
                          <Text style={styles.activityMainTxt}>
                            {activity?.business_name}
                          </Text>
                        ) : null}
                        {activity?.review ? (
                          <Image
                            source={{ uri: activity?.business_logo }}
                            style={[
                              styles.activityBnnrVw,
                              {
                                marginBottom: 0,
                              },
                            ]}
                            resizeMode={"cover"}
                          />
                        ) : (
                          <>
                            {activity?.image?.length > 0 ? (
                              <View style={styles.photosVw}>
                                {activity?.image?.slice(0, 2)?.map((photos) => {
                                  return (
                                    <Image
                                      source={{ uri: photos }}
                                      resizeMode={"cover"}
                                      style={[
                                        styles.activityBnnrVw,
                                        {
                                          marginHorizontal: 5,
                                          marginBottom: 10,
                                          width:
                                            activity?.image?.length === 1
                                              ? windowWidth / 1.2
                                              : windowWidth / 2.4,
                                        },
                                      ]}
                                    />
                                  );
                                })}
                              </View>
                            ) : null}
                            {/* {activity?.image?.length > 2 ? (
                              <TouchableOpacity onPress={() => setViewPhotos()}>
                                <Text style={styles.seeAllTxt}>
                                  See All {activity?.image?.length} Photos
                                </Text>
                              </TouchableOpacity>
                            ) : null} */}
                          </>
                        )}
                        {activity?.review ? (
                          <Text style={styles.activityMainTxt}>
                            {activity?.business_name}
                          </Text>
                        ) : null}
                        {activity?.review ? (
                          <>
                            <StarShower
                              marginLeft={8}
                              counts={activity?.review?.business_rating}
                            />
                            <Text style={styles.activityCmntTxt}>
                              {activity?.review?.description}
                            </Text>
                          </>
                        ) : null}
                      </TouchableOpacity>
                    );
                  })}
                </>
              ) : null}
            </View>
            {props.recentLoader && (
              <Loader type={"small"} state={props.recentLoader} />
            )}
            {/* {props?.recent_activity?.length > 2 ? (
              <TouchableOpacity style={styles.seeMoreBttn}>
                <Text style={styles.seeMoreBttnTxt}>See More</Text>
              </TouchableOpacity>
            ) : null} */}
          </View>
          <View
            style={[
              styles.containersVw,
              { borderTopWidth: 0.2, borderBottomWidth: 0.2 },
            ]}
          >
            <Text style={styles.titlesTxt}>
              Find the Best Black-Owned Businesses in
              <Text style={{ fontFamily: FONT_FAMILY_BOLD }}> Town</Text>
            </Text>
            <View style={styles.posterVw}>
              <Carousel
                data={props.businessTypes}
                renderItem={renderSlideItem}
                layout={"default"}
                sliderWidth={windowWidth}
                activeDotIndex={1}
                itemWidth={windowWidth}
                autoplay
                onScroll={(event) => {
                  props.setSliderPage(event);
                }}
              />
            </View>
          </View>
          <View style={styles.containersVw}>
            <ImageBackground style={{ flex: 1 }} source={Images.COVER_IMG}>
              <Text
                style={[styles.titlesTxt, { fontFamily: FONT_FAMILY_BOLD }]}
              >
                Browse Businesses by Category
              </Text>
              {props?.services?.length > 0 ? (
                <>
                  {props.services?.map((type) => {
                    return (
                      <BoxContainer
                        boxContainerImg={{ uri: type?.category_image }}
                        boxContainerTxt={type?.category_name}
                        paddingVertical={50}
                        marginHorizontal={20}
                      />
                    );
                  })}
                  <BoxContainer
                    boxContainerImg={Images.MORE_IMG}
                    boxContainerTxt={props.moreCategory ? "Less" : "More"}
                    onPress={() =>
                      props.setMoreCategory(props.moreCategory ? false : true)
                    }
                    paddingVertical={50}
                    marginHorizontal={10}
                  />
                </>
              ) : null}
              {props.moreCategory ? (
                <View style={[styles.boxesVw, { marginTop: 5 }]}>
                  {props?.moreServices?.length > 0 ? (
                    <>
                      {props?.moreServices?.map((more) => {
                        return (
                          <TouchableOpacity style={styles.moreServiceVw}>
                            <Text
                              style={[
                                CommonStyles.mediumTxt,
                                {
                                  color: BLACK_COLOR_CODE,
                                },
                              ]}
                            >
                              {more.category_name}
                            </Text>
                          </TouchableOpacity>
                        );
                      })}
                    </>
                  ) : null}
                </View>
              ) : null}
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
      {/* <ByCategory
        navigation={props.navigation}
        searchModal={searchModal}
        setSearchModal={setSearchModal}
      /> */}
    </View>
  );
};
export default DashBoardScreen;
