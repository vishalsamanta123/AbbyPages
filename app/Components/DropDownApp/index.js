import { filter } from "lodash";
import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Modal, FlatList } from "react-native";
import CommonStyles from "../../Utils/CommonStyles";
import { COLORS } from "../../Utils/Constant";
import EmptyList from "../EmptyList";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import OnlyTextList from "../ListItemsView/OnlyTextList";
import MainHeader from "../MainHeader";
import MainInput from "../MainInput";
import ScaleText from "../ScaleText";
import styles from "./styles";

const DropDownApp = (props) => {
  const {
    DropDownText = "DropDown",
    headTxt = "DropDown",
    value = "",
    onPressDropDown = () => {},
    onLongPress = () => {},
    DropDownImg,
    onPressArrow = () => {},
    onPressItem = () => {},
    arrowShow = false,
    searchHeader = "Search",
    valueField = "",
    labelField = "",
  } = props;
  const [dropDown, setDropDown] = useState(false);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (props?.data?.length > 0 && Array.isArray(props?.data)) {
      // const newArray = props?.data?.map((itm) => {
      //   return { data: itm?.name };
      // });
      //   props?.data.forEach(function (item, i) {
      //     item["key"] = i + 1;
      // });
      setSearchData(props?.data);
    } else {
      setSearchData([]);
    }
  }, [props]);

  const handlePress = () => {
    onPressDropDown();
  };

  const handleSearchList = (text) => {
    const searchKey = text?.toLowerCase();
    const searchFilter = filter(searchData, (user) => {});
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
            {value === "" ? "Select Item" : value}
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
            notify={false}
            isSearch={false}
            headerText={searchHeader}
            loginButton={false}
            TxtMarginRight={70}
            onPressBack={() => {
              setDropDown(false);
              setSearchData([]);
            }}
          />
          <View style={CommonStyles.straightCon}>
            <View style={{ flex: 1 }}>
              <MainInput
                header={false}
                placeholder={"Search" + " " + headTxt}
                onChangeText={(txt) => {
                  handleSearchList(txt);
                }}
                value={value}
              />
            </View>
          </View>
          <FlatList
            data={searchData}
            style={{ paddingHorizontal: 10 }}
            renderItem={({ item, index }) => {
              // const getLabelField = item.find(({labelField}) => {
              // });
              return (
                <TouchableOpacity
                  style={styles.listItemVw}
                  onPress={() => {
                    onPressItem(item);
                    setDropDown(false);
                  }}
                >
                  <ScaleText style={styles.listItemTxt}>{item.name}</ScaleText>
                </TouchableOpacity>
              );
            }}
            // renderItem={({ item, index }) => {
            //   return renderList(item, index);
            // }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default DropDownApp;

// export const DropDownList = (props) => {
//   const {
//     itemText = "",
//     itemData = {},
//     onPressItem = () => {},
//     setDropDown = () => {},
//   } = props;
//   return (
//     <TouchableOpacity
//       style={styles.listItemVw}
//       onPress={() => {
//         onPressItem(itemData);
//         setDropDown(false);
//       }}
//     >
//       <ScaleText style={styles.listItemTxt}>{itemText}</ScaleText>
//     </TouchableOpacity>
//   );
// };
