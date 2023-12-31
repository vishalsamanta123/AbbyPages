import { View, Text, FlatList, Image, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import ScaleText from "../ScaleText";
import FastImages from "../FastImage";

const Collage = (props) => {
  const { imagesData } = props;
  const imageLength = imagesData.length;
  return (
    <View style={styles.mainContainer}>
      {/* <FlatList
        data={imagesData}
        renderItem={({ item }) => renderImage(item)}
        // horizontal
        numColumns={2}
      /> */}
      {imageLength === 1 ? (
        <View style={styles.oneImageView}>
          <FastImages
            source={{ uri: imagesData[0]?.file_url }}
            style={styles.oneImageStyle}
          />
        </View>
      ) : imageLength === 2 ? (
        <View style={styles.twoImageView}>
          <FastImages
            source={{ uri: imagesData[0]?.file_url }}
            style={styles.twoImageStyle}
          />
          <FastImages
            source={{ uri: imagesData[1]?.file_url }}
            style={styles.twoImageStyle}
          />
        </View>
      ) : imageLength === 3 ? (
        <View style={styles.threeImageView}>
          <View style={{ flexDirection: "row" }}>
            <FastImages
              source={{ uri: imagesData[0]?.file_url }}
              style={styles.twoImageStyle}
            />
            <FastImages
              source={{ uri: imagesData[1]?.file_url }}
              style={styles.twoImageStyle}
            />
          </View>
          <FastImages
            source={{ uri: imagesData[2]?.file_url }}
            style={styles.thirdImageStyle}
          />
        </View>
      ) : imageLength === 4 ? (
        <View style={styles.threeImageView}>
          <View style={{ flexDirection: "row" }}>
            <FastImages
              source={{ uri: imagesData[0]?.file_url }}
              style={styles.twoImageStyle}
            />
            <FastImages
              source={{ uri: imagesData[1]?.file_url }}
              style={styles.twoImageStyle}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <FastImages
              source={{ uri: imagesData[2]?.file_url }}
              style={styles.twoImageStyle}
            />
            <FastImages
              source={{ uri: imagesData[3]?.file_url }}
              style={styles.twoImageStyle}
            />
            {/* <ImageBackground
              source={{ uri: imagesData[3].file_url }}
              style={styles.fourthImageStyle}
              opacity={0.5}
            ><ScaleText style={styles.seeAllTxt} >+{imageLength - 3}</ScaleText></ImageBackground> */}
          </View>
        </View>
      ) : imageLength > 4 ? (
        <View style={styles.threeImageView}>
          <View style={{ flexDirection: "row" }}>
            <FastImages
              source={{ uri: imagesData[0]?.file_url }}
              style={styles.twoImageStyle}
            />
            <FastImages
              source={{ uri: imagesData[1]?.file_url }}
              style={styles.twoImageStyle}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <FastImages
              source={{ uri: imagesData[2]?.file_url }}
              style={styles.twoImageStyle}
            />
            <ImageBackground
              source={{ uri: imagesData[3]?.file_url }}
              style={styles.fourthImageStyle}
              opacity={0.5}
            >
              <ScaleText style={styles.seeAllTxt}>+{imageLength - 3}</ScaleText>
            </ImageBackground>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Collage;
