import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import { Images } from "../../Utils/images";
import { BLACK_COLOR_CODE } from "../../Utils/Constant";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import Input from "../Input";

const MainHeader = (props) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const { isBack, headerText, isSearch, isDrawer } = props;
  const navigation = useNavigation();
  const OnpressBack = () => {
    navigation.goBack(null);
  };
  const handleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  const handleSearchPress = () => {
    navigation.navigate("CategorySearch");
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.headCon}>
      <View style={styles.blockCont}>
        <TouchableOpacity onPress={() => isBack ? handleGoBack () : handleDrawer()}>
          {isBack ? (
            <View style={styles.backView}>
              <IconX
                origin={ICON_TYPE.ANT_ICON}
                name={"left"}
                size={25}
                color={BLACK_COLOR_CODE}
              />
              {headerText ? <Text style={styles.backtxt}>Back</Text> : null}
            </View>
          ) : isDrawer ? (
            <IconX
              origin={ICON_TYPE.FEATHER_ICONS}
              name={"list"}
              size={25}
              color={BLACK_COLOR_CODE}
            />
          ) : null}
        </TouchableOpacity>
        {headerText ? (
          <Text style={styles.topHeaderTxt}>{headerText}</Text>
        ) : (
          <Image
            source={Images.LOGO}
            resizeMode={"contain"}
            style={styles.logoVw}
          />
        )}
        <TouchableOpacity disabled={!isSearch} onPress={() => handleSearchPress()}>
          {isSearch ? <IconX
            origin={ICON_TYPE.ICONICONS}
            name={"search-outline"}
            size={25}
            color={BLACK_COLOR_CODE}
          /> : null}
        </TouchableOpacity>
      </View>
      {/* {searchOpen ? (
        <>
          <Input />
          <Input />
        </>
      ) : null} */}
    </SafeAreaView>
  );
};

export default MainHeader;
