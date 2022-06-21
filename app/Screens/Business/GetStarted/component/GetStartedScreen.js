import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";
import Input from "../../../../Components/Input";
import { WHITE_COLOR_CODE, BLACK_COLOR_CODE } from "../../../../Utils/Constant";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { TouchableOpacity } from "react-native-gesture-handler";
const GetStartedScreen = (props) => {
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
              source={require("../../../../Assets/checked_circled_icon_box.png")}
            />
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={CommonStyles.container}>
      <Header
        // leftImg={require("../../../../Assets/header_back_btn.png")}
        // HeaderText="Coming Soon"
        HeaderText="Get Started"
        RightImg={null}
      />
      {/* <Text>
                    Coming Soon
                </Text> */}
      <ScrollView keyboardShouldPersistTaps={"always"}>
        <View style={styles.startxt}>
          <Text style={styles.getstartxt}>
            Get started by telling us how customers can reach you
          </Text>
          <Text style={styles.addmaintxt}>
            add your bussiness's contact information to start settings up you
            account. we're adding "ITI" in oriandi, Fl ew877, USA to AbbyPages
          </Text>
        </View>
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
                            onPress={() => props.onRemoveService(index)}
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
              {props.businessCategory ? (
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
            </TouchableOpacity>

            {/* {props.businessRegistartionData.business_category.length > 0 &&
                            <Text>
                                Categories Selected
                        </Text>
                        } */}
          </View>
        </View>
        {props.businessCategory ? (
          <View
            style={{
              marginLeft: 20,
              borderWidth: 1,
              height: props.subCategoryList.length > 0 ? 200 : 130,
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
                  height: 80,
                }}
              >
                <Text style={{ fontSize: 18 }}>Thare is no data found</Text>
              </View>
            )}
          </View>
        ) : null}
        <Input
          onChangeText={(business_name) =>
            props.setBusinessRegistartionData({
              ...props.businessRegistartionData,
              business_name: business_name,
            })
          }
          value={props.businessRegistartionData.business_name}
          secureTextEntry={false}
          placeholder="Business Name"
          InputType="withScroll"
        />
        <Input
          onChangeText={(business_phone) =>
            props.setBusinessRegistartionData({
              ...props.businessRegistartionData,
              business_phone: business_phone,
            })
          }
          value={props.businessRegistartionData.business_phone}
          secureTextEntry={false}
          placeholder="Business Phone Number"
          InputType="withScroll"
          keyboardType={"phone-pad"}
        />
        <Input
          onChangeText={(website) =>
            props.setBusinessRegistartionData({
              ...props.businessRegistartionData,
              website: website,
            })
          }
          value={props.businessRegistartionData.website}
          secureTextEntry={false}
          placeholder="Website"
          InputType="withScroll"
          keyboardType={"email-address"}
          autoCapitalize="none"
        />
        <GooglePlacesAutocomplete
          placeholder="Street Address"
          fetchDetails={true}
          onPress={(data, details = null) => {
            props.setBusinessRegistartionData({
              ...props.businessRegistartionData,
              address: details.formatted_address,
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
            });
          }}
          onChangeText={(address) =>
            props.setBusinessRegistartionData({
              ...props.businessRegistartionData,
              address: address,
            })
          }
          value={props.businessRegistartionData.address}
          query={{
            key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
            language: "en",
          }}
          styles={{
            textInputContainer: {
              // backgroundColor: 'rgba(0,0,0,0)',
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
              backgroundColor: "red",
              // margin: 10,
              marginLeft: 17,
              marginRight: 17,
              borderWidth: 1,
              // borderRadius: 8,
              borderColor: "#d8d8d8",
            },
          }}
          minLength={1}
          autoFocus={false}
          returnKeyType={"default"}
        />
        <Input
          onChangeText={(zip_code) =>
            props.setBusinessRegistartionData({
              ...props.businessRegistartionData,
              zip_code: zip_code,
            })
          }
          value={props.businessRegistartionData.zip_code}
          secureTextEntry={false}
          placeholder="Zip Code"
          InputType="withScroll"
          keyboardType={"phone-pad"}
          autoCapitalize="none"
        />

        {/* <Input
                        onChangeText={(email) => props.setBusinessRegistartionData({
                            ...props.businessRegistartionData,
                            email: email
                        })}
                        value={props.businessRegistartionData.email}
                        secureTextEntry={false}
                        placeholder="Your Email Address"
                        InputType="withScroll"
                        keyboardType={'email-address'}
                        autoCapitalize='none'
                    />
                    <Input
                        onChangeText={(password) => props.setBusinessRegistartionData({
                            ...props.businessRegistartionData,
                            password: password
                        })}
                        value={props.businessRegistartionData.password}
                        secureTextEntry={false}
                        placeholder="Password"
                        InputType="withScroll"
                        keyboardType={"visible-password"}
                    /> */}
        <View style={styles.lstbtnvwe}>
          <Text style={styles.continuetxt}>
            By continuing, you agree to AbbyPages
            <Text style={styles.bussnesstxt}> Business Terms </Text>and
            acknowledge our
            <Text style={styles.pptxt}> privacy policy. </Text>
            we may email you about AbbyPages products, services and local
            events. You can unsubscribe at any time.
          </Text>
          <Button
            buttonText="Continue"
            style={{ marginTop: 10, width: "100%" }}
            onPress={props.onPressContinue}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default GetStartedScreen;
