import React, { useEffect } from "react";
import {
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import styles from "./styles";
import CommonStyles from "../../../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import StarShower from "../../../../../Components/StarShower";
import {
  SliderImages,
  RenderSlideItem,
} from "../../../../../Components/SliderImages";
import { businessTypes } from "../../../../../Utils/staticData";

const MoreInfo = (props) => {
  const businessTime = [
    {
      time: "9:00AM - 7:00PM",
      day: "Monday",
    },
    {
      time: "9:00AM - 7:00PM",
      day: "Tuesday",
    },
    {
      time: "9:00AM - 7:00PM",
      day: "Wednesday",
    },
    {
      time: "9:00AM - 7:00PM",
      day: "Thursday",
    },
    {
      time: "9:00AM - 7:00PM",
      day: "Friday",
    },
    {
      time: "9:00AM - 7:00PM",
      day: "Saturday",
    },
    {
      time: "9:00AM - 7:00PM",
      day: "Sunday",
    },
  ];
  const amenities = [
    {
      image: require("../../../../../Assets/categories/car.png"),
      name: "Mask Review",
    },
    {
      image: require("../../../../../Assets/categories/more.png"),
      name: "Staff Wears Mask",
    },
    {
      image: require("../../../../../Assets/categories/car.png"),
      name: "Accepts Credit Cards",
    },
    {
      image: require("../../../../../Assets/categories/car.png"),
      name: "Free Wifi",
    },
    {
      image: require("../../../../../Assets/categories/more.png"),
      name: "Chairs",
    },
    {
      image: require("../../../../../Assets/categories/car.png"),
      name: "Bike Riding",
    },
  ];
  const { visible = false, setVisible = () => {}, type = "" } = props;
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
              color={BLACK_COLOR_CODE}
              size={30}
              name={"chevron-back"}
            />
            <Text
              style={[
                styles.topHeaderTxt,
                {
                  color: BLACK_COLOR_CODE,
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
                {businessTime?.map((time) => {
                  return (
                    <View style={[CommonStyles.straightCon, styles.timingVw]}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.titletxt}>{time.day}</Text>
                      </View>
                      <View style={{ flex: 2, alignItems: "flex-end" }}>
                        <Text style={styles.titletxt}>{time.time}</Text>
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
                      <Image
                        source={amenty.image}
                        style={{
                          width: 30,
                          height: 30,
                          marginRight: 12,
                        }}
                      />
                      <Text style={styles.titletxt}>{amenty.name}</Text>
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
            <Text style={[styles.smallTxt, { marginTop: 20 }]}>
              Established in 2020
            </Text>
            <Text style={[styles.smallTxt, { marginTop: 8 }]}>
              Our BarberShop specilised in cutting hair and cleanong
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
