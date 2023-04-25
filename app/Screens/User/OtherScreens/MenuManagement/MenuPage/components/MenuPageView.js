import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import CommonStyles from "../../../../../../Utils/CommonStyles";
import { businessTypes } from "../../../../../../Utils/staticData";
import { IconX, ICON_TYPE } from "../../../../../../Components/Icons/Icon";
import Loader from "../../../../../../Utils/Loader";
import MainHeader from "../../../../../../Components/MainHeader";
import EmptyList from "../../../../../../Components/EmptyList";
import { Images } from "../../../../../../Utils/images";
import { COLORS, Constants } from "../../../../../../Utils/Constant";

const MenuPageView = (props) => {
  const [recentViewNo, setRecentViewNo] = useState(4);
  return (
    <>
      <MainHeader />
      <ScrollView contentContainerStyle={CommonStyles.otherScrollCon}>
        <View style={styles.mainContainer}>
          {!props?.userData?.login_type ? (
            <View style={styles.profileVw}>
              <View
                style={[
                  CommonStyles.straightCon,
                  {
                    justifyContent: "space-between",
                    marginHorizontal: 5,
                  },
                ]}
              >
                <View style={CommonStyles.straightCon}>
                  <Image
                    source={Images.DEFAULT_IMG}
                    style={[styles.profileImgVw]}
                    resizeMode={"contain"}
                  />
                  {/* <Image
                    source={{ uri: props?.userData?.profile_image }}
                    style={styles.profileImgVw}
                    resizeMode={"cover"}
                  /> */}
                  <View>
                    {/* <Text style={styles.profileTxt}>
                  {props?.userData?.first_name +
                    " " +
                    props?.userData?.last_name}
                </Text>
                 */}
                    <Text style={styles.profileTxt}>{"John Deg"}</Text>
                  </View>
                </View>
                <View>
                  <IconX
                    origin={ICON_TYPE.FONT_AWESOME}
                    name="power-off"
                    color={COLORS.BLUE}
                  />
                </View>
              </View>
              <View style={styles.seeAllVw}>
                <Text style={styles.seeAllTxt}>See Profile</Text>
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

          {props?.recent_view?.length > 0 ? (
            <>
              <Text style={[styles.headTxt, { right: 5, textAlign: "left" }]}>
                Recently Viewed
              </Text>
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
              {props?.visible ? (
                <>
                  <Loader state={props?.visible} type={"small"} />
                </>
              ) : null}
            </>
          ) : null}
          <View style={{ marginTop: 20 }}>
            <Text style={[styles.headTxt, {}]}>Menu</Text>
            {businessTypes?.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => props.onPressOptions(item)}
                  style={styles.subCatVw}
                >
                  <IconX
                    origin={item.origin}
                    name={item.name}
                    size={23}
                    color={item.color}
                  />
                  <Text style={styles.subCatTxt}>{item.optionName}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MenuPageView;
