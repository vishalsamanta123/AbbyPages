import { ICON_TYPE } from "../Components/Icons/Icon";
import { COLORS } from "./Constant";

export const businessTypes = [
  {
    type: "Add a Business",
    optionName: "Abbypages for Business",
    origin: ICON_TYPE.MATERIAL_COMMUNITY,
    name: "bank-outline",
    size: 24,
    color: COLORS.LIGHT_BLACK,
    url: "https://business.abbypages.com/login",
  },
  {
    type: "3",
    optionName: "Directory",
    origin: ICON_TYPE.ICONICONS,
    name: "car-sport-outline",
    size: 24,
    color: COLORS.LIGHT_BLACK,
  },
  {
    type: "4",
    optionName: "Events",
    origin: ICON_TYPE.FEATHER_ICONS,
    name: "calendar",
    size: 24,
    color: COLORS.LIGHT_BLACK,
  },
  {
    type: null,
    optionName: "Favorite",
    origin: ICON_TYPE.ENTYPO,
    name: "heart-outlined",
    size: 26,
    color: COLORS.LIGHT_BLACK,
  },
  {
    type: "5",
    optionName: "Jobs",
    origin: ICON_TYPE.SIMPLELINE,
    name: "briefcase",
    size: 24,
    color: COLORS.LIGHT_BLACK,
  },
  {
    type: "2",
    optionName: "MarketPlace",
    origin: ICON_TYPE.MATERIAL_COMMUNITY,
    name: "shopping-outline",
    size: 24,
    color: COLORS.LIGHT_BLACK,
  },
  {
    type: "feed",
    optionName: "News Feed",
    origin: ICON_TYPE.OCTICONS,
    name: "checklist",
    size: 24,
    color: COLORS.LIGHT_BLACK,
  },
  {
    type: "1",
    optionName: "Restaurants",
    origin: ICON_TYPE.ICONICONS,
    name: "ios-restaurant-outline",
    size: 24,
    color: COLORS.LIGHT_BLACK,
  },
];
export const staticSearchOptions = [
  {
    business_type: "1",
    category_name: "Restaurants",
    origin: ICON_TYPE.ICONICONS,
    name: "restaurant",
    size: 22,
    color: COLORS.LIGHT_BLACK,
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
    color: COLORS.LIGHT_BLACK,
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
    color: COLORS.LIGHT_BLACK,
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
    color: COLORS.LIGHT_BLACK,
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
    color: COLORS.LIGHT_BLACK,
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
    color: COLORS.LIGHT_BLACK,
    option: "",
    selectOption: "",
    city: "Orlando, FL, USA",
  },
];
export const modalTypes = [
  {
    business_type: 3,
    modal_name: "Directory",
  },
  {
    business_type: 4,
    modal_name: "Event",
  },
  {
    business_type: 5,
    modal_name: "Job",
  },
  {
    business_type: 2,
    modal_name: "MarketPlace",
  },
  {
    business_type: 1,
    modal_name: "Restaurant",
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

export const event_page = [
  {
    title: "Create your own page",
    description:
      "Modern browsers and mobile devices are taken into consideration while designing our template layouts. The creation of a stunning event page straight out of the box simply requires a few clicks.",
  },
  {
    title: "Make a theme.",
    description:
      "A carefully designed event page that is prepared for the masses can be created by adding a logo and tagline. Increase the number of photographs in your built-in photo gallery to improve the aesthetics.",
  },
  {
    title: "Handle everything ourselves.",
    description:
      "Events that people who utilise AbbyPages have range widely in size and scope. Don't be concerned about needing to purchase more tickets or seats since we'll expand with your event. It is easy and straightforward to scale up.",
  },
  {
    title: "Event calendar",
    description:
      "Include a logo and tagline for your event calendar page, which will list and display all of your forthcoming events. This will appear to buyers as your event's 'homepage.'",
  },
  {
    title: "AbbyPages offers simple pricing",
    description:
      "The AbbyPages price for events that charge admission is 2% + $1, plus a 3% credit card fee. You have two options for paying the fees: either you or your buyers. Free events are always free and will never cost anything.",
  },
  {
    title: "Built-in mobile event pages",
    description:
      "Make a single event page that looks fantastic on a tablet, desktop, and mobile device. According to our analysis, 20% or so of ticket buyers will do it using a mobile device. I guarantee they'll be impressed.",
  },
  {
    title: "Numerous payment alternatives",
    description:
      "Use PayPal, your own merchant account, or AbbyPages's merchant account to accept credit cards. We guarantee safe and simple payment methods no matter what you decide.",
  },
  {
    title: "Check out questionnaire",
    description:
      "I'm curious how your audience learned about your event. Perhaps all you need is their t-shirt size. By selecting from a list of frequently asked questions or coming up with your own, learn crucial details about your ticket purchaser.",
  },
];

export const promoting_selling = [
  {
    title: "Tracking Codes",
    description:
      "Pre-sale? Student discount? Group rates? No problem. AbbyPages makes it easy to completely customize multiple ticket types for your events.",
  },

  {
    title: "An Ticket-purchase message",
    description:
      "With a post-purchase message that will show up on their order review form, thank your ticket buyers, remind them to 'Like' your group on Facebook, share links, or send dress code information.",
  },
  {
    title: "Discount coupons",
    description:
      "One of our preferred marketing strategies is the use of discount coupons. Make any number of fixed-price or percentage reductions available, then watch online ticket sales rise.",
  },

  {
    title: "Email in bulk",
    description:
      "Have essential event information that your customers need to be aware of? Before the big day, send your ticket buyers personalised emails.",
  },
  {
    title: "Buttons and Widgets",
    description:
      "While widgets enable customers to purchase tickets straight from your website, embeddable buttons will drive traffic to your AbbyPages event page.",
  },
  {
    title: "Social sharing",
    description:
      "Invite people to your event using Twitter and Facebook. Encourage your ticket buyers to post on the social feed of your event page so they can help you promote the event.",
  },
];

export const admin_deshboard = [
  {
    title: "Multiple ticket types",
    description:
      "If you want to know exactly where your clicks (and inevitably, ticket sales) are coming from, add tracking codes to buttons, widgets, and direct links. From your AbbyPages dashboard, keep an eye on this information.",
  },
  {
    title: "Services that are connected",
    description:
      "We make it simple to incorporate social media sites like Facebook, Twitter, and Instagram. Connect Dropbox, Google Analytics, and Adwords to advance data management even further.",
  },

  {
    title: "Multiple event shopping cart",
    description:
      "Customers can purchase tickets for any number of your events in one go.",
  },
  {
    title: "Event disclaimers",
    description:
      "To make sure attendees are aware of the terms and limitations of your event, provide an event disclaimers with each ticket. The Ticketing Service Agreement of AbbyPages governs all ticket sales.",
  },
  {
    title: "Events with password protection",
    description:
      " Want to keep your event under wraps for the time being? Use a password to secure your event so that only certain individuals (such as close friends and relatives) may view and purchase tickets.",
  },
  {
    title: "Multiple user accounts",
    description:
      "Allocate user accounts depending on various positions within your organisation, then observe how well your team collaborates.",
  },
  {
    title: "Event clone",
    description:
      "Organize a yearly or weekly event? Reduce the time it takes to set up your event by using the clone tool on a previous one.",
  },
  {
    title: "Customizable price tickets",
    description:
      "You can put up 'name your price' tickets for individuals who are looking to offer a little extra, which are ideal for organising charity donations. Additionally, we've seen musicians make use of this tool to include any fans who might not otherwise be able to purchase a ticket at the going rate.",
  },
];
export const levels = [
  { id: 1, value: 1, title: "Low" },
  { id: 2, value: 2, title: "Medium" },
  { id: 2, value: 3, title: "High" },
];

export const dayData = [
  { id: 1, name: "Today" },
  { id: 2, name: "Tomorrow" },
  { id: 3, name: "This Weekend" },
  { id: 4, name: "This Week" },
  { id: 5, name: "Next Week" },
  { id: 6, name: "Jump to Date" },
];

export const eventTickets = [
  {
    ticket_id: 1,
    ticket_title: "General Admission",
    ticket_price: 20,
    min_ticket_limit: 1,
    max_ticket_limit: 10,
    max_booking_time: 600000,
    ticket_quantity: 0,
    total_price: 0,
  },
  {
    ticket_id: 2,
    ticket_title: "VIP Admission",
    ticket_price: 50,
    min_ticket_limit: 1,
    max_ticket_limit: 10,
    max_booking_time: 600000,
    ticket_quantity: 0,
    total_price: 0,
  },
  {
    ticket_id: 3,
    ticket_title: "Hero Ticket",
    ticket_price: 80,
    min_ticket_limit: 1,
    max_ticket_limit: 10,
    max_booking_time: 600000,
    ticket_quantity: 0,
    total_price: 0,
  },
];
