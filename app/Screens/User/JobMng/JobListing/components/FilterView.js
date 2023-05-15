import React, { useState } from "react";
import { View, Modal } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import Button from "../../../../../Components/Button";
import { apiCall } from "../../../../../Utils/httpClient";
import ENDPOINTS from "../../../../../Utils/apiEndPoints";
import MainHeader from "../../../../../Components/MainHeader";
import SelectButton from "../../../../../Components/SelectButton";

const FilterView = (props) => {
  const {
    filterModal = false,
    setFilterModal = () => {},
    filterData = {},
    handleFilter = () => {},
  } = props;
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [hireType, setHireType] = useState([]);

  const getPlaces = async (type) => {
    try {
      const params = {
        status: type,
      };
      if (type === 1) {
        params.country_id = filterData.country;
      } else if (type === 2) {
        params.state_id = filterData.state;
      }
      const { data } = await apiCall("POST", ENDPOINTS.GET_PLACES, params);
      if (data.status === 200) {
        if (type == 0) {
          setCountry(data.data);
        }
        if (type == 1) {
          setState(data.data);
        }
        if (type == 2) {
          setCity(data.data);
        }
      }
    } catch (error) {}
  };
  const handleJobType = () => {
    setHireType([
      {
        type: "1",
        name: "Fixed Term Freelance",
      },
      {
        type: "2",
        name: "Paid Freelance",
      },
      {
        type: "3",
        name: "Unpaid Full Time",
      },
      {
        type: "4",
        name: "Paid Internship",
      },
      {
        type: "5",
        name: "Part Time Temporary",
      },
      {
        type: "6",
        name: "Unpaid Internship",
      },
    ]);
  };

  return (
    <Modal visible={filterModal} onRequestClose={() => setFilterModal(false)}>
      <MainHeader
        isSearch={false}
        headerText={"Filter Jobs"}
        loginButton={false}
        onPressBack={() => setFilterModal(false)}
        notifyIcon={false}
        resetButton={true}
        onPressReset={() => {
          props.setFilterData({
            ...props.filterData,
            country: "",
            state: "",
            city: "",
            job_type: "",
            country_name_d: "",
            state_name_d: "",
            city_name_d: "",
            hire_name_d: "",
          });
        }}
      />
      <View style={CommonStyles.container}>
        <View style={{ flex: 1 }}>
          <View style={styles.filterDropVw}>
            <SelectButton
              headTxt={"Country"}
              data={country}
              value={props?.filterData?.country}
              searchHeader={"Country"}
              labelField={"name"}
              valueField={"name"}
              onPressDropDown={() => getPlaces(0)}
              onPressItem={(item) => {
                props.setFilterData({
                  ...props.filterData,
                  country: item?.country_id,
                  country_name_d: item?.name,
                });
              }}
            />
          </View>
          <View style={styles.filterDropVw}>
            <SelectButton
              headTxt={"State/Province"}
              data={state}
              searchHeader={
                props?.filterData?.country_name_d === ""
                  ? ""
                  : " " + props?.filterData?.country_name_d?.substring(0, 12)
              }
              value={props?.filterData?.state}
              labelField={"name"}
              valueField={"name"}
              onPressDropDown={() => getPlaces(1)}
              onPressItem={(item) => {
                props.setFilterData({
                  ...props.filterData,
                  state: item?.state_id,
                  state_name_d: item?.name,
                });
              }}
            />
          </View>
          <View style={styles.filterDropVw}>
            <SelectButton
              headTxt={"City"}
              data={city}
              searchHeader={
                props?.filterData?.state_name_d === ""
                  ? ""
                  : " " + props?.filterData?.state_name_d?.substring(0, 12)
              }
              value={props?.filterData?.city}
              labelField={"name"}
              valueField={"name"}
              onPressDropDown={() => getPlaces(2)}
              onPressItem={(item) => {
                props.setFilterData({
                  ...props.filterData,
                  city: item?.city_id,
                  city_name_d: item?.name,
                });
              }}
            />
          </View>
          <View style={styles.filterDropVw}>
            <SelectButton
              headTxt={"Hire Type"}
              searchHeader={"Hire Type"}
              data={hireType}
              value={props?.filterData?.job_type}
              labelField={"name"}
              valueField={"name"}
              onPressDropDown={() => handleJobType()}
              onPressItem={(item) => {
                props.setFilterData({
                  ...props.filterData,
                  hire_name_d: item?.name,
                  job_type: item?.type,
                });
              }}
            />
          </View>
          <View style={styles.filterDropVw}>
            <Button
              buttonText={"Filter"}
              onPress={() => {
                setFilterModal(false);
                handleFilter();
              }}
              width={"100%"}
              paddingHeight={10}
              borderRadius={20}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default FilterView;
