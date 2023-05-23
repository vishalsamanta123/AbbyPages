import { View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Video from "react-native-video";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import { COLORS } from "../../Utils/Constant";

const VideoPlayer = (props) => {
  const [videoShow, setVideoShow] = useState(false);
  const {
    video = "",
    pauseStartBttn = true,
    pauseStartColor = COLORS.WHITE,
    videoWidth = "100%",
    borderRadius = 5,
  } = props;

  return (
    <View style={styles.videoVw}>
      <Video
        source={{ uri: video }}
        style={[
          styles.backgroundVideo,
          {
            borderRadius: borderRadius,
          },
        ]}
        resizeMode={"cover"}
        width={videoWidth}
        paused={videoShow}
        repeat={true}
      />
      {pauseStartBttn ? (
        <View style={styles.videoContVw}>
          <TouchableOpacity
            onPress={() => setVideoShow(!videoShow)}
            style={styles.startPauseVw}
          >
            <IconX
              origin={ICON_TYPE.ANT_ICON}
              name={!videoShow ? "pausecircleo" : "playcircleo"}
              size={22}
              color={pauseStartColor}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  videoVw: {
    height: 230,
    justifyContent: "flex-end",
    marginTop: 8,
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  videoContVw: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 5,
  },
  startPauseVw: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 0.6,
    borderColor: COLORS.WHITE,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});
