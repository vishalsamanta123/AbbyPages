import React, { useState } from "react";
import AddLocation from "./components/AddLocation";
import { View } from "react-native";
import CommonStyles from "../../Utils/CommonStyles";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";
import Loader from "../../Utils/Loader";
import Success from "../../Components/Modal/success";
import Error from "../../Components/Modal/error";
const AddLocationView = ({ navigation }) => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const [locationName, setLocationName] = useState("");
  const [Address, setAddress] = useState({
    location: "",
    latitude: "",
    longitude: "",
    pincode: "",
  });
  function validationFrom() {
    if (Address.location == "") {
      setErrorMessage("Please enter location name");
      setVisibleErr(true);
      return false;
    }
    if (Address.pincode == "") {
      setErrorMessage("Please enter zip code");
      setVisibleErr(true);
      return false;
    }
    if (Address.latitude == "") {
      setErrorMessage("Please enter address properly");
      setVisibleErr(true);
      return false;
    }
    if (Address.longitude == "") {
      setErrorMessage("Please enter address properly");
      setVisibleErr(true);
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
          setSuccessMessage(data.message);
          setVisibleSuccess(true);
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
  };
  const onPressCancelBtn = () => {
    navigation.navigate("Locations");
  };
  return (
    <View style={CommonStyles.container}>
      {visible && <Loader state={visible} />}
      <AddLocation
        locationName={locationName}
        Address={Address}
        setLocationName={setLocationName}
        setAddress={setAddress}
        onPressSave={onPressSave}
        onPressCancelBtn={onPressCancelBtn}
      />
      <Error
        message={errorMessage}
        visible={visibleErr}
        closeModel={() => setVisibleErr(false)}
      />
      <Success
        message={successMessage}
        visible={visibleSuccess}
        closeModel={() =>
          navigation.navigate("Locations", setVisibleSuccess(false))
        }
      />
    </View>
  );
};
export default AddLocationView;
