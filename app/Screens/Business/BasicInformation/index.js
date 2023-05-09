import React, { useState, useEffect } from "react";
import { View } from "react-native";
import BasicInformationScreen from "./component/BasicInformationScreen";
import { apiCall, setDefaultHeader } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/showMessage";
import Success from "../../../Components/Modal/success";
import { _ } from "lodash";

const BasicInformation = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [businessCategory, setBusinessCategory] = useState(false);
  const [CountrySta, setCountrySta] = useState(false);
  const [CountryData, setCountryData] = useState([]);
  const [countryName, setCountryName] = useState();
  const [CountryDataAfterSe, setCountryDataAfterSe] = useState([]);

  const [SiteSta, setSiteSta] = useState(false);
  const [SiteDataAfterSe, setSiteDataAfterSe] = useState([]);
  const [SiteData, setSiteData] = useState([]);
  const [SiteName, setSiteName] = useState();
  const [Address1, setAddress1] = useState();

  const [CitySta, setCitySta] = useState(false);
  const [CityData, setCityData] = useState([]);
  const [cityName, setCityName] = useState();
  const [CityDataAfterSe, setCityDataAfterSe] = useState([]);
  const [subCategoryList, setServiceList] = useState([]);
  const [ServiceListForSearch, setServiceListForSearch] = useState([]);
  const [BusinessCategoryList, setBusinessCategoryList] = useState([]);
  const [address, setShowAddress] = useState(0);

  const [BasicInformationData, setBasicInformationData] = useState({
    business_name: "",
    business_category: [],
    address_first: "",
    address_second: "",
    latitude: "22.70814",
    longitude: "75.9230",
    country: "",
    city: "",
    state: "",
    zip_code: "",
    phone: "",
    website: "",
    offerings_web_address: "",
    alcohol: 0,
    service_area: 0,
    has_tv: 0,
    offers_delivery: 0,
    accept_credit_card: 0,
    takes_reservations: 0,
    caters: 0,
    wi_fi: 0,
    offers_military_discount: 0,
    good_for_happy_hour: 0,
    wheelchair_accessible: 0,
    dogs_allowed: 0,
    accept_cryptocurrency: 0,
    outdoor_seating: 0,
    gender_neutral_restrooms: 0,
    bike_parking: 0,
    offers_takeout: 0,
    open_to_all: 0,
    waiter_service: 0,
    sitdown_dining: 0,
    vegan_options: 0,
    staff_wears_gloves: 0,
    lactation_room: 0,
    happy_hour_specials: 0,
    masks_required: 0,
    contactless_payments: 0,
    high_chairs: 0,
    changing_tables: 0,
    black_owned: 0,
  });

  useEffect(() => {
    getUserData();
    GetCoutryList();
    setAddress1(BasicInformationData.address_first);
  }, []);

  const getUserData = async () => {
    setVisible(true);
    try {
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_USER_BUSINESS_DETAILS
      );
      if (data.status === 200) {
        setBusinessCategoryList(data.data.business_category);
        setBasicInformationData(data.data);
        setCountryName(data.data.country_name);
        setSiteName(data.data.state_name);
        setSiteName(data.data.state_name);
        setCityName(data.data.city_name);

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
  };

  const GetCoutryList = async () => {
    try {
      const params = {
        status: 0,
      };
      const { data } = await apiCall("POST", ENDPOINTS.COUNTRY_LIST, params);
      if (data.status === 200) {
        setCountryData(data.data);
        setCountryDataAfterSe(data.data);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };

  const onPressStepSecond = async () => {
    setVisible(true);
    try {
      const params = BasicInformationData;
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.EDIT_BUSINESS_BASIC_INFORMATION,
        params
      );
      if (data.status === 200) {
        setVisible(false);
        setSuccessMessage("Successfully Updated");
        setVisibleSuccess(true);
      } else {
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
    }
  };

  const onPressBusinessCategories = () => {
    setBusinessCategory(!businessCategory);
    businessCategory === false ? handleServiceList() : null;
  };

  const handleServiceList = async () => {
    try {
      setVisible(true);
      const { data } = await apiCall(
        "POST",
        ENDPOINTS.GET_BUSINESS_CATEGORY_DETAILS
      );
      if (data.status === 200) {
        setServiceList(data.data);
        setServiceListForSearch(data.data);
        serviceSelect(data.data);
        setVisible(false);
      } else {
        setErrorMessage(data.message);
        setVisibleErr(true);
        setVisible(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisibleErr(true);
      setVisible(false);
    }
  };

  const serviceSelect = (data) => {
    const arrayData = [...data];
    if (BusinessCategoryList) {
      if (BusinessCategoryList != null || BusinessCategoryList.length > 0) {
        data.map((item, i) => {
          BusinessCategoryList.map((selectItem, index) => {
            if (item.id == selectItem.category_id) {
              arrayData[i].check = true;
            }
          });
        });
      }
    }
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
  const onClickService = (index) => {
    let subCategoryListData = [...subCategoryList];
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
    let commaSep = [];
    commaSep = selectPartnerCaste.map((item) => item.id).join(",");
    var businessCate = commaSep.split(",");
    setBasicInformationData({
      ...BasicInformationData,
      business_category: businessCate,
    });
  };

  const CounrtySearch = (search) => {
    if (search) {
      let data = CountryData;
      var searchText = search.trim().toLowerCase();
      let dataArray2 = data.filter((l) => {
        return l.name.toLowerCase().match(searchText);
      });
      setCountryData(dataArray2);
    } else {
      setCountryData(CountryDataAfterSe);
    }
  };

  const onClickCountry = async (item) => {
    setCountrySta(!CountrySta);
    setCountryName(item.name);
    setBasicInformationData({
      ...BasicInformationData,
      country: item.country_id,
    });
    try {
      const params = {
        status: 1,
        country_id: item.country_id,
      };
      const { data } = await apiCall("POST", ENDPOINTS.COUNTRY_LIST, params);
      if (data.status === 200) {
        setSiteData(data.data);
        setSiteDataAfterSe(data.data);
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

  const siteSearch = (search) => {
    if (search) {
      let data = SiteData;
      var searchText = search.trim().toLowerCase();
      let dataArray2 = data.filter((l) => {
        return l.name.toLowerCase().match(searchText);
      });
      setSiteData(dataArray2);
    } else {
      setSiteData(SiteDataAfterSe);
    }
  };

  const onClickSite = async (item) => {
    setSiteSta(!SiteSta);
    setSiteName(item.name);
    setBasicInformationData({
      ...BasicInformationData,
      state: item.state_id,
    });
    try {
      const params = {
        status: 2,
        country_id: item.country_id,
        state_id: item.state_id,
      };
      const { data } = await apiCall("POST", ENDPOINTS.COUNTRY_LIST, params);
      if (data.status === 200) {
        setCityData(data.data);
        setCityDataAfterSe(data.data);
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

  const citySearch = (search) => {
    if (search) {
      let data = CityData;
      var searchText = search.trim().toLowerCase();
      let dataArray2 = data.filter((l) => {
        return l.name.toLowerCase().match(searchText);
      });
      setCityData(dataArray2);
    } else {
      setCityData(CityDataAfterSe);
    }
  };

  const onClickCity = async (item) => {
    setCitySta(!CitySta);
    setCityName(item.name);
    setBasicInformationData({
      ...BasicInformationData,
      city: item.state_id,
    });
  };
  function onPressAddressOne() {
    setShowAddress(1);
  }
  function onPressAddresstwo() {
    setShowAddress(2);
  }
  async function onPressSite() {
    setSiteSta(!SiteSta);
    if (SiteSta == false && BasicInformationData.country) {
      try {
        setVisible(true);
        const params = {
          status: 1,
          country_id: BasicInformationData.country,
        };
        const { data } = await apiCall("POST", ENDPOINTS.COUNTRY_LIST, params);
        if (data.status === 200) {
          setSiteData(data.data);
          setSiteDataAfterSe(data.data);
          setVisible(false);
        } else {
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
        setVisible(false);
      }
    }
  }
  async function onPressCity() {
    setCitySta(!CitySta);
    if (
      CitySta == false &&
      BasicInformationData.country &&
      BasicInformationData.state
    ) {
      try {
        setVisible(true);
        const params = {
          status: 2,
          country_id: BasicInformationData.country,
          state_id: BasicInformationData.state,
        };
        const { data } = await apiCall("POST", ENDPOINTS.COUNTRY_LIST, params);
        if (data.status === 200) {
          setCityData(data.data);
          setCityDataAfterSe(data.data);
          setVisible(false);
        } else {
          setErrorMessage(data.message);
          setVisibleErr(true);
          setVisible(false);
        }
      } catch (error) {
        setErrorMessage(error.message);
        setVisibleErr(true);
        setVisible(false);
      }
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <BasicInformationScreen
        BasicInformationData={BasicInformationData}
        setBasicInformationData={setBasicInformationData}
        onPressBusinessCategories={onPressBusinessCategories}
        businessCategory={businessCategory}
        subCategoryList={subCategoryList}
        onClickService={onClickService}
        onPressStepSecond={onPressStepSecond}
        onPressCountry={() => setCountrySta(!CountrySta)}
        CountrySta={CountrySta}
        CountryData={CountryData}
        countryName={countryName}
        CounrtySearch={(search) => CounrtySearch(search)}
        CategorySearch={(search) => CategorySearch(search)}
        onClickCountry={(item) => onClickCountry(item)}
        onPressSite={() => onPressSite()}
        siteSearch={(search) => siteSearch(search)}
        onClickSite={(item) => onClickSite(item)}
        SiteSta={SiteSta}
        SiteData={SiteData}
        SiteName={SiteName}
        onPressCity={() => onPressCity()}
        citySearch={(search) => citySearch(search)}
        onClickCity={(item) => onClickCity(item)}
        CityData={CityData}
        cityName={cityName}
        CitySta={CitySta}
        Address1={Address1}
        onPressAddressOne={onPressAddressOne}
        onPressAddresstwo={onPressAddresstwo}
        address={address}
        BusinessCategoryList={BusinessCategoryList}
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
export default BasicInformation;
