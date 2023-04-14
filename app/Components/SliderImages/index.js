import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  BLACK_COLOR_CODE,
  windowWidth,
  YELLOW_COLOR_CODE,
} from "../../Utils/Constant";

const SliderImages = (props) => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { currentPage: pageIndex } = sliderState;
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
  const RenderSlideItem = ({ item }) => {
    const { posterTxt = "", posterImg = "" } = item;
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={props.data ? { uri: posterImg } : item.image}
            style={{ height: 200, width: "97%" }}
          />
          <Text style={styles.posterTitleTxt}>{posterTxt}</Text>
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
  const {} = props;
  return (
    <Carousel
      data={props?.data ? props?.data : imagess}
      renderItem={({ item }) => {
        return <RenderSlideItem posterTxt={posterTxt} />;
      }}
      layout={"default"}
      sliderWidth={windowWidth}
      activeDotIndex={1}
      itemWidth={windowWidth}
      autoplay
      onScroll={(event) => {
        setSliderPage(event);
      }}
    />
  );
};

export default SliderImages;
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
