import React, { useState } from "react";
import {
  View,
  FlatList,
  KeyboardAvoidingView,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../../../Components/Header";
import CommonStyles from "../../../Utils/CommonStyles";
import { WHITE_COLOR_CODE, YELLOW_COLOR_CODE } from "../../../Utils/Constant";
import { Images } from "../../../Utils/images";
import styles from "./styles";

const ListingsScreen = (props) => {
  const [scrollBegin, setScrollBegin] = useState();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={CommonStyles.container}
    >
      <Header
        RightImg={Images.MAP_LIST_IMG}
        HeaderText={""}
        onPress={() => props.onPressMap()}
        textInput={true}
        placeholder={"Tea Rooms Current..."}
        onChangeText={(searchKey) => props.setInputSearch(searchKey)}
        type="Map"
        logoImg={false}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={props.restroList}
        ListEmptyComponent={() => {
          return (
            <View style={styles.emptyConVw}>
              <Text style={styles.emptyConTxt}>No Restaurant is available</Text>
            </View>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <ScrollView
              contentContainerStyle={styles.straightVw}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {props?.options?.map((item, index) => {
                const getSelected =
                  props?.search?.selectOption?.length === 0
                    ? ""
                    : props?.search?.selectOption?.map(({ name }) => name);
                return (
                  <TouchableOpacity
                    style={[
                      styles.topContainer,
                      {
                        backgroundColor: getSelected
                          ?.toString()
                          ?.includes(item.name)
                          ? YELLOW_COLOR_CODE
                          : null,
                      },
                    ]}
                    onPress={() => props.handleOptions(item, index)}
                  >
                    <Text style={styles.topContainerTxt}>{item.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          );
        }}
        renderItem={({ item, index }) => props._handleSerivces(item, index)}
        onMomentumScrollBegin={() => setScrollBegin(true)}
        onEndReached={() => {
          if (scrollBegin) {
            if (props.search || props.inputSearch) {
              !props.stopOffset
                ? props?.handleSearchData(
                    props.restroList.length > 5 ? props.offSet + 1 : 0
                  )
                : null;
              setScrollBegin(false);
            } else {
              !props.stopOffset
                ? props?.handleRestroList(
                    props.restroList.length > 5 ? props.offSet + 1 : 0
                  )
                : null;
              setScrollBegin(false);
            }
          }
        }}
      />
    </KeyboardAvoidingView>
  );
};
export default ListingsScreen;
