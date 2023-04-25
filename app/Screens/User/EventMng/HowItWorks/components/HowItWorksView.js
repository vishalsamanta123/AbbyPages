import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  RefreshControl,
  FlatList,
} from "react-native";
import React from "react";
import CommonStyles from "../../../../../Utils/CommonStyles";
import MainHeader from "../../../../../Components/MainHeader";
import { COLORS, FONT_FAMILY } from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import styles from "./styles";
import Button from "../../../../../Components/Button";
import { ICON_TYPE, IconX } from "../../../../../Components/Icons/Icon";
import { createEventSteps } from "../../../../../Utils/staticData";

const HowItWorksView = (props) => {
  const renderSteps = (item) => {
    return (
      <View style={styles.cardView}>
        <View style={styles.imageView}>
          <IconX
            origin={item.origin}
            color={item.color}
            size={item.size}
            name={item.name}
          />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.cardheading}>{item.heading}</Text>
          <Text style={styles.cardDesc}>{item.description}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={CommonStyles.container}>
      <MainHeader isSearch isBack  />
      <ScrollView
        // refreshControl={
        //   <RefreshControl
        //     colors={[COLORS.YELLOW]}
        //     refreshing={props.refreshing}
        //     onRefresh={props.onRefresh}
        //   />
        // }
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={{ flexGrow: 1 }}
        nestedScrollEnabled={true}
      >
        <ImageBackground
          source={Images.HOW_IT_WORKS_BANNER}
          style={styles.backgroundImgVw}
          opacity={0.5}
        >
          <View style={styles.imgInnerVw}>
            <Text style={[CommonStyles.bigTxtVw, {color: COLORS.WHITE}]}>
              How AbbyPages Events Works
            </Text>
            <Text
              style={[
                CommonStyles.mediumTxt,
                { marginTop: 16, paddingHorizontal: 10, color: COLORS.WHITE },
              ]}
            >
              Create a free account, modify the event page, and begin selling
              tickets in a few minutes. It really is that simple with our
              user-friendly event ticketing system!
            </Text>
            <Button
              style={styles.createbtn}
              buttonLabelStyle={styles.createBtnTxt}
              onPress={() => {}}
              buttonText={"Create Event"}
              width={"50%"}
              paddingHeight={12}
            />
          </View>
        </ImageBackground>
        <View style={styles.stepsWrap}>
          <View style={styles.createHeadingView}>
            <Text style={styles.createHeadingtxt}>
              Create an Event by following 5 Simple Steps.
            </Text>
          </View>
          <FlatList
            data={createEventSteps}
            renderItem={({ item }) => renderSteps(item)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HowItWorksView;
