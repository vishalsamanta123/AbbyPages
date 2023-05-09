import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import GetStartedScreen from "./component/GetStartedScreen";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/showMessage";
import Success from "../../../Components/Modal/success";
import { _ } from "lodash";
const GetStarted = ({ navigation, route }) => {
  const email = route.params.email;
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [businessCategory, setBusinessCategory] = useState(false);
  const [subCategoryList, setServiceList] = useState([]);
  const [ServiceListForSearch, setServiceListForSearch] = useState([]);
  const [isSelectedServiceId, setIsSelectedServiceId] = useState([]);
  const [SelectCategory, setSelectCategory] = useState([]);
  const [ShowSelectCategory, setShowSelectCategory] = useState();
  const [businessRegistartionData, setBusinessRegistartionData] = useState({
    business_category: [],
    business_phone: "",
    business_name: "",
    website: "",
    address: "",
    latitude: "22.54214",
    longitude: "372545",
    zip_code: "",
  });
  useEffect(() => {
    handleServiceList();
  }, []);
  function validationFrom() {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (businessRegistartionData.business_category == "") {
      setErrorMessage("Please select category");
      setVisibleErr(true);
      return false;
    }
    if (businessRegistartionData.business_name == "") {
      setErrorMessage("Please enter your business name");
      setVisibleErr(true);
      return false;
    }
    if (businessRegistartionData.business_phone == "") {
      setErrorMessage("Please enter your business phone number");
      setVisibleErr(true);
      return false;
    }
    if (businessRegistartionData.website == "") {
      setErrorMessage("Please enter your official website");
      setVisibleErr(true);
      return false;
    }
    if (businessRegistartionData.address == "") {
      setErrorMessage("Please enter your address");
      setVisibleErr(true);
      return false;
    }
    if (businessRegistartionData.zip_code == "") {
      setErrorMessage("Please enter your zip code");
      setVisibleErr(true);
      return false;
    }

    return true;
  }
  const onPressContinue = async () => {
    const valid = validationFrom();
    if (valid) {
      setVisible(true);
      try {
        const params = businessRegistartionData;
        const { data } = await apiCall(
          "POST",
          ENDPOINTS.BUSINESS_REGISTER,
          params
        );
        if (data.status === 200) {
          navigation.navigate("BusinessUserVerify", { email: email });
          setBusinessRegistartionData({
            business_name: "",
            business_category: "[1, 2]",
            business_phone: "",
            website: "",
            address: "",
            latitude: "",
            longitude: "",
            zip_code: "",
          });
          setVisible(false);
        } else {
          setVisible(false);
          setErrorMessage(data.message);
          setVisibleErr(true);
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
        setVisible(false);
      }
    }
  };
  const onPressBusinessCategories = () => {
    setBusinessCategory(!businessCategory);
    // handleServiceList();
  };

  const handleServiceList = async () => {
    try {
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_BUSINESS_CATEGORY_DETAILS
      );
      if (data.status === 200) {
        setServiceList(data.data);
        setShowSelectCategory(data.data);
        setServiceListForSearch(data.data);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const onClickService = (categoriesName) => {
    const index = ServiceListForSearch.findIndex(
      (obj) => obj.category_name === categoriesName
    );
    if (SelectCategory.length < 3) {
      let subCategoryListData = [...ShowSelectCategory];
      subCategoryListData[index].check = !subCategoryListData[index].check;
      const data = _.filter(subCategoryListData, { check: true });
      const selectPartnerCaste = [];
      subCategoryListData.map((item) => {
        item.check == true
          ? selectPartnerCaste.push({
              id: item.id,
            })
          : null;
      });
      setServiceList(subCategoryListData);
      setShowSelectCategory(subCategoryListData);
      setSelectCategory(selectPartnerCaste);
      let commaSep = [];
      commaSep = selectPartnerCaste.map((item) => item.id).join(",");
      var businessCate = commaSep.split(",");
      setBusinessRegistartionData({
        ...businessRegistartionData,
        business_category: businessCate,
      });
    } else {
      setErrorMessage("You can select upto three categories");
      setVisibleErr(true);
    }
  };

  const onRemoveService = (index) => {
    let subCategoryListData = [...ShowSelectCategory];
    subCategoryListData[index].check = !subCategoryListData[index].check;
    const data = _.filter(subCategoryListData, { check: true });
    const selectPartnerCaste = [];
    subCategoryListData.map((item) => {
      item.check == true
        ? selectPartnerCaste.push({
            id: item.id,
          })
        : null;
    });
    setServiceList(subCategoryListData);
    setSelectCategory(selectPartnerCaste);
    setShowSelectCategory(subCategoryListData);
    let commaSep = [];
    commaSep = selectPartnerCaste.map((item) => item.id).join(",");
    var businessCate = commaSep.split(",");
    setBusinessRegistartionData({
      ...businessRegistartionData,
      business_category: businessCate,
    });
  };

  const CategorySearch = (search) => {
    if (search) {
      let data = subCategoryList;
      var searchText = search.trim().toLowerCase();
      let dataArray2 = data.filter((l) => {
        return l.category_name.toLowerCase().match(searchText);
      });
      setServiceList(dataArray2);
    } else {
      setServiceList(ServiceListForSearch);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <GetStartedScreen
        businessRegistartionData={businessRegistartionData}
        setBusinessRegistartionData={setBusinessRegistartionData}
        onPressContinue={onPressContinue}
        onPressBusinessCategories={onPressBusinessCategories}
        businessCategory={businessCategory}
        subCategoryList={subCategoryList}
        onClickService={onClickService}
        CategorySearch={CategorySearch}
        onRemoveService={onRemoveService}
        ShowSelectCategory={ShowSelectCategory}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() => ("Home", setVisibleSuccess(false))}
      />
    </View>
  );
};
export default GetStarted;
