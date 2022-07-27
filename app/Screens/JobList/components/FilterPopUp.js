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
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Dialog, { SlideAnimation } from "react-native-popup-dialog";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import {
  YELLOW_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
  LIGHT_WHITE_COLOR,
  LIGHT_GREY_COLOR_CODE,
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
  const handleJobType = () => {
    setHireType([
      {
        name: "Full Time",
      },
      {
        name: "Part Time",
      },
      {
        name: "Intership",
      },
      {
        name: "Freelancer",
      },
    ]);
  };
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
        }
        if (type == 2) {
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

  const handleFilter = async () => {
    props.setVisible(false);
    props.handleJobFilter(0);
  };

  const PickerComponent = ({ title, name, handleData, data, properWidth }) => {
    return (
      <TouchableOpacity
        onPress={(type) => handleData(type)}
        style={[
          styles.filterCon,
          {
            marginBottom: data.length > 0 ? 0 : 10,
          },
        ]}
      >
        <Text
          style={[
            styles.filterTxt,
            {
              top: name ? -16 : 10,
              backgroundColor: name ? WHITE_COLOR_CODE : null,
              lineHeight: 20,
              width: properWidth,
            },
          ]}
        >
          {title}
        </Text>
        <View style={[styles.filterVw]}>
          <Text
            style={[
              styles.filterTxt,
              {
                bottom: 12,
              },
            ]}
          >
            {name}
          </Text>
          <Image
            resizeMode={"contain"}
            style={{ bottom: 10 }}
            source={require("../../../Assets/qty_minus_icon3.png")}
          />
        </View>
      </TouchableOpacity>
    );
  };
  const handleSearch = (search, type) => {
    const lowerCased = search.toLowerCase();
    if (type == null) {
      if (search == "") {
        handleCategory();
      } else {
        const list = category.filter((x) => {
          return x.category_name.toLowerCase().includes(lowerCased);
        });
        setCategory([...list]);
      }
    }
    if (type == 0) {
      if (search == "") {
        getPlaces(type);
      } else {
        const list = country.filter((x) => {
          return x.name.toLowerCase().includes(lowerCased);
        });
        setCountry([...list]);
      }
    }
    if (type == 1) {
      if (search == "") {
        getPlaces(type);
      } else {
        const list = state.filter((x) => {
          return x.name.toLowerCase().includes(lowerCased);
        });
        setState([...list]);
      }
    }
    if (type == 2) {
      if (search == "") {
        getPlaces(type);
      } else {
        const list = city.filter((x) => {
          return x.name.toLowerCase().includes(lowerCased);
        });
        setCity([...list]);
      }
    }
  };
  return (
    <Dialog
      visible={props.visible}
      width={props.search ? "90%" : "100%"}
      height={props.search ? "50%" : "100%"}
      useNativeDriver={true}
      dialogAnimation={new SlideAnimation({ slideFrom: "bottom" })}
    >
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={YELLOW_COLOR_CODE}
        translucent={false}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={CommonStyles.header}>
          <TouchableOpacity
            onPress={() => props.closeModel()}
            style={styles.HeaderArrow}
          >
            <Image
              source={
                props.search
                  ? require("../../../Assets/close_window_icon.png")
                  : require("../../../Assets/header_back_btn.png")
              }
            />
          </TouchableOpacity>
          <View style={styles.HeaderViewMidle}>
            <Text style={styles.HeaderMiddleTxt}>
              {props.search ? "Search Job" : "Filter Jobs"}
            </Text>
          </View>
          {/* <View style={styles.FilterImgeView}>
          <Image source={require("../../../Assets/filter_icon.png")} />
          <Image
            style={{ marginLeft: 5 }}
            source={require("../../../Assets/search_icon_header.png")}
          />
        </View> */}
        </View>
        <ScrollView
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps={"always"}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.searchTxt}>Refine your search</Text>
            <View style={{ marginHorizontal: 10 }}>
              <Input
                containerStyle={styles.filterInputVw}
                textInputStyle={styles.filterInput}
                labelStyleMain={[
                  styles.filterInputTxt,
                  {
                    top: props?.filterData?.title === "" ? 10 : -14,
                  },
                ]}
                placeholder={"Any Keywords.."}
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
                containerStyle={styles.filterInputVw}
                textInputStyle={styles.filterInput}
                labelStyleMain={[
                  styles.filterInputTxt,
                  {
                    top: props?.filterData?.city_name === "" ? 10 : -14,
                  },
                ]}
                placeholder={"City ,postalcode.."}
                placeholderTextColor={LIGHT_BLACK_COLOR_CODE}
                onChangeText={(val) => {
                  props.setFilterData({
                    ...props.filterData,
                    city_name: val,
                  });
                }}
                value={props?.filterData?.city_name}
              />
              {!props.search && (
                <>
                  <PickerComponent
                    title={"Category"}
                    name={filterData.categoryName}
                    handleData={() => handleCategory(null)}
                    data={category}
                    properWidth={90}
                  />
                  {category.length > 0 && (
                    <ScrollView
                      nestedScrollEnabled
                      contentContainerStyle={styles.filterDatasVw}
                    >
                      <>
                        <TextInput
                          placeholder="Search Category"
                          style={styles.searchInput}
                          placeholderTextColor={LIGHT_BLACK_COLOR_CODE}
                          onChangeText={(search, type) =>
                            handleSearch(search, null)
                          }
                        />
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
                              <Text style={styles.filterDataTxt}>
                                {item.category_name}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </>
                    </ScrollView>
                  )}
                  <PickerComponent
                    name={filterData.country}
                    handleData={() => getPlaces(0)}
                    title={"Country"}
                    data={country}
                    properWidth={80}
                  />
                  {country.length > 0 && (
                    <ScrollView
                      nestedScrollEnabled
                      contentContainerStyle={styles.filterDatasVw}
                    >
                      <>
                        <TextInput
                          placeholder="Search Country"
                          style={styles.searchInput}
                          placeholderTextColor={LIGHT_BLACK_COLOR_CODE}
                          onChangeText={(search, type) =>
                            handleSearch(search, 0)
                          }
                        />
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
                              <Text style={styles.filterDataTxt}>
                                {item.name}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </>
                    </ScrollView>
                  )}
                  <PickerComponent
                    name={filterData.state}
                    handleData={() => getPlaces(1)}
                    title={"State"}
                    data={state}
                    properWidth={58}
                  />
                  {state.length > 0 && (
                    <ScrollView
                      nestedScrollEnabled
                      contentContainerStyle={styles.filterDatasVw}
                    >
                      <>
                        <TextInput
                          placeholder="Search State"
                          style={styles.searchInput}
                          placeholderTextColor={LIGHT_BLACK_COLOR_CODE}
                          onChangeText={(search, type) =>
                            handleSearch(search, 1)
                          }
                        />
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
                              <Text style={styles.filterDataTxt}>
                                {item.name}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </>
                    </ScrollView>
                  )}
                  <PickerComponent
                    title={"City"}
                    name={filterData.city}
                    handleData={() => getPlaces(2)}
                    data={city}
                    properWidth={45}
                  />
                  {city.length > 0 && (
                    <ScrollView
                      nestedScrollEnabled
                      contentContainerStyle={styles.filterDatasVw}
                    >
                      <>
                        <TextInput
                          placeholder="Search City"
                          style={styles.searchInput}
                          placeholderTextColor={LIGHT_BLACK_COLOR_CODE}
                          onChangeText={(search, type) =>
                            handleSearch(search, 2)
                          }
                        />
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
                              <Text style={styles.filterDataTxt}>
                                {item.name}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </>
                    </ScrollView>
                  )}
                  <PickerComponent
                    title={"Hire Type"}
                    name={filterData.hire_type}
                    handleData={() => handleJobType()}
                    data={hireType}
                    properWidth={100}
                  />
                  {hireType.length > 0 && (
                    <ScrollView
                      nestedScrollEnabled
                      contentContainerStyle={styles.filterDatasVw}
                    >
                      <>
                        {hireType.map((item) => {
                          return (
                            <TouchableOpacity
                              onPress={() => {
                                props.setFilterData({
                                  ...props.filterData,
                                  job_type: item.name,
                                });
                                setFilterData({
                                  ...filterData,
                                  hire_type: item.name,
                                });
                                setHireType([]);
                              }}
                              style={styles.filterDataVw}
                            >
                              <Text style={styles.filterDataTxt}>
                                {item.name}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </>
                    </ScrollView>
                  )}
                </>
              )}
            </View>
            <View style={{ marginTop: 20 }}>
              <Button buttonText={"Filter"} onPress={() => handleFilter()} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
