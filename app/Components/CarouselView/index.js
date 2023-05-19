import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { Constants } from "../../Utils/Constant";
import Video from "react-native-video";

const CarouselView = (props) => {
  const { data } = props;
  const renderMedia = (media) => {
    const temp = media?.product_image.split(".");
    const type = temp[temp.length - 1];
    return (
      <View>
        {type === "jpg" || type === "png" ? (
          <Image
            source={{ uri: media?.product_image }}
            style={{ height: 300, width: Constants.windowWidth }}
          />
        ) : type === "mp4" ? (
          <Video
            source={{ uri: media?.product_image }}
            style={{ height: 300, width: Constants.windowWidth }}
          />
        ) : null}
      </View>
    );
  };
  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        // scrollEventThrottle={20}
      >
        {data?.map((item) => renderMedia(item))}
      </ScrollView>
    </View>
  );
};

export default CarouselView;
