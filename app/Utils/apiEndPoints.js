export default {
  GENERATE_TOKEN: "/api/tokenGenrate/jwtToken",
  USER_SIGN_UP: "/api/userAuth/userSignup",
  CHECKUSERNAME: "/api/userAuth/checkUsernameAtSignup",
  BUSINEES_SIGN_UP: "/api/userAuth/businessSignUp",
  RESENT_OTP: "/api/userAuth/resentotp",
  USER_VERIFY: "/api/userAuth/userVerify",
  USER_SIGN_IN: "/api/userAuth/userLogin",
  SOCIAL_LOGIN: "/api/userAuth/socialSiteLogin",
  FORGOT_PASSWORD: "/api/userAuth/forgotPassword",
  PASSWORD_UPDATE: "/api/userAuth/passwordUpdate",
  BUSINESS_REGISTER: "/api/userAuth/businessRegistration", //for get started
  SERVICE_LIST: "/api/services/getservicesDetail",
  GET_USER_PROFILE: "/api/userAuth/getUserProfileDetails",
  EDIT_USER_PROFILE: "/api/userAuth/editUserProfile",
  USER_PROFILE_IMAGE_UPLOAD: "/api/userAuth/userProfileChange",
  CHANGE_PASSWORD: "/api/userAuth/changePassword",
  DASHBOARD_DETAILS: "/api/userProfile/dashboardDetails", //not completed
  ADD_ADDRESS: "/api/userProfile/userCreateLocation",
  CHANGE_PRIMARY_EMAIL: "/api/userProfile/userCahngePrimaryEmail",
  DELETE_EMAIL_LOCATION: "/api/userProfile/userDeleteLocationEmail",
  ADD_EMAIL: "/api/userProfile/userCreateNewEmail",
  CHECK_NUMBER_FOR_NOTIFICATION: "/api/userProfile/checkMobileNumber",
  ADD_PHONE_NUMBER: "/api/userProfile/userAddMobileNumber",
  USER_NOTIFICATION_SETTING: "/api/userProfile/userNotificationSetting",
  CHANGE_PRIMARY_LOCATION: "/api/userProfile/userCahngePrimaryLocation",
  VERIFY_NOTIFICATION_EMAIL: "/api/userProfile/userNotificationVerifyEmail",
  GET_SERVICES_DETAIL: "/api/services/getcategory",
  POST_REVIEW: "/api/reviewRating/businessReview",
  BUSINESS_DETAILS: "api/business/businessDetails",
  GETABBYCONNECTPOST: "/api/abbyConnect/getAbbyConnectPost",
  BUSINESS_ITEM_LIST: "/api/business/getbusinessItems",
  BUSINESS_ITEM_CATEGORY_LIST: "/api/business/getBusinessItemCategoryList",
  BUSINESS_CATEGORY_LIST: "/api/services/getBusinessType",
  ADD_BUSINESS_PHOTO_VIDEO: "api/business/addBusinessPhotoVideo",
  RESTAURANTS_TABLE_BOOKING: "/api/orders/restaurants_table_booking",
  BUSINESS_ITEM_ORDER: "/api/orders/itemsOrders",
  BUSINESS_ITEM_ORDER_LIST: "/api/orders/getOrderListData",
  BUSINESS_ITEM_ORDER_DETAILS: "/api/orders/getOrderDetail",
  NOTIFICATION_LIST: "/api/userProfile/getNotificationList",
  RECENT_ACTIVITY: "/api/userProfile/getRecentActivity",
  RESTAURANT_TIME_SLOAT: "api/orders/restaurants_time_slot",
  SERVICE_BOOKING_LIST: "/api/bookService/serviceBookingList",
  GET_BUSINESS_CATEGORY: "/api/services/getBusinessCategory",
  SERVICE_BOOKING: "/api/bookService/serviceBooking",
  SERVICE_QUESTION_ANSWER: "/api/bookService/selectServiceQuestionAnswer",
  BUSINESS_LIKE: "/api/reviewRating/businessLike",
  NEARBY_BUSINESS_SEARCH: "/api/business/nearbyBusinessSearch",
  GET_PRODUCT_LIST: "/api/product/productList",
  FILTER_PRODUCTLIST: "/api/product/getProductFlterData",
  GET_PRODUCT_DETAIL: "/api/product/getProductDetails",
  PRODUCT_REVIEW: "/api/reviewRating/productReview",
  PRODUCT_BOOKING: "/api/orders/ordersShopingProduct",
  PRODUCT_ORDER_BOOKING: "/api/orders/ordersStoreShopingProduct",
  ORDERPAYMENT: "/api/payment/orderPayment",

  GET_BUSINESS_CATEGORY_DETAILS: "/api/services/getcategory",
  GET_USER_BUSINESS_DETAILS: "/api/userAuth/getUserProfileDetails",
  ADD_BUSINEES_INFO: "/api/userAuth/addBusinessInfo",
  EDIT_BUSINESS_BASIC_INFORMATION: "/api/userAuth/editBusinessDetails",
  COUNTRY_LIST: "/api/masterTableData/getStateCountry",
  ADD_ITEMS: "/api/restaurants/addItems",
  ADD_CATEGORY: "/api/restaurants/addItemsCategory",
  GET_ITEM_LIST: "/api/restaurants/getItemsList",
  GET_CATEGORY_LIST: "/api/restaurants/getItemCategoryList",
  CREATE_JOB: "/api/jobs/createJob",
  ADD_RESTAURANT_TABLE: "/api/restaurants/addRestoTable",
  GET_RESTAURANT_TABLE: "/api/restaurants/getRestoTable",
  GET_ORDER_LIST: "/api/orders/getOrderListForBusiness",
  GET_ORDER_DETAILS: "/api/orders/getbusinessOrderDetail",
  APPLY_JOB: "api/jobs/jobApplyForUser",
  ADD_BUSINESS_LOGO: "/api/business/addBusinessLogo",
  SET_OPENING_CLOSE_HOURS: "/api/business/setOpeningClosingHours",
  GET_OPENING_CLOSE_HOURS: "/api/business/getBusinessOpeningClosingHours",
  ADD_PHOTO_VIDEO: "/api/business/addBusinessPhotoVideo",
  BUSINESS_CATEGORY_UPDATE: "/api/business/businessCategoryUpdate",
  GET_BUSINESS_JOB_LIST: "/api/jobs/getJobListforBusiness",
  GET_JOB_LIST: "api/jobs/getJobListDetails",
  GET_JOB_DETAILS: "api/jobs/getJobDetailForUser",
  GET_BUSINESS_CATEGORY_LIST: "api/services/getBusinessCategory",
  GET_BUSINESS_PRODUCT_CATEGORY: "/api/services/getBusinessProductCategory",
  ADD_PRODUCT_ITEM: "/api/product/addProduct",
  BUSINESS_PRODUCT_LIST: "api/product/productList",

  GET_BUSINESS_PRODUCT_DETAILS: "api/product/getProductDetails",
  BUSINESS_PRODUCT_DELETE: "api/product/deleteProduct",
  BUSINESS_CHANGE_PASSWORD: "api/userAuth/changePassword",
  ORDER_STATUS_UPDATE: "api/orders/orderStatusUpdate",
  BUSINESS_ACTIVITY_COUNT: "api/business/businessActivityCount",

  CREATE_EVENTS: "api/events/createEvents",
  USERCOMMONLIKES: "api/masterTableData/userCommonLikes",
  GET_EVENT_CATEGORY_LIST: "/api/events/getEventCategoryList",
  GET_EVENT_LIST: "/api/events/getEventList",
  GET_EVENT_DETAILS: "/api/events/getEventDetails",
  GET_POPULAR_EVENTS: "/api/events/getPopularEvents",
  CHOOSE_INTEREST_EVENT: "/api/events/chooseIntrestedEvent",
  JOB_FILTER: "/api/jobs/JobSearchFilter",

  ITEMS_REMOVE_SHOW_CATEGORY: "/api/restaurants/restoItemsRemoveShow",
  ITEM_CATEGORY_REMOVE_SHOW: "/api/restaurants/itemsCategoryRemoveShow",
  GET_JOB_CATEGORY: "/api/jobs/getJobCategory",
  GET_PLACES: "/api/masterTableData/getStateCountry",
  GET_NEW_BUSINESS: "api/business/businessListNew",
  ORDER_CANCEL_BYUSER: "api/orders/orderCancelByUser",
  // Update job status
  JOB_REMOVE_STATUS_UPDATE: "/api/jobs/jobRemoveStatusUpdate",
  // update product status
  PRODUCT_STATUS_UPDATE: "/api/product/productStatusUpdate",
  // add and Edit product in bussines
  ADD_PRODUCT_FOR_STORE: "/api/store/addProductForStore",
  // Get bussiness Evemt
  GET_BUSINESS_EVENT_LIST: "/api/events/getBusinessEvents",
  // Event status
  EVENT_STATUS_UPDATE: "/api/events/eventRemoveStatusUpdate",
  // Get single Event details
  GET_SINGLE_EVENT_DETAILS: "/api/events/getSingleEventDetails", //for business
  // Get single job details
  GET_SINGLE_JOB_DETAILS: "/api/jobs/getSingleJobList",
  //buying ticket
  BUY_EVENT_TICKET: "/api/events/eventTicketBook",
  //payment of event ticket
  EVENTPAYMENTPROCESS: "/api/events/eventPaymentProcess",
  //getUserEventTicket
  GET_USER_EVENT_TICKET: "/api/events/getUserEventTicket",

  //job accepted
  JOBAPPROVEDBUSINESS: "/api/jobs/jobApprovedForBusiness",

  //for recent activities
  NEW_ACTIVITIES: "/api/business/getNewActivityFromApp",
  //for user Home Dashboard
  HOME_DASHBOARD: "api/dashboard/userHomeDashboard",
  BUSINESSLISTBYCATG: "api/business/getBusinessListByCategoryName",
  //for user dashoboard categories

  // for category search

  GET_SEARCH_CATEGORY_LIST: "/api/business/getAllCategoryById",

  CATEGORIES_LIST: "api/masterTableData/getCategoryBybusinessType",
  CATEGORIES_AT_HOME_LIST: "api/masterTableData/getCategoryAtHomePage",
  RECENT_VIEWED: "api/masterTableData/getAllRecentlyViewedBusiness",
  USER_BUSINESS_DETAIL:"api/business/businessDetailsForGoogle",
  USER_BUSINESS_GALLERY:"api/masterTableData/getUserBusinessImage",
  USER_BUSINESS_UPLOAD_IMAGE:"api/masterTableData/userBusinessImageUpload",
  USERCOMMONLIKES:"api/masterTableData/userCommonLikes",
  LIKE_UNLIKE_ABBY_CONNECT_POST:"api/abbyConnect/likeUnlikeAbbyConnectPost",
  COMMENT_ON_ABBY_CONNECT_POST:"api/abbyConnect/commentOnAbbyConnectPost",
  GET_ABBY_CONNET_POST_DETAILS:"api/abbyConnect/getAbbyConnectPostDetail",
};
