import {
  FlatList,
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
import { Images } from "../../../../Utils/images";

const eventDetails = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        HeaderText="Event Details"
        RightImg={null}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {props?.img_url ||
          (props?.detail ? (
            <Image
              source={{
                uri:
                  props?.img_url + props?.detail?.events_image[0]?.events_image,
              }}
              style={styles.image}
              resizeMode={"stretch"}
            />
          ) : null)}
        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
          <Text style={styles.headingTxt}>
            <Text style={{ color: BLACK_COLOR_CODE }}>Name : </Text>
            {props?.detail?.event_name}
          </Text>
          <Text style={styles.headingTxt}>
            <Text style={{ color: BLACK_COLOR_CODE }}>Location : </Text>
            {props?.detail?.event_location}
          </Text>
          <Text style={styles.headingTxt}>
            <Text style={{ color: BLACK_COLOR_CODE }}>Date : </Text>
            {moment.unix(props?.detail?.event_date).format("MM/DD/YYYY")}
          </Text>
          <Text style={styles.headingTxt}>
            <Text style={{ color: BLACK_COLOR_CODE }}>Interested : </Text>
            {props?.detail?.interested}
          </Text>
          <Text style={styles.headingTxt}>
            <Text style={{ color: BLACK_COLOR_CODE }}>View : </Text>{" "}
            {props?.detail?.view}
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          {/* <View style={styles.statusContainer}>
            <Text style={[styles.headingTxt, { color: BLACK_COLOR_CODE }]}>
              Status
            </Text>
            <TouchableOpacity
              style={styles.switchstyle}
              onPress={() => {
                props.eventStatus(props.detail);
              }}
            >
              <Image
                source={
                  props?.detail?.status === 1
                    ? Images.ACTIVE_SWITCH_IMG
                    : Images.UNACTIVE_SWITCH_IMG
                }
              />
            </TouchableOpacity>
          </View> */}
          {/* <View style={styles.editDeleteVW}>
            <TouchableOpacity
              style={styles.BtnStyle}
              onPress={() => props.getSingleEventEdit()}
            >
              <Text style={styles.BtnTxt}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BtnStyle}>
              <Text style={styles.BtnTxt}>Delete</Text>
            </TouchableOpacity>
          </View> */}
          {/* <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity
                            style={styles.BtnStyle}
                        onPress={() => navigation.navigate("CreateEvent", { type: 'Edit_event', item: props?.singleEvent, detail: props?.detail })}
                        >
                            <Text>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.BtnStyle}
                            onPress={() => props.DeleteMsg(props?.detail)}
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
