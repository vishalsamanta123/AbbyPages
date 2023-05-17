import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";
import {
  LIGHT_GREY_COLOR_CODE,
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";
const UpdatePages = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <Header
        RightImg={null}
        HeaderText={"Update Pages"}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <View style={styles.BasicContain}>
            <Text style={styles.BasicContainTxt}>Basic Information</Text>
            <Button
              buttonText="Get Page Upgrades "
              style={{ width: "100%", marginTop: 10 }}
            />
            <View style={styles.DollarViewMain}>
              <Text style={styles.DiscountedPrice}>$10</Text>
              <Text style={styles.MainPrice}>$6/day</Text>
            </View>
          </View>
          <View style={styles.MainContainer}>
            <Text style={styles.BasicContainTxt}>Make a good impression</Text>
            <View style={styles.MainImpression}>
              <View>
                <Text
                  style={[
                    styles.BasicContainTxt,
                    { color: LIGHT_GREY_COLOR_CODE, fontSize: 18 },
                  ]}
                >
                  Business Highlights
                </Text>
                <Text
                  style={[
                    styles.BasicContainTxt,
                    { color: LIGHT_GREY_COLOR_CODE, fontSize: 12 },
                  ]}
                >
                  $2/day
                </Text>
              </View>
              <Image
                source={Images.ROUND_CHECK_IMG}
              />
            </View>
            <View style={styles.MainImpression}>
              <View>
                <Text
                  style={[
                    styles.BasicContainTxt,
                    { color: LIGHT_GREY_COLOR_CODE, fontSize: 18 },
                  ]}
                >
                  Slideshow
                </Text>
                <Text
                  style={[
                    styles.BasicContainTxt,
                    { color: LIGHT_GREY_COLOR_CODE, fontSize: 12 },
                  ]}
                >
                  $1/day
                </Text>
              </View>
              <Image
                source={Images.ROUND_CHECK_IMG}
              />
            </View>
            <View style={styles.LastOptnView}>
              <View>
                <Text
                  style={[
                    styles.BasicContainTxt,
                    { color: LIGHT_GREY_COLOR_CODE, fontSize: 18 },
                  ]}
                >
                  Logo
                </Text>
                <Text
                  style={[
                    styles.BasicContainTxt,
                    { color: LIGHT_GREY_COLOR_CODE, fontSize: 12 },
                  ]}
                >
                  $1/day
                </Text>
              </View>
              <Image
                source={Images.ROUND_CHECK_IMG}
              />
            </View>
          </View>
          <View style={styles.MainContainer}>
            <Text style={styles.BasicContainTxt}>Drive Customer Action</Text>
            <View style={styles.MainImpression}>
              <View>
                <Text
                  style={[
                    styles.BasicContainTxt,
                    { color: LIGHT_GREY_COLOR_CODE, fontSize: 18 },
                  ]}
                >
                  Remove Competitors Ads
                </Text>
                <Text
                  style={[
                    styles.BasicContainTxt,
                    { color: LIGHT_GREY_COLOR_CODE, fontSize: 12 },
                  ]}
                >
                  $2/day
                </Text>
              </View>
              <Image
                source={Images.ROUND_CHECK_IMG}
              />
            </View>
            <View style={styles.LastOptnView}>
              <View>
                <Text
                  style={[
                    styles.BasicContainTxt,
                    { color: LIGHT_GREY_COLOR_CODE, fontSize: 18 },
                  ]}
                >
                  Call to Action
                </Text>
                <Text
                  style={[
                    styles.BasicContainTxt,
                    { color: LIGHT_GREY_COLOR_CODE, fontSize: 12 },
                  ]}
                >
                  $2/day
                </Text>
              </View>
              <Image
                source={Images.ROUND_CHECK_IMG}
              />
            </View>
          </View>
          <View style={{ padding: 15 }}>
            <Text style={styles.NoticeText}>
              * 16/19 survey by SurveyMonkey of people who reported having used
              AbbyPages in the prior 3 months.
            </Text>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default UpdatePages;
