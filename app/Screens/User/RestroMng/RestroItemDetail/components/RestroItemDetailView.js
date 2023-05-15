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
        {/* <TouchableOpacity
          onPress={() => props.onPressSpiceLevel()}
          style={[
            styles.levelsCon,
            {
              borderBottomWidth: props.ShowSpiceLevel ? 0 : 1,
              marginVertical: props.ShowSpiceLevel ? 0 : 10,
            },
          ]}
        >
          <ScaleText style={styles.otherTxts}>
            {props?.spiceLevel ? props?.spiceLevel : "Choose a Spice Level"}
          </ScaleText>
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
              <ScaleText style={styles.levelsVwTxt}>Low</ScaleText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onPressSpiceLevelValue("Medium")}
              style={{ paddingHorizontal: 5 }}
            >
              <ScaleText style={styles.levelsVwTxt}>Medium</ScaleText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onPressSpiceLevelValue("High")}
              style={{ paddingHorizontal: 5 }}
            >
              <ScaleText style={styles.levelsVwTxt}>High</ScaleText>
            </TouchableOpacity>
          </View>
        ) : null} */}
        <View style={{ marginHorizontal: 24, marginVertical: 16 }}>
          <SelectButton
            headTxt={""}
            data={levels}
            listType={""}
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
            height={50}
            value={props?.cartValData?.special_instruct}
            placeholder="Special Instruction"
          />
        </View>
        <Button
          buttonText={
            props?.totalItemPrice === "" || props?.totalItemPrice === null
              ? "Add To Cart"
              : "Add To Cart - $" + props?.totalItemPrice
          }
          onPress={() => props.onPressAddToCart(props?.itemDetail)}
          style={{ marginBottom: 15 }}
        />
      </ScrollView>
    </View>
  );
};
export default RestroItemDetailView;
