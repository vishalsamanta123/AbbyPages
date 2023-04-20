import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Header from "../../../../../Components/Header";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import {
  BLACK_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";
import StarShower from "../../../../../Components/StarShower";
import { Images } from "../../../../../Utils/images";
import Button from "../../../../../Components/Button";

const ReviewRatingView = (props) => {
  return (
    <View style={CommonStyles.container}>
      <View style={styles.headerVw}>
        <Image source={Images.ABBYLOGO_TRNSP} style={styles.topLogoVw} />
        {props?.userData?.login_type ? null : (
          <View style={CommonStyles.straightCon}>
            <TouchableOpacity
              style={[styles.topButtonVw, styles.topButtonVwNon]}
            >
              <Text
                style={[
                  styles.topButtonTxt,
                  {
                    color: BLACK_COLOR_CODE,
                  },
                ]}
              >
                Log In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topButtonVw}>
              <Text style={styles.topButtonTxt}>To Register</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <Text style={styles.headTxt}>
          {props?.recntRVwsData?.business_name}
        </Text>
        <Text style={styles.subHeadTxt}>
          {props?.recntRVwsData?.business_review?.length} Reviews for{" "}
          {props?.recntRVwsData?.business_name}
        </Text>
        <View style={styles.reViewCont}>
          <Text style={styles.subHeadTxtNon}>Rate Us & Write A Review</Text>
          <Text style={styles.smallTxt}>Select your rating</Text>
          <StarShower
            UnActiveStarColor={LINE_COMMON_COLOR_CODE}
            starWidth={32}
            starHeight={32}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ReviewRatingView;
