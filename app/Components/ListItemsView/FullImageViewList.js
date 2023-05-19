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
        <View style={CommonStyles.straightCon}>
          <IconX
            origin={ICON_TYPE.FEATHER_ICONS}
            name={"calendar"}
            size={16}
            paddingRight={10}
            color={COLORS.LIGHT_GREY}
          />
          <ScaleText style={styles.topTxt}>{timeTxt}</ScaleText>
        </View>
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
        <View style={CommonStyles.straightCon}>
          <IconX
            origin={ICON_TYPE.ICONICONS}
            name={"location"}
            size={16}
            paddingRight={10}
            color={COLORS.LIGHT_GREY}
          />
          <ScaleText style={styles.topTxt}>{subHeadTxt}</ScaleText>
        </View>
        <View style={[CommonStyles.straightCon, { marginLeft: 10 }]}>
          <ScaleText style={styles.smallTxt}>{smallTxt}</ScaleText>
          <ScaleText style={styles.smallTxt}>{subSmallTxt}</ScaleText>
        </View>
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
    height: 150,
    width: "99%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignSelf: "center",
  },
  txtConVw: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "95%",
  },
  topTxt: {
    fontSize: FONT_SIZE.normal,
    color: COLORS.LIGHT_GREY,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  headTxt: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.NORMAL_BOLD,
  },
  smallTxt: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLUE,
  },
});
