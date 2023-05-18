import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";

const PhotosVideoScreen = (props) => {
  return (
    <View style={[CommonStyles.container]}>
      <Header
        leftImg={Images.HEADER_BCK_IMG}
        HeaderText="Photos and Videos"
        RightImg={null}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <View style={styles.bdyfrstvwe}>
          <View style={{ flex: 1 }}>
            <View style={styles.txtfrstvwe}>
              <Text style={styles.Autotxt}>Automatically Sorted</Text>
              <Text style={styles.txtbdys}>
                These photos and videos will automatically be ordered by
                AbbyPages.
              </Text>
            </View>
          </View>
          <View style={styles.firstbdy}>
            <TouchableOpacity
              onPress={() => props.onPressProfileImage()}
              style={styles.BrowseImgeView}
            >
              {props.itemImage ? (
                <Image
                  style={{ width: 150, height: 150 }}
                  source={{ uri: props.itemImage }}
                />
              ) : (
                <Image
                  style={{ height: 100, width: 100 }}
                  source={Images.THEME_UPLOAD_IMG}
                />
              )}

              <Text style={styles.AddPhotosText}>Upload Photos</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footvwe}>
            <View style={styles.footvwesec}>
              <Text style={styles.footlargetxt}>
                Make a great first impression. AbbyPages spend more than twice
                as much time on a bussiness listings with photos.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default PhotosVideoScreen;
