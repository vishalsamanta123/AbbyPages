import React from "react";
import {
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import Button from "../../../Components/Button";
import {
  FONT_FAMILY_LIGHT,
  LIGHT_BLACK_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import moment from "moment";

const JobListScreen = (props) => {
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
              source={require("../../../Assets/info_marker_icon.png")}
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
              source={require("../../../Assets/job_list_icon.png")}
            />
            <Text style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
              {item.job_type}
            </Text>
          </View>
          <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
            <View style={styles.basiccon}>
              <Image
                style={styles.icon}
                tintColor={YELLOW_COLOR_CODE}
                resizeMode="contain"
                source={require("../../../Assets/money_icon.png")}
              />
              <Text style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
                {item.monthly_in_hand_salary_from}-
                {item.monthly_in_hand_salary_to}
              </Text>
            </View>
            <TouchableOpacity onPress={() => props._hanldeSetLike(index)}>
              <Image
                source={
                  props.like == index
                    ? require("../../../Assets/like_icon_disable.png")
                    : require("../../../Assets/like_icon_filled.png")
                }
              />
            </TouchableOpacity>
          </View>
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
      <View style={[CommonStyles.header]}>
        <TouchableOpacity
          onPress={() => props.goBack()}
          style={styles.HeaderView}
        >
          <Image
            style={{ width: 35, height: 25 }}
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
          <TouchableOpacity onPress={() => props.setVisible(true)}>
            <Image
              resizeMode="cover"
              style={styles.headericon}
              source={require("../../../Assets/filter_icon.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.setSearch(!props.search)}>
            <Image
              resizeMode="cover"
              style={styles.headericon}
              source={require("../../../Assets/search_icon_header.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[CommonStyles.body]}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: "#f2f2f2",
          }}
        >
          {props.search && (
            <View style={styles.inputVw}>
              <TextInput
                placeholder={"Search job ..."}
                placeholderTextColor={SMALL_TEXT_COLOR_CODE}
                style={styles.input}
                onChangeText={(searchKey) => props.searchJob(searchKey)}
              />
            </View>
          )}
          <Text style={styles.hdngtxt}>
            {props?.jobList?.length} Results found
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: WHITE_COLOR_CODE }}>
          <FlatList
            data={props.jobList}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => _renderJobList(item, index)}
            ListEmptyComponent={() => {
              return (
                <View style={styles.emptyVw}>
                  <Text style={styles.emptyTxt}>
                    Business job not available
                  </Text>
                </View>
              );
            }}
            onEndReached={() => {
              !props.stopOffset ? props.handlejobsList(props.offset + 1) : null;
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default JobListScreen;
