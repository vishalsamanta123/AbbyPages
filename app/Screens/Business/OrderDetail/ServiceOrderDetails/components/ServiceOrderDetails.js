import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import Button from "../../../../../Components/Button";
import Header from "../../../../../Components/Header";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
} from "../../../../../Utils/Constant";
import moment from "moment";
import { Picker } from "@react-native-community/picker";

const ServiceOrderDetailsScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Service Order Detail"
        RightImg={null}
        MainHeadStyle={{ color: LIGHT_BLACK_COLOR_CODE }}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <Image
            style={{ height: 180, width: "100%" }}
            resizeMode="contain"
            source={
              props.orderData
                ? { uri: props.orderData.logo }
                : require("../../../../../Assets/default_image_box.png")
            }
          />
          <View style={CommonStyles.container}>
            <View style={styles.body}>
              <Text style={styles.text}>
                Order Id:{props.orderData ? props.orderData.order_id : null}
              </Text>
              <Text style={[styles.MainText, { color: BLACK_COLOR_CODE }]}>
                {props.orderData ? props.orderData.category_name : null}
              </Text>
              <View style={[styles.row, { paddingVertical: 5 }]}>
                <View style={[styles.row]}>
                  <Image
                    style={{ height: 16, width: 14, marginHorizontal: 4 }}
                    source={require("../../../../../Assets/calendar_icon.png")}
                  />
                  <Text style={styles.text}>
                    {props.orderData
                      ? moment(props.orderData.create_order).format(
                          "MM/DD/YYYY"
                        )
                      : null}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Image
                    style={{ height: 15, width: 15, marginHorizontal: 10 }}
                    source={require("../../../../../Assets/clock_icon2.png")}
                  />
                  <Text style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
                    {props.orderData
                      ? props.orderData.order_status == 0
                        ? "Pending"
                        : props.orderData.order_status == 1
                        ? "Confirmed"
                        : props.orderData.order_status == 4
                        ? "Canceled"
                        : null
                      : null}
                  </Text>
                </View>
              </View>
              <Text style={[styles.text]}>
                UserName:{" "}
                {props.orderData
                  ? props.orderData.first_name + " " + props.orderData.last_name
                  : null}
              </Text>
              <Text style={[styles.text]}>
                Email: {props.orderData ? props.orderData.email : null}
              </Text>
              {/* <Text style={[styles.text]}>
                                Phone No. : {props.orderData ? props.orderData.booking_details.phone : null}
                            </Text> */}
              <Text style={styles.text}>
                {props.orderData ? props.orderData.order_description : null}
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <View style={styles.selectvwe}>
              <TouchableOpacity style={styles.tchvwe}>
                <Picker
                  selectedValue={props?.orderStatus}
                  style={styles.pickerVw}
                  onValueChange={(itemValue, itemIndex) =>
                    props.setOrderStatus(itemValue)
                  }
                  mode={"dropdown"}
                >
                  <Picker.Item label="Update status" />
                  <Picker.Item label="Pending" value={0} />
                  <Picker.Item label="Accept" value={1} />
                  <Picker.Item label="In process" value={2} />
                  <Picker.Item label="Cancel" value={4} />
                  <Picker.Item label="Completed" value={5} />
                </Picker>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Button
              style={{
                borderWidth: 1,
                borderColor: WHITE_COLOR_CODE,
                width: "100%",
              }}
              buttonText="Update"
              onPress={() => props?.updateStatus(props.orderData)}
              // isDisabled={props.orderProcess.}
            />
          </View>
        </ScrollView>
        {/* <View style={[styles.localFooter], { position: 'absolute', bottom: 5, flexDirection: 'row', padding: 8 }}>
                    {
                        props.orderData ?
                            props.orderData.order_status == '4' ?
                                <Button
                                    style={{ borderWidth: 1, borderColor: WHITE_COLOR_CODE, width: '100%' }}
                                    buttonText="Canceled"
                                // onPress={() => props.cancelOrder(props.orderData)}
                                />
                                :
                                <Button
                                    style={{ borderWidth: 1, borderColor: WHITE_COLOR_CODE, width: '50%' }}
                                    buttonText="Cancel"
                                    onPress={() => props.cancelOrder(props.orderData)}
                                />
                            :
                            null
                    }
                    {
                        props.orderData ?
                            props.orderData.order_status == '1' ?
                                <Button
                                    style={{ borderWidth: 1, borderColor: WHITE_COLOR_CODE, width: '50%' }}
                                    buttonText='Confirmed'
                                />
                                : props.orderData.order_status == '0' ?
                                    <Button
                                        style={{ borderWidth: 1, borderColor: WHITE_COLOR_CODE, width: '50%' }}
                                        buttonText="Confirm"
                                        onPress={() => props.orderConfirm(props.orderData)}
                                    />
                                    :
                                    null
                            :
                            null
                    }

                </View> */}
      </View>
    </View>
  );
};
export default ServiceOrderDetailsScreen;
