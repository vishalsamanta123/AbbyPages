import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { COLORS,  } from "./Constant";
import { Images } from "./images";

const Loader = (props) => {
  const { type = "" } = props;
  return (
    <>
      {type === "small" ? (
        <Image
          source={Images.LOADER}
          style={styles.smallLoader}
          resizeMode={"contain"}
        />
      ) : (
        <View style={styles.loaderVw}>
          <Image
            source={Images.LOADER}
            style={styles.loader}
            resizeMode={"contain"}
          />
        </View>
      )}
    </>
  );
};
export default Loader;
const styles = StyleSheet.create({
  loaderVw: {
    position: "absolute",
    zIndex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.RGBA1,
  },
  loader: {
    width: 110,
    height: 110,
    alignSelf: "center",
  },
  smallLoader:{
    width: 38,
    height: 38,
    alignSelf: "center",
  }
});
