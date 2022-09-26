import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import Button from "../../../../Components/Button";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  WHITE_COLOR_CODE,
} from "../../../../Utils/Constant";

const ConfirmScreen = (props) => {
  return (
    <View style={[CommonStyles.container]}>
      <Header
        leftImg={require("../../../../Assets/header_back_btn.png")}
        HeaderText="Confirm"
        RightImg={null}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <View style={styles.FlatlistContain}>
          <Image
            style={styles.RightImgeStyle}
            source={require("../../../../Assets/check_icon_info_small.png")}
          />
          <Text style={styles.NoteText}>
            You can now manage itinformation on AbbyPages
          </Text>
        </View>
        <ScrollView>
          <View style={styles.EnjoyView}>
            <Text style={styles.EnjoyText}>
              ENJOY THIS OFFER FOR NEW BUSSINESS ON ABBYPAGES.
            </Text>
          </View>
          <View style={styles.AbbyPagesView}>
            <Text style={styles.AbbyPagesText}>
              AbbyPages users serch for Home Services 1,001 time a month within
              25 miles of you
            </Text>
            <Text
              style={[styles.allicontxt, { lineHeight: 22, paddingTop: 10 }]}
            >
              About 80% if AbbyPages users make a purchase at a bussiness they
              found on the platform with a week.
            </Text>
          </View>
          <View style={styles.secmainvwe}>
            <Image
              source={require("../../../../Assets/confirm_s_icon_1.png")}
            />
            <View style={styles.addvxvwe}>
              <Text style={styles.allicontxt}>
                Reach 3X* more potential customrs with AbbyPages Ads
              </Text>
            </View>
          </View>
          <View style={styles.secmainvwe}>
            <Image
              source={require("../../../../Assets/confirm_s_icon_2.png")}
            />
            <View style={styles.addvxvwe}>
              <Text style={styles.allicontxt}>
                Only pay when intersted people click on you ad
              </Text>
            </View>
          </View>
          <View style={styles.secmainvwe}>
            <Image
              source={require("../../../../Assets/confirm_s_icon_3.png")}
            />
            <View style={styles.addvxvwe}>
              <Text style={styles.allicontxt}>Get started in minutes.</Text>
            </View>
          </View>
          <View style={[styles.BoxContainer, { marginTop: 10 }]}>
            <Image
              source={require("../../../../Assets/confirm_s_icon_4.png")}
            />
            <View style={styles.creditvwe}>
              <Text style={styles.FreeSignUpText}>
                Start now with $300 free credit. Expires in 01:59:36
              </Text>
            </View>
            <Button
              buttonText="Get Staterd"
              style={styles.btnbxstyle}
              buttonLabelStyle={{ fontFamily: FONT_FAMILY_REGULAR }}
            />
            <View style={styles.termsvwe}>
              <Text style={styles.seetermstxt}>See Terms</Text>
              <Text style={styles.declinetxt}>Decline Offers</Text>
            </View>
          </View>
          <View style={styles.longtxtvwe}>
            <Text style={styles.longtxt}>
              *AbbyPages Internal Data,2019, Based on the weighted average of
              advertisers who spent between $200 and $1200 per month on
              AbbyPages Ads over a three-month period.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default ConfirmScreen;
