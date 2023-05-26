import React from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import {
  COLORS,
  FONT_SIZE,
} from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import AddMinusView from "../../../../../Components/AddMinusView";
import MainButton from "../../../../../Components/MainButton";
import MainHeader from "../../../../../Components/MainHeader";
import ScaleText from "../../../../../Components/ScaleText";
import EmptyList from "../../../../../Components/EmptyList";
import ListingView from "../../../../../Components/ListingView";
const ShoppingCartScreen = (props) => {
  console.log("🚀 ~ file: ShoppingCartScreen.js:82 ~ props.finalAmount:", props.finalAmount)

  const screenlowerdata = (item) => {
    return (
      <View style={styles.footerVw}>
        <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
          <ScaleText style={[styles.hdngtxt, styles.itemsTxt]}>Original Price</ScaleText>
          <ScaleText style={[styles.hdngtxt, , styles.itemsTxt]}>
            ${" "}
            {Number(parseFloat(props.finalAmount).toFixed(2)).toLocaleString(
              "en",
              {
                minimumFractionDigits: 2,
              }
            )}
          </ScaleText>
        </View>
        <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
          <ScaleText style={[styles.hdngtxt, , styles.itemsTxt]}>Offer</ScaleText>
          <ScaleText style={[styles.hdngtxt, , styles.itemsTxt]}>0.00</ScaleText>
        </View>
        <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
          <ScaleText style={[styles.hdngtxt, , styles.itemsTxt]}>Promocode</ScaleText>
          <ScaleText style={[styles.hdngtxt, , styles.itemsTxt]}>0.00</ScaleText>
        </View>
        <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
          <ScaleText style={[styles.hdngtxt, , styles.itemsTxt]}>
            Current Total Price
          </ScaleText>
          <ScaleText style={[styles.hdngtxt, , styles.itemsTxt]}>
            ${" "}
            {Number(parseFloat(props.finalAmount).toFixed(2)).toLocaleString(
              "en",
              {
                minimumFractionDigits: 2,
              }
            )}
          </ScaleText>
        </View>
        <View style={{ marginVertical: 10 }}>
          <MainButton
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
            <ScaleText style={[styles.hdngtxt, { width: "80%", fontSize: 15 }]}>
              {item.product_name}
            </ScaleText>
            <TouchableOpacity
              onPress={() => {
                props.setRemoveItem(true);
                props.setRemoveIndex(item);
              }}
            >
              <Image style={styles.icon} source={Images.CANCEL_IMG} />
            </TouchableOpacity>
          </View>
          <ScaleText style={[styles.text, { fontSize: 12, width: "90%" }]}>
            {item.product_description}
          </ScaleText>
          <View style={{ flexDirection: "row" }}>
            <View style={[styles.basiccon, { flex: 1 }]}>
              <AddMinusView
                value={item?.quantity}
                minVal={1}
                onPressAdd={(val) =>
                  item?.quantity < item?.available_quantity &&
                  props.addProductOnCart(item, val)
                }
                onPressMinus={(val) => props.removeFromCart(item, val)}
                width={"100%"}
                height={35}
                buttonFontSize={17}
              />
            </View>
            <View style={styles.priceVw}>
              <ScaleText style={[styles.hdngtxt, { width: null, fontSize: 15 }]}>
                {"$ " +
                  Number(
                    parseFloat(item.price).toFixed(2) * item?.quantity
                  ).toLocaleString("en", {
                    minimumFrcationDigits: 2,
                  })}
              </ScaleText>
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
      <MainHeader
        headerText={"Marketplace Cart"}
        isSearch={false}
        loginButton={false}
        TxtMarginRight={"5%"}
      />
      <View
        style={{
          marginVertical: 10,
          alignItems: "flex-end",
          justifyContent: "flex-end",
          marginRight: 10,
        }}
      >
        <MainButton
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
        <ListingView
          data={
            props?.shoppingCartData?.length > 0 ? props.shoppingCartData : []
          }
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => screenlowerdata()}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => _renderCartItemList({ item, index })}
          ListEmptyComponent={() => <EmptyList message={"Cart Products"} />}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default ShoppingCartScreen;
