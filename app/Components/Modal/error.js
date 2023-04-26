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
  COLORS,
} from "../../Utils/Constant";
import { Images } from "../../Utils/images";
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
              source={Images.ERROR_IMG}
            />
          </View>
        }
        footer={
          <View style={{ marginVertical: 16 }}>
            <Button
              buttonText="OK"
              buttonLabelStyle={{ fontFamily: FONT_FAMILY_BOLD }}
              buttonTxtColor={COLORS.WHITE}
              style={{
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
