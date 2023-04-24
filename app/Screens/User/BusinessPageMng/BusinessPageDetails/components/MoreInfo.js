import React, { useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import styles from "./styles";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { COLORS } from "../../../../../Utils/Constant";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import {
  SliderImages,
  RenderSlideItem,
} from "../../../../../Components/SliderImages";


const MoreInfo = (props) => {
  const {
    visible = false,
    setVisible = () => {},
    type = "",
    detailData,
  } = props;
  const amenities = detailData?.amenities?.split(",");
  return (
    <Modal visible={visible}>
      <View style={CommonStyles.container}>
        <View style={[CommonStyles.straightCon, styles.topHeaderVw]}>
          <TouchableOpacity
            onPress={() =>
              setVisible({
                open: false,
                type: "",
              })
            }
            style={CommonStyles.straightCon}
          >
            <IconX
              origin={ICON_TYPE.ICONICONS}
              color={COLORS.BLACK}
              size={30}
              name={"chevron-back"}
            />
            <Text
              style={[
                styles.topHeaderTxt,
                {
                  color: COLORS.BLACK,
                },
              ]}
            >
              Back
            </Text>
          </TouchableOpacity>
          <Text style={styles.moreInfoTxt}>
            {type === "read" ? "Swag Cut Barber" : "More Info"}
          </Text>
        </View>
        <ScrollView contentContainerStyle={[CommonStyles.otherScrollCon]}>
          {type == "info" ? (
            <>
              <View style={styles.mainContainer}>
                <Text style={styles.sectionTxt}>Business Hours</Text>
                <Text
                  style={[
                    styles.subTitleTxt,
                    {
                      marginTop: 16,
                    },
                  ]}
                >
                  Closed now
                </Text>
                {props.detailData?.business_service_time?.map((time) => {
                  return (
                    <View style={[CommonStyles.straightCon, styles.timingVw]}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.titletxt}>{time.day}</Text>
                      </View>
                      <View style={{ flex: 2, alignItems: "flex-end" }}>
                        <Text style={styles.titletxt}>{time.timeline}</Text>
                      </View>
                    </View>
                  );
                })}
                <TouchableOpacity style={styles.tapButtonsVw}>
                  <Text style={styles.titletxt}>Suggest an edit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.mainContainer}>
                <Text style={styles.sectionTxt}>Amenities and more</Text>
                {amenities?.map((amenty) => {
                  return (
                    <View style={[CommonStyles.straightCon, styles.timingVw]}>
                      <IconX
                        color={COLORS.BLACK}
                        origin={ICON_TYPE.FONT_AWESOME}
                        name={"dot-circle-o"}
                        size={20}
                        paddingRight={5}
                      />
                      <Text style={styles.titletxt}>{amenty}</Text>
                    </View>
                  );
                })}
              </View>
            </>
          ) : null}

          <View style={styles.mainContainer}>
            <Text style={styles.sectionTxt}>Specialist</Text>
            <Text style={[styles.smallTxt, { marginTop: 20 }]}>
              Our BarberShop specilised in cutting hair and cleanong face make
              up for both male and female
            </Text>
          </View>
          <View style={styles.mainContainer}>
            <Text style={styles.sectionTxt}>History</Text>
            <Text style={[styles.smallTxt, { marginTop: 8 }]}>
              {detailData?.about_business}
            </Text>
          </View>
          <View style={styles.mainContainer}>
            <Text style={styles.sectionTxt}>Meet the business owner</Text>
            <View style={[CommonStyles.straightCon, { marginTop: 10 }]}>
              <Image
                source={require("../../../../../Assets/extraImages/demo-profile-image.png")}
                style={styles.considrImgVw}
              />
              <View>
                <Text style={styles.smallOptiontxt2}>Jenniefer louse</Text>
                <Text style={styles.smallTxt}>Business Owner</Text>
              </View>
            </View>
            <Text style={[styles.smallTxt, { marginTop: 8 }]}>
              I have been barbering since 2016 i m BarberShop specilised in
              cutting hair and cleanong face make up for both male and female
            </Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};
export default MoreInfo;
