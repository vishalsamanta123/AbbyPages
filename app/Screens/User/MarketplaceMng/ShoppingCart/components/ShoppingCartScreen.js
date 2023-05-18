import React from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import Header from "../../../../../Components/Header";
import InputSpinner from "react-native-input-spinner";
import {
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  SMALL_TEXT_COLOR_CODE,
  YELLOW_COLOR_CODE,
  COLORS,
  FONT_SIZE,
} from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import Button from "../../../../../Components/Button";
import AddMinusView from "../../../../../Components/AddMinusView";
import MainButton from "../../../../../Components/MainButton";
import MainHeader from "../../../../../Components/MainHeader";
const ShoppingCartScreen = (props) => {
  const screenlowerdata = (item) => {
    return (
      <View style={styles.footerVw}>
        {/* <View>
          <View style={[styles.basiccon, { paddingBottom: 10 }]}>
            <View style={styles.inputcon}>
              <TextInput
                placeholder="VANCE80"
                style={{ paddingLeft: 10 }}
                placeholderTextColor={BLACK_COLOR_CODE}
              />
            </View>
            <TouchableOpacity activeOpacity={1}>
              <Text style={[styles.hdngtxt, styles.appliedbtncon]}>
                Applied
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.hdngtxt, { fontSize: 15, opacity: 0.8 }]}>
            VANCE80 ($80 OFF)
          </Text>
          <Text style={styles.text}>
            Go sporty this summer with this vintage navy and white striped
            v-neck t-shirt from the Abercrambie & Fitch.
            <Text style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
              Terms & Conditions
            </Text>
          </Text>
          <View style={styles.underLineVw} />
        </View> */}
        <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
          <Text style={[styles.hdngtxt, styles.itemsTxt]}>Original Price</Text>
          <Text style={[styles.hdngtxt, , styles.itemsTxt]}>
            ${" "}
            {Number(parseFloat(props.finalAmount).toFixed(2)).toLocaleString(
              "en",
              {
                minimumFractionDigits: 2,
              }
            )}
          </Text>
        </View>
        <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
          <Text style={[styles.hdngtxt, , styles.itemsTxt]}>Offer</Text>
          <Text style={[styles.hdngtxt, , styles.itemsTxt]}>0.00</Text>
        </View>
        <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
          <Text style={[styles.hdngtxt, , styles.itemsTxt]}>Promocode</Text>
          <Text style={[styles.hdngtxt, , styles.itemsTxt]}>0.00</Text>
        </View>
        <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
          <Text style={[styles.hdngtxt, , styles.itemsTxt]}>
            Current Total Price
          </Text>
          <Text style={[styles.hdngtxt, , styles.itemsTxt]}>
            ${" "}
            {Number(parseFloat(props.finalAmount).toFixed(2)).toLocaleString(
              "en",
              {
                minimumFractionDigits: 2,
              }
            )}
          </Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <MainButton
            // style={{ marginTop: 15, marginBottom: 15 }}
            buttonTxt="Continue"
            backgroundColor={COLORS.YELLOW}
            txtColor={COLORS.WHITE}
            onPressButton={() => props.onPressContinue()}
            paddingHeight={10}
            borderRadius={10}
          />
        </View>
      </View>
    );
  };
  console.log(
    "🚀 ~ file: ShoppingCartScreen.js:108 ~ props.finalAmount:",
    props.finalAmount
  );

  const _renderCartItemList = ({ item, index }) => {
    return (
      <View style={styles.dataCon}>
        <View style={styles.itemsVw}>
          <Image
            style={styles.posterimg}
            source={{ uri: item?.product_image }}
          />
        </View>
        <View style={{ flex: 4 }}>
          <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
            <Text style={[styles.hdngtxt, { width: "80%", fontSize: 15 }]}>
              {item.product_name}
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.setRemoveItem(true);
                props.setRemoveIndex(item);
                // props.handleRemoveProductFromCart(item)
              }}
            >
              <Image style={styles.icon} source={Images.CANCEL_IMG} />
            </TouchableOpacity>
          </View>
          <Text style={[styles.text, { fontSize: 12, width: "90%" }]}>
            {item.product_description}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={[styles.basiccon, { flex: 1 }]}>
              <AddMinusView
                value={item?.quantity}
                minVal={1}
                onPressAdd={(val) => props.addProductOnCart(item, val)}
                onPressMinus={(val) => props.removeFromCart(item, val)}
                width={"100%"}
                height={35}
                buttonFontSize={17}
              />
            </View>
            <View style={styles.priceVw}>
              <Text style={[styles.hdngtxt, { width: null, fontSize: 15 }]}>
                {"$ " +
                  Number(
                    parseFloat(item.price).toFixed(2) * item?.quantity
                  ).toLocaleString("en", {
                    minimumFrcationDigits: 2,
                  })}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={CommonStyles.container}
    >
      {/* <Header
        HeaderText="Marketplace Cart"
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        headerSecondText={props.shoppingCartData.length}
        RightImg={Images.TRASH_IMG}
        onPress={() => props.setAllDelete(true)}
      /> */}
      <MainHeader
        headerText={"Marketplace Cart"}
        isSearch={false}
        loginButton={false}
        TxtMarginRight={"5%"}
        // onPressBack={() => onBackPress()}
      />
      <View
        style={{
          marginVertical: 10,
          alignItems: "flex-end",
          justifyContent: "flex-end",
          marginRight: 10
        }}
      >
        <MainButton
          // style={{ marginTop: 15, marginBottom: 15 }}
          buttonTxt="Clear Cart"
          backgroundColor={COLORS.YELLOW}
          txtColor={COLORS.WHITE}
          onPressButton={() => props.setAllDelete(true)}
          paddingHeight={5}
          borderRadius={10}
          txtFontsize={FONT_SIZE.small}
        />
      </View>
      <View style={CommonStyles.body}>
        <FlatList
          data={
            props?.shoppingCartData?.length > 0 ? props.shoppingCartData : []
          }
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => screenlowerdata()}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => _renderCartItemList({ item, index })}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default ShoppingCartScreen;
