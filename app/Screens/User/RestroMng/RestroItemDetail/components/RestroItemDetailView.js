import React from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import Input from "../../../../../Components/Input";
import Button from "../../../../../Components/Button";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { Images } from "../../../../../Utils/images";
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
          source={{ uri: props?.itemDetail?.item_image }}
        />
        <View style={styles.container}>
          <ScaleText style={styles.titleTxt}>
            {props?.itemDetail?.item_name}
          </ScaleText>
          <ScaleText style={styles.dsrcptnText}>
            {props?.itemDetail?.description}
          </ScaleText>
          <ScaleText style={styles.priceTxtSty}>
            ${getAmount(props?.itemDetail?.price)}
          </ScaleText>
        </View>
        <View style={{ alignItems: "center" }}>
          <AddMinusView
            value={props.getqty(props?.itemDetail)}
            minVal={1}
            width={"85%"}
            height={50}
            onPressAdd={(val) => props.addToCart(props?.itemDetail, val)}
            onPressMinus={(val) => props.removeFromCart(props?.itemDetail, val)}
          />
        </View>
        <View style={{ marginHorizontal: 24, marginVertical: 16 }}>
          <SelectButton
            headTxt={""}
            data={levels}
            listType={""}
            paddingHeight={9}
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
            header={false}
            onChangeText={(txt) =>
              props.setCartValData({
                ...props.cartValData,
                special_instruct: txt,
              })
            }
            placeholderTextColor={COLORS.BLACK}
            height={45}
            value={props?.cartValData?.special_instruct}
            placeholder="Special Instruction"
          />
          <View style={{ marginVertical: 20 }}>
            <MainButton
              buttonTxt={
                props?.totalItemPrice === "" || props?.totalItemPrice === null
                  ? "Add To Cart"
                  : "Add To Cart - $" + props?.totalItemPrice
              }
              paddingHeight={12}
              borderColor={COLORS.YELLOW}
              txtColor={COLORS.YELLOW}
              onPressButton={() => props.onPressAddToCart(props?.itemDetail)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default RestroItemDetailView;
