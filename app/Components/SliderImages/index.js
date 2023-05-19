import React, { useState } from "react";
import { View, Image, StyleSheet, FlatList, Dimensions } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";
import ScaleText from "../ScaleText";

const SliderImages = (props) => {
  const { data = [], posterImg = "", titleTxt = "", subTitleTxt = "" } = props;
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
        contentContainerStyle={{ alignItems: "center" }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        onScroll={(event) => {
          handleSrolling(event);
        }}
        renderItem={({ item }) => {
          const image = item[posterImg];
          const title = item[titleTxt];
          const subTitle = item[subTitleTxt];
          return (
            <View style={[{ width }, styles.mainCon]}>
              <Image
                resizeMode="cover"
                source={{ uri: image }}
                style={styles.imageVw}
              />
              <View style={styles.paginationWrapper}>
                {Array?.from(
                  Array(data?.length > 5 ? 5 : data?.length).keys()
                ).map((key, index) => (
                  <View
                    style={[
                      styles.paginationDots,
                      { opacity: pageIndex === index ? 1 : 0.2 },
                    ]}
                    key={index}
                  />
                ))}
              </View>
              {title === "" || title === null || title === undefined ? null : (
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
          );
        }}
      />
    </View>
  );
};

export default SliderImages;

const styles = StyleSheet.create({
  mainCon: {
    marginVertical: 5,
    borderColor: COLORS.BLACK,
    paddingVertical: 5,
  },
  imageVw: {
    height: 200,
    width: "100%",
    alignSelf: "center",
  },
  paginationWrapper: {
    bottom: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
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
