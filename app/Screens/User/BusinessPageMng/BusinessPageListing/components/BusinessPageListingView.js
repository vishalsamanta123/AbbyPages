import React, { useState } from "react";
import {
  View,
  FlatList,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../../../../../Components/Header";
import ListItemsView from "../../../../../Components/ListItemsView";
import CommonStyles from "../../../../../Utils/CommonStyles";
import {
  IOS,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import styles from "./styles";

const BusinessPageListingView = (props) => {
  const [allSelect, setAllSelect] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={IOS ? "padding" : null}
      style={CommonStyles.container}
    >
      <Header
        RightImg={Images.MAP_LIST_IMG}
        HeaderText={""}
        onPress={() => props.onPressMap()}
        textInput={true}
        placeholder={"Tea Rooms Current..."}
        value={props.inputSearch}
        onChangeText={(searchKey) => props.setInputSearch(searchKey)}
        type="Map"
        logoImg={false}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <Text style={styles.headText}>Business Listing</Text>
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
            <>
              {props?.search?.business_type === "1" ? (
                <ScrollView
                  contentContainerStyle={styles.straightVw}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                >
                  <>
                    <TouchableOpacity
                      style={[
                        styles.topContainer,
                        {
                          backgroundColor: allSelect ? YELLOW_COLOR_CODE : null,
                        },
                      ]}
                      onPress={() => {
                        props.handleOptions([]);
                        setAllSelect(true);
                      }}
                    >
                      <Text style={styles.topContainerTxt}>{"All"}</Text>
                    </TouchableOpacity>
                  </>
                  {props?.restaurantOptions?.map((item, index) => {
                    return (
                      <TouchableOpacity
                        style={[
                          styles.topContainer,
                          {
                            backgroundColor: props?.search?.selectOption
                              ?.toString()
                              ?.includes(item.type)
                              ? YELLOW_COLOR_CODE
                              : null,
                          },
                        ]}
                        onPress={() => {
                          props.handleOptions(item);
                          setAllSelect(false);
                        }}
                      >
                        <Text style={styles.topContainerTxt}>{item.name}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              ) : null}
            </>
          );
        }}
        renderItem={({ item, index }) => {
          return (
            <ListItemsView
              onPressView={props.onPressView}
              item={item}
              index={index}
              largeImg={item?.logo}
              largeName={item?.business_name}
              smallTxt={item?.address}
              rating={item?.rating}
              rowImgTxt1={item?.business_service_category}
              rowImgTxt2={item?.create_date}
              rowImgTxt3={item?.about_business}
            />
          );
        }}
        // onEndReached={() => {
        //   if (props.search || props.inputSearch) {
        //     if (props.restroList?.length < props?.moreData) {
        //       props?.handleSearchData(
        //         props?.restroList?.length > 4 ? props.offSet + 5 : 0,
        //         props.search
        //       );
        //     }
        //   }
        // }}
      />
    </KeyboardAvoidingView>
  );
};
export default BusinessPageListingView;
