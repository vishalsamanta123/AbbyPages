import React from "react";
import { View, Image, ScrollView } from "react-native";
import styles from "./styles";
import CommonStyles from "../../../../../Utils/CommonStyles";
import MainHeader from "../../../../../Components/MainHeader";
import AddMinusView from "../../../../../Components/AddMinusView";
import ScaleText from "../../../../../Components/ScaleText";
import { getAmount } from "../../../../../Utils/Globalfunctions";
import SelectButton from "../../../../../Components/SelectButton";
import { levels } from "../../../../../Utils/staticData";
import MainInput from "../../../../../Components/MainInput";
import { COLORS } from "../../../../../Utils/Constant";
import MainButton from "../../../../../Components/MainButton";

const RestroItemDetailView = (props) => {
  return (
    <View style={CommonStyles.container}>
      <MainHeader
        headerText={"Item Detail"}
        loginButton={false}
        isLogin={true}
      />
      <ScrollView style={CommonStyles.scrollCon}>
        <Image
          resizeMode={"cover"}
          style={[styles.mainImgStyle]}
          source={{ uri: props?.itemData?.item_image }}
        />
        <View style={styles.container}>
          <ScaleText style={styles.titleTxt}>
            {props?.itemData?.item_name}
          </ScaleText>
          <ScaleText style={styles.dsrcptnText}>
            {props?.itemData?.description}
          </ScaleText>
          <ScaleText style={styles.priceTxtSty}>
            ${getAmount(props?.itemData?.discounted_price)}
          </ScaleText>
        </View>
        <View style={{ alignItems: "center" }}>
          <AddMinusView
            value={props.cartValData?.quantity}
            width={"85%"}
            height={50}
            minVal={1}
            onPressAdd={(val) => props.addToCart(props?.itemData, val)}
            onPressMinus={(val) => props.removeFromCart(props?.itemData, val)}
          />
        </View>
        <View style={{ marginHorizontal: 24, marginVertical: 16 }}>
          <SelectButton
            headTxt={"Choose a spice level"}
            data={levels}
            listType={""}
            paddingHeight={17}
            borderColor={COLORS.GREY}
            searchInput={false}
            value={props?.cartValData?.spice_level}
            labelField={"title"}
            valueField={"title"}
            onPressItem={(item) => {
              props.setCartValData({
                ...props.cartValData,
                spice_level: item.title,
              });
            }}
          />
          <MainInput
            marginTop={10}
            onChangeText={(txt) =>
              props.setCartValData({
                ...props.cartValData,
                special_instruct: txt,
              })
            }
            headTxt={"Description"}
            placeholderTextColor={COLORS.BLACK}
            height={60}
            value={props?.cartValData?.special_instruct}
            placeholder="Special Instruction"
          />
          <View style={{ marginVertical: 20 }}>
            <MainButton
              buttonTxt={
                props.cartValData?.total_item_price === "" ||
                  props.cartValData?.total_item_price === null
                  ? "Add To Cart"
                  : "Add To Cart - $" + props.cartValData?.total_item_price
              }
              paddingHeight={12}
              borderColor={COLORS.YELLOW}
              txtColor={COLORS.YELLOW}
              onPressButton={() => props.onPressAddToCart(props?.itemData)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default RestroItemDetailView;
