import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import ScaleText from "../ScaleText";

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
        <Pressable 
        onPress={()=> setOnPressmodal({
          ...onPressmodal,
          modal: "",
        })}
        style={styles.customPopupVw}>
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
                  <ScaleText style={styles.subCatTxt}>
                    {"Create Event"}
                  </ScaleText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.subCatVw}
                  onPress={() => {
                    modalNavigation("EventListings", "EventManagement");
                  }}
                >
                  <ScaleText style={styles.subCatTxt}>{"Find Event"}</ScaleText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <ScaleText style={styles.subCatTxt}>{"Featured"}</ScaleText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.subCatVw}
                  onPress={() => {
                    modalNavigation("HowItWorks", "EventManagement");
                  }}
                >
                  <ScaleText style={styles.subCatTxt}>
                    {"How it works"}
                  </ScaleText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subCatVw, { borderBottomWidth: 0 }]}
                  onPress={() => {
                    modalNavigation("Pricing", "EventManagement");
                  }}
                >
                  <ScaleText style={styles.subCatTxt}>{"Pricing"}</ScaleText>
                </TouchableOpacity>
              </>
            ) : onPressmodal.modal === "PlusManagement" ? (
              <>
                <TouchableOpacity style={styles.subCatVw}>
                  <ScaleText style={styles.subCatTxt}>
                    {"Add a Business"}
                  </ScaleText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <ScaleText style={styles.subCatTxt}>
                    {"Business Post"}
                  </ScaleText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <ScaleText style={styles.subCatTxt}>
                    {"Create Event"}
                  </ScaleText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <ScaleText style={styles.subCatTxt}>{"Post Job"}</ScaleText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <ScaleText style={styles.subCatTxt}>
                    {"Sell Products"}
                  </ScaleText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subCatVw, { borderBottomWidth: 0 }]}
                >
                  <ScaleText style={styles.subCatTxt}>
                    {"Write a Review "}
                  </ScaleText>
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
                  <ScaleText style={styles.subCatTxt}>{"Find a Job"}</ScaleText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCatVw}>
                  <ScaleText style={styles.subCatTxt}>{"Post Job"}</ScaleText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subCatVw, { borderBottomWidth: 0 }]}
                >
                  <ScaleText style={styles.subCatTxt}>
                    {"Upload Your Résumé"}
                  </ScaleText>
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
