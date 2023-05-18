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
  } = props;
  return (
    <TouchableOpacity style={styles.mainCon}>
      <Image
        source={{ uri: fullImage }}
        resizeMode={"cover"}
        style={styles.fullImageVw}
      />
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
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 10,
    marginVertical: 6,
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
