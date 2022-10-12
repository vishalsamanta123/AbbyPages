import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import CommonStyles from "../../../Utils/CommonStyles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {
  BLACK_COLOR_CODE,
  GREY_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  LIGHT_WHITE_COLOR,
  LINE_COMMON_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";

const DashBoardScreen = (props) => {
  const [moreShow, setMoreShow] = useState(4);
  const handleShowMore = () => {
    if (moreShow === props?.newActivity?.recent_activity.length) {
      setMoreShow(4);
    } else {
      setMoreShow(props?.newActivity?.recent_activity.length);
    }
  };
  return (
    <View style={CommonStyles.container}>
      <Header
        RightImg={null}
        leftImg={require("../../../Assets/hamburger_icon.png")}
        HeaderText={""}
        HeaderMiddleImg={require("../../../Assets/login_logo.png")}
        type="Drawer"
        logoImg={true}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <ScrollView
        keyboardShouldPersistTaps={"always"}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <ImageBackground
          resizeMode={"stretch"}
          source={require("../../../Assets/employeeonboard.png")}
          style={styles.LocatnSrchCntain}
        >
          <View style={styles.straightVw}>
            <TouchableOpacity style={styles.topVwsCon}>
              <Text style={styles.topVwsTxt}>For Busines</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topVwsCon}>
              <Text style={styles.topVwsTxt}>Write A Review</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => props.onPressSearchBusinessCategory()}
            style={styles.TextInputView}
          >
            {props?.businessCategory?.category_name === "" ? (
              <Text
                style={[
                  styles.TextInputStyle,
                  { paddingVertical: 16, color: GREY_COLOR_CODE },
                ]}
              >
                Eg: food, service, barber, hotel
              </Text>
            ) : (
              <Text style={[styles.TextInputStyle, { paddingVertical: 16 }]}>
                {props?.businessCategory?.category_name}
              </Text>
            )}
            <Image
              style={styles.TextInputImge}
              source={require("../../../Assets/search_field_icon.png")}
            />
          </TouchableOpacity>
          <View style={styles.TextInputView}>
            <GooglePlacesAutocomplete
              placeholder="Street Address"
              fetchDetails={true}
              onPress={(data, details = null) => {
                props.setLocation({
                  ...props.location,
                  address: details.formatted_address,
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                });
              }}
              textInputProps={{
                placeholderTextColor: GREY_COLOR_CODE,
                onChangeText: (address) => {
                  props.setLocation({
                    ...props.location,
                    address: address,
                  });
                },
                value: props.location.address,
              }}
              value={props.location.address}
              query={{
                key: "AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM",
                language: "en",
              }}
              styles={styles.addressVw}
              minLength={2}
              autoFocus={false}
              returnKeyType={"default"}
            />
            <Image
              style={styles.TextInputImge}
              resizeMode={"contain"}
              source={require("../../../Assets/map_field_icon.png")}
            />
          </View>
          <Button
            buttonText="Search"
            buttonLabelStyle={styles.SearchTxtStyle}
            style={styles.SearchBtnStyle}
            onPress={() => props.onPressSearch()}
          />
        </ImageBackground>
        <View style={styles.OptionsConatin}>
          <View style={styles.MainOptinsView}>
            <TouchableOpacity
              onPress={() => props.onPressRestro()}
              style={styles.rowVw}
            >
              <View style={styles.OptnsImgContain}>
                <Image
                  source={require("../../../Assets/restaurant_list_icon.png")}
                />
              </View>
              <Text style={styles.OptnsMainText}>Restaurant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OptnsImgContain}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../../Assets/dropdown_icon.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.MainOptinsView}>
            <TouchableOpacity
              onPress={() => props.onPressJob()}
              style={styles.rowVw}
            >
              <View style={styles.OptnsImgContain}>
                <Image source={require("../../../Assets/job_list_icon.png")} />
              </View>
              <Text style={styles.OptnsMainText}>Job</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OptnsImgContain}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../../Assets/dropdown_icon.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.MainOptinsView}>
            <TouchableOpacity
              onPress={() => props.onPressProvider()}
              style={styles.rowVw}
            >
              <View style={styles.OptnsImgContain}>
                <Image
                  source={require("../../../Assets/service_list_icon.png")}
                />
              </View>
              <Text style={styles.OptnsMainText}>Service Provider</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OptnsImgContain}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../../Assets/dropdown_icon.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.MainOptinsView}>
            <TouchableOpacity
              onPress={() => props.onPressEvents()}
              style={styles.rowVw}
            >
              <View style={styles.OptnsImgContain}>
                <Image
                  source={require("../../../Assets/event_list_icon.png")}
                />
              </View>
              <Text style={styles.OptnsMainText}>Event</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OptnsImgContain}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../../Assets/dropdown_icon.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.MainOptinsView}>
            <TouchableOpacity
              onPress={() => props.onPressShopping()}
              style={styles.rowVw}
            >
              <View style={styles.OptnsImgContain}>
                <Image
                  source={require("../../../Assets/shopping_list_icon.png")}
                />
              </View>
              <Text style={styles.OptnsMainText}>Marketplace</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OptnsImgContain}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../../Assets/dropdown_icon.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.otherConVw}>
            <Text style={styles.titlesTxt}>Our Directory</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {props?.directory?.ourDirectory?.map((item) => {
                return (
                  <TouchableOpacity
                    onPress={() => props.handleDirectory(item.type)}
                    style={[
                      styles.moreItemsCon,
                      {
                        width: null,
                        borderColor:
                          props.selectedType === item.type
                            ? YELLOW_COLOR_CODE
                            : GREY_COLOR_CODE,
                        marginLeft: 8,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.directoryTypTxt,
                        {
                          color:
                            props.selectedType === item.type
                              ? YELLOW_COLOR_CODE
                              : GREY_COLOR_CODE,
                        },
                      ]}
                    >
                      {item.search_type.toUpperCase()}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {props?.directory?.top_business?.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={[styles.moreItemsCon, { width: 200 }]}
                  >
                    <Image
                      source={{
                        uri: item.logo,
                      }}
                      style={styles.moreItemsImgs}
                    />
                    <Text style={[styles.moreItemsTxt, { width: null }]}>
                      {item.business_name}
                    </Text>
                    <Text>{item.business_phone}</Text>
                    <View style={styles.rowVw}>
                      <View style={styles.smallVw}>
                        <Text style={{ color: WHITE_COLOR_CODE }}>5.0</Text>
                      </View>
                      <Text style={styles.ratingTxt}>
                        {Number(item.rating).toFixed(2)} rating
                      </Text>
                    </View>
                    {item.address_first && (
                      <View style={styles.rowVw}>
                        <Image
                          resizeMode={"contain"}
                          style={{ width: 20, height: 20 }}
                          source={require("../../../Assets/marker_icon_menu.png")}
                        />
                        <Text numberOfLines={2} style={styles.smallSizeTxt}>
                          {item.address_first}
                        </Text>
                      </View>
                    )}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.otherConVw}>
            <Text style={styles.titlesTxt}>Recent Activities</Text>
            <View style={styles.moreItemsVw}>
              {props?.newActivity?.recent_activity?.map((item, index) => {
                return (
                  <>
                    {index < moreShow && (
                      <TouchableOpacity style={styles.moreItemsCon}>
                        <Image
                          source={{
                            uri:
                              props?.newActivity?.product_url +
                              item.product_image,
                          }}
                          style={styles.moreItemsImgs}
                        />
                        <Text numberOfLines={1} style={styles.smallSizeTxt}>
                          {item.product_name}
                        </Text>
                        <View style={[styles.rowVw, styles.moreItemsTxtVw]}>
                          <Image
                            source={{
                              uri:
                                props?.newActivity?.base_url +
                                item.profile_image,
                            }}
                            style={styles.smallSizeImg}
                          />
                          <Text style={styles.moreItemsTxt}>
                            {item.business_name}
                          </Text>
                        </View>
                        <Text
                          style={[
                            styles.smallSizeTxt,
                            { alignSelf: "flex-start" },
                          ]}
                        >
                          {item.description}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </>
                );
              })}
            </View>
            <TouchableOpacity onPress={() => handleShowMore(1)}>
              <Text style={styles.otherTxt}>
                {moreShow === 4 ? "Show More Activity" : "Show Less Activity"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="fade"
        hardwareAccelerated={true}
        transparent={true}
        visible={props.businessCategoryModal}
        onRequestClose={() => {
          props.setBusinessCategoryModal(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.TouchableFlse}
              onPress={() => props.setBusinessCategoryModal(false)}
            >
              {/* <Image
                source={require("../../../Assets/screen_close_icon.png")}
              /> */}
            </TouchableOpacity>
            <View style={{ width: "100%" }}>
              <TextInput
                placeholder={"Search"}
                onChangeText={(text) => props.SearchBusinessCategory(text)}
                style={styles.TxtInptStyle}
              />
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              data={props.dashBoardDetail}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={index}
                  style={styles.MainCntrySlctTouchble}
                  onPress={() => {
                    props.setBusinessCategory(item),
                      props.setBusinessCategoryModal(false);
                  }}
                >
                  <Text>{item.category_name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default DashBoardScreen;
