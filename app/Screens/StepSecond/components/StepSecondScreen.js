import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import Button from "../../../Components/Button";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  YELLOW_COLOR_CODE,
  GREY_COLOR_CODE,
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";
const StepSecondScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        leftImg={require("../../../Assets/close_window_icon.png")}
        // HeaderText={"2 of 8"}
        HeaderText={"2 of 5"}
        RightImg={null}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      {props.queAnsData ? (
        <View style={styles.questCon}>
          <View style={styles.questVw}>
            <Text style={styles.qusetTxt}>{props?.queAnsData?.question}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              data={props?.queAnsData?.answer}
              contentContainerStyle={styles.answerCon}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      props.setSelectedAnswer(item);
                    }}
                    key={index}
                    style={styles.answerVw}
                  >
                    <View style={{ paddingHorizontal: 10 }}>
                      <Image
                        resizeMode="contain"
                        source={
                          props.selectedAnswer.question_ans_id ===
                          item.question_ans_id
                            ? require("../../../Assets/radio_circled_checked.png")
                            : require("../../../Assets/radio_circled_unchecked.png")
                        }
                      />
                    </View>
                    <Text style={styles.answerTxt}>{item.answer}</Text>
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
                      <Text style={styles.secondtxt}>{item.category_name}</Text>
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
  );
};
export default StepSecondScreen;
