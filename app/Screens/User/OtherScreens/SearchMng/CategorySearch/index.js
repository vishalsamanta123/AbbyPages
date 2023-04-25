import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CategorySearchView from "./components/CategorySearchView";
import Loader from "../../../../../Utils/Loader";
import CommonStyles from "../../../../../Utils/CommonStyles";
import apiEndPoints from "../../../../../Utils/apiEndPoints";
import { apiCall } from "../../../../../Utils/httpClient";

const CategorySearch = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, [navigation]);

  const getCategoryList = async () => {
    if (!refreshing) {
      // setVisible(true);
    }
    try {
      const { data } = await apiCall(
        "POST",
        apiEndPoints.GET_SEARCH_CATEGORY_LIST
      );
      if (data.status === 200) {
        setVisible(false);
        setCategoryList(data.data);
        // setRefreshing(false);
      } else {
        setVisible(false);
        setRefreshing(false);
      }
    } catch (error) {
      setVisible(false);
      setRefreshing(false);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <CategorySearchView navigation={navigation} categoryList={categoryList} />
    </View>
  );
};

export default CategorySearch;
