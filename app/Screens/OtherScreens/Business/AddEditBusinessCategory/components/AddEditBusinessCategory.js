import React from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
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

const AddEditBusinessCategory = (props) => {
  const _renderItems = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => props.onClickService(item.category_name)}
        style={styles.labelStyle}
      >
        <View
          style={{
            flex: 5.5,
            justifyContent: "center",
          }}
        >
          <Text style={styles.txt}>{item.category_name}</Text>
        </View>
        <View style={styles.lstimgvwe}>
          {item.check === true ? (
            <Image
              style={styles.iconimg}
              source={Images.ROUND_CHECK_IMG}
            />
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Add Business Categories"
        RightImg={null}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View
        style={[
          CommonStyles.body,
          { paddingTop: 25, backgroundColor: WHITE_COLOR_CODE },
        ]}
      >
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            // margin: 10,
            marginLeft: 16,
            marginRight: 16,
            borderColor: "#d8d8d8",
            borderWidth: 1,
            borderRadius: 8,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              // height: 70,
              paddingTop: 20,
              paddingBottom: 20,
              width: "95%",
              borderColor: "#d8d8d8",
              paddingLeft: 20,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: "90%" }}>
              <Text
                style={{
                  fontSize: 17,
                  // color: 'red'
                  color: BLACK_COLOR_CODE,
                }}
              >
                Business Categories
              </Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {props.ShowSelectCategory &&
                  props.ShowSelectCategory.map((item, index) => {
                    return item.check === true ? (
                      <View style={{ padding: 3 }}>
                        <View
                          style={{
                            flexDirection: "row",
                            margin: 2,
                            justifyContent: "center",
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: "#d8d8d8",
                          }}
                        >
                          <View style={{ padding: 5 }}>
                            <Text>{item.category_name}</Text>
                          </View>
                          <TouchableOpacity
                            onPress={() => props.RemoveService(index)}
                            style={{
                              borderLeftWidth: 1,
                              padding: 5,
                              borderColor: "#d8d8d8",
                            }}
                          >
                            <Text>X</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    ) : null;
                  })}
              </View>
            </View>
            <TouchableOpacity
              onPress={() => props.onPressBusinessCategories()}
              style={{ paddingRight: 10 }}
            >
              <Image
                style={{ width: 25, height: 25 }}
                source={props.businessCategory ?
                  Images.ARROW_UP_IMG :
                  Images.ARROW_DOWN_IMG
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        {props.businessCategory ? (
          <View
            style={{
              marginLeft: 20,
              borderWidth: 1,
              height: props.subCategoryList.length >= 0 ? 200 : 80,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              width: "90%",
              borderColor: "#d8d8d8",
            }}
          >
            <View
              style={{
                paddingLeft: 14,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "#a9a9a9",
              }}
            >
              <TextInput
                onChangeText={(search) => props.CategorySearch(search)}
                autoCapitalize={"none"}
                style={{ fontSize: 18 }}
                placeholder="Search"
              />
            </View>
            {props.subCategoryList.length > 0 ? (
              <FlatList
                nestedScrollEnabled={true}
                keyboardShouldPersistTaps="always"
                data={props.subCategoryList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => _renderItems(item, index)}
              />
            ) : (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: 100,
                }}
              >
                <Text style={{ fontSize: 18 }}>Thare is no data found</Text>
              </View>
            )}
          </View>
        ) : null}
        <Button
          buttonText="Save"
          style={{ marginTop: 10 }}
          onPress={props.onPressSave}
        />
      </View>
    </View>
  );
};
export default AddEditBusinessCategory;
