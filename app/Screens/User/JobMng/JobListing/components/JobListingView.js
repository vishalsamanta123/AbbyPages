import React, { useState } from "react";
import { View, TouchableOpacity, Keyboard } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import { COLORS, Constants, FONT_SIZE } from "../../../../../Utils/Constant";
import EmptyList from "../../../../../Components/EmptyList";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import MainInput from "../../../../../Components/MainInput";
import CategoryView from "./CategoryView";
import { NoImageList } from "../../../../../Components/ListItemsView";
import FilterView from "./FilterView";
import { getAmount } from "../../../../../Utils/Globalfunctions";
import { JobList } from "../../../../../Components/ShimmerEffect";
import ListingView from "../../../../../Components/ListingView";

const JobListingView = (props) => {
  const [categoryModal, setCategoryModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  return (
    <View style={CommonStyles.container}>
      <MainHeader
        headerText={"Jobs"}
        isSearch={false}
        loginButton={false}
        TxtMarginRight={"5%"}
        backText={false}
      />
      <View style={styles.topInfoVw}>
        <TouchableOpacity
          onPress={() => setCategoryModal(true)}
          style={styles.topStraightVw}
        >
          <IconX
            origin={ICON_TYPE.ENTYPO}
            size={20}
            name={"list"}
            paddingRight={5}
            color={COLORS.BLACK}
          />
          <ScaleText style={styles.hdngtxt}>Category</ScaleText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilterModal(true)}
          style={styles.topStraightVw}
        >
          <IconX
            origin={ICON_TYPE.ANT_ICON}
            size={20}
            name={"filter"}
            paddingRight={5}
            color={COLORS.BLACK}
          />
          <ScaleText style={styles.hdngtxt}>Filter</ScaleText>
          {props.filterData?.country_name_d != "" ||
          props.filterData?.state_name_d != "" ||
          props.filterData?.city_name_d != "" ||
          props.filterData?.hire_name_d != "" ? (
            <ScaleText
              style={[
                CommonStyles.dotTxt,
                { color: COLORS.YELLOW, fontSize: FONT_SIZE.smallL },
              ]}
            >
              {" "}
              {Constants.dot}
            </ScaleText>
          ) : null}
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 6, marginHorizontal: 12 }}>
        <MainInput
          headTxt={"Any KeyWord..."}
          placeholder={"Search here..."}
          onChangeText={(txt) => {
            props.setFilterData({
              ...props.filterData,
              job_title: txt,
            });
          }}
          height={50}
          value={props?.filterData?.job_title}
        />
        <MainInput
          placeholder={"Search here..."}
          headTxt={"City..."}
          height={50}
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
          Keyboard.dismiss();
          if (
            props.filterData?.city_name === "" &&
            props.filterData?.job_title === ""
          ) {
            const newObj = {
              ...props.filterData,
              city_name: "",
              job_title: "",
            };
            props.handleJobFilter(0, { ...newObj });
          } else {
            const newObj = {
              ...props.filterData,
            };
            props.handleJobFilter(0, { ...newObj });
          }
        }}
        style={styles.searchBttn}
      >
        <ScaleText style={styles.searchBttnTxt}>Search</ScaleText>
      </TouchableOpacity>
      {props.loader ? (
        <JobList />
      ) : (
        <ListingView
          data={props.jobList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <NoImageList
                item={item}
                onPressView={() => props.onPressJob(item)}
                title={item?.job_title}
                subTitle={item?.company_name}
                smallTxt={item?.city_name + "-" + item?.job_address}
                dateIconTxt={item?.create_date}
                heartDark={item.user_like === 1 ? true : false}
                onPressHeart={() => props.onPressLike(item, index)}
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
                rowIconTxt2={`$${getAmount(
                  item?.monthly_in_hand_salary_from
                )} - $${getAmount(item?.monthly_in_hand_salary_to)}`}
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
          onRefresh={() => props.handleJobFilter(0, props.nullObj)}
        />
      )}
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
      <FilterView
        filterData={props?.filterData}
        setFilterData={props.setFilterData}
        setFilterModal={setFilterModal}
        filterModal={filterModal}
        handleFilter={() => props.handleJobFilter(0, props?.filterData)}
      />
    </View>
  );
};
export default JobListingView;
