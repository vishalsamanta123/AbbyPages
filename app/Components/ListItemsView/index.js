import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";
import moment from "moment";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import ScaleText from "../ScaleText";

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
            <ScaleText style={styles.largeNameTxt}>{largeName}</ScaleText>
            <ScaleText style={styles.smallTxt}>{smallTxt}</ScaleText>
            <View style={styles.straightVw}>
              <View style={styles.ratingVw}>
                <ScaleText style={styles.ratingTxt}>{rating}</ScaleText>
              </View>
              <ScaleText style={[styles.ratingTxt, { color: COLORS.BLACK }]}>
                rating
              </ScaleText>
            </View>
            <View style={styles.straightVw}>
              <IconX
                color={COLORS.YELLOW}
                origin={ICON_TYPE.FEATHER_ICONS}
                name={"thumbs-up"}
                size={20}
                paddingRight={5}
              />
              <ScaleText style={styles.smallTxt}>{rowImgTxt1}</ScaleText>
            </View>
            <View style={styles.straightVw}>
              <IconX
                color={COLORS.YELLOW}
                origin={ICON_TYPE.SIMPLELINE}
                name={"fire"}
                size={20}
                paddingRight={5}
              />
              <ScaleText style={styles.smallTxt}>
                {moment(rowImgTxt2).startOf("hour").fromNow()}
              </ScaleText>
            </View>
            {rowImgTxt3 ? (
              <View style={styles.straightVw}>
                <IconX
                  color={COLORS.YELLOW}
                  origin={ICON_TYPE.SIMPLELINE}
                  name={"briefcase"}
                  size={20}
                  paddingRight={5}
                />
                <ScaleText numberOfLines={2} style={styles.smallTxt}>
                  {rowImgTxt3}
                </ScaleText>
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
                <ScaleText style={[styles.ratingTxt, { color: COLORS.BLACK }]}>
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
                  <ScaleText style={styles.ratingTxt}>{rating}</ScaleText>
                </View>
                <ScaleText style={[styles.ratingTxt, { color: COLORS.BLACK }]}>
                  rating
                </ScaleText>
              </View>
            </View>
            <ScaleText>{description}</ScaleText>
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
    borderColor: COLORS.GREY,
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
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.BOLD,
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
});
