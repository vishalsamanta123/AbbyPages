import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../Utils/Constant";
import moment from "moment";
import ScaleText from "../ScaleText";
import AddMinusView from "../AddMinusView";
import Button from "../Button";

const NoRowImageList = (props) => {
  const {
    item = {},
    index = 0,
    borderBottomWidth = Constants.standardBW,
    onPressView = () => {},
    largeImg = "",
    largeName = "",
    smallTxt = "",
    rating = "",
    rowTxt1 = "",
    rowTxt2 = "",
    rowTxt2ML = 0,
    lineThrough = false,
    rowTxt3 = "",
    bootomButton = true,
    onPressSmllBttn = () => {},
    rowTxt4 = "",
  } = props;
  return (
    <TouchableOpacity
      onPress={() => onPressView(item)}
      style={[
        styles.mainConatiner,
        {
          borderBottomWidth: borderBottomWidth,
        },
      ]}
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
        <ScaleText
          style={[
            styles.smallTxt,
            {
              fontSize: FONT_SIZE.medium,
            },
          ]}
        >
          {rowTxt1}
        </ScaleText>
        {rowTxt2 === "" || rowTxt2 === null ? null : (
          <ScaleText
            numberOfLines={2}
            style={[
              styles.smallTxt,
              {
                textDecorationLine: lineThrough ? "line-through" : "none",
                marginLeft: rowTxt2ML,
              },
            ]}
          >
            {rowTxt2}
          </ScaleText>
        )}
        {rowTxt3 === "" || rowTxt3 === null ? null : (
          <ScaleText numberOfLines={2} style={styles.smallTxt}>
            {rowTxt3}
          </ScaleText>
        )}
        {bootomButton ? (
          <View style={{ marginTop: 10 }}>
            <Button
              width={"50%"}
              paddingHeight={2}
              borderRadius={20}
              alignSelf={"flex-start"}
              buttonText={"Add"}
              buttonTxtColor={COLORS.WHITE}
              onPress={() => onPressSmllBttn()}
            />
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default NoRowImageList;

const styles = StyleSheet.create({
  mainConatiner: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
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
  descTxt: {
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
