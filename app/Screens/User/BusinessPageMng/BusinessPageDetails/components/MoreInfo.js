import React, { useEffect } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  FlatList,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { COLORS } from "../../../../../Utils/Constant";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import moment from "moment";
import MainHeader from "../../../../../Components/MainHeader";
import { Images } from "../../../../../Utils/images";
import ScaleText from "../../../../../Components/ScaleText";

const MoreInfo = (props) => {
  const {
    visible = false,
    setVisible = () => {},
    type = "",
    detailData,
    moreData,
  } = props;
  const amenities = detailData?.amenities?.split(",");

  const DUMMY_DATA = [
    {
      jobRole: "Full stack developer",
      location: "mumbai, indore, hyderabad, gurgaon",
      experience: 2.5,
      createdDate: "9d ago",
    },
    {
      jobRole: "Full stack developer",
      location: "mumbai, indore, hyderabad, gurgaon",
      experience: 2.5,
      createdDate: "9d ago",
    },
    {
      jobRole: "Full stack developer",
      location: "mumbai, indore, hyderabad, gurgaon",
      experience: 2.5,
      createdDate: "9d ago",
    },
  ];

  const getJobType = (jobType) => {
    // 1 = Fixed Term Freelance ,2= Paid Freelance , 3= Unpaid Full Time ,
    // 4 = Paid Internship , 5 = Part Time Temporary , 6 = Unpaid Internship
    console.log(typeof jobType);
    let val = "";
    val =
      jobType === "1"
        ? "Fixed Term Freelance"
        : jobType === "2"
        ? "Paid Freelance"
        : jobType === "3"
        ? "Unpaid Full Time"
        : jobType === "4"
        ? "Paid Internship"
        : jobType === "5"
        ? "Part Time Temporary"
        : jobType === "6"
        ? "Unpaid Internship"
        : "Not Found";

    return val;
  };

  const renderJobs = (item) => {
    return (
      <View style={styles.availJobsView}>
        <View style={styles.jobHeadingView}>
          <View style={{ flex: 5 }}>
            <ScaleText style={styles.availJobstxt}>{item.job_title}</ScaleText>
            <View style={[CommonStyles.straightCon, { alignItems: "center" }]}>
              <IconX
                origin={ICON_TYPE.FONT_AWESOME}
                name={"shopping-bag"}
                size={20}
                color={COLORS.BLACK}
              />
              <ScaleText style={styles.availJobsExptxt}>
                {getJobType(item?.job_type)}
              </ScaleText>
            </View>
            <View style={styles.locationView}>
              <IconX
                origin={ICON_TYPE.ENTYPO}
                name={"location"}
                size={20}
                color={COLORS.BLACK}
              />
              <ScaleText style={styles.availJobslocationTxt}>
                {item.name}
              </ScaleText>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              source={Images.HOW_IT_WORKS_BANNER}
              style={styles.availjobsImage}
            />
          </View>
        </View>
      </View>
    );
  };

  const renderEvents = (item) => {
    console.log("item renderEvents", item);
    return (
      <View style={styles.eventsView}>
        <ImageBackground
          source={{ uri: item?.event_images }}
          style={styles.eventsImage}
          borderRadius={10}
          opacity={0.6}
        >
          <View style={styles.eventheadingView}>
            <ScaleText style={styles.eventsheadignTxt}>
              {item?.event_name}
            </ScaleText>
          </View>
          <TouchableOpacity style={styles.eventknowTouch}>
            <ScaleText style={styles.knowTxt}>Know more</ScaleText>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };

  return (
    <Modal visible={visible}>
      <View style={CommonStyles.container}>
        <MainHeader
          notify={props?.userData?.login_type ? true : false}
          isBack
          TxtMarginRight={25}
          headerText={type === "read" ? "Read More" : "More Info"}
          onPressBack={() => {
            setVisible({
              open: false,
              type: "",
            });
          }}
        />
        <ScrollView contentContainerStyle={[CommonStyles.otherScrollCon]}>
          {type == "info" ? (
            <>
              <View style={styles.mainContainer}>
                <ScaleText style={styles.sectionTxt}>Business Hours</ScaleText>
                <ScaleText
                  style={[
                    styles.subTitleTxt,
                    {
                      marginTop: 16,
                    },
                  ]}
                >
                  Closed now
                </ScaleText>
                {props.detailData?.business_service_time?.map((time) => {
                  return (
                    <View style={[CommonStyles.straightCon, styles.timingVw]}>
                      <View style={{ flex: 1 }}>
                        <ScaleText style={styles.titletxt}>
                          {time.day}
                        </ScaleText>
                      </View>
                      <View style={{ flex: 2, alignItems: "flex-end" }}>
                        <ScaleText style={styles.titletxt}>
                          {time.timeline}
                        </ScaleText>
                      </View>
                    </View>
                  );
                })}
                {/* <TouchableOpacity style={styles.tapButtonsVw}>
                  <ScaleText style={styles.titletxt}>Suggest an edit</ScaleText>
                </TouchableOpacity> */}
              </View>
              <View style={styles.mainContainer}>
                <ScaleText style={styles.sectionTxt}>
                  Amenities and more
                </ScaleText>
                {amenities?.map((amenty) => {
                  return (
                    <View style={[CommonStyles.straightCon, styles.timingVw]}>
                      <IconX
                        color={COLORS.BLACK}
                        origin={ICON_TYPE.FONT_AWESOME}
                        name={"dot-circle-o"}
                        size={20}
                        paddingRight={5}
                      />
                      <ScaleText style={styles.titletxt}>{amenty}</ScaleText>
                    </View>
                  );
                })}
              </View>
            </>
          ) : null}

          {/* <View style={styles.mainContainer}>
            <ScaleText style={styles.sectionTxt}>Specialist</ScaleText>
            <ScaleText style={[styles.smallTxt, { marginTop: 20 }]}>
              Our BarberShop specilised in cutting hair and cleanong face make
              up for both male and female
            </ScaleText>
          </View> */}
          <View style={styles.mainContainer}>
            <ScaleText style={styles.sectionTxt}>History</ScaleText>
            <ScaleText style={[styles.smallTxt, { marginTop: 8 }]}>
              Established in {moment(detailData?.create_date).format("YYYY")}
            </ScaleText>
          </View>
          <View style={styles.mainContainer}>
            <ScaleText style={styles.sectionTxt}>
              Meet the business owner
            </ScaleText>
            <View style={[CommonStyles.straightCon, { marginTop: 10 }]}>
              <Image
                source={require("../../../../../Assets/extraImages/demo-profile-image.png")}
                style={styles.considrImgVw}
              />
              <View>
                <ScaleText style={styles.businessNameInDetailTxt}>
                  {detailData?.business_user_name}
                </ScaleText>
                <ScaleText style={styles.smallTxt}>Business Owner</ScaleText>
              </View>
            </View>
            <ScaleText style={[styles.smallTxt, { marginTop: 8 }]}>
              {detailData?.about_business}
            </ScaleText>
          </View>
          {type === "read" ? (
            <View>
              <View style={styles.mainContainer}>
                <ScaleText style={styles.sectionTxt}>Available Jobs</ScaleText>
                <View style={[CommonStyles.straightCon, { marginTop: 10 }]}>
                  <FlatList
                    data={detailData?.business_job_details}
                    renderItem={({ item }) => renderJobs(item)}
                  />
                </View>
              </View>
              <View style={styles.mainContainer}>
                <ScaleText style={styles.sectionTxt}>Events</ScaleText>
                <View style={[CommonStyles.straightCon, { marginTop: 10 }]}>
                  <FlatList
                    data={detailData?.business_event_details}
                    renderItem={({ item }) => renderEvents(item)}
                    horizontal
                  />
                </View>
              </View>
            </View>
          ) : null}
        </ScrollView>
      </View>
    </Modal>
  );
};
export default MoreInfo;
