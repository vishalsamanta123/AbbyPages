import React from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import CommonStyles from "../../../../Utils/CommonStyles";
import styles from "./styles";
import Header from "../../../../Components/Header";
import InputSpinner from "react-native-input-spinner";
import {
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  SMALL_TEXT_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import Button from "../../../../Components/Button";
const ShoppingCartScreen = (props) => {
  const screenlowerdata = (item) => {
    return (
      <View style={styles.footerVw}>
        <View>
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
        </View>
        <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
          <Text style={[styles.hdngtxt, styles.itemsTxt]}>Original Price</Text>
          <Text style={[styles.hdngtxt, , styles.itemsTxt]}>
            $ {props.finalAmount}
          </Text>
        </View>
        <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
          <Text style={[styles.hdngtxt, , styles.itemsTxt]}>Offer</Text>
          <Text style={[styles.hdngtxt, , styles.itemsTxt]}>0</Text>
        </View>
        <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
          <Text style={[styles.hdngtxt, , styles.itemsTxt]}>Promocode</Text>
          <Text style={[styles.hdngtxt, , styles.itemsTxt]}>0</Text>
        </View>
        <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
          <Text style={[styles.hdngtxt, , styles.itemsTxt]}>
            Current Total Price
          </Text>
          <Text style={[styles.hdngtxt, , styles.itemsTxt]}>
            $ {props.finalAmount}
          </Text>
        </View>
        <Button
          style={{ marginTop: 15, marginBottom: 15 }}
          buttonText="Continue"
          onPress={() => props.onPressContinue()}
        />
      </View>
    );
  };
  const _renderCartItemList = ({ item, index }) => {
    return (
      <View style={styles.dataCon}>
        <View style={styles.itemsVw}>
          <Image
            resizeMethod="auto"
            resizeMode="stretch"
            style={styles.posterimg}
            source={{ uri: item?.product_image }}
          />
        </View>
        <View style={{ flex: 4 }}>
          <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
            <Text style={[styles.hdngtxt, { width: null, fontSize: 15 }]}>
              {item.product_name}
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.setRemoveItem(true);
                props.setRemoveIndex(item);
              }}
            >
              <Image
                style={styles.icon}
                source={require("../../../../Assets/cart_delete_icon.png")}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.text, { fontSize: 12, width: "90%" }]}>
            {item.product_description}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={[styles.basiccon, { flex: 1 }]}>
              <InputSpinner
                value={props.getqty(item)}
                onDecrease={(val) => props.removeFromCart(item, val)}
                onIncrease={(val) => props.addProductOnCart(item, val)}
                step={1}
                width={100}
                max={10}
                buttonStyle={styles.spinnerBttnVw}
                buttonPressTextColor={SMALL_TEXT_COLOR_CODE}
                color={"#f2f2f2"}
                buttonTextColor={SMALL_TEXT_COLOR_CODE}
                textColor={SMALL_TEXT_COLOR_CODE}
                textFontFamily={FONT_FAMILY_REGULAR}
                buttonFontFamily={FONT_FAMILY_REGULAR}
                style={{ alignItems: "center" }}
              />
            </View>
            <View style={styles.priceVw}>
              <Text style={[styles.hdngtxt, { width: null, fontSize: 15 }]}>
                {"$ " + item.total_product_price}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? 'padding' : null}
    style={CommonStyles.container}>
      <Header
        HeaderText="Marketplace Cart"
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        headerSecondText={props.shoppingCartData.length}
        RightImg={require("../../../../Assets/trash_icon_header.png")}
        onPress={() => props.setAllDelete(true)}
      />
      <View style={CommonStyles.body}>
        <FlatList
          data={props.shoppingCartData && props.shoppingCartData}
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
