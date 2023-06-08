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
import { COLORS, Constants, FONT_SIZE } from "../../../../Utils/Constant";
import { IconX, ICON_TYPE } from "../../../../Components/Icons/Icon";

const RecentActivity = (props) => {
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
  const { activityData = [], onPressActivity = () => {} } = props;
  return (
    <View style={styles.activityConVw}>
      {activityData?.length > 0 ? (
        <>
          {activityData?.map((item) => {
            const chechData = activityData?.find((itm) => {
              return itm?.activity_type === 5;
            });
            const isPostLiked = false;
            const stringFyData = item?.products?.product_specification
              ? JSON?.parse(item?.products?.product_specification)
              : {};
            const images =
              item?.image === "" ||
              item?.image === undefined ||
              item?.image === null ||
              item?.image?.length === 0
                ? []
                : item?.activity_type === 8
                ? [item?.image?.toString()?.split(",")[0]]
                : item?.image?.toString()?.split(",");
            return (
              <TouchableOpacity
                activeOpacity={1}
                style={styles.activityCon}
                onPress={() => onPressActivity(item)}
              >
                <View style={styles.rowVw}>
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
                </View>
                {item?.activity_type === 2 || item?.activity_type === 4 ? (
                  <View style={styles.mainContVw}>
                    <ScaleText style={styles.mainHeadTxt}>
                      {item?.business_name}
                    </ScaleText>
                  </View>
                ) : (
                  <>
                    {item?.activity_type === 5 ? (
                      <View style={styles.mainContVw}>
                        <ScaleText style={styles.activityNameTxt}>
                          {"HeadLine"}
                        </ScaleText>
                        <ScaleText
                          style={[styles.activityCmntTxt, { marginLeft: 0 }]}
                        >
                          {"Description Loreum ipsum"}
                        </ScaleText>
                        <ScaleText style={styles.extraTxt}>
                          {"www.google.com"}
                        </ScaleText>
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
                            !item?.review?.business_rating
                              ? item?.review?.business_rating
                              : 1
                          )}
                          starsBackColor={COLORS.YELLOW}
                          UnActiveStarColor={COLORS.RGBA2}
                          ActiveStarColor={COLORS.WHITE}
                          marginTop={0}
                          starHeight={15}
                          starWidth={15}
                        />
                        <ScaleText style={styles.activityCmntTxt}>
                          {item?.review?.description}
                        </ScaleText>
                      </View>
                    ) : (
                      <>
                        {item?.activity_type === 5 ? (
                          <View style={styles.likeSection}>
                            <TouchableOpacity style={styles.likeView}>
                              <View style={{ marginRight: 5 }}>
                                <IconX
                                  origin={ICON_TYPE.ANT_ICON}
                                  color={
                                    isPostLiked ? COLORS.YELLOW : COLORS.RGBA
                                  }
                                  name={isPostLiked ? "like1" : "like2"}
                                  size={24}
                                />
                              </View>
                              <ScaleText
                                style={[
                                  styles.likeSectionText,
                                  isPostLiked && { color: COLORS.RGBA },
                                ]}
                              >
                                {isPostLiked ? "Liked" : "Like"}
                              </ScaleText>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.likeView}>
                              <View style={{ marginRight: 5 }}>
                                <IconX
                                  origin={ICON_TYPE.MATERIAL_COMMUNITY}
                                  color={COLORS.SMALL_TEXT}
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
                            >
                              <View style={{ marginRight: 5 }}>
                                <IconX
                                  origin={ICON_TYPE.ANT_ICON}
                                  color={COLORS.RGBA}
                                  name={"sharealt"}
                                  size={24}
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
                                          {"Event Name"}
                                        </ScaleText>
                                        <ScaleText
                                          style={styles.activitySubTxt}
                                        >
                                          Event description lorem epsum da luixe
                                          a name of a decide to dao a luxry cope
                                          a humanity of monet and something to
                                          do..
                                        </ScaleText>
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
