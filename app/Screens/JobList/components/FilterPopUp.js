import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  BackHandler,
  ScrollView,
  Alert,
  TextInput,
} from "react-native";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import {
  YELLOW_COLOR_CODE,
  LINE_COMMON_COLOR_CODE,
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  FONT_FAMILY_LIGHT,
  FONT_FAMILY_REGULAR,
} from "../../../Utils/Constant";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
export default function FilterPopUp(props) {
  const [keywords, openKeyWord] = useState(false);
  const [list, setList] = useState(true);
  useEffect(() => {
    const backAction = () => {
      props.closeModel();
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);
  return (
    <Dialog
      visible={props.visible}
      width={"100%"}
      height={"100%"}
      useNativeDriver={true}
      dialogAnimation={new SlideAnimation({ slideFrom: "bottom" })}
      onTouchOutside={() => {
        props.closeModel();
      }}
    >
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={YELLOW_COLOR_CODE}
        translucent={false}
      />
      <View style={CommonStyles.header}>
        <TouchableOpacity
          onPress={() => props.closeModel()}
          style={styles.HeaderArrow}
        >
          <Image source={require("../../../Assets/header_back_btn.png")} />
        </TouchableOpacity>
        <View style={styles.HeaderViewMidle}>
          <Text style={styles.HeaderMiddleTxt}>Filter Jobs</Text>
        </View>
        <View style={styles.FilterImgeView}>
          <Image source={require("../../../Assets/filter_icon.png")} />
          <Image
            style={{ marginLeft: 5 }}
            source={require("../../../Assets/search_icon_header.png")}
          />
        </View>
      </View>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => openKeyWord(true)}
            style={styles.AnyKeywordView}
          >
            <Text style={styles.MainBtnText}>Any Keywords...</Text>
            <Image source={require("../../../Assets/dropdown_icon.png")} />
          </TouchableOpacity>
          {keywords && (
            <View style={{ marginHorizontal: 25 }}>
              <TextInput
                style={styles.keyBoardVw}
                placeholder={"Any Keywords"}
                placeholderTextColor={LIGHT_BLACK_COLOR_CODE}
                onChangeText={(val) => {
                  props.filterJobSearch(val);
                }}
                value={
                  props?.filterData?.title ? props?.filterData?.title : null
                }
                onFocus={() => setList(true)}
              />
              {list && (
                <ScrollView
                  contentContainerStyle={styles.jobTitleVw}
                  keyboardShouldPersistTaps={true}
                  nestedScrollEnabled={true}
                >
                  {props.jobList.map((item) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          props.setFilterData({
                            ...props.filterData,
                            title: item.job_title,
                          });
                          setList(false);
                        }}
                        style={styles.jobTitles}
                      >
                        <Text style={styles.jobTitleTxt}>{item.job_title}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              )}
            </View>
          )}
          <View style={styles.AnyKeywordView}>
            <Text style={styles.MainBtnText}>Open Now</Text>
            <Image source={require("../../../Assets/clock_icon2.png")} />
          </View>
          <View style={styles.AnyKeywordView}>
            <Text style={styles.MainBtnText}>Highest Rated</Text>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../../Assets/star_icon.png")}
            />
          </View>
          <View style={[styles.AnyKeywordView, { marginBottom: 15 }]}>
            <Text style={styles.MainBtnText}>Most Reviewed</Text>
            <Image source={require("../../../Assets/comment_icon.png")} />
          </View>
          <View style={styles.PriceRangeView}>
            <Text style={styles.PriceRngetXT}>Price Range</Text>
            <Text style={styles.PriceRngeText}>From $1 to $2000</Text>
          </View>
          <View style={styles.FiltersTgView}>
            <Text style={styles.PriceRngetXT}>Filters by tags</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.FilterOptnView}>
                <Text style={styles.FiltersText}>Filters by tags</Text>
              </View>
              <View
                style={[
                  styles.FilterOptnView,
                  { marginLeft: 10, backgroundColor: LINE_COMMON_COLOR_CODE },
                ]}
              >
                <Text style={styles.FiltersText}>Develpoers</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Button buttonText={"Filter"} onPress={() => props.filterJob()} />
          </View>
        </View>
      </ScrollView>
    </Dialog>
  );
}
