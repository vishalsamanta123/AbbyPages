import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../Utils/Constant";
import moment from "moment";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import ScaleText from "../ScaleText";

const MainItemsView = (props) => {
  const {
    item = {},
    index = "",
    onPressView,
    onPressLike,
    largeImg = "",
    largeName = "",
    smallTxt = "",
    rating = "",
    rowImgTxt1 = "",
    rowImgTxt2 = "",
    rowImgTxt3 = "",
    listType = "",
    smallImg = "",
    rowImgTxt4 = "",
    title = "",
    profile_image,
    description = "Scooping and hapiness every single child have to do other ",
    iconType = "",
    iconColor = COLORS.YELLOW,
  } = props;
  return (
    <>
      {listType === "" ? (
        <TouchableOpacity
          onPress={() => onPressView(item)}
          style={[styles.mainConatiner]}
        >
          {largeImg === "" ? null : (
            <Image
              style={styles.largeImgVw}
              resizeMode="cover"
              source={{ uri: largeImg }}
            />
          )}
          <View style={styles.innContainer}>
            <ScaleText style={styles.largeNameTxt}>{largeName}</ScaleText>
            <ScaleText style={styles.smallTxt}>{smallTxt}</ScaleText>
            {rating === "" ? null : (
              <View style={styles.straightVw}>
                <View style={styles.ratingVw}>
                  <ScaleText style={styles.ratingTxt}>
                    {rating?.substring(0, 3)}
                  </ScaleText>
                </View>
                <ScaleText style={[styles.ratingTxt, { color: COLORS.BLACK }]}>
                  rating
                </ScaleText>
              </View>
            )}
            <View style={styles.straightVw}>
              <IconX
                color={iconColor}
                origin={
                  iconType === "job"
                    ? ICON_TYPE.SIMPLELINE
                    : ICON_TYPE.FEATHER_ICONS
                }
                name={iconType === "job" ? "location-pin" : "thumbs-up"}
                size={20}
                paddingRight={5}
              />
              <ScaleText style={styles.smallTxt}>{rowImgTxt1}</ScaleText>
            </View>
            <View style={styles.straightVw}>
              <IconX
                color={iconColor}
                origin={
                  iconType === "job"
                    ? ICON_TYPE.ICONICONS
                    : ICON_TYPE.SIMPLELINE
                }
                name={iconType === "job" ? "time-outline" : "fire"}
                size={20}
                paddingRight={5}
              />
              <ScaleText style={styles.smallTxt}>
                {moment(rowImgTxt2).startOf("hour").fromNow()}
              </ScaleText>
            </View>
            {rowImgTxt3 === "" || rowImgTxt3 === null ? null : (
              <View style={styles.straightVw}>
                <IconX
                  color={iconColor}
                  origin={ICON_TYPE.SIMPLELINE}
                  name={"briefcase"}
                  size={19}
                  paddingRight={5}
                />
                <ScaleText numberOfLines={2} style={styles.smallTxt}>
                  {rowImgTxt3}
                </ScaleText>
              </View>
            )}
            {rowImgTxt4 === "" || rowImgTxt4 === null ? null : (
              <View style={styles.straightVw}>
                <IconX
                  color={iconColor}
                  origin={ICON_TYPE.FEATHER_ICONS}
                  name={"dollar-sign"}
                  size={20}
                  paddingRight={5}
                />
                <ScaleText numberOfLines={2} style={styles.smallTxt}>
                  {rowImgTxt4}
                </ScaleText>
              </View>
            )}
          </View>
        </TouchableOpacity>
      ) : (
        <>
        <TouchableOpacity style={[styles.rowVw, {marginTop: 10}]}>
          <Image
            style={styles.smallImgVw}
            resizeMode="cover"
            source={{ uri: profile_image }}
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
                <ScaleText style={[styles.largeNameTxt, { color: COLORS.BLACK }]}>
                  {title}
                </ScaleText>
                <View style={styles.rowVw}>
                  <ScaleText style={styles.lightTxt}>
                    By {largeName} |{" "}
                  </ScaleText>
                  <ScaleText style={styles.lightTxt}>
                    {moment(rowImgTxt2).startOf("hour").fromNow()}
                  </ScaleText>
                </View>
              </View>
              <View style={styles.straightVw}>
                <View style={styles.ratingVw}>
                  <ScaleText style={styles.ratingTxt}>
                    {rating?.substring(0, 3)}
                  </ScaleText>
                </View>
                <ScaleText style={[styles.ratingTxt, { color: COLORS.BLACK }]}>
                  rating
                </ScaleText>
              </View>
            </View>
            <ScaleText style={styles.descTxt}>{description}</ScaleText>
          </View>
        </TouchableOpacity>
        <View style={styles.postBreakView}></View>
        </>

      )}
    </>
  );
};

export default MainItemsView;

const styles = StyleSheet.create({
  mainConatiner: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.BORDER_LINE,
  },
  largeImgVw: {
    width: 110,
    height: 120,
    borderRadius: 15,
    marginBottom: 5,
  },
  straightVw: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  rowVw: {
    flexDirection: "row",
    marginVertical: 4,
  },
  ratingVw: {
    backgroundColor: COLORS.LIGHT_GREEN,
    paddingHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginRight: 5,
  },
  ratingTxt: {
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    fontSize: FONT_SIZE.small,
    lineHeight: 18,
  },
  innContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  infoView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  largeNameTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 18,
    color: COLORS.BLACK,
    textTransform: "capitalize",
  },
  smallTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 13.5,
    color: COLORS.BLACK,
  },
  emptyConVw: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyConTxt: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  lightTxt: {
    fontSize: 14,
    color: COLORS.SMALL_TEXT,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  smallImgVw: {
    width: 35,
    height: 35,
    borderRadius: 100,
    marginHorizontal: 5,
    marginLeft: 10,
    marginTop: 10,
  },
  descTxt:{
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  postBreakView: {
    borderWidth: Constants.standardBW,
    borderColor: COLORS.BORDER_LINE,
    width: "100%",
    marginTop: 10,
  },
});
