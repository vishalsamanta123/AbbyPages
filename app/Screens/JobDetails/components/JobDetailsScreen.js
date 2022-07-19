import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import {
  BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
  FONT_FAMILY_BOLD,
} from "../../../Utils/Constant";
import HTML from "react-native-render-html";

const JobDetailsScreen = (props) => {
  return (
    <View style={CommonStyles.container}>
      <Header HeaderText="Job Details" RightImg={null} />
      <View style={[CommonStyles.body]}>
        <ScrollView>
          <Image
            style={styles.bannerimg}
            resizeMode={"stretch"}
            source={{ uri: props?.details?.business_logo }}
          />
          <View style={styles.infocon}>
            <Text style={[styles.hdngtxt, { fontSize: 20 }]}>
              {props?.details?.job_title}
            </Text>
            <View style={styles.basiccon}>
              <View style={styles.basiccon}>
                <Image
                  style={styles.icon}
                  resizeMode={"contain"}
                  tintColor={
                    props?.details?.job_status == 1 ? null : YELLOW_COLOR_CODE
                  }
                  source={
                    props?.details?.job_status == 1
                      ? require("../../../Assets/verified_icon.png")
                      : require("../../../Assets/close_window_icon.png")
                  }
                />
                <Text style={[styles.text, { fontSize: 14 }]}>Verified</Text>
              </View>
              <View style={styles.basiccon}>
                <Image
                  style={[styles.icon, { width: 20 }]}
                  source={require("../../../Assets/viewed_icon.png")}
                />
                <Text style={[styles.text, { fontSize: 14 }]}>
                  {props?.details?.job_views} Viewed
                </Text>
              </View>
            </View>
            <View style={styles.basiccon}>
              <Image
                resizeMode={"contain"}
                style={[styles.icon, { height: 15, width: 15 }]}
                source={require("../../../Assets/clock_icon.png")}
              />
              <Text style={[styles.text, { fontSize: 14 }]}>
                {props?.details?.address}
              </Text>
            </View>
            <Button
              style={{
                marginBottom: 6,
                width: "100%",
                marginTop: 8,
              }}
              onPress={() => props.compareFun()}
              buttonText="Compare"
            />
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
                <Image source={require("../../../Assets/save_icon.png")} />
                <Text style={[styles.text, { color: BLACK_COLOR_CODE }]}>
                  Report
                </Text>
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
                  source={require("../../../Assets/share_icon.png")}
                />
                <Text style={[styles.text, { color: BLACK_COLOR_CODE }]}>
                  Share
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.saveJob()}
                style={styles.btnmncon}
              >
                <Image source={require("../../../Assets/save_icon.png")} />
                <Text style={[styles.text, { color: BLACK_COLOR_CODE }]}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.maincontainers}>
            <Text style={styles.hdngtxt}>Recruitment Information</Text>
            <View style={styles.basiccon}>
              <View style={styles.descriptioncon}>
                <Image
                  style={styles.icon}
                  source={require("../../../Assets/musical-sign-of-one-dots.png")}
                />
                <Text style={[styles.hdngtxt, { fontSize: 15 }]}>
                  Work Location :
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.text}>{props?.details?.job_address}</Text>
              </View>
            </View>
            <View style={styles.basiccon}>
              <View style={styles.descriptioncon}>
                <Image
                  style={styles.icon}
                  source={require("../../../Assets/musical-sign-of-one-dots.png")}
                />
                <Text style={[styles.hdngtxt, { fontSize: 15 }]}>
                  Industry :
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.text}>{props?.details?.company_name}</Text>
              </View>
            </View>
            <View style={styles.basiccon}>
              <View style={styles.descriptioncon}>
                <Image
                  style={styles.icon}
                  source={require("../../../Assets/musical-sign-of-one-dots.png")}
                />
                <Text style={[styles.hdngtxt, { fontSize: 15 }]}>
                  Job Level :
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.text}>{props?.details?.job_level}</Text>
              </View>
            </View>
            <View style={styles.basiccon}>
              <View style={styles.descriptioncon}>
                <Image
                  style={styles.icon}
                  source={require("../../../Assets/musical-sign-of-one-dots.png")}
                />
                <Text style={[styles.hdngtxt, { fontSize: 15 }]}>Type:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
                  {props?.details?.job_type}
                </Text>
              </View>
            </View>
            <View style={styles.basiccon}>
              <View style={styles.descriptioncon}>
                <Image
                  style={styles.icon}
                  source={require("../../../Assets/musical-sign-of-one-dots.png")}
                />
                <Text style={[styles.hdngtxt, { fontSize: 15 }]}>Salary :</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
                  ${props?.details?.monthly_in_hand_salary_from} - $
                  {props?.details?.monthly_in_hand_salary_to}
                </Text>
              </View>
            </View>
            <View style={styles.basiccon}>
              <View style={styles.descriptioncon}>
                <Image
                  style={styles.icon}
                  source={require("../../../Assets/musical-sign-of-one-dots.png")}
                />
                <Text style={[styles.hdngtxt, { fontSize: 15 }]}>
                  Skills Requires :
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.text}>{props?.details?.skills}</Text>
              </View>
            </View>
            <View style={styles.basiccon}>
              <View style={styles.descriptioncon}>
                <Image
                  style={styles.icon}
                  source={require("../../../Assets/musical-sign-of-one-dots.png")}
                />
                <Text style={[styles.hdngtxt, { fontSize: 15 }]}>
                  Language :
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.text}>{props?.details?.language}</Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.maincontainers, { paddingRight: 30, padding: 0 }]}
          >
            <Text style={[styles.hdngtxt, { marginLeft: 20 }]}>
              Job Description
            </Text>
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
            <Text style={[styles.hdngtxt, { marginLeft: 20 }]}>
              Job Requirement
            </Text>
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
            <Text style={styles.hdngtxt}>Arates Property Company</Text>
            <View style={[styles.basiccon, { padding: 5 }]}>
              <Image
                resizeMode="contain"
                style={styles.icon}
                source={require("../../../Assets/map_field_icon.png")}
              />
              <Text style={styles.text}>{props?.details?.job_address}</Text>
            </View>
            <View style={[styles.basiccon, { padding: 5 }]}>
              <Image
                style={styles.icon}
                source={require("../../../Assets/info_call_icon.png")}
              />
              <Text style={styles.text}>{props?.details?.phone_no}</Text>
            </View>
            <View style={[styles.basiccon, { padding: 5 }]}>
              <Image
                style={styles.icon}
                source={require("../../../Assets/info_globe_icon.png")}
              />
              <Text style={styles.text}>{props?.details?.website}</Text>
            </View>
          </View>
          <View style={[styles.maincontainers, { borderBottomWidth: 0 }]}>
            <Text style={styles.hdngtxt}>Business Hours</Text>
            {props?.details?.business_time?.map((item) => {
              return (
                <View style={styles.basiccon}>
                  <View style={styles.descriptioncon}>
                    <Text
                      style={[
                        styles.text,
                        { fontSize: 15, fontFamily: FONT_FAMILY_BOLD },
                      ]}
                    >
                      {item.day}
                    </Text>
                  </View>
                  <View style={{ flex: 4 }}>
                    <Text style={styles.text}>
                      {item.open_time} - {item.close_time}
                    </Text>
                  </View>
                </View>
              );
            })}
            {props?.details?.business_time?.length < 1 && (
              <Text style={styles.noTimeTxt}>
                No Time Details Available for this Job
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default JobDetailsScreen;
