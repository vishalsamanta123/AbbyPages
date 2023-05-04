import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, Modal } from "react-native";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import OnlyTextList from "../../../../../Components/ListItemsView/OnlyTextList";
import MainHeader from "../../../../../Components/MainHeader";
import apiEndPoints from "../../../../../Utils/apiEndPoints";
import { apiCall } from "../../../../../Utils/httpClient";

const CategoryView = (props) => {
  const [categories, setCategories] = useState([]);
  const {
    categoryModal = false,
    setCategoryModal = () => {},
    onPressCatgry = () => {},
  } = props;

  useEffect(() => {
    handleCategory();
  }, [categoryModal]);

  const handleCategory = async () => {
    try {
      const { data } = await apiCall("POST", apiEndPoints.GET_JOB_CATEGORY);
      if (data.status === 200) {
        setCategories(data.data);
      } else {
        setCategories([]);
      }
    } catch (error) {}
  };

  return (
    <Modal
      visible={categoryModal}
      onRequestClose={() => setCategoryModal(false)}
    >
      <MainHeader
        isSearch={false}
        headerText={"Categories"}
        loginButton={false}
        onPressBack={() => setCategoryModal(false)}
        notify={false}
        TxtMarginRight={"17%"}
      />
      <FlatList
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <OnlyTextList
              onPressTxt={() => onPressCatgry(item)}
              txtName={item?.category_name}
              item={item}
            />
          );
        }}
      />
    </Modal>
  );
};

export default CategoryView;
