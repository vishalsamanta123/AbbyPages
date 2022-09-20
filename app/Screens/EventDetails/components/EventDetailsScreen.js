import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  FlatList,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import moment from "moment";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import {
  BLACK_COLOR_CODE,
  BLUE_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  LIGHT_GREEN_COLOR_CODE,
  LIGHT_RED_COLOR_CODE,
  SMALL_TEXT_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import { Picker } from "@react-native-community/picker";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Loader from "../../../Utils/Loader";
const EventListingScreen = (props) => {
  const [dropDown, setDropDown] = useState(false);
  const { width, height } = Dimensions.get("window");
  const eventDate = moment(props?.eventDetails?.created_at).format(
    "MM/DD/YYYY"
  );

  return (
    <View style={CommonStyles.container}>
      <Header
        HeaderText="Events Details"
        RightImg={null}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
      />
      <ScrollView>
        <SafeAreaView style={{ alignItems: "center" }}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={props?.eventDetails?.events_image}
            scrollEventThrottle={16}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            onScroll={(event) => {
              props.setSliderPage(event);
            }}
            renderItem={({ item, index }) => {
              return (
                index <= 4 && (
                  <View key={index} style={{ width, alignItems: "center" }}>
                    <Image
                      resizeMode="stretch"
                      source={{ uri: item.events_image }}
                      style={styles.imageStyle}
                    />
                  </View>
                )
              );
            }}
          />
          <View style={styles.paginationWrapper}>
            {Array.from(
              Array(
                props?.eventDetails?.events_image?.length > 5
                  ? 5
                  : props?.eventDetails?.events_image?.length
              ).keys()
            ).map((key, index) => (
              <View
                style={[
                  styles.paginationDots,
                  { opacity: props.pageIndex === index ? 1 : 0.2 },
                ]}
                key={index}
              />
            ))}
          </View>
        </SafeAreaView>
        <View style={styles.infocon}>
          <Text style={styles.nameTxt}>{props?.eventDetails?.event_name}</Text>
          <View style={styles.basiccon}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={require("../../../Assets/info_calendar_icon.png")}
            />
            <Text style={styles.detailTxt}>{eventDate}</Text>
          </View>
          <View style={styles.basiccon}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={require("../../../Assets/map_marker_icon.png")}
            />
            <Text style={styles.detailTxt}>
              {props?.eventDetails?.event_location}
            </Text>
          </View>
          <View style={styles.basiccon}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={require("../../../Assets/info_tag_icon.png")}
            />
            <Text style={styles.detailTxt}>
              {props?.eventDetails?.near_by_address}
            </Text>
          </View>
          <Button
            style={styles.btncon}
            buttonText={
              props.eventDetails?.user_interested === 0
                ? "Are you interested?"
                : "Interested"
            }
            onPress={() => props.setInterstedModal(true)}
          />
          <Button
            style={styles.btncon}
            buttonText={"Buy Ticket"}
            onPress={() => props.setBuyTicketModal(true)}
          />
        </View>
      </ScrollView>
      <Modal
        visible={props.interestedModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => {
          props.setInterstedModal(false);
        }}
      >
        <View
          style={[
            styles.modalCon,
            { justifyContent: "center", backgroundColor: "rgba(0,0,0,0.3)" },
          ]}
        >
          <View style={styles.interestedModalVw}>
            <View style={styles.respnsesTxtVw}>
              <Text style={styles.responseTxt}>Your Response</Text>
              <TouchableOpacity onPress={() => props.setInterstedModal(false)}>
                <Image
                  style={{ width: 32, height: 32, marginRight: 5 }}
                  source={require("../../../Assets/cart_delete_icon.png")}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => props.setChangeInterest(1)}
              style={styles.respnsesVw}
            >
              <View style={styles.straightVw}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    tintColor:
                      props?.changeInterest === 1
                        ? YELLOW_COLOR_CODE
                        : BLACK_COLOR_CODE,
                  }}
                  source={require("../../../Assets/star_icon_filled.png")}
                />
                <Text style={styles.respnsesTxt}>Interested</Text>
              </View>
              <Image
                source={
                  props?.changeInterest === 1
                    ? require("../../../Assets/radio_circled_checked.png")
                    : require("../../../Assets/radio_circled_unchecked.png")
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.setChangeInterest("")}
              style={styles.respnsesVw}
            >
              <View style={styles.straightVw}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    tintColor:
                      props?.changeInterest === ""
                        ? YELLOW_COLOR_CODE
                        : BLACK_COLOR_CODE,
                  }}
                  source={require("../../../Assets/verified_icon.png")}
                />
                <Text style={styles.respnsesTxt}>Going</Text>
              </View>
              <Image
                source={
                  props?.changeInterest === ""
                    ? require("../../../Assets/radio_circled_checked.png")
                    : require("../../../Assets/radio_circled_unchecked.png")
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.setChangeInterest(0)}
              style={styles.respnsesVw}
            >
              <View style={styles.straightVw}>
                <View
                  style={[
                    styles.notIntrstVw,
                    {
                      backgroundColor:
                        props?.changeInterest === 0
                          ? YELLOW_COLOR_CODE
                          : BLACK_COLOR_CODE,
                    },
                  ]}
                >
                  <Image
                    style={{ tintColor: WHITE_COLOR_CODE }}
                    source={require("../../../Assets/cart_delete_icon.png")}
                  />
                </View>
                <Text style={styles.respnsesTxt}>Not Interested</Text>
              </View>
              <Image
                source={
                  props?.changeInterest === 0
                    ? require("../../../Assets/radio_circled_checked.png")
                    : require("../../../Assets/radio_circled_unchecked.png")
                }
              />
            </TouchableOpacity>
            <View style={styles.respnsesBttnVw}>
              <Button
                buttonText={"Save"}
                onPress={() => props.onInterestResp()}
                style={[styles.respnsesBttn, { marginRight: 10 }]}
              />
              <Button
                buttonText={"Cancel"}
                onPress={() => {
                  props.setInterstedModal(false);
                  props.setChangeInterest("");
                }}
                style={[
                  styles.respnsesBttn,
                  { backgroundColor: SMALL_TEXT_COLOR_CODE },
                ]}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default EventListingScreen;
{
  /* <View style={styles.alertBackground}>
                                <View style={{ alignItems: "center", position: 'absolute', right: 0, left: 0, top: -35, bottom: 0, zIndex: 1 }}>
                                </View>
                                <View style={styles.alertBox}>
                                    <TouchableOpacity
                                        style={styles.profileModal}
                                        onPress={() => props.onPressOpenEventImage()}
                                        underlayColor={'#F5F5F5'}>
                                        <Image style={{ height: 40, width: 40, zIndex: 1 }}
                                            source={require('../../../Assets/image-gallery.png')} />
                                        <Text style={styles.modalItem}>Open Album</Text>
                                    </TouchableOpacity>
                                </View>
                            </View> */
}

