import React from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";
import MainHeader from "../../../../Components/MainHeader";
import MainInput from "../../../../Components/MainInput";
import AddressInput from "../../../../Components/AddressInput";
import MainButton from "../../../../Components/MainButton";
import { COLORS } from "../../../../Utils/Constant";

const AddNewLocationView = (props) => {
  return (
    <View style={[CommonStyles.container]}>
      <MainHeader headerText={"Add New Location"} notifyIcon={false} />
      <ScrollView keyboardShouldPersistTaps={"handled"}>
        <View style={{ paddingHorizontal: 20, marginVertical: 20 }}>
          <AddressInput
            placeholder="Street Address"
            onPress={(data, details) => {
              props.setAddress({
                ...props.Address,
                location: details.formatted_address,
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
            }}
            onChangeText={(txt) => {
              props.setAddress({
                ...props.Address,
                location: txt,
              });
            }}
            value={props.Address.address}
          />
          <MainInput
            onChangeText={(zip_code) =>
              props.setAddress({
                ...props.Address,
                pincode: zip_code,
              })
            }
            value={props.Address.pincode}
            placeholder="Zip Code"
            keyboardType="phone-pad"
          />
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
          <MainButton
            backgroundColor={COLORS.YELLOW}
            txtColor={COLORS.WHITE}
            paddingHeight={12}
            onPressButton={() => props.onPressSave()}
            buttonTxt={"Save Changes"}
          />
          <MainButton
            backgroundColor={COLORS.LIGHT_GREY}
            txtColor={COLORS.WHITE}
            borderColor={COLORS.WHITE}
            marginTop={16}
            paddingHeight={12}
            onPressButton={() => props.onPressCancelBtn()}
            buttonTxt={"Cancel"}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default AddNewLocationView;
