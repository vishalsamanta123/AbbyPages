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
import ScaleText from "../../../../../../Components/ScaleText";
import { MenuRecent } from "../../../../../../Components/ShimmerEffect";
import PageScroll from "../../../../../../Components/PageScroll";

const MenuPageView = (props) => {
  const [recentViewNo, setRecentViewNo] = useState(3);
  return (
    <>
      <MainHeader headerType={"logo"} />
      <PageScroll contentContainerStyle={CommonStyles.otherScrollCon}>
        <View style={styles.mainContainer}>
          {props?.userData?.login_type ? (
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
                    source={{ uri: props?.userData?.profile_image }}
                    style={styles.profileImgVw}
                    resizeMode={"cover"}
                  />
                  <View>
                    <ScaleText style={styles.profileTxt}>
                      {props?.userData?.first_name +
                        " " +
                        props?.userData?.last_name}
                    </ScaleText>
                  </View>
                </View>
                <TouchableOpacity onPress={() => props.setLogoutVw(true)}>
                  <IconX
                    origin={ICON_TYPE.FONT_AWESOME}
                    name="power-off"
                    color={COLORS.BLUE}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.seeAllVw} onPress={() => props.handleSeeProfilePress()}>
                <ScaleText style={styles.seeAllTxt}>See Profile</ScaleText>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => props.handleSignupLogin()}
              style={styles.centerButton}
            >
              <ScaleText style={styles.centerButtonTxt}>
                Sign Up or Log In
              </ScaleText>
            </TouchableOpacity>
          )}
          <ScaleText style={[styles.headTxt, { right: 5, textAlign: "left" }]}>
            Recently Viewed
          </ScaleText>
          {props?.visible ? (
            <MenuRecent />
          ) : (
            <>
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
                          <ScaleText style={styles.listTxt}>
                            {item.business_name}
                          </ScaleText>
                          <ScaleText
                            numberOfLines={2}
                            style={styles.listSmallTxt}
                          >
                            {item.address?.trim()}
                          </ScaleText>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                  {props?.visible ? (
                    <>
                      <Loader state={props?.visible} type={"small"} />
                    </>
                  ) : null}
                  {recentViewNo <= 3 ? (
                    <TouchableOpacity
                      onPress={() => {
                        setRecentViewNo(10);
                      }}
                      style={styles.seeMoreBttn}
                    >
                      <ScaleText style={styles.seeMoreBttnTxt}>
                        See More
                      </ScaleText>
                    </TouchableOpacity>
                  ) : null}
                </>
              ) : (
                <EmptyList
                  alignItems={"flex-start"}
                  height={24}
                  marginLeft={16}
                  message={"Views"}
                />
              )}
            </>
          )}
          <View style={{ marginTop: 20 }}>
            <ScaleText style={[styles.headTxt, {}]}>Menu</ScaleText>
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
                  <ScaleText style={styles.subCatTxt}>
                    {item.optionName}
                  </ScaleText>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </PageScroll>
    </>
  );
};

export default MenuPageView;
