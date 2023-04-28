import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import { COLORS } from "../../Utils/Constant";
import styles from "./styles";

const TabModal = (props) => {
  const {
    onPressmodal = "",
    setOnPressmodal = () => {},
    isFocused,
    setIsFocused = () => {},
    state = "",
  } = props;

  const handleTabs = (type, focuse) => {
    if (type === onPressmodal?.modal) {
      setOnPressmodal({
        ...onPressmodal,
        modal: "",
      });
    } else {
      setOnPressmodal({
        ...onPressmodal,
        modal: type,
      });
    }
  };
  return (
    <>
      <TouchableOpacity
        style={styles.tapVws}
        onPress={() => handleTabs("EventManagement")}
      >
        <View>
          <IconX
            origin={
              isFocused === "EventManagement"
                ? ICON_TYPE.MATERIAL_ICONS
                : ICON_TYPE.FEATHER_ICONS
            }
            name={isFocused === "EventManagement" ? "event" : "calendar"}
            size={isFocused === "EventManagement" ? 26 : 20}
            color={
              isFocused === "EventManagement" ? COLORS.YELLOW : COLORS.BLACK
            }
          />
        </View>
        <Text
          style={[
            styles.iconTxt,
            {
              color:
                isFocused === "EventManagement" ? COLORS.YELLOW : COLORS.BLACK,
            },
          ]}
        >
          Events
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tapVws}
        onPress={() => handleTabs("PlusManagement")}
      >
        <View style={{ marginBottom: 5 }}>
          <IconX
            origin={ICON_TYPE.ANT_ICON}
            name={isFocused === "PlusManagement" ? "pluscircle" : "pluscircleo"}
            size={34}
            color={
              isFocused === "PlusManagement" ? COLORS.YELLOW : COLORS.BLACK
            }
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tapVws}
        onPress={() => handleTabs("JobManagement")}
      >
        <View>
          <IconX
            origin={ICON_TYPE.ICONICONS}
            name={
              isFocused === "JobManagement" ? "briefcase" : "briefcase-outline"
            }
            size={20}
            color={isFocused === "JobManagement" ? COLORS.YELLOW : COLORS.BLACK}
          />
        </View>
        <Text
          style={[
            styles.iconTxt,
            {
              color:
                isFocused === "JobManagement" ? COLORS.YELLOW : COLORS.BLACK,
            },
          ]}
        >
          Jobs
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default TabModal;
