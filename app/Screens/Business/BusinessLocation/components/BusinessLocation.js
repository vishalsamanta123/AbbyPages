import React, { useState } from "react";
import { View, Image, Text, KeyboardAvoidingView,Platform } from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";
import { ScrollView } from "react-native-gesture-handler";
import RNSlider from "react-native-slider";
import RNSpeedometer from "react-native-speedometer";
import {
  YELLOW_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../../Utils/Constant";
const BusinessLocation = (props) => {
  const locaton = parseInt(props.miles);
  const [value] = useState(70);
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? 'padding' : null}
    style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText={"Location"}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
        <Image
          style={styles.TimeLineImge}
          source={require("../../../../Assets/loaction.png")}
        />
        <ScrollView>
          <View style={styles.WriteTextView}>
            <Text style={styles.WriteText}>Choose where to show your ad</Text>
            <Text style={styles.ShareText}>
              Attract nearby customers by showing your ad in locations where you
              do business. You can always change these settings later.
            </Text>
          </View>
          <View style={styles.selectOptionContain}>
            <View
              style={[styles.WriteTextView, { paddingLeft: 0, paddingTop: 0 }]}
            >
              <Text style={styles.WriteOwnText}>
                Set up a radius around your business
              </Text>
              <Text
                style={[styles.ShareText, { lineHeight: 20, paddingTop: 10 }]}
              >
                Attract nearby customers by showing your ad in locations where
                you do business. You can always change these settings later.
              </Text>
              <View style={{ paddingTop: 5 }}>
                <Text style={[styles.WriteText, { fontSize: 16 }]}>
                  <Text style={{ color: YELLOW_COLOR_CODE }}>
                    {props.miles}
                  </Text>{" "}
                  miles
                </Text>
                {/* <Slider 
                                    step={1}
                                    // style={{ width: '95%', height: 40 }}
                                    // minimumValue={1}
                                    // maximumValue={100}
                                    // minimumTrackTintColor={YELLOW_COLOR_CODE}
                                    // thumbTintColor={YELLOW_COLOR_CODE}
                                    // maximumTrackTintColor="#000000"
                                    // onValueChange={value => props.lacationMiles(value)}
                                    // trackStyle={{ height: 50 }}
                                    // value={locaton}
                                // />*/}

                <RNSlider
                  // step={1}
                  style={{ width: "95%", height: 40 }}
                  onSlidingComplete={(value) => props.lacationMiles(value)}
                  maximumValue={100}
                  value={2}
                  // trackStyle={[styles.track]}
                  // thumbStyle={[styles.thumb]}
                  minimumTrackTintColor={YELLOW_COLOR_CODE}
                />
              </View>
            </View>
          </View>
          <View style={styles.EstimateView}>
            <Text style={styles.WriteText}>Estimated audience size </Text>
            <Image
              style={{ top: 2 }}
              source={require("../../../../Assets/info_icon_circled.png")}
            />
          </View>
          <View style={styles.AudienceCOntain}>
            <Text style={[styles.WriteText, { fontSize: 16, padding: 12 }]}>
              Your audience size:
            </Text>
            <View style={styles.LimitedView}>
              <Image
                style={{ width: 110, height: 35 }}
                source={require("../../../../Assets/limited.png")}
              />
              <RNSpeedometer value={value} size={150} />
              {/* <Image style={styles.MeterImge} source={require('../../../../Assets/meter.png')} /> */}
            </View>
            <View style={styles.HintView}>
              <Image
                style={{ top: 1 }}
                source={require("../../../../Assets/bulb_icon_menu.png")}
              />
              <Text style={styles.HintTextMain}>
                Targetting a small area can limit how often your ad shown and
                lead to a higher cost-per-click
              </Text>
            </View>
          </View>
          <Button
            onPress={props.onPressNext}
            buttonText="Next"
            style={{ marginTop: 10 }}
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
export default BusinessLocation;
