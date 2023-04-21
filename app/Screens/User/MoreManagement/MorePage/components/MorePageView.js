import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { businessTypes } from "../../../../../Utils/staticData";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import Header from "../../../../../Components/Header";
import { Images } from "../../../../../Utils/images";
import {
  BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../../Utils/Constant";
import Loader from "../../../../../Utils/Loader";
import { SafeAreaView } from "react-native-safe-area-context";

const MorePageView = (props) => {
  return (
    <>
      <Header
        HeaderText={""}
        HeaderMiddleImg={Images.LOGO}
        leftImg={""}
        middleImgStyl={CommonStyles.middleLogoVw}
      />
      <ScrollView contentContainerStyle={CommonStyles.scrollCon}>
        <View style={styles.mainContainer}>
          {props?.userData?.login_type ? (
            <View style={[CommonStyles.straightCon, styles.profileVw]}>
              <Image
                source={{ uri: props?.userData?.profile_image }}
                style={styles.profileImgVw}
                resizeMode={"cover"}
              />
              <View>
                <Text style={styles.profileTxt}>
                  {props?.userData?.first_name +
                    " " +
                    props?.userData?.last_name}
                </Text>
                <Text numberOfLines={2} style={styles.profileSmallTxt}>
                  {props?.userData?.location}
                </Text>
              </View>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => props.handleSignupLogin()}
              style={styles.centerButton}
            >
              <Text style={styles.centerButtonTxt}>Sign Up or Log In</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.headTxt}>Recently Viewed</Text>
          {props?.recent_view?.length > 0 ? (
            <>
              {props?.recent_view?.map((item) => {
                return (
                  <TouchableOpacity
                    style={[CommonStyles.straightCon, styles.listVew]}
                    onPress={() => props.onPressView(item)}
                  >
                    <Image
                      source={{ uri: item.logo }}
                      style={styles.listImgVw}
                      resizeMode={"cover"}
                    />
                    <View>
                      <Text numberOfLines={1} style={styles.listTxt}>
                        {item.business_name}
                      </Text>
                      <Text numberOfLines={2} style={styles.listSmallTxt}>
                        {item.address}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </>
          ) : null}
          <>
            {props?.visible ? (
              <>
              <Loader state={props?.visible} type={"small"} />
              </>
            ) : null}
          </>
          <Text style={styles.headTxt}>More</Text>
          <TouchableOpacity
            onPress={() => props.onPressOptions(businessTypes[3])}
            style={styles.subCatVw}
          >
            <IconX
              origin={businessTypes[3].origin}
              name={businessTypes[3].name}
              size={23}
              color={businessTypes[3].color}
            />
            <Text style={styles.subCatTxt}>{businessTypes[3].optionName}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onPressOptions(businessTypes[2])}
            style={styles.subCatVw}
          >
            <IconX
              origin={businessTypes[2].origin}
              name={businessTypes[2].name}
              size={businessTypes[2].size}
              color={businessTypes[2].color}
            />
            <Text style={styles.subCatTxt}>{businessTypes[2].optionName}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onPressOptions(businessTypes[1])}
            style={styles.subCatVw}
          >
            <IconX
              origin={businessTypes[1].origin}
              name={businessTypes[1].name}
              size={businessTypes[1].size}
              color={businessTypes[1].color}
            />
            <Text style={styles.subCatTxt}>{businessTypes[1].optionName}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onPressOptions(businessTypes[0])}
            style={styles.subCatVw}
          >
            <IconX
              origin={businessTypes[0].origin}
              name={businessTypes[0].name}
              size={businessTypes[0].size}
              color={businessTypes[0].color}
            />
            <Text style={styles.subCatTxt}>{businessTypes[0].optionName}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default MorePageView;
