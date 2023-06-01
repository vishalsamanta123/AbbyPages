import {
  View,
  TouchableOpacity,
  FlatList,
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
import CategoryView from "./CategoryView";
import { getAmount } from "../../../../../Utils/Globalfunctions";
import EmptyList from "../../../../../Components/EmptyList";
import PageScroll from "../../../../../Components/PageScroll";
import LocationModal from "../../../../../Components/LocationModal";

const MarketplaceView = (props) => {
  const {
    setIsVisibleFilters,
    isVisibleFilters,
    subCategories,
    handleCategoryPress,
    productList,
    onBackPress,
    onPressLike,
    handleProductPress,
    setSearchData,
    searchData,
    getProductList,
    locationModal,
    setLocationModal
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
  console.log('item: ', item);
    return (
      <TouchableOpacity
        style={styles.productTouch}
        onPress={() => handleProductPress(item)}
      >
        <ImageBackground
          source={{ uri: item.product_image }}
          style={styles.productImage}
        >
          <TouchableOpacity
            style={{ margin: 5 }}
            onPress={() => onPressLike(item)}
          >
            <IconX
              origin={ICON_TYPE.ENTYPO}
              size={30}
              name={"heart"}
              paddingRight={5}
              color={
                item?.product_user_favorite === 1 ? COLORS.YELLOW : COLORS.GREY
              }
            />
          </TouchableOpacity>
        </ImageBackground>
        {item?.quantity <= 0 && 
        <ScaleText style={styles.outOfTxt}>Out of Stock</ScaleText>}
        <ScaleText style={styles.productTxt}>{item.product_name}</ScaleText>
        <ScaleText style={styles.productPriceTxt}>
          ${getAmount(item.final_price)}
        </ScaleText>
      </TouchableOpacity>
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
      <View style={styles.setLocationView}>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => setLocationModal(true)}
        >
          <IconX
            origin={ICON_TYPE.ENTYPO}
            size={20}
            name={"location"}
            paddingRight={5}
            color={COLORS.BLUE}
          />
          <ScaleText style={styles.locationtxt}>{searchData?.address} within {searchData?.finalRadius} miles</ScaleText>
        </TouchableOpacity>
      </View>
      <PageScroll showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            data={subCategories}
            renderItem={({ item, index }) => renderSubcategory(item, index)}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <FlatList
            data={productList}
            renderItem={({ item, index }) => renderProductList(item, index)}
            // showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => <EmptyList message={"Product"} />}
            numColumns={2}
          />
        </View>
        <CategoryView
          categoryModal={categoryModal}
          setCategoryModal={setCategoryModal}
          onPressCatgry={(item) => {
            setCategoryModal(false);
            handleCategoryPress(item?.category_name);
            // props.handleJobFilter(0, {
            //   ...props?.filterData,
            //   category: item?.id,
            // });
          }}
        />
        <LocationModal
          visible={locationModal}
          setVisible={setLocationModal}
          searchData={searchData}
          setSearchData={setSearchData}
          getProductList={getProductList}
        />
      </PageScroll>
    </View>
  );
};

export default MarketplaceView;
