import { View, Text, ImageBackground } from "react-native";
import React from "react";
import PageScroll from "../../../../../Components/PageScroll";
import MainHeader from "../../../../../Components/MainHeader";
import { Images } from "../../../../../Utils/images";
import styles from "./styles";
import ScaleText from "../../../../../Components/ScaleText";
import Button from "../../../../../Components/Button";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { COLORS } from "../../../../../Utils/Constant";
import {
  admin_deshboard,
  businessTypes,
  event_page,
  promoting_selling,
} from "../../../../../Utils/staticData";
import { handleBusinessNav } from "../../../../../Utils/Globalfunctions";

const FeaturesView = () => {
  return (
    <View style={CommonStyles.container}>
      <MainHeader headerText={"Features"} loginButton={false} isLogin={true} />
      <PageScroll
        keyboardShouldPersistTaps={"handled"}
        automaticallyAdjustKeyboardInsets
        contentContainerStyle={{ flexGrow: 1 }}
        nestedScrollEnabled={true}
      >
        <ImageBackground
          source={Images.FEATURES_BANNER}
          style={styles.backgroundImgVw}
          opacity={0.5}
        >
          <View style={styles.imgInnerVw}>
            <ScaleText style={[CommonStyles.bigTxtVw, { color: COLORS.WHITE }]}>
              Complete Feature Set for Ticketing for Event Organizers
            </ScaleText>
            <ScaleText
              style={[
                CommonStyles.mediumTxt,
                {
                  marginTop: 16,
                  paddingHorizontal: 10,
                  color: COLORS.WHITE,
                  marginBottom: 16,
                },
              ]}
            >
              Check out what AbbyPages can offer you.
            </ScaleText>
            <Button
              style={styles.createbtn}
              buttonLabelStyle={styles.createBtnTxt}
              onPress={() => handleBusinessNav(businessTypes[0])}
              buttonText={"Create Event"}
              width={"50%"}
              paddingHeight={12}
            />
          </View>
        </ImageBackground>
        <View>
          <ScaleText style={[styles.priceDescHeadingTxt, { marginTop: 15 }]}>
            Complete feature list
          </ScaleText>
          <ScaleText style={styles.listTxt}>1. Event pages</ScaleText>
          <ScaleText style={styles.listTxt}>2. Advertising & selling</ScaleText>
          <ScaleText style={styles.listTxt}>3. Admin dashboard</ScaleText>
          <ScaleText style={styles.listTxt}>4. Manage Event day</ScaleText>
          <ScaleText style={styles.listTxt}>5. Support</ScaleText>
        </View>
        <View style={styles.priceCalWrap}>
          <ScaleText
            style={[
              styles.priceDescHeadingTxt,
              { marginBottom: 0, color: COLORS.YELLOW },
            ]}
          >
            1. Event pages
          </ScaleText>
          {event_page.map((el) => {
            return (
              <View style={styles.priceDescView}>
                <ScaleText style={styles.priceDescHeadingTxt}>
                  {el?.title}
                </ScaleText>
                <ScaleText style={styles.priceDescTxt}>
                  {el?.description}
                </ScaleText>
              </View>
            );
          })}
        </View>
        <View style={styles.priceCalWrap}>
          <ScaleText
            style={[
              styles.priceDescHeadingTxt,
              { marginBottom: 0, color: COLORS.YELLOW },
            ]}
          >
            2. Advertising & selling
          </ScaleText>
          {promoting_selling.map((el) => {
            return (
              <View style={styles.priceDescView}>
                <ScaleText style={styles.priceDescHeadingTxt}>
                  {el?.title}
                </ScaleText>
                <ScaleText style={styles.priceDescTxt}>
                  {el?.description}
                </ScaleText>
              </View>
            );
          })}
        </View>
        <View style={styles.priceCalWrap}>
          <ScaleText
            style={[
              styles.priceDescHeadingTxt,
              { marginBottom: 0, color: COLORS.YELLOW },
            ]}
          >
            3. Admin dashboard
          </ScaleText>
          {admin_deshboard.map((el) => {
            return (
              <View style={styles.priceDescView}>
                <ScaleText style={styles.priceDescHeadingTxt}>
                  {el?.title}
                </ScaleText>
                <ScaleText style={styles.priceDescTxt}>
                  {el?.description}
                </ScaleText>
              </View>
            );
          })}
        </View>
      </PageScroll>
    </View>
  );
};

export default FeaturesView;
