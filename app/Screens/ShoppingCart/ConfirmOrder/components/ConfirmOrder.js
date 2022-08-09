import React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import Input from "../../../../Components/Input";
import Button from "../../../../Components/Button";
import styles from "./styles";
import {
  FONT_FAMILY_REGULAR,
  GREY_COLOR_CODE,
  FONT_FAMILY_BOLD,
  LINE_COMMON_COLOR_CODE,
  YELLOW_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../../Utils/Constant";
const ConfirmOrder = (props) => {
  return (
    <KeyboardAvoidingView style={[CommonStyles.container]}>
      <Header
        RightImg={require("../../../../Assets/trash_icon_header.png")}
        HeaderText={" Confirm Order "}
        headerSecondText={false}
        onPress={() => props.onPressDeleteCart()}
        logoImg={false}
      />
      <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
        <ScrollView>
          <Input
            value={props?.localUserData?.first_name}
            onChangeText={(val) =>
              props.setLocalUserData({
                ...props.localUserData,
                first_name: val,
              })
            }
            labelStyleMain={{
              color: GREY_COLOR_CODE,
              backgroundColor: "#f2f2f2",
            }}
            placeholderTextColor={GREY_COLOR_CODE}
            placeholder={"First Name"}
            containerStyle={{ backgroundColor: "#f2f2f2" }}
          />
          <Input
            value={props?.localUserData?.last_name}
            onChangeText={(val) =>
              props.setLocalUserData({
                ...props.localUserData,
                last_name: val,
              })
            }
            placeholderTextColor={GREY_COLOR_CODE}
            placeholder={"Last Name"}
            containerStyle={{ backgroundColor: "#f2f2f2" }}
          />
          <Input
            value={props?.localUserData?.email}
            onChangeText={(val) =>
              props.setLocalUserData({
                ...props.localUserData,
                email: val,
              })
            }
            placeholderTextColor={GREY_COLOR_CODE}
            placeholder={"Email"}
            containerStyle={{ backgroundColor: "#f2f2f2" }}
          />
          <Input
            value={props?.localUserData?.mobile}
            onChangeText={(val) =>
              props.setLocalUserData({
                ...props.localUserData,
                mobile: val,
              })
            }
            placeholderTextColor={GREY_COLOR_CODE}
            placeholder={"Phone"}
            maxLength={10}
            containerStyle={{ backgroundColor: "#f2f2f2" }}
          />
          <Input
            value={props?.localUserData?.description}
            onChangeText={(val) =>
              props.setLocalUserData({
                ...props.localUserData,
                description: val,
              })
            }
            placeholderTextColor={GREY_COLOR_CODE}
            placeholder={"Description"}
            containerStyle={{ backgroundColor: "#f2f2f2" }}
          />
          <View style={styles.TextInputView}>
            <Text style={styles.FirsNameTxt}>Payment Method</Text>
            <Text style={styles.NameTextStyle}>
              {props?.orderData?.order_payment_type === 1
                ? "Cash On Delievery"
                : "Pay Online"}
            </Text>
          </View>
          <View style={styles.TextInputView}>
            <Text style={styles.FirsNameTxt}>Address</Text>
            {props?.orderData?.location && (
              <Text style={styles.NameTextStyle}>
                {props?.orderData?.location[0]?.location}
              </Text>
            )}
          </View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={props.shoppingCartData}
            renderItem={({ item, index }) =>
              props._handleConfirmOrder(item, index)
            }
          />
          <View style={styles.COnfirmBtnView}>
            <Button
              onPress={() => props.onPressConfirm()}
              buttonText="Confirm"
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ConfirmOrder;
