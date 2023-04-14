import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
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
  } = props;
  return (
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
        <View style={styles.straightVw}>
          <IconX
            color={YELLOW_COLOR_CODE}
            origin={ICON_TYPE.SIMPLELINE}
            name={"briefcase"}
            size={20}
            paddingRight={5}
          />
          <Text style={styles.smallTxt}>{rowImgTxt3}</Text>
        </View>
      </View>
      {/* <View>
        <Image
          style={styles.mainImgSty}
          resizeMode="contain"
          source={{ uri: item.logo }}
        />
        <View style={styles.ratingContainer}>
          <View style={styles.ratingVw}>
            <Text style={styles.ratingStyTxt}>5.0</Text>
          </View>
          <Text style={styles.ratingTxt}>
            {item?.rating?.length > 5
              ? item?.rating?.toString()?.slice(0, -3)
              : item?.rating?.length}{" "}
            ratings
          </Text>
        </View>
      </View>
      <View style={styles.containerView}>
        <View style={styles.infoView}>
          <View style={{ flex: 5 }}>
            <Text style={styles.mainServiceName}>{item.business_name}</Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity onPress={() => onPressLike(item)}>
              <Image
                style={{
                  tintColor:
                    item.user_like === 1 ? null : LINE_COMMON_COLOR_CODE,
                }}
                source={Images.FAVRT_IMG}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          numberOfLines={2}
          style={[styles.AddressTextStyles, { paddingRight: 5 }]}
        >
          {item.business_service_category}
        </Text>
        <View style={styles.infoView}>
          <Image
            style={styles.MapImgeStyle}
            resizeMode="contain"
            source={Images.LOCATION_IMG}
          />
          <Text
            numberOfLines={2}
            style={[styles.AddressTextStyles, { paddingRight: 10 }]}
          >
            {item.address}
          </Text>
        </View>
        <View style={styles.infoView}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.statusVw}>
              <Image
                tintColor={YELLOW_COLOR_CODE}
                source={
                  item.offers_delivery === 1
                    ? Images.TICK_IMG
                    : Images.CANCEL_IMG
                }
                style={{ marginHorizontal: 2 }}
              />
              <Text style={styles.AddressTextStyles}>Delievery</Text>
            </View>
            <View style={styles.statusVw}>
              <Image
                tintColor={YELLOW_COLOR_CODE}
                source={
                  item.offers_takeout === 1
                    ? Images.TICK_IMG
                    : Images.CANCEL_IMG
                }
                style={{ marginHorizontal: 2 }}
              />
              <Text style={styles.AddressTextStyles}>Takeout</Text>
            </View>
          </View>
        </View>
        <View style={styles.infoView}>
          <Image source={Images.FIRE_IMG} />
          <Text style={styles.AddressTextStyles}>
            {moment(item.create_date).startOf("hour").fromNow()}
          </Text>
        </View>
      </View> */}
    </TouchableOpacity>
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
    fontSize: 13,
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
});
