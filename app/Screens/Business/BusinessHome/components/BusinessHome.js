import React, { useState } from "react";
import {
  View,
  Image,
  StatusBar,
  Text,
  KeyboardAvoidingView,
  FlatList,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import Moment from "moment";
var now = new Date();
const BusinessHome = (props) => {
  return (
    <KeyboardAvoidingView style={CommonStyles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Header
        RightImg={null}
        HeaderText={"Home"}
        leftImg={require("../../../../Assets/hamburger_icon.png")}
        type="Drawer"
      />
      <View style={CommonStyles.body}>
        <ScrollView>
          <View style={styles.ImageContainer}>
            <ImageBackground
              style={styles.PosterImgeStyle}
              source={require("../../../../Assets/extraImages/buil.jpg")}
            >
              <View style={{ padding: 20 }}>
                {console.log("props.profileData", props.profileData)}
                <Text style={styles.ItinfoTextStyle}>
                  {props.profileData.business_name}
                </Text>
                <Text style={styles.AddressText}>
                  {props.profileData.address_first
                    ? props.profileData.address_first
                    : props.profileData.address}
                </Text>
                <Text style={styles.ReviewText}>0 reviews</Text>
                {/* {props.profileData.business_category.map((item) => {
                                    <Text style={styles.AddressText}>Home Services, Restaurants, Software Development</Text>

                                })} */}
                {props.profileData.business_category && (
                  <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                    {props.profileData.business_category.map((item, index) => {
                      return (
                        <Text style={{ color: "#fff", paddingLeft: 4 }}>
                          {item.category_name},
                        </Text>
                      );
                    })}
                  </View>
                )}
                <TouchableOpacity onPress={() => props.EditInformation()}>
                  <Text style={[styles.YellowText, { paddingTop: 10 }]}>
                    Edit Information
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.BookMarkContainer}>
            <View style={styles.ViewContainer}>
              <Image source={require("../../../../Assets/st_icon_16.png")} />
              <View style={styles.ViewParagrapgh}>
                <Text style={[styles.YellowText]}>Step1</Text>
                <Text style={styles.MainContainText}>
                  Go to COVID-19 updates
                </Text>
              </View>
            </View>
            <Text style={styles.CategoriesDcptnText}>
              Give your customers up-to-date information about your hours,
              services, and any new updates about your business
            </Text>
          </View>
          <View style={styles.BookMarkContainer}>
            <View style={styles.ViewContainer}>
              <Image source={require("../../../../Assets/st_icon_17.png")} />
              <View style={styles.ViewParagrapgh}>
                <Text style={[styles.YellowText]}>Step2</Text>
                <Text style={styles.MainContainText}>Define Service Area</Text>
              </View>
            </View>
            <Text style={styles.CategoriesDcptnText}>
              Enter the locations you will go to for a job so you gesturethe
              right leads
            </Text>
          </View>
          <View style={styles.BookMarkContainer}>
            <View style={styles.ViewContainer}>
              <Image source={require("../../../../Assets/st_icon_18.png")} />
              <View style={styles.ViewParagrapgh}>
                <Text style={[styles.YellowText]}>Step3</Text>
                <Text style={styles.MainContainText}>
                  Set Service Offerings
                </Text>
              </View>
            </View>
            <Text style={styles.CategoriesDcptnText}>
              Select your specific services to help you attract the right
              customers
            </Text>
          </View>
          <View>
            <Text style={styles.MainActivityTxt}>Activity</Text>
            <View style={styles.ActivityView}>
              <View
                style={[
                  styles.ActivityOptn,
                  props.ActiveActivity == "1"
                    ? { backgroundColor: YELLOW_COLOR_CODE }
                    : null,
                ]}
              >
                <TouchableOpacity onPress={() => props._handleDayes("30", "1")}>
                  <Text style={styles.ActivityOptnTxt}>30 days</Text>
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.ActivityOptn,
                  props.ActiveActivity == "2"
                    ? { backgroundColor: YELLOW_COLOR_CODE }
                    : null,
                ]}
              >
                <TouchableOpacity onPress={() => props._handleDayes("12", "2")}>
                  <Text style={styles.ActivityOptnTxt}>12 months</Text>
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.ActivityOptn,
                  props.ActiveActivity == "3"
                    ? { backgroundColor: YELLOW_COLOR_CODE }
                    : null,
                ]}
              >
                <TouchableOpacity onPress={() => props._handleDayes("24", "3")}>
                  <Text style={styles.ActivityOptnTxt}>24 months</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.MainWelcomeContain}>
            <View style={styles.pageVisitView}>
              <Image
                source={require("../../../../Assets/info_icon_circled.png")}
              />
              <Text style={styles.pageVisitTxt}>
                Page Visits: {props.pageVisit}
              </Text>
            </View>
            <View style={styles.pageVisitView}>
              <Image
                source={require("../../../../Assets/info_icon_circled.png")}
              />
              <Text style={styles.pageVisitTxt}>Customer Leads: 366</Text>
            </View>
            <Text style={styles.WelcomeHead}>
              Welcome to AbbyPages for Business
            </Text>
            <Text
              style={[
                styles.CategoriesDcptnText,
                { lineHeight: 21, paddingTop: 5 },
              ]}
            >
              This is where you'll see how many people are finding you business
              on AbbyPages. For now, make sure your page is looking great and
              check back in few days to see your page activity
            </Text>
          </View>
          <View style={styles.GrowContain}>
            <Text style={styles.WelcomeHead}>
              Grow you business with AbbyPages ads
            </Text>
            <Text
              style={[
                styles.CategoriesDcptnText,
                { lineHeight: 21, paddingTop: 5 },
              ]}
            >
              Reach people who are ready to make a purchase. And pay only when
              they click on your ad.
            </Text>
            <Button buttonText="Learn More" style={{ width: "100%" }} />
          </View>
          <View style={styles.AboutCOntainer}>
            <Text style={styles.WelcomeHead}>About your audience</Text>
            <Text style={styles.CategoriesDcptnText}>
              {Moment()
                .subtract(props.ActiveDuration, "days")
                .format("MMMM D, YYYY")}{" "}
              - {Moment(now).format("MMMM D, YYYY")}
            </Text>

            <View style={styles.AboutOptnView}>
              <Image source={require("../../../../Assets/st_icon_19.png")} />
              <View style={{ padding: 10, paddingTop: 0 }}>
                <Text style={styles.AboutOptnText}>0 User Views (0%)</Text>
                <Text style={styles.TextDescptn}>Came from mobile devices</Text>
              </View>
            </View>
            <View style={styles.AboutOptnView}>
              <Image source={require("../../../../Assets/st_icon_20.png")} />
              <View style={{ padding: 10, paddingTop: 0 }}>
                <Text style={styles.TextDescptn}>
                  Your business appeared in AbbyPages
                </Text>
                <Text style={styles.TextDescptn}>
                  search results{" "}
                  <Text style={{ color: BLACK_COLOR_CODE }}>0 results</Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default BusinessHome;
