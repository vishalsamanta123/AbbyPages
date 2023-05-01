import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../Utils/Constant";
import { Images } from "../../Utils/images";

const StarShower = (props) => {
  const {
    marginLeft = 0,
    ActiveStarColor = COLORS.YELLOW,
    UnActiveStarColor = COLORS.BLACK,
    starHeight = 12,
    starWidth = 12,
    marginTop = 7,
    onPressStar = () => {},
    starsBackColor = "",
    starPaddingH = 3,
  } = props;
  const oneStart = { star: Images.STAR_FILLED_IMG };

  return (
    <View
      style={[
        styles.container,
        { marginLeft: marginLeft, marginTop: marginTop },
        props.backColor ? styles.backColor : {},
      ]}
    >
      <>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => onPressStar(1)}
          style={[
            starsBackColor === "" ? {} : styles.starVw,
            {
              backgroundColor: starsBackColor,
              paddingHorizontal: starPaddingH,
            },
          ]}
        >
          <Image
            source={oneStart.star}
            style={[
              {
                width: starWidth,
                height: starHeight,
                tintColor:
                  props?.counts >= 1 ? ActiveStarColor : UnActiveStarColor,
              },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => onPressStar(2)}
          style={[
            styles.starVw,
            {
              backgroundColor: starsBackColor,
              paddingHorizontal: starPaddingH,
            },
          ]}
        >
          <Image
            source={oneStart.star}
            style={[
              {
                width: starWidth,
                height: starHeight,
                tintColor:
                  props?.counts >= 2 ? ActiveStarColor : UnActiveStarColor,
              },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => onPressStar(3)}
          style={[
            styles.starVw,
            {
              backgroundColor: starsBackColor,
              paddingHorizontal: starPaddingH,
            },
          ]}
        >
          <Image
            source={oneStart.star}
            style={[
              {
                width: starWidth,
                height: starHeight,
                tintColor:
                  props?.counts >= 3 ? ActiveStarColor : UnActiveStarColor,
              },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => onPressStar(4)}
          style={[
            styles.starVw,
            {
              backgroundColor: starsBackColor,
              paddingHorizontal: starPaddingH,
            },
          ]}
        >
          <Image
            source={oneStart.star}
            style={[
              {
                width: starWidth,
                height: starHeight,
                tintColor:
                  props?.counts >= 4 ? ActiveStarColor : UnActiveStarColor,
              },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => onPressStar(5)}
          style={[
            styles.starVw,
            {
              backgroundColor: starsBackColor,
              paddingHorizontal: starPaddingH,
            },
          ]}
        >
          <Image
            source={oneStart.star}
            style={[
              {
                width: starWidth,
                height: starHeight,
                tintColor:
                  props?.counts >= 5 ? ActiveStarColor : UnActiveStarColor,
              },
            ]}
          />
        </TouchableOpacity>
      </>
    </View>
  );
};

export default StarShower;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
  },
  starImg: {
    marginHorizontal: 2,
  },
  starVw: {
    paddingVertical: 3,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  backColor: {
    backgroundColor: "rgba(0,0,0,0.9)",
    padding: 5,
  },
});
