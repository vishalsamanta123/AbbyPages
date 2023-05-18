import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Rating } from "react-native-ratings";
import Input from "../../../../Components/Input";
import InputSpinner from "react-native-input-spinner";
import CommonStyles from "../../../../Utils/CommonStyles";
import moment from "moment";
import styles from "./styles";
import Header from "../../../../Components/Header";
import Button from "../../../../Components/Button";
import {
  YELLOW_COLOR_CODE,
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";

const ProductDetailsScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Product Details"
        RightImg={Images.CART_ADDED_IMG}
        onPress={() => props.onPressCart()}
        cartLength={props.shoppingCartData.length}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
      />
      <ScrollView>
        {/* <View style={styles.maincontainers}> */}
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <FlatList
            horizontal
            keyExtractor={(item, index) => index}
            data={props?.productDetail?.product_image}
            renderItem={({ item, index }) => (
              <Image
                key={index}
                resizeMode="stretch"
                style={styles.bannerimg}
                source={{ uri: item.product_image }}
              />
            )}
          />
        </View>
        {/* </View> */}
        <View style={styles.infocon}>
          <Text style={[styles.hdngtxt, { fontSize: 20, lineHeight: 24 }]}>
            {props.productDetail.product_name}
          </Text>
          <View style={styles.basiccon}>
            <View style={[styles.basiccon, { marginRight: 15 }]}>
              <Text
                style={[
                  styles.hdngtxt,
                  { width: null, fontSize: 20, lineHeight: 24 },
                ]}
              >
                ${props.productDetail.final_price}
              </Text>
            </View>
            <View style={styles.basiccon}>
              <Text
                style={[
                  styles.hdngtxt,
                  { width: null, fontSize: 20, lineHeight: 24 },
                ]}
              >
                ${props.productDetail.price}
              </Text>
            </View>
          </View>
          <View style={styles.basiccon}>
            <Text style={[styles.text, { fontSize: 15, lineHeight: 19 }]}>
              {props.productDetail.rating} customer reviews
            </Text>
          </View>
          <View style={styles.basiccon}>
            <Text
              style={[
                styles.text,
                { width: null, fontSize: 14, lineHeight: 19 },
              ]}
            >
              SKU: {props.productDetail.product_size}
            </Text>
          </View>
          <View style={styles.basiccon}>
            <Text
              style={[
                styles.text,
                { width: null, fontSize: 14, lineHeight: 19 },
              ]}
            >
              Category: {props.productDetail.sub_category_name}
            </Text>
          </View>
          <View style={styles.basiccon}>
            <Text
              style={[
                styles.text,
                { width: null, fontSize: 14, lineHeight: 19 },
              ]}
            >
              Sub-Category: {props.productDetail.business_product_category_name}
            </Text>
          </View>
          <View
            style={[
              styles.basiccon,
              {
                marginBottom: 10,
                marginTop: 15,
                justifyContent: "space-around",
              },
            ]}
          >
            {props.addButton ? (
              <InputSpinner
                value={props.getqty(props.productDetail)}
                onDecrease={(val) =>
                  props.removeFromCart(props.productDetail, val)
                }
                onIncrease={(val) =>
                  props.addProductOnCart(props.productDetail, val)
                }
                // min={1}
                max={10}
                buttonTextColor={WHITE_COLOR_CODE}
                textColor={WHITE_COLOR_CODE}
                buttonFontSize={35}
                fontSize={20}
                step={1}
                editable={false}
                rounded={false}
                colorMax={YELLOW_COLOR_CODE}
                colorMin={YELLOW_COLOR_CODE}
                colorPress={YELLOW_COLOR_CODE}
                color={YELLOW_COLOR_CODE}
                inputStyle={{ backgroundColor: "transparent", fontSize: 24 }}
                buttonPressStyle={{
                  height: 50,
                  width: 50,
                  backgroundColor: YELLOW_COLOR_CODE,
                }}
                buttonStyle={{
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                }}
                buttonFontFamily={FONT_FAMILY_REGULAR}
                style={styles.AddBtnTouchable}
              />
            ) : (
              <Button
                style={{ marginVertical: 10 }}
                buttonText="Add to Cart"
                onPress={() => props.onPressAddProduct(props.productDetail, 1)}
              // onPress={() => props.onPressAddTocart()}
              />
            )}
          </View>
        </View>

        <View style={styles.maincontainers}>
          <Text style={styles.hdngtxt}>Description</Text>
          <View style={styles.basiccon}>
            <Text style={styles.text}>
              {props.productDetail.description}
              {/* {'\n'}{'\n'} */}
            </Text>
          </View>
        </View>

        <View style={[styles.maincontainers, { borderBottomWidth: 0 }]}>
          <View style={[styles.aboutview, {}]}>
            <Text style={styles.abouttxt}>Review & Ratings</Text>
            {props.reviewModal === false && (
              <Button
                buttonText="Write A Review"
                style={styles.revieewbtn}
                onPress={() => props.setReviewModal(true)}
                buttonLabelStyle={styles.buttonLabelStyle}
              />
            )}
          </View>
          {props.reviewModal && props.reviewModal === true && (
            <View>
              <Rating
                onFinishRating={(rating) =>
                  props.setBusinessReviewRating(rating)
                }
                style={{
                  paddingVertical: 10,
                  paddingLeft: 20,
                  alignSelf: "flex-start",
                }}
                imageSize={30}
              />
              <Input
                onChangeText={(title) =>
                  props.setReviewData({
                    ...props.reviewData,
                    title: title,
                  })
                }
                value={props.reviewData.title}
                secureTextEntry={false}
                placeholder="Subject"
                InputType="withScroll"
              />
              <Input
                onChangeText={(description) =>
                  props.setReviewData({
                    ...props.reviewData,
                    description: description,
                  })
                }
                value={props.reviewData.description}
                secureTextEntry={false}
                placeholder="Description"
                InputType="withScroll"
                multiline={true}
              />
              <Button
                style={{ padding: 15 }}
                buttonText="Submit"
                buttonLabelStyle={styles.ButtonLabel}
                onPress={() => props.onSubmitReviewData()}
              // onPress={() => props.setReviewModal(false)}
              />
            </View>
          )}
          <FlatList
            data={props?.productDetail?.product_review}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => (
              <View
                style={[
                  styles.basiccon,
                  {
                    flexDirection: "column",
                    borderBottomWidth: 0.5,
                    paddingBottom: 10,
                    borderColor: "lightgrey",
                    padding: 5,
                  },
                ]}
              >
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1.3 }}>
                    <Image
                      style={{
                        height: 60,
                        width: 60,
                        borderRadius: 30,
                      }}
                      source={{ uri: item.profile_image }}
                    />
                  </View>
                  <View style={{ flex: 4.7 }}>
                    <Text
                      style={[
                        styles.hdngtxt,
                        { fontSize: 15.5, lineHeight: 19.9 },
                      ]}
                    >
                      {item.title}
                    </Text>
                    <View style={[styles.basiccon]}>
                      <Text
                        style={[styles.text, { fontSize: 13, lineHeight: 17 }]}
                      >
                        by
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.text,
                          {
                            fontSize: 13,
                            color: YELLOW_COLOR_CODE,
                            paddingLeft: 5,
                            lineHeight: 17,
                            width: "50%",
                          },
                        ]}
                      >
                        {item.first_name + " " + item.last_name}
                      </Text>
                      <Text
                        style={[
                          styles.text,
                          { paddingLeft: 5, fontSize: 13, lineHeight: 17 },
                        ]}
                      >
                        {/* 15 hours ago */}
                        {" | " +
                          moment(
                            item.create_date,
                            "YYYY-MM-DD,h:mm:ss a"
                          ).fromNow()}
                      </Text>
                    </View>
                    {/* <View style={[styles.basiccon,]}>
                                                <Text style={[styles.hdngtxt, {
                                                    width: 30, textAlign: "center",
                                                    fontSize: 14, backgroundColor: '#a3d74e',
                                                    color: WHITE_COLOR_CODE, lineHeight: 18
                                                }]}>
                                                    5.0 
                                                </Text>
                                                <Text style={[styles.text, { paddingLeft: 10, fontSize: 14, lineHeight: 18 }]}>
                                                    Excellent
                                                </Text>
                                            </View> */}
                  </View>
                </View>
                <View style={{ flex: 1, paddingVertical: 12 }}>
                  <Text style={styles.text}>{item.description}</Text>
                </View>
              </View>
            )}
          />
        </View>
        {props?.productDetail?.related_product && (
          <>
            <Text style={styles.relatedItemsTxt}>Related Products</Text>
            <View style={styles.relatedItems}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{ flexGrow: 1 }}
              >
                {props?.productDetail?.related_product.map((item) => {
                  return (
                    <TouchableOpacity
                      onPress={() => props.onPressProduct(item)}
                      style={styles.mainConatiner}
                    >
                      <Image
                        style={styles.mainImgeStyle}
                        resizeMode="contain"
                        source={{
                          uri: item.product_image,
                        }}
                      />
                      <View style={styles.mainConatinerView}>
                        <Text numberOfLines={1} style={styles.productName}>
                          {item.product_name}
                        </Text>
                        <Text style={styles.priceTxt}>$ {item.price}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};
export default ProductDetailsScreen;
// {props.productDetail.rating == 1 && (
//   <Image
//     style={[styles.icon, { marginRight: 0, height: 18, width: 18 }]}
//     source={require("../../../../Assets/extraImages/rating-star-icon-yellow.png")}
//   />
// )}
// {props.productDetail.rating == 2 && (
//   <>
//     <Image
//       style={[
//         styles.icon,
//         { marginRight: 0, height: 18, width: 18 },
//       ]}
//       source={require("../../../../Assets/extraImages/rating-star-icon-yellow.png")}
//     />
//     <Image
//       style={[
//         styles.icon,
//         { marginRight: 0, height: 18, width: 18 },
//       ]}
//       source={require("../../../../Assets/extraImages/rating-star-icon-yellow.png")}
//     />
//   </>
// )}
// {props.productDetail.rating == 3 && (
//   <>
//     <Image
//       style={[
//         styles.icon,
//         { marginRight: 0, height: 18, width: 18 },
//       ]}
//       source={require("../../../../Assets/extraImages/rating-star-icon-yellow.png")}
//     />
//     <Image
//       style={[
//         styles.icon,
//         { marginRight: 5, height: 18, width: 18 },
//       ]}
//       source={require("../../../../Assets/extraImages/rating-star-icon-yellow.png")}
//     />
//     <Image
//       style={[
//         styles.icon,
//         { marginRight: 5, height: 18, width: 18 },
//       ]}
//       source={require("../../../../Assets/extraImages/rating-star-icon-yellow.png")}
//     />
//   </>
// )}
// {props.productDetail.rating == 4 && (
//   <>
//     <Image
//       style={[
//         styles.icon,
//         { marginRight: 0, height: 18, width: 18 },
//       ]}
//       source={require("../../../../Assets/extraImages/rating-star-icon-yellow.png")}
//     />
//     <Image
//       style={[
//         styles.icon,
//         { marginRight: 5, height: 18, width: 18 },
//       ]}
//       source={require("../../../../Assets/extraImages/rating-star-icon-yellow.png")}
//     />
//     <Image
//       style={[
//         styles.icon,
//         { marginRight: 5, height: 18, width: 18 },
//       ]}
//       source={require("../../../../Assets/extraImages/rating-star-icon-yellow.png")}
//     />
//     <Image
//       style={[
//         styles.icon,
//         { marginRight: 5, height: 18, width: 18 },
//       ]}
//       source={require("../../../../Assets/extraImages/rating-star-icon-yellow.png")}
//     />
//   </>
// )}
// {props.productDetail.rating == 5 && (
//   <>
//     <Image
//       style={[
//         styles.icon,
//         { marginRight: 0, height: 18, width: 18 },
//       ]}
//       source={require("../../../../Assets/extraImages/rating-star-icon-yellow.png")}
//     />
//     <Image
//       style={[
//         styles.icon,
//         { marginRight: 5, height: 18, width: 18 },
//       ]}
//       source={require("../../../../Assets/extraImages/rating-star-icon-yellow.png")}
//     />
//     <Image
//       style={[
//         styles.icon,
//         { marginRight: 5, height: 18, width: 18 },
//       ]}
//       source={require("../../../../Assets/extraImages/rating-star-icon-yellow.png")}
//     />
//     <Image
//       style={[
//         styles.icon,
//         { marginRight: 5, height: 18, width: 18 },
//       ]}
//       source={require("../../../../Assets/extraImages/rating-star-icon-yellow.png")}
//     />
//     <Image
//       style={[
//         styles.icon,
//         { marginRight: 5, height: 18, width: 18 },
//       ]}
//       source={require("../../../../Assets/extraImages/rating-star-icon-yellow.png")}
//     />
//   </>
// )}
