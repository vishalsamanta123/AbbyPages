import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "react-native-vector-icons/Octicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

export const ICON_TYPE = {
  ICONICONS: "Ionicons",
  ANT_ICON: "AntDesign",
  EVIL_ICONS: "EvilIcons",
  FONT_AWESOME: "FontAwesome",
  FONT_AWESOME5: "FontAwesome5",
  MATERIAL_ICONS: "MaterialIcons",
  FEATHER_ICONS: "FEATHER",
  ENTYPO: "ENTYPO",
  OCTICONS: "OCTICONS",
  MATERIAL_COMMUNITY: "MATERIALCOMMUNITY",
  Fontisto: "Fontisto",
  SIMPLELINE: "SimpleLineIcons",
};

export const IconX = ({
  origin,
  name,
  onPress,
  color,
  size,
  paddingLeft,
  paddingRight,
  style,
}) => {
  let colorx = color || "#aaaaaa";
  let sizex = size || 24;
  let namex = name || "right";
  let paddingx = paddingLeft || null;
  let paddingy = paddingRight || null;

  let Element = Ionicons;

  switch (origin) {
    case ICON_TYPE.ANT_ICON:
      Element = AntDesign;
      break;
    case ICON_TYPE.ENTYPO:
      Element = Entypo;
      break;

    case ICON_TYPE.MATERIAL_ICONS:
      Element = MaterialIcons;
      break;

    case ICON_TYPE.FONT_AWESOME5:
      Element = FontAwesome5;
      break;

    case ICON_TYPE.FEATHER_ICONS:
      Element = Feather;
      break;

    case ICON_TYPE.EVIL_ICONS:
      Element = EvilIcons;
      break;

    case ICON_TYPE.FONT_AWESOME:
      Element = FontAwesome;
      break;

    case ICON_TYPE.OCTICONS:
      Element = Octicons;
      break;
    case ICON_TYPE.MATERIAL_COMMUNITY:
      Element = MaterialCommunityIcons;
      break;
    case ICON_TYPE.Fontisto:
      Element = Fontisto;
      break;
    case ICON_TYPE.SIMPLELINE:
      Element = SimpleLineIcons;
      break;

    default:
      Element = Ionicons;
      break;
  }
  return (
    <Element
      name={namex}
      size={sizex}
      color={colorx}
      style={[{ paddingLeft: paddingx ,paddingRight:paddingy}, style]}
      onPress={onPress}
    />
  );
};
