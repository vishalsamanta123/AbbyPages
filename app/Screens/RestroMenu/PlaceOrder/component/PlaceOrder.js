import React from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import Header from "../../../../Components/Header";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";
import styles from "./styles";
import {
  FONT_FAMILY_REGULAR,
  LIGHT_GREY_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
const PlaceOrder = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header HeaderText="Place Order" RightImg={null} />
      <View
        style={[
          CommonStyles.body,
          { flex: 5, backgroundColor: WHITE_COLOR_CODE },
        ]}
      >
        <View style={[styles.MainContainer]}>
          <Text style={styles.OrderTextStyle}>Your order From</Text>
          <Text style={styles.CheckOutText}>{props?.businessName}</Text>
          {/* <View style={{ minHeight: 50 }}> */}
          <FlatList
            data={props.cartLocalData}
            style={{ minHeight: 30 }}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => props._handleDishItem(item, index)}
          />
          {/* </View> */}
          <View style={styles.SubTotalView}>
            <Text style={styles.SubTotalText}>Subtotal</Text>
            <Text style={styles.SubTotalText}>{"$ " + props.totalAmount}</Text>
          </View>
          <View style={styles.SubTotalView}>
            <Text style={styles.SubTotalText}>Tax</Text>
            <Text style={styles.SubTotalText}>$0.00</Text>
          </View>
          <View style={styles.SubTotalView}>
            <Text style={styles.SubTotalText}>Total</Text>
            <Text style={styles.SubTotalText}>{"$ " + props.totalAmount}</Text>
          </View>
          <View style={{ paddingTop: 5 }}>
            <Text style={styles.guidedTxt}>
              By continuing, you agree to Grubhub's{" "}
              <Text style={{ color: YELLOW_COLOR_CODE }}>Terms of Service</Text>{" "}
              and to AbbyPages{" "}
              <Text style={{ color: YELLOW_COLOR_CODE }}>
                Terms of Service{" "}
              </Text>
              and Privacy Policy.Well send this summary to Grubhub
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.CheckBtnView}>
        <Button onPress={props.checkoutPress} buttonText="Checkout" />
      </View>
    </View>
  );
};
export default PlaceOrder;
