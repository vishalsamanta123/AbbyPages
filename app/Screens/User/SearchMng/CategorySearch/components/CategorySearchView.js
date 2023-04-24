import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { ICON_TYPE, IconX } from "../../../../../Components/Icons/Icon";
import { COLORS } from "../../../../../Utils/Constant";
import CommonStyles from "../../../../../Utils/CommonStyles";

import styles from "./styles";
import SearchView from "../../../../../Components/SearchView";
import MainHeader from "../../../../../Components/MainHeader";

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
    <SafeAreaView style={CommonStyles.otherContainer}>
      {/* <View style={[CommonStyles.straightCon, styles.topHeaderVw]}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={CommonStyles.straightCon}
        >
          <IconX
            origin={ICON_TYPE.ICONICONS}
            color={COLORS.BLACK}
            size={30}
            name={"chevron-back"}
          />
          <Text
            style={[
              styles.topHeaderTxt,
              {
                color: COLORS.BLACK,
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
              color: COLORS.BLACK,
              marginRight: 50,
            },
          ]}
        >
          More Categories
        </Text>
        <View></View>
      </View> */}
      <MainHeader
        isBack={true}
        headerText={'More Categories'}
        isSearch={false}
      />
      <SearchView />
      <View style={{ flex: 1, marginVertical: 10 }}>
        <FlatList
          data={props.categoryList}
          renderItem={({ item }) => renderItem(item)}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategorySearchView;
