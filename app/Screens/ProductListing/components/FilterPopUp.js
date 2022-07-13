import React, { useEffect, useState } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import CommonStyles from "../../../Utils/CommonStyles";
import Input from "../../../Components/Input";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_BLACK,
  FONT_FAMILY_REGULAR,
  GREY_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import styles from "./styles";
import { Picker } from "@react-native-community/picker";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";

export default function FilterPopUp(props) {
  const [productCatg, setProductCatg] = useState([]);
  const [productSubCatg, setProductSubCatg] = useState([]);
  const [selected, setSelected] = useState();
  useEffect(() => {
    // if (selected === "") {
    //   handleProductCatg(0);
    // } else {
    handleProductCatg(props.filterData.category_id);
    // }
  }, []);
  const handleProductCatg = async (item, index) => {
    setSelected(index);
    try {
      const params = {
        business_type: 2,
        category_id: item === "" ? 0 : item,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_BUSINESS_CATEGORY_LIST,
        params
      );
      if (data.status == 200) {
        if (item == 0) {
          setProductCatg(data.data.category_data);
        }
        if (item > 0) {
          setProductSubCatg(data.data.category_data);
          props.setFilterData({
            ...props.filterData,
            category_id: item,
            sub_category_id: data.data.category_data[0].id,
          });
        }
      } else {
        // setProductCatg([]);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <View>
      <Dialog
        visible={props.filter}
        width={"100%"}
        height={"100%"}
        useNativeDriver={true}
        dialogAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        onTouchOutside={() => {
          props.closeModel();
        }}
        onHardwareBackPress={() => {
          props.closeModel();
        }}
      >
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={YELLOW_COLOR_CODE}
          translucent={false}
        />
        <View style={[CommonStyles.header, { justifyContent: "center" }]}>
          <TouchableOpacity
            onPress={() => props.closeModel()}
            style={styles.HeaderArrow}
          >
            <Image source={require("../../../Assets/header_back_btn.png")} />
          </TouchableOpacity>
          <View style={styles.HeaderViewMidle}>
            <Text style={styles.HeaderMiddleTxt}>Filter Jobs</Text>
          </View>
          <View style={styles.FilterImgeView}>
            <Image source={require("../../../Assets/filter_icon.png")} />
            <Image
              style={{ marginLeft: 5 }}
              source={require("../../../Assets/search_icon_header.png")}
            />
          </View>
        </View>
        <View style={styles.filterVw}>
          <View style={styles.container}>
            <Picker
              selectedValue={props.filterData.color}
              style={styles.pickerVw}
              onValueChange={(itemValue, itemIndex) =>
                props.setFilterData({
                  ...props.filterData,
                  color: itemValue,
                })
              }
              mode={"dropdown"}
            >
              <Picker.Item label="Color" />
              <Picker.Item label="Red" value="red" />
              <Picker.Item label="Blue" value="blue" />
            </Picker>
          </View>
          <View style={styles.catgCon}>
            {productCatg?.map((item, index) => {
              return (
                <View style={styles.catgVw}>
                  <TouchableOpacity
                    onPress={() => handleProductCatg(item.id, index)}
                    style={styles.catgItem}
                  >
                    <Image
                      source={
                        selected === index
                          ? require("../../../Assets/radio_circled_checked.png")
                          : require("../../../Assets/radio_circled_unchecked.png")
                      }
                      style={{ width: 22, height: 22, marginRight: 10 }}
                    />
                    <Text style={styles.catgText}>{item.category_name}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          {productSubCatg.length > 0 ? (
            <>
              <Text style={styles.selecteTxt}>
                You can select any {productCatg[selected]?.category_name}{" "}
                Category
              </Text>
              <View style={styles.subCategoryVw}>
                <Picker
                  onValueChange={(itemValue, itemIndex) => {
                    props.setFilterData({
                      ...props.filterData,
                      sub_category_id: itemValue,
                    });
                  }}
                  selectedValue={props.filterData.sub_category_id}
                  mode={"dialog"}
                  style={styles.subCategoryTxt}
                >
                  {productSubCatg.map((item) => {
                    return (
                      <Picker.Item label={item.category_name} value={item.id} />
                    );
                  })}
                </Picker>
              </View>
            </>
          ) : null}
          <View style={[styles.container, { marginVertical: 10 }]}>
            <Picker
              selectedValue={props.filterData.size}
              style={styles.pickerVw}
              onValueChange={(itemValue, itemIndex) =>
                props.setFilterData({
                  ...props.filterData,
                  size: itemValue,
                })
              }
              mode={"dropdown"}
            >
              <Picker.Item label="Size" />
              <Picker.Item label="S" value="S" />
              <Picker.Item label="M" value="M" />
              <Picker.Item label="L" value="L" />
              <Picker.Item label="XL" value="XL" />
              <Picker.Item label="XXL" value="XXL" />
            </Picker>
          </View>
          <View style={[styles.container, { marginVertical: 10 }]}>
            <Picker
              selectedValue={props.filterData.company_brand}
              style={styles.pickerVw}
              onValueChange={(itemValue, itemIndex) =>
                props.setFilterData({
                  ...props.filterData,
                  company_brand: itemValue,
                })
              }
              mode={"dropdown"}
            >
              <Picker.Item label="Company Brand" />
              <Picker.Item label="Levi's" value="Levi's" />
              <Picker.Item label="Puma" value="Puma" />
              <Picker.Item label="Jockey" value="Jockey" />
              <Picker.Item label="BLIVE" value="BLIVE" />
            </Picker>
          </View>
          <View style={[styles.container, { marginVertical: 10 }]}>
            <Picker
              selectedValue={props.filterData.product_tags}
              style={styles.pickerVw}
              onValueChange={(itemValue, itemIndex) =>
                props.setFilterData({
                  ...props.filterData,
                  product_tags: itemValue,
                })
              }
              mode={"dropdown"}
            >
              <Picker.Item label="Product Tags" />
              <Picker.Item label="T-shirt" value="T-shirt" />
              <Picker.Item label="Sneaker" value="Sneaker" />
              <Picker.Item label="Addidas" value="Addidas" />
              <Picker.Item label="Mango" value="Mango" />
              <Picker.Item label="Zara" value="Zara" />
            </Picker>
          </View>
        </View>
      </Dialog>
    </View>
  );
}
