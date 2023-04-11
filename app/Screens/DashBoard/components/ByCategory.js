import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import styles from "./styles";
import { IconX, ICON_TYPE } from "../../../Components/Icons/Icon";
import {
  BLACK_COLOR_CODE,
  GREY_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  MAP_KEY,
  WHITE_COLOR_CODE,
  windowHeight,
  windowWidth,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import CommonStyles from "../../../Utils/CommonStyles";
import Button from "../../../Components/Button";
import BoxContainers from "../../../Components/BoxContainer";
import { Images } from "../../../Utils/images";

const ByCategory = (props) => {
  return (
    <Modal visible={props.searchModal}>
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={styles.searchModal}
      >
        <TouchableOpacity
          onPress={() => props.setSearchModal(false)}
          style={styles.crossVw}
        >
          <IconX
            origin={ICON_TYPE.ENTYPO}
            color={LINE_COMMON_COLOR_CODE}
            name={"circle-with-cross"}
            size={40}
          />
        </TouchableOpacity>
        <Text style={styles.searchTxt}>Search</Text>
        <View style={styles.searchVw}>
          <Text style={styles.titlesTxt}>What</Text>
          <View style={styles.catgSearchVw}>
            <IconX
              origin={ICON_TYPE.OCTICONS}
              color={GREY_COLOR_CODE}
              name={"search"}
              style={{ marginHorizontal: 10 }}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor={GREY_COLOR_CODE}
              style={styles.catgSearchInput}
            />
          </View>
        </View>
        <View style={styles.searchVw}>
          <Text style={[styles.titlesTxt, { marginTop: 0 }]}>Where</Text>
          <View style={styles.catgSearchVw}>
            <View style={CommonStyles.locationIcon}>
              <IconX
                origin={ICON_TYPE.SIMPLELINE}
                color={GREY_COLOR_CODE}
                name={"location-pin"}
              />
            </View>
            <GooglePlacesAutocomplete
              placeholder="Search Place"
              fetchDetails={true}
              onPress={(data, details = null) => {}}
              textInputProps={{
                placeholderTextColor: GREY_COLOR_CODE,
              }}
              query={{
                key: MAP_KEY,
                language: "en",
              }}
              styles={CommonStyles.locSearchVw}
              minLength={2}
              autoFocus={false}
              returnKeyType={"default"}
            />
          </View>
        </View>
        <View style={styles.searchVw}>
          <Button
            buttonText={"Search"}
            buttonLabelStyle={{ color: WHITE_COLOR_CODE }}
            style={styles.searchButtonVw}
          />
        </View>
        <Text style={styles.searchTxt}>Or Browse the highlight</Text>
        <View style={styles.boxesVw}>
          <BoxContainers
            boxContainerImg={Images.RESTO_LIST_IMG}
            boxContainerTxt={"Restaurant"}
            marginHorizontal={10}
          />
          <BoxContainers
            boxContainerImg={Images.EVENT_LIST_IMG}
            boxContainerTxt={"Events"}
            marginHorizontal={10}
          />
          <BoxContainers
            boxContainerImg={Images.JOB_LIST_IMG}
            boxContainerTxt={"Jobs"}
            marginHorizontal={10}
          />
          <BoxContainers
            boxContainerImg={Images.SHOPP_LIST_IMG}
            boxContainerTxt={"MarketPlace"}
            marginHorizontal={10}
          />
          <BoxContainers
            boxContainerImg={Images.SETTING_IMG}
            boxContainerTxt={"Services"}
            marginHorizontal={10}
          />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default ByCategory;
