import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import { Images } from "../../Utils/images";
import { BLACK_COLOR_CODE } from "../../Utils/Constant";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import Input from "../Input";

const MainHeader = (props) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const {} = props;
  const navigation = useNavigation();
  const OnpressBack = () => {
    navigation.goBack(null);
  };
  const handleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <View style={styles.headCon}>
      <View style={styles.blockCont}>
        <TouchableOpacity onPress={() => handleDrawer()}>
          <IconX
            origin={ICON_TYPE.FEATHER_ICONS}
            name={"list"}
            size={25}
            color={BLACK_COLOR_CODE}
          />
        </TouchableOpacity>
        <Image
          source={Images.LOGO}
          resizeMode={"contain"}
          style={styles.logoVw}
        />
        <TouchableOpacity onPress={() => setSearchOpen(true)}>
          <IconX
            origin={ICON_TYPE.ICONICONS}
            name={"search-outline"}
            size={25}
            color={BLACK_COLOR_CODE}
          />
        </TouchableOpacity>
      </View>
      {/* {searchOpen ? (
        <>
          <Input />
          <Input />
        </>
      ) : null} */}
    </View>
  );
};

export default MainHeader;
