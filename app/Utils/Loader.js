import React from "react";
import { View, Image } from "react-native";
import LottieView from "lottie-react-native";
import { YELLOW_COLOR_CODE } from "./Constant";
const Loader = () => {
  return (
    <View
      style={{
        backgroundColor: "#000",
        position: "absolute",
        zIndex: 1,
        justifyContent: "center",
        alignSelf: "center",
        width: "100%",
        opacity: 0.5,
        height: "100%",
      }}
    >
      {/* <LottieView
        visible={true}
        style={{
          backgroundColor: "transparent",
          // zIndex: 1,
          // position: "absolute",
          alignSelf: "center",
          // top: 0,
          // bottom: 0,
          width: 150,
        }}
        source={require('../Assets/loader.json')}
        autoPlay loop /> */}
      <Image
        source={require("../Assets/loader.gif")}
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
          tintColor: YELLOW_COLOR_CODE,
        }}
        resizeMode={"contain"}
      />
    </View>
  );
};
export default Loader;
