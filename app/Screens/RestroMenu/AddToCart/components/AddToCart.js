import React from "react";
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform
} from "react-native";
import InputSpinner from "react-native-input-spinner";
import styles from "./styles";
import Input from "../../../../Components/Input";
import Button from "../../../../Components/Button";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
} from "../../../../Utils/Constant";
const AddToCartScreen = (props) => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? 'padding' : null}
    style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText={"Item Detail"}
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
        <ScrollView style={{ flexGrow: 1, marginTop: 20 }}>
          <View>
            <Image
              resizeMode="contain"
              style={[styles.MainImgeStyle]}
              source={{ uri: props.ItemDetail.item_image }}
            />
          </View>
          <View style={styles.ContainerStyle}>
            <Text style={styles.DishNameTxt}>{props.ItemDetail.item_name}</Text>
            <Text style={styles.DesrcptnText}>
              {props.ItemDetail.description}
            </Text>
            <View style={styles.MainPriceView}>
              <Text style={styles.priceTextStyle}>
                ${props.ItemDetail.price}
              </Text>
            </View>
          </View>
          <InputSpinner
            value={props.getqty(props.ItemDetail)}
            onIncrease={(value) => props.addToCart(props.ItemDetail, value)}
            onDecrease={(value) =>
              props.removeFromCart(props.ItemDetail, value)
            }
            onChange={() => props.handleFinalAmount(props.ItemDetail)}
            max={10}
            step={1}
            // min={1}
            editable={false}
            rounded={false}
            textColor={YELLOW_COLOR_CODE}
            buttonFontSize={30}
            fontSize={20}
            fontFamily={FONT_FAMILY_REGULAR}
            buttonFontFamily={FONT_FAMILY_REGULAR}
            colorMax={YELLOW_COLOR_CODE}
            colorMin={YELLOW_COLOR_CODE}
            colorPress={YELLOW_COLOR_CODE}
            color={YELLOW_COLOR_CODE}
            inputStyle={{ backgroundColor: "transparent" }}
            buttonPressStyle={{
              height: 70,
              width: 80,
              backgroundColor: YELLOW_COLOR_CODE,
            }}
            buttonStyle={{
              height: 70,
              width: 80,
              justifyContent: "center",
              backgroundColor: YELLOW_COLOR_CODE,
            }}
            style={styles.AddBtnTouchable}
          />
          <TouchableOpacity
            onPress={() => props.onPressSpiceLevel()}
            style={{
              marginTop: 10,
              marginBottom: 10,
              borderColor: "#d8d8d8",
              borderWidth: 1,
              borderBottomWidth: props.ShowSpiceLevel ? 0 : 1,
              width: "92%",
              borderRadius: 8,
              alignSelf: "center",
              flexDirection: "row",
              height: 70,
              paddingLeft: 20,
            }}
          >
            <View style={{ flex: 4.5, alignSelf: "center" }}>
              <Text
                style={{
                  fontSize: 17,
                  color: BLACK_COLOR_CODE,
                }}
              >
                {props.spiceLevel && props.spiceLevel
                  ? props.spiceLevel
                  : "Choose a Spice Level"}
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1.5,
              }}
            >
              {props.ShowSpiceLevel && props.ShowSpiceLevel ? (
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../../Assets/link_dropdown_icon_up.png")}
                />
              ) : (
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../../Assets/link_dropdown_ico.png")}
                />
              )}
            </View>
          </TouchableOpacity>
          {props.ShowSpiceLevel && props.ShowSpiceLevel ? (
            <View
              style={{
                paddingHorizontal: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => props.onPressSpiceLevelValue("Low")}
                style={{ padding: 5 }}
              >
                <Text
                  style={{
                    borderBottomColor: "#d8d8d8",
                    borderBottomWidth: 1,
                    paddingVertical: 5,
                  }}
                >
                  Low
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.onPressSpiceLevelValue("Medium")}
                style={{ padding: 5 }}
              >
                <Text
                  style={{
                    borderBottomColor: "#d8d8d8",
                    borderBottomWidth: 1,
                    paddingVertical: 5,
                  }}
                >
                  Medium
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.onPressSpiceLevelValue("High")}
                style={{ padding: 5 }}
              >
                <Text
                  style={{
                    borderBottomColor: "#d8d8d8",
                    borderBottomWidth: 1,
                    paddingVertical: 5,
                  }}
                >
                  High
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <Input
            onChangeText={(Special) => props.setSpecial(Special)}
            value={props.Special}
            secureTextEntry={false}
            placeholder="Special Instruction"
            InputType="withScroll"
          />
          <Button
            buttonText={
              props.totalItemPrice && props.totalItemPrice
                ? "Add To Cart - $" + props.totalItemPrice
                : "Add To Cart"
            }
            buttonLabelStyle={styles.ADDBtnTxt}
            onPress={() => props.onPressAddToCart(props.ItemDetail)}
            style={{ marginBottom: 15 }}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default AddToCartScreen;
