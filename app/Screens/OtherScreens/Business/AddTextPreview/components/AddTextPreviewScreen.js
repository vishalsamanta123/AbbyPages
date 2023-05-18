import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../../../Components/Button";
import Header from "../../../../Components/Header";
import CommonStyles from "../../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  FONT_FAMILY_REGULAR,
  WHITE_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";

const PreviewScreen = (props) => {
  return (
    <View style={[CommonStyles.container]}>
      <Header
        leftImg={Images.HEADER_BCK_IMG}
        HeaderText="Preview"
        RightImg={null}
        tintColor={BLACK_COLOR_CODE}
        mncontainer={{ backgroundColor: WHITE_COLOR_CODE }}
      />
      <View style={[CommonStyles.body]}>
        <View style={{ flex: 1 }}>
          <View style={styles.maintxtvwe}>
            <Text style={styles.maintxt}>Your a preview on AbbyPages </Text>
            <Image
              style={styles.circleicon}
              source={Images.INFO_IMG}
            />
          </View>
          <View>
            <View style={styles.mainboxvwe}>
              <View style={styles.lefttxtvwe}>
                <View style={styles.lefttxtvwesec}>
                  <Image
                    source={Images.COMPANY_DEFAULT_IMG}
                  />
                </View>
                <View style={styles.ittextvwe}>
                  <Text style={styles.companytxt}>Itinformatix</Text>
                  <Text style={styles.alltwoxt}>Home Srvice, Resturants,</Text>
                  <Text style={styles.alltwoxt}>SoftWare Devlopment</Text>
                  <Text style={styles.alltwoxt}>19/20 Main St</Text>
                </View>
              </View>
              <Text style={styles.teconloglytxt}>
                I am perfect in Devlopment for any technology{" "}
              </Text>
              <View style={{ paddingTop: 10 }}>
                <Button
                  buttonText="Vist Website"
                  style={styles.buttonstyle}
                  buttonLabelStyle={{ fontFamily: FONT_FAMILY_REGULAR }}
                  // onPress={()=>props.onPressGoalPreview()}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default PreviewScreen;
