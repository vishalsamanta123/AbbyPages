import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const TabModalScreens = (props) => {
  const {
    isFocused,
    navigation,
    setIsFocused = () => {},
    handleNavigation = () => {},
  } = props;
  return (
    <>
      {isFocused.modal === "EventManagement" ||
      isFocused.modal === "PlusManagement" ||
      isFocused.modal === "JobManagement" ? (
        <Pressable
          onPress={() =>
            setIsFocused({
              ...isFocused,
              modal: "",
            })
          }
          style={styles.customPopupVw}
        >
          <View
            style={[
              styles.popupVw,
              {
                marginLeft: isFocused.modal === "EventManagement" ? 24 : 0,
                alignSelf:
                  isFocused.modal === "JobManagement" ||
                  isFocused.modal === "MoreManagement"
                    ? "flex-end"
                    : isFocused.modal === "PlusManagement"
                    ? "center"
                    : "auto",
                marginRight: isFocused.modal === "JobManagement" ? 24 : 0,
              },
            ]}
          >
            {isFocused.modal === "EventManagement" ? (
              <>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Create Event"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.subCatVw}
                  onPress={() => {
                    navigation.navigate("EventListings");
                    handleNavigation(isFocused?.modal);
                    setIsFocused({
                      ...isFocused,
                      modal: "",
                    })
                  }}
                >
                  <Text style={styles.subCatTxt}>{"Find Event"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Featured"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.subCatVw}
                  onPress={() => {
                    navigation.navigate("HowItWorks");
                    handleNavigation(isFocused?.modal);
                    setIsFocused({
                      ...isFocused,
                      modal: "",
                    })
                  }}
                >
                  <Text style={styles.subCatTxt}>{"How it works"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subCatVw, { borderBottomWidth: 0 }]}
                  onPress={() => {
                    navigation.navigate("Pricing");
                    handleNavigation(isFocused?.modal);
                    setIsFocused({
                      ...isFocused,
                      modal: "",
                    })
                  }}
                >
                  <Text style={styles.subCatTxt}>{"Pricing"}</Text>
                </TouchableOpacity>
              </>
            ) : isFocused.modal === "PlusManagement" ? (
              <>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Add a Business"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Business Post"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Create Event"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Post Job"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Sell Products"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subCatVw, { borderBottomWidth: 0 }]}
                >
                  <Text style={styles.subCatTxt}>{"Write a Review "}</Text>
                </TouchableOpacity>
              </>
            ) : isFocused.modal === "JobManagement" ? (
              <>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("JobListing");
                    handleNavigation(isFocused?.modal);
                    setIsFocused({
                      ...isFocused,
                      modal: "",
                    })
                  }}
                  style={styles.subCatVw}
                >
                  <Text style={styles.subCatTxt}>{"Find a Job"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Post Job"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subCatVw, { borderBottomWidth: 0 }]}
                >
                  <Text style={styles.subCatTxt}>{"Upload Your Résumé"}</Text>
                </TouchableOpacity>
              </>
            ) : null}
          </View>
        </Pressable>
      ) : null}
    </>
  );
};

export default TabModalScreens;
