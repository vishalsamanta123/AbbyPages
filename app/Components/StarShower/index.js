import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  BLACK_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../Utils/Constant";
import { Images } from "../../Utils/images";

const StarShower = (props) => {
  const {
    marginLeft = 0,
    ActiveStarColor = YELLOW_COLOR_CODE,
    UnActiveStarColor = BLACK_COLOR_CODE,
    starHeight = 12,
    starWidth = 12,
    marginTop = 7,
    onPressStar = () => {},
    starsBackColor = "",
  } = props;
  const oneStart = { star: Images.STAR_FILLED_IMG };
  // const [stars, setStars] = useState([oneStart]);
  // useEffect(() => {
  //   for (let index = 0; index < props?.counts - 1; index++) {
  //     const countedStar = stars[index];
  //     stars.push(countedStar);
  //   }
  // }, [props.counts]);

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
            },
          ]}
        >
          <Image
            source={oneStart.star}
            style={[
              starsBackColor === "" ? {} : styles.starVw,
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
            },
          ]}
        >
          <Image
            source={oneStart.star}
            style={[
              starsBackColor === "" ? {} : styles.starVw,
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
            },
          ]}
        >
          <Image
            source={oneStart.star}
            style={[
              starsBackColor === "" ? {} : styles.starVw,
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
            },
          ]}
        >
          <Image
            source={oneStart.star}
            style={[
              starsBackColor === "" ? {} : styles.starVw,
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
            },
          ]}
        >
          <Image
            source={oneStart.star}
            style={[
              starsBackColor === "" ? {} : styles.starVw,
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
    paddingHorizontal: 3,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  backColor: {
    backgroundColor: "rgba(0,0,0,0.9)",
    padding: 5,
  },
});
