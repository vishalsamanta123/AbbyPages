import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../../../../Components/Header";
import {
  BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../../Utils/Constant";
import styles from "./styles";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

const eventDetails = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Header
        HeaderText="Event details"
        RightImg={null}
        leftImg={require("../../../../Assets/header_back_btn.png")}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
      />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Image
          source={{ uri: props?.deatil?.events_image }}
          style={styles.image}
          resizeMode={"stretch"}
        />
        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
          <Text style={styles.headingTxt}>
            <Text style={{ color: BLACK_COLOR_CODE }}>Name : </Text>
            {props?.deatil?.event_name}
          </Text>
          <Text style={styles.headingTxt}>
            <Text style={{ color: BLACK_COLOR_CODE }}>Location : </Text>
            {props?.deatil?.event_location}
          </Text>
          <Text style={styles.headingTxt}>
            <Text style={{ color: BLACK_COLOR_CODE }}>Date : </Text>
            {moment
              .unix(props?.deatil?.event_date)
              .format("dddd, MMMM Do, YYYY")}
          </Text>
          <Text style={styles.headingTxt}>
            <Text style={{ color: BLACK_COLOR_CODE }}>Interested : </Text>
            {props?.deatil?.interested}
          </Text>
          <Text style={styles.headingTxt}>
            <Text style={{ color: BLACK_COLOR_CODE }}>View : </Text>{" "}
            {props?.deatil?.view}
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <View style={styles.statusContainer}>
            <Text style={[styles.headingTxt, { color: BLACK_COLOR_CODE }]}>
              Status
            </Text>
            <TouchableOpacity
              style={styles.switchstyle}
              onPress={() => {
                props.eventStatus(props.deatil);
              }}
            >
              <Image
                source={
                  props?.deatil?.status === 1
                    ? require("../../../../Assets/active_switch.png")
                    : require("../../../../Assets/unactive_switch.png")
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.editDeleteVW}>
            <TouchableOpacity
              style={styles.BtnStyle}
              onPress={() => props.getSingleEvent()}
            >
              <Text style={styles.BtnTxt}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BtnStyle}>
              <Text style={styles.BtnTxt}>Delete</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity
                            style={styles.BtnStyle}
                        onPress={() => navigation.navigate("CreateEvent", { type: 'Edit_event', item: props?.singleEvent, detail: props?.detail })}
                        >
                            <Text>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.BtnStyle}
                            onPress={() => props.DeleteMsg(props?.deatil)}
                        >
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default eventDetails;
