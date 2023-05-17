import React from "react";
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  FONT_FAMILY_REGULAR,
  LIGHT_GREY_COLOR_CODE,
  GREY_COLOR_CODE,
  BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";
const Budgets = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <Header
        RightImg={null}
        HeaderText={"Budget"}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <Image
          style={styles.TimeLineImge}
          source={Images.BUSINESS_ADD_5_IMG}
        />
        <ScrollView>
          <View style={styles.WriteTextView}>
            <Text style={styles.WriteText}>Set your daily budget</Text>
            <Text style={styles.ShareText}>Choose where to show your ad</Text>
          </View>
          <TouchableOpacity
            onPress={() => props.onPressTextOptn()}
            style={
              props.textOptn ? styles.selectOptionContain : styles.OptionContain
            }
          >
            <Image
              source={props.textOptn ? Images.ROUND_CHECK_IMG : Images.ROUND_UNCHECK_IMG}
            />
            <View style={[styles.WriteTextView, { paddingLeft: 0 }]}>
              <Text style={styles.WriteOwnText}>
                $10.00 <Text style={styles.DayAvgText}>/ day average</Text>
              </Text>
            </View>
            <Text style={styles.SecondContainTxt}>$300/month max</Text>
            <Text style={styles.SecondContainTxt}>+52 clicks/month*</Text>
            <View style={styles.SpecialContainer}>
              <Image
                style={{ tintColor: YELLOW_COLOR_CODE }}
                source={Images.CONFIRM_THUNDER_IMG}
              />
              <Text style={styles.SpecialText}> Special Offer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onPress15Dollar()}
            style={
              props.Dollar15Optn
                ? styles.selectOptionContain
                : styles.OptionContain
            }
          >
            <View style={styles.ImgeConatiner}>
              <Image
                source={props.Dollar15Optn
                  ? Images.ROUND_CHECK_IMG : Images.ROUND_UNCHECK_IMG}
              />
              <View
                style={{
                  backgroundColor: "#f2f2f2",
                  padding: 8,
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONT_FAMILY_REGULAR,
                    fontSize: 9,
                    color: GREY_COLOR_CODE,
                  }}
                >
                  Popular for Home Services
                </Text>
              </View>
            </View>
            <View style={[styles.WriteTextView, { paddingLeft: 0 }]}>
              <Text style={styles.WriteOwnText}>
                $15.00 <Text style={styles.DayAvgText}>/ day average</Text>
              </Text>
            </View>
            <Text style={styles.SecondContainTxt}>$450/month max</Text>
            <Text style={styles.SecondContainTxt}>+78 clicks/month*</Text>
            <View style={styles.SpecialContainer}>
              <Image
                style={{ tintColor: YELLOW_COLOR_CODE }}
                source={Images.CONFIRM_THUNDER_IMG}
              />
              <Text style={styles.SpecialText}> Special Offer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onPress25Dollar()}
            style={
              props.Dollar25Optn
                ? styles.selectOptionContain
                : styles.OptionContain
            }
          >
            <Image
              source={props.Dollar25Optn ?
                Images.ROUND_CHECK_IMG : Images.ROUND_UNCHECK_IMG}
            />
            <View style={[styles.WriteTextView, { paddingLeft: 0 }]}>
              <Text style={styles.WriteOwnText}>
                $25.00 <Text style={styles.DayAvgText}>/ day average</Text>
              </Text>
            </View>
            <Text style={styles.SecondContainTxt}>$750/month max</Text>
            <Text style={styles.SecondContainTxt}>+130 clicks/months*</Text>
            <View style={styles.SpecialContainer}>
              <Image
                style={{ tintColor: YELLOW_COLOR_CODE }}
                source={Images.CONFIRM_THUNDER_IMG}
              />
              <Text style={styles.SpecialText}> Special Offer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onPressQualified()}
            style={
              props.DollarQualified
                ? styles.selectOptionContain
                : styles.OptionContain
            }
          >
            <Image
              source={props.DollarQualified ? Images.ROUND_CHECK_IMG : Images.ROUND_UNCHECK_IMG}
            />
            <View style={[styles.WriteTextView, { paddingLeft: 0 }]}>
              <Text style={styles.WriteOwnText}>
                $25.00 <Text style={styles.DayAvgText}>/ day average</Text>
              </Text>
            </View>
            <Text style={styles.SecondContainTxt}>$450/month max</Text>
            <Text style={styles.SecondContainTxt}>+78 clicks/months*</Text>
            <View style={styles.SpecialContainer}>
              <Image
                style={{ tintColor: YELLOW_COLOR_CODE }}
                source={Images.CONFIRM_THUNDER_IMG}
              />
              <Text style={[styles.SpecialText]}> Qualified</Text>
            </View>
            <Text
              style={[
                styles.SecondContainTxt,
                { color: LIGHT_GREY_COLOR_CODE, fontSize: 11 },
              ]}
            >
              $300 free credit will be applied at purchase
            </Text>
          </TouchableOpacity>
          <View style={styles.EstimatedContain}>
            <Text style={styles.EstimatedText}>
              * Estimated performance is based on similar businesses. Actual,
              performance may vary.
            </Text>
          </View>
          <View style={styles.EstimatedContain}>
            <Text style={styles.WriteText}>
              Additional Business Page Upgrades
            </Text>
            <Text style={styles.StandOutText}>
              Stand out, build trust and drive customers to take action on your
              page
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => props.onPressUpgrade()}
            style={styles.OptionContain}
          >
            <Image
              source={props.UpgradePackage ?
                Images.ROUND_CHECK_IMG : Images.ROUND_UNCHECK_IMG}
            />
            <View style={[styles.WriteTextView, { paddingLeft: 0 }]}>
              <Text style={styles.WriteOwnText}>Upgrade Packages</Text>
              <Text style={styles.WriteOwnText}>$4.00 / day</Text>
            </View>
            <Text style={styles.SecondContainTxt}>
              Recommended for advertisers
            </Text>
            <View style={styles.RightView}>
              <Image
                source={Images.THEME_UNCHECK_IMG}
              />
              <View style={styles.RecommndedView}>
                <Text
                  style={[
                    styles.SecondContainTxt,
                    { fontSize: 20, color: BLACK_COLOR_CODE },
                  ]}
                >
                  Enhanced Profile
                </Text>
                <Text style={styles.RecommndedText}>
                  Add an action button to your page, arrange your photos, remove
                  competitor ads from your page.{" "}
                </Text>
              </View>
            </View>
            <View style={styles.RightView}>
              <Image
                source={Images.THEME_UNCHECK_IMG}
              />
              <View style={styles.RecommndedView}>
                <Text
                  style={[
                    styles.SecondContainTxt,
                    { fontSize: 20, color: BLACK_COLOR_CODE },
                  ]}
                >
                  Business Highlights
                </Text>
                <Text style={styles.RecommndedText}>
                  Choose from 30+ badges to display on your ad and business
                  page.
                </Text>
              </View>
            </View>
            <Button style={{ width: "100%" }} buttonText="Learn More" />
          </TouchableOpacity>
          <View style={[styles.OptionContain, { padding: 15, margin: 15 }]}>
            <View style={styles.BudgetWorkView}>
              <Image
                source={Images.INFO_IMG}
              />
              <Text style={[styles.ShareText, { paddingTop: 0 }]}>
                {" "}
                How your ad budget works
              </Text>
            </View>
            <View style={styles.BudgetWorkCOntain}>
              <Text
                style={[
                  styles.SecondContainTxt,
                  { fontSize: 20, color: BLACK_COLOR_CODE },
                ]}
              >
                Get results
              </Text>
              <Text style={[styles.RecommndedText, { fontSize: 14 }]}>
                Pay only when you ads are clicked.
              </Text>
            </View>
            <View style={styles.BudgetWorkCOntain}>
              <Text
                style={[
                  styles.SecondContainTxt,
                  { fontSize: 20, color: BLACK_COLOR_CODE },
                ]}
              >
                No commitment
              </Text>
              <Text style={[styles.RecommndedText, { fontSize: 14 }]}>
                Cancel at any time with no added fees.
              </Text>
            </View>
            <View style={styles.BudgetWorkCOntain}>
              <Text
                style={[
                  styles.SecondContainTxt,
                  { fontSize: 20, color: BLACK_COLOR_CODE },
                ]}
              >
                No surprises
              </Text>
              <Text style={[styles.RecommndedText, { fontSize: 14 }]}>
                Never spend more than your monthly Limit.{" "}
              </Text>
            </View>
          </View>
          <Button
            onPress={props.onPressCOntinue}
            style={{ marginBottom: 10 }}
            buttonText="Continue"
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Budgets;
