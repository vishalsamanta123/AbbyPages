import React, { useRef, useState } from "react";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import EmptyList from "../EmptyList";
import { IconX, ICON_TYPE } from "../Icons/Icon";
import { COLORS, Constants } from "../../Utils/Constant";

const ViewLists = ({
  data,
  horizontal = false,
  showsHorizontalScrollIndicator = false,
  showsVerticalScrollIndicator = false,
  keyExtractor = (item, index) => index,
  renderItem = ({ item, index }) => {
    item, index;
  },
  ListEmptyComponent = () => {
    return <EmptyList message={"List"} />;
  },
  ListHeaderComponent = () => {},
  onEndReached = () => {},
  onRefresh = () => {},
  onPressScrollTop = () => {},
  onScroll = () => {},
  Content_offset,
}) => {
  const ref = useRef(null);
  const [screenOffSet, setScreenOffSet] = useState(0);
  const CONTENT_OFFSET = Content_offset
    ? Content_offset
    : Constants.windowHeight / 1.9;
  return (
    <>
      <FlatList
        data={data}
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
        }}
      />
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

export default ViewLists;
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
