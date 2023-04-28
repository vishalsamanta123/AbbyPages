import { View, Text, FlatList } from "react-native";
import React from "react";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { FONT_SIZE } from "../../../../../Utils/Constant";
import MainHeader from "../../../../../Components/MainHeader";
import NewsPost from "./NewsPost";

const NewsFeedView = (props) => {
  const { newsfeedData } = props;
  console.log("newsfeedData", newsfeedData);
  return (
    <View style={CommonStyles.container}>
      <MainHeader
        headerText={"News Feed"}
        fontSize={FONT_SIZE.large}
        loginButton={false}
        isLogin={true}
      />
      <FlatList
        data={newsfeedData}
        renderItem={({ item, index }) => {
          return <NewsPost newsData={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NewsFeedView;
