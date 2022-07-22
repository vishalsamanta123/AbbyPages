import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import Button from "../Button";
import {
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_BOLD,
  WHITE_COLOR_CODE,
} from "../../Utils/Constant";
export default function error({ message, visible, closeModel, changeColor }) {
  return (
    <View>
      <Dialog
        visible={visible}
        width={0.8}
        useNativeDriver={true}
        dialogAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        onTouchOutside={() => {
          closeModel();
        }}
        onHardwareBackPress={() => {
          closeModel();
        }}
        dialogTitle={
          <View style={{ alignItems: "center" }}>
            <Image
              resizeMode="contain"
              style={{
                width: 100,
                tintColor: changeColor ? changeColor : null,
              }}
              source={require("../../Assets/Error.png")}
            />
          </View>
        }
        footer={
          <View>
            <Button
              buttonText="OK"
              buttonLabelStyle={{
                fontFamily: FONT_FAMILY_BOLD,
                fontSize: 20,
                color: WHITE_COLOR_CODE,
              }}
              style={{
                width: "100%",
                backgroundColor: changeColor ? changeColor : "red",
              }}
              onPress={() => closeModel()}
            />
          </View>
        }
      >
        <DialogContent>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                fontFamily: FONT_FAMILY_REGULAR,
                textAlign: "center",
                fontSize: 17,
                lineHeight: 25,
              }}
            >
              {message}
            </Text>
          </View>
        </DialogContent>
      </Dialog>
    </View>
  );
}
