import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import ScaleText from "../../../../Components/ScaleText";
import StarShower from "../../../../Components/StarShower";
import FastImages from "../../../../Components/FastImage";
import { COLORS, FONT_SIZE } from "../../../../Utils/Constant";
import { IconX, ICON_TYPE } from "../../../../Components/Icons/Icon";
import { useNavigation } from "@react-navigation/native";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import { apiCall } from "../../../../Utils/httpClient";
import {
  handleBusinessShow,
  handleSharePress,
} from "../../../../Utils/Globalfunctions";

const RecentActivity = (props) => {
  const navigation = useNavigation();
  const [moreImage, setMoreImage] = useState(1);
  // {
  // 1 = default ,
  //  2 = user upload image ,                      get Type
  //   3 = business upload image ,                 get Type
  //    4 = review by user ,                       get Type
  //     5 = abby connect ,
  //      6 = job ,                                get Type
  //      7 = product ,                            get Type
  //       8 = event
  // }
  const { activityData = [], setActivityData } = props;

  const onPressActivity = (item) => {
    if (item?.activity_type === 1) {
      props.setMessageShow({
        visible: true,
        message: "Comming Soon",
        type: "",
      });
    } else if (item?.activity_type === 2 || item?.activity_type === 3) {
      handleBusinessShow(item, "gallery", navigation);
    } else if (item?.activity_type === 4) {
      navigation.navigate("ReviewRating", {
        detailData: item,
      });
    } else if (item?.activity_type === 5) {
      const getObj = {
        ...item,
        post_id: item?.abbyconnect?.post_id,
      };
      navigation.navigate("NeweFeedDetails", { post: getObj });
    } else if (item?.activity_type === 6) {
      const getObj = {
        ...item,
        job_id: item?.jobs?.job_id,
      };
      navigation.navigate("JobDetail", { detail: getObj });
    } else if (item?.activity_type === 7) {
      const getObj = {
        ...item,
        product_id: item?.products?.product_id,
        business_id: item?.business_id,
      };
      navigation.navigate("MarketplaceDetail", getObj);
    } else if (item?.activity_type === 8) {
      const getObj = { ...item, event_id: item?.event?.event_id };
      navigation.navigate("EventDetail", { item: getObj });
    }
  };
  const onPressLike = async (item, index) => {
    const abbyconnect = item?.abbyconnect;
    try {
      const params = {
        post_id: abbyconnect?.post_id,
        like_status: abbyconnect?.postLikeData?.likeStatus === 0 ? 1 : 0, //1 = like , 0 = unlike
        business_id: item?.business_id,
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.LIKE_UNLIKE_ABBY_CONNECT_POST,
        params
      );
      if (data.status == 200) {
        const newObj = {
          ...item,
          likeStatus: item?.likeStatus === 0 ? 1 : 0,
        };
        const newArray = [...activityData];
        newArray[index] = newObj;
        setActivityData(newArray);
      } else {
        if (data.status === 201) {
          props.setMessageShow({
            visible: true,
            message: data?.message,
            type: "error",
          });
        } else {
          props.setMessageShow({
            visible: true,
            message: data?.message,
            type: "error",
          });
        }
      }
    } catch (error) {}
  };
  return (
    <View style={styles.activityConVw}>
      {activityData?.length > 0 ? (
        <>
          {activityData?.map((item, index) => {
            const chechData = activityData?.find((itm) => {
              return itm?.activity_type === 5;
            });
            const stringFyData = item?.products?.product_specification
              ? JSON?.parse(item?.products?.product_specification)
              : {};
            const images =
              item?.image === "" ||
              item?.image === undefined ||
              item?.image === null ||
              item?.image?.length === 0
                ? []
                : item?.activity_type === 8 || item?.activity_type === 5
                ? [item?.image?.toString()?.split(",")[0]]
                : item?.image?.toString()?.split(",");

            return (
              <TouchableOpacity
                activeOpacity={1}
                style={styles.activityCon}
                onPress={() => onPressActivity(item)}
              >
                <TouchableOpacity
                  activeOpacity={item?.user ? 1 : 0}
                  style={styles.rowVw}
                  onPress={() => {
                    if (item?.user) {
                      onPressActivity(item);
                    } else {
                      handleBusinessShow(item, "", navigation);
                    }
                  }}
                >
                  <Image
                    source={{
                      uri: item?.user
                        ? item?.user?.profile
                        : item?.business_logo,
                    }}
                    style={styles.activityProfileVw}
                  />
                  <View style={styles.textVw}>
                    <ScaleText style={styles.activityNameTxt}>
                      {item?.user
                        ? item?.user?.first_name + " " + item?.user?.last_name
                        : item?.business_name}
                    </ScaleText>
                    <ScaleText style={styles.activityTitlTxt}>
                      {item?.activity_type === 1
                        ? ""
                        : item?.activity_type === 2
                        ? `${"Added " + images?.length + " Photos"}`
                        : item?.activity_type === 3
                        ? `${"Business Added " + images?.length + " Photos"}`
                        : item?.activity_type === 4
                        ? "Wrote a Review"
                        : item?.activity_type === 5
                        ? "Posted a Feed"
                        : item?.activity_type === 6
                        ? "Posted a Job"
                        : item?.activity_type === 7
                        ? "Added Product"
                        : item?.activity_type === 8
                        ? "Posted a Event"
                        : ""}
                    </ScaleText>
                  </View>
                </TouchableOpacity>
                {item?.activity_type === 2 || item?.activity_type === 4 ? (
                  <TouchableOpacity
                    onPress={() => handleBusinessShow(item, "", navigation)}
                    style={styles.mainContVw}
                  >
                    <ScaleText style={styles.mainHeadTxt}>
                      {item?.business_name}
                    </ScaleText>
                  </TouchableOpacity>
                ) : (
                  <>
                    {item?.activity_type === 5 ? (
                      <View style={[styles.mainContVw, { marginTop: 3 }]}>
                        <ScaleText style={styles.activityNameTxt}>
                          {item?.abbyconnect?.headline?.trim()}
                        </ScaleText>
                        {item?.abbyconnect?.description ? (
                          <ScaleText
                            numberOfLines={2}
                            style={[styles.activityCmntTxt, { marginLeft: 0 }]}
                          >
                            {item?.abbyconnect?.description}
                          </ScaleText>
                        ) : null}
                        {item?.abbyconnect?.link ? (
                          <ScaleText style={styles.extraTxt}>
                            {item?.abbyconnect?.link}
                          </ScaleText>
                        ) : null}
                      </View>
                    ) : null}
                  </>
                )}
                {Array.isArray(images) && images?.length > 0 ? (
                  <ScrollView nestedScrollEnabled={true}>
                    <View style={styles.photosVw}>
                      {images?.map((photos, index) => {
                        return (
                          index <= moreImage && (
                            <View
                              style={{
                                width: images?.length === 1 ? "100%" : "48%",
                                paddingHorizontal: images?.length === 1 ? 0 : 5,
                              }}
                            >
                              <FastImages
                                source={{ uri: photos }}
                                resizeMode={"cover"}
                                style={styles.activityBnnrVw}
                              />
                            </View>
                          )
                        );
                      })}
                    </View>
                    {(item?.activity_type === 2 || item?.activity_type === 3) &&
                    images?.length > 2 ? (
                      <TouchableOpacity
                        onPress={() => setMoreImage(moreImage >= 9 ? 1 : 9)}
                        style={[
                          styles.seeMoreVw,
                          {
                            alignSelf: moreImage >= 9 ? "center" : "flex-end",
                          },
                        ]}
                      >
                        <ScaleText
                          style={[
                            styles.seeMoreBttnTxt,
                            { fontSize: FONT_SIZE.small },
                          ]}
                        >
                          {moreImage >= 9 ? "See Less" : "See More"} Images
                        </ScaleText>
                      </TouchableOpacity>
                    ) : null}
                  </ScrollView>
                ) : (
                  <FastImages
                    source={{ uri: item?.business_logo }}
                    resizeMode={"cover"}
                    style={styles.activityBnnrVw}
                  />
                )}
                {item?.activity_type === 1 ? (
                  <></>
                ) : (
                  <>
                    {item?.activity_type === 4 ? (
                      <View style={styles.mainContVw}>
                        <StarShower
                          counts={Number(
                            item?.review?.business_rating
                              ? item?.review?.business_rating
                              : 1
                          )}
                          starsBackColor={COLORS.YELLOW}
                          UnActiveStarColor={COLORS.RGBA2}
                          ActiveStarColor={COLORS.WHITE}
                          marginTop={0}
                          starHeight={14}
                          starWidth={14}
                        />
                        <ScaleText style={styles.activityCmntTxt}>
                          {item?.review?.description}
                        </ScaleText>
                      </View>
                    ) : (
                      <>
                        {item?.activity_type === 5 ? (
                          <View style={styles.likeSection}>
                            <TouchableOpacity
                              onPress={() => onPressLike(item, index)}
                              style={styles.likeView}
                            >
                              <View style={{ marginRight: 5 }}>
                                <IconX
                                  origin={ICON_TYPE.ANT_ICON}
                                  color={
                                    item?.likeStatus === 1
                                      ? COLORS.YELLOW
                                      : COLORS.RGBA
                                  }
                                  name={
                                    item?.likeStatus === 1 ? "like1" : "like2"
                                  }
                                  size={24}
                                />
                              </View>
                              <ScaleText
                                style={[
                                  styles.likeSectionText,
                                  {
                                    color:
                                      item?.likeStatus === 1
                                        ? COLORS.YELLOW
                                        : COLORS.RGBA,
                                  },
                                ]}
                              >
                                {item?.likeStatus === 1 ? "Liked" : "Like"}
                              </ScaleText>
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => {
                                const getObj = {
                                  ...item,
                                  openFile: "comment",
                                  post_id: item?.abbyconnect?.post_id,
                                };
                                navigation.navigate("NeweFeedDetails", {
                                  post: getObj,
                                });
                              }}
                              style={styles.likeView}
                            >
                              <View style={{ marginRight: 5 }}>
                                <IconX
                                  origin={ICON_TYPE.MATERIAL_COMMUNITY}
                                  color={COLORS.LIGHT_BLACK}
                                  name={"comment-outline"}
                                  size={24}
                                />
                              </View>
                              <ScaleText style={styles.likeSectionText}>
                                Comment
                              </ScaleText>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={[styles.likeView, { borderRightWidth: 0 }]}
                              onPress={() => {
                                const finalName = item?.business_name
                                  ?.split(" ")
                                  .join("-");
                                handleSharePress({
                                  message: `https://abbypages.com/news-feeds/${finalName}/${item?.abbyconnect?.post_id}`,
                                  title: item?.business_name,
                                  imageUrl: item?.business_logo,
                                });
                              }}
                            >
                              <View style={{ marginRight: 5 }}>
                                <IconX
                                  origin={ICON_TYPE.MATERIAL_COMMUNITY}
                                  color={COLORS.RGBA}
                                  name={"share-outline"}
                                  size={30}
                                />
                              </View>
                              <ScaleText style={styles.likeSectionText}>
                                Share
                              </ScaleText>
                            </TouchableOpacity>
                          </View>
                        ) : (
                          <>
                            {item?.activity_type === 6 ? (
                              <View
                                style={[styles.mainContVw, { marginTop: 0 }]}
                              >
                                <ScaleText style={styles.mainHeadTxt}>
                                  {item?.jobs?.job_title}
                                </ScaleText>
                                <ScaleText style={styles.activitySubTxt}>
                                  {"Full Time"}
                                </ScaleText>
                                <ScaleText style={styles.activitySubTxt}>
                                  {"Benefits ,Time Flexibility"}
                                </ScaleText>
                                <ScaleText style={styles.activityLightTxt}>
                                  {"USA,Florido, Orlando "}
                                </ScaleText>
                              </View>
                            ) : (
                              <>
                                {item?.activity_type === 7 ? (
                                  <View style={styles.mainContVw}>
                                    <ScaleText
                                      style={[
                                        styles.mainHeadTxt,
                                        {
                                          textDecorationLine: "none",
                                        },
                                      ]}
                                    >
                                      {stringFyData?.title
                                        ? stringFyData?.title
                                        : ""}
                                    </ScaleText>
                                    <ScaleText style={styles.activitySubTxt}>
                                      {stringFyData?.descriptions
                                        ? stringFyData?.descriptions
                                        : ""}
                                    </ScaleText>
                                    <ScaleText style={styles.activityLightTxt}>
                                      Quantity :{" "}
                                      {stringFyData?.quantity
                                        ? stringFyData?.quantity
                                        : ""}
                                    </ScaleText>
                                  </View>
                                ) : (
                                  <>
                                    {item?.activity_type === 8 ? (
                                      <View
                                        style={[
                                          styles.mainContVw,
                                          { marginTop: 0 },
                                        ]}
                                      >
                                        <ScaleText style={styles.mainHeadTxt}>
                                          {item?.event?.event_name}
                                        </ScaleText>
                                        {item?.event?.event_description ? (
                                          <ScaleText
                                            style={styles.activitySubTxt}
                                            numberOfLines={5}
                                          >
                                            {item?.event?.event_description}
                                          </ScaleText>
                                        ) : null}
                                      </View>
                                    ) : null}
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </TouchableOpacity>
            );
          })}
        </>
      ) : null}
    </View>
  );
};

export default RecentActivity;
