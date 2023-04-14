import { ICON_TYPE } from "../Components/Icons/Icon";
import { LIGHT_BLACK_COLOR_CODE } from "./Constant";

export const businessTypes = [
  {},
  { type: "1", name: "Restaurants" },
  { type: "2", name: "MarketPlace" },
  { type: "3", name: "Directory" },
  { type: "4", name: "Events" },
  { type: "5", name: "Jobs" },
];
export const staticSearchOptions = [
  {
    business_type: "1",
    category_name: "Restaurants",
    origin: ICON_TYPE.ICONICONS,
    name: "restaurant",
    size: 22,
    color: LIGHT_BLACK_COLOR_CODE,
    option: "",
    selectOption: "",
    city: "Orlando, FL, USA",
  },
  {
    business_type: "1",
    category_name: "Delivery",
    origin: ICON_TYPE.MATERIAL_ICONS,
    name: "delivery-dining",
    size: 22,
    color: LIGHT_BLACK_COLOR_CODE,
    option: "1",
    selectOption: 1,
    city: "Orlando, FL, USA",
  },
  {
    business_type: "1",
    category_name: "Offer Takeout",
    origin: ICON_TYPE.FEATHER_ICONS,
    name: "shopping-bag",
    size: 22,
    color: LIGHT_BLACK_COLOR_CODE,
    option: "10",
    selectOption: 10,
    city: "Orlando, FL, USA",
  },
  {
    business_type: "3",
    category_name: "Accountants",
    category_id: "1049",
    origin: ICON_TYPE.MATERIAL_COMMUNITY,
    name: "badge-account-outline",
    size: 22,
    color: LIGHT_BLACK_COLOR_CODE,
    option: "",
    selectOption: "",
    city: "Orlando, FL, USA",
    image: "no_image.png",
  },
  {
    business_type: "3",
    category_name: "Plumbers",
    category_id: "970",
    origin: ICON_TYPE.MATERIAL_ICONS,
    name: "plumbing",
    size: 22,
    color: LIGHT_BLACK_COLOR_CODE,
    option: "",
    selectOption: "",
    city: "Orlando, FL, USA",
  },
  {
    business_type: "3",
    category_name: "Auto Repairs",
    category_id: "160",
    origin: ICON_TYPE.ICONICONS,
    name: "ios-settings",
    size: 22,
    color: LIGHT_BLACK_COLOR_CODE,
    option: "",
    selectOption: "",
    city: "Orlando, FL, USA",
  },
];
export const businessPageObj = {
  business_type: "1,3",
  category_name: "Restaurant and Directory",
  description: null,
  id: "",
  image: "no_image.png",
  is_both: 1,
  is_show: 1,
  main_parent_id: "",
  parents_id: "",
  status: 1,
  option: "",
  selectOption: "",
  city: "Orlando, FL, USA",
};


export const restaurantOptions = [
  { id: 1, type: "9", name: "Open Now" },
  { id: 2, type: "1", name: "Open Delivery" },
  { id: 3, type: "10", name: "Offer Takeout" },
  { id: 4, type: "2", name: "Reservations" },
];
