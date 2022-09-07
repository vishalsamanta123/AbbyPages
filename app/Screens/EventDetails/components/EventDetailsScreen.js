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
} from "react-native";
import CommonStyles from "../../../Utils/CommonStyles";
import styles from "./styles";
import moment from "moment";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import {
  BLACK_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  LIGHT_GREEN_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import { SafeAreaView } from "react-native-safe-area-context";
const EventListingScreen = (props) => {
  const toNumbers = [];
  useEffect(() => {
    for (let i = 1; i <= parseInt(props?.eventDetails?.total_ticket); i++) {
      toNumbers.push({ numbers: i });
    }
  }, []);
  const [dropDown, setDropDown] = useState(false);

  const { width, height } = Dimensions.get("window");
  const eventDate = moment(props?.eventDetails?.created_at).format(
    "MMMM Do YYYY, h:mm:ss a"
  );
  return (
    <View style={CommonStyles.container}>
      <Header HeaderText="Events Details" RightImg={null} />
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
            onPress={() => {
              props.setInterstedModal(true);
              props.setChangeInterest(props.eventDetails);
            }}
          />
          <Button
            style={styles.btncon}
            buttonText={"Buy Ticket"}
            onPress={() => props.setBuyTicketModal(true)}
          />
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.buyTicketModal}
        onRequestClose={() => {
          props.setBuyTicketModal(false);
        }}
      >
        <View style={styles.ticketModal}>
          <View style={styles.ticketModalVw}>
            <Text style={styles.eventNameTx}>
              {props?.eventDetails?.event_name}
            </Text>
            <Text style={styles.formsTxt}>
              Per Ticket Price :
              <Text style={{ color: LIGHT_GREEN_COLOR_CODE }}>
                {" "}
                ${props?.eventDetails?.ticket_price}
              </Text>
            </Text>
            {props?.ticketBuyData?.response == "" ? (
              <Text style={styles.ticketConfrTxt}>
                Do you want to buy ticket of this event?
              </Text>
            ) : (
              <View style={{ paddingVertical: 4 }}>
                <View style={styles.straightCont}>
                  <Text style={styles.formsTxt}>No. of Tickets :</Text>
                  <View>
                    <View style={[styles.straightCont, styles.ticketInputVw]}>
                      <TextInput
                        placeholder="Number"
                        placeholderTextColor={WHITE_COLOR_CODE}
                        style={styles.ticketInput}
                        onChangeText={(text) => {
                          props.setTicketBuyData({
                            ...props.ticketBuyData,
                            number_of_ticket: text,
                          });
                        }}
                        onBlur={() => setDropDown(true)}
                        maxLength={parseInt(
                          props?.eventDetails?.total_ticket?.toString()?.length
                        )}
                        keyboardType={"phone-pad"}
                        value={props.ticketBuyData.number_of_ticket}
                      />
                      <Image
                        style={styles.ticketInputImg}
                        source={require("../../../Assets/dropdown_icon1.png")}
                      />
                    </View>
                    {dropDown ? (
                      <View style={styles.numbersListVw}>
                        {toNumbers?.map((item) => {
                          return (
                            <TouchableOpacity style={styles.numbersListCon}>
                              <Text style={styles.numberTxt}>
                                {item.numbers}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    ) : null}
                  </View>
                </View>
                <Text style={styles.totalPriceTxt}>
                  Total Price :
                  {props?.eventDetails?.ticket_price *
                    props.ticketBuyData.number_of_ticket}
                </Text>
              </View>
            )}
            <View style={styles.modalBttnVw}>
              <Button
                style={[
                  styles.modalBttn,
                  { backgroundColor: YELLOW_COLOR_CODE },
                ]}
                buttonLabelStyle={[
                  styles.modalBttnTxt,
                  { color: LIGHT_BLACK_COLOR_CODE },
                ]}
                onPress={() => props.onPressTicketResp("Yes")}
                buttonText={"Yes"}
              />
              <Button
                style={styles.modalBttn}
                buttonLabelStyle={styles.modalBttnTxt}
                onPress={() => props.onPressTicketResp()}
                buttonText={"Cancel"}
              />
              {toNumbers?.map((item) => {
                return (
                  <TouchableOpacity style={{ paddingVertical: 4 }}>
                    <Text style={{ color: BLACK_COLOR_CODE }}>
                      {item.numbers}
                    </Text>
                  </TouchableOpacity>
                );
              })}
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
