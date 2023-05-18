import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Animated,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import CommonStyles from "../../../../Utils/CommonStyles";
import styles from "./styles";
import Button from "../../../../Components/Button";
import Header from "../../../../Components/Header";
import {
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";

const BusinessProductDetails = (props) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header
        HeaderText="Product Details"
        RightImg={null}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      // RightImg={Images.CART_ADDED_IMG}
      />
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <View style={{ height: 230 }}>
            <ScrollView
              horizontal={true}
              style={styles.scrollViewStyle}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event([
                {
                  nativeEvent: {
                    contentOffset: {
                      x: scrollX,
                    },
                  },
                },
              ])}
              scrollEventThrottle={1}
            >
              {props.ProductData ? (
                props?.ProductData?.product_image?.map((item, imageIndex) => {
                  return (
                    <View
                      style={{ width: windowWidth, height: "100%" }}
                      key={imageIndex}
                    >
                      <ImageBackground
                        style={styles.PosterImgeStyle}
                        source={{
                          uri: item.product_image,
                        }}
                        resizeMode="stretch"
                        resizeMethod="resize"
                      />
                    </View>
                  );
                })
              ) : (
                <Image
                  style={styles.PosterImgeStyle}
                  source={require("../../../../Assets/extraImages/blackBuild.png")}
                />
              )}
            </ScrollView>
            <View style={styles.dotsVw}>
              {props.ProductData
                ? props.ProductData.product_image.map((image, imageIndex) => {
                  const width = scrollX.interpolate({
                    inputRange: [
                      windowWidth * (imageIndex - 1),
                      windowWidth * imageIndex,
                      windowWidth * (imageIndex + 1),
                    ],
                    outputRange: [8, 16, 8],
                    extrapolate: "clamp",
                  });
                  return (
                    <Animated.View
                      key={imageIndex}
                      style={[styles.normalDot, { width }]}
                    />
                  );
                })
                : null}
            </View>
          </View>
          {props.ProductData ? (
            <View style={styles.infocon}>
              <Text style={[styles.hdngtxt, { fontSize: 20 }]}>
                {props.ProductData.product_name}
              </Text>
              <Text style={[styles.hdngtxt, { fontSize: 20 }]}>
                $
                {Number(
                  parseFloat(props.ProductData.final_price).toFixed(2)
                ).toLocaleString("en", {
                  minimumFractionDigits: 2,
                })}
                <Text style={styles.text}> for you</Text>
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.PriceOfDishTxt}>M.R.P :</Text>
                <Text
                  style={[
                    styles.PriceOfDishTxt,
                    { textDecorationLine: "line-through" },
                  ]}
                >
                  {" "}
                  $
                  {Number(
                    parseFloat(props.ProductData.price).toFixed(2)
                  ).toLocaleString("en", {
                    minimumFractionDigits: 2,
                  })}
                </Text>
                <Text style={[styles.PriceOfDishTxt]}>
                  {" "}
                  ({props.ProductData.discount}% off)
                </Text>
              </View>
              <View style={styles.basiccon}>
                <Text style={styles.text}>
                  Categories: {props.ProductData.sub_category_name}
                </Text>
                <TouchableOpacity
                  style={styles.switchstyle}
                  onPress={() =>
                    props.productStatus({
                      id: props.ProductData?.product_id,
                      status: props.ProductData?.status == 1 ? 0 : 1,
                      is_delete: 0,
                    })
                  }
                >
                  <Image
                    source={
                      props.ProductData?.status === 1
                        ? Images.ACTIVE_SWITCH_IMG
                        : Images.UNACTIVE_SWITCH_IMG
                    }
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.localFooter}>
                <Button
                  style={{ width: "48%", padding: 10 }}
                  buttonLabelStyle={{ color: WHITE_COLOR_CODE }}
                  buttonText="Edit"
                  onPress={() => props.editProduct()}
                />
                <Button
                  style={{ width: "48%", padding: 10 }}
                  buttonLabelStyle={{ color: WHITE_COLOR_CODE }}
                  buttonText="Delete"
                  onPress={() => props.setDeleteProduct(true)}
                />
              </View>
            </View>
          ) : null}
          {props?.ProductData?.description ? (
            <View style={([styles.maincontainers], { padding: 15 })}>
              <Text style={styles.hdngtxt}>Description</Text>
              <View style={styles.basiccon}>
                <Text style={styles.text}>{props.ProductData.description}</Text>
              </View>
            </View>
          ) : null}
        </ScrollView>
      </View>
    </View>
  );
};
export default BusinessProductDetails;
