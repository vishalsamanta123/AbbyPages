import React from "react";
import { TextInput, Image, View, FlatList, ScrollView } from "react-native";
import Button from "../../../../../Components/Button";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import { Images } from "../../../../../Utils/images";
import { COLORS } from "../../../../../Utils/Constant";
import MainHeader from "../../../../../Components/MainHeader";
import { RowSingleTxtList } from "../../../../../Components/ListItemsView";
import MainInput from "../../../../../Components/MainInput";
import MainButton from "../../../../../Components/MainButton";
import NoRowImageList from "../../../../../Components/ListItemsView/NoRowImageList";
import AddMinusView from "../../../../../Components/AddMinusView";

const RestroMenuView = (props) => {
  return (
    <View style={CommonStyles.container}>
      <MainHeader
        headerText={"Restro Menu"}
        isSearch={false}
        loginButton={false}
        TxtMarginRight={"5%"}
        backText={false}
        onPressBack={() => {
          props.navigation.goBack(null);
          props.setCartData([]);
        }}
      />
      <View style={styles.toplistCon}>
        <RowSingleTxtList
          text={"All"}
          txtColor={props.dataType === "allData" ? COLORS.YELLOW : null}
          borderColor={props.dataType === "allData" ? COLORS.YELLOW : null}
          onPressItem={() => props.handleTypeSelect("allData", null, null)}
          borderBottomWidth={props.dataType === "allData" ? 1 : 0}
        />
        <FlatList
          data={props.categoryList}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => {
            return (
              <RowSingleTxtList
                text={item?.category_name}
                txtColor={
                  item.business_item_category_id ===
                  props.selectedCatgory?.business_item_category_id
                    ? COLORS.YELLOW
                    : COLORS.BLACK
                }
                borderBottomWidth={
                  item.business_item_category_id ===
                  props.selectedCatgory?.business_item_category_id
                    ? 1
                    : 0
                }
                borderColor={
                  item.business_item_category_id ===
                  props.selectedCatgory?.business_item_category_id
                    ? COLORS.YELLOW
                    : null
                }
                onPressItem={() => props.handleTypeSelect("catg", item, index)}
              />
            );
          }}
        />
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <MainInput
          header={false}
          onChangeText={(txt) => props.searchItemData(txt)}
          placeholder={"Search"}
          placeholderTextColor={COLORS.LIGHT_BLACK}
          value={props.search}
          height={50}
        />
      </View>
      <FlatList
        data={props.itemsList}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.listVw}>
              <NoRowImageList
                onPressView={() => props.onPressItem(item)}
                item={item}
                index={index}
                borderBottomWidth={0}
                largeImg={item?.item_image}
                largeName={item?.item_name}
                smallTxt={item?.description}
                rating={item?.rating}
                rowTxt1={
                  item?.discounted_price === "" ||
                  item?.discounted_price === null
                    ? ""
                    : `$${Number(
                        parseFloat(item.discounted_price).toFixed(2)
                      ).toLocaleString("en", { minimumFractionDigits: 2 })}`
                }
                rowTxt2={Number(
                  parseFloat(item.price).toFixed(2)
                ).toLocaleString("en", {
                  minimumFractionDigits: 2,
                })}
                rowTxt2ML={10}
                lineThrough={true}
                onPressSmllBttn={() => {
                  if (props?.userData?.login_type) {
                    props.addToCart(item, 1);
                  } else {
                    props?.navigation?.navigate("Login");
                  }
                }}
                bootomButton={
                  props?.cartData &&
                  props?.cartData?.some(
                    ({ item_id }) => item_id === item.item_id
                  )
                    ? false
                    : true
                }
              />
              {props?.cartData &&
              props?.cartData.some(
                ({ item_id }) => item_id === item.item_id
              ) ? (
                <View style={{ alignItems: "center", left: "12%" }}>
                  <AddMinusView
                    value={props.getqty(item)}
                    minVal={1}
                    onPressAdd={(val) => props.addToCart(item, val)}
                    onPressMinus={(val) => props.removeFromCart(item, val)}
                  />
                </View>
              ) : null}
            </View>
          );
        }}
      />
      <View style={{ marginHorizontal: 10, marginVertical: 12 }}>
        <MainButton
          buttonTxt={
            props.totalAmount === "" || props.totalAmount === null
              ? "Checkout"
              : "Checkout - $" +
                Number(parseFloat(props.totalAmount).toFixed(2)).toLocaleString(
                  "en",
                  {
                    minimumFractionDigits: 2,
                  }
                )
          }
          onPressButton={() => props.onPressCheckOut()}
          paddingHeight={15}
        />
      </View>
    </View>
  );
};
export default RestroMenuView;
