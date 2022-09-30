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
  Modal,
} from "react-native";
import Dialog, { SlideAnimation } from "react-native-popup-dialog";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import {
  YELLOW_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../Utils/Constant";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";

export default function FilterPopUp(props) {
  const [category, setCategory] = useState([]);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [hireType, setHireType] = useState([]);
  const [selection, setSelection] = useState(false);
  const [filterData, setFilterData] = useState({
    categoryName: "",
    country: "",
    state: "",
    city: "",
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
    setSelection(true);
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
      props.setErrorMessage(error.message);
      props.setVisibleErr(true);
      props.setLoader(false);
    }
  };
  const getPlaces = async (type, selection) => {
    setSelection(true);
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
      props.setErrorMessage(error.message);
      props.setVisibleErr(true);
      props.setLoader(false);
    }
  };
  const handleJobType = () => {
    setSelection(true);
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
  const handleFilterDone = async () => {
    props.setVisible(false);
    props.handleJobFilter(0);
  };

  const PickerComponent = ({ title, name, handleData, data, properWidth }) => {
    return (
      <View style={styles.filterCon}>
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
        <View style={styles.filterVw}>
          <Text style={styles.filterTxt}>{name}</Text>
          <TouchableOpacity onPress={(type) => handleData(type)}>
            <Image
              resizeMode={"contain"}
              style={{ bottom: 10 }}
              source={require("../../../Assets/qty_minus_icon3.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
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
  const handleReset = () => {
    setFilterData({
      categoryName: "",
      country: "",
      state: "",
      city: "",
      hire_type: "",
    });
    props.setFilterData({
      title: "",
      city_name: "",
      category: "",
      country: "",
      state: "",
      city: "",
      job_type: "",
    });
  };
  return (
    <View>
      <Dialog
        visible={props.visible}
        width={props.search ? "90%" : "100%"}
        height={props.search ? "50%" : "100%"}
        dialogAnimation={new SlideAnimation({ slideFrom: "bottom" })}
      >
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={YELLOW_COLOR_CODE}
          translucent={false}
        />
        <View
          style={[
            CommonStyles.header,
            {
              paddingTop: Platform.OS === "ios" ? (props.search ? 10 : 45) : 10,
            },
          ]}
        >
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
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleReset()}
            style={styles.resetVw}
          >
            <Text style={styles.resetTxt}>Reset</Text>
          </TouchableOpacity>
          {/* <View style={styles.FilterImgeView}>
          <Image source={require("../../../Assets/filter_icon.png")} />
          <Image
            style={{ marginLeft: 5 }}
            source={require("../../../Assets/search_icon_header.png")}
          />
        </View> */}
        </View>
        <ScrollView
          nestedScrollEnabled
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.searchTxt}>Refine your search</Text>
            <View style={{ marginHorizontal: 10 }}>
              <Input
                containerStyle={styles.filterInputVw}
                textInputStyle={styles.filterInput}
                selectionColor={LIGHT_BLACK_COLOR_CODE}
                labelStyleMain={[
                  styles.filterInputTxt,
                  {
                    top: props?.filterData?.title === "" ? 10 : -14,
                    backgroundColor:
                      props?.filterData?.title === "" ? "" : WHITE_COLOR_CODE,
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
                selectionColor={LIGHT_BLACK_COLOR_CODE}
                labelStyleMain={[
                  styles.filterInputTxt,
                  {
                    top: props?.filterData?.city_name === "" ? 10 : -14,
                    backgroundColor:
                      props?.filterData?.city_name === ""
                        ? ""
                        : WHITE_COLOR_CODE,
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

                  <PickerComponent
                    name={filterData.country}
                    handleData={() => getPlaces(0, 1)}
                    title={"Country"}
                    data={country}
                    properWidth={81}
                  />
                  <PickerComponent
                    name={filterData.state}
                    handleData={() => getPlaces(1, 2)}
                    title={"State"}
                    data={state}
                    properWidth={58}
                  />
                  <PickerComponent
                    title={"City"}
                    name={filterData.city}
                    handleData={() => getPlaces(2, 3)}
                    data={city}
                    properWidth={45}
                  />
                  <PickerComponent
                    title={"Hire Type"}
                    name={filterData.hire_type}
                    handleData={() => handleJobType(4)}
                    data={hireType}
                    properWidth={100}
                  />
                </>
              )}
            </View>
            <View style={{ marginTop: 20 }}>
              <Button
                buttonText={"Filter"}
                onPress={() => handleFilterDone()}
              />
            </View>
          </View>
        </ScrollView>
      </Dialog>
      <Modal
        visible={selection}
        onRequestClose={() => {
          setSelection(false);
          setCategory([]);
          setCountry([]);
          setState([]);
          setCity([]);
          setHireType([]);
        }}
      >
        <View style={styles.selectionModalVw}>
          {props.loader && <Loader />}
          <>
            <View style={styles.typeVw}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={styles.typeTxt}>
                  {category.length > 0
                    ? "Select Category"
                    : country.length > 0
                    ? "Select Country"
                    : state.length > 0
                    ? "Select State"
                    : city.length > 0
                    ? "Select City"
                    : hireType.length > 0
                    ? "Select Hire Type"
                    : null}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setSelection(false);
                  setCategory([]);
                  setCountry([]);
                  setState([]);
                  setCity([]);
                  setHireType([]);
                }}
              >
                <Image
                  style={{ width: 24, height: 24 }}
                  resizeMode={"contain"}
                  source={require("../../../Assets/cancelModalBtn.png")}
                />
              </TouchableOpacity>
            </View>
            {hireType.length > 0 ? null : (
              <TextInput
                placeholder={
                  category.length > 0
                    ? "Search Category"
                    : country.length > 0
                    ? "Search Country"
                    : state.length > 0
                    ? "Search State"
                    : city.length > 0
                    ? "Search City"
                    : null
                }
                style={styles.searchInput}
                placeholderTextColor={LIGHT_BLACK_COLOR_CODE}
                onChangeText={(search, type) =>
                  handleSearch(
                    search,
                    category.length > 0
                      ? null
                      : country.length > 0
                      ? 0
                      : state.length > 0
                      ? 1
                      : city.length > 0
                      ? 2
                      : null
                  )
                }
              />
            )}
          </>
          <ScrollView contentContainerStyle={styles.filterDatasVw}>
            {category.length > 0 && (
              <>
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
                        setSelection(false);
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
            )}
            {country.length > 0 && (
              <>
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
                        setSelection(false);
                      }}
                      style={styles.filterDataVw}
                    >
                      <Text style={styles.filterDataTxt}>{item.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </>
            )}
            {state.length > 0 && (
              <>
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
                        setSelection(false);
                      }}
                      style={styles.filterDataVw}
                    >
                      <Text style={styles.filterDataTxt}>{item.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </>
            )}
            {city.length > 0 && (
              <>
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
                        setSelection(false);
                      }}
                      style={styles.filterDataVw}
                    >
                      <Text style={styles.filterDataTxt}>{item.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </>
            )}
            {hireType.length > 0 && (
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
                        setSelection(false);
                      }}
                      style={styles.filterDataVw}
                    >
                      <Text style={styles.filterDataTxt}>{item.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </>
            )}
            {category.length == 0 &&
            country.length == 0 &&
            state.length == 0 &&
            city.length == 0 &&
            hireType.length == 0 ? (
              <View style={styles.noDataVw}>
                <Text style={styles.noDataTxt}>There is no data available</Text>
              </View>
            ) : null}
          </ScrollView>
        </View>
      </Modal>
    </View>
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
