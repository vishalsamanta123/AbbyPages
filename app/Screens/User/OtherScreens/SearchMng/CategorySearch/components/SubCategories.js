import { View, FlatList } from "react-native";
import React, { useState } from "react";
import { FONT_SIZE } from "../../../../../../Utils/Constant";
import CommonStyles from "../../../../../../Utils/CommonStyles";
import Loader from "../../../../../../Utils/Loader";
import { apiCall } from "../../../../../../Utils/httpClient";
import apiEndPoints from "../../../../../../Utils/apiEndPoints";
import MainHeader from "../../../../../../Components/MainHeader";
import { useFocusEffect } from "@react-navigation/native";
import { OnlyTextList } from "../../../../../../Components/ListItemsView";
import ListingView from "../../../../../../Components/ListingView";

const SubCategorySearchView = ({ navigation, route }) => {
  const allItems = route?.params || {};
  const [visible, setVisible] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState({
    category_name: "",
    category_id: "",
  });

  useFocusEffect(
    React.useCallback(() => {
      getSubCategoryList(allItems, {});
      if (allItems) {
        setSubCategoryData({ ...allItems });
      }
    }, [navigation, allItems])
  );
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

  return (
    <View style={CommonStyles.container}>
      <MainHeader
        isSearch={false}
        headerText={
          subCategoryData?.category_name
            ? subCategoryData?.category_name?.length > 15
              ? subCategoryData?.category_name?.substring(0, 15) + "..."
              : subCategoryData?.category_name
            : "Categories"
        }
        fontSize={FONT_SIZE.mediumL}
        loginButton={false}
        TxtMarginRight={50}
      />
      {visible && <Loader state={visible} />}
      <View style={{ flex: 1, marginVertical: 10 }}>
        <ListingView
          data={categoryList}
          renderItem={({ item }) => (
            <OnlyTextList
              onPressTxt={() => getSubCategoryList(item, {})}
              txtName={item?.category_name}
              item={item}
            />
          )}
        />
      </View>
    </View>
  );
};

export default SubCategorySearchView;
