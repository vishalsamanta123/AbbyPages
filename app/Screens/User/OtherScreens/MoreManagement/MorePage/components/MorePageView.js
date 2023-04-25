import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import CommonStyles from "../../../../../../Utils/CommonStyles";
import { businessTypes } from "../../../../../../Utils/staticData";
import { IconX } from "../../../../../../Components/Icons/Icon";
import Loader from "../../../../../../Utils/Loader";
import MainHeader from "../../../../../../Components/MainHeader";
import EmptyList from "../../../../../../Components/EmptyList";

const MorePageView = (props) => {
  const [recentViewNo, setRecentViewNo] = useState(4);
  return (
    <>
      <MainHeader />
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
          <Text style={[styles.headTxt, { textAlign: "left" }]}>
            Recently Viewed
          </Text>
          {props?.recent_view?.length > 0 ? (
            <>
              {props?.recent_view?.slice(0, recentViewNo)?.map((item) => {
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
                    <View style={{ width: "92%" }}>
                      <Text style={styles.listTxt}>{item.business_name}</Text>
                      <Text numberOfLines={2} style={styles.listSmallTxt}>
                        {item.address}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
              <TouchableOpacity
                onPress={() => {
                  setRecentViewNo(10);
                }}
                style={styles.seeMoreBttn}
              >
                <Text style={styles.seeMoreBttnTxt}>See More</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <EmptyList message={"Recently View"} height={45} />
            </>
          )}
          <>
            {props?.visible ? (
              <>
                <Loader state={props?.visible} type={"small"} />
              </>
            ) : null}
          </>
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
