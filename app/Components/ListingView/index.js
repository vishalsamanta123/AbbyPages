import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import EmptyList from "../EmptyList";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import { COLORS, Constants } from "../../Utils/Constant";
import { useIsFocused } from "@react-navigation/native";
import { TabModalContext } from "../../Utils/UserContext";

const ListingView = ({
  data,
  horizontal = false,
  showsHorizontalScrollIndicator = false,
  showsVerticalScrollIndicator = false,
  keyExtractor,
  renderItem,
  ListEmptyComponent,
  ListHeaderComponent,
  newRef,
  onEndReached,
  onRefresh,
  onPressScrollTop = () => {},
  onScroll = () => {},
  Content_offset,
}) => {
  const ref = useRef(null);
  const [screenOffSet, setScreenOffSet] = useState(0);
  const [onPressmodal, setOnPressmodal] = useContext(TabModalContext);
  const CONTENT_OFFSET = Content_offset
    ? Content_offset
    : Constants.windowHeight / 1.9;

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      ref?.current?.scrollToOffset({ x: 0, y: 0, animated: true });
    }
  }, [isFocused]);

  return (
    <>
      <Pressable
        onPress={() => {
          setOnPressmodal({
            ...onPressmodal,
            modal: "",
          });
        }}
      >
        <FlatList
          data={data}
          ref={newRef ? newRef : ref}
          horizontal={horizontal}
          showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListEmptyComponent={ListEmptyComponent}
          ListHeaderComponent={ListHeaderComponent}
          onEndReached={onEndReached}
          refreshing={false}
          onRefresh={onRefresh}
          onScroll={(event) => {
            onScroll(event);
            setScreenOffSet(event?.nativeEvent?.contentOffset?.y);
            setOnPressmodal({
              ...onPressmodal,
              modal: "",
            });
          }}
        />
        {CONTENT_OFFSET <= screenOffSet ? (
          <View style={styles.scrollPosVw}>
            <TouchableOpacity
              onPress={() => {
                ref?.current?.scrollToOffset({ x: 0, y: 0, animated: true });
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
      </Pressable>
    </>
  );
};

export default ListingView;
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
