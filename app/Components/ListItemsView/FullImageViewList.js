import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import ScaleText from "../ScaleText";
import {
  COLORS,
  Constants,
  FONT_FAMILY,
  FONT_SIZE,
} from "../../Utils/Constant";
import CommonStyles from "../../Utils/CommonStyles";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import FastImages from "../FastImage";

const FullImageViewList = (props) => {
  const {
    fullImage = "",
    timeTxt = "",
    headTxt = "",
    subHeadTxt = "",
    smallTxt = "",
    subSmallTxt = "",
    subSmallTxt2 = "",
    onPressView = () => {},
    onPressHeart = () => {},
    heartDark = false,
    shadow = true,
    marginTop = 6,
    marginBottom = 6,
    marginHorizontal = 6,
    activeOpacity = 1,
    item = {},
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={() => onPressView(item)}
      style={[
        styles.mainCon,
        shadow
          ? {
              borderWidth: Constants.standardBW,
              borderColor: COLORS.BORDER_LINE,
            }
          : null,
        {
          marginTop: marginTop,
          marginBottom: marginBottom,
          marginHorizontal: marginHorizontal,
        },
      ]}
    >
      {fullImage === "" ? null : (
        <View>
          <FastImages source={{ uri: fullImage }} style={styles.fullImageVw} />
          <TouchableOpacity
            onPress={() => onPressHeart()}
            style={styles.heartVw}
          >
            <IconX
              origin={ICON_TYPE.ANT_ICON}
              name={heartDark ? "heart" : "hearto"}
              color={heartDark ? COLORS.YELLOW : null}
              size={19}
            />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.txtConVw}>
        <View style={[CommonStyles.straightCon]}>
          <View style={[CommonStyles.straightCon, { flex: 2.4 }]}>
            <IconX
              origin={ICON_TYPE.MATERIAL_ICONS}
              name={"event"}
              size={18}
              paddingRight={10}
              color={COLORS.BLACK}
            />
            <ScaleText style={styles.headTxt}>{headTxt}</ScaleText>
          </View>
          <ScaleText
            style={[
              styles.smallTxt,
              {
                marginLeft: headTxt?.length > 9 ? 18 : 0,
              },
            ]}
          >
            {smallTxt}
          </ScaleText>
        </View>
        <View style={[CommonStyles.straightCon, { marginTop: 2 }]}>
          <IconX
            origin={ICON_TYPE.FEATHER_ICONS}
            name={"calendar"}
            size={14}
            paddingRight={10}
            paddingLeft={2}
            color={COLORS.RGBA}
          />
          <ScaleText style={styles.topTxt}>{timeTxt}</ScaleText>
        </View>

        <View style={CommonStyles.straightCon}>
          <IconX
            origin={ICON_TYPE.ICONICONS}
            name={"location-outline"}
            size={16}
            paddingRight={10}
            paddingLeft={1}
            color={COLORS.BLACK}
          />
          <ScaleText style={styles.topTxt}>{subHeadTxt}</ScaleText>
        </View>
        {subSmallTxt === "" ? null : (
          <View style={CommonStyles.straightCon}>
            <IconX
              origin={ICON_TYPE.ANT_ICON}
              name={"infocirlce"}
              size={14}
              paddingRight={10}
              paddingLeft={4}
              color={COLORS.YELLOW}
            />
            <ScaleText style={styles.bottomTxt}>{subSmallTxt}</ScaleText>
          </View>
        )}
        {subSmallTxt2 === "" ? null : (
          <View style={{ marginLeft: 6, marginTop: 5 }}>
            <ScaleText style={styles.headTxt}>{subSmallTxt2}</ScaleText>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default FullImageViewList;

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    borderRadius: 10,
  },
  fullImageVw: {
    height: 170,
    width: "100%",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    alignSelf: "center",
  },
  heartVw: {
    position: "absolute",
    top: 3,
    right: 5,
    backgroundColor: COLORS.WHITE,
    padding: 5,
    borderRadius: 100,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  txtConVw: {
    paddingVertical: 5,
    paddingHorizontal: 6,
    marginBottom: 10,
    width: "98%",
  },
  topTxt: {
    fontSize: FONT_SIZE.smallL,
    color: COLORS.RGBA,
    fontFamily: FONT_FAMILY.REGULAR,
    width: "80%",
  },
  headTxt: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    bottom: 2,
  },
  smallTxt: {
    fontSize: FONT_SIZE.small,
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
    color: COLORS.YELLOW,
    bottom: 2,
    flex: 1,
    textAlign: "right",
  },
  bottomTxt: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.YELLOW,
  },
});
