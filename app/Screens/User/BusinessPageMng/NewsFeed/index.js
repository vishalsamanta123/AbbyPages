import { View, Text } from "react-native";
import React, { useState } from "react";
import NewsFeedView from "./components/NewsFeedView";
import CommonStyles from "../../../../Utils/CommonStyles";
import { useFocusEffect } from "@react-navigation/native";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import { apiCall } from "../../../../Utils/httpClient";


const NewsFeed = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);

  const [newsfeedData, setNewsfeedData] = useState({});

  const { business_id } = route.params;

  useFocusEffect(
    React.useCallback(() => {
      getNewsFeedDetails();
      return () => {};
    }, [navigation, route])
  );
  const getNewsFeedDetails = async () => {
    console.log('getNewsFeedDetails')
    try {
      setVisible(true);
      const params = {
        business_id: business_id,
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.GETABBYCONNECTPOST,
        params
      );
      if (data.status == 200) {
        setVisible(false);
        setNewsfeedData(data?.data);
      } else {
        if (data.status === 201) {
            setNewsfeedData({});
          setVisible(false);
        } else {
          setVisible(false);
        }
      }
    } catch (error) {
      setVisible(false);
    }
  };

  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <NewsFeedView newsfeedData={newsfeedData}/>
    </View>
  );
};

export default NewsFeed;
