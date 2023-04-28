import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

const TabModalScreens = (props) => {
  const {
    onPressmodal,
    setOnPressmodal = () => {},
    navigation,
    isFocused,
    setIsFocused = () => {},
  } = props;

  const modalNavigation = (navigate, modal) => {
    navigation.navigate(navigate);
    setIsFocused(modal);
    setOnPressmodal({
      ...onPressmodal,
      modal: "",
      navigate: modal,
    });
  };

  return (
    <>
      {onPressmodal.modal === "EventManagement" ||
      onPressmodal.modal === "JobManagement" ||
      onPressmodal.modal === "PlusManagement" ? (
        <View style={styles.customPopupVw}>
          <View
            style={[
              styles.popupVw,
              {
                marginLeft: onPressmodal.modal === "EventManagement" ? 24 : 0,
                alignSelf:
                  onPressmodal.modal === "JobManagement" ||
                  onPressmodal.modal === "MoreManagement"
                    ? "flex-end"
                    : onPressmodal.modal === "PlusManagement"
                    ? "center"
                    : "auto",
                marginRight: onPressmodal.modal === "JobManagement" ? 24 : 0,
              },
            ]}
          >
            {onPressmodal.modal === "EventManagement" ? (
              <>
                <TouchableOpacity style={styles.subCatVw}>
                  <Text style={styles.subCatTxt}>{"Create Event"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.subCatVw}
                  onPress={() => {
                    modalNavigation("EventListings", "EventManagement");
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
                    modalNavigation("HowItWorks", "EventManagement");
                  }}
                >
                  <Text style={styles.subCatTxt}>{"How it works"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subCatVw, { borderBottomWidth: 0 }]}
                  onPress={() => {
                    modalNavigation("Pricing", "EventManagement");
                  }}
                >
                  <Text style={styles.subCatTxt}>{"Pricing"}</Text>
                </TouchableOpacity>
              </>
            ) : onPressmodal.modal === "PlusManagement" ? (
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
            ) : onPressmodal.modal === "JobManagement" ? (
              <>
                <TouchableOpacity
                  onPress={() => {
                    modalNavigation("JobListing", "JobManagement");
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
        </View>
      ) : null}
    </>
  );
};

export default TabModalScreens;
