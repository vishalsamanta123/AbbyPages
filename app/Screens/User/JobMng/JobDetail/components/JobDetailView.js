import React from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import HTML from "react-native-render-html";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import { COLORS, Constants } from "../../../../../Utils/Constant";
import MainButton from "../../../../../Components/MainButton";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import {
  getAmount,
  handleBusinessShow,
  removeHttp,
} from "../../../../../Utils/Globalfunctions";
import PageScroll from "../../../../../Components/PageScroll";
import BackImage from "../../../../../Components/BackImage";

const JobDetailView = (props) => {
  return (
    <View style={CommonStyles.container}>
      <PageScroll
        scrollToTop={true}
        contentContainerStyle={CommonStyles.scrollCon}
      >
        <BackImage
          style={{
            width: Constants.windowWidth,
            height: Constants.Ios ? 260 : 200,
          }}
          resizeMode={"cover"}
          source={{ uri: props?.jobDetail?.header_image }}
        >
          <MainHeader
            backgroundColor={COLORS.TRANSPARENT}
            isSearch={false}
            backIconColor={COLORS.WHITE}
            backTxtColor={COLORS.WHITE}
            loginButton={false}
          />
        </BackImage>
        <View style={styles.containerVw}>
          <View style={styles.roundImgVw}>
            <Image
              source={{ uri: props?.jobDetail?.business_logo }}
              style={styles.roundImg}
            />
          </View>
          <View style={[CommonStyles.straightCon, styles.topBttnVw]}>
            <MainButton
              buttonTxt={"Apply Now"}
              onPressButton={() => props.applyNowPress()}
              borderColor={COLORS.LIGHT_GREY}
              txtColor={COLORS.BLACK}
            />
            <TouchableOpacity
              onPress={() => props.onPressLike(props?.jobDetail)}
            >
              <IconX
                origin={ICON_TYPE.ANT_ICON}
                name={props?.jobDetail?.user_like === 1 ? "heart" : "hearto"}
                paddingLeft={10}
                size={28}
                color={props?.jobDetail?.user_like === 1 ? COLORS.YELLOW : null}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: "6%" }}>
            <ScaleText style={styles.tileTxt}>
              {props?.jobDetail?.company_name}
            </ScaleText>
            <TouchableOpacity
              onPress={() =>
                handleBusinessShow(props?.jobDetail, "", props.navigation)
              }
            >
              <ScaleText style={styles.titledTxt}>
                By {props?.jobDetail?.business_name}
              </ScaleText>
              <ScaleText style={styles.smallTxt}>
                {props?.jobDetail?.address}
              </ScaleText>
            </TouchableOpacity>
            <View style={{ marginTop: 20 }}>
              <View style={CommonStyles.straightCon}>
                <ScaleText style={styles.headTxt}>Job View</ScaleText>
              </View>
              <ScaleText style={styles.tileTxt}>
                {props?.jobDetail?.job_title}
              </ScaleText>
              <ScaleText style={styles.subTxt}>
                {props?.jobDetail?.job_type === "1"
                  ? "Fixed Term Freelance"
                  : props?.jobDetail?.job_type === "2"
                  ? "Paid Freelance"
                  : props?.jobDetail?.job_type === "3"
                  ? "Unpaid Full Time"
                  : props?.jobDetail?.job_type === "4"
                  ? "Paid Internship"
                  : props?.jobDetail?.job_type === "5"
                  ? "Part Time Temporary"
                  : props?.jobDetail?.job_type === "6"
                  ? "Unpaid Internship"
                  : "Not Found"}
              </ScaleText>
            </View>
          </View>
        </View>
        <View style={styles.containerVw}>
          <View style={CommonStyles.straightCon}>
            <ScaleText style={styles.headTxt}>
              Recruitment Information
            </ScaleText>
          </View>
          <View style={[styles.rowTxtVws, { marginTop: 10 }]}>
            <View style={[CommonStyles.straightCon, { flex: 1 }]}>
              <ScaleText style={CommonStyles.dotTxt}>
                {Constants.dot}{" "}
              </ScaleText>
              <ScaleText style={styles.subTitleTxt}>Work Location:</ScaleText>
            </View>
            <View style={{ flex: 1 }}>
              <ScaleText style={styles.subSmallTxt}>
                {props?.jobDetail?.job_address}
              </ScaleText>
            </View>
          </View>
          <View style={styles.rowTxtVws}>
            <View style={[CommonStyles.straightCon, { flex: 1 }]}>
              <ScaleText style={CommonStyles.dotTxt}>
                {Constants.dot}{" "}
              </ScaleText>
              <ScaleText style={styles.subTitleTxt}>Company Name:</ScaleText>
            </View>
            <View style={{ flex: 1 }}>
              <ScaleText style={styles.subSmallTxt}>
                {props?.jobDetail?.company_name}
              </ScaleText>
            </View>
          </View>
          <View style={styles.rowTxtVws}>
            <View style={[CommonStyles.straightCon, { flex: 1 }]}>
              <ScaleText style={CommonStyles.dotTxt}>
                {Constants.dot}{" "}
              </ScaleText>
              <ScaleText style={styles.subTitleTxt}>Website:</ScaleText>
            </View>
            <View style={{ flex: 1 }}>
              <ScaleText numberOfLines={1} style={styles.subSmallTxt}>
                {removeHttp(props?.jobDetail?.website)}
              </ScaleText>
            </View>
          </View>
          <View style={styles.rowTxtVws}>
            <View style={[CommonStyles.straightCon, { flex: 1 }]}>
              <ScaleText style={CommonStyles.dotTxt}>
                {Constants.dot}{" "}
              </ScaleText>
              <ScaleText style={styles.subTitleTxt}>Job Level:</ScaleText>
            </View>
            <View style={{ flex: 1 }}>
              <ScaleText style={styles.subSmallTxt}>
                {props?.jobDetail?.job_level}
              </ScaleText>
            </View>
          </View>
          <View style={styles.rowTxtVws}>
            <View style={[CommonStyles.straightCon, { flex: 1 }]}>
              <ScaleText style={CommonStyles.dotTxt}>
                {Constants.dot}{" "}
              </ScaleText>
              <ScaleText style={styles.subTitleTxt}>Salary:</ScaleText>
            </View>
            <View style={{ flex: 1 }}>
              <ScaleText style={styles.subSmallTxt}>
                {`$${getAmount(
                  props?.jobDetail?.monthly_in_hand_salary_from
                )} - $${getAmount(
                  props?.jobDetail?.monthly_in_hand_salary_to
                )}`}
              </ScaleText>
            </View>
          </View>
          <View style={styles.rowTxtVws}>
            <View style={[CommonStyles.straightCon, { flex: 1 }]}>
              <ScaleText style={CommonStyles.dotTxt}>
                {Constants.dot}{" "}
              </ScaleText>
              <ScaleText style={styles.subTitleTxt}>Skills Requires:</ScaleText>
            </View>
            <View style={{ flex: 1 }}>
              <ScaleText style={styles.subSmallTxt}>
                {props?.jobDetail?.skills}
              </ScaleText>
            </View>
          </View>
          <View style={styles.rowTxtVws}>
            <View style={[CommonStyles.straightCon, { flex: 1 }]}>
              <ScaleText style={CommonStyles.dotTxt}>
                {Constants.dot}{" "}
              </ScaleText>
              <ScaleText style={styles.subTitleTxt}>Language:</ScaleText>
            </View>
            <View style={{ flex: 1 }}>
              <ScaleText style={styles.subSmallTxt}>
                {props?.jobDetail?.language}
              </ScaleText>
            </View>
          </View>
        </View>
        <View style={styles.containerVw}>
          <ScaleText style={styles.headTxt}>Job Description</ScaleText>
          <View style={{ marginHorizontal: 10 }}>
            <HTML
              contentWidth={50}
              source={{
                html: props?.jobDetail?.job_description,
              }}
            />
          </View>
        </View>
        <View style={styles.containerVw}>
          <ScaleText style={styles.headTxt}>Job Requirement</ScaleText>
          <View style={{ marginHorizontal: 10 }}>
            <HTML
              contentWidth={50}
              source={{
                html: props?.jobDetail?.job_requirements,
              }}
            />
          </View>
        </View>
        <View style={styles.containerVw}>
          <ScaleText style={styles.headTxt}>Benefits</ScaleText>
          <View style={{ marginHorizontal: 10 }}>
            <HTML
              contentWidth={50}
              source={{
                html: props?.jobDetail?.job_benefits,
              }}
            />
          </View>
        </View>
        <View style={styles.containerVw}>
          <ScaleText style={styles.headTxt}>Business Hours</ScaleText>
          {props?.jobDetail?.business_time?.map((itm) => {
            return (
              <View style={styles.rowTxtVws}>
                <View style={[CommonStyles.straightCon, { flex: 1 }]}>
                  <ScaleText style={CommonStyles.dotTxt}>
                    {Constants.dot}{" "}
                  </ScaleText>
                  <ScaleText style={styles.subTitleTxt}>{itm?.day}:</ScaleText>
                </View>
                <View style={{ flex: 1 }}>
                  <ScaleText style={styles.subSmallTxt}>
                    {itm?.timeline}
                  </ScaleText>
                </View>
              </View>
            );
          })}
        </View>
      </PageScroll>
    </View>
  );
};
export default JobDetailView;

{
  /* <HTML
contentWidth={50}
source={{
  html: props?.details?.job_description,
}}
/> */
}
