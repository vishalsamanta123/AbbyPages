import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";

const GoalPreviewScreen = (props) => {
  return (
    <View style={[CommonStyles.container]}>
      <Header
        leftImg={Images.HEADER_BCK_IMG}
        HeaderText="Preview"
        RightImg={null}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <View style={{ flex: 1 }}>
          <View style={styles.maintxtvwe}>
            <TouchableOpacity>
              <Text style={styles.maintxt}>Your a preview on AbbyPages </Text>
            </TouchableOpacity>
            <Image
              style={styles.circleicon}
              source={Images.INFO_IMG}
            />
          </View>
          <View>
            <View style={styles.mainboxvwe}>
              <View style={styles.lefttxtvwe}>
                <View style={styles.lefttxtvwesec}>
                  <Image source={Images.COMPANY_DEFAULT_IMG} />
                </View>
                <View style={styles.ittextvwe}>
                  <Text style={styles.companytxt}>Itinformatix</Text>
                  <Text style={styles.alltwoxt}>Home Srvice, Resturants,</Text>
                  <Text style={styles.alltwoxt}>SoftWare Devlopment</Text>
                  <Text style={styles.alltwoxt}>19/20 Main St</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default GoalPreviewScreen;
