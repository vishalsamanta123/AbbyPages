import React from "react";
import {
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import Input from "../../../../../Components/Input";
import Button from "../../../../../Components/Button";
import styles from "./styles";
import { FONT_SIZE, COLORS } from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import MainHeader from "../../../../../Components/MainHeader";
import ScaleText from "../../../../../Components/ScaleText";
import PageScroll from "../../../../../Components/PageScroll";
import FastImages from "../../../../../Components/FastImage";
const ConfirmReservation = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <MainHeader
        headerText={"Confirm Reservation"}
        fontSize={FONT_SIZE.medium}
        loginButton={false}
        isLogin={true}
      />
      <View style={[CommonStyles.body, { backgroundColor: COLORS.WHITE }]}>
        <PageScroll>
          <View style={styles.ConfirmationContain}>
            <ScaleText style={styles.HaedingParatTXT}>
              You 'll get response through Abby here. Businesses will not see
              your contact information.
            </ScaleText>
            <View style={styles.RestroInfoView}>
              <FastImages
                style={styles.RestroProfile}
                source={{
                  uri: props?.restroDetail && props?.restroDetail?.logo,
                }}
              />
              <View style={styles.RestroNameView}>
                <ScaleText style={styles.RestroNameTxt}>
                  {props?.restroDetail?.business_name}
                </ScaleText>
                <View style={styles.GuestsView}>
                  <Image
                    style={styles.UserImgeStyle}
                    resizeMode="contain"
                    source={Images.PROFILE_IMG}
                  />
                  <ScaleText style={styles.DateMainTxt}>
                    {props?.reservationData?.people} guests
                  </ScaleText>
                </View>
                <View style={styles.GuestsView}>
                  <Image
                    style={styles.CalenderImge}
                    resizeMode="contain"
                    source={Images.CALENDER_IMG}
                  />
                  <ScaleText style={styles.DateMainTxt}>
                    {props?.reservationData?.date} , time{"- "}
                    {props?.reservationData?.time}
                  </ScaleText>
                </View>
                <TouchableOpacity
                  onPress={() => props.onPressEditDetails()}
                  style={styles.GuestsView}
                >
                  <ScaleText style={styles.EditDetailTxt}>
                    Edit Details
                  </ScaleText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Input
            onChangeText={(firstName) =>
              props?.setLocalUserData({
                ...props?.localUserData,
                firstName: firstName,
              })
            }
            value={props?.localUserData?.firstName}
            placeholder="First Name"
            InputType="withScroll"
          />
          <Input
            onChangeText={(lastName) =>
              props.setLocalUserData({
                ...props?.localUserData,
                lastName: lastName,
              })
            }
            value={props?.localUserData?.lastName}
            placeholder="Last Name"
            InputType="withScroll"
          />
          <Input
            onChangeText={(email) =>
              props.setLocalUserData({
                ...props?.localUserData,
                emailAddress: email,
              })
            }
            value={props?.localUserData?.emailAddress}
            placeholder="Email"
            InputType="withScroll"
          />
          <Input
            onChangeText={(mobile) =>
              props.setLocalUserData({
                ...props?.localUserData,
                mobile: mobile,
              })
            }
            value={props?.localUserData?.mobile}
            placeholder="Mobile Number"
            InputType="withScroll"
            keyboardType={"phone-pad"}
            maxLength={10}
          />
          <Input
            onChangeText={(note) =>
              props.setLocalUserData({
                ...props?.localUserData,
                note: note,
              })
            }
            value={props?.localUserData?.note}
            placeholder="Notes (optional)"
            InputType="withScroll"
            multiLine={true}
          />
          <View style={styles.ConfirmationContain}>
            <ScaleText style={[styles.HaedingParatTXT, { lineHeight: 21 }]}>
              You'll receive texts about your restaurant visit. By continuing
              below, you agree to AbbyPage's Terms of
              <ScaleText style={styles.notesTxt}>Service</ScaleText> and{" "}
              <ScaleText style={styles.notesTxt}>Privacy Policy</ScaleText>
              .We'll send your name, mobile number, and notes to the restaurant.
            </ScaleText>
            <View style={styles.specialOffrVw}>
              <TouchableOpacity
                onPress={() =>
                  props.onPressCheckBox(
                    props?.localUserData?.receive_special_offer
                  )
                }
              >
                <Image
                  style={{ width: 25, height: 25, top: 5 }}
                  source={
                    props.localUserData.receive_special_offer == 1
                      ? Images.THEME_CHECK_IMG
                      : Images.THEME_UNCHECK_IMG
                  }
                />
              </TouchableOpacity>
              <ScaleText style={[styles.HaedingParatTXT, { lineHeight: 19 }]}>
                Receive special offers and updates from Osteria Toscana
              </ScaleText>
            </View>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Button
              buttonText="Confirm"
              onPress={() => props.onPressConfirm()}
            />
          </View>
        </PageScroll>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ConfirmReservation;
