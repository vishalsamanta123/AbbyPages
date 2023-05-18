import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import styles from "./styles";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import { Images } from "../../../Utils/images";

const StripeConnect = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding' : null}
      style={CommonStyles.container}>
      <Header
        RightImg={null}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        leftImg={
          props.type === "busniess" || props.type === "Edit_event"
            ? Images.HEADER_BCK_IMG
            : Images.DRAWER_IMG
        }
        HeaderText={
          props.type === "busniess"
            ? "Create Event"
            : props.type === "Edit_event"
              ? "Edit Event"
              : "Submit an Event"
        }
        onPressBackFun={() => props.handleBackFun()}
        type={`${props.type !== "busniess" && "Drawer"}`}
      />
      <ScrollView keyboardShouldPersistTaps="always">
        {props.type === "busniess" ? (
          <View style={{ marginHorizontal: 5, marginTop: 8 }}>
            <Text style={styles.headingTxt}>
              Let's figure out what we are selling here.
            </Text>
            <Text
              style={[
                styles.mainTitlesTxt,
                {
                  marginLeft: 14,
                },
              ]}
            >
              Payment -:
            </Text>
            <TouchableOpacity
              onPress={() =>
                props.handleCheckBoxesOfStripe(
                  "acceptRefundReq",
                  props.createEvent.acceptRefundReq === 0 ? 1 : 0
                )
              }
              style={[styles.optionChooseVw, { marginHorizontal: 15 }]}
            >
              <Image
                style={styles.checkImg}
                source={
                  props.createEvent.acceptRefundReq === 0
                    ? Images.UNCHECK_IMG
                    : Images.CHECK_IMG
                }
              />
              <Text style={styles.optionChooseTxt}>Accept refund requests</Text>
            </TouchableOpacity>
            <View style={styles.stripeInputVws}>
              <Text style={styles.titlesTxt}>Refund Policy -</Text>
              <Input
                onChangeText={(text) =>
                  props.setCreateEvent({
                    ...props.createEvent,
                    refund_policy: text,
                  })
                }
                multiline={true}
                value={props.createEvent.refund_policy}
                textInputStyle={{ bottom: 5, height: 80 }}
                secureTextEntry={false}
                placeholder=""
                InputType={null}
              />
              <Text style={styles.titlesTxt}>Terms And Condition -</Text>
              <Input
                onChangeText={(text) =>
                  props.setCreateEvent({
                    ...props.createEvent,
                    terms_cond: text,
                  })
                }
                multiline={true}
                value={props.createEvent.terms_cond}
                textInputStyle={{ bottom: 5, height: 80 }}
                secureTextEntry={false}
                placeholder=""
                InputType={null}
              />
            </View>
            <View style={styles.stripeInputVws}>
              <TouchableOpacity
                onPress={() =>
                  props.handleCheckBoxesOfStripe(
                    "include_tax",
                    props?.createEvent?.include_tax === 0 ? 1 : 0
                  )
                }
                style={[styles.optionChooseVw, { marginHorizontal: 15 }]}
              >
                <Image
                  style={styles.checkImg}
                  source={
                    props?.createEvent?.include_tax === 0
                      ? Images.UNCHECK_IMG : Images.CHECK_IMG
                  }
                />
                <Text style={[styles.optionChooseTxt, { fontSize: 18 }]}>
                  Include Taxes
                  <Text style={{ fontSize: 16, color: LIGHT_BLACK_COLOR_CODE }}>
                    {" "}
                    {props?.createEvent?.include_tax === 1 &&
                      "(Enter Percentage)"}
                  </Text>
                </Text>
              </TouchableOpacity>
              {props?.createEvent?.include_tax === 1 ? (
                <>
                  <Input
                    onChangeText={(text) =>
                      props.setCreateEvent({
                        ...props.createEvent,
                        tax_amount: text,
                      })
                    }
                    multiline={true}
                    value={props.createEvent.tax_amount}
                    textInputStyle={{ bottom: 5 }}
                    secureTextEntry={false}
                    placeholder="%"
                    keyboardType={"number-pad"}
                    InputType={null}
                  />
                </>
              ) : null}
            </View>
            <View style={styles.stripeInputVws}>
              <Text style={[styles.titlesTxt, { fontSize: 16 }]}>
                Support emails for ticket buyers -
              </Text>
              <Input
                onChangeText={(text) =>
                  props.setCreateEvent({
                    ...props.createEvent,
                    support_email: text,
                  })
                }
                multiline={true}
                value={props.createEvent.support_email}
                textInputStyle={{ bottom: 5 }}
                secureTextEntry={false}
                placeholder=""
                InputType={null}
              />
            </View>
            <View style={styles.stripeInputVws}>
              <Text style={styles.titlesTxt}>Active Cards Process -</Text>
              <TouchableOpacity activeOpacity={1} style={styles.stripeConnCon}>
                <Image
                  style={{ width: 24, height: 24, tintColor: WHITE_COLOR_CODE }}
                  source={Images.DOLLAR_IMG}
                />
                <Text style={styles.stripeConnTxt}>Connect With Stripe</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        <View style={styles.twoBttnsVw}>
          <Button
            buttonText={"Back"}
            style={styles.bttnBackVw}
            onPress={() => props.setFormView(props.formView - 1)}
          />
          <Button
            buttonText={"Next"}
            style={styles.bttnNotwoVw}
            onPress={() => props.onPressNextForm()}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default StripeConnect;
