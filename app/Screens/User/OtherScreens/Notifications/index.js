import React, { useState, useEffect } from "react";
import Notifications from "./components/Notifications";
import styles from "./components/styles";
import { View, Text } from "react-native";
import moment from "moment";
import CommonStyles from "../../../../Utils/CommonStyles";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import Success from "../../../../Components/Modal/success";
import Error from "../../../../Components/Modal/showMessage";
import _, { reverse } from "lodash";
import { apiCall } from "../../../../Utils/httpClient";
import ShowMessage from "../../../../Components/Modal/showMessage";
import { NotificationItemView } from "../../../../Components/ListItemsView";
const NotificationsView = () => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [NotificationData, setNotificationData] = useState([]);

  useEffect(() => {
    getNotificationList();
  }, []);
  const getNotificationList = async () => {
    setVisible(true);
    try {
      const { data } = await apiCall("POST", ENDPOINTS.NOTIFICATION_LIST);
      if (data.status == 200) {
        if (data.data) {
          const dataList = data.data.reverse();
          setNotificationData(dataList);
        }
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };
  const _handleNotificationData = (item) => {
    return <NotificationItemView item={item} />;
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <Notifications
        NotificationData={NotificationData}
        _handleNotificationData={_handleNotificationData}
      />
      <ShowMessage
        visible={visibleErr || visibleSuccess}
        message={errorMessage || successMessage}
        messageViewType={visibleErr ? "error" : "success"}
        onEndVisible={() => {
          setErrorMessage("");
          setVisibleErr(false);
          setVisibleSuccess(false);
          setSuccessMessage("");
        }}
      />
    </View>
  );
};
export default NotificationsView;
