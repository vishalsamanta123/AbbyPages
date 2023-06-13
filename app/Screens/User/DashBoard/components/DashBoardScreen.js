import React from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  RefreshControl,
} from "react-native";
import styles from "./styles";
import CommonStyles from "../../../../Utils/CommonStyles";
import { COLORS, FONT_FAMILY } from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";
import BoxContainer from "../../../../Components/BoxContainer";
import MainHeader from "../../../../Components/MainHeader";
import ScaleText from "../../../../Components/ScaleText";
import { ListShimmer } from "../../../../Components/ShimmerEffect";
import SliderImages from "../../../../Components/SliderImages";
import PageScroll from "../../../../Components/PageScroll";
import { ICON_TYPE, IconX } from "../../../../Components/Icons/Icon";
import RecentActivity from "./RecentActivity";
import Loader from "../../../../Utils/Loader";

const DashBoardScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <MainHeader headerType={"logo"} />
      <PageScroll
        refreshControl={
          <RefreshControl
            colors={[COLORS.YELLOW]}
            refreshing={props.refreshing}
            onRefresh={props.onRefresh}
          />
        }
        nestedScrollEnabled={true}
      >
        <ImageBackground
          source={Images.EMPLOYESS_IMG}
          style={styles.backgroundImgVw}
        >
          <View style={styles.imgInnerVw}>
            <ScaleText style={CommonStyles.bigTxtVw}>
              <ScaleText style={styles.supportTxt}>Support </ScaleText>
              Black Excellence!
            </ScaleText>
            <ScaleText style={[CommonStyles.mediumTxt, { marginTop: 16 }]}>
              Discover Events, Jobs, Goods, Services, Directions, Reviews,
              Deals, and More on ABBYPAGES.
            </ScaleText>
          </View>
        </ImageBackground>
        <View style={styles.mainVw}>
          <View style={styles.containersVw}>
            <ScaleText style={styles.titlesTxt}>Recent Activities</ScaleText>
            {props.visible ? (
              <View>
                <ListShimmer />
              </View>
            ) : (
              <RecentActivity
                activityData={props.recent_activity}
                setActivityData={props?.setRecent_Activity}
                messageShow={props.messageShow}
                setMessageShow={props.setMessageShow}
              />
            )}
            {props.recentLoader && (
              <Loader type={"small"} state={props.recentLoader} />
            )}
            {props?.recent_activity?.length > 2 && !props.recentLoader ? (
              <TouchableOpacity
                onPress={() => {
                  if (props?.recent_activity?.length < props?.moreData) {
                    props.getDashBoardActivity(props.actOffset + 1);
                  }
                }}
                style={styles.seeMoreBttn}
                activeOpacity={
                  props?.recent_activity?.length < props?.moreData ? 0 : 1
                }
              >
                <ScaleText style={styles.seeMoreBttnTxt}>
                  {props?.recent_activity?.length < props?.moreData
                    ? "Show More Activity"
                    : "Activities End"}
                </ScaleText>
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={styles.containersVw}>
            <ScaleText style={styles.titlesTxt}>
              Find the Best Black-Owned Businesses in
              <ScaleText style={{ fontFamily: FONT_FAMILY.BOLD }}>
                {" "}
                Town
              </ScaleText>
            </ScaleText>
          </View>
          <View style={styles.posterVw}>
            <SliderImages
              data={props.businessTypes}
              posterImg={"business_type_image"}
              titleTxt={"business_type_name"}
              subTitleTxt={"total_business_count"}
              imgWidth={"97%"}
            />
          </View>
          <View style={styles.containersVw}>
            <ImageBackground style={{ flex: 1 }} source={Images.COVER_IMG}>
              <ScaleText
                style={[
                  styles.titlesTxt,
                  { fontFamily: FONT_FAMILY.BOLD, marginBottom: 10 },
                ]}
              >
                Browse Businesses by Category
              </ScaleText>
              {props?.services?.length > 0 ? (
                <>
                  {props.services?.map((type) => {
                    return (
                      <BoxContainer
                        boxContainerImg={{ uri: type?.category_image }}
                        boxContainerTxt={type?.category_name}
                        paddingVertical={50}
                        marginHorizontal={20}
                        onPressBox={() => props.handleCategoryPress(type)}
                      />
                    );
                  })}
                  {/* <BoxContainer
                    boxContainerImg={Images.MORE_IMG}
                    boxContainerTxt={props.moreCategory ? "Less" : "More"}
                    onPressBox={() =>
                      props.setMoreCategory(props.moreCategory ? false : true)
                    }
                    paddingVertical={50}
                    marginHorizontal={10}
                  /> */}
                </>
              ) : null}
              {props.moreCategory ? (
                <View style={[styles.boxesVw, { marginTop: 5 }]}>
                  {props?.moreServices?.length > 0 ? (
                    <>
                      {props?.moreServices?.map((more) => {
                        return (
                          <TouchableOpacity
                            style={styles.moreServiceVw}
                            onPress={() => props.handleCategoryPress(more)}
                          >
                            <ScaleText
                              style={[
                                CommonStyles.mediumTxt,
                                {
                                  color: COLORS.BLACK,
                                },
                              ]}
                            >
                              {more.category_name}
                            </ScaleText>
                          </TouchableOpacity>
                        );
                      })}
                    </>
                  ) : null}
                </View>
              ) : null}
              {/* <BoxContainer
                    boxContainerImg={Images.MORE_IMG}
                    boxContainerTxt={props.moreCategory ? "Less" : "More"}
                    onPressBox={() =>
                      props.setMoreCategory(props.moreCategory ? false : true)
                    }
                    paddingVertical={50}
                    marginHorizontal={10}
                  /> */}
              <View style={{ alignItems: "center", marginVertical: 20 }}>
                <TouchableOpacity
                  style={styles.showMoreTouch}
                  onPress={() => props.setMoreCategory(!props.moreCategory)}
                >
                  <ScaleText style={styles.showMoreTxt}>
                    {props.moreCategory ? "Less" : "More"}
                  </ScaleText>
                  <IconX
                    origin={ICON_TYPE.ANT_ICON}
                    name={props.moreCategory ? "up" : "down"}
                    size={20}
                    color={COLORS.BLACK}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
      </PageScroll>
    </View>
  );
};
export default DashBoardScreen;
