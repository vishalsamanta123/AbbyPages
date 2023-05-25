import {
  View,
  Image,
  Modal,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { Constants } from "../../Utils/Constant";
import Video from "react-native-video";
import styles from "./style";
import MainHeader from "../MainHeader";
import { useFocusEffect } from "@react-navigation/native";

const GalleryCarousalView = (props) => {
  const { data, isVisible, setIsVisible, index } = props;
  const { width } = Dimensions.get("window");
  let arr = data;
  const flatListRef = useRef(null);
  const onViewRef = useRef((viewableItems) => { });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  useEffect(() => {
    setTimeout(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({ index: index });
      }
    }, 500)
  }, []);
   
  const ITEM_WIDTH = width;
  const renderMedia = (media, Iindex) => {
    const temp = media?.image?.split(".");
    const type = temp[temp?.length - 1];
    return (
      <>
        {
          <View style={{ width }}>
            {type === "jpg" || type === "png" ? (
              <Image
                source={{ uri: media?.image }}
                style={{ height: 300, width: "100%" }}
              />
            ) : type === "mp4" ? (
              <Video
                source={{ uri: media?.image }}
                style={{ height: 300, width: Constants.windowWidth }}
              />
            ) : null}
          </View>
        }
      </>
    );
  };
  return (
    <Modal visible={isVisible}>
      <MainHeader
        notifyIcon={false}
        onPressBack={() => {
          setIsVisible(false);
        }}
      />

      <FlatList
        ref={flatListRef}
        contentContainerStyle={styles.modalView}
        data={Array.isArray(arr) && arr}
        pagingEnabled
        renderItem={({ item, index }) => renderMedia(item, index)}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        getItemLayout={(data, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
      />
    </Modal>
  );
};

export default GalleryCarousalView;
