import React, { useState } from "react";
import {
  View,
  FlatList,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import EmptyList from "../../../../../Components/EmptyList";
import Header from "../../../../../Components/Header";
import ListItemsView from "../../../../../Components/ListItemsView";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { COLORS, Constants } from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import styles from "./styles";
import MainHeader from "../../../../../Components/MainHeader";

const BusinessPageListingView = (props) => {
  const [allSelect, setAllSelect] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Constants.Ios ? "padding" : null}
      style={CommonStyles.container}
    >
      <MainHeader isSearch={true} isLogin={true} />
      <Text style={styles.headText}>Business Listing</Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={props.restroList}
        ListEmptyComponent={() => {
          return <EmptyList message={"Restaurant"} />;
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
                          backgroundColor: allSelect ? COLORS.YELLOW : null,
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
                              ? COLORS.YELLOW
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
        onEndReached={() => {
          if (props.search || props.inputSearch) {
            if (props.restroList?.length < props?.moreData) {
              props?.handleSearchData(
                props?.restroList?.length > 4 ? props.offSet + 5 : 0,
                props.search
              );
            }
          }
        }}
        refreshing={false}
        onRefresh={() => props.handleSearchData(0, props.search)}
      />
    </KeyboardAvoidingView>
  );
};
export default BusinessPageListingView;
