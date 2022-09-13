import React, { useState } from "react";
import { Alert, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import UserEventsList from "./components/UserEventsList";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Error from "../../Components/Modal/error";
import RNFS, { DocumentDirectoryPath, writeFile } from "react-native-fs";
import FileViewer from "react-native-file-viewer";

const EventListing = ({ navigation }) => {
  const [loader, setLoader] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [eventsList, setEventsList] = useState([]);
  const [baseUrl, setBaseUrl] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      getEventList();
      return () => {
        getEventList();
      };
    }, [])
  );

  const getEventList = async () => {
    setLoader(true);
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_USER_EVENT_TICKET);
      if (data.status === 200) {
        setEventsList(data?.data);
        setLoader(false);
        setBaseUrl(data.base_url);
      } else {
        if (data.status === 201) {
          setEventsList([]);
          setLoader(false);
        } else {
          setLoader(false);
          setVisibleErr(true);
          setErrorMessage(data.message);
        }
      }
    } catch (error) {
      setLoader(false);
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const onPressDownloadTckt = async (item) => {
    const localFile = `${RNFS.DocumentDirectoryPath}/${item.ticket}`;
    const url = baseUrl + item.ticket;
    try {
      const options = {
        fromUrl: url,
        toFile: localFile,
      };
      RNFS.downloadFile(options).promise.then((result) => {
        if (result.statusCode === 200) {
          FileViewer.open(localFile);
        }
      });
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {loader && <Loader state={loader} />}
      <UserEventsList
        eventsList={eventsList}
        onPressDownloadTckt={onPressDownloadTckt}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
    </View>
  );
};
export default EventListing;
