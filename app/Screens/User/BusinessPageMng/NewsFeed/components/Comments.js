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
} from "react-native";
import React, { useEffect } from "react";
import MainHeader from "../../../../../Components/MainHeader";
import ScaleText from "../../../../../Components/ScaleText";
import styles from "./styles";
import moment from "moment";
import Button from "../../../../../Components/Button";
import { ICON_TYPE, IconX } from "../../../../../Components/Icons/Icon";
import { COLORS } from "../../../../../Utils/Constant";

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
      // post_id: post_id,
      // business_id: business_id
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
        >
          <View style={{ flex: 1 }}>
            <FlatList
              data={commentData}
              renderItem={({ item }) => rendercomments(item)}
              ListEmptyComponent={() => renderOnEmptyComments()}
            />
          </View>
        </ScrollView>
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
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default CommentsModal;
