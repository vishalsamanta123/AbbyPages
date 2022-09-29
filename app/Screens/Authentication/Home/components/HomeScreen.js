import React from "react";
import { View, Image, StatusBar, ScrollView, Platform } from "react-native";
import styles from "./styles";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";

const HomeScreen = (props) => {
  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={CommonStyles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: Platform.OS === "ios" ? 30 : 0,
          }}
        >
          <View style={styles.imagesVw}>
            <Image
              resizeMode="contain"
              source={require("../../../../Assets/login_logo2.png")}
            />
            <Image
              style={{ width: 250, height: 250 }}
              resizeMode={"contain"}
              source={require("../../../../Assets/login_graphic2.png")}
            />
          </View>
          <View style={styles.FooterContain}>
            <Button
              buttonText="Create Business Account"
              buttonLabelStyle={styles.LoginBtnTxt}
              style={{ marginVertical: 5 }}
              onPress={props.onPressCreateBusiness}
            />
            <Button
              buttonText="Log In"
              buttonLabelStyle={styles.LoginBtnTxt}
              style={{ marginVertical: 5 }}
              onPress={props.onPressLogin}
            />
            <Button
              buttonText="Create New Account"
              style={styles.signUpBtnStyle}
              buttonLabelStyle={styles.createAccntTxt}
              onPress={props.onPressSignUp}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default HomeScreen;
