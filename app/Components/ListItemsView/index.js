import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE,
  GREY_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../Utils/Constant";
import { Images } from "../../Utils/images";
import moment from "moment";
import { IconX, ICON_TYPE } from "../Icons/Icon";

const ListItemsView = (props) => {
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
  } = props;
  return (
    <>
      {listType === "" ? (
        <TouchableOpacity
          onPress={() => onPressView(item)}
          style={styles.mainConatiner}
        >
          <Image
            style={styles.largeImgVw}
            resizeMode="cover"
            source={{ uri: largeImg }}
          />
          <View style={styles.innContainer}>
            <Text style={styles.largeNameTxt}>{largeName}</Text>
            <Text style={styles.smallTxt}>{smallTxt}</Text>
            <View style={styles.straightVw}>
              <View style={styles.ratingVw}>
                <Text style={styles.ratingTxt}>{rating}</Text>
              </View>
              <Text style={[styles.ratingTxt, { color: BLACK_COLOR_CODE }]}>
                rating
              </Text>
            </View>
            <View style={styles.straightVw}>
              <IconX
                color={YELLOW_COLOR_CODE}
                origin={ICON_TYPE.FEATHER_ICONS}
                name={"thumbs-up"}
                size={20}
                paddingRight={5}
              />
              <Text style={styles.smallTxt}>{rowImgTxt1}</Text>
            </View>
            <View style={styles.straightVw}>
              <IconX
                color={YELLOW_COLOR_CODE}
                origin={ICON_TYPE.SIMPLELINE}
                name={"fire"}
                size={20}
                paddingRight={5}
              />
              <Text style={styles.smallTxt}>
                {moment(rowImgTxt2).startOf("hour").fromNow()}
              </Text>
            </View>
            {rowImgTxt3 ? (
              <View style={styles.straightVw}>
                <IconX
                  color={YELLOW_COLOR_CODE}
                  origin={ICON_TYPE.SIMPLELINE}
                  name={"briefcase"}
                  size={20}
                  paddingRight={5}
                />
                <Text numberOfLines={2} style={styles.smallTxt}>
                  {rowImgTxt3}
                </Text>
              </View>
            ) : null}
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.rowVw}>
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
                <Text style={[styles.ratingTxt, { color: BLACK_COLOR_CODE }]}>
                  {title}
                </Text>
                <View style={styles.rowVw}>
                  <Text style={styles.lightTxt}>By {largeName} | </Text>
                  <Text style={styles.lightTxt}>
                    {moment(rowImgTxt2).startOf("hour").fromNow()}
                  </Text>
                </View>
              </View>
              <View style={styles.straightVw}>
                <View style={styles.ratingVw}>
                  <Text style={styles.ratingTxt}>{rating}</Text>
                </View>
                <Text style={[styles.ratingTxt, { color: BLACK_COLOR_CODE }]}>
                  rating
                </Text>
              </View>
            </View>
            <Text>{description}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default ListItemsView;

const styles = StyleSheet.create({
  mainConatiner: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: GREY_COLOR_CODE,
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
    backgroundColor: "#a3d74e",
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginRight: 5,
  },
  ratingTxt: {
    color: WHITE_COLOR_CODE,
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE.medium,
  },
  innContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  infoView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  largeNameTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 18,
    color: BLACK_COLOR_CODE,
    textTransform: "capitalize",
  },
  smallTxt: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 13.5,
    color: LIGHT_BLACK_COLOR_CODE,
  },
  emptyConVw: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyConTxt: {
    fontSize: 18,
    color: BLACK_COLOR_CODE,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  lightTxt: {
    fontSize: 14,
    color: COLORS.SMALL_TEXT,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  smallImgVw: {
    width: 35,
    height: 35,
    borderRadius: 100,
    marginHorizontal: 5,
    marginLeft: 10,
    marginTop: 10,
  },
});
