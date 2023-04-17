import React, { useEffect } from "react";
import {
  View,
  Image,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import CommonStyles from "../../../../../Utils/CommonStyles";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import {
  BLACK_COLOR_CODE,
  IOS,
  WHITE_COLOR_CODE,
  windowWidth,
} from "../../../../../Utils/Constant";
import { Rating } from "react-native-ratings";
import moment from "moment";
import { Images } from "../../../../../Utils/images";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import StarShower from "../../../../../Components/StarShower";
import {
  SliderImages,
  RenderSlideItem,
} from "../../../../../Components/SliderImages";
import { businessTypes } from "../../../../../Utils/staticData";
const { width, height } = Dimensions.get("window");
const lat = "22";
const long = "56";
const BusinessPageDetailsView = (props) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=28.543707340175,-81.3514976796&zoom=13&scale=2&size=600x300&maptype=roadmap&markers=scale%3A1%color:red%7Clabel:A%7C28.543707340175,-81.3514976796&format=png&key=AIzaSyCbDx7Lk4eTMzptrQKXZvOPYgEMggrq8o4`;
  // const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=13&scale=2&size=600x300&maptype=roadmap&markers=scale%3A1%color:red%7Clabel:A%7C${lat},${long}&format=png&key=AIzaSyCbDx7Lk4eTMzptrQKXZvOPYgEMggrq8o4`;
  const imagess = [
    {
      image: Images.DEMO1,
    },
    {
      image: Images.DEMO2,
    },
    {
      image: Images.DEMO3,
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
    <ScrollView contentContainerStyle={[CommonStyles.otherScrollCon]}>
      <ImageBackground
        source={Images.DEMO2}
        style={{ width: windowWidth, height: 220 }}
        resizeMode={"cover"}
      >
        <View style={[CommonStyles.straightCon, styles.topHeaderVw]}>
          <TouchableOpacity 
          onPress={()=>props.handleBack()}
          style={CommonStyles.straightCon}>
            <IconX
              origin={ICON_TYPE.ICONICONS}
              color={WHITE_COLOR_CODE}
              size={30}
              name={"chevron-back"}
            />
            <Text style={styles.topHeaderTxt}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.backImgVw}>
          <Text style={styles.mainTxt}>Swag Desaner Barber</Text>
          <StarShower
            counts={3}
            backColor={true}
            starColor={WHITE_COLOR_CODE}
          />
        </View>
      </ImageBackground>
      <View style={styles.mainContainer}>
        <Text style={styles.titletxt}>{"Home Barber"}</Text>
        <View style={CommonStyles.straightCon}>
          <Text style={styles.subTitleTxt}>Closed now</Text>
          <Text style={styles.smallTxt}>- 9:00AM - 7:00 PM</Text>
        </View>
        <View style={[CommonStyles.straightCon, styles.topHeaderVw]}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.FEATHER_ICONS}
                name={"phone-call"}
                size={20}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={styles.smallOptiontxt}>Call</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.ENTYPO}
                name={"location"}
                size={20}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={styles.smallOptiontxt}>View Map</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                name={"web"}
                size={22}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={styles.smallOptiontxt}>Website</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.ICONICONS}
                name={"bookmarks-outline"}
                size={20}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={styles.smallOptiontxt}>Save</Text>
          </View>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.longTxt}>Do You Recommend this businesss?</Text>
        <View style={[CommonStyles.straightCon, { justifyContent: "center" }]}>
          <TouchableOpacity style={styles.smallCon}>
            <Text style={styles.titletxt}>YES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallCon}>
            <Text style={styles.titletxt}>NO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallCon}>
            <Text style={styles.titletxt}>MAYBE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={[CommonStyles.straightCon, styles.topHeaderVw]}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                name={"star-box"}
                size={20}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={[styles.smallOptiontxt2]}>Add Review</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.MATERIAL_ICONS}
                name={"add-a-photo"}
                size={20}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={[styles.smallOptiontxt2]}>Add Photo</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.smallOptionVw}>
              <IconX
                origin={ICON_TYPE.FONT_AWESOME}
                name={"check-circle-o"}
                size={22}
                color={BLACK_COLOR_CODE}
              />
            </TouchableOpacity>
            <Text style={[styles.smallOptiontxt2]}>Check In</Text>
          </View>
        </View>
        {/* <SliderImages
          data={imagess}
          renderItem={({ item }) => {
            return <RenderSlideItem posterImg={item.image} />;
          }}
        /> */}
      </View>
      <View style={[styles.mainContainer, { paddingHorizontal: 0 }]}>
        <Image
          source={{ uri: imagePreviewUrl }}
          style={{ width: "100%", height: 150 }}
        />
        <Text
          style={[
            styles.smallOptiontxt2,
            {
              marginLeft: 10,
            },
          ]}
        >
          Alexender Colony baypass orlando,USA
        </Text>
        <TouchableOpacity style={styles.buttonsVw}>
          <Text style={styles.buttonsTxt}>{"Get Directions"}</Text>
          <IconX
            origin={ICON_TYPE.MATERIAL_ICONS}
            name={"directions"}
            size={24}
            color={BLACK_COLOR_CODE}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonsVw}>
          <View>
            <Text style={styles.buttonsTxt}>{"Call"}</Text>
            <Text style={styles.smallTxt}>{"  (321)-4376487474"}</Text>
          </View>
          <IconX
            origin={ICON_TYPE.FEATHER_ICONS}
            name={"phone-call"}
            size={20}
            color={BLACK_COLOR_CODE}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.sectionTxt}>Info</Text>
        <TouchableOpacity
          style={[
            CommonStyles.straightCon,
            { justifyContent: "space-between" },
          ]}
        >
          <View>
            <Text style={styles.titletxt}>Services</Text>
            <Text style={styles.smallTxt}>
              Kids, HairCut, Saloons, Services, Barber , Neck Trim ,
              Accessories, Luxury Items ,Brands , T-Shirts , HandleLooms ,Other
            </Text>
          </View>
          <IconX
            origin={ICON_TYPE.ENTYPO}
            name={"list"}
            size={20}
            color={BLACK_COLOR_CODE}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            CommonStyles.straightCon,
            { justifyContent: "space-between", marginVertical: 12 },
          ]}
        >
          <Text
            numberOfLines={2}
            style={[
              styles.titletxt,
              {
                width: "80%",
              },
            ]}
          >
            SwitzcutBarbershop.busineess.com
          </Text>
          <IconX
            origin={ICON_TYPE.FONT_AWESOME}
            name={"share-square-o"}
            size={20}
            color={BLACK_COLOR_CODE}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tapButtonsVw}>
          <Text style={styles.titletxt}>More Info</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default BusinessPageDetailsView;