{
  /* <View
style={{
  padding: 20,
  flex: 1,
  backgroundColor: WHITE_COLOR_CODE,
  borderBottomWidth: 20,
  borderColor: "#f2f2f2",
}}
>
<Text style={styles.hdngtxt}>What/Why:</Text>
<Text style={[styles.text, { lineHeight: 18 }]}>
  VELF HAUNTS AT HOME: This event is part of the elp Hunts At Home
  Vitual ent seriest For the whele Set of eventa, cack here
  Abby.com/eventa/san tran.
  {"\n"} {"\n"}
  ABCUT THIG EVENT HUing to velebrute Halowe virtualy this year? We
  got yeut Your Eat Bay CM. Emma w, your San Aitonio EM, Fernanda E.
  and your Chitage Burbs CM, Nicoie a invita you to a fult on akeietin
  party That's right - prati yoar favorite drink and join us for night
  of skeietal hun we all tramutorm inte skutatona witt the holp ef
  Sabrina Locer (Rabbit Ryn end her makeup magiet Grab your eninting
  fane maknup (o tuy an utterdanin kit fum the Unk weti providel and
  glue yourseif sor a buddyt an msta-worthy ckeietal mahravert Or juet
  feiel fe To join and watch {"\n"} {"\n"} Sabrina wil No be giving
  you optiona for your skalatat look Vou can oither create the look
  seen in the featured image on this page or give it your own twist
  with the help at Sabrina, {"\n"} {"\n"}Plus, w'll have a virtual
  phota booth hy Alfspe Photo tyele.com/bis/aiteaco-oh. Thase who poat
  pice from the booth (and tag un) witi be aitomaticaliy entered in a
  weet autumn-themet giveaway {"\n"} {"\n"}WHEN: Thureday, Octaber 29
  @5:30 PETt / 1:dOrM CST/DOPM EST {"\n"} {"\n"}WHERE YOur harme Well
  tbe connecting virtually on Zoom {"\n"} {"\n"}WHO: This event a epes
  tu atyane with a velp account {"\n"} {"\n"}This virta wwip
  Experience was crested to pravide a aate positive apace for
  averyarie who wiehes to participote We are committed ta providing an
  oppermunity where ail are wecamer Please make sure to respect
  everyane who wishes to be a part of this opportunity {"\n"} {"\n"}
</Text>
</View>
<View
style={{
  padding: 20,
  flex: 1,
  backgroundColor: WHITE_COLOR_CODE,
}}
>
<Text style={styles.hdngtxt}>What You Need</Text>
<Text style={[styles.text, { lineHeight: 18 }]}>
  Desktop or laptop or phone with ahility to acoess 2oem And a strong
  internet conivection.{"\n"}
  {"\n"}
  Downinating Zoom nat regutred to participats{"\n"}
  {"\n"}
  When jaining yui be aed to anter a name- plesse ute your first name
  and iast initial. just he on Yelet This will be helptul ninon wee
  taking attendance a Official Website
  {"\n"}
</Text>
<Button style={{}} buttonText="Official Website" />
</View>
<Modal
animationType="slide"
transparent={true}
visible={props.interestedModal}
onRequestClose={() => {
  Alert.alert("Modal has been closed.");
  props.setInterstedModal(!props.interestedModal);
}}
>
<TouchableOpacity
  activeOpacity={1}
  onPress={() => props.setInterstedModal(false)}
  style={styles.centeredView}
></TouchableOpacity>
</Modal> */
}
