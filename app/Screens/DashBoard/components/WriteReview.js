import {
  View,
  Text,
  Modal,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../../Components/Header";
import { Images } from "../../../Utils/images";
import styles from "./styles";
import CommonStyles from "../../../Utils/CommonStyles";
import { WHITE_COLOR_CODE, YELLOW_COLOR_CODE } from "../../../Utils/Constant";


const WriteReview = (props) => {
  return (
    <Modal
      animationType={"none"}
      hardwareAccelerated={true}
      visible={props.writeReview}
      onRequestClose={() => {
        props.setWriteReview(false);
      }}
    >
      <View style={CommonStyles.container}>
        <Header
          RightImg={null}
          HeaderText={"Find Business"}
          MainHeadStyle={{ color: WHITE_COLOR_CODE }}
          tintColor={WHITE_COLOR_CODE}
          mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
          onPressBackFun={() => props.setWriteReview(false)}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={[styles.writeReviewVw, { flex: 0, backgroundColor: null }]}
          >
            <Text style={styles.bigTitleTxt}>Find a business to review</Text>
            <View style={styles.straightVw}>
              <Image
                style={styles.starImg}
                source={Images.COMPANY_REVIEW_IMG}
              />
              <Text
                numberOfLines={2}
                style={[
                  styles.subCatTxt,
                  { width: "85%", color: YELLOW_COLOR_CODE },
                ]}
              >
                Review anything from your favorite patio spot to your local
                flower shop.
              </Text>
            </View>
          </View>
          <ImageBackground
            source={Images.ANALYSTIC_DATA}
            resizeMode={"contain"}
            style={[styles.writeReviewVw, { flex: 1 }]}
          >
            <TouchableOpacity style={styles.reviewCont}>
              <Image source={Images.SERVICE_LIST_IMG} />
              <Text style={styles.reviewContTxt}>
                Try lunch,yoga studio,plumber
              </Text>
            </TouchableOpacity>
            <View style={styles.reviewCont}>
              <Image source={Images.LOCATION_IMG} />
              <Text style={styles.reviewContTxt}>Search places..</Text>
            </View>
          </ImageBackground>
          <View style={[styles.writeReviewVw, { flex: 1 }]}>
            <Text style={styles.bigTitleTxt}>
              Visited one of these places recently?
            </Text>
            <View style={{ alignItems: "center" }}>
              <Image source={Images.SATISFACTION_IMG} />
              <Text
                numberOfLines={2}
                style={[styles.subCatTxt, { width: "85%" }]}
              >
                We’re out of suggestions for you right now. Keep on using
                AbbyPages and we’ll have some more for you soon.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default WriteReview;
