import React from "react";
import {
  TextInput,
  Image,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import Header from "../../../../Components/Header";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";
import styles from "./styles";
import {
  YELLOW_COLOR_CODE,
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  LIGHT_WHITE_COLOR,
} from "../../../../Utils/Constant";
const ShowMenu = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Menu"
        RightImg={null}
        // RightImg={require('../../../../Assets/search_icon_header.png')}
        // onPress={() => ('ram')}
      />
      <View style={[CommonStyles.body]}>
        <View style={styles.FlatlistContain}>
          <TouchableOpacity
            onPress={() => props._handleDataTypeSelected("allData", null, null)}
            style={styles.lablestyle}
          >
            <Text
              style={[
                styles.txtCat,
                {
                  color:
                    props.dataType === "allData"
                      ? WHITE_COLOR_CODE
                      : LIGHT_WHITE_COLOR,
                },
              ]}
            >
              All
            </Text>
          </TouchableOpacity>
          <FlatList
            data={props.restroItemCategoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            // style={{ backgroundColor: YELLOW_COLOR_CODE }}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => props._renderCategory(item, index)}
          />
        </View>
        <ScrollView>
          <View style={styles.MainContainer}>
            <View style={styles.searchVw}>
              <View style={styles.searchInputVw}>
                <Image
                  source={require("../../../../Assets/search_field_icon.png")}
                />
              </View>
              <View style={{ flex: 5 }}>
                <TextInput
                  onChangeText={(searchKey) => props.searchItem(searchKey)}
                  placeholder={"Search"}
                  value={props.search}
                  style={styles.searchInput}
                />
              </View>
            </View>
            <FlatList
              data={props.restroItemList}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) =>
                props._handleSandwichDish(item, index)
              }
            />
          </View>
          <Button
            style={{ marginBottom: 20 }}
            onPress={() => props.onPressCheckOut()}
            buttonText={
              props.totalAmount && props.totalAmount
                ? "Checkout - $" + props.totalAmount
                : "Checkout"
            }
          />
        </ScrollView>
      </View>
    </View>
  );
};
export default ShowMenu;
