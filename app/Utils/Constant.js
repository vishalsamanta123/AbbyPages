import React from "react";
import { Dimensions, Platform } from "react-native";

//height Width
export const windowWidth = Dimensions.get("screen").width;
export const windowHeight = Dimensions.get("window").height;

//Color
export const WHITE_COLOR_CODE = "#ffffff";
export const TRANSPARENT_CODE = "transparent";
export const BLACK_COLOR_CODE = "#000000";
export const GREY_COLOR_CODE = "#757070";
export const BORDER_LINE_CODE = "#dee0e0";
export const YELLOW_COLOR_CODE = "#ffba00";
export const RGBA_COLOR = "rgba(0,0,0,0.8)";
// export const SMALL_TEXT_COLOR_CODE = "#959595";
export const LINE_COMMON_COLOR_CODE = "#dadada";

//fonts
export const FONT_FAMILY_BOLD = "WorkSans-Bold";
export const FONT_FAMILY_REGULAR = "WorkSans-Medium";
export const FONT_FAMILY_THIN = "WorkSans-Thin";
export const FONT_FAMILY_BLACK = "WorkSans-Black";
export const FONT_FAMILY_LIGHT = "WorkSans-Light";
export const LIGHT_WHITE_COLOR = "#E1E1D9";
export const GOLDEN_COLOR = "#DAA520";
export const LIGHT_YELLOW_COLOR = "#ffc426";
export const SMALL_TEXT_COLOR_CODE = "#868282";
export const LIGHT_GREEN_COLOR_CODE = "#a3d74e";
export const GREEN_COLOR_CODE = "#00FF00";
export const LIGHT_RED_COLOR_CODE = "#f32c2c";
export const BLUE_COLOR_CODE = "#00838f";
export const LIGHT_GREY_COLOR_CODE = "#858484";
export const LIGHT_WHITE_COLOR_CODE = "#C7CBCB";
export const LIGHT_BLACK_COLOR_CODE = "#262626";

export const COLORS = {
  WHITE: "#ffffff",
  TRANSPARENT: "transparent",
  BLACK: "#000000",
  GREY: "#757070",
  BORDER_LINE: "#e5e4e4",
  YELLOW: "#ffba00",
  RGBA: "rgba(0,0,0,0.8)",
  COMMON: "#dadada",
  LIGHT_BLACK: "#262626",
  LIGHT_WHITE: "#E1E1D9",
  GOLDEN: "#DAA520",
  LIGHT_YELLOW: "#ffc426",
  SMALL_TEXT: "#868282",
  LIGHT_GREEN: "#a3d74e",
  GREEN: "#00FF00",
  LIGHT_RED: "#f32c2c",
  BLUE: "#00838f",
  LIGHT_GREY: "#858484",
  LIGHT_WHITE: "#C7CBCB",
  DARK_PURPLE: "#140423",
};

export const FONT_FAMILY = {
  BOLD: "WorkSans-Bold",
  REGULAR: "WorkSans-Medium",
  THIN: "WorkSans-Thin",
  BLACK: "WorkSans-Black",
  LIGHT: "WorkSans-Light",
};
export const FONT_SIZE = {
  small: 12,
  smallL: 14,
  large: 20,
  largeL: 24,
  largeM: 22,
  veryLarge: 30,
  medium: 16,
  mediumL: 18,
  normal: 15,
};

export const Constants = {
  normalBW: 0.3,
  dot: "\u2B24",
  Ios: Platform.OS === "ios",
  mapKey: "AIzaSyCbDx7Lk4eTMzptrQKXZvOPYgEMggrq8o4",
  windowWidth: Dimensions.get("screen").width,
  windowHeight: Dimensions.get("window").height,
};

// export const BASEURL = 'https://itinformatix.org:3040';/*  */
export const BASEURL = "http://itinformatix.org:3040";
// export const BASEURL = 'https://abbypages.com:8080';
// export const BASEURL = 'http://199.241.139.254:8080';
