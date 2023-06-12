import {
  View,
  Modal,
  FlatList,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  Keyboard,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import moment from "moment";
import MainHeader from "../MainHeader";
import ScaleText from "../ScaleText";
import { ICON_TYPE, IconX } from "../Icons/Icon";
import { COLORS, Constants, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";

const CommentsModal = (props) => {
  const inputRef = React.useRef();

  const {
    commentData,
    isVisible,
    setIsCommentsVisible,
    setCommentParams,
    handleOnCommentPress,
    commentParams,
    post_id,
    business_id,
  } = props;
  useEffect(() => {
    setCommentParams({
      ...commentParams,
    });
  }, []);

  const handleOnPressReply = (id) => {
    setCommentParams({
      ...commentParams,
      comment_id: id,
    });
    inputRef.current.focus();
  };

  const rendercomments = (item) => {
    return (
      <View style={styles.commentWrap}>
        <View style={{ flex: 0.8 }}>
          <Image
            source={{ uri: item.profile_image }}
            style={styles.profileImage}
          />
        </View>
        <View style={{ flex: 5 }}>
          <View>
            <View style={styles.commnentSideView}>
              <ScaleText style={styles.userNameTxt}>
                {item?.user_name}
              </ScaleText>
              <ScaleText style={styles.commentTxt}>{item?.comment}</ScaleText>
            </View>
            <View style={styles.commentBottonSection}>
              <View>
                <ScaleText style={styles.timeTxt}>
                  {moment(item?.created_date).startOf("seconds").fromNow()}
                </ScaleText>
              </View>
              <TouchableOpacity
                style={styles.replyTouch}
                onPress={() => {
                  handleOnPressReply(item?.comment_id);
                }}
              >
                <ScaleText style={styles.replyBtnTxt}>Reply</ScaleText>
              </TouchableOpacity>
            </View>
          </View>
          {item?.replyData?.length > 0 && (
            <>
              {item?.replyData?.map((item) => {
                return (
                  <View style={styles.replyView}>
                    <View style={{ flex: 0.8 }}>
                      <Image
                        source={{ uri: item.profile_image_reply }}
                        style={styles.replyProfileImage}
                      />
                    </View>
                    <View style={{ flex: 5 }}>
                      <View style={styles.replycommnentSideView}>
                        <ScaleText style={styles.replyuserNameTxt}>
                          {item?.user_name_reply}
                        </ScaleText>
                        <ScaleText style={styles.replycommentTxt}>
                          {item?.comment}
                        </ScaleText>
                      </View>
                      <View style={styles.commentBottonSection}>
                        <View>
                          <ScaleText style={styles.timeTxt}>
                            {moment(item?.created_date)
                              .startOf("seconds")
                              .fromNow()}
                          </ScaleText>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </>
          )}
        </View>
      </View>
    );
  };
  const renderOnEmptyComments = () => {
    return (
      <View style={styles.emptyCommentView}>
        <IconX
          origin={ICON_TYPE.FOUNDATION}
          color={COLORS.LIGHT_GREY}
          name={"comments"}
          size={100}
        />
        <ScaleText style={styles.noCommentTxt}>No comments yet</ScaleText>
        <ScaleText style={styles.beFirstTxt}>
          Be the first one to comment
        </ScaleText>
      </View>
    );
  };
  return (
    <KeyboardAvoidingView behavior="padding">
      <Modal
        visible={isVisible}
        animationType="slide"
        automaticallyAdjustKeyboardInsets
        style={{ flex: 1, backgroundColor: "red" }}
        keyboardShouldPersistTaps={'always'}
      >
        <MainHeader
          isSearch={false}
          headerText={"Comments"}
          loginButton={false}
          TxtMarginRight={70}
          onPressBack={() => {
            setIsCommentsVisible(false);
          }}
        />
        <ScrollView
          automaticallyAdjustKeyboardInsets={true}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps={'always'}
        >
          <View style={{ flex: 1 }}>
            <FlatList
              data={commentData}
              renderItem={({ item }) => rendercomments(item)}
              ListEmptyComponent={() => renderOnEmptyComments()}
            />
          </View>
          <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <View style={styles.inputView}>
            <TextInput
              ref={inputRef}
              onChangeText={(txt) =>
                setCommentParams({
                  ...commentParams,
                  comment: txt,
                  // comment_id: "",
                  post_id: post_id,
                  business_id: business_id,
                })
              }
              style={styles.inputStyle}
              value={commentParams.comment}
              placeholder="Write a Comment..."
            />
            <TouchableOpacity
              style={styles.inputBtnStyle}
              onPress={() => handleOnCommentPress()}
            >
              <IconX
                origin={ICON_TYPE.ICONICONS}
                color={COLORS.BLACK}
                name={"send"}
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  commentWrap: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  profileView: {
    flex: 1,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginTop: 5,
  },
  commnentSideView: {
    backgroundColor: COLORS.LIGHT_WHITE,
    borderRadius: 20,
    padding: Constants.Ios ? 10 : 6,
    paddingHorizontal: Constants.Ios ? 20 : 10,
    marginLeft: 10,
  },
  userNameTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.BOLD,
  },
  commentTxt: {
    fontSize: FONT_SIZE.medium,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  replyBtnView: {},
  commentBottonSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 5,
  },
  timeTxt: {
    color: COLORS.LIGHT_BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.smallL,
  },
  replyBtnTxt: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.smallL,
  },
  replyView: {
    marginTop: 15,
    flexDirection: "row",
  },
  replyProfileImage: {
    height: 35,
    width: 35,
    borderRadius: 35,
    marginTop: 5,
  },
  replycommnentSideView: {
    backgroundColor: COLORS.LIGHT_WHITE,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
  },
  replyuserNameTxt: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.smallL,
  },
  replycommentTxt: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.small,
  },
  inputStyle: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.small,
    margin: 5,
    padding: 10,
    // backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.BORDER_LINE,
    flex: 5,
    height: 50,
  },
  inputView: {
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  inputBtnStyle: {
    flex: 1,
    margin: 5,
    height: 50,
    // backgroundColor: COLORS.YELLOW,
    borderWidth: 2,
    borderColor: COLORS.BORDER_LINE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  emptyCommentView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  noCommentTxt: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.mediumL,
    marginBottom: 20,
  },
  beFirstTxt: {
    color: COLORS.LIGHT_BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.smallL,
  },
});

export default CommentsModal;
