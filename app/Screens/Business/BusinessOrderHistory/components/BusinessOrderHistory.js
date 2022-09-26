import React from "react";
import { View, FlatList, Text } from "react-native";
import CommonStyles from "../../../../Utils/CommonStyles";
import Header from "../../../../Components/Header";
import {
  WHITE_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  BLACK_COLOR_CODE,
} from "../../../../Utils/Constant";
const BusinessOrderHistory = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Order History"
        RightImg={null}
        leftImg={require("../../../../Assets/hamburger_icon.png")}
        type="Drawer"
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <View
          style={{
            borderTopWidth: 0.3,
            borderColor: "#ffe98e",
            borderBottomWidth: 0.3,
          }}
        >
          {/* <FlatList
                        data={props.dataType}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        style={{
                            backgroundColor: YELLOW_COLOR_CODE,
                        }}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => props._renderCategory(item, index)}
                    />
                    <View style={{
                        borderWidth: 0.3,
                        borderColor: '#ffe98e'
                    }} /> */}
        </View>
        {props.orderData.length > 0 ? (
          <FlatList
            data={props.orderData}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => props._handleOrders(item, index)}
          />
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 18, fontFamily: FONT_FAMILY_REGULAR }}>
              Thare is no data{" "}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default BusinessOrderHistory;
