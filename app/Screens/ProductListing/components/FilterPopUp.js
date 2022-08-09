import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
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
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import styles from "./styles";
import { Picker } from "@react-native-community/picker";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import Button from "../../../Components/Button";
const { width, height } = Dimensions.get("window");
export default function FilterPopUp(props) {
  const [productCatg, setProductCatg] = useState([]);
  const [productSubCatg, setProductSubCatg] = useState([]);
  const [selected, setSelected] = useState();
  const [openColors, setOpenColors] = useState(false);
  const Colors = [
    {
      color: "Red",
    },
    {
      color: "Green",
    },
    {
      color: "White",
    },
    {
      color: "Orange",
    },
    {
      color: "Blue",
    },
    {
      color: "Black",
    },
    {
      color: "Pink",
    },
    {
      color: "Gray",
    },
    {
      color: "Violet",
    },
    {
      color: "Silver",
    },
    {
      color: "Maroon",
    },
    {
      color: "Brown",
    },
    {
      color: "Tan",
    },
    {
      color: "Indigo",
    },
  ];
  const [multiSliderValue, setMultiSliderValue] = React.useState([0]);
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
  const handleColors = (val) => {
    const value = val;
    const selected = props.filterData.color ?? [];
    selected.push(value);
    props.setFilterData({
      ...props.filterData,
      color: selected,
    });
  };
  const handleReset = () => {
    props.setFilterData({
      color: [],
      category_id: "",
      sub_category_id: "",
      size: "",
      company_brand: "",
      max_price: "",
      min_price: "",
      product_size: "",
      product_tags: "",
      sorting: "",
    });
    setProductSubCatg([]);
    setSelected(null);
  };
  const handleFilter = () => {
    props.closeModel();
    props.handleFilterProduct();
  };
  const handleSorting = (val) => {
    props.setFilterData({
      ...props.filterData,
      sorting: val,
    });
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
        <View style={CommonStyles.header}>
          <TouchableOpacity
            onPress={() => {
              props.closeModel();
              handleReset()
            }}
            style={styles.headerArrow}
          >
            <Image source={require("../../../Assets/header_back_btn.png")} />
          </TouchableOpacity>
          <View style={styles.headerViewMidle}>
            <Text style={styles.headerMiddleTxt}>Filter Product</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleReset()}
            style={styles.resetVw}
          >
            <Text style={styles.resetTxt}>Reset</Text>
          </TouchableOpacity>
          {/* <View style={styles.filterImgeView}>
            <Image source={require("../../../Assets/filter_icon.png")} />
            <Image
              style={{ marginLeft: 5 }}
              source={require("../../../Assets/search_icon_header.png")}
            />
          </View> */}
        </View>
        <ScrollView contentContainerStyle={styles.filterVw}>
          <Text style={styles.typesTxt}>Select Sort by</Text>
          <View style={styles.sortingCon}>
            <View style={styles.sortingVw}>
              <TouchableOpacity
                onPress={() => handleSorting(1)}
                style={styles.catgItem}
              >
                <Image
                  source={
                    props.filterData.sorting === 1
                      ? require("../../../Assets/radio_circled_checked.png")
                      : require("../../../Assets/radio_circled_unchecked.png")
                  }
                  style={{ width: 18, height: 18, marginRight: 5 }}
                />
                <Text style={styles.sortingText}>Low to High</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sortingVw}>
              <TouchableOpacity
                onPress={() => handleSorting(2)}
                style={styles.catgItem}
              >
                <Image
                  source={
                    props.filterData.sorting === 2
                      ? require("../../../Assets/radio_circled_checked.png")
                      : require("../../../Assets/radio_circled_unchecked.png")
                  }
                  style={{ width: 18, height: 18, marginRight: 5 }}
                />
                <Text style={styles.sortingText}>Hight to Low</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sortingVw}>
              <TouchableOpacity
                onPress={() => handleSorting(3)}
                style={styles.catgItem}
              >
                <Image
                  source={
                    props.filterData.sorting === 3
                      ? require("../../../Assets/radio_circled_checked.png")
                      : require("../../../Assets/radio_circled_unchecked.png")
                  }
                  style={{ width: 18, height: 18, marginRight: 5 }}
                />
                <Text style={styles.sortingText}>Top rated</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.typesTxt}>Select Price Range</Text>
          <View style={styles.containerVws}>
            <View style={{ alignItems: "center", marginTop: 5 }}>
              <MultiSlider
                values={[multiSliderValue[0], multiSliderValue[1]]}
                onValuesChange={(val) => {
                  setMultiSliderValue(val);
                  props.setFilterData({
                    ...props.filterData,
                    min_price: val[0],
                    max_price: val[1],
                  });
                }}
                min={100}
                max={10000}
                step={1}
                allowOverlap
                snapped
                sliderLength={width / 1.3}
                containerStyle={{ height: 40 }}
                selectedStyle={styles.selectedVw}
                customMarker={() => {
                  return (
                    <Image
                      style={{ width: 24, height: 24 }}
                      source={require("../../../Assets/abby_pages_map_icon.png")}
                    />
                  );
                }}
              />
            </View>
            <View style={styles.minMaxVw}>
              <Text style={styles.minMaxTxt}>Min</Text>
              <Text style={styles.minMaxTxt}>Max</Text>
            </View>
          </View>
          <Text style={styles.typesTxt}>Select Categories</Text>
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
            <View>
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
            </View>
          ) : null}
          <Text style={styles.typesTxt}>Select Color</Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setOpenColors(!openColors)}
            style={[styles.container, { justifyContent: "center" }]}
          >
            <Text style={[styles.pickerVw]}>
              {props.filterData.color.length > 0
                ? props.filterData.color + ""
                : "Color"}
            </Text>
          </TouchableOpacity>
          {openColors ? (
            <>
              {Colors?.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={styles.colorVw}
                    onPress={() => handleColors(item.color, index)}
                  >
                    <Text style={styles.pickerVw}>{item.color}</Text>
                  </TouchableOpacity>
                );
              })}
            </>
          ) : null}
          <Text style={styles.typesTxt}>Select Size</Text>
          <View style={styles.container}>
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
          <Text style={styles.typesTxt}>Select Company Brand</Text>
          <View style={styles.container}>
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
          <Text style={styles.typesTxt}>Select Product Tag</Text>
          <View style={styles.container}>
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
          <View style={{ marginVertical: 30 }}>
            <Button buttonText={"Filter"} onPress={() => handleFilter()} />
          </View>
        </ScrollView>
      </Dialog>
    </View>
  );
}
