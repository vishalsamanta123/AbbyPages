import React, { useEffect } from "react";
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Platform,
} from "react-native";
import styles from "./styles";
import Header from "../../../../Components/Header";
import Button from "../../../../Components/Button";
import Input from "../../../../Components/Input";
import CommonStyles from "../../../../Utils/CommonStyles";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import {
  IOS,
  LIGHT_RED_COLOR_CODE,
  WHITE_COLOR_CODE,
  windowWidth,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Rating } from "react-native-ratings";
import moment from "moment";
import { Images } from "../../../../Utils/images";
import Carousel, { Pagination } from "react-native-snap-carousel";
const { width, height } = Dimensions.get("window");

const BusinessPageDetailsView = (props) => {
  const imagess = [
    {
      image: require("../../../../Assets/extraImages/bob-marley-profile.jpg"),
    },
    {
      image: require("../../../../Assets/extraImages/bob-marley-cover.jpg"),
    },
    {
      image: require("../../../../Assets/extraImages/building.jpg"),
    },
  ];
  const renderSlideItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ position: "absolute" }}>
          <Text>Sander</Text>
        </View>
        <View>
          <Image
            resizeMode={"cover"}
            source={item.image}
            style={{ height: 200, width: "100%" }}
          />
        </View>
        <Pagination
          dotsLength={imagess.length}
          activeDotIndex={props.pageIndex}
          containerStyle={{
            paddingVertical: 0,
          }}
          inactiveDotStyle={styles.dotInActiveVw}
          dotStyle={styles.dotActiveVw}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  };
  return (
    <KeyboardAvoidingView
      behavior={IOS ? "padding" : null}
      style={[CommonStyles.container]}
    >
      {/* <Header
        RightImg={null}
        HeaderText={"Restaurant Detail"}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      /> */}
      <ImageBackground
        source={require("../../../../Assets/extraImages/bob-marley-profile.jpg")}
        style={{ width: windowWidth, height: 220 }}
        resizeMode={"cover"}
      >
        <View style={styles.straightVw}></View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};
export default BusinessPageDetailsView;
