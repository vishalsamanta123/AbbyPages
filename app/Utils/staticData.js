import { ICON_TYPE } from "../Components/Icons/Icon";
import { BLACK_COLOR_CODE, COLORS, LIGHT_BLACK_COLOR_CODE } from "./Constant";

export const businessTypes = [
  {
    type: "Add a Business",
    optionName: "Abbypages for Business",
    origin: ICON_TYPE.MATERIAL_COMMUNITY,
    name: "bank-outline",
    size: 24,
    color: LIGHT_BLACK_COLOR_CODE,
    url: "https://business.abbypages.com/login",
  },
  {
    type: "3",
    optionName: "Directory",
    origin: ICON_TYPE.ICONICONS,
    name: "car-sport-outline",
    size: 24,
    color: LIGHT_BLACK_COLOR_CODE,
  },
  {
    type: "4",
    optionName: "Events",
    origin: ICON_TYPE.FEATHER_ICONS,
    name: "calendar",
    size: 24,
    color: LIGHT_BLACK_COLOR_CODE,
  },
  {
    type: "5",
    optionName: "Jobs",
    origin: ICON_TYPE.SIMPLELINE,
    name: "briefcase",
    size: 24,
    color: LIGHT_BLACK_COLOR_CODE,
  },
  {
    type: "2",
    optionName: "MarketPlace",
    origin: ICON_TYPE.MATERIAL_COMMUNITY,
    name: "shopping-outline",
    size: 24,
    color: LIGHT_BLACK_COLOR_CODE,
  },
  {
    type: "feed",
    optionName: "News Feed",
    origin: ICON_TYPE.OCTICONS,
    name: "checklist",
    size: 24,
    color: LIGHT_BLACK_COLOR_CODE,
  },
  {
    type: "1",
    optionName: "Restaurants",
    origin: ICON_TYPE.ICONICONS,
    name: "ios-restaurant-outline",
    size: 24,
    color: LIGHT_BLACK_COLOR_CODE,
  },
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

export const businessTypeOptions = [
  { id: 1, type: "9", name: "Open Now" },
  { id: 2, type: "1", name: "Open Delivery" },
  { id: 3, type: "10", name: "Offer Takeout" },
  { id: 4, type: "2", name: "Reservations" },
];

export const createEventSteps = [
  {
    heading: "1. Create a free account",
    description: `A new account can be created quickly, easily, and for no cost. You only need to enter your contact information and the specifics of the event to get started! No agreements or applications are required.`,
    origin: ICON_TYPE.ANT_ICON,
    name: "adduser",
    size: 70,
    color: COLORS.WHITE,
  },
  {
    heading: "2. Create your event page and start selling tickets.",
    description: `With our editable templates, creating a professional-looking event page is simple and takes only a few minutes. Then you may decide on your own price points, design a unique seating arrangement (if necessary), look over your payment methods, and start selling tickets!`,
    origin: ICON_TYPE.FONT_AWESOME5,
    name: "ticket-alt",
    size: 70,
    color: COLORS.WHITE,
  },
  {
    heading: "3. Advertise the event",
    description: `Our technology enables any event organiser to increase ticket sales by providing integrated marketing tools like email blasts, social sharing, and tracking codes. You can also more effectively track sales and evaluate your results with the help of our simple analytics and reporting features.`,
    origin: ICON_TYPE.ENTYPO,
    name: "megaphone",
    size: 70,
    color: COLORS.WHITE,
  },
  {
    heading: "4. Greetings to your visitors",
    description: `Our solution streamlines the check-in procedure for both live and virtual events on show day. Use our mobile app to scan people at the event, utilise your mobile device to sell tickets at the door, or use our online event capabilities to restrict access to the live broadcast to enrolled participants only!`,
    origin: ICON_TYPE.MATERIAL_COMMUNITY,
    name: "account-group",
    size: 70,
    color: COLORS.WHITE,
  },
  {
    heading: "5. Get paid quickly",
    description: `You'll receive payment shortly after your event ends in business days. No hassle, no complicated fee structures; just fast, easy payments!`,
    origin: ICON_TYPE.FONT_AWESOME5,
    name: "file-invoice-dollar",
    size: 70,
    color: COLORS.WHITE,
  },
];
export const ticketPricingPros = [
  {
    heading: "Free events never cost anything",
    description: `Free means free at AbbyPages, so if you're offering free events, you'll never be charged a penny in costs. There is no better offer available to you or your buyers.`,
    origin: ICON_TYPE.ANT_ICON,
    name: "like1",
    size: 70,
    color: COLORS.WHITE,
  },
  {
    heading: "Special pricing of $5 and below",
    description: `For all tickets $5 or less, there is a standard price of $0.25. (some restrictions may apply). For your buyers, this means keeping your ticket price as low as possible.`,
    origin: ICON_TYPE.FONT_AWESOME5,
    name: "dollar-sign",
    size: 70,
    color: COLORS.WHITE,
  },
  {
    heading: "No fees for onsite sales",
    description: `With the help of our free app, onsite ticket sales are simple. You can sell tickets at the door using your own mobile devices and what's best? We don’t charge fees for onsite sales, only credit card processing.`,
    origin: ICON_TYPE.ENTYPO,
    name: "creative-commons-noncommercial-us",
    size: 70,
    color: COLORS.WHITE,
  },
  {
    heading: "No agreements",
    description: `No agreements or obligations. Ever. Just provide us with some basic information about yourself (name, email, etc.) and how you prefer to get paid. Our user-friendly, reasonably priced ticketing software, in our opinion, speaks for itself!`,
    origin: ICON_TYPE.ICONICONS,
    name: "document-attach-sharp",
    size: 70,
    color: COLORS.WHITE,
  },
  {
    heading: "Without limiting service tiers",
    description: `Any event organizer, regardless of size, can use our whole toolkit for event management and ticketing. There is never a fee to use our complete feature package, unlike our competitors!`,
    origin: ICON_TYPE.ANT_ICON,
    name: "closecircle",
    size: 70,
    color: COLORS.WHITE,
  },
  {
    heading: "International fees",
    description: `Our always-affordable fees are catered to your area, whether you're selling tickets to an event in England, New Zealand, or with one of our other approved currencies. Locate yourself right now.`,
    origin: ICON_TYPE.FOUNDATION,
    name: "web",
    size: 90,
    color: COLORS.WHITE,
  },
];

export const whoPayOptions = [
  { id: 1, value: 1, title: "I want buyers to pay all fees" },
  { id: 2, value: 2, title: "I wish to pay all fees." },
];