import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";
import ScaleText from "../ScaleText";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import moment from "moment";
import CommonStyles from "../../Utils/CommonStyles";

const NoImageList = (props) => {
  const {
    title = "",
    subTitle = "",
    smallTxt = "",
    dateIconTxt = "",
    rowIconTxt1 = "",
    rowIconTxt2 = "",
    onPressView = () => {},
    heartIcon = true,
    item = {},
    heartDark = false,
    onPressHeart = () => {},
  } = props;
  return (
    <TouchableOpacity
      onPress={() => onPressView(item)}
      style={styles.mainConatiner}
    >
      <View style={CommonStyles.straightCon}>
        <ScaleText style={styles.largeNameTxt}>{title}</ScaleText>
        {heartIcon ? (
          <TouchableOpacity onPress={() => onPressHeart()}>
            <IconX
              origin={ICON_TYPE.ANT_ICON}
              name={heartDark ? "heart" : "hearto"}
              paddingLeft={16}
              color={heartDark ? COLORS.YELLOW : null}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <ScaleText style={styles.smallTxt}>{subTitle}</ScaleText>
      <View style={[styles.rowVw]}>
        <IconX
          color={COLORS.BLACK}
          origin={ICON_TYPE.ICONICONS}
          name={"location-sharp"}
          size={20}
          paddingRight={5}
        />
        <ScaleText style={styles.smallTxt}>{smallTxt}</ScaleText>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <View style={styles.straightVw}>
          <IconX
            color={COLORS.BLACK}
            origin={ICON_TYPE.ICONICONS}
            name={"time-outline"}
            size={20}
            paddingRight={5}
          />
          <ScaleText style={styles.smallTxt}>
            Posted {moment(dateIconTxt).startOf("hour").fromNow()}
          </ScaleText>
        </View>
        <View style={styles.straightVw}>
          <IconX
            color={COLORS.BLACK}
            origin={ICON_TYPE.SIMPLELINE}
            name={"briefcase"}
            size={19}
            paddingRight={5}
          />
          <ScaleText numberOfLines={2} style={styles.smallTxt}>
            {rowIconTxt1}
          </ScaleText>
        </View>
        <View style={styles.straightVw}>
          <IconX
            color={COLORS.BLACK}
            origin={ICON_TYPE.FEATHER_ICONS}
            name={"dollar-sign"}
            size={20}
            paddingRight={5}
          />
          <ScaleText numberOfLines={2} style={styles.smallTxt}>
            {rowIconTxt2}
          </ScaleText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NoImageList;

const styles = StyleSheet.create({
  mainConatiner: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: COLORS.WHITE,
    elevation: 5,
    borderRadius: 12,
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
    marginVertical: 5,
    backgroundColor: COLORS.LIGHT_COMMON,
    paddingHorizontal: 8,
    borderRadius: 3,
    marginRight: 14,
  },
  rowVw: {
    flexDirection: "row",
    marginVertical: 4,
    alignItems: "center",
    paddingRight: 16,
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
  infoView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  largeNameTxt: {
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    fontSize: FONT_SIZE.large,
    color: COLORS.BLACK,
    textTransform: "capitalize",
    width: "86%",
  },
  smallTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.normal,
    color: "#595959",
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
