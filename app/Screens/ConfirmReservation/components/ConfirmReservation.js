import React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import styles from "./styles";
import {
  WHITE_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../../Utils/Constant";
const ConfirmReservation = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText={"Confirm Reservation"}
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
        <ScrollView>
          <View style={styles.ConfirmationContain}>
            <Text style={styles.HaedingParatTXT}>
              You 'll get response through Abby here. Businesses will not see
              your contact information.
            </Text>
            <View style={styles.RestroInfoView}>
              <Image
                style={styles.RestroProfile}
                source={{
                  uri: props?.restroDetail && props?.restroDetail?.logo,
                }}
              />
              <View style={styles.RestroNameView}>
                <Text style={styles.RestroNameTxt}>
                  {props?.restroDetail?.business_name}
                </Text>
                <View style={styles.GuestsView}>
                  <Image
                    style={styles.UserImgeStyle}
                    resizeMode="contain"
                    source={require("../../../Assets/list_guest_icon.png")}
                  />
                  <Text style={styles.DateMainTxt}>
                    {props?.reservationData?.people} guests
                  </Text>
                </View>
                <View style={styles.GuestsView}>
                  <Image
                    style={styles.CalenderImge}
                    resizeMode="contain"
                    source={require("../../../Assets/info_calendar_icon.png")}
                  />
                  <Text style={styles.DateMainTxt}>
                    {props?.reservationData?.date} , time{"- "}
                    {props?.reservationData?.time}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => props.onPressEditDetails()}
                  style={styles.GuestsView}
                >
                  <Text style={styles.EditDetailTxt}>Edit Details</Text>
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
            <Text style={[styles.HaedingParatTXT, { lineHeight: 21 }]}>
              You'll receive texts about your restaurant visit. By continuing
              below, you agree to AbbyPage's Terms of
              <Text style={styles.notesTxt}>Service</Text> and{" "}
              <Text style={styles.notesTxt}>Privacy Policy</Text>
              .We'll send your name, mobile number, and notes to the restaurant.
            </Text>
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
                      ? require("../../../Assets/checked_box.png")
                      : require("../../../Assets/uncheck_box.png")
                  }
                />
              </TouchableOpacity>
              <Text style={[styles.HaedingParatTXT, { lineHeight: 19 }]}>
                Receive special offers and updates from Osteria Toscana
              </Text>
            </View>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Button
              buttonText="Confirm"
              onPress={() => props.onPressConfirm()}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ConfirmReservation;
