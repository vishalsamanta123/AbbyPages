import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { ICON_TYPE, IconX } from "../../../../../../Components/Icons/Icon";
import { COLORS, FONT_SIZE } from "../../../../../../Utils/Constant";
import CommonStyles from "../../../../../../Utils/CommonStyles";

import styles from "./styles";
import SearchView from "../../../../../../Components/SearchView";
import MainHeader from "../../../../../../Components/MainHeader";

const CategorySearchView = (props) => {
  const handleNavigation = (item) => {
    props.navigation.navigate("SubCategorySearchView", item);
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
      <MainHeader
        isSearch={false}
        headerText={"Categories"}
        fontSize={FONT_SIZE.mediumL}
      />
      <SearchView />
      <View style={{ flex: 1, marginVertical: 10 }}>
        <FlatList
          data={props.categoryList}
          renderItem={({ item }) => renderItem(item)}
        />
      </View>
    </ScrollView>
  );
};

export default CategorySearchView;
