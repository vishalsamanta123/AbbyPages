import React, { useState } from "react";
import AddNewLocationView from "./components/AddNewLocationView";
import { View } from "react-native";
import CommonStyles from "../../../Utils/CommonStyles";
import { apiCall } from "../../../Utils/httpClient";
import ENDPOINTS from "../../../Utils/apiEndPoints";
import Loader from "../../../Utils/Loader";
import ShowMessage from "../../../Components/Modal/showMessage";

const AddNewLocation = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [messageShow, setMessageShow] = useState({
    visible: false,
    message: "",
    type: "",
  });
  const [Address, setAddress] = useState({
    location: "",
    latitude: "",
    longitude: "",
    pincode: "",
  });
  console.log("Address: ", Address);
  function validationFrom() {
    if (Address.location == "") {
      setMessageShow({
        visible: true,
        message: "Please enter location name",
        type: "error",
      });
      return false;
    } else if (Address.pincode == "") {
      setMessageShow({
        visible: true,
        message: "Please enter zip code",
        type: "error",
      });
      return false;
    } else if (Address.latitude == "") {
      setMessageShow({
        visible: true,
        message: "Please enter address properly",
        type: "error",
      });
      return false;
    } else if (Address.longitude == "") {
      setMessageShow({
        visible: true,
        message: "Please enter address properly",
        type: "error",
      });
      return false;
    }
    return true;
  }
  const onPressSave = async () => {
    const valid = validationFrom();
    if (valid) {
      try {
        setVisible(true);
        const params = Address;
        const { data } = await apiCall("POST", ENDPOINTS.ADD_ADDRESS, params);
        if (data.status === 200) {
          setMessageShow({
            visible: true,
            message: data.message,
            type: "success",
          });
          setVisible(false);
        } else {
          setMessageShow({
            visible: true,
            message: data.message,
            type: "error",
          });
          setVisible(false);
        }
      } catch (error) {
        setMessageShow({
          visible: true,
          message: error.message,
          type: "error",
        });
        setVisible(false);
      }
    }
  };
  const onPressCancelBtn = () => {
    navigation.goBack(null);
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <AddNewLocationView
        Address={Address}
        setAddress={setAddress}
        onPressSave={onPressSave}
        onPressCancelBtn={onPressCancelBtn}
      />
      <ShowMessage
        visible={messageShow?.visible}
        message={messageShow?.message}
        messageViewType={messageShow?.type}
        onEndVisible={() =>
          setMessageShow({
            visible: false,
            type: "",
            message: "",
          })
        }
      />
    </View>
  );
};
export default AddNewLocation;
