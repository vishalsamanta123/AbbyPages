import React from "react";
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
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
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";
const AddToCartScreen = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={[CommonStyles.container]}
    >
      <Header
        RightImg={null}
        HeaderText={"Item Detail"}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <ScrollView style={{ flexGrow: 1, marginTop: 2 }}>
        <View>
          <Image
            resizeMode={"stretch"}
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
            <Text style={styles.priceTextStyle}>${props.ItemDetail.price}</Text>
          </View>
        </View>
        <InputSpinner
          value={props.getqty(props.ItemDetail)}
          onIncrease={(value) => props.addToCart(props.ItemDetail, value)}
          onDecrease={(value) => props.removeFromCart(props.ItemDetail, value)}
          onChange={() => props.handleFinalAmount(props.ItemDetail)}
          max={10}
          step={1}
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
          buttonStyle={styles.AddBtnTouchableCon}
          style={styles.AddBtnTouchable}
        />
        <TouchableOpacity
          onPress={() => props.onPressSpiceLevel()}
          style={[
            styles.levelsCon,
            {
              borderBottomWidth: props.ShowSpiceLevel ? 0 : 1,
              marginVertical: props.ShowSpiceLevel ? 0 : 10,
            },
          ]}
        >
          <Text style={styles.otherTxts}>
            {props?.spiceLevel ? props?.spiceLevel : "Choose a Spice Level"}
          </Text>
          <Image
            style={{ width: 20, height: 20 }}
            source={
              props?.ShowSpiceLevel
                ? Images.ARROW_UP_IMG
                : Images.ARROW_DOWN_IMG
            }
          />
        </TouchableOpacity>
        {props?.ShowSpiceLevel ? (
          <View style={{ paddingHorizontal: 20 }}>
            <TouchableOpacity
              onPress={() => props.onPressSpiceLevelValue("Low")}
              style={{ paddingHorizontal: 5 }}
            >
              <Text style={styles.levelsVwTxt}>Low</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onPressSpiceLevelValue("Medium")}
              style={{ paddingHorizontal: 5 }}
            >
              <Text style={styles.levelsVwTxt}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onPressSpiceLevelValue("High")}
              style={{ paddingHorizontal: 5 }}
            >
              <Text style={styles.levelsVwTxt}>High</Text>
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
            props?.totalItemPrice
              ? "Add To Cart - $" + props?.totalItemPrice
              : "Add To Cart"
          }
          buttonLabelStyle={styles.ADDBtnTxt}
          onPress={() => props.onPressAddToCart(props.ItemDetail)}
          style={{ marginBottom: 15 }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default AddToCartScreen;
