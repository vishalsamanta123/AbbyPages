import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Images } from "../../Utils/images";
import ScaleText from "../ScaleText";
import moment from "moment";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";

const notificationItemView = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity style={styles.containerView}>
      <View style={styles.imageView}>
        <Image source={Images.DEFAULT_IMG} style={styles.imageStyle} />
      </View>
      <View style={styles.descView}>
        <ScaleText style={styles.headingTxt}>{item.type}</ScaleText>
        <ScaleText style={styles.messageTxt}>{item.message}</ScaleText>
        <ScaleText style={styles.timeTxt}>
          {moment(item.create_date).startOf("hour").fromNow()}
        </ScaleText>
      </View>
    </TouchableOpacity>
  );
};

export default notificationItemView;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 15,
  },
  imageView: {
    flex: 1,
    padding: 10,
  },
  descView: {
    flex: 5,
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  headingTxt: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_GREY,
    textTransform: 'capitalize'
  },
  messageTxt: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  timeTxt: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_GREY,
  },
});
