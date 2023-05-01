import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Platform,
  Modal,
} from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import {
  GREY_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";
import moment from "moment";
import { Images } from "../../../../../Utils/images";
import EmptyList from "../../../../../Components/EmptyList";
import ScaleText from "../../../../../Components/ScaleText";

const JobListingView = (props) => {
  const [scrollBegin, setScrollBegin] = useState();
  const _renderJobList = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => props.onPressJob(item)}
        style={styles.dataCon}
      >
        <View>
          <Image
            style={styles.posterimg}
            source={{ uri: item.business_logo }}
            resizeMode={"contain"}
          />
        </View>
        <View style={styles.detailsVw}>
          <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
            <ScaleText style={styles.text}>{item.company_name}</ScaleText>
            <ScaleText style={styles.text}>
              {moment(item.create_date).endOf("day").fromNow()}
            </ScaleText>
          </View>
          <ScaleText style={styles.jobTitle}>{item.job_title}</ScaleText>
          <View style={styles.basiccon}>
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={Images.LOCATION_IMG}
            />
            <ScaleText numberOfLines={3} style={styles.text}>
              {item.job_address}
            </ScaleText>
          </View>
          <View style={styles.basiccon}>
            <Image
              tintColor={YELLOW_COLOR_CODE}
              style={styles.icon}
              resizeMode="contain"
              source={Images.JOB_LIST_IMG}
            />
            <ScaleText style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
              {Number(item.job_type) === 1
                ? "Full Time"
                : Number(item.job_type) === 2
                ? "Part Time"
                : Number(item.job_type) === 3
                ? "Intership"
                : Number(item.job_type) === 4
                ? "Freelancer"
                : "Work"}
            </ScaleText>
          </View>
          <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
            <View style={styles.basiccon}>
              <Image
                style={styles.icon}
                tintColor={YELLOW_COLOR_CODE}
                resizeMode="contain"
                source={Images.MONEY_NOTE_IMG}
              />
              <ScaleText style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
                {Number(
                  parseFloat(item?.monthly_in_hand_salary_from).toFixed(2)
                ).toLocaleString("en", {
                  minimumFractionDigits: 2,
                })}
                -
                {Number(
                  parseFloat(item?.monthly_in_hand_salary_to).toFixed(2)
                ).toLocaleString("en", {
                  minimumFractionDigits: 2,
                })}
              </ScaleText>
            </View>
            {/* <TouchableOpacity onPress={() => props._hanldeSetLike(item)}>
              <Image
                style={{
                  tintColor:
                    item.user_like === 1 ? null : LINE_COMMON_COLOR_CODE,
                }}
                source={Images.FAVRT_IMG}
              />
            </TouchableOpacity> */}
          </View>
          {/* <TouchableOpacity style={[styles.basiccon, { marginTop: 5 }]}>
            <View
              style={{
                marginRight: 10,
                backgroundColor: YELLOW_COLOR_CODE,
                borderRadius: 16,
                padding: 4,
              }}
            >
              <Image
                style={{ tintColor: WHITE_COLOR_CODE }}
                resizeMode="contain"
                source={Images.EDIT_PENCIL_IMG}
              />
            </View>

            <ScaleText style={styles.editTxt}>Edit Your Job</ScaleText>
          </TouchableOpacity> */}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={CommonStyles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={YELLOW_COLOR_CODE}
        translucent={false}
      />
      <View
        style={[
          CommonStyles.header,
          { paddingTop: Platform.OS === "ios" ? 45 : 0 },
        ]}
      >
        <TouchableOpacity
          onPress={() => props.goBack()}
          style={styles.HeaderView}
        >
          <Image
            style={{ width: 30, height: 30 }}
            resizeMode={"contain"}
            source={Images.HEADER_BCK_IMG}
          />
        </TouchableOpacity>
        <View style={[styles.HeaderMiddleCon]}>
          <ScaleText style={[styles.MainHeadTxt]}>Jobs</ScaleText>
        </View>
        <View style={styles.HeaderRightView}>
          <TouchableOpacity onPress={() => props.onPressMap()}>
            <Image
              resizeMode="cover"
              style={styles.headericon}
              source={Images.MAP_LIST_IMG}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.handleFilter()}>
            <Image
              resizeMode="cover"
              style={styles.headericon}
              source={Images.FILTER_IMG}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.handleSearch()}>
            <Image
              resizeMode="cover"
              style={styles.headericon}
              source={Images.SEARCH_IMG}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: WHITE_COLOR_CODE }}>
        <FlatList
          data={props.jobList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={() => {
            return (
              <View style={styles.topInfoVw}>
                <ScaleText style={styles.hdngtxt}>
                  {props?.jobList?.length} Results found
                </ScaleText>
                <TouchableOpacity
                  style={styles.postJobVW}
                  onPress={() => props.setPostjob(true)}
                >
                  <ScaleText style={[styles.hdngtxt, { fontSize: 16 }]}>
                    Post Job
                  </ScaleText>
                </TouchableOpacity>
              </View>
            );
          }}
          renderItem={({ item, index }) => _renderJobList(item, index)}
          ListEmptyComponent={() => {
            return <EmptyList message={"Job"} />;
          }}
          onEndReached={(item) => {
            if (props?.jobList > 10) {
              props?.handleJobFilter(
                props.jobList.length > 5 ? props.offset + 1 : 0
              );
            }
          }}
        />
      </View>
    </View>
  );
};
export default JobListingView;
