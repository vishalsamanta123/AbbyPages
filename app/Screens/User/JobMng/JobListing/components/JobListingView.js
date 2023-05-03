import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Keyboard } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import { COLORS } from "../../../../../Utils/Constant";
import EmptyList from "../../../../../Components/EmptyList";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import MainInput from "../../../../../Components/MainInput";
import CategoryView from "./CategoryView";
import NoImageList from "../../../../../Components/ListItemsView/noImageList";

const JobListingView = (props) => {
  const [categoryModal, setCategoryModal] = useState(false);
  return (
    <View style={CommonStyles.container}>
      <MainHeader
        headerText={"Jobs"}
        isSearch={false}
        loginButton={false}
        TxtMarginRight={"17%"}
      />
      <View style={styles.topInfoVw}>
        <TouchableOpacity
          onPress={() => setCategoryModal(true)}
          style={styles.topStraightVw}
        >
          <IconX
            origin={ICON_TYPE.MATERIAL_COMMUNITY}
            size={20}
            name={"briefcase-search-outline"}
            paddingRight={5}
            color={COLORS.BLACK}
          />
          <ScaleText style={[styles.hdngtxt]}>Category</ScaleText>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.topStraightVw]}>
          <IconX
            origin={ICON_TYPE.ANT_ICON}
            size={20}
            name={"filter"}
            paddingRight={5}
            color={COLORS.BLACK}
          />
          <ScaleText style={[styles.hdngtxt]}>Filter</ScaleText>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 6 }}>
        <MainInput
          headTxt={"Any KeyWord..."}
          placeholder={"Search here..."}
          onChangeText={(txt) => {
            props.setFilterData({
              ...props.filterData,
              job_title: txt,
            });
          }}
          value={props?.filterData?.job_title}
        />
        <MainInput
          placeholder={"Search here..."}
          headTxt={"City,Postalcode..."}
          onChangeText={(txt) => {
            props.setFilterData({
              ...props.filterData,
              city_name: txt,
            });
          }}
          value={props?.filterData?.city_name}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (
            props.filterData?.city_name != "" ||
            props.filterData?.job_title != ""
          ) {
            props.handleJobFilter(0, {
              ...props?.filterData,
            });
            Keyboard.dismiss();
          }
        }}
        style={styles.searchBttn}
      >
        <ScaleText style={styles.searchBttnTxt}>Search</ScaleText>
      </TouchableOpacity>
      <FlatList
        data={props.jobList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => {
          return (
            <NoImageList
              item={item}
              title={item?.job_title}
              subTitle={item?.company_name}
              smallTxt={item?.city_name + "-" + item?.job_address}
              dateIconTxt={item?.create_date}
              rowIconTxt1={
                item?.job_type === "1"
                  ? "Fixed Term Freelance"
                  : item?.job_type === "2"
                  ? "Paid Freelance"
                  : item?.job_type === "3"
                  ? "Unpaid Full Time"
                  : item?.job_type === "4"
                  ? "Paid Internship"
                  : item?.job_type === "5"
                  ? "Part Time Temporary"
                  : item?.job_type === "6"
                  ? "Unpaid Internship"
                  : "Not Found"
              }
              rowIconTxt2={`$${item?.monthly_in_hand_salary_from} - $${item?.monthly_in_hand_salary_to}`}
              onPressView={() => {}}
            />
          );
        }}
        ListEmptyComponent={() => {
          return <EmptyList message={"Job"} />;
        }}
        onEndReached={() => {
          if (props?.jobList?.length < props?.moreData) {
            props?.handleJobFilter(
              props?.jobList?.length > 4 ? props.offset + 10 : 0,
              props.filterData
            );
          }
        }}
        refreshing={false}
        onRefresh={() => props.handleJobFilter(0, props.nullObj)}
      />
      <CategoryView
        categoryModal={categoryModal}
        setCategoryModal={setCategoryModal}
        onPressCatgry={(item) => {
          setCategoryModal(false);
          props.handleJobFilter(0, {
            ...props?.filterData,
            category: item?.id,
          });
        }}
      />
    </View>
  );
};
export default JobListingView;
