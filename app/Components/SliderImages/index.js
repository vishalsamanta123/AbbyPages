import React, { useState } from "react";
import { View, Image, StyleSheet, FlatList, Dimensions } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";
import FastImages from "../FastImage";
import ScaleText from "../ScaleText";

const SliderImages = (props) => {
  const {
    data = [],
    posterImg = "",
    titleTxt = "",
    subTitleTxt = "",
    imgWidth = "100%",
    imgHeight = 200,
  } = props;
  const { width } = Dimensions.get("window");
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { currentPage: pageIndex } = sliderState;

  const handleSrolling = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.ceil(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        horizontal={true}
        onScroll={(event) => {
          handleSrolling(event);
        }}
        keyboardShouldPersistTaps={"handled"}
        nestedScrollEnabled
        renderItem={({ item, index }) => {
          const image = item[posterImg];
          const title = item[titleTxt];
          const subTitle = item[subTitleTxt];
          return (
            <View key={index} style={[{ width }, styles.mainCon]}>
              <View>
                <FastImages
                  source={{ uri: image }}
                  style={[
                    styles.imageVw,
                    {
                      width: imgWidth,
                      height: imgHeight,
                    },
                  ]}
                />
                <View style={styles.paginationWrapper}>
                  {Array?.from(Array(data?.length).keys()).map((key, index) => (
                    <View
                      style={[
                        styles.paginationDots,
                        { opacity: pageIndex === index ? 1 : 0.2 },
                      ]}
                      key={index}
                    />
                  ))}
                </View>
              </View>
              <View style={{ marginHorizontal: 8 }}>
                {title === "" ||
                title === null ||
                title === undefined ? null : (
                  <ScaleText style={styles.titleTxt}>{title}</ScaleText>
                )}
                {subTitle === "" ||
                subTitle === null ||
                subTitle === undefined ? null : (
                  <ScaleText style={styles.posterTxt}>
                    {subTitle + " " + "Listing"}
                  </ScaleText>
                )}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SliderImages;

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
  },
  imageVw: {
    alignSelf: "center",
  },
  paginationWrapper: {
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 5,
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: COLORS.WHITE,
    marginLeft: 10,
  },
  titleTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    marginLeft: 5,
  },
  posterTxt: {
    fontSize: FONT_SIZE.smallL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.LIGHT_BLACK,
    marginLeft: 5,
  },
});
