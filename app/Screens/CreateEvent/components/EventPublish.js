import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import Header from "../../../Components/Header";
import Button from "../../../Components/Button";
import CommonStyles from "../../../Utils/CommonStyles";
import {
  BLACK_COLOR_CODE,
  WHITE_COLOR_CODE,
  YELLOW_COLOR_CODE,
} from "../../../Utils/Constant";
import Input from "../../../Components/Input";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";

const StripeConnect = (props) => {
  const richText = React.createRef() || useRef();
  return (
    <KeyboardAvoidingView style={CommonStyles.container}>
      <Header
        RightImg={null}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        leftImg={
          props.type === "busniess" || props.type === "Edit_event"
            ? require("../../../Assets/header_back_btn.png")
            : require("../../../Assets/hamburger_icon.png")
        }
        HeaderText={
          props.type === "busniess"
            ? "Create Event"
            : props.type === "Edit_event"
            ? "Edit Event"
            : "Submit an Event"
        }
        type={`${props.type !== "busniess" && "Drawer"}`}
      />
      <ScrollView keyboardShouldPersistTaps="handled">
        {props.type === "busniess" ? (
          <View style={{ marginHorizontal: 5, marginTop: 5 }}>
            <Text
              style={[styles.titlesTxt, { fontSize: 24, marginVertical: 6 }]}
            >
              Checkout -:
            </Text>
            <View style={[styles.radioBttnVw, { paddingTop: 2 }]}>
              <Text style={styles.radioBttnTxt}>Time limit to purchase</Text>
              <View style={styles.radioBttnCon}>
                <View style={styles.radioInnerCon}>
                  <TouchableOpacity
                    onPress={() =>
                      props.setCreateEvent({
                        ...props.createEvent,
                        time_limit: 0,
                      })
                    }
                  >
                    <Image
                      source={
                        props?.createEvent?.time_limit === 0
                          ? require("../../../Assets/radio_circled_checked.png")
                          : require("../../../Assets/radio_circled_unchecked.png")
                      }
                      style={styles.radioImg}
                    />
                  </TouchableOpacity>
                  <Text style={styles.radioInnerTxt}>10 Minutes</Text>
                </View>
                <View style={styles.radioInnerCon}>
                  <TouchableOpacity
                    onPress={() =>
                      props.setCreateEvent({
                        ...props.createEvent,
                        time_limit: 1,
                      })
                    }
                  >
                    <Image
                      source={
                        props?.createEvent?.time_limit === 1
                          ? require("../../../Assets/radio_circled_checked.png")
                          : require("../../../Assets/radio_circled_unchecked.png")
                      }
                      style={styles.radioImg}
                    />
                  </TouchableOpacity>
                  <Text style={styles.radioInnerTxt}>10 Minutes above</Text>
                </View>
              </View>
            </View>
            <View style={[styles.radioBttnVw, { paddingTop: 2 }]}>
              <Text style={styles.radioBttnTxt}>Hide event end time</Text>
              <View style={styles.radioBttnCon}>
                <View style={styles.radioInnerCon}>
                  <TouchableOpacity
                    onPress={() =>
                      props.setCreateEvent({
                        ...props.createEvent,
                        hide_endTime: 0,
                      })
                    }
                  >
                    <Image
                      source={
                        props?.createEvent?.hide_endTime === 0
                          ? require("../../../Assets/radio_circled_checked.png")
                          : require("../../../Assets/radio_circled_unchecked.png")
                      }
                      style={styles.radioImg}
                    />
                  </TouchableOpacity>
                  <Text style={styles.radioInnerTxt}>Yes</Text>
                </View>
                <View style={styles.radioInnerCon}>
                  <TouchableOpacity
                    onPress={() =>
                      props.setCreateEvent({
                        ...props.createEvent,
                        hide_endTime: 1,
                      })
                    }
                  >
                    <Image
                      source={
                        props?.createEvent?.hide_endTime === 1
                          ? require("../../../Assets/radio_circled_checked.png")
                          : require("../../../Assets/radio_circled_unchecked.png")
                      }
                      style={styles.radioImg}
                    />
                  </TouchableOpacity>
                  <Text style={styles.radioInnerTxt}>No</Text>
                </View>
              </View>
            </View>
            <View style={[styles.radioBttnVw, { paddingTop: 2 }]}>
              <Text style={styles.radioBttnTxt}>
                Customise ticket availability message
              </Text>
              <View style={styles.radioBttnCon}>
                <View style={styles.radioInnerCon}>
                  <TouchableOpacity
                    onPress={() =>
                      props.setCreateEvent({
                        ...props.createEvent,
                        ticketAvailability_msg: 0,
                      })
                    }
                  >
                    <Image
                      source={
                        props?.createEvent?.ticketAvailability_msg === 0
                          ? require("../../../Assets/radio_circled_checked.png")
                          : require("../../../Assets/radio_circled_unchecked.png")
                      }
                      style={styles.radioImg}
                    />
                  </TouchableOpacity>
                  <Text style={styles.radioInnerTxt}>Yes</Text>
                </View>
                <View style={styles.radioInnerCon}>
                  <TouchableOpacity
                    onPress={() =>
                      props.setCreateEvent({
                        ...props.createEvent,
                        ticketAvailability_msg: 1,
                      })
                    }
                  >
                    <Image
                      source={
                        props?.createEvent?.ticketAvailability_msg === 1
                          ? require("../../../Assets/radio_circled_checked.png")
                          : require("../../../Assets/radio_circled_unchecked.png")
                      }
                      style={styles.radioImg}
                    />
                  </TouchableOpacity>
                  <Text style={styles.radioInnerTxt}>No</Text>
                </View>
              </View>
            </View>
            <View style={[styles.radioBttnVw, { paddingTop: 2 }]}>
              <Text style={styles.radioBttnTxt}>
                Enable best available feature
              </Text>
              <View style={styles.radioBttnCon}>
                <View style={styles.radioInnerCon}>
                  <TouchableOpacity
                    onPress={() =>
                      props.setCreateEvent({
                        ...props.createEvent,
                        enable_best_feature: 0,
                      })
                    }
                  >
                    <Image
                      source={
                        props?.createEvent?.enable_best_feature === 0
                          ? require("../../../Assets/radio_circled_checked.png")
                          : require("../../../Assets/radio_circled_unchecked.png")
                      }
                      style={styles.radioImg}
                    />
                  </TouchableOpacity>
                  <Text style={styles.radioInnerTxt}>Yes</Text>
                </View>
                <View style={styles.radioInnerCon}>
                  <TouchableOpacity
                    onPress={() =>
                      props.setCreateEvent({
                        ...props.createEvent,
                        enable_best_feature: 1,
                      })
                    }
                  >
                    <Image
                      source={
                        props?.createEvent?.enable_best_feature === 1
                          ? require("../../../Assets/radio_circled_checked.png")
                          : require("../../../Assets/radio_circled_unchecked.png")
                      }
                      style={styles.radioImg}
                    />
                  </TouchableOpacity>
                  <Text style={styles.radioInnerTxt}>No</Text>
                </View>
              </View>
            </View>
            <Text style={[styles.titlesTxt, { fontSize: 16 }]}>
              Embed checkout on your website -
            </Text>
            <Input
              onChangeText={(text) =>
                props.setCreateEvent({
                  ...props.createEvent,
                  embed_checkout_website: text,
                })
              }
              value={props?.createEvent?.embed_checkout_website}
              textInputStyle={{ bottom: 5 }}
              secureTextEntry={false}
              placeholder=""
              InputType={null}
            />
            <Text style={styles.titlesTxt}>Slug Url -</Text>
            <Input
              onChangeText={(text) =>
                props.setCreateEvent({
                  ...props.createEvent,
                  slug_url: text,
                })
              }
              value={props?.createEvent?.slug_url}
              textInputStyle={{ bottom: 5 }}
              secureTextEntry={false}
              placeholder=""
              InputType={null}
            />
            <Text style={styles.titlesTxt}>Add Tracking</Text>
            <Text style={styles.subtitlesTxt}>Facebook adds pixel id -</Text>
            <Input
              onChangeText={(text) =>
                props.setCreateEvent({
                  ...props.createEvent,
                  fb_adds_pixelID: text,
                })
              }
              value={props?.createEvent?.fb_adds_pixelID}
              textInputStyle={{ bottom: 5 }}
              secureTextEntry={false}
              placeholder=""
              InputType={null}
            />
            <Text style={styles.titlesTxt}>Event page analystics</Text>
            <Text style={styles.subtitlesTxt}>Google analystics id -</Text>
            <Input
              onChangeText={(text) =>
                props.setCreateEvent({
                  ...props.createEvent,
                  google_analysticId: text,
                })
              }
              value={props?.createEvent?.google_analysticId}
              textInputStyle={{ bottom: 5 }}
              secureTextEntry={false}
              placeholder=""
              InputType={null}
            />
            <Text style={styles.subtitlesTxt}>Google Adword UID -</Text>
            <Input
              onChangeText={(text) =>
                props.setCreateEvent({
                  ...props.createEvent,
                  google_adwordId: text,
                })
              }
              value={props?.createEvent?.google_adwordId}
              textInputStyle={{ bottom: 5 }}
              secureTextEntry={false}
              placeholder=""
              InputType={null}
            />
            <Text style={styles.subtitlesTxt}>AdRoll pixel id -</Text>
            <Input
              onChangeText={(text) =>
                props.setCreateEvent({
                  ...props.createEvent,
                  adRoll_pixelID: text,
                })
              }
              value={props?.createEvent?.adRoll_pixelID}
              textInputStyle={{ bottom: 5 }}
              secureTextEntry={false}
              placeholder=""
              InputType={null}
            />
            <Text style={styles.subtitlesTxt}>AdRoll Adv id -</Text>
            <Input
              onChangeText={(text) =>
                props.setCreateEvent({
                  ...props.createEvent,
                  adRoll_advID: text,
                })
              }
              value={props?.createEvent?.adRoll_advID}
              textInputStyle={{ bottom: 5 }}
              secureTextEntry={false}
              placeholder=""
              InputType={null}
            />
            <Text style={[styles.titlesTxt, { marginHorizontal: 16 }]}>
              Email -
            </Text>
            <Text style={[styles.subtitlesTxt, { marginHorizontal: 16 }]}>
              Your confirmation email for ticket buyers
            </Text>
            <View style={styles.paragraphVw}>
              <RichToolbar
                editor={richText}
                actions={[
                  actions.setBold,
                  actions.setItalic,
                  actions.setUnderline,
                  actions.heading1,
                ]}
                iconMap={{
                  [actions.heading1]: ({ tintColor }) => (
                    <Text style={[{ color: tintColor }]}>H1</Text>
                  ),
                }}
              />
              <View style={{ minHeight: 120 }}>
                <RichEditor
                  ref={richText}
                  onChange={(descriptionText) => {
                    console.log("descriptionText:", descriptionText);
                  }}
                />
              </View>
            </View>
            <View style={styles.emailSendCon}>
              <View style={styles.radioInnerCon}>
                <TouchableOpacity
                  onPress={() =>
                    props.setCreateEvent({
                      ...props.createEvent,
                      email_Mysend: 0,
                    })
                  }
                >
                  <Image
                    source={
                      props?.createEvent?.email_Mysend === 0
                        ? require("../../../Assets/radio_circled_checked.png")
                        : require("../../../Assets/radio_circled_unchecked.png")
                    }
                    style={styles.radioImg}
                  />
                </TouchableOpacity>
                <Text style={styles.radioInnerTxt}>Send to my email</Text>
              </View>
              <View style={styles.radioInnerCon}>
                <TouchableOpacity
                  onPress={() =>
                    props.setCreateEvent({
                      ...props.createEvent,
                      email_Mysend: 1,
                    })
                  }
                >
                  <Image
                    source={
                      props?.createEvent?.email_Mysend === 1
                        ? require("../../../Assets/radio_circled_checked.png")
                        : require("../../../Assets/radio_circled_unchecked.png")
                    }
                    style={styles.radioImg}
                  />
                </TouchableOpacity>
                <Text style={styles.radioInnerTxt}>Other email</Text>
              </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <TouchableOpacity style={styles.sendMeTextCon}>
                <Text style={styles.sendMeTextTxt}>Send me a text email</Text>
              </TouchableOpacity>
            </View>
            <Text style={[styles.titlesTxt, { marginHorizontal: 16 }]}>
              Event page analystics
            </Text>
            <Text style={[styles.subtitlesTxt, { marginHorizontal: 16 }]}>
              Your confirmation email for ticket buyers (will call)
            </Text>
            <View style={styles.paragraphVw}>
              <RichToolbar
                editor={richText}
                actions={[
                  actions.setBold,
                  actions.setItalic,
                  actions.setUnderline,
                  actions.heading1,
                ]}
                iconMap={{
                  [actions.heading1]: ({ tintColor }) => (
                    <Text style={[{ color: tintColor }]}>H1</Text>
                  ),
                }}
              />
              <View style={{ minHeight: 120 }}>
                <RichEditor
                  ref={richText}
                  onChange={(descriptionText) => {
                    console.log("descriptionText:", descriptionText);
                  }}
                />
              </View>
            </View>
            <View style={styles.emailSendCon}>
              <View style={styles.radioInnerCon}>
                <TouchableOpacity
                  onPress={() =>
                    props.setCreateEvent({
                      ...props.createEvent,
                      callmail_Mysend: 0,
                    })
                  }
                >
                  <Image
                    source={
                      props?.createEvent?.callmail_Mysend === 0
                        ? require("../../../Assets/radio_circled_checked.png")
                        : require("../../../Assets/radio_circled_unchecked.png")
                    }
                    style={styles.radioImg}
                  />
                </TouchableOpacity>
                <Text style={styles.radioInnerTxt}>Send to my email</Text>
              </View>
              <View style={styles.radioInnerCon}>
                <TouchableOpacity
                  onPress={() =>
                    props.setCreateEvent({
                      ...props.createEvent,
                      callmail_Mysend: 1,
                    })
                  }
                >
                  <Image
                    source={
                      props?.createEvent?.callmail_Mysend === 1
                        ? require("../../../Assets/radio_circled_checked.png")
                        : require("../../../Assets/radio_circled_unchecked.png")
                    }
                    style={styles.radioImg}
                  />
                </TouchableOpacity>
                <Text style={styles.radioInnerTxt}>Other email</Text>
              </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <TouchableOpacity style={styles.sendMeTextCon}>
                <Text style={styles.sendMeTextTxt}>Send me a text email</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        <View style={styles.twoBttnsVw}>
          <Button
            buttonText={"Back"}
            style={styles.bttnBackVw}
            onPress={() => props.setFormView(props.formView - 1)}
          />
          <Button
            buttonText={"Next is what?"}
            style={styles.bttnNotwoVw}
            onPress={() => props.onPressNextForm()}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default StripeConnect;
