import React, { useState } from "react";
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
  LIGHT_GREY_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";

const Goals = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={CommonStyles.container}
    >
      <Header
        RightImg={null}
        HeaderText={"Goal"}
        editHdr={25}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={{ position: "relative", bottom: 25 }}>
        <Image
          style={styles.TimeLineImge}
          resizeMode={"stretch"}
          source={Images.BUSINESS_ADD_1_IMG}
        />
      </View>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.WriteTextView}>
          <Text style={styles.WriteText}>
            Select a goal for your ad campain
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => props.onPressTextOptn()}
          style={
            props.textOptn ? styles.selectOptionContain : styles.OptionContain
          }
        >
          <View style={styles.ImgeConatiner}>
            <Image source={Images.THEME_GOALS_IMG} />
            <Image
              style={{ width: 36, height: 36 }}
              source={
                props.textOptn
                  ? Images.ROUND_CHECK_IMG
                  : Images.ROUND_UNCHECK_IMG
              }
            />
          </View>
          <View style={[styles.WriteTextView, { paddingLeft: 0 }]}>
            <Text style={styles.WriteOwnText}>Let AbbyPages optimize</Text>
            <Text style={styles.NeedHelpText}>(Recommended)</Text>
          </View>
          <Text style={styles.NeedHelpText}>Choose this goal if:</Text>
          <View style={styles.RightView}>
            <Image
              style={{ top: 2, tintColor: LIGHT_GREY_COLOR_CODE }}
              source={Images.TICK_IMG}
            />
            <View style={styles.RecommndedView}>
              <Text style={styles.RecommndedText}>
                You want to reach more customers.
              </Text>
            </View>
          </View>
          <View style={styles.RightView}>
            <Image
              style={{ top: 2, tintColor: LIGHT_GREY_COLOR_CODE }}
              source={Images.TICK_IMG}
            />
            <View style={styles.RecommndedView}>
              <Text style={styles.RecommndedText}>
                You want to spend people to you AbbyPages page.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.onPressWebsite()}
          style={
            props.WebsiteClick
              ? styles.selectOptionContain
              : styles.OptionContain
          }
        >
          <View style={styles.ImgeConatiner}>
            <Image source={Images.THEME_CALL_IMG} />
            <Image
              style={{ width: 36, height: 36 }}
              source={
                props.WebsiteClick
                  ? Images.ROUND_CHECK_IMG
                  : Images.ROUND_UNCHECK_IMG
              }
            />
          </View>
          <View style={[styles.WriteTextView, { paddingLeft: 0 }]}>
            <Text style={styles.WriteOwnText}>Let AbbyPages optimize</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.onPressCalling()}
          style={
            props.callingOptn
              ? styles.selectOptionContain
              : styles.OptionContain
          }
        >
          <View style={styles.ImgeConatiner}>
            <Image source={Images.THEME_PC_IMG} />
            <Image
              style={{ width: 36, height: 36 }}
              source={
                props.callingOptn
                  ? Images.ROUND_CHECK_IMG
                  : Images.ROUND_UNCHECK_IMG
              }
            />
          </View>
          <View style={[styles.WriteTextView, { paddingLeft: 0 }]}>
            <Text style={styles.WriteOwnText}>Get more website clicks</Text>
          </View>
        </TouchableOpacity>
        {/* <Button
                        buttonText="Preview"
                        style={{ marginTop: 10 }}
                        onPress={props.onPressPreview} /> */}
        <Button
          buttonText="Next"
          style={{ marginTop: 10 }}
          onPress={props.onPressNext}
        />
        <View style={styles.NeedHelpContain}>
          <Text style={styles.NeedHelpText}>
            Need help getting started? Call (877) 767-9357
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Goals;
