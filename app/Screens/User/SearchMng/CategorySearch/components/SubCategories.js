import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ICON_TYPE, IconX } from "../../../../../Components/Icons/Icon";
import { BLACK_COLOR_CODE } from "../../../../../Utils/Constant";
import CommonStyles from "../../../../../Utils/CommonStyles";

import styles from "./styles";
import Loader from "../../../../../Utils/Loader";
import { apiCall } from "../../../../../Utils/httpClient";
import apiEndPoints from "../../../../../Utils/apiEndPoints";

const SubCategorySearchView = ({ route, navigation }) => {
  // console.log("route", route.params);
  const { category_id, category_name } = route.params;
  const [visible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryRes, setCategoryRes] = useState([]);
  const [cat_id, setCat_id] = useState(category_id);
  const [cat_name, setCat_name] = useState(category_name);

  useEffect(() => {
    getSubCategoryList();
    console.log("useEfffect called");
  }, [cat_id]);

  const getSubCategoryList = async () => {
    if (!refreshing) {
      setVisible(true);
    }
    const params = {
      category_id: cat_id,
    };
    console.log('params', params)
    try {
      const { data } = await apiCall(
        "POST",
        apiEndPoints.GET_SEARCH_CATEGORY_LIST,
        params
      );
      console.log("data: ", data);
      setCategoryRes(data)
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

  const handleNavigation = (item) => {
    console.log("SubCategorySearchView");
    const newObject = {
      ...item,
      city: 'Orlando, FL, USA',
    };
    setCat_id(item.category_id);
    setCat_name(item.category_name)
    console.log('item.category_id', item.category_id)
    // navigation.navigate("SubCategorySearchView", item);
    if(categoryRes.status === 201){
      navigation.navigate("BusinessPageListing", { nearbySearch: newObject });
    }
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={styles.listTouch}
        onPress={() => handleNavigation(item)}
      >
        {/* <Image
                    source={{uri: item.image}}
                    style={styles.iconStyle}               
                /> */}
        <Text style={styles.listText}>{item.category_name}</Text>
        <IconX
          color={BLACK_COLOR_CODE}
          origin={ICON_TYPE.ANT_ICON}
          name={"right"}
          size={18}
          paddingRight={5}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={CommonStyles.otherContainer}>
      {/* HEADER  */}
      {visible && <Loader state={visible} />}

      <View style={[CommonStyles.straightCon, styles.topHeaderVw]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={CommonStyles.straightCon}
        >
          <IconX
            origin={ICON_TYPE.ICONICONS}
            color={BLACK_COLOR_CODE}
            size={30}
            name={"chevron-back"}
          />
          <Text
            style={[
              styles.topHeaderTxt,
              {
                color: BLACK_COLOR_CODE,
              },
            ]}
          >
            Back
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.topHeaderTxt,
            {
              color: BLACK_COLOR_CODE,
              marginRight: 50,
            },
          ]}
        >
          {cat_name}
        </Text>
        <View></View>
      </View>
      {/* LIST */}
      <View style={{ flex: 1, marginVertical: 10 }}>
        <FlatList
          data={categoryList}
          renderItem={({ item }) => renderItem(item)}
        />
      </View>
    </SafeAreaView>
  );
};

export default SubCategorySearchView;
