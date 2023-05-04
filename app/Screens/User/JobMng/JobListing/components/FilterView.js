import React, { useState } from "react";
import { View, Image, TouchableOpacity, Modal, ScrollView } from "react-native";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import { WHITE_COLOR_CODE } from "../../../../../Utils/Constant";
import Button from "../../../../../Components/Button";
import { apiCall } from "../../../../../Utils/httpClient";
import ENDPOINTS from "../../../../../Utils/apiEndPoints";
import Loader from "../../../../../Utils/Loader";
import { Images } from "../../../../../Utils/images";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import DropDownApp from "../../../../../Components/DropDownApp";

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
  const [selection, setSelection] = useState(false);

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

  const PickerComponent = ({ title, name, handleData, data, properWidth }) => {
    return (
      <View style={styles.filterCon}>
        <ScaleText
          style={[
            styles.filterTxt,
            {
              top: name ? -16 : 10,
              backgroundColor: name ? WHITE_COLOR_CODE : null,
              lineHeight: 20,
              width: properWidth,
              textAlign: "center",
            },
          ]}
        >
          {title}
        </ScaleText>
        <View style={styles.filterVw}>
          <ScaleText style={styles.filterTxt}>{name}</ScaleText>
          <TouchableOpacity onPress={(type) => handleData(type)}>
            <Image
              resizeMode={"contain"}
              style={{ bottom: 10 }}
              source={Images.QTY_MINUS_IMG}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <Modal visible={filterModal} onRequestClose={() => setFilterModal(false)}>
      <MainHeader
        isSearch={false}
        headerText={"Filter Jobs"}
        loginButton={false}
        onPressBack={() => setFilterModal(false)}
        notify={false}
        TxtMarginRight={"17%"}
      />
      <ScrollView contentContainerStyle={CommonStyles.scrollCon}>
        <View style={{ flex: 1 }}>
          <View style={styles.filterDropVw}>
            <DropDownApp
              headTxt={"Country"}
              data={country}
              value={props?.filterData?.country_name_d}
              labelField={"name"}
              valueField={"country_id"}
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
            <DropDownApp
              headTxt={"State/Province"}
              data={state}
              value={props?.filterData?.state_name_d}
              labelField={"name"}
              valueField={"state_id"}
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
            <DropDownApp
              headTxt={"City"}
              data={city}
              value={props?.filterData?.city_name_d}
              labelField={"name"}
              valueField={"city_id"}
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
            <DropDownApp
              headTxt={"Hire Type"}
              data={hireType}
              value={props?.filterData?.hire_name_d}
              labelField={"name"}
              valueField={"type"}
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
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Button
            buttonText={"Filter"}
            onPress={() => {
              setFilterModal(false);
              handleFilter();
            }}
          />
        </View>
      </ScrollView>
    </Modal>
  );
};
export default FilterView;
