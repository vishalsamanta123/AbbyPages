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
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import {
  GREY_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import moment from "moment";
import Button from "../../../Components/Button";
import { Images } from "../../../Utils/images";

const JobListScreen = (props) => {
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
            <Text style={styles.text}>{item.company_name}</Text>
            <Text style={styles.text}>
              {moment(item.create_date).endOf("day").fromNow()}
            </Text>
          </View>
          <Text style={styles.jobTitle}>{item.job_title}</Text>
          <View style={styles.basiccon}>
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={Images.LOCATION_IMG}
            />
            <Text numberOfLines={3} style={styles.text}>
              {item.job_address}
            </Text>
          </View>
          <View style={styles.basiccon}>
            <Image
              tintColor={YELLOW_COLOR_CODE}
              style={styles.icon}
              resizeMode="contain"
              source={Images.JOB_LIST_IMG}
            />
            <Text style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
              {Number(item.job_type) === 1
                ? "Full Time"
                : Number(item.job_type) === 2
                ? "Part Time"
                : Number(item.job_type) === 3
                ? "Intership"
                : Number(item.job_type) === 4
                ? "Freelancer"
                : "Work"}
            </Text>
          </View>
          <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
            <View style={styles.basiccon}>
              <Image
                style={styles.icon}
                tintColor={YELLOW_COLOR_CODE}
                resizeMode="contain"
                source={Images.MONEY_NOTE_IMG}
              />
              <Text style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
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
              </Text>
            </View>
            <TouchableOpacity onPress={() => props._hanldeSetLike(item)}>
              <Image
                style={{
                  tintColor:
                    item.user_like === 1 ? null : LINE_COMMON_COLOR_CODE,
                }}
                source={Images.FAVRT_IMG}
              />
            </TouchableOpacity>
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

            <Text style={styles.editTxt}>Edit Your Job</Text>
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
            source={require("../../../Assets/header_back_btn.png")}
          />
        </TouchableOpacity>
        <View style={[styles.HeaderMiddleCon]}>
          <Text style={[styles.MainHeadTxt]}>Jobs</Text>
        </View>
        <View style={styles.HeaderRightView}>
          <TouchableOpacity onPress={() => props.onPressMap()}>
            <Image
              resizeMode="cover"
              style={styles.headericon}
              source={require("../../../Assets/map_list_icon.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.handleFilter()}>
            <Image
              resizeMode="cover"
              style={styles.headericon}
              source={require("../../../Assets/filter_icon.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.handleSearch()}>
            <Image
              resizeMode="cover"
              style={styles.headericon}
              source={require("../../../Assets/search_icon_header.png")}
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
                <Text style={styles.hdngtxt}>
                  {props?.jobList?.length} Results found
                </Text>
                <TouchableOpacity
                  style={styles.postJobVW}
                  onPress={() => props.setPostjob(true)}
                >
                  <Text style={[styles.hdngtxt, { fontSize: 16 }]}>
                    Post Job
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
          renderItem={({ item, index }) => _renderJobList(item, index)}
          ListEmptyComponent={() => {
            return (
              <View style={styles.emptyVw}>
                <Text style={styles.emptyTxt}>Jobs not available</Text>
              </View>
            );
          }}
          onMomentumScrollBegin={() => setScrollBegin(true)}
          onEndReached={(item) => {
            if (scrollBegin) {
              if (!props.stopOffset) {
                props?.handleJobFilter(
                  props.jobList.length > 5 ? props.offset + 1 : 0
                );
                setScrollBegin(false);
              } else {
                setScrollBegin(false);
              }
            }
          }}
        />
      </View>
      <Modal animationType="slide" transparent={true} visible={props.postjob}>
        <View style={styles.modal}>
          <View style={styles.modalVw}>
            <View style={styles.closeModalVw}>
              <TouchableOpacity onPress={() => props.setPostjob(false)}>
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require("../../../Assets/cart_delete_icon.png")}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.topMssgTxt}>Add a Business</Text>
            <Text style={styles.confrTxt}>
              Are you a customer or the owner/manager of the busineess you'd
              like to add?
            </Text>
            <Button
              style={[styles.modalBttnVw, { marginTop: 20 }]}
              buttonLabelStyle={{ color: GREY_COLOR_CODE }}
              buttonText={"I m a customer"}
              onPress={() => props.handlePostJob(1)}
            />
            <Button
              style={styles.modalBttnVw}
              buttonLabelStyle={{ color: GREY_COLOR_CODE }}
              buttonText={"This is my businesss"}
              onPress={() => props.handlePostJob(2)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default JobListScreen;
