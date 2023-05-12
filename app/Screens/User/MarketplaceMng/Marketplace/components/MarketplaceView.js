import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import CommonStyles from "../../../../../Utils/CommonStyles";
import MainHeader from "../../../../../Components/MainHeader";
import { COLORS } from "../../../../../Utils/Constant";
import { ICON_TYPE, IconX } from "../../../../../Components/Icons/Icon";
import ScaleText from "../../../../../Components/ScaleText";
import styles from "./styles";
import FilterField from "./FilterField";
import MainInput from "../../../../../Components/MainInput";
import CategoryView from "./CategoryView";
import { getAmount } from "../../../../../Utils/Globalfunctions";

const MarketplaceView = (props) => {
  const {
    setIsVisibleFilters,
    isVisibleFilters,
    subCategories,
    handleCategoryPress,
    productList,
    onBackPress,
  } = props;
  const [categoryModal, setCategoryModal] = useState(false);

  const renderSubcategory = (item, index) => {
    return (
      <TouchableOpacity
        style={styles.subCatView}
        onPress={() => handleCategoryPress(item?.category_name)}
      >
        <ScaleText style={styles.subCatTxt}>{item?.category_name}</ScaleText>
      </TouchableOpacity>
    );
  };
  const renderProductList = (item, index) => {
    return (
      <TouchableOpacity style={styles.productTouch} onPress={() => {}}>
        <ImageBackground
          source={{ uri: item.product_image }}
          style={styles.productImage}
        >
          <IconX
            origin={ICON_TYPE.ENTYPO}
            size={90}
            name={"emoji-sad"}
            paddingRight={5}
            // color={COLORS.BLACK}
          />
        </ImageBackground>
        <ScaleText style={styles.productTxt}>{item.product_name}</ScaleText>
        <ScaleText style={styles.productPriceTxt}>
          ${getAmount(item.final_price)}
        </ScaleText>
      </TouchableOpacity>
    );
  };
  const renderEmptyView = () => {
    return (
      <View style={styles.emptyView}>
        <IconX
          origin={ICON_TYPE.ENTYPO}
          size={90}
          name={"emoji-sad"}
          paddingRight={5}
          // color={COLORS.BLACK}
        />
        <ScaleText style={styles.emtyTxt}>Oops! Item Not found</ScaleText>
      </View>
    );
  };
  return (
    <View style={[CommonStyles.container, { paddingHorizontal: 10 }]}>
      <MainHeader
        headerText={"Marketplace"}
        isSearch={false}
        loginButton={false}
        TxtMarginRight={"5%"}
        onPressBack={() => onBackPress()}
      />
      <View style={styles.topInfoVw}>
        <TouchableOpacity
          onPress={() => setCategoryModal(true)}
          style={styles.topStraightVw}
        >
          <IconX
            origin={ICON_TYPE.ENTYPO}
            size={20}
            name={"list"}
            paddingRight={5}
            color={COLORS.BLACK}
          />
          <ScaleText style={styles.hdngtxt}>Category</ScaleText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsVisibleFilters(!isVisibleFilters)}
          style={styles.topStraightVw}
        >
          <IconX
            origin={ICON_TYPE.ANT_ICON}
            size={20}
            name={"filter"}
            paddingRight={5}
            color={COLORS.BLACK}
          />
          <ScaleText style={styles.hdngtxt}>Filter</ScaleText>
        </TouchableOpacity>
      </View>

      {isVisibleFilters && (
        <View>
          <FilterField />
        </View>
      )}
      <ScrollView>
        <FlatList
          data={subCategories}
          renderItem={({ item, index }) => renderSubcategory(item, index)}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
        <View style={{ alignItems: "center" }}>
          <FlatList
            data={productList}
            renderItem={({ item, index }) => renderProductList(item, index)}
            // showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => renderEmptyView()}
            numColumns={2}
          />
        </View>
        <CategoryView
          categoryModal={categoryModal}
          setCategoryModal={setCategoryModal}
          onPressCatgry={(item) => {
            console.log("item: ", item);
            setCategoryModal(false);
            handleCategoryPress(item?.category_name);
            // props.handleJobFilter(0, {
            //   ...props?.filterData,
            //   category: item?.id,
            // });
          }}
        />
      </ScrollView>
    </View>
  );
};

export default MarketplaceView;
