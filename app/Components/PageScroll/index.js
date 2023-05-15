import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { COLORS, Constants } from "../../Utils/Constant";
import { IconX, ICON_TYPE } from "../Icons/Icon";

const PageScroll = ({
  contentContainerStyle: propStyle,
  children,
  backgroundColor,
  keyboardShouldPersistTaps,
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
    marginBottom: 10
  },
});
