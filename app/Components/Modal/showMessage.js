import React, { useEffect, useState } from "react";
import { View, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";
import ScaleText from "../ScaleText";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import CommonStyles from "../../Utils/CommonStyles";
import MainButton from "../MainButton";

const ShowMessage = (props) => {
  const {
    message = "",
    backgroundColor = "",
    messageType = "",
    position = "bottom",
    borderRadius = 16,
    marginBottom = 2,
    onPressOK = () => {},
    onEndVisible = () => {},
    visible = false,
    iconType = "",
    messageViewType = "warning",
    iconOrigin = "",
    iconName = "",
    iconColor = "",
    onPressMessage = () => {},
  } = props;
  useEffect(() => {
    if (messageType !== "press" && visible) {
      setTimeout(async () => {
        onEndVisible(false);
      }, 2500);
    }
  }, [visible, messageType]);
  return (
    <View>
      <Modal transparent={true} visible={visible}>
        <View
          style={[
            styles.mainCon,
            {
              justifyContent:
                position === "top"
                  ? "flex-start"
                  : position === "bottom"
                  ? "flex-end"
                  : "center",
              marginBottom: position === "bottom" ? marginBottom : 0,
              marginHorizontal: position === "center" ? 12 : 0,
            },
          ]}
        >
          <View
            style={[
              styles.containVw,
              {
                backgroundColor:
                  backgroundColor === "" ||
                  backgroundColor === null ||
                  backgroundColor === undefined
                    ? messageViewType === ""
                      ? COLORS.YELLOW
                      : messageViewType === "success"
                      ? COLORS.GREEN
                      : messageViewType === "error"
                      ? COLORS.LIGHT_RED
                      : null
                    : backgroundColor,
                borderRadius: borderRadius,
              },
              position === "top" && {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
              position === "bottom" && {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
            ]}
          >
            <View style={CommonStyles.straightCon}>
              {messageViewType === "" || messageViewType === "error" ? (
                <IconX
                  origin={ICON_TYPE.ANT_ICON}
                  name={"warning"}
                  paddingLeft={10}
                  color={COLORS.WHITE}
                />
              ) : (
                <>
                  {messageViewType === "success" ? (
                    <IconX
                      origin={ICON_TYPE.FEATHER_ICONS}
                      name={"check-circle"}
                      paddingLeft={10}
                      color={COLORS.WHITE}
                    />
                  ) : (
                    <>
                      {iconType === "custom" && (
                        <IconX
                          origin={iconOrigin}
                          name={iconName}
                          paddingLeft={12}
                          color={iconColor}
                        />
                      )}
                    </>
                  )}
                </>
              )}
              <TouchableOpacity onPress={onPressMessage} activeOpacity={1}>
                <ScaleText style={styles.messageTxt}>
                  {message === "" || message === null || message === undefined
                    ? "Show Message"
                    : message}
                </ScaleText>
              </TouchableOpacity>
            </View>
            {messageType === "press" ? (
              <View style={{ marginVertical: 10, marginHorizontal: 16 }}>
                <MainButton
                  buttonTxt={"Ok"}
                  onPressButton={() => {
                    setVisibleShow(false);
                    onPressOK();
                  }}
                  borderColor={COLORS.WHITE}
                  txtColor={COLORS.WHITE}
                />
              </View>
            ) : null}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ShowMessage;
export const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    backgroundColor: COLORS.TRANSPARENT,
    justifyContent: "center",
  },
  containVw: {
    paddingVertical: 12,
  },
  messageTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.normal,
    flex: 1,
    marginLeft: 10,
  },
});
