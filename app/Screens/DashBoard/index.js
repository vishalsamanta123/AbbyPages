import React, { useEffect, useState } from "react";
import { View } from "react-native";
import DashBoardScreen from "./components/DashBoardScreen";
import CommonStyles from "../../Utils/CommonStyles";
import _ from "lodash";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import Error from "../../Components/Modal/error";
import QuestionModal from "../../Components/Modal/questionModal";

const DashBoardView = ({ navigation }) => {
  const [location, setLocation] = useState({
    address: "",
    latitude: "",
    longitude: "",
  });
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [forBusinees, setForBusinees] = useState(false);
  const [dashBoardDetail, setDashBoardDetail] = useState("");
  const [businessCategory, setBusinessCategory] = useState({
    business_type: "",
    category_name: "",
    description: "",
    id: "",
    image: "",
    parents_id: "",
    status: "",
  });
  const openDeliveryObj = {
    business_type: 1,
    category_name: "Open Delivery",
    description: null,
    id: "",
    image: "no_image.png",
    is_both: 1,
    is_show: 1,
    main_parent_id: "",
    parents_id: "",
    status: 1,
    option: "1",
  };
  const reservationsObj = {
    business_type: 1,
    category_name: "Reservations",
    description: null,
    id: "",
    image: "no_image.png",
    is_both: 1,
    is_show: 1,
    main_parent_id: "",
    parents_id: "",
    status: 1,
    option: "2",
  };
  const [businessCategoryModal, setBusinessCategoryModal] = useState(false);
  const [subCatType, setSubCatType] = useState("");
  const [subCatData, setSubCatData] = useState([
    openDeliveryObj,
    reservationsObj,
  ]);
  const [newActivity, setNewActivity] = useState({
    recent_activity: [],
    product_url: "",
    base_url: "",
  });
  const [directory, setDirectory] = useState({
    business_type: [],
    top_business: [],
    ourDirectory: [
      {
        type: 0,
        search_type: "All",
      },
      {
        type: 1,
        search_type: "Featured",
      },
      {
        type: 2,
        search_type: "Best Rate",
      },
      {
        type: 3,
        search_type: "Most View",
      },
      {
        type: 4,
        search_type: "Popular",
      },
      {
        type: 5,
        search_type: "Ad Directory",
      },
    ],
  });
  const [selectedType, setSelectedType] = useState(0);

  useEffect(() => {
    handleRecentActivity();
    handleDirectory(selectedType);
  }, []);

  const handleRecentActivity = async () => {
    try {
      setVisible(true);
      const { data } = await apiCall("GET", ENDPOINTS.NEW_ACTIVITIES);
      if (data.status === 200) {
        setNewActivity({
          recent_activity: data.data.length > 0 ? data.data : [],
          product_url: data.product_url,
          base_url: data.base_url,
        });
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error.message);
      setVisible(false);
    }
  };
  const handleDirectory = async (type) => {
    try {
      setSelectedType(type ? type : 0);
      const params = {
        search_type: type ? type : 0,
      };
      setVisible(true);
      const { data } = await apiCall("POST", ENDPOINTS.HOME_DASHBOARD, params);
      if (data.status === 200) {
        setDirectory({
          ...directory,
          business_type:
            data.data.business_type.length > 0 ? data.data.business_type : [],
          top_business:
            data.data.top_business.length > 0 ? data.data.top_business : [],
        });
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error.message);
      setVisible(false);
    }
  };
  const onPressRestro = () => {
    navigation.navigate("Listings");
  };
  const onPressJob = () => {
    navigation.navigate("JobList");
  };
  const onPressProvider = () => {
    navigation.navigate("ServiceProviderListing");
  };
  const onPressEvents = () => {
    navigation.navigate("EventListings");
  };
  const onPressShopping = () => {
    navigation.navigate("ShopList");
  };
  const SearchBusinessCategory = (searchKey) => {
    const lowerCased = searchKey.toLowerCase();
    const searchArray = [...dashBoardDetail];
    const list = _.filter(searchArray, (item) => {
      return item.category_name.toLowerCase().match(lowerCased);
    });
    if (searchKey == "") {
      setVisible(true);
      onPressSearchBusinessCategory();
      setVisible(false);
    }
    setDashBoardDetail(list);
  };
  const onPressSearch = async () => {
    if (businessCategory?.business_type != "") {
      const params = {
        latitude: location.latitude,
        longitude: location.longitude,
        category_id: businessCategory.id,
      };
      if (businessCategory.category_name !== "") {
        setBusinessCategory({
          ...businessCategory,
          category_name: "",
        });
        setLocation({
          address: "",
          latitude: "",
          longitude: "",
        });
        if (businessCategory.business_type == 1) {
          navigation.navigate("Listings", { nearbySearch: params });
        }
        if (businessCategory.business_type == 2) {
          navigation.navigate("ShopList", { nearbySearch: params });
        }
        if (businessCategory.business_type == 3) {
          navigation.navigate("ServiceProviderListing", {
            nearbySearch: params,
          });
        }
      } else {
        setErrorMessage("Please select any category");
        setVisibleErr(true);
      }
    } else {
      setErrorMessage("No list available,Please select any other category");
      setVisibleErr(true);
    }
  };
  const onPressSearchBusinessCategory = async () => {
    setVisible(true);
    setBusinessCategoryModal(true);
    try {
      const { data } = await apiCall("POST", ENDPOINTS.GET_SERVICES_DETAIL);
      if (data.status === 200) {
        setDashBoardDetail(data.data);
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error.message);
      setVisible(false);
    }
  };
  const handleSubItems = async (type) => {
    if (type != subCatType) {
      setSubCatData([openDeliveryObj, reservationsObj]);
      setSubCatType("");
      if (type === 1 || 3) {
        setSubCatType(type);
        handleCategories(type);
      } else {
        setSubCatType(type);
      }
    }
  };
  const handleCategories = async (type) => {
    try {
      const params = {
        business_type: type,
      };
      const { data } = await apiCall("POST", ENDPOINTS.CATEGORIES_LIST, params);
      if (data.status === 200) {
        if (type === 3) {
          setSubCatData(data.data);
        } else {
          data.data.map((item) => {
            subCatData.push(item);
            setSubCatData([...subCatData]);
          });
        }
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setVisibleErr(true);
      setErrorMessage(error.message);
    }
  };
  const handleNavTo = (type, index) => {
    if (typeof type === "object") {
      if (
        type.category_name === "Open Delivery" ||
        type.category_name === "Reservations"
      ) {
        const newObj = subCatData[index];
        if (type.category_name === "Open Delivery") {
          const newData = { ...newObj, option: "1" };
          navigation.navigate("Listings", { nearbySearch: newData });
        } else {
          const newData = { ...newObj, option: "2" };
          navigation.navigate("Listings", { nearbySearch: newData });
        }
      } else {
      }
    } else {
      if (type === "postJob" || type === "createEvent" || type === "sellOn") {
        setForBusinees(true);
      } else {
        if (type === "findEvent") {
          navigation.navigate("EventListings");
        } else {
          if (type === "shop") {
            navigation.navigate("ShopList");
          } else {
            if (type === "findJob") {
              navigation.navigate("JobList");
            }
          }
        }
      }
    }
  };
  const handlePostJob = (type) => {
    if (type === 1) {
      navigation.navigate("BusinessSignUp");
      setForBusinees(false);
    } else {
      navigation.navigate("Login", { loginType: "new" });
      setForBusinees(false);
    }
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <DashBoardScreen
        setLocation={setLocation}
        location={location}
        SearchBusinessCategory={SearchBusinessCategory}
        businessCategory={businessCategory}
        setBusinessCategory={setBusinessCategory}
        businessCategoryModal={businessCategoryModal}
        setBusinessCategoryModal={setBusinessCategoryModal}
        dashBoardDetail={dashBoardDetail}
        onPressSearch={onPressSearch}
        onPressSearchBusinessCategory={onPressSearchBusinessCategory}
        onPressRestro={onPressRestro}
        onPressEvents={onPressEvents}
        onPressJob={onPressJob}
        onPressShopping={onPressShopping}
        onPressProvider={onPressProvider}
        newActivity={newActivity}
        directory={directory}
        handleDirectory={handleDirectory}
        selectedType={selectedType}
        handleSubItems={handleSubItems}
        subCatType={subCatType}
        subCatData={subCatData}
        handleNavTo={handleNavTo}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => setVisibleSuccess(false)}
      />
      <QuestionModal
        surringVisible={forBusinees}
        cancelModel={() => setForBusinees(false)}
        modalType={""}
        topMessage={"Add a Business"}
        message={
          "Are you a customer or the owner/manager of the busineess you'd like to add?"
        }
        positiveTxt={"I m a customer"}
        negativeTxt={"This is my businesss"}
        positiveResponse={() => handlePostJob(1)}
        negativeResponse={() => handlePostJob(2)}
      />
    </View>
  );
};
export default DashBoardView;
