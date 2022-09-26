import React, { useState } from "react";
import {
  View,
  Image,
  StatusBar,
  Text,
  KeyboardAvoidingView,
  FlatList,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";
import {
  YELLOW_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../../Utils/Constant";
const AddKeybord = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText={"Add Keyword"}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
        <Image
          style={styles.TimeLineImge}
          source={require("../../../../Assets/Untitled-2.png")}
        />
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={styles.WriteTextView}>
            <Text style={styles.WriteText}>Write your keyword text</Text>
            <Text style={styles.ShareText}>
              Share what's special about your business
            </Text>
          </View>
          <View
            style={
              props.textOptn ? styles.OptionContain : styles.selectOptionContain
            }
          >
            <View style={styles.ImgeConatiner}>
              <Image source={require("../../../../Assets/st_icon_4.png")} />
            </View>
            <View style={[styles.WriteTextView, { paddingLeft: 0 }]}>
              <Text style={styles.WriteOwnText}>Write your keyword text</Text>
              <View style={{ paddingTop: 10 }}>
                <TextInput
                  style={styles.InputStyleTxt}
                  underlineColorAndroid="transparent"
                  placeholder="Write your keyword text..."
                  placeholderTextColor="#000000"
                  onChangeText={(keywords) => props.handleWriteText(keywords)}
                  value={props.keywords}
                />
              </View>
            </View>
            {/* <View style={styles.SecondContain}>
                            <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"
                                placeholder='Write your keyword text'
                                placeholderTextColor="#000000"
                                onChangeText={(writeOwnTxt) => props.handleWriteText(writeOwnTxt)}
                                value={props.writeOwnTxt}
                            />
                        </View> */}
          </View>
          {/* <Button
                        buttonText="Preview"
                        onPress={props.onPressPreview}
                    /> */}
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
export default AddKeybord;
