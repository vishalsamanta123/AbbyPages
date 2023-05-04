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
import ScaleText from "../../../../../../Components/ScaleText";
import OnlyTextList from "../../../../../../Components/ListItemsView/OnlyTextList";

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
        <ScaleText style={styles.listText}>{item.category_name}</ScaleText>
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
