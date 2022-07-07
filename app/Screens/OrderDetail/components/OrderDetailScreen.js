import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import styles from "./styles";
import CommonStyles from "../../../Utils/CommonStyles";
import moment from "moment";
import Header from "../../../Components/Header";
import {
  SMALL_TEXT_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  GREY_COLOR_CODE,
} from "../../../Utils/Constant";
const OrderDetailScreen = (props) => {
  const [a, setA] = useState(false);
  useEffect(() => {
    setA(true);
    onNextFirst();
  }, []);
  const onNextFirst = () => {
    if (a) {
      true;
    } else {
      return false;
    }
  };

  const _handleItemList = (item, index) => {
    return (
      <View key={index} style={styles.ConatinView}>
        <View style={styles.itemImgCon}>
          <Image
            style={styles.DishImgeStyle}
            source={{ uri: item.item_image }}
          />
        </View>
        <View style={styles.DishDiscptnView}>
          <Text style={[styles.text, { fontSize: 18 }]}>{item.item_name}</Text>
          <Text
            style={[
              styles.text,
              { fontSize: 12.5, color: SMALL_TEXT_COLOR_CODE },
            ]}
          >
            Design for simplicity and made from high quality materials
          </Text>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.text, { fontSize: 14, paddingRight: 20 }]}>
                Qty: {item.quantity}
              </Text>
              <Text style={[styles.text, { fontSize: 14 }]}>
                $ {item.price}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              {/* <View
                                style={{ backgroundColor: YELLOW_COLOR_CODE, padding: 5, borderRadius: 25 }}
                            >
                                <Image
                                    tintColor={WHITE_COLOR_CODE}
                                    style={{ width: 8, height: 10, backgroundColor: YELLOW_COLOR_CODE }}
                                    source={require('../../../Assets/arrow_right_icon.png')}
                                />
                            </View> */}
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={CommonStyles.container}>
      <Header HeaderText="Order Detail" RightImg={null} />
      <View
        style={[
          CommonStyles.body,
          {
            // padding: 20, paddingBottom: 0
          },
        ]}
      >
        <ScrollView>
          {props.orderDetail.business_image && (
            <Image
              style={{ width: "100%", height: 200 }}
              resizeMode="stretch"
              source={{
                uri:
                  props.orderDetail.business_image &&
                  props.orderDetail.business_image,
              }}
            />
          )}
          <View
            style={{
              padding: 20,
              borderBottomWidth: 8,
              borderBottomColor: LINE_COMMON_COLOR_CODE,
              paddingBottom: 10,
            }}
          >
            <Text style={[styles.text, { fontSize: 23 }]}>
              {props.orderDetail.business_name}
            </Text>
            <Text style={[styles.text, { fontSize: 15 }]}>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 13,
                    color: SMALL_TEXT_COLOR_CODE,
                  },
                ]}
              >
                Order Id :
              </Text>
              {" " + props.orderDetail.order_id}
            </Text>
            {props.orderDetail.total_amount !== null && (
              <Text style={[styles.text, { fontSize: 15 }]}>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 13,
                      color: SMALL_TEXT_COLOR_CODE,
                    },
                  ]}
                >
                  Order Amount :
                </Text>
                {" $ " + props.orderDetail.total_amount}
              </Text>
            )}
            <Text style={[styles.text, { fontSize: 15 }]}>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 13,
                    color: SMALL_TEXT_COLOR_CODE,
                  },
                ]}
              >
                Order Date :
              </Text>
              {moment(props.orderDetail.create_order).format(" Do MMM YYYY")}
            </Text>
            <Text style={[styles.text, { fontSize: 15 }]}>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 13,
                    color: SMALL_TEXT_COLOR_CODE,
                  },
                ]}
              >
                Order Status :
              </Text>
              {props?.orderDetail?.order_status === 0 && " Pending"}
              {props?.orderDetail?.order_status === 1 && " Accepted"}
              {props?.orderDetail?.order_status === 2 && " In Process"}
              {props?.orderDetail?.order_status === 3 && " Cancelled By User"}
              {props?.orderDetail?.order_status === 3 &&
                " Cancelled By Business"}
              {props?.orderDetail?.order_status === 5 && " Completed"}
            </Text>
          </View>

          {props?.orderDetail?.business_type == 1 && (
            <>
              <FlatList
                data={
                  props.orderDetail &&
                  props.orderDetail.item &&
                  props.orderDetail.item
                }
                keyExtractor={(item, index) => index}
                style={{
                  padding: 20,
                  borderBottomWidth: 8,
                  borderColor: LINE_COMMON_COLOR_CODE,
                }}
                renderItem={({ item, index }) => _handleItemList(item, index)}

                // ListFooterComponent={
                //     <View>
                //         <View style={{
                //             // borderBottomWidth: 3,
                //             // borderColor: LINE_COMMON_COLOR_CODE,
                //             padding: 20, paddingTop: 0
                //         }}>
                //             <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                //                 <Text style={[styles.text, { fontSize: 15 }]}>SubTotal</Text>
                //                 <Text style={[styles.text, { fontSize: 15 }]}>$12.00</Text>
                //             </View>
                //             <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1 }}>
                //                 <Text style={[styles.text, { fontSize: 15 }]}>Tax</Text>
                //                 <Text style={[styles.text, { fontSize: 15 }]}>$1.00</Text>
                //             </View>
                //             <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                //                 <Text style={[styles.text, { fontSize: 16 }]}>Final Amount</Text>
                //                 <Text style={[styles.text, { fontSize: 16 }]}>$13.00</Text>
                //             </View>
                //         </View>
                //     </View>
                // }
              />
              {/* <View
                                style={{
                                    padding: 20,
                                    borderBottomWidth: 8,
                                    borderBottomColor: LINE_COMMON_COLOR_CODE,
                                    paddingBottom: 10,
                                    paddingRight: 30,
                                    flexDirection: "row",
                                }}>
                                </View> */}
              {props.orderDetail.order_process == 0 && (
                <View style={{ padding: 20 }}>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontSize: 16,
                        color: SMALL_TEXT_COLOR_CODE,
                        paddingBottom: 15,
                      },
                    ]}
                  >
                    OrderStatus
                  </Text>
                  <View style={{}}>
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        tintColor={
                          props.orderDetail.order_process == 1
                            ? YELLOW_COLOR_CODE
                            : "#c1bcbc"
                        }
                        source={require("../../../Assets/final_order1.png")}
                      />
                      <Text style={[styles.text, { fontSize: 15 }]}>
                        {""} Ordered
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "flex-end" }}
                    >
                      <Image
                        tintColor={
                          props.orderDetail.order_process == 2
                            ? YELLOW_COLOR_CODE
                            : "#c1bcbc"
                        }
                        source={require("../../../Assets/final_order.png")}
                      />
                      <Text style={[styles.text, { fontSize: 15 }]}>
                        Packed
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "flex-end" }}
                    >
                      <Image
                        tintColor={
                          props.orderDetail.order_process == 3
                            ? YELLOW_COLOR_CODE
                            : "#c1bcbc"
                        }
                        source={require("../../../Assets/final_order.png")}
                      />
                      <Text style={[styles.text, { fontSize: 15 }]}>
                        Shipped
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "flex-end" }}
                    >
                      <Image
                        tintColor={
                          props.orderDetail.order_process == 4
                            ? YELLOW_COLOR_CODE
                            : "#c1bcbc"
                        }
                        source={require("../../../Assets/final_order.png")}
                      />
                      <Text style={[styles.text, { fontSize: 15 }]}>
                        Delievered
                      </Text>
                    </View>
                  </View>
                  {/* <ProgressSteps
                                    removeBtnRow={false}
                                    completedProgressBarColor={YELLOW_COLOR_CODE}
                                    activeStepIconColor={YELLOW_COLOR_CODE}
                                    activeStepIconBorderColor={YELLOW_COLOR_CODE}
                                    completedStepIconColor={YELLOW_COLOR_CODE}
                                    labelFontFamily={FONT_FAMILY_REGULAR}
                                    activeLabelColor={YELLOW_COLOR_CODE}
                                    completedLabelColor={YELLOW_COLOR_CODE}
                                    activeStepNumColor={WHITE_COLOR_CODE}
                                // labelColor={YELLOW_COLOR_CODE}
                                >
                                    <ProgressStep
                                        onNext={() => onNextFirst()}
                                        label="Ordered">
                                        <View style={{ alignItems: 'center' }}>
                                            <Text>This is the content within step 1!</Text>
                                        </View>
                                    </ProgressStep>
                                    <ProgressStep label="Packed">
                                        <View style={{ alignItems: 'center' }}>
                                            <Text>This is the content within step 2!</Text>
                                        </View>
                                    </ProgressStep>
                                    <ProgressStep label="Shipped">
                                        <View style={{ alignItems: 'center' }}>
                                            <Text>This is the content within step 3!</Text>
                                        </View>
                                    </ProgressStep>
                                    <ProgressStep label="Delievered">
                                        <View style={{ alignItems: 'center' }}>
                                            <Text>This is the content within step 4!</Text>
                                        </View>
                                    </ProgressStep>
                                </ProgressSteps>*/}
                </View>
              )}
            </>
          )}
        </ScrollView>
      </View>
    </View>
  );
};
export default OrderDetailScreen;
