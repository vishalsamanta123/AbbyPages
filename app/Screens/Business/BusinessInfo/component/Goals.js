import React, { useState } from "react";
import {
  View,
  Image,
  StatusBar,
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
  BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../../Utils/Constant";
const Goals = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <Header
        RightImg={null}
        HeaderText={"Goal"}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
        <Image
          style={styles.TimeLineImge}
          source={require("../../../../Assets/Goals123.png")}
        />
        <ScrollView>
          <View style={styles.WriteTextView}>
            <Text style={styles.WriteText}>
              Select a goal for your ad campain
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => props.onPressTextOptn()}
            style={
              props.textOptn ? styles.OptionContain : styles.selectOptionContain
            }
          >
            <View style={styles.ImgeConatiner}>
              <Image source={require(".../../../../Assets/st_icon_1.png")} />
              {props.textOptn ? (
                <Image
                  source={require("../../../../Assets/unchecked_circled_v1.png")}
                />
              ) : (
                <Image
                  source={require("../../../../Assets/checked_circled_v1.png")}
                />
              )}
            </View>
            <View style={[styles.WriteTextView, { paddingLeft: 0 }]}>
              <Text style={styles.WriteOwnText}>Let AbbyPages optimize</Text>
              <Text style={styles.NeedHelpText}>(Recommended)</Text>
            </View>
            <Text style={styles.NeedHelpText}>Choose this goal if:</Text>
            <View style={styles.RightView}>
              <Image
                style={{ top: 2 }}
                source={require("../../../../Assets/box_check_icon.png")}
              />
              <View style={styles.RecommndedView}>
                <Text style={styles.RecommndedText}>
                  You want to reach more customers.
                </Text>
              </View>
            </View>
            <View style={styles.RightView}>
              <Image
                style={{ top: 2 }}
                source={require("../../../../Assets/box_check_icon.png")}
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
              <Image source={require("../../../../Assets/st_icon_2.png")} />
              {props.WebsiteClick ? (
                <Image
                  source={require("../../../../Assets/checked_circled_v1.png")}
                />
              ) : (
                <Image
                  source={require("../../../../Assets/unchecked_circled_v1.png")}
                />
              )}
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
              <Image source={require("../../../../Assets/st_icon_3.png")} />
              {props.callingOptn ? (
                <Image
                  source={require("../../../../Assets/checked_circled_v1.png")}
                />
              ) : (
                <Image
                  source={require("../../../../Assets/unchecked_circled_v1.png")}
                />
              )}
            </View>
            <View style={[styles.WriteTextView, { paddingLeft: 0 }]}>
              <Text style={styles.WriteOwnText}>Get more website clicks</Text>
            </View>
          </TouchableOpacity>
          <Button
            buttonText="Preview"
            style={{ marginTop: 10 }}
            onPress={props.onPressPreview}
          />
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
      </View>
    </KeyboardAvoidingView>
  );
};
export default Goals;
