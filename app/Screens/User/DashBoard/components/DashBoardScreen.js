import React from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  RefreshControl,
} from "react-native";
import styles from "./styles";
import CommonStyles from "../../../../Utils/CommonStyles";
import { COLORS, Constants, FONT_FAMILY } from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";
import Carousel, { Pagination } from "react-native-snap-carousel";
import BoxContainer from "../../../../Components/BoxContainer";
import StarShower from "../../../../Components/StarShower";
import MainHeader from "../../../../Components/MainHeader";
import ScaleText from "../../../../Components/ScaleText";
import { ListShimmer } from "../../../../Components/ShimmerEffect";
import SliderImages from "../../../../Components/SliderImages";
import PageScroll from "../../../../Components/PageScroll";

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
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={{ flexGrow: 1 }}
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
            ) : // <View style={styles.activityConVw}>
            //   {props?.recent_activity?.length > 0 ? (
            //     <>
            //       {props?.recent_activity?.map((activity) => {
            //         return (
            //           <TouchableOpacity
            //             activeOpacity={1}
            //             style={styles.activityCon}
            //             onPress={() => props.handleOnActivity(activity)}
            //           >
            //             <View style={styles.rowVw}>
            //               <Image
            //                 source={{ uri: activity?.user?.profile }}
            //                 style={styles.activityProfileVw}
            //               />
            //               <View style={styles.textVw}>
            //                 <ScaleText style={styles.activityNameTxt}>
            //                   {activity?.user?.first_name +
            //                     " " +
            //                     activity?.user?.last_name}
            //                 </ScaleText>
            //                 <ScaleText style={styles.activityRvwTxt}>
            //                   {activity?.review
            //                     ? "Wrote a Review"
            //                     : activity?.image?.length > 0
            //                     ? `${
            //                         "Added " +
            //                         activity?.image?.length +
            //                         " Photos"
            //                       }`
            //                     : null}
            //                 </ScaleText>
            //               </View>
            //             </View>
            //             {activity?.image?.length > 0 ? (
            //               <ScaleText style={styles.activityMainTxt}>
            //                 {activity?.business_name}
            //               </ScaleText>
            //             ) : null}
            //             {activity?.review ? (
            //               <Image
            //                 source={{ uri: activity?.business_logo }}
            //                 style={[
            //                   styles.activityBnnrVw,
            //                   {
            //                     marginBottom: 0,
            //                   },
            //                 ]}
            //                 resizeMode={"cover"}
            //               />
            //             ) : (
            //               <>
            //                 {Array.isArray(activity?.image) &&
            //                 activity?.image?.length > 0 ? (
            //                   <ScrollView
            //                     nestedScrollEnabled
            //                     contentContainerStyle={styles.photosVw}
            //                   >
            //                     {activity?.image
            //                       ?.slice(0, 5)
            //                       ?.map((photos) => {
            //                         return (
            //                           <Image
            //                             source={{ uri: photos }}
            //                             resizeMode={"cover"}
            //                             style={[
            //                               styles.activityBnnrVw,
            //                               {
            //                                 marginBottom: 10,
            //                                 width:
            //                                   activity?.image?.length === 1
            //                                     ? "100%"
            //                                     : Constants.windowWidth / 2.4,
            //                               },
            //                             ]}
            //                           />
            //                         );
            //                       })}
            //                   </ScrollView>
            //                 ) : null}
            //                 {/* {activity?.image?.length > 2 ? (
            //                 <TouchableOpacity onPress={() => setViewPhotos()}>
            //                   <ScaleText style={styles.seeAllTxt}>
            //                     See All {activity?.image?.length} Photos
            //                   </ScaleText>
            //                 </TouchableOpacity>
            //               ) : null} */}
            //               </>
            //             )}
            //             {activity?.review ? (
            //               <ScaleText style={styles.activityMainTxt}>
            //                 {activity?.business_name}
            //               </ScaleText>
            //             ) : null}
            //             {activity?.review ? (
            //               <>
            //                 <StarShower
            //                   marginLeft={8}
            //                   counts={activity?.review?.business_rating}
            //                 />
            //                 <ScaleText style={styles.activityCmntTxt}>
            //                   {activity?.review?.description}
            //                 </ScaleText>
            //               </>
            //             ) : null}
            //           </TouchableOpacity>
            //         );
            //       })}
            //     </>
            //   ) : null}
            // </View>
            null}
            {/* {props.recentLoader && (
              <Loader type={"small"} state={props.recentLoader} />
            )} */}
            {/* {props?.recent_activity?.length > 2 && !props.recentLoader ? (
              <TouchableOpacity
                onPress={() => {
                  if (props?.recent_activity?.length < props?.moreData) {
                    props.getDashBoardActivity(props.actOffset + 1);
                  }
                }}
                style={styles.seeMoreBttn}
              >
                <ScaleText style={styles.seeMoreBttnTxt}>
                  Show More Activity
                </ScaleText>
              </TouchableOpacity>
            ) : null} */}
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
            </ImageBackground>
          </View>
        </View>
      </PageScroll>
    </View>
  );
};
export default DashBoardScreen;
