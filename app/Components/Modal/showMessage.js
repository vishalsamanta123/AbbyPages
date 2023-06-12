import React, { useEffect, useState } from "react";
import { View, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";
import ScaleText from "../ScaleText";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import CommonStyles from "../../Utils/CommonStyles";
import MainButton from "../MainButton";
import { useNavigation } from "@react-navigation/native";

const ShowMessage = (props) => {
  const navigation = useNavigation();
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
    if (message?.includes("User is un-authorised")) {
      setTimeout(async () => {
        handleLoginGo();
      }, 2000);
    }
  }, [visible, messageType]);

  const handleLoginGo = (type) => {
    if (type === "signup") {
      navigation.navigate("SignUp", { goBack: true });
    } else {
      navigation.navigate("Login", { goBack: true });
    }
  };
  return (
    <>
      {visible ? (
        <View style={styles.container}>
          <View style={[styles.mainCon]}>
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
                  {message?.includes("User is un-authorised") ? (
                    <>
                      <ScaleText style={styles.messageTxt}>
                        Please login to apply.
                        <ScaleText
                          onPress={() => handleLoginGo("signup")}
                          style={[
                            styles.messageTxt,
                            {
                              textDecorationLine: "underline",
                            },
                          ]}
                        >
                          SignUp
                        </ScaleText>
                        <ScaleText
                          style={[
                            styles.messageTxt,
                            {
                              textDecorationLine: "underline",
                            },
                          ]}
                        >
                          {" "}
                          or{" "}
                        </ScaleText>
                        <ScaleText
                          onPress={() => handleLoginGo()}
                          style={[
                            styles.messageTxt,
                            {
                              textDecorationLine: "underline",
                            },
                          ]}
                        >
                          Login
                        </ScaleText>
                      </ScaleText>
                    </>
                  ) : (
                    <ScaleText style={styles.messageTxt}>
                      {message === "" ||
                      message === null ||
                      message === undefined
                        ? "Show Message"
                        : message}
                    </ScaleText>
                  )}
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
        </View>
      ) : null}
    </>
  );
};

export default ShowMessage;
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
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
