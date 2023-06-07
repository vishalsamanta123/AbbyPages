import React, { useState } from "react";
import { View } from "react-native";
import _ from "lodash";
import BusinessPageListingView from "./components/BusinessPageListingView";
import CommonStyles from "../../../../Utils/CommonStyles";
import { apiCall } from "../../../../Utils/httpClient";
import ENDPOINTS from "../../../../Utils/apiEndPoints";
import Loader from "../../../../Utils/Loader";
import { useFocusEffect } from "@react-navigation/native";
import apiEndPoints from "../../../../Utils/apiEndPoints";
import ShowMessage from "../../../../Components/Modal/showMessage";

const BusinessPageListing = ({ navigation, route }) => {
  const { nearbySearch = {} } = route?.params || {};
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState({ selectOption: [] });
  const [offSet, setOffSet] = useState(0);
  const [moreData, setMoreData] = useState(0);
  const [businessList, setBusinessList] = useState([]);
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });
  useFocusEffect(
    React.useCallback(() => {
      if (search?.selectOption?.length === 0) {
        const filterSearch = {
          ...nearbySearch,
          selectOption: Number(nearbySearch?.selectOption)
            ? nearbySearch?.selectOption?.toString()
            : "",
        };
        handleSearchData(0, filterSearch);
      }
      return () => {};
    }, [navigation, route?.params])
  );

  const handleSearchData = async (offset, getObj) => {
    setOffSet(offset);
    setSearch(getObj);
    try {
      setVisible(true);
      const params = {
        latitude: getObj?.latitude ? getObj?.latitude : "28",
        longitude: getObj?.longitude ? getObj?.longitude : "-81",
        category_id: getObj?.category_id ? getObj?.category_id : "",
        limit: 5,
        offset: offset,
        business_type: getObj?.business_type
        ? Number(getObj?.business_type)
        : "1",
        search_key: null,
        city: getObj?.city ? getObj?.city : "",
        options:
        getObj?.selectOption?.length > 0 ||
        Array?.isArray(getObj?.selectOption)
        ? getObj?.selectOption?.toString()
        : "",
      };
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_NEW_BUSINESS,
        params
      );
      if (data.status == 200) {
        setVisible(false);
        setMoreData(data.total_number_data);
        if (offset === 0) {
          setBusinessList(data.data);
        } else {
          setBusinessList([...businessList, ...data.data]);
        }
      } else {
        if (data.status === 201) {
          setBusinessList([]);
          setVisible(false);
        } else {
          setVisible(false);
        }
      }
    } catch (error) {
      setVisible(false);
    }
  };
  const onPressView = (item) => {
    const getObj = {
      ...item,
      business_type: item?.search_business_type
        ? item?.search_business_type
        : item?.business_type,
    };
    navigation.navigate("BusinessPageDetails", {
      detail: getObj,
    });
  };
  const onPressLike = async (item, index) => {
    try {
      const params = {
        favorite: item?.user_favorite === 0 ? 1 : 0,
        interest: 0,
        item_id: item?.business_id,
        item_type: item?.search_business_type,
        like: item?.user_favorite === 0 ? 1 : 0,
        views: item?.views,
      };
      const { data } = await apiCall(
        "POST",
        apiEndPoints.USERCOMMONLIKES,
        params
      );
      if (data.status === 200) {
        const newObj = {
          ...item,
          user_favorite: item?.user_favorite === 0 ? 1 : 0,
        };
        const newArray = [...businessList];
        newArray[index] = newObj;
        setBusinessList(newArray);
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
  const handleOptions = (item) => {
    if (search?.selectOption?.toString()?.includes(item?.type)) {
      const toRemoveObj = [...search.selectOption];
      toRemoveObj.splice(
        toRemoveObj.findIndex((a) => a === item.type),
        1
      );
      const newObject = { ...search, selectOption: toRemoveObj };
      handleSearchData(0, newObject);
    } else {
      if (item?.type) {
        const newArray = [...search?.selectOption];
        newArray.push(item.type);
        const newObject = { ...search, selectOption: newArray };
        handleSearchData(0, newObject);
      } else {
        const newObject = { ...search, selectOption: item };
        handleSearchData(0, newObject);
      }
    }
  };

  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <BusinessPageListingView
        businessList={businessList}
        search={search}
        handleSearchData={handleSearchData}
        offSet={offSet}
        moreData={moreData}
        handleOptions={handleOptions}
        onPressView={onPressView}
        onPressLike={onPressLike}
      />
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
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
export default BusinessPageListing;
