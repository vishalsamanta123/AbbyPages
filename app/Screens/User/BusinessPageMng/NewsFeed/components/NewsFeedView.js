import { View, FlatList } from "react-native";
import React from "react";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { FONT_SIZE } from "../../../../../Utils/Constant";
import MainHeader from "../../../../../Components/MainHeader";
import NewsPost from "./NewsPost";

const NewsFeedView = (props) => {
  const {
    newsfeedData,
    setComment,
    handleOnCommentPress,
    setCommentParams,
    commentParams,
  } = props;
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
          return (
            <NewsPost
              newsData={item}
              handleOnPressLike={props.handleOnPressLike}
              setComment={setComment}
              handleOnCommentPress={handleOnCommentPress}
              setCommentParams={setCommentParams}
              commentParams={commentParams}
            />
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NewsFeedView;
