import React from "react";
import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_BOLD,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import HTML from "react-native-render-html";
import { Images } from "../../../Utils/images";
import ScaleText from "../../../../../Components/ScaleText";

const JobDetailsScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Job Details"
        RightImg={null}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
      />
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <Image
            style={styles.bannerimg}
            resizeMode={"stretch"}
            source={{ uri: props?.details?.business_logo }}
          />
          <View style={styles.infocon}>
            <ScaleText style={[styles.hdngtxt, { fontSize: 20 }]}>
              {props?.details?.job_title}
            </ScaleText>
            <View style={styles.basiccon}>
              <View style={styles.basiccon}>
                <Image
                  style={[styles.icon, { tintColor: YELLOW_COLOR_CODE }]}
                  resizeMode={"contain"}
                  source={
                    props?.details?.job_status == 1
                      ? Images.VERIFIED_IMG
                      : Images.CANCEL_IMG
                  }
                />
                <ScaleText style={[styles.text, { fontSize: 14 }]}>
                  Verified
                </ScaleText>
              </View>
              <View style={styles.basiccon}>
                <Image
                  style={[styles.icon, { width: 20 }]}
                  source={Images.VIEW_EYE_IMG}
                />
                <ScaleText style={[styles.text, { fontSize: 14 }]}>
                  {props?.details?.job_views} Viewed
                </ScaleText>
              </View>
            </View>
            <View style={styles.basiccon}>
              <Image
                resizeMode={"contain"}
                style={[styles.icon, { height: 15, width: 15 }]}
                source={Images.CLOCK_IMG}
              />
              <ScaleText style={[styles.text, { fontSize: 14 }]}>
                {props?.details?.address}
              </ScaleText>
            </View>
            {/* <Button
              style={{
                marginBottom: 6,
                width: "100%",
                marginTop: 8,
              }}
              onPress={() => props.compareFun()}
              buttonText="Compare"
            /> */}
            <Button
              style={{
                marginBottom: 8,
                width: "100%",
                marginTop: 6,
              }}
              buttonText="Apply Now"
              onPress={() => props.applyNow()}
            />
            <View
              style={[
                styles.basiccon,
                {
                  marginBottom: 10,
                  marginTop: 15,
                  justifyContent: "space-around",
                },
              ]}
            >
              <View
                style={[
                  styles.btnmncon,
                  { borderRightWidth: 1, borderColor: "lightgrey" },
                ]}
              >
                <Image source={Images.SAVED_IMG} />
                <ScaleText style={[styles.text, { color: BLACK_COLOR_CODE }]}>
                  Report
                </ScaleText>
              </View>
              <TouchableOpacity
                onPress={() => props.shareTo()}
                style={[
                  styles.btnmncon,
                  { borderRightWidth: 1, borderColor: "lightgrey" },
                ]}
              >
                <Image
                  style={[styles.icon, { height: 22, width: 25 }]}
                  source={Images.SHARE_IMG}
                />
                <ScaleText style={[styles.text, { color: BLACK_COLOR_CODE }]}>
                  Share
                </ScaleText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.saveJob()}
                style={styles.btnmncon}
              >
                <Image
                  style={{
                    tintColor:
                      props?.details?.user_like === 1
                        ? YELLOW_COLOR_CODE
                        : null,
                  }}
                  source={Images.SAVED_IMG}
                />
                <ScaleText style={[styles.text, { color: BLACK_COLOR_CODE }]}>
                  {props?.details?.user_like === 1 ? "Saved" : "Save"}
                </ScaleText>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.maincontainers}>
            <ScaleText style={styles.hdngtxt}>
              Recruitment Information
            </ScaleText>
            <View style={styles.basiccon}>
              <View style={styles.descriptioncon}>
                <ScaleText style={CommonStyles.dotTxt}>{"\u2B24"}</ScaleText>
                <ScaleText style={[styles.hdngtxt, { fontSize: 15 }]}>
                  Work Location :
                </ScaleText>
              </View>
              <View style={{ flex: 1 }}>
                <ScaleText style={styles.text}>
                  {props?.details?.job_address}
                </ScaleText>
              </View>
            </View>
            <View style={styles.basiccon}>
              <View style={styles.descriptioncon}>
                <ScaleText style={CommonStyles.dotTxt}>{"\u2B24"}</ScaleText>
                <ScaleText style={[styles.hdngtxt, { fontSize: 15 }]}>
                  Industry :
                </ScaleText>
              </View>
              <View style={{ flex: 1 }}>
                <ScaleText style={styles.text}>
                  {props?.details?.company_name}
                </ScaleText>
              </View>
            </View>
            <View style={styles.basiccon}>
              <View style={styles.descriptioncon}>
                <ScaleText style={CommonStyles.dotTxt}>{"\u2B24"}</ScaleText>
                <ScaleText style={[styles.hdngtxt, { fontSize: 15 }]}>
                  Job Level :
                </ScaleText>
              </View>
              <View style={{ flex: 1 }}>
                <ScaleText style={styles.text}>
                  {props?.details?.job_level}
                </ScaleText>
              </View>
            </View>
            <View style={styles.basiccon}>
              <View style={styles.descriptioncon}>
                <ScaleText style={CommonStyles.dotTxt}>{"\u2B24"}</ScaleText>
                <ScaleText style={[styles.hdngtxt, { fontSize: 15 }]}>
                  Type:
                </ScaleText>
              </View>
              <View style={{ flex: 1 }}>
                <ScaleText style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
                  {props?.details?.job_type == 1 || "Full Time"
                    ? "Full Time"
                    : props?.details?.job_type == 2
                    ? "Part Time"
                    : props?.details?.job_type == 3
                    ? "Intership"
                    : props?.details?.job_type == 4
                    ? "Freelancer"
                    : "Work"}
                </ScaleText>
              </View>
            </View>
            <View style={styles.basiccon}>
              <View style={styles.descriptioncon}>
                <ScaleText style={CommonStyles.dotTxt}>{"\u2B24"}</ScaleText>
                <ScaleText style={[styles.hdngtxt, { fontSize: 15 }]}>
                  Salary :
                </ScaleText>
              </View>
              <View style={{ flex: 1 }}>
                <ScaleText style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
                  $
                  {Number(
                    parseFloat(
                      props?.details?.monthly_in_hand_salary_from
                    ).toFixed(2)
                  ).toLocaleString("en", {
                    minimumFractionDigits: 2,
                  })}{" "}
                  - $
                  {Number(
                    parseFloat(
                      props?.details?.monthly_in_hand_salary_to
                    ).toFixed(2)
                  ).toLocaleString("en", {
                    minimumFractionDigits: 2,
                  })}
                </ScaleText>
              </View>
            </View>
            <View style={styles.basiccon}>
              <View style={styles.descriptioncon}>
                <ScaleText style={CommonStyles.dotTxt}>{"\u2B24"}</ScaleText>
                <ScaleText style={[styles.hdngtxt, { fontSize: 15 }]}>
                  Skills Requires :
                </ScaleText>
              </View>
              <View style={{ flex: 1 }}>
                <ScaleText style={styles.text}>
                  {props?.details?.skills}
                </ScaleText>
              </View>
            </View>
            <View style={styles.basiccon}>
              <View style={styles.descriptioncon}>
                <ScaleText style={CommonStyles.dotTxt}>{"\u2B24"}</ScaleText>
                <ScaleText style={[styles.hdngtxt, { fontSize: 15 }]}>
                  Language :
                </ScaleText>
              </View>
              <View style={{ flex: 1 }}>
                <ScaleText style={styles.text}>
                  {props?.details?.language}
                </ScaleText>
              </View>
            </View>
          </View>
          <View
            style={[styles.maincontainers, { paddingRight: 30, padding: 0 }]}
          >
            <ScaleText style={[styles.hdngtxt, { marginLeft: 20 }]}>
              Job Description
            </ScaleText>
            <View style={[styles.basiccon, { paddingLeft: 10 }]}>
              <HTML
                contentWidth={50}
                source={{
                  html: props?.details?.job_description,
                }}
              />
            </View>
          </View>
          <View
            style={[styles.maincontainers, { paddingRight: 30, padding: 0 }]}
          >
            <ScaleText style={[styles.hdngtxt, { marginLeft: 20 }]}>
              Job Requirement
            </ScaleText>
            <View style={[styles.basiccon, { paddingLeft: 10 }]}>
              <HTML
                contentWidth={50}
                source={{
                  html: props?.details?.job_requirements,
                }}
              />
            </View>
          </View>
          <View style={styles.maincontainers}>
            <ScaleText style={styles.hdngtxt}>
              Arates Property Company
            </ScaleText>
            <View style={[styles.basiccon, { padding: 5 }]}>
              <Image
                resizeMode="contain"
                style={styles.icon}
                source={Images.LOCATION_IMG}
              />
              <ScaleText style={styles.text}>
                {props?.details?.job_address}
              </ScaleText>
            </View>
            <View style={[styles.basiccon, { padding: 5 }]}>
              <Image style={styles.icon} source={Images.CALL_IMG} />
              <ScaleText style={styles.text}>
                {props?.details?.phone_no}
              </ScaleText>
            </View>
            <View style={[styles.basiccon, { padding: 5 }]}>
              <Image style={styles.icon} source={Images.GLOBE_IMG} />
              <ScaleText style={styles.text}>
                {props?.details?.website}
              </ScaleText>
            </View>
          </View>
          <View style={[styles.maincontainers, { borderBottomWidth: 0 }]}>
            <ScaleText style={styles.hdngtxt}>Business Hours</ScaleText>
            {props?.details?.business_time?.map((item) => {
              return (
                <View style={styles.basiccon}>
                  <View style={styles.descriptioncon}>
                    <ScaleText
                      style={[
                        styles.text,
                        { fontSize: 15, fontFamily: FONT_FAMILY_BOLD },
                      ]}
                    >
                      {item.day}
                    </ScaleText>
                  </View>
                  <View style={{ flex: 4 }}>
                    <ScaleText style={styles.text}>
                      {item.open_time} - {item.close_time}
                    </ScaleText>
                  </View>
                </View>
              );
            })}
            {props?.details?.business_time?.length < 1 && (
              <ScaleText style={styles.noTimeTxt}>
                No Time Details Available for this Job
              </ScaleText>
            )}
          </View>
          {props?.details?.related_job && (
            <>
              <ScaleText style={styles.relatedItemsTxt}>Related Jobs</ScaleText>
              <View style={styles.relatedItems}>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  contentContainerStyle={{ flexGrow: 1 }}
                >
                  {props?.details?.related_job.map((item) => {
                    return (
                      <TouchableOpacity
                        onPress={() => props.onPressJob(item)}
                        style={styles.mainConatiner}
                      >
                        <Image
                          style={styles.mainImgeStyle}
                          resizeMode="contain"
                          source={{
                            uri: item.business_logo,
                          }}
                        />
                        <View style={styles.mainConatinerView}>
                          <ScaleText style={styles.mainServiceName}>
                            {item.company_name}
                          </ScaleText>
                          <ScaleText
                            numberOfLines={1}
                            style={styles.addressTxtStyle}
                          >
                            {item.job_address}
                          </ScaleText>
                          <ScaleText
                            numberOfLines={2}
                            style={styles.jobTypeTxt}
                          >
                            {item.job_type == 1 || "Full Time"
                              ? "Full Time"
                              : item.job_type == 2
                              ? "Part Time"
                              : item.job_type == 3
                              ? "Intership"
                              : item.job_type == 4
                              ? "Freelancer"
                              : "Work"}
                          </ScaleText>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            </>
          )}
          {props?.details?.recently_applyed_job && (
            <>
              <ScaleText style={[styles.relatedItemsTxt, { marginTop: 0 }]}>
                Recently Viewed Jobs
              </ScaleText>
              <View style={styles.relatedItems}>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  // horizontal
                  contentContainerStyle={{ flexGrow: 1 }}
                >
                  {props?.details?.recently_applyed_job.map((item) => {
                    return (
                      <TouchableOpacity
                        onPress={() => props.onPressJob(item)}
                        style={styles.mainConatiner}
                      >
                        <View>
                          <Image
                            style={styles.mainImgeStyle}
                            resizeMode="contain"
                            source={{
                              uri: item.business_logo,
                            }}
                          />
                        </View>
                        <View style={styles.mainConatinerView}>
                          <ScaleText style={styles.mainServiceName}>
                            {item.category_name}
                          </ScaleText>
                          <ScaleText
                            numberOfLines={1}
                            style={styles.addressTxtStyle}
                          >
                            {item.city_name}
                          </ScaleText>
                          <ScaleText
                            numberOfLines={2}
                            style={styles.jobTypeTxt}
                          >
                            {item.job_type == 1 || "Full Time"
                              ? "Full Time"
                              : item.job_type == 2
                              ? "Part Time"
                              : item.job_type == 3
                              ? "Intership"
                              : item.job_type == 4
                              ? "Freelancer"
                              : "Work"}
                          </ScaleText>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            </>
          )}
        </ScrollView>
      </View>
    </View>
  );
};
export default JobDetailsScreen;
