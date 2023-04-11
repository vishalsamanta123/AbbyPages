import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Images } from "../../Utils/images";

const StarShower = (props) => {
  const oneStart = { star: Images.STAR_FILLED_IMG };
  const stars = [oneStart];
  useEffect(() => {
    for (let index = 0; index < props.counts-1; index++) {
      const countedStar = stars[index];
      stars.push(countedStar);
    }
  }, [props]);
  return (
    <View style={[styles.container]}>
      <>
        {stars?.length > 0 ? (
          <>
            {stars?.map((itm) => {
              return <Image source={itm.star} style={styles.starImg} />;
            })}
          </>
        ) : null}
      </>
    </View>
  );
};

export default StarShower;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
    marginVertical: 7,
  },
  starImg: {
    width: 24,
    height: 24,
    marginHorizontal: 3,
  },
});
