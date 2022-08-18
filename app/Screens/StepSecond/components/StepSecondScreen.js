import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import Button from "../../../Components/Button";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  YELLOW_COLOR_CODE,
  GREY_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
} from "../../../Utils/Constant";
const StepSecondScreen = (props) => {
  return (
    <View style={[CommonStyles.container]}>
      <Header
        leftImg={require("../../../Assets/close_window_icon.png")}
        HeaderText={"2 of 8"}
        RightImg={null}
      />
      <View style={[CommonStyles.body]}>
        {props.queAnsData ? (
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: FONT_FAMILY_REGULAR,
                  fontSize: 18,
                  textAlign: "center",
                  paddingVertical: 10,
                  paddingHorizontal: 15, // paddingTop: 50,
                }}
              >
                {props.queAnsData &&
                  props.queAnsData.question &&
                  props.queAnsData.question.question}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                data={
                  props.queAnsData &&
                  props.queAnsData.answer &&
                  props.queAnsData.answer
                }
                contentContainerStyle={{ alignItems: "center", flex: 1 }}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        props.setSelectedAnswer(item);
                      }}
                      key={index}
                      style={{
                        // margin: 5,
                        padding: 5,
                        paddingHorizontal: 20,
                        flexDirection: "row",
                        alignSelf: "center",
                      }}
                    >
                      <View style={{ paddingHorizontal: 10 }}>
                        {props.selectedAnswer.question_ans_id ==
                        item.question_ans_id ? (
                          <Image
                            resizeMode="contain"
                            source={require("../../../Assets/radio_circled_checked.png")}
                          />
                        ) : (
                          <Image
                            resizeMode="contain"
                            source={require("../../../Assets/radio_circled_unchecked.png")}
                          />
                        )}
                      </View>
                      <Text
                        style={{
                          textAlign: "left",
                          fontFamily: FONT_FAMILY_REGULAR,
                          fontSize: 14,
                          flex: 5,
                        }}
                      >
                        {item.answer}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            <View style={[styles.lastFootervwe, {}]}>
              <Button
                buttonText="Back"
                style={styles.backbtn}
                buttonLabelStyle={styles.startedbtntxt}
                onPress={() => {
                  props.setQueAnsData(""),
                    props.setServiceProviderQueAnsData(""),
                    props.setServiceProviderData("");
                }}
              />
              <Button
                buttonText="Next"
                style={styles.btnvwe}
                buttonLabelStyle={styles.startedbtntxt}
                onPress={props.onPressNextOfAnswer}
              />
            </View>
          </View>
        ) : (
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View style={styles.firstVwe}>
              <Text style={styles.firstTxt}>
                What type of project are you looking to start ?
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={props.serviceDetail.business_category}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => props.onPressCategory(item, index)}
                      style={[styles.secondVwe]}
                    >
                      <Image
                        style={[
                          styles.Allgrpimg,
                          {
                            borderWidth:
                              props.selectedCategory.category_id ==
                              item.category_id
                                ? 2
                                : 0.2,
                            borderColor:
                              props.selectedCategory.category_id ==
                              item.category_id
                                ? YELLOW_COLOR_CODE
                                : GREY_COLOR_CODE,
                          },
                        ]}
                        source={{ uri: item.category_image }}
                      />
                      <View style={{ marginTop: 10, marginBottom: "5%" }}>
                        <Text style={styles.secondtxt}>
                          {item.category_name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            <View style={styles.lastFootervwe}>
              <Button
                buttonText="Back"
                style={styles.backbtn}
                buttonLabelStyle={styles.startedbtntxt}
                onPress={props.goBack}
              />
              <Button
                buttonText="Next"
                style={styles.btnvwe}
                buttonLabelStyle={styles.startedbtntxt}
                onPress={props.onPressNext}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
export default StepSecondScreen;
