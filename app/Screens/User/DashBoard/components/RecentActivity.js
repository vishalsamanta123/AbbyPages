import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import ScaleText from "../../../../Components/ScaleText";
import StarShower from "../../../../Components/StarShower";
import FastImages from "../../../../Components/FastImage";

const RecentActivity = (props) => {
  const { activityData = [], onPressActivity = () => {} } = props;
  return (
    <View style={styles.activityConVw}>
      {activityData?.length > 0 ? (
        <>
          {activityData?.map((item) => {
            return (
              <TouchableOpacity
                activeOpacity={1}
                style={styles.activityCon}
                onPress={() => onPressActivity(item)}
              >
                <View style={styles.rowVw}>
                  <Image
                    source={{ uri: item?.user?.profile }}
                    style={styles.activityProfileVw}
                  />
                  <View style={styles.textVw}>
                    <ScaleText style={styles.activityNameTxt}>
                      {item?.user?.first_name +
                        " " +
                        item?.user?.last_name}
                    </ScaleText>
                    <ScaleText style={styles.activityRvwTxt}>
                      {item?.review
                        ? "Wrote a Review"
                        : item?.image?.length > 0
                        ? `${"Added " + item?.image?.length + " Photos"}`
                        : null}
                    </ScaleText>
                  </View>
                </View>
                {item?.image?.length > 0 ? (
                  <ScaleText style={styles.activityMainTxt}>
                    {item?.business_name}
                  </ScaleText>
                ) : null}
                {item?.review ? (
                  <FastImages
                    source={{ uri: item?.business_logo }}
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
                    {Array.isArray(item?.image) &&
                    item?.image?.length > 0 ? (
                      <ScrollView
                        nestedScrollEnabled
                        contentContainerStyle={styles.photosVw}
                      >
                        {item?.image?.slice(0, 5)?.map((photos) => {
                          return (
                            <FastImages
                              source={{ uri: photos }}
                              resizeMode={"cover"}
                              style={[
                                styles.activityBnnrVw,
                                {
                                  marginBottom: 10,
                                  width:
                                    item?.image?.length === 1
                                      ? "100%"
                                      : Constants.windowWidth / 2.4,
                                },
                              ]}
                            />
                          );
                        })}
                      </ScrollView>
                    ) : null}
                    {/* {item?.image?.length > 2 ? (
                            <TouchableOpacity onPress={() => setViewPhotos()}>
                              <ScaleText style={styles.seeAllTxt}>
                                See All {item?.image?.length} Photos
                              </ScaleText>
                            </TouchableOpacity>
                          ) : null} */}
                  </>
                )}
                {item?.review ? (
                  <ScaleText style={styles.activityMainTxt}>
                    {item?.business_name}
                  </ScaleText>
                ) : null}
                {item?.review ? (
                  <>
                    <StarShower
                      marginLeft={8}
                      counts={item?.review?.business_rating}
                    />
                    <ScaleText style={styles.activityCmntTxt}>
                      {item?.review?.description}
                    </ScaleText>
                  </>
                ) : null}
              </TouchableOpacity>
            );
          })}
        </>
      ) : null}
    </View>
  );
};

export default RecentActivity;
