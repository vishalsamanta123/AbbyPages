import React, { useEffect, useState } from "react";
import { FlatList, Modal } from "react-native";
import { OnlyTextList } from "../../../../../Components/ListItemsView";
import MainHeader from "../../../../../Components/MainHeader";
import apiEndPoints from "../../../../../Utils/apiEndPoints";
import { apiCall } from "../../../../../Utils/httpClient";

const CategoryView = (props) => {
  const [categories, setCategories] = useState([]);
  const {
    categoryModal = false,
    setCategoryModal = () => { },
    onPressCatgry = () => { },
  } = props;

  useEffect(() => {
    handleCategory();
  }, [categoryModal]);

  const handleCategory = async () => {
    try {
      const { data } = await apiCall("POST", apiEndPoints.PRODUCT_CATEGORY_LIST);
      if (data.status === 200) {
        setCategories(data.data);
      } else {
        setCategories([]);
      }
    } catch (error) { }
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
        notifyIcon={false}
        TxtMarginRight={"16%"}
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
