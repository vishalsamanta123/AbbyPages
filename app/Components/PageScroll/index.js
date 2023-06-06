import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { COLORS, Constants } from "../../Utils/Constant";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { TabModalContext } from "../../Utils/UserContext";

const PageScroll = ({
  contentContainerStyle: propStyle,
  bottomButton = true,
  children,
  backgroundColor,
  keyboardShouldPersistTaps = "handled",
  onPressScrollTop = () => {},
  onScroll = () => {},
  scrollEnabled,
  style,
  StickyHeaderComponent,
  Content_offset,
  automaticallyAdjustKeyboardInsets,
  newRef,
  horizontal,
  showsHorizontalScrollIndicator,
  showsVerticalScrollIndicator,
  refreshControl,
  nestedScrollEnabled,
}) => {
  const ref = useRef(null);
  const [screenOffSet, setScreenOffSet] = useState(0);
  const CONTENT_OFFSET = Content_offset
    ? Content_offset
    : Constants.windowHeight / 1.9;
  const { mainCon } = styles;
  let defaultStyle = mainCon;
  const [onPressmodal, setOnPressmodal] = useContext(TabModalContext);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      ref?.current?.scrollTo({ x: 0, y: 0, animated: true });
    }
  }, [isFocused]);
  const navigation = useNavigation();
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setOnPressmodal({
        ...onPressmodal,
        modal: "",
      });
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <>
      <ScrollView
        ref={newRef ? newRef : ref}
        contentContainerStyle={[
          defaultStyle,
          propStyle ? propStyle : null,
          {
            backgroundColor: backgroundColor ? backgroundColor : COLORS.WHITE,
          },
        ]}
        onScroll={(event) => {
          onScroll(event);
          setScreenOffSet(event.nativeEvent.contentOffset.y);
          setOnPressmodal({
            ...onPressmodal,
            modal: "",
          });
        }}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        style={style}
        scrollEnabled={scrollEnabled}
        StickyHeaderComponent={StickyHeaderComponent}
        automaticallyAdjustKeyboardInsets={automaticallyAdjustKeyboardInsets}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        refreshControl={refreshControl}
        nestedScrollEnabled={nestedScrollEnabled}
      >
          {children}
      </ScrollView>
      {bottomButton ? (
        <>
          {CONTENT_OFFSET <= screenOffSet ? (
            <View style={styles.scrollPosVw}>
              <TouchableOpacity
                onPress={() => {
                  ref?.current?.scrollTo({ x: 0, y: 0, animated: true });
                  onPressScrollTop();
                }}
              >
                <IconX
                  origin={ICON_TYPE.ANT_ICON}
                  name={"upcircleo"}
                  size={32}
                  color={COLORS.YELLOW}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default PageScroll;
const styles = StyleSheet.create({
  mainCon: {
    flexGrow: 1,
  },
  scrollPosVw: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: 10,
    marginBottom: 10,
  },
});
