import { View, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import FastImage from "react-native-fast-image";
import { COLORS } from "../../Utils/Constant";
import Loader from "../../Utils/Loader";

const FastImages = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    source = {
      uri: "https://unsplash.it/400/400?image=1",
      headers: { Authorization: "someAuthToken" },
      priority: FastImage.priority.normal,
    },
    style,
    loaderColor = COLORS.YELLOW,
  } = props;
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      {isLoading ? (
        <View style={{ position: "absolute", zIndex: 5 }}>
          <Loader type={"small"} />
        </View>
      ) : null}
      <FastImage
        style={style}
        source={source}
        resizeMode={"cover"}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
      />
    </View>
  );
};

export default FastImages;
