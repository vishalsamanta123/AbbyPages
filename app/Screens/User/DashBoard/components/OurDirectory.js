import {
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import styles from "./styles";
import {
  GREY_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import { Images } from "../../../Utils/images";
import Loader from "../../../Utils/Loader";
import Header from "../../../Components/Header";

const OurDirectory = (props) => {
  return (
    <Modal visible={props.directoryModal}>
      <>{props.visible ? <Loader state={props.visible} /> : null}</>
      <View style={{ flex: 1 }}>
        <Header
          leftImg={Images.HEADER_BCK_IMG}
          HeaderText={""}
          HeaderMiddleImg={Images.LOGO}
          onPressBackFun={() => props.setDirectoryModal(false)}
        />
        <View style={styles.otherConVw}>
          <Text style={styles.titlesTxt}>Our Directory</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {props?.directory?.ourDirectory?.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => props.handleDirectory(item.type)}
                  style={[
                    styles.moreItemsCon,
                    {
                      width: null,
                      borderColor:
                        props.selectedType === item.type
                          ? YELLOW_COLOR_CODE
                          : GREY_COLOR_CODE,
                      marginLeft: 8,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.directoryTypTxt,
                      {
                        color:
                          props.selectedType === item.type
                            ? YELLOW_COLOR_CODE
                            : GREY_COLOR_CODE,
                      },
                    ]}
                  >
                    {item.search_type.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false}>
            {props?.directory?.top_business?.map((item, index) => {
              return (
                <TouchableOpacity style={styles.moreItemsCon}>
                  <Image
                    source={{
                      uri: item.logo,
                    }}
                    style={styles.moreItemsImgs}
                    resizeMode={"cover"}
                  />
                  <Text style={[styles.moreItemsTxt, { width: null }]}>
                    {item.business_name}
                  </Text>
                  <Text>{item.business_phone}</Text>
                  <View style={styles.rowVw}>
                    <View style={styles.smallVw}>
                      <Text style={{ color: WHITE_COLOR_CODE }}>5.0</Text>
                    </View>
                    <Text style={styles.ratingTxt}>
                      {Number(item.rating).toFixed(2)} rating
                    </Text>
                  </View>
                  {item.address_first && (
                    <View style={styles.rowVw}>
                      <Image
                        resizeMode={"contain"}
                        style={{ width: 20, height: 20 }}
                        source={Images.LOCATION_IMG}
                      />
                      <Text numberOfLines={2} style={styles.smallSizeTxt}>
                        {item.address_first}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default OurDirectory;
