import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import TableManagement from "./components/TableManagement";
import styles from "./components/styles";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import Error from "../../../Components/Modal/error";
import Success from "../../../Components/Modal/success";
import { useFocusEffect } from "@react-navigation/native";
import { Images } from "../../../Utils/images";

const TableManagementView = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [ImgBaseUrl, setImgBaseUrl] = useState("");
  const [visible, setVisible] = useState(false);
  const [tableData, setTableData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getTableListFun();
      return () => getTableListFun();
    }, [])
  );

  const onPressAddTable = () => {
    navigation.navigate("AddTable");
  };

  const getTableListFun = async () => {
    setVisible(true);
    try {
      const { data } = await apiCall("get", ENDPOINTS.GET_RESTAURANT_TABLE);
      if (data.status === 200) {
        setTableData(data.data);
        setImgBaseUrl(data.table_img);
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

  const editTable = (item) => {
    navigation.navigate("AddTable", {
      TableData: item,
      type: "Edit",
      ImgBaseUrl,
    });
  };

  const _handleTableData = (item) => {
    return (
      <TouchableOpacity
        onPress={() => editTable(item)}
        style={styles.MainContain}
      >
        <Image
          style={styles.IMgeStyle}
          source={{ uri: ImgBaseUrl + item.table_img }}
        />
        <View style={styles.ViewContainer}>
          <Text style={styles.TableNottEXT}>Table No: {item.table_no}</Text>
          <View style={styles.settingPersonView}>
            <Image
              style={styles.UserIcon}
              source={Images.FOLLOWING_IMG}
            />
            <Text style={styles.PersonText}>
              Sitting Person: {item.sitting_person}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <TableManagement
        _handleTableData={(item) => _handleTableData(item)}
        tableData={tableData}
        onPressAddTable={() => onPressAddTable()}
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
export default TableManagementView;
