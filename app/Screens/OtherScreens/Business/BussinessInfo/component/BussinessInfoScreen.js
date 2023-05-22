import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import {
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
// import MapView from "react-native-maps";
import { Images } from "../../../../Utils/images";

const BussinessInfoScreen = (props) => {
  return (
    <View style={[CommonStyles.container]}>
      <Header
        leftImg={Images.DRAWER_IMG}
        type="Drawer"
        HeaderText="Bussiness Info"
        RightImg={null}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
        {/* <Image style={styles.allmainimg} source={require('../../../../Assets/extraImages/google2x.png')} /> */}
        <View style={{ height: 180 }}>
          {/* {props.profileData.latitude && (
            <MapView
              region={{
                latitude: parseInt(props.profileData.latitude),
                longitude: parseInt(props.profileData.longitude),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={{ height: 180 }}
            >
              <MapView.Marker
                coordinate={{
                  latitude: props.profileData
                    ? parseInt(props.profileData.latitude)
                    : 22.7196,
                  longitude: props.profileData
                    ? parseInt(props.profileData.longitude)
                    : 75.8577,
                }}
              />
            </MapView>
          )} */}
        </View>
        <ScrollView>
          <TouchableOpacity
            // onPress={() => props.navToBasicInfo()}
            style={styles.mainboxvwe}
          >
            <View style={styles.secmainvwe}>
              <Image
                source={Images.BUSINESS_ADDRS_IMG}
              />
              <View style={styles.addvxvwe}>
                <Text style={styles.allicontxt}>Address</Text>
                <Text style={styles.alladdtxt}>
                  {props.profileData.address}
                </Text>
              </View>
            </View>
            <View style={styles.lastimvwe}>
              <View>
                <Image
                  source={Images.ARROW_RIGHT_IMG}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mainboxvwe}
          // onPress={() => props.navToBasicInfo()}
          >
            <View style={styles.secmainvwe}>
              <Image
                source={Images.BUSINESS_CALL_IMG}
              />
              <View style={styles.addvxvwe}>
                <Text style={styles.allicontxt}>Call</Text>
                <Text style={styles.alladdtxt}>{props.profileData.phone}</Text>
              </View>
            </View>
            <View style={styles.lastimvwe}>
              <Image
                source={Images.ARROW_RIGHT_IMG}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mainboxvwe}
          // onPress={() => props.navToBasicInfo()}
          >
            <View style={styles.secmainvwe}>
              <Image
                source={Images.BUSINESS_ADDRS_IMG}
              />
              <View style={styles.addvxvwe}>
                <Text style={styles.allicontxt}>Website</Text>
                <Text style={styles.alladdtxt}>
                  {props.profileData.website}
                </Text>
              </View>
            </View>
            <View style={styles.lastimvwe}>
              <Image
                source={Images.ARROW_RIGHT_IMG}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => props.navtoRestaurant()}
            style={styles.mainboxvwe}
          >
            <View style={styles.secmainvwe}>
              <Image
                source={Images.BUSINESS_MENU_IMG}
              />
              <View style={styles.addvxvwe}>
                <Text style={styles.allicontxt}>Menu</Text>
                <Text style={styles.alladdtxtyellowtxt}>
                  Let your customers see what on the menu
                </Text>
              </View>
            </View>
            <View style={styles.lastimvwe}>
              <Image
                source={Images.ARROW_RIGHT_IMG}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mainboxvwe}
          // onPress={() => props.navToBasicInfo()}
          >
            <View style={styles.secmainvwe}>
              <Image
                source={Images.BUSINESS_MENU_IMG}
              />
              <View style={styles.addvxvwe}>
                <Text style={styles.allicontxt}>Service Area</Text>
                <Text style={styles.alladdtxtyellowtxt}>
                  Define which area you provide services for
                </Text>
              </View>
            </View>
            <View style={styles.lastimvwe}>
              <Image
                source={Images.ARROW_RIGHT_IMG}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => props.goalsFun()}
            style={styles.mainboxvwe}
          >
            <View style={styles.secmainvwe}>
              {/* <Image source={Images.BUSINESS_ADDRS_IMG} /> */}
              <Image source={Images.THEME_GOALS_IMG} />
              <View style={styles.addvxvwe}>
                <Text style={styles.allicontxt}>Goals</Text>
                {/* <Text style={styles.alladdtxt}>{props.profileData.website}</Text> */}
              </View>
            </View>
            <View style={styles.lastimvwe}>
              <Image
                source={Images.ARROW_RIGHT_IMG}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => props.AddKeybordFun()}
            style={styles.mainboxvwe}
          >
            <View style={styles.secmainvwe}>
              <Image source={Images.THEME_KEYBOARD_IMG} />
              <View style={styles.addvxvwe}>
                <Text style={styles.allicontxt}>Add Keybord</Text>
                {/* <Text style={styles.alladdtxt}>{props.profileData.website}</Text> */}
              </View>
            </View>
            <View style={styles.lastimvwe}>
              <Image
                source={Images.ARROW_RIGHT_IMG}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => props.AddTextFun()}
            style={styles.mainboxvwe}
          >
            <View style={styles.secmainvwe}>
              <Image source={Images.THEME_KEYBOARD_IMG} />
              <View style={styles.addvxvwe}>
                <Text style={styles.allicontxt}>Add Text</Text>
              </View>
            </View>
            <View style={styles.lastimvwe}>
              <Image
                source={Images.ARROW_RIGHT_IMG}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => props.BusinessLocationFun()}
            style={styles.mainboxvwe}
          >
            <View style={styles.secmainvwe}>
              <Image
                resizeMode="center"
                style={{ height: 30, width: 30 }}
                source={Images.THEME_LOCATION_IMG}
              />
              <View style={styles.addvxvwe}>
                <Text style={styles.allicontxt}>Business Location</Text>
              </View>
            </View>
            <View style={styles.lastimvwe}>
              <Image
                source={Images.ARROW_RIGHT_IMG}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => props.BudgetsFun()}
            // onPress={() => props.onPressConfirm()}
            style={styles.mainboxvwe}
          >
            <View style={styles.secmainvwe}>
              <Image
                resizeMode="center"
                style={{ height: 30, width: 30 }}
                source={Images.MONEY_IMG}
              />
              <View style={styles.addvxvwe}>
                <Text style={styles.allicontxt}>Budgets</Text>
              </View>
            </View>
            <View style={styles.lastimvwe}>
              <Image
                source={Images.ARROW_RIGHT_IMG}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};
export default BussinessInfoScreen;
