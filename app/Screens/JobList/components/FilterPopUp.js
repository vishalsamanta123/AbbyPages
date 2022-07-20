import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  BackHandler,
  ScrollView,
  TextInput,
} from "react-native";
import Dialog, { SlideAnimation } from "react-native-popup-dialog";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import {
  YELLOW_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
} from "../../../Utils/Constant";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";

export default function FilterPopUp(props) {
  const [category, setCategory] = useState([]);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [hireType, setHireType] = useState([]);
  const [filterData, setFilterData] = useState({
    categoryName: "",
    country: "",
    state: "",
    hire_type: "",
  });

  useEffect(() => {
    const backAction = () => {
      props.closeModel();
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);
  const handleCategory = async () => {
    try {
      props.setLoader(true);
      const { data } = await apiCall("POST", ENDPOINTS.GET_JOB_CATEGORY);
      if (data.status === 200) {
        props.setLoader(false);
        setCategory(data.data);
      } else {
        props.setLoader(false);
      }
    } catch (error) {
      props.setLoader(false);
    }
  };
  const getPlaces = async (type) => {
    try {
      props.setLoader(true);
      const params = {
        status: type,
        country_id: type == 1 ? props.filterData.country : null,
        state_id: type == 2 ? props.filterData.state : null,
      };
      const { data } = await apiCall("POST", ENDPOINTS.GET_PLACES, params);
      if (data.status === 200) {
        if (type == 0) {
          setCountry(data.data);
        }
        if (type == 1) {
          setState(data.data);
        } else {
          setCity(data.data);
        }
        props.setLoader(false);
      } else {
        props.setErrorMessage(data.message);
        props.setVisibleErr(true);
        props.setLoader(false);
      }
    } catch (error) {
      props.setLoader(false);
    }
  };
  const validationOfFilter = () => {
    if (props.filterData?.title === "") {
      props.setErrorMessage("please enter job keywords");
      props.setVisibleErr(true);
      return false;
    }
    return true;
  };
  const handleFilter = async () => {
    const valid = validationOfFilter();
    if (valid) {
      props.setVisible(false);
      props.handleJobFilter(0);
    }
  };

  return (
    <Dialog
      visible={props.visible}
      width={"100%"}
      height={"100%"}
      useNativeDriver={true}
      dialogAnimation={new SlideAnimation({ slideFrom: "bottom" })}
      onTouchOutside={() => {
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
      <ScrollView
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps={"always"}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.searchTxt}>Refine your search</Text>
          <View style={{ marginHorizontal: 10 }}>
            <Input
              containerStyle={styles.keyBoardVw}
              placeholder={"Any Keywords"}
              placeholderTextColor={LIGHT_BLACK_COLOR_CODE}
              onChangeText={(val) => {
                props.setFilterData({
                  ...props.filterData,
                  title: val,
                });
              }}
              value={props?.filterData?.title}
            />
            <Input
              containerStyle={styles.keyBoardVw}
              placeholder={"City ,postalcode.."}
              placeholderTextColor={LIGHT_BLACK_COLOR_CODE}
              onChangeText={(val) => {
                props.setFilterData({
                  ...props.filterData,
                  city: val,
                });
              }}
              value={props?.filterData?.city}
            />
            <View style={styles.filterCon}>
              <Text
                style={[
                  styles.filterTxt,
                  {
                    top: filterData.categoryName ? -15 : 10,
                    backgroundColor: filterData.categoryName
                      ? WHITE_COLOR_CODE
                      : null,
                    width: 80,
                  },
                ]}
              >
                Category
              </Text>
              <TouchableOpacity
                onPress={() => handleCategory()}
                style={[
                  styles.filterVw,
                  {
                    bottom: filterData.categoryName ? 8 : 0,
                  },
                ]}
              >
                <Text style={styles.filterTxt}>
                  {filterData.categoryName && filterData.categoryName}
                </Text>
                <Image
                  style={{ bottom: filterData.categoryName ? -7 : 10 }}
                  resizeMode={"contain"}
                  source={require("../../../Assets/qty_minus_icon3.png")}
                />
              </TouchableOpacity>
            </View>
            {category.length > 0 && (
              <ScrollView
                nestedScrollEnabled
                contentContainerStyle={styles.filterDatasVw}
              >
                {category.map((item) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        props.setFilterData({
                          ...props.filterData,
                          category: item.id,
                        });
                        setFilterData({
                          ...filterData,
                          categoryName: item.category_name,
                        });
                        setCategory([]);
                      }}
                      style={styles.filterDataVw}
                    >
                      <Text>{item.category_name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            )}
            <View style={styles.filterCon}>
              <Text
                style={[
                  styles.filterTxt,
                  {
                    top: filterData.country ? -15 : 10,
                    backgroundColor: filterData.country
                      ? WHITE_COLOR_CODE
                      : null,
                    width: 80,
                  },
                ]}
              >
                Country
              </Text>
              <TouchableOpacity
                onPress={() => getPlaces(0)}
                style={[
                  styles.filterVw,
                  {
                    bottom: filterData.country ? 8 : 0,
                  },
                ]}
              >
                <Text style={styles.filterTxt}>
                  {filterData.country && filterData.country}
                </Text>
                <Image
                  style={{ bottom: filterData.country ? -7 : 10 }}
                  resizeMode={"contain"}
                  source={require("../../../Assets/qty_minus_icon3.png")}
                />
              </TouchableOpacity>
            </View>
            {country.length > 0 && (
              <ScrollView
                nestedScrollEnabled
                contentContainerStyle={styles.filterDatasVw}
              >
                {country.map((item) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        props.setFilterData({
                          ...props.filterData,
                          country: item.country_id,
                        });
                        setFilterData({
                          ...filterData,
                          country: item.name,
                        });
                        setCountry([]);
                      }}
                      style={styles.filterDataVw}
                    >
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            )}
            <View style={styles.filterCon}>
              <Text
                style={[
                  styles.filterTxt,
                  {
                    top: filterData.state ? -15 : 10,
                    backgroundColor: filterData.state ? WHITE_COLOR_CODE : null,
                    width: 80,
                  },
                ]}
              >
                State
              </Text>
              <TouchableOpacity
                onPress={() => getPlaces(1)}
                style={[
                  styles.filterVw,
                  {
                    bottom: filterData.state ? 8 : 0,
                  },
                ]}
              >
                <Text style={styles.filterTxt}>
                  {filterData.state && filterData.state}
                </Text>
                <Image
                  style={{ bottom: filterData.state ? -7 : 10 }}
                  resizeMode={"contain"}
                  source={require("../../../Assets/qty_minus_icon3.png")}
                />
              </TouchableOpacity>
            </View>
            {state.length > 0 && (
              <ScrollView
                nestedScrollEnabled
                contentContainerStyle={styles.filterDatasVw}
              >
                {state.map((item) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        props.setFilterData({
                          ...props.filterData,
                          state: item.state_id,
                        });
                        setFilterData({
                          ...filterData,
                          state: item.name,
                        });
                        setState([]);
                      }}
                      style={styles.filterDataVw}
                    >
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            )}
            <View style={styles.filterCon}>
              <Text
                style={[
                  styles.filterTxt,
                  {
                    top: filterData.city ? -15 : 10,
                    backgroundColor: filterData.city ? WHITE_COLOR_CODE : null,
                    width: 80,
                  },
                ]}
              >
                City
              </Text>
              <TouchableOpacity
                onPress={() => getPlaces(2)}
                style={[
                  styles.filterVw,
                  {
                    bottom: filterData.city ? 8 : 0,
                  },
                ]}
              >
                <Text style={styles.filterTxt}>
                  {filterData.city && filterData.city}
                </Text>
                <Image
                  style={{ bottom: filterData.city ? -7 : 10 }}
                  resizeMode={"contain"}
                  source={require("../../../Assets/qty_minus_icon3.png")}
                />
              </TouchableOpacity>
            </View>
            {city.length > 0 && (
              <ScrollView
                nestedScrollEnabled
                contentContainerStyle={styles.filterDatasVw}
              >
                {city.map((item) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        props.setFilterData({
                          ...props.filterData,
                          city: item.city_id,
                        });
                        setFilterData({
                          ...filterData,
                          city: item.name,
                        });
                        setCity([]);
                      }}
                      style={styles.filterDataVw}
                    >
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            )}
          </View>
          <View style={{ flex: 1 }}>
            <Button buttonText={"Filter"} onPress={() => handleFilter()} />
          </View>
        </View>
      </ScrollView>
    </Dialog>
  );
}
{
  /* <View style={styles.AnyKeywordView}>
<Text style={styles.MainBtnText}>Open Now</Text>
<Image source={require("../../../Assets/clock_icon2.png")} />
</View>
<View style={styles.AnyKeywordView}>
<Text style={styles.MainBtnText}>Open Now</Text>
<Image source={require("../../../Assets/clock_icon2.png")} />
</View>
<View style={styles.AnyKeywordView}>
<Text style={styles.MainBtnText}>Highest Rated</Text>
<Image
  style={{ width: 20, height: 20 }}
  source={require("../../../Assets/star_icon.png")}
/>
</View>
<View style={[styles.AnyKeywordView, { marginBottom: 15 }]}>
<Text style={styles.MainBtnText}>Most Reviewed</Text>
<Image source={require("../../../Assets/comment_icon.png")} />
</View>
<View style={styles.PriceRangeView}>
<Text style={styles.PriceRngetXT}>Price Range</Text>
<Text style={styles.PriceRngeText}>From $1 to $2000</Text>
</View>
<View style={styles.FiltersTgView}>
<Text style={styles.PriceRngetXT}>Filters by tags</Text>
<View style={{ flexDirection: "row" }}>
  <View style={styles.FilterOptnView}>
    <Text style={styles.FiltersText}>Filters by tags</Text>
  </View>
  <View
    style={[
      styles.FilterOptnView,
      { marginLeft: 10, backgroundColor: LINE_COMMON_COLOR_CODE },
    ]}
  >
    <Text style={styles.FiltersText}>Develpoers</Text>
  </View>
</View>
</View> */
}
