import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import styles from "./styles";
import Button from "../../../../Components/Button";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import Input from "../../../../Components/Input";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {
  WHITE_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
const BasicInformationScreen = (props) => {
  const _renderItems = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => props.onClickService(index)}
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
              source={require("../../../../Assets/checked_circled_icon_box.png")}
            />
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText={"Basic Information"}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <ScrollView
          keyboardShouldPersistTaps={"always"}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.inptvwe}>
            <Input
              onChangeText={(business_name) =>
                props.setBasicInformationData({
                  ...props.BasicInformationData,
                  business_name: business_name,
                })
              }
              value={props.BasicInformationData.business_name}
              secureTextEntry={false}
              placeholder="Bussiness Name"
              InputType="withScroll"
            />
            <View
              style={{
                backgroundColor: "rgba(0,0,0,0)",
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
                // onPress={() => props.onPressBusinessCategories()}
                style={{
                  backgroundColor: "rgba(0,0,0,0)",
                  // height: 70,
                  width: "98%",
                  borderColor: "#d8d8d8",
                  paddingLeft: 20,
                  paddingTop: 10,
                  paddingBottom: 10,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 17,
                      // color: 'red'
                      color: BLACK_COLOR_CODE,
                    }}
                  >
                    Business Categories
                  </Text>
                  {props.BusinessCategoryList && (
                    <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                      {props.BusinessCategoryList.map((item, index) => {
                        return <Text>{item.category_name},</Text>;
                      })}
                    </View>
                  )}
                </View>
              </View>
            </View>
            {props.address != 1 ? (
              <View
                style={{
                  backgroundColor: "rgba(0,0,0,0)",
                  marginLeft: 16,
                  marginRight: 16,
                  marginTop: 10,
                  borderColor: "#d8d8d8",
                  borderWidth: 1,
                  borderRadius: 8,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => props.onPressAddressOne()}
                  style={{
                    backgroundColor: "rgba(0,0,0,0)",
                    height: 70,
                    width: "98%",
                    borderColor: "#d8d8d8",
                    paddingLeft: 20,
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    //  borderWidth:1
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      // color: 'red'
                      color: BLACK_COLOR_CODE,
                    }}
                  >
                    {props.BasicInformationData.address_first
                      ? props.BasicInformationData.address_first
                      : `Address 1`}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{ marginTop: 10, marginBottom: 10 }}>
                <GooglePlacesAutocomplete
                  placeholder="Address 1"
                  fetchDetails={true}
                  onPress={(data, details = null) => {
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      address_first: details.formatted_address,
                      latitude: details.geometry.location.lat,
                      longitude: details.geometry.location.lng,
                    });
                  }}
                  onChangeText={(address) =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      address_first: address_first,
                    })
                  }
                  value={props.BasicInformationData.address_first}
                  query={{
                    key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
                    language: "en",
                  }}
                  styles={{
                    textInputContainer: {
                      backgroundColor: "rgba(0,0,0,0)",
                      height: 70,
                      // margin: 10,
                      marginLeft: 17,
                      marginRight: 17,
                      borderColor: "#d8d8d8",
                      borderWidth: 1,
                      borderRadius: 8,
                      alignItems: "center",
                    },
                    textInput: {
                      fontSize: 16,
                      color: BLACK_COLOR_CODE,
                    },
                    listView: {
                      backgroundColor: WHITE_COLOR_CODE,
                      marginLeft: 17,
                      marginRight: 17,
                      borderWidth: 1,
                      // borderRadius: 8,
                      borderColor: "#d8d8d8",
                    },
                  }}
                  minLength={1}
                  autoFocus={true}
                  returnKeyType={"default"}
                />
              </View>
            )}

            {props.address != 2 ? (
              <View
                style={{
                  backgroundColor: "rgba(0,0,0,0)",
                  marginLeft: 16,
                  marginRight: 16,
                  marginBottom: 10,
                  borderColor: "#d8d8d8",
                  borderWidth: 1,
                  borderRadius: 8,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => props.onPressAddresstwo()}
                  style={{
                    backgroundColor: "rgba(0,0,0,0)",
                    height: 70,
                    width: "98%",
                    borderColor: "#d8d8d8",
                    paddingLeft: 20,
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    //  borderWidth:1
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      // color: 'red'
                      color: BLACK_COLOR_CODE,
                    }}
                  >
                    {props.BasicInformationData.address_second
                      ? props.BasicInformationData.address_second
                      : `Address 2`}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{ marginBottom: 10 }}>
                <GooglePlacesAutocomplete
                  placeholder="Address 2"
                  fetchDetails={true}
                  onPress={(data, details = null) => {
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      address_second: details.formatted_address,
                    });
                  }}
                  onChangeText={(address) =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      address_second: address_second,
                    })
                  }
                  value={props.BasicInformationData.address_second}
                  query={{
                    key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
                    language: "en",
                  }}
                  styles={{
                    textInputContainer: {
                      backgroundColor: "rgba(0,0,0,0)",
                      height: 70,
                      // margin: 10,
                      marginLeft: 17,
                      marginRight: 17,
                      borderColor: "#d8d8d8",
                      borderWidth: 1,
                      borderRadius: 8,
                      alignItems: "center",
                    },
                    textInput: {
                      fontSize: 16,
                      // color: 'red'
                      color: BLACK_COLOR_CODE,
                    },
                    listView: {
                      backgroundColor: WHITE_COLOR_CODE,
                      marginLeft: 17,
                      marginRight: 17,
                      borderWidth: 1,
                      // borderRadius: 8,
                      borderColor: "#d8d8d8",
                    },
                  }}
                  minLength={1}
                  autoFocus={true}
                  returnKeyType={"default"}
                />
              </View>
            )}
            <View style={styles.countryViewSty}>
              <TouchableOpacity
                onPress={() => props.onPressCountry()}
                style={styles.countryViewInnerSty}
              >
                <Text
                  style={{
                    fontSize: 17,
                    // color: 'red'
                    color: BLACK_COLOR_CODE,
                  }}
                >
                  {props.countryName
                    ? props.countryName
                    : props.BasicInformationData.country_name
                    ? props.BasicInformationData.country_name
                    : "Country"}
                </Text>
                <View style={{ paddingRight: 10 }}>
                  {props.CountrySta ? (
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={require("../../../../Assets/link_dropdown_icon_up.png")}
                    />
                  ) : (
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={require("../../../../Assets/link_dropdown_ico.png")}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </View>
            {props.CountrySta ? (
              <View
                style={[
                  styles.flatlistViewSty,
                  {
                    height: props.CountryData
                      ? props.CountryData.length > 0
                        ? 200
                        : 140
                      : 0,
                    marginBottom: 8,
                  },
                ]}
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
                    onChangeText={(search) => props.CounrtySearch(search)}
                    autoCapitalize={"none"}
                    style={{ fontSize: 18 }}
                    placeholder="Search"
                  />
                </View>
                {props.CountryData.length > 0 ? (
                  <FlatList
                    nestedScrollEnabled={true}
                    data={props.CountryData}
                    keyboardShouldPersistTaps="always"
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity
                        onPress={() => props.onClickCountry(item)}
                        style={styles.labelStyle}
                      >
                        <View
                          style={{
                            flex: 5.5,
                            justifyContent: "center",
                          }}
                        >
                          <Text style={styles.txt}>{item.name}</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                ) : (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      height: 80,
                    }}
                  >
                    <Text style={{ fontSize: 15, color: "#a9a9a9" }}>
                      There is no country found
                    </Text>
                  </View>
                )}
              </View>
            ) : null}

            <View style={styles.countryViewSty}>
              <TouchableOpacity
                onPress={() => props.onPressSite()}
                style={styles.countryViewInnerSty}
              >
                <Text
                  style={{
                    fontSize: 17,
                    color: BLACK_COLOR_CODE,
                  }}
                >
                  {props.SiteName
                    ? props.SiteName
                    : props.BasicInformationData.state
                    ? props.BasicInformationData.state
                    : "State"}
                </Text>
                <View style={{ paddingRight: 10 }}>
                  {props.SiteSta ? (
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={require("../../../../Assets/link_dropdown_icon_up.png")}
                    />
                  ) : (
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={require("../../../../Assets/link_dropdown_ico.png")}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </View>
            {props.SiteSta ? (
              <View
                style={[
                  styles.flatlistViewSty,
                  {
                    height: props.SiteData.length > 0 ? 200 : 140,
                    marginBottom: 8,
                  },
                ]}
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
                    onChangeText={(search) => props.siteSearch(search)}
                    autoCapitalize={"none"}
                    style={{ fontSize: 18 }}
                    placeholder="Search"
                  />
                </View>
                {props.SiteData.length > 0 ? (
                  <FlatList
                    nestedScrollEnabled={true}
                    data={props.SiteData}
                    keyboardShouldPersistTaps="always"
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                      <View>
                        <TouchableOpacity
                          onPress={() => props.onClickSite(item)}
                          style={styles.labelStyle}
                        >
                          <View
                            style={{
                              flex: 5.5,
                              justifyContent: "center",
                            }}
                          >
                            <Text style={styles.txt}>{item.name}</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    )}
                  />
                ) : (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      height: 80,
                    }}
                  >
                    <Text style={{ fontSize: 15, color: "#a9a9a9" }}>
                      There is no state found
                    </Text>
                  </View>
                )}
              </View>
            ) : null}

            <View style={styles.countryViewSty}>
              <TouchableOpacity
                onPress={() => props.onPressCity()}
                style={styles.countryViewInnerSty}
              >
                <Text
                  style={{
                    fontSize: 17,
                    // color: 'red'
                    color: BLACK_COLOR_CODE,
                  }}
                >
                  {props.cityName
                    ? props.cityName
                    : props.BasicInformationData.city
                    ? props.BasicInformationData.city
                    : "City"}
                </Text>
                <View style={{ paddingRight: 10 }}>
                  {props.CitySta ? (
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={require("../../../../Assets/link_dropdown_icon_up.png")}
                    />
                  ) : (
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={require("../../../../Assets/link_dropdown_ico.png")}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </View>
            {props.CitySta ? (
              <View
                style={[
                  styles.flatlistViewSty,
                  {
                    height: props.CityData.length > 0 ? 200 : 140,
                    marginBottom: 8,
                  },
                ]}
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
                    onChangeText={(search) => props.citySearch(search)}
                    autoCapitalize={"none"}
                    style={{ fontSize: 18 }}
                    placeholder="Search"
                  />
                </View>
                {props.CityData.length > 0 ? (
                  <FlatList
                    nestedScrollEnabled={true}
                    data={props.CityData}
                    keyboardShouldPersistTaps="always"
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity
                        onPress={() => props.onClickCity(item)}
                        style={styles.labelStyle}
                      >
                        <View
                          style={{
                            flex: 5.5,
                            justifyContent: "center",
                          }}
                        >
                          <Text style={styles.txt}>{item.name}</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                ) : (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      height: 80,
                    }}
                  >
                    <Text style={{ fontSize: 15, color: "#a9a9a9" }}>
                      There is no city found
                    </Text>
                  </View>
                )}
              </View>
            ) : null}
            <Input
              onChangeText={(zip_code) =>
                props.setBasicInformationData({
                  ...props.BasicInformationData,
                  zip_code: zip_code,
                })
              }
              value={`${props.BasicInformationData.zip_code}`}
              // secureTextEntry={false}
              placeholder="Zip"
              // InputType="withScroll"
            />
            <Input
              onChangeText={(phone) =>
                props.setBasicInformationData({
                  ...props.BasicInformationData,
                  phone: phone,
                })
              }
              value={props.BasicInformationData.phone}
              secureTextEntry={false}
              placeholder="Phone"
              InputType="withScroll"
            />
            <Input
              onChangeText={(website) =>
                props.setBasicInformationData({
                  ...props.BasicInformationData,
                  website: website,
                })
              }
              value={props.BasicInformationData.website}
              secureTextEntry={false}
              placeholder="Web Address"
              InputType="withScroll"
            />
            <Input
              onChangeText={(offerings_web_address) =>
                props.setBasicInformationData({
                  ...props.BasicInformationData,
                  offerings_web_address: offerings_web_address,
                })
              }
              value={props.BasicInformationData.offerings_web_address}
              secureTextEntry={false}
              placeholder="Offerings Web Address"
              InputType="withScroll"
            />
          </View>
          <View style={styles.servicevwe}>
            <Text style={styles.serrtxt}>Service Area</Text>
            <Text style={styles.atlocatetxt}>
              Do you service you customers at their locations?{" "}
            </Text>
            <View style={styles.frsttouchvwe}>
              <TouchableOpacity
                onPress={() =>
                  props.setBasicInformationData({
                    ...props.BasicInformationData,
                    service_area: 1,
                  })
                }
              >
                {props.BasicInformationData.service_area === 0 ||
                props.BasicInformationData.service_area === null ? (
                  <Image
                    style={styles.alluncheck}
                    source={require("../../../../Assets/unchecked_circled_v1.png")}
                  />
                ) : (
                  <Image
                    style={styles.alluncheck}
                    source={require("../../../../Assets/radio_circled_checked.png")}
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.yestxt}>Yes</Text>
              <TouchableOpacity
                style={styles.Touchableopacityallvwe}
                onPress={() =>
                  props.setBasicInformationData({
                    ...props.BasicInformationData,
                    service_area: 0,
                  })
                }
              >
                {props.BasicInformationData.service_area === 1 ? (
                  <Image
                    style={[styles.alluncheck, { marginLeft: 10 }]}
                    source={require("../../../../Assets/unchecked_circled_v1.png")}
                  />
                ) : (
                  <Image
                    style={[styles.alluncheck, { marginLeft: 10 }]}
                    source={require("../../../../Assets/radio_circled_checked.png")}
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.yestxt}>No</Text>
            </View>
          </View>
          <View style={[styles.servicevwe]}>
            <View>
              <Text style={styles.ametientxt}>Amenities and more </Text>
              <Text style={styles.longtyxt}>
                Please note,certain subjective bussiness details (such as "Good
                fro Groups") can only be updates by the AbbyPages community.
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: LINE_COMMON_COLOR_CODE,
                paddingBottom: 15,
              }}
            >
              <View style={styles.alcolholtxt}>
                <Text style={styles.alcolholvewtxt}>Alcohol</Text>
              </View>
              <View style={styles.beervew}>
                <TouchableOpacity
                  style={[styles.Touchableopacityallvwe]}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      alcohol: 1,
                    })
                  }
                >
                  {props.BasicInformationData.alcohol === 0 ||
                  props.BasicInformationData.alcohol === 2 ||
                  props.BasicInformationData.alcohol === null ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.beertxt}>Beer & Wine Only </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 5,
                }}
              >
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      alcohol: 2,
                    })
                  }
                >
                  {props.BasicInformationData.alcohol === 1 ||
                  props.BasicInformationData.alcohol === 0 ||
                  props.BasicInformationData.alcohol === null ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.beertxt}>Full Bar</Text>
              </View>
              <View style={styles.beervew}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props._handleno()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      alcohol: 0,
                    })
                  }
                >
                  {props.BasicInformationData.alcohol === 1 ||
                  props.BasicInformationData.alcohol === 2 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.beertxt}>No</Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 0.5,
                paddingTop: 10,
                borderBottomColor: LINE_COMMON_COLOR_CODE,
                paddingBottom: 15,
              }}
            >
              <Text style={styles.alcolholvewtxt}>Has TV</Text>
              <View style={styles.beervew}>
                <View style={styles.frsttouchvwe}>
                  <TouchableOpacity
                    style={styles.Touchableopacityallvwe}
                    onPress={() =>
                      props.setBasicInformationData({
                        ...props.BasicInformationData,
                        has_tv: 1,
                      })
                    }
                  >
                    {props.BasicInformationData.has_tv === 0 ||
                    props.BasicInformationData.has_tv === null ? (
                      <Image
                        style={styles.alluncheck}
                        source={require("../../../../Assets/unchecked_circled_v1.png")}
                      />
                    ) : (
                      <Image
                        style={styles.alluncheck}
                        source={require("../../../../Assets/radio_circled_checked.png")}
                      />
                    )}
                  </TouchableOpacity>
                  <Text style={styles.yestxt}>Yes</Text>
                  <TouchableOpacity
                    style={styles.Touchableopacityallvwe}
                    // onPress={() => props.HashTvNoFun()}
                    onPress={() =>
                      props.setBasicInformationData({
                        ...props.BasicInformationData,
                        has_tv: 0,
                      })
                    }
                  >
                    {props.BasicInformationData.has_tv === 1 ? (
                      <Image
                        style={[styles.alluncheck, { marginLeft: 10 }]}
                        source={require("../../../../Assets/unchecked_circled_v1.png")}
                      />
                    ) : (
                      <Image
                        style={[styles.alluncheck, { marginLeft: 10 }]}
                        source={require("../../../../Assets/radio_circled_checked.png")}
                      />
                    )}
                  </TouchableOpacity>
                  <Text style={styles.yestxt}>No</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 0.5,
                paddingTop: 10,
                borderBottomColor: LINE_COMMON_COLOR_CODE,
                paddingBottom: 15,
              }}
            >
              <Text style={styles.alcolholvewtxt}>Offer Delivery</Text>
              <View style={styles.beervew}>
                <View style={styles.frsttouchvwe}>
                  <TouchableOpacity
                    style={styles.Touchableopacityallvwe}
                    // onPress={() => props.OfferDeliveryYesFun()}
                    onPress={() =>
                      props.setBasicInformationData({
                        ...props.BasicInformationData,
                        offers_delivery: 1,
                      })
                    }
                  >
                    {props.BasicInformationData.offers_delivery === 0 ||
                    props.BasicInformationData.offers_delivery === null ? (
                      <Image
                        style={styles.alluncheck}
                        source={require("../../../../Assets/unchecked_circled_v1.png")}
                      />
                    ) : (
                      <Image
                        style={styles.alluncheck}
                        source={require("../../../../Assets/radio_circled_checked.png")}
                      />
                    )}
                  </TouchableOpacity>
                  <Text style={styles.yestxt}>Yes</Text>
                  <TouchableOpacity
                    style={styles.Touchableopacityallvwe}
                    // onPress={() => props.OfferDeliveryNoFun()}
                    onPress={() =>
                      props.setBasicInformationData({
                        ...props.BasicInformationData,
                        offers_delivery: 0,
                      })
                    }
                  >
                    {props.BasicInformationData.offers_delivery === 1 ? (
                      <Image
                        style={[styles.alluncheck, { marginLeft: 10 }]}
                        source={require("../../../../Assets/unchecked_circled_v1.png")}
                      />
                    ) : (
                      <Image
                        style={[styles.alluncheck, { marginLeft: 10 }]}
                        source={require("../../../../Assets/radio_circled_checked.png")}
                      />
                    )}
                  </TouchableOpacity>
                  <Text style={styles.yestxt}>No</Text>
                </View>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Accept Credit Cards
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      accept_credit_card: 1,
                    })
                  }
                >
                  {props.BasicInformationData.accept_credit_card === 0 ||
                  props.BasicInformationData.accept_credit_card === null ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      accept_credit_card: 0,
                    })
                  }
                >
                  {props.BasicInformationData.accept_credit_card === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Takes Reservations
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      takes_reservations: 1,
                    })
                  }
                >
                  {props.BasicInformationData.takes_reservations === 0 ||
                  props.BasicInformationData.takes_reservations === null ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      takes_reservations: 0,
                    })
                  }
                >
                  {props.BasicInformationData.takes_reservations === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Caters
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      caters: 1,
                    })
                  }
                >
                  {props.BasicInformationData.caters === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      caters: 0,
                    })
                  }
                >
                  {props.BasicInformationData.caters === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              WI-FI
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      wi_fi: 1,
                    })
                  }
                >
                  {props.BasicInformationData.wi_fi === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      wi_fi: 0,
                    })
                  }
                >
                  {props.BasicInformationData.wi_fi === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Offers Military Discount
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      offers_military_discount: 1,
                    })
                  }
                >
                  {props.BasicInformationData.offers_military_discount === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      offers_military_discount: 0,
                    })
                  }
                >
                  {props.BasicInformationData.offers_military_discount === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Good For Happy Hour
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      good_for_happy_hour: 1,
                    })
                  }
                >
                  {props.BasicInformationData.good_for_happy_hour === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      good_for_happy_hour: 0,
                    })
                  }
                >
                  {props.BasicInformationData.good_for_happy_hour === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Wheelchair Accessible
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      wheelchair_accessible: 1,
                    })
                  }
                >
                  {props.BasicInformationData.wheelchair_accessible === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      wheelchair_accessible: 0,
                    })
                  }
                >
                  {props.BasicInformationData.wheelchair_accessible === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Dogs Allowed
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      dogs_allowed: 1,
                    })
                  }
                >
                  {props.BasicInformationData.dogs_allowed === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      dogs_allowed: 0,
                    })
                  }
                >
                  {props.BasicInformationData.dogs_allowed === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Accept Cryptocurrency
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      accept_cryptocurrency: 1,
                    })
                  }
                >
                  {props.BasicInformationData.accept_cryptocurrency === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      accept_cryptocurrency: 0,
                    })
                  }
                >
                  {props.BasicInformationData.accept_cryptocurrency === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Outdoor Seating
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      outdoor_seating: 1,
                    })
                  }
                >
                  {props.BasicInformationData.outdoor_seating === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      outdoor_seating: 0,
                    })
                  }
                >
                  {props.BasicInformationData.outdoor_seating === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Geneder Neutural Restrooms
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      gender_neutral_restrooms: 1,
                    })
                  }
                >
                  {props.BasicInformationData.gender_neutral_restrooms === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      gender_neutral_restrooms: 0,
                    })
                  }
                >
                  {props.BasicInformationData.gender_neutral_restrooms === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Bike Parking
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      bike_parking: 1,
                    })
                  }
                >
                  {props.BasicInformationData.bike_parking === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      bike_parking: 0,
                    })
                  }
                >
                  {props.BasicInformationData.bike_parking === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Offers Takeout
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      offers_takeout: 1,
                    })
                  }
                >
                  {props.BasicInformationData.offers_takeout === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      offers_takeout: 0,
                    })
                  }
                >
                  {props.BasicInformationData.offers_takeout === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Open To Call
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      open_to_all: 1,
                    })
                  }
                >
                  {props.BasicInformationData.open_to_all === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      open_to_all: 0,
                    })
                  }
                >
                  {props.BasicInformationData.open_to_all === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>

            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Waiter Service
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      waiter_service: 1,
                    })
                  }
                >
                  {props.BasicInformationData.waiter_service === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      waiter_service: 0,
                    })
                  }
                >
                  {props.BasicInformationData.waiter_service === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>

            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Sit-Down Dining
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      sitdown_dining: 1,
                    })
                  }
                >
                  {props.BasicInformationData.sitdown_dining === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      sitdown_dining: 0,
                    })
                  }
                >
                  {props.BasicInformationData.sitdown_dining === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>

            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Vegan Opations
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      vegan_options: 1,
                    })
                  }
                >
                  {props.BasicInformationData.vegan_options === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      vegan_options: 0,
                    })
                  }
                >
                  {props.BasicInformationData.vegan_options === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Staff Wears Gloves
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      staff_wears_gloves: 1,
                    })
                  }
                >
                  {props.BasicInformationData.staff_wears_gloves === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      staff_wears_gloves: 0,
                    })
                  }
                >
                  {props.BasicInformationData.staff_wears_gloves === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Lacation Room
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      lactation_room: 1,
                    })
                  }
                >
                  {props.BasicInformationData.lactation_room === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      lactation_room: 0,
                    })
                  }
                >
                  {props.BasicInformationData.lactation_room === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Happy Hours Specials
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      happy_hour_specials: 1,
                    })
                  }
                >
                  {props.BasicInformationData.happy_hour_specials === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      happy_hour_specials: 0,
                    })
                  }
                >
                  {props.BasicInformationData.happy_hour_specials === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>

            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Masks Required
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      masks_required: 1,
                    })
                  }
                >
                  {props.BasicInformationData.masks_required === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      masks_required: 0,
                    })
                  }
                >
                  {props.BasicInformationData.masks_required === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>

            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Cantactless Payment
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      contactless_payments: 1,
                    })
                  }
                >
                  {props.BasicInformationData.contactless_payments === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      contactless_payments: 0,
                    })
                  }
                >
                  {props.BasicInformationData.contactless_payments === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>

            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              High Chairs
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      high_chairs: 1,
                    })
                  }
                >
                  {props.BasicInformationData.high_chairs === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      high_chairs: 0,
                    })
                  }
                >
                  {props.BasicInformationData.high_chairs === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>

            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Changing Tables
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      changing_tables: 1,
                    })
                  }
                >
                  {props.BasicInformationData.changing_tables === 0 ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      changing_tables: 0,
                    })
                  }
                >
                  {props.BasicInformationData.changing_tables === 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
            <Text style={[styles.alcolholvewtxt, { paddingTop: 10 }]}>
              Black-Owned
            </Text>
            <View style={styles.beervew}>
              <View style={styles.frsttouchvwe}>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsYesFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      black_owned: 1,
                    })
                  }
                >
                  {props.BasicInformationData.black_owned === 0 ||
                  props.BasicInformationData.black_owned === null ? (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={styles.alluncheck}
                      source={require("../../../../Assets/radio_circled_checked.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>Yes</Text>
                <TouchableOpacity
                  style={styles.Touchableopacityallvwe}
                  // onPress={() => props.AcceptCreditCardsNoFun()}
                  onPress={() =>
                    props.setBasicInformationData({
                      ...props.BasicInformationData,
                      black_owned: 0,
                    })
                  }
                >
                  {props.BasicInformationData.black_owned == 1 ? (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  ) : (
                    <Image
                      style={[styles.alluncheck, { marginLeft: 10 }]}
                      source={require("../../../../Assets/unchecked_circled_v1.png")}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.yestxt}>No</Text>
              </View>
            </View>
          </View>
          <View style={styles.btnvwe}>
            <Button
              buttonText="Save Changes"
              buttonLabelStyle={styles.startedbtntxt}
              onPress={props.onPressStepSecond}
            />
          </View>
          <View style={styles.btnvwe}>
            <Button
              buttonText="Cancel"
              buttonLabelStyle={styles.cancelbtntxt}
              style={styles.lstbtnvwe}
              onPress={props.onPressStepSecond}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default BasicInformationScreen;
