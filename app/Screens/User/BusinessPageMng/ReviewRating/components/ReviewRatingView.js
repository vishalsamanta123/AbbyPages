import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import Header from "../../../../../Components/Header";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import {
  BLACK_COLOR_CODE,
  GREY_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";
import StarShower from "../../../../../Components/StarShower";
import { Images } from "../../../../../Utils/images";
import Button from "../../../../../Components/Button";

const ReviewRatingView = (props) => {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <View
        style={[
          styles.headerVw,
          {
            justifyContent: props?.userData?.login_type
              ? "center"
              : "space-between",
          },
        ]}
      >
        {props?.userData?.login_type ? (
          <Image
            source={Images.LOGO}
            style={styles.topLogoVw2}
            resizeMode={"contain"}
          />
        ) : (
          <Image source={Images.ABBYLOGO_TRNSP} style={styles.topLogoVw} />
        )}
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
          <StarShower
            UnActiveStarColor={WHITE_COLOR_CODE}
            starWidth={20}
            starsBackColor={LINE_COMMON_COLOR_CODE}
            starHeight={20}
            counts={props?.ratingData?.business_rating}
            onPressStar={(star) => props.onPressRating(star)}
          />
          <Text style={styles.smallTxt}>Choose Number of stars</Text>
          <View style={styles.descriptVw}>
            <TextInput
              placeholderTextColor={GREY_COLOR_CODE}
              placeholder={"Type your review here..."}
              style={styles.descriptInput}
              multiline={true}
              onChangeText={(txt) => {
                props.setRatingData({
                  ...props.ratingData,
                  description: txt,
                });
              }}
            />
          </View>
        </View>
        <View style={styles.bottomVw}>
          <Button
            buttonText={"Post Review"}
            buttonTxtColor={WHITE_COLOR_CODE}
            fontSize={24}
            paddingHeight={8}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewRatingView;
