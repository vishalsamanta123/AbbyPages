import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { Images } from "../../../Utils/images";
import { BLACK_COLOR_CODE } from "../../../Utils/Constant";
import styles from "./styles";
import Loader from "../../../Utils/Loader";

const CategorySearch = (props) => {
  return (
    <Modal
      animationType="fade"
      hardwareAccelerated={true}
      transparent={true}
      visible={props.businessCategoryModal}
      onRequestClose={() => {
        props.setBusinessCategoryModal(false);
      }}
    >
      <>{props.visible ? <Loader state={props.visible} /> : null}</>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.TouchableFlse}
            onPress={() => props.setBusinessCategoryModal(false)}
          >
            <Image
              style={{ width: 30, height: 30, tintColor: BLACK_COLOR_CODE }}
              source={Images.CANCEL_IMG}
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
            keyboardShouldPersistTaps={"handled"}
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
  );
};

export default CategorySearch;
