import _, { filter } from "lodash";
import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Modal, FlatList } from "react-native";
import CommonStyles from "../../Utils/CommonStyles";
import { COLORS } from "../../Utils/Constant";
import EmptyList from "../EmptyList";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import MainHeader from "../MainHeader";
import MainInput from "../MainInput";
import ScaleText from "../ScaleText";
import styles from "./styles";

const SelectButton = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const {
    DropDownText = "DropDown",
    headTxt = "DropDown",
    value = "",
    onPressDropDown = () => {},
    onPressItem = () => {},
    searchHeader = "Search",
    valueField = "",
    labelField = "",
  } = props;
  const [dropDown, setDropDown] = useState(false);
  const [constListData, setConstListData] = useState([]);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    if (props?.data?.length > 0 && Array.isArray(props?.data)) {
      setListData(props?.data);
      setConstListData(props?.data);
    } else {
      setConstListData([]);
      setListData([]);
    }
  }, [props]);

  const handlePress = () => {
    onPressDropDown();
  };

  const handleSearchList = (text) => {
    if (text === "") {
      setListData(constListData);
      setSearchValue("");
    } else {
      const searchKey = text?.toLowerCase();
      setSearchValue(text);
      const searchArray = [...listData];
      const list = searchArray.filter((item) => {
        const label = item[labelField];
        return label?.toLowerCase().match(searchKey);
      });
      setListData(list);
    }
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <View style={styles.mainCon}>
        <View style={styles.headTxtVw}>
          <ScaleText style={styles.headTxt}>{headTxt}</ScaleText>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            handlePress();
            setDropDown(dropDown ? false : true);
          }}
          style={[
            CommonStyles.straightCon,
            { justifyContent: "space-between" },
          ]}
        >
          <ScaleText style={styles.dropDownTxt}>
            {value === "" || value === null || value === undefined
              ? "Select Item"
              : value}
          </ScaleText>
          <IconX
            origin={ICON_TYPE.MATERIAL_ICONS}
            size={20}
            name={dropDown ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          />
        </TouchableOpacity>
      </View>
      <Modal visible={dropDown}>
        <View style={CommonStyles.container}>
          <MainHeader
            isSearch={false}
            headerText={searchHeader}
            loginButton={false}
            TxtMarginRight={"12%"}
            onPressBack={() => {
              setDropDown(false);
              setListData([]);
            }}
            notifyIcon={false}
          />
          <View style={CommonStyles.straightCon}>
            <View style={{ flex: 1, marginHorizontal: 12 }}>
              <MainInput
                header={false}
                placeholder={"Search" + " " + headTxt}
                onChangeText={(txt) => {
                  handleSearchList(txt);
                }}
                value={searchValue}
              />
            </View>
          </View>
          <FlatList
            data={listData}
            style={{ paddingHorizontal: 10 }}
            renderItem={({ item, index }) => {
              const label = item[labelField];
              const value = item[valueField];
              return (
                <TouchableOpacity
                  style={styles.listItemVw}
                  onPress={() => {
                    onPressItem(item);
                    setDropDown(false);
                  }}
                >
                  <ScaleText style={styles.listItemTxt}>{label}</ScaleText>
                </TouchableOpacity>
              );
            }}
            ListEmptyComponent={() => {
              return <EmptyList />;
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default SelectButton;
