import { View, TouchableOpacity } from "react-native";
import React from "react";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import { COLORS } from "../../Utils/Constant";
import styles from "./styles";
import ScaleText from "../ScaleText";
import TabModalScreens from "./TabModalScreens";
import CommonStyles from "../../Utils/CommonStyles";

const TabModal = (props) => {
  const {
    onPressmodal = "",
    setOnPressmodal = () => {},
    isFocused,
    setIsFocused = () => {},
    navigation = "",
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
        {onPressmodal?.modal === "EventManagement" ? (
          <TabModalScreens
            navigation={navigation}
            onPressmodal={onPressmodal}
            setOnPressmodal={setOnPressmodal}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
          />
        ) : null}
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
        <ScaleText
          style={[
            styles.iconTxt,
            {
              color:
                isFocused === "EventManagement" ? COLORS.YELLOW : COLORS.BLACK,
            },
          ]}
        >
          Events
        </ScaleText>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tapVws}
        onPress={() => handleTabs("PlusManagement")}
      >
        {onPressmodal?.modal === "PlusManagement" ? (
          <TabModalScreens
            navigation={navigation}
            onPressmodal={onPressmodal}
            setOnPressmodal={setOnPressmodal}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
          />
        ) : null}
        <View style={{ bottom: 3 }}>
          <IconX
            origin={ICON_TYPE.ANT_ICON}
            name={isFocused === "PlusManagement" ? "pluscircle" : "pluscircleo"}
            size={34}
            color={
              isFocused === "PlusManagement" ? COLORS.YELLOW : COLORS.BLACK
            }
          />
        </View>
        <ScaleText style={styles.iconTxt}></ScaleText>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tapVws}
        onPress={() => handleTabs("JobManagement")}
      >
        {onPressmodal?.modal === "JobManagement" ? (
          <TabModalScreens
            navigation={navigation}
            onPressmodal={onPressmodal}
            setOnPressmodal={setOnPressmodal}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
          />
        ) : null}
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
        <ScaleText
          style={[
            styles.iconTxt,
            {
              color:
                isFocused === "JobManagement" ? COLORS.YELLOW : COLORS.BLACK,
            },
          ]}
        >
          Jobs
        </ScaleText>
      </TouchableOpacity>
    </>
  );
};

export default TabModal;
