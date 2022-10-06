import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import styles from "./components/styles";
import JobManagementList from "./components/JobManagementList";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import CommonStyles from "../../../Utils/CommonStyles";
import moment from "moment";
import Error from "../../../Components/Modal/error";
import Success from "../../../Components/Modal/success";
import QuestionModal from "../../../Components/Modal/questionModal";

const JobManagementListView = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [businessJobList, setJobBusinessList] = useState([]);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [deleteJob, setDeleteJob] = useState(false);
  const [deleteData, setDeleteData] = useState({});
  useEffect(() => {
    getBussinessJobList();
  }, []);

  const getBussinessJobList = async () => {
    setVisible(true);
    try {
      const params = {
        limit: 2,
        offset: 0,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_BUSINESS_JOB_LIST,
        params
      );
      if (data.status === 200) {
        setJobBusinessList(data.data);
        setVisible(false);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const jobStatus = async ({ id, status, is_delete }) => {
    setVisible(true);
    try {
      const params = {
        is_delete: is_delete,
        job_id: id,
        job_status: status,
      };
      setDeleteJob(false);
      const response = await apiCall(
        "POST",
        ENDPOINTS.JOB_REMOVE_STATUS_UPDATE,
        params
      );
      if (response.status === 200) {
        getBussinessJobList();
        setVisible(false);
        setDeleteData({});
      } else {
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const singleJobDetails = async (id) => {
    try {
      const params = {
        job_id: id,
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_SINGLE_JOB_DETAILS,
        params
      );
      if (data.status === 200) {
        navigation.navigate("EditJobs", {
          item: data?.data[0] ? data?.data[0] : [],
        });
        setVisible(false);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const _handleTableData = (item, index) => {
    const date = moment(item?.create_date).startOf("day").fromNow();
    return (
      <View style={[styles.MainContain, { marginTop: index === 0 ? 2 : 12 }]}>
        <Text style={styles.TableNottEXT}>{item?.job_title}</Text>
        <Text style={styles.DescrptionText}>
          $
          {Number(
            parseFloat(item?.monthly_in_hand_salary_from).toFixed(2)
          ).toLocaleString("en", {
            minimumFractionDigits: 2,
          })}{" "}
          - $
          {Number(
            parseFloat(item?.monthly_in_hand_salary_to).toFixed(2)
          ).toLocaleString("en", {
            minimumFractionDigits: 2,
          })}
        </Text>
        <Text style={styles.DescrptnTextStyle}>
          Company name : {item?.company_name}
        </Text>
        <View style={[styles.straightVw, { justifyContent: "flex-start" }]}>
          <Text style={[styles.HeadingTxt, { marginRight: 5 }]}>
            Number of Opening -
          </Text>
          <Text style={[styles.HeadingTxt]}>{item.no_of_openings}</Text>
        </View>
        <View style={[styles.straightVw, { justifyContent: "flex-start" }]}>
          <Text style={[styles.HeadingTxt, { marginRight: 5 }]}>
            Contact Person -
          </Text>
          <Text style={[styles.HeadingTxt]}>{item.contact_person_name}</Text>
        </View>
        <Text style={styles.HeadingTxt}>Posted {date}</Text>
        <Text style={styles.DescrptnTextStyle}>
          Address :- {item?.job_address}
        </Text>
        <View style={[styles.straightVw, { marginTop: 5 }]}>
          <TouchableOpacity
            style={styles.switchstyle}
            onPress={() =>
              jobStatus({
                id: item?.job_id,
                status: item?.job_status === 1 ? false : true,
              })
            }
          >
            <Image
              resizeMode={"contain"}
              style={{ width: 40, height: 32 }}
              source={
                item?.job_status === 1
                  ? require("../../../Assets/active_switch.png")
                  : require("../../../Assets/unactive_switch.png")
              }
            />
          </TouchableOpacity>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => singleJobDetails(item?.job_id)}>
              <Image source={require("../../../Assets/list_edit_icon.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => {
                setDeleteJob(true);
                setDeleteData(item);
              }}
            >
              <Image source={require("../../../Assets/list_delete_icon.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const onPressAdd = (val) => {
    if (val === 2) {
      navigation.navigate("AppliedJob");
    } else {
      navigation.navigate("AddJobs");
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <JobManagementList
        _handleTableData={_handleTableData}
        onPressAdd={onPressAdd}
        businessJobList={businessJobList}
        deleteJob={deleteJob}
        setDeleteJob={setDeleteJob}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => navigateAndCloseSuccessModal()}
      />
      <QuestionModal
        message={"Are you sure you want delete this Job?"}
        surringVisible={deleteJob}
        positiveResponse={() =>
          jobStatus({
            id: deleteData?.job_id,
            status: deleteData?.job_status,
            is_delete: 1,
          })
        }
        negativeResponse={() => setDeleteJob(false)}
      />
    </View>
  );
};
export default JobManagementListView;
