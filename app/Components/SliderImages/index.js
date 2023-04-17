import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  BLACK_COLOR_CODE,
  windowWidth,
  YELLOW_COLOR_CODE,
} from "../../Utils/Constant";

const imagess = [
  {
    image: require("../../Assets/extraImages/bob-marley-profile.jpg"),
  },
  {
    image: require("../../Assets/extraImages/bob-marley-cover.jpg"),
  },
  {
    image: require("../../Assets/extraImages/building.jpg"),
  },
];
const RenderSlideItem = (props) => {
  const { posterImg = "", pageIndex = 0 } = props;
  return (
    <View>
      <View>
        <Image
          source={props.data ? { uri: posterImg } : posterImg}
          style={{ height: 200, width: "97%" }}
        />
        <Text style={styles.posterTitleTxt}>{props.posterTxt}</Text>
      </View>
      <Pagination
        dotsLength={props.data ? props?.data?.length : imagess.length}
        activeDotIndex={pageIndex}
        containerStyle={{
          paddingVertical: 0,
        }}
        inactiveDotStyle={styles.dotInActiveVw}
        dotStyle={styles.dotActiveVw}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};
const SliderImages = (props) => {
  const { renderItem = () => {} } = props;
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { currentPage: pageIndex } = sliderState;
  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.ceil(x / windowWidth);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        data={props?.data ? props?.data : imagess}
        renderItem={({ item }) =>
          props?.data ? (
            renderItem(item)
          ) : (
            <RenderSlideItem
              pageIndex={pageIndex}
              setSliderState={setSliderState}
              setSliderPage={setSliderPage}
              sliderState={sliderState}
              posterImg={item.image}
            />
          )
        }
        layout={"default"}
        sliderWidth={windowWidth}
        activeDotIndex={1}
        itemWidth={windowWidth}
        onScroll={(event) => {
          setSliderPage(event);
        }}
      />
    </View>
  );
};

export { SliderImages, RenderSlideItem };
const styles = StyleSheet.create({
  dotActiveVw: {
    borderRadius: 100,
    backgroundColor: YELLOW_COLOR_CODE,
    width: 16,
    height: 16,
  },
  dotInActiveVw: {
    borderRadius: 100,
    backgroundColor: BLACK_COLOR_CODE,
    width: 20,
    height: 20,
  },
});
