import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Images } from "../../Utils/images";

const StarShower = (props) => {
  const oneStart = { star: Images.STAR_FILLED_IMG };
  const stars = [oneStart];
  useEffect(() => {
    for (let index = 0; index < props.counts - 1; index++) {
      const countedStar = stars[index];
      stars.push(countedStar);
    }
  }, [props.counts]);
  return (
    <View style={styles.container}>
      <>
        {stars?.length > 0 ? (
          <>
            {stars?.map((itm, ind) => {
              return (
                <>
                  <View
                    style={[
                      props.backColor
                        ? styles.backColor
                        : {
                            marginLeft: ind === 0 ? 0 : 6,
                          },
                    ]}
                  >
                    <Image
                      source={itm.star}
                      style={[styles.starImg, { tintColor: props.starColor }]}
                    />
                  </View>
                  <View
                    style={[
                      props.backColor
                        ? styles.backColor
                        : {},
                        {
                          marginLeft: 6,
                        }
                    ]}
                  >
                    <Image
                      source={itm.star}
                      style={[styles.starImg, { tintColor: props.starColor }]}
                    />
                  </View>
                </>
              );
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
    marginVertical: 7,
  },
  starImg: {
    width: 12,
    height: 12,
    marginHorizontal: 3,
  },
  backColor: {
    backgroundColor: "rgba(0,0,0,0.9)",
    padding: 5,
  },
});
