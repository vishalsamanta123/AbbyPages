import React, { useContext, useState } from "react";
import JobDetailView from "./components/JobDetailView";
import { Share, View } from "react-native";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import { useFocusEffect } from "@react-navigation/native";
import ShowMessage from "../../../../Components/Modal/showMessage";
import { UserContext } from "../../../../Utils/UserContext";
import ScaleText from "../../../../Components/ScaleText";
import { styles } from "../../../../Components/Modal/showMessage";

const JobDetail = ({ route, navigation }) => {
  const { detail = {} } = route.params;
  const [userData, setUserData] = useContext(UserContext);

  const [jobDetail, setJobDetail] = useState();
  const [visible, setVisible] = useState(false);
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });

  useFocusEffect(
    React.useCallback(() => {
      getJobDetails(detail);
    }, [navigation, route])
  );
  const getJobDetails = async (data) => {
    setVisible(true);
    const params = {
      job_id: data.job_id,
    };
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_JOB_DETAILS, params);
      if (data.status === 200) {
        setJobDetail(data.data);
        setVisible(false);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
    }
  };
  const applyNowPress = async () => {
    if (userData?.login_type) {
      navigation.navigate("ApplyJob", jobDetail);
    } else {
      setMessageShow({
        visible: true,
        type: "error",
        message: (
          <ScaleText style={styles.messageTxt}>
            Please login to apply.
            <ScaleText
              onPress={() => navigation.navigate("SignUp")}
              style={[
                styles.messageTxt,
                {
                  textDecorationLine: "underline",
                },
              ]}
            >
              SignUp
            </ScaleText>
            <ScaleText
              style={[
                styles.messageTxt,
                {
                  textDecorationLine: "underline",
                },
              ]}
            >
              {" "}
              or{" "}
            </ScaleText>
            <ScaleText
              onPress={() => navigation.navigate("Login")}
              style={[
                styles.messageTxt,
                {
                  textDecorationLine: "underline",
                },
              ]}
            >
              Login
            </ScaleText>
          </ScaleText>
        ),
      });
    }
  };
  const onPressJob = (item) => {
    getJobDetails(item);
  };
  const onPressLike = async (item) => {
    try {
      const params = {
        favorite: item?.favorite,
        interest: item?.interest,
        item_id: item?.job_id,
        item_type: 3,
        like: item?.user_like === 0 ? 1 : 0,
        views: item?.job_views,
      };
      const { data } = await apiCall("POST", ENDPOINTS.USERCOMMONLIKES, params);
      if (data.status === 200) {
        const newObj = { ...item, user_like: item?.user_like === 0 ? 1 : 0 };
        setJobDetail(newObj);
        // setMessageShow({
        //   visible: true,
        //   type: "success",
        //   message: data?.message,
        // });
      } else {
        setMessageShow({
          visible: true,
          type: "error",
          message: data?.message,
        });
      }
    } catch (error) {
      setMessageShow({
        visible: true,
        type: "error",
        message: error?.message,
      });
    }
  };
  const shareTo = async () => {
    const result = await Share.share({ message: "Share Job with others" });
    if (result.action) {
      console.log("result: ", result.action);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <JobDetailView
        jobDetail={jobDetail}
        applyNowPress={applyNowPress}
        shareTo={shareTo}
        onPressJob={onPressJob}
        onPressLike={onPressLike}
      />
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
        onPressMessage={() => {
          setMessageShow({
            visible: false,
            message: "",
            type: "",
          });
        }}
        onEndVisible={() => {
          setMessageShow({
            visible: false,
            message: "",
            type: "",
          });
        }}
      />
    </View>
  );
};
export default JobDetail;
