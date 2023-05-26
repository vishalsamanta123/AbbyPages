import React, { useState, useEffect } from "react";
import { View, FlatList, Image, Text, ScrollView } from "react-native";
import styles from "./styles";
import CommonStyles from "../../../../Utils/CommonStyles";
import moment from "moment";
import Header from "../../../../Components/Header";
import {
  SMALL_TEXT_COLOR_CODE,
  YELLOW_COLOR_CODE,
  FONT_SIZE,
  COLORS,
} from "../../../../Utils/Constant";
import Button from "../../../../Components/Button";
import { Images } from "../../../../Utils/images";
import MainHeader from "../../../../Components/MainHeader";
import ScaleText from "../../../../Components/ScaleText";
import PageScroll from "../../../../Components/PageScroll";

const JobOrderDetails = (props) => {
  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      ?.toString()
      ?.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time?.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  }
  return (
    <View style={CommonStyles.container}>
      <MainHeader
        headerText={"Order Detail"}
        fontSize={FONT_SIZE.medium}
        loginButton={false}
        isLogin={true}
      />
      <PageScroll contentContainerStyle={{ flexGrow: 1 }}>
        {props?.orderDetail?.business_image && (
          <Image
            style={styles.restoImg}
            resizeMode="stretch"
            source={{ uri: props?.orderDetail?.business_image }}
          />
        )}
        <View
          style={[
            styles.mainContentVw,
            { flexDirection: "row", justifyContent: "space-between" },
          ]}
        >
          <ScaleText style={styles.sectionHead}>Job Details</ScaleText>
          <ScaleText>
            Job Status:{" "}
            {props.orderDetail.apply_job_info.job_approved == 0
              ? "Pending"
              : props.orderDetail.apply_job_info.job_approved == 1
              ? "Accepted"
              : props.orderDetail.apply_job_info.job_approved == 2
              ? "In-Process"
              : props.orderDetail.apply_job_info.job_approved == 3
              ? "Canceled By You"
              : props.orderDetail.apply_job_info.job_approved == 4
              ? "Job Canceled By Job Owner"
              : props.orderDetail.apply_job_info.job_approved == 5
              ? "Job Assigned"
              : props.orderDetail.apply_job_info.job_approved == 6
              ? "Job Confirmed"
              : props.orderDetail.apply_job_info.job_approved == 7
              ? "Reschedule Status Pending"
              : ""}
          </ScaleText>
        </View>
        {props.orderDetail &&
          props.orderDetail?.apply_job_info?.interview_date && (
            <View style={styles.mainContentVw}>
              <View style={styles.interviewHead}>
                <ScaleText style={styles.sectionHead}>Interview Details:</ScaleText>
                {props.orderDetail?.apply_job_info?.applicant_job_status ==
                1 ? (
                  <Text style={styles.detailTxt}>Accepted</Text>
                ) : props.orderDetail?.apply_job_info?.applicant_job_status ==
                  2 ? (
                  <Text style={styles.detailTxt}>Rejected</Text>
                ) : props.orderDetail?.apply_job_info?.applicant_job_status ==
                  3 ? (
                  <Text style={styles.detailTxt}>Request For Rescedule</Text>
                ) : null}
              </View>
              <Text style={styles.detailTxt}>
                <Text style={styles.detailTitleTxt}>Interview Date : </Text>
                {moment(
                  props.orderDetail?.apply_job_info?.interview_date
                ).format("MMM, DD YYYY")}
              </Text>
              {props.orderDetail.total_amount !== null && (
                <Text style={styles.detailTxt}>
                  <Text style={styles.detailTitleTxt}>Interview Time : </Text>
                  {tConvert(props.orderDetail?.apply_job_info?.interview_time)}
                </Text>
              )}
              {props.orderDetail?.apply_job_info?.description && (
                <Text style={styles.detailTxt}>
                  <Text style={styles.detailTitleTxt}>Description :</Text>
                  {props.orderDetail?.apply_job_info?.description}
                </Text>
              )}
              {props.orderDetail?.apply_job_info?.applicant_job_status !== 1 &&
                (props.orderDetail?.apply_job_info?.job_approved !== 0 ||
                  props.orderDetail?.apply_job_info?.applicant_job_status ==
                    3 ||
                  props.orderDetail?.apply_job_info?.applicant_job_status ==
                    2) &&
                props.orderDetail?.apply_job_info?.job_approved !== 4 && (
                  <View style={styles.interviewHead}>
                    {props.orderDetail?.apply_job_info?.applicant_job_status ==
                    3 ? (
                      <ScaleText
                        className="mr-2"
                        style={{
                          color: "dodgerblue",
                        }}
                      >
                        You requested for reschedule the interview on{" "}
                        {moment(
                          props.orderDetail.applicant_request_date
                        ).format("MMM, DD YYYY ")}
                        .
                      </ScaleText>
                    ) : props.orderDetail?.apply_job_info
                        ?.applicant_job_status == 2 ? (
                      <ScaleText
                        className="mr-2"
                        style={{
                          color: "dodgerblue",
                        }}
                      >
                        You Rejected this job interview.
                      </ScaleText>
                    ) : (
                      ""
                    )}
                    <Button
                      style={[
                        styles.bttnsVw,
                        { backgroundColor: COLORS.YELLOW },
                      ]}
                      // onPress={() => props.setCancelOrder(true)}
                      buttonLabelStyle={styles.bttnsTxt}
                      buttonText={"Click to confirm"}
                      paddingHeight={7}
                    />
                  </View>
                )}
              {/* {props?.orderDetail?.order_status === 3 ||
              props?.orderDetail?.order_status === 5 ||
              props?.orderDetail?.order_status === 4 ? null : (
                <View style={{ marginTop: 10 }}>
                  <Button
                    style={[styles.bttnsVw, { backgroundColor: COLORS.YELLOW }]}
                    // onPress={() => props.setCancelOrder(true)}
                    buttonLabelStyle={styles.bttnsTxt}
                    buttonText={"Click to confirm"}
                    paddingHeight={7}
                  />
                </View>
              )} */}
            </View>
          )}
        <View style={styles.mainContentVw}>
          <ScaleText style={styles.sectionHead}>Company Details:</ScaleText>
          <View style={[styles.companyDetailView, { marginTop: 10 }]}>
            <View style={[styles.itemImgCon, { flex: 2 }]}>
              <Image
                style={styles.DishImgeStyle}
                source={{ uri: props.orderDetail.logo }}
              />
            </View>
            <View style={{ marginLeft: 20, flex: 6 }}>
              <Text style={styles.detailTxt}>
                <Text style={styles.detailTitleTxt}>Company Name : </Text>
                {props.orderDetail.business_name}
              </Text>
              {props.orderDetail.email !== null && (
                <Text style={styles.detailTxt} numberOfLines={1}>
                  <Text style={styles.detailTitleTxt}>Email : </Text>
                  {props.orderDetail.email}
                </Text>
              )}
              {props.orderDetail.business_phone && (
                <Text style={styles.detailTxt}>
                  <Text style={styles.detailTitleTxt}>Phone :</Text>
                  {props.orderDetail.business_phone}
                </Text>
              )}
              {props.orderDetail.business_address && (
                <Text style={styles.detailTxt}>
                  <Text style={styles.detailTitleTxt}>Address :</Text>
                  {props.orderDetail.business_address}
                </Text>
              )}
            </View>
          </View>
        </View>
        <View style={styles.mainContentVw}>
          <ScaleText style={styles.sectionHead}>Job Details:</ScaleText>
          <View style={[{ marginTop: 10 }]}>
            <Text style={styles.detailTxt}>
              <Text style={styles.detailTitleTxt}>Job Title : </Text>
              {props.orderDetail.job_details.job_title}
            </Text>
            {props.orderDetail.job_details.job_description !== null && (
              <Text style={styles.detailTxt}>
                <Text style={styles.detailTitleTxt}>Job Description : </Text>
                {props.orderDetail.job_details.job_description}
              </Text>
            )}
            {props.orderDetail.job_details.skills && (
              <Text style={styles.detailTxt}>
                <Text style={styles.detailTitleTxt}>Skills : </Text>
                {props.orderDetail.job_details.skills}
              </Text>
            )}
            {props.orderDetail.business_phone && (
              <Text style={styles.detailTxt}>
                <Text style={styles.detailTitleTxt}>Salary : </Text>
                {props.orderDetail.job_details.monthly_in_hand_salary_from +
                  " - " +
                  props.orderDetail.job_details.monthly_in_hand_salary_to}
              </Text>
            )}
            {props.orderDetail.job_details.email && (
              <Text style={styles.detailTxt}>
                <Text style={styles.detailTitleTxt}>Email : </Text>
                {props.orderDetail.job_details.email}
              </Text>
            )}
            {props.orderDetail.job_details.job_address && (
              <Text style={styles.detailTxt}>
                <Text style={styles.detailTitleTxt}>Address : </Text>
                {props.orderDetail.job_details.job_address}
              </Text>
            )}
            {props.orderDetail.job_details.city_name && (
              <Text style={styles.detailTxt}>
                <Text style={styles.detailTitleTxt}>Location : </Text>
                {props.orderDetail.job_details.city_name}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.mainContentVw}>
          <ScaleText style={styles.sectionHead}>User Info:</ScaleText>
          <View style={[{ marginTop: 10 }]}>
            {props.orderDetail.apply_job_info.user_name && (
              <Text style={styles.detailTxt}>
                <Text style={styles.detailTitleTxt}>Name : </Text>
                {props.orderDetail.apply_job_info.user_name}
              </Text>
            )}
            {props.orderDetail.apply_job_info.email && (
              <Text style={styles.detailTxt}>
                <Text style={styles.detailTitleTxt}>Email : </Text>
                {props.orderDetail.apply_job_info.email}
              </Text>
            )}
            {props.orderDetail.apply_job_info.phone && (
              <Text style={styles.detailTxt}>
                <Text style={styles.detailTitleTxt}>Mobile : </Text>
                {props.orderDetail.apply_job_info.phone}
              </Text>
            )}
          </View>
        </View>
      </PageScroll>
    </View>
  );
};

export default JobOrderDetails;
