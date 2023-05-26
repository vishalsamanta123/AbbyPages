import React from "react";
import { View, ScrollView, TextInput, SafeAreaView } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import { COLORS, FONT_SIZE } from "../../../../../Utils/Constant";
import StarShower from "../../../../../Components/StarShower";
import Button from "../../../../../Components/Button";
import MainHeader from "../../../../../Components/MainHeader";
import ScaleText from "../../../../../Components/ScaleText";
import PageScroll from "../../../../../Components/PageScroll";
import { MainItemsView } from "../../../../../Components/ListItemsView";

const ReviewRatingView = (props) => {
  return (
    <View style={CommonStyles.container}>
      <MainHeader headerText={"Review"} />
      <PageScroll contentContainerStyle={styles.mainContainer}>
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
          {/* <ScaleText style={styles.smallTxt}>Choose Number of stars</ScaleText> */}
          <View style={styles.titleVw}>
            <TextInput
              placeholderTextColor={COLORS.GREY}
              placeholder={"Title..."}
              value={props?.ratingData?.title}
              style={styles.descriptInput}
              multiline={true}
              onChangeText={(txt) => {
                props.setRatingData({
                  ...props.ratingData,
                  title: txt,
                });
              }}
            />
          </View>
          <View style={styles.descriptVw}>
            <TextInput
              placeholderTextColor={COLORS.GREY}
              placeholder={"Type your review here..."}
              style={styles.descriptInput}
              value={props?.ratingData?.description}
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
            paddingHeight={10}
            onPress={() => props.addReviewsAndRating()}
          />
        </View>
        <View>
          <ScaleText style={styles.sectionTxt}>Reviews and Ratings</ScaleText>

          {props?.recntRVwsData?.business_review?.map((item, index) => {
            return (
              <MainItemsView
                onPressView={props.onPressView}
                item={item}
                index={index}
                largeImg={item?.profile_image}
                largeName={item?.first_name + " " + item?.last_name}
                smallTxt={item?.address}
                rating={item?.business_rating?.toString()}
                rowImgTxt1={item?.business_service_category}
                rowImgTxt2={item?.create_date}
                rowImgTxt3={item?.about_business}
                listType={"review"}
                description={item?.description}
                title={item?.title}
                profile_image={item?.profile_image}
              />
            );
          })}
        </View>
      </PageScroll>
    </View>
  );
};

export default ReviewRatingView;
