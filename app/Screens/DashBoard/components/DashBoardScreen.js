import React from "react";
import {
  View,
  Text,
  Modal,
  Image,
  FlatList,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import CommonStyles from "../../../Utils/CommonStyles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DashBoardScreen = (props) => {
  return (
    <KeyboardAvoidingView style={CommonStyles.container}>
      <Header
        RightImg={null}
        leftImg={require("../../../Assets/hamburger_icon.png")}
        HeaderText={""}
        HeaderMiddleImg={require("../../../Assets/login_logo.png")}
        type="Drawer"
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
          <TouchableOpacity
            onPress={() => props.onPressSearchBusinessCategory()}
            style={styles.TextInputView}
          >
            {props?.businessCategory?.category_name === "" ? (
              <Text
                style={[
                  styles.TextInputStyle,
                  { paddingVertical: 16, color: "grey" },
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
                placeholderTextColor: "grey",
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
          {/* <Image style={{height:120,width:120}} source={
                            { uri: 'abbypages.com/upload/profile_image/default.jpg' }
                            // require('../../../Assets/map_field_icon.png')
                        } /> */}
        </ImageBackground>
        <View style={styles.OptionsConatin}>
          {/* <TouchableOpacity
            onPress={() => props.onPressRestro()}
            style={styles.MainOptinsView}
          >
            <View style={styles.OptnsImgContain}>
              <Image
                source={require("../../../Assets/restaurant_list_icon.png")}
              />
            </View>
            <View style={{ flex: 5 }}>
              <Text style={styles.OptnsMainText}>Restaurant</Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => props.onPressJob()}
            style={styles.MainOptinsView}
          >
            <View style={styles.OptnsImgContain}>
              <Image source={require("../../../Assets/job_list_icon.png")} />
            </View>
            <View style={{ flex: 5 }}>
              <Text style={styles.OptnsMainText}>Job</Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => props.onPressProvider()}
            style={styles.MainOptinsView}
          >
            <View style={styles.OptnsImgContain}>
              <Image
                source={require("../../../Assets/service_list_icon.png")}
              />
            </View>
            <View style={{ flex: 5 }}>
              <Text style={styles.OptnsMainText}>Service Provider</Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => props.onPressEvents()}
            style={styles.MainOptinsView}
          >
            <View style={styles.OptnsImgContain}>
              <Image source={require("../../../Assets/event_list_icon.png")} />
            </View>
            <View style={{ flex: 5 }}>
              <Text style={styles.OptnsMainText}>Event</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onPressShopping()}
            style={[styles.MainOptinsView, { borderBottomWidth: 0 }]}
          >
            <View style={styles.OptnsImgContain}>
              <Image
                source={require("../../../Assets/shopping_list_icon.png")}
              />
            </View>
            <View style={{ flex: 5 }}>
              <Text style={styles.OptnsMainText}>Marketplace</Text>
            </View>
          </TouchableOpacity>
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
              <Image
                source={require("../../../Assets/screen_close_icon.png")}
              />
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
    </KeyboardAvoidingView>
  );
};
export default DashBoardScreen;
