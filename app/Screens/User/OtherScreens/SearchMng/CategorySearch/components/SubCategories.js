import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ICON_TYPE, IconX } from "../../../../../../Components/Icons/Icon";
import { COLORS, FONT_SIZE } from "../../../../../../Utils/Constant";
import CommonStyles from "../../../../../../Utils/CommonStyles";

import styles from "./styles";
import Loader from "../../../../../../Utils/Loader";
import { apiCall } from "../../../../../../Utils/httpClient";
import apiEndPoints from "../../../../../../Utils/apiEndPoints";
import MainHeader from "../../../../../../Components/MainHeader";

const SubCategorySearchView = ({ route, navigation }) => {
  const allItems = route?.params;
  const [visible, setVisible] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryRes, setCategoryRes] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState({
    ...allItems,
    category_name: allItems?.category_name,
    category_id: allItems?.category_id,
  });

  useEffect(() => {
    getSubCategoryList(subCategoryData, {});
  }, [navigation, subCategoryData]);

  const getSubCategoryList = async (item) => {
    setVisible(true);
    const params = {
      category_id: item?.category_id ? item?.category_id : "",
    };
    try {
      const { data } = await apiCall(
        "POST",
        apiEndPoints.GET_SEARCH_CATEGORY_LIST,
        params
      );
      if (data.status === 200) {
        setVisible(false);
        setCategoryList(data.data);
      } else if (data.status === 201) {
        handleNavigation(item, data);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setVisible(false);
    }
  };

  const handleNavigation = (item, data) => {
    const newObject = {
      ...item,
      city: "Orlando, FL, USA",
    };
    setSubCategoryData({ ...newObject });
    if (data?.status === 201) {
      navigation.navigate("BusinessPageListing", { nearbySearch: newObject });
    }
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={styles.listTouch}
        onPress={() => getSubCategoryList(item, {})}
      >
        {/* <Image
                    source={{uri: item.image}}
                    style={styles.iconStyle}               
                /> */}
        <Text style={styles.listText}>{item.category_name}</Text>
        <IconX
          color={COLORS.BLACK}
          origin={ICON_TYPE.ANT_ICON}
          name={"right"}
          size={18}
          paddingRight={5}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={CommonStyles.otherContainer}>
      {visible && <Loader state={visible} />}
      <MainHeader
        isSearch={false}
        headerText={
          subCategoryData?.category_name
            ? subCategoryData?.category_name
            : "Categories"
        }
        fontSize={FONT_SIZE.mediumL}
      />
      <View style={{ flex: 1, marginVertical: 10 }}>
        <FlatList
          data={categoryList}
          renderItem={({ item }) => renderItem(item)}
        />
      </View>
    </ScrollView>
  );
};

export default SubCategorySearchView;
