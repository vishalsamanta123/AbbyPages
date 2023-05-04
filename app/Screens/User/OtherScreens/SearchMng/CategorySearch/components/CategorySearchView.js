import { View, TouchableOpacity, FlatList, ScrollView } from "react-native";
import React from "react";
import { ICON_TYPE, IconX } from "../../../../../../Components/Icons/Icon";
import { COLORS, FONT_SIZE } from "../../../../../../Utils/Constant";

import styles from "./styles";
import SearchView from "../../../../../../Components/SearchView";
import MainHeader from "../../../../../../Components/MainHeader";
import ScaleText from "../../../../../../Components/ScaleText";
import { OnlyTextList } from "../../../../../../Components/ListItemsView";

const CategorySearchView = (props) => {
  const handleNavigation = (item) => {
    props.navigation.navigate("SubCategorySearchView", item);
  };
 
  return (
    <>
      <MainHeader
        isSearch={false}
        headerText={"Categories"}
        fontSize={FONT_SIZE.mediumL}
        loginButton={false}
        isLogin={true}
      />
      <ScrollView>
        <SearchView />
        <View style={{ flex: 1, marginVertical: 10 }}>
          <FlatList
            data={props.categoryList}
            renderItem={({ item }) => (
              <OnlyTextList
                onPressTxt={() => handleNavigation(item)}
                txtName={item?.category_name}
                item={item}
              />
            )}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default CategorySearchView;
