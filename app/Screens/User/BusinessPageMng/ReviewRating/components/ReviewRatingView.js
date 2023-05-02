import React from "react";
import { View, ScrollView, TextInput, SafeAreaView } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import { COLORS, FONT_SIZE } from "../../../../../Utils/Constant";
import StarShower from "../../../../../Components/StarShower";
import Button from "../../../../../Components/Button";
import MainHeader from "../../../../../Components/MainHeader";
import ScaleText from "../../../../../Components/ScaleText";

const ReviewRatingView = (props) => {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <MainHeader headerText={"Review"} />
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <ScaleText style={styles.headTxt}>
          {props?.recntRVwsData?.business_name}
        </ScaleText>
        <ScaleText style={styles.subHeadTxt}>
          {props?.recntRVwsData?.business_review?.length} Reviews for{" "}
          {props?.recntRVwsData?.business_name}
        </ScaleText>
        <View style={styles.reViewCont}>
          <ScaleText style={styles.subHeadTxtNon}>
            Rate Us & Write A Review
          </ScaleText>
          <StarShower
            UnActiveStarColor={COLORS.WHITE}
            starWidth={20}
            starsBackColor={COLORS.COMMON}
            starHeight={20}
            counts={props?.ratingData?.business_rating}
            onPressStar={(star) => props.onPressRating(star)}
          />
          <ScaleText style={styles.smallTxt}>Choose Number of stars</ScaleText>
          <View style={styles.descriptVw}>
            <TextInput
              placeholderTextColor={COLORS.GREY}
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
            buttonTxtColor={COLORS.WHITE}
            fontSize={FONT_SIZE.largeL}
            paddingHeight={8}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewRatingView;
