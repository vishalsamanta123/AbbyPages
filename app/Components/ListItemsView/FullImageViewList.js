import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import ScaleText from "../ScaleText";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";
import CommonStyles from "../../Utils/CommonStyles";
import { IconX, ICON_TYPE } from "../Icons/Icon";

const FullImageViewList = (props) => {
  const {
    fullImage = "",
    timeTxt = "",
    headTxt = "",
    subHeadTxt = "",
    smallTxt = "",
    subSmallTxt = "",
    onPressView = () => {},
    shadow = true,
    marginTop = 6,
    marginBottom = 6,
    marginHorizontal = 10,
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
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 3,
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
        <Image
          source={{ uri: fullImage }}
          resizeMode={"cover"}
          style={styles.fullImageVw}
        />
      )}
      <View style={styles.txtConVw}>
        <View
          style={[
            CommonStyles.straightCon,
            { justifyContent: "space-between" },
          ]}
        >
          <View style={CommonStyles.straightCon}>
            <IconX
              origin={ICON_TYPE.MATERIAL_ICONS}
              name={"event"}
              size={16}
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
        <View style={CommonStyles.straightCon}>
          <IconX
            origin={ICON_TYPE.FEATHER_ICONS}
            name={"calendar"}
            size={14}
            paddingRight={10}
            color={COLORS.RGBA}
          />
          <ScaleText style={styles.topTxt}>{timeTxt}</ScaleText>
        </View>

        <View style={CommonStyles.straightCon}>
          <IconX
            origin={ICON_TYPE.ICONICONS}
            name={"location"}
            size={14}
            paddingRight={10}
            color={COLORS.RGBA}
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
              paddingLeft={2}
              color={COLORS.YELLOW}
            />
            <ScaleText style={styles.bottomTxt}>{subSmallTxt}</ScaleText>
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
    width: "99%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignSelf: "center",
  },
  txtConVw: {
    paddingVertical: 5,
    paddingHorizontal: 10,
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
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.YELLOW,
    bottom: 2,
  },
  bottomTxt: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.YELLOW,
  },
});
