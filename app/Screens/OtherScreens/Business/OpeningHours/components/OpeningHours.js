import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from "./styles";
import Header from "../../../../Components/Header";
import Button from "../../../../Components/Button";
import CommonStyles from "../../../../Utils/CommonStyles";
import {
  FONT_FAMILY_REGULAR,
  LIGHT_GREY_COLOR_CODE,
  WHITE_COLOR_CODE,
  LIGHT_BLACK_COLOR_CODE,
  YELLOW_COLOR_CODE,
  LIGHT_WHITE_COLOR_CODE,
} from "../../../../Utils/Constant";
import { Images } from "../../../../Utils/images";

const OpeningHours = (props) => {
  const [handleActiveStatus, setHandleActiveStatus] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding' : null}
      style={[CommonStyles.container]}>
      <Header
        RightImg={null}
        HeaderText={"Opening Hours"}
        leftImg={Images.DRAWER_IMG}
        type="Drawer"
        MainHeadStyle={{ color: WHITE_COLOR_CODE }}
        tintColor={WHITE_COLOR_CODE}
        mncontainer={{ backgroundColor: YELLOW_COLOR_CODE }}
      />
      <View style={CommonStyles.body}>
        <ScrollView>
          <View style={styles.MainCOntainer}>
            <View style={styles.MondayView}>
              <Text style={styles.MondayText}>Monday</Text>
              {!props.MondayCloseOpen == 1 ? (
                <TouchableOpacity
                  onPress={() => props.mondayOpenFun()}
                  style={styles.ClosedView}
                >
                  <Image
                    source={Images.VERIFIED_IMG}
                    style={{ height: 21, width: 20 }}
                  />
                  <Text style={styles.ClosedTxt}>Closed</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => props.mondayCloseFun()}
                  style={styles.ClosedView}
                >
                  <Image
                    source={Images.RADIO_UNCHECK_IMG}
                  />
                  <Text style={styles.ClosedTxt}>Closed</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.MainOpenClseView}>
              <TouchableOpacity
                onPress={
                  props.MondayCloseOpen == 1
                    ? () => props.monOpenTimeShowPicker()
                    : null
                }
                style={[
                  !props.MondayCloseOpen == 1
                    ? styles.OpenOptnViewDis
                    : styles.OpenOptnView,
                  { marginRight: 5 },
                ]}
              >
                <View>
                  <Text
                    style={
                      !props.MondayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    Opens
                  </Text>
                  <Text
                    style={
                      !props.MondayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    {props.MonOpenTime ? props.MonOpenTime : null}
                  </Text>
                </View>
                <Image
                  source={
                    props.MondayCloseOpen == 1
                      ? Images.ARROW_UP_IMG
                      : Images.ARROW_DOWN_IMG
                  }
                  style={{ width: 20, height: 20, tintColor: LIGHT_WHITE_COLOR_CODE }}
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={props.MonShowPickerTime}
                mode="time"
                onConfirm={props.MondayOpenConfirmTime}
                onCancel={props.hideDatePicker}
              />
              <TouchableOpacity
                onPress={
                  props.MondayCloseOpen == 1
                    ? () => props.monCloseTimeShowPicker()
                    : null
                }
                style={[
                  !props.MondayCloseOpen == 1
                    ? styles.OpenOptnViewDis
                    : styles.OpenOptnView,
                  { marginLeft: 5 },
                ]}
              >
                <View>
                  <Text
                    style={
                      !props.MondayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    Closes
                  </Text>
                  <Text
                    style={
                      !props.MondayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    {props.MonCloeTime ? props.MonCloeTime : null}
                  </Text>
                </View>
                <Image
                  source={
                    props.MondayCloseOpen == 1
                      ? Images.ARROW_UP_IMG
                      : Images.ARROW_DOWN_IMG
                  }
                  style={{ width: 20, height: 20, tintColor: LIGHT_WHITE_COLOR_CODE }}
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={props.monCloseShowPic}
                mode="time"
                onConfirm={props.MondayCloseConfirmTime}
                onCancel={props.hideDatePicker}
              />
            </View>
            {/* <Text style={styles.YellowTextStyle}>Add more hours</Text> */}
          </View>
          <View style={[styles.MainCOntainer]}>
            <View
              style={
                ([styles.MondayView],
                {
                  paddingTop: 15,
                  flexDirection: "row",
                  justifyContent: "space-between",
                })
              }
            >
              <Text style={styles.MondayText}>Tuesday</Text>
              {!props.tuesdayCloseOpen == 1 ? (
                <TouchableOpacity
                  onPress={() => props.tuesdayOpenFun()}
                  style={styles.ClosedView}
                >
                  <Image
                    source={Images.VERIFIED_IMG}
                    style={{ height: 21, width: 20 }}
                  />
                  <Text style={styles.ClosedTxt}>Closed</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => props.tuesdayCloseFun()}
                  style={styles.ClosedView}
                >
                  <Image
                    source={Images.RADIO_UNCHECK_IMG}
                  />
                  <Text style={styles.ClosedTxt}>Closed</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.MainOpenClseView}>
              <TouchableOpacity
                onPress={
                  props.tuesdayCloseOpen == 1
                    ? () => props.TuesOpenTimeShowPicker()
                    : null
                }
                style={[
                  !props.tuesdayCloseOpen == 1
                    ? styles.OpenOptnViewDis
                    : styles.OpenOptnView,
                  { marginRight: 5 },
                ]}
              >
                <View>
                  <Text
                    style={
                      !props.tuesdayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    Opens
                  </Text>
                  <Text
                    style={
                      !props.tuesdayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    {props.TuesOpenTime ? props.TuesOpenTime : null}
                  </Text>
                </View>
                <Image
                  source={
                    props.tuesdayCloseOpen == 1
                      ? Images.ARROW_UP_IMG
                      : Images.ARROW_DOWN_IMG
                  }
                  style={{ width: 20, height: 20, tintColor: LIGHT_WHITE_COLOR_CODE }}
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={props.TuesOpenShowPic}
                mode="time"
                onConfirm={props.TuesdayOpenConfirmTime}
                onCancel={props.hideDatePicker}
              />
              <TouchableOpacity
                onPress={
                  props.tuesdayCloseOpen == 1
                    ? () => props.TuesCloseTimeShowPicker()
                    : null
                }
                style={[
                  !props.tuesdayCloseOpen == 1
                    ? styles.OpenOptnViewDis
                    : styles.OpenOptnView,
                  { marginLeft: 5 },
                ]}
              >
                <View>
                  <Text
                    style={
                      !props.tuesdayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    Closes
                  </Text>
                  <Text
                    style={
                      !props.tuesdayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    {props.TuesCloseTime ? props.TuesCloseTime : null}
                  </Text>
                </View>
                <Image
                  source={
                    props.tuesdayCloseOpen == 1
                      ? Images.ARROW_UP_IMG
                      : Images.ARROW_DOWN_IMG
                  }
                  style={{ width: 20, height: 20, tintColor: LIGHT_WHITE_COLOR_CODE }}
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={props.TuesCloseShowPic}
                mode="time"
                onConfirm={props.TuesdayCloseConfirmTime}
                onCancel={props.hideDatePicker}
              />
            </View>
            {/* <Text style={styles.YellowTextStyle}>Add more hours</Text> */}
          </View>
          <View style={[styles.MainCOntainer, { marginTop: 15 }]}>
            <View style={styles.MondayView}>
              <Text style={styles.MondayText}>Wednesday</Text>
              {!props.WednesdayCloseOpen == 1 ? (
                <TouchableOpacity
                  onPress={() => props.WednesdayOpenFun()}
                  style={styles.ClosedView}
                >
                  <Image
                    source={Images.VERIFIED_IMG}
                    style={{ height: 21, width: 20 }}
                  />
                  <Text style={styles.ClosedTxt}>Closed</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => props.WednesdayCloseFun()}
                  style={styles.ClosedView}
                >
                  <Image
                    source={Images.RADIO_UNCHECK_IMG}
                  />
                  <Text style={styles.ClosedTxt}>Closed</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.MainOpenClseView}>
              <TouchableOpacity
                onPress={
                  props.WednesdayCloseOpen == 1
                    ? () => props.WednesOpenTimeShowPicker()
                    : null
                }
                style={[
                  !props.WednesdayCloseOpen == 1
                    ? styles.OpenOptnViewDis
                    : styles.OpenOptnView,
                  { marginRight: 5 },
                ]}
              >
                <View>
                  <Text
                    style={
                      !props.WednesdayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    Opens
                  </Text>
                  <Text
                    style={
                      !props.WednesdayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    {props.WednesOpenTime ? props.WednesOpenTime : null}
                  </Text>
                </View>
                <Image
                  source={
                    props.WednesdayCloseOpen == 1
                      ? Images.ARROW_UP_IMG
                      : Images.ARROW_DOWN_IMG
                  }
                  style={{ width: 20, height: 20, tintColor: LIGHT_WHITE_COLOR_CODE }}
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={props.WednesOpenShowPic}
                mode="time"
                onConfirm={props.WednesOpenConfirmTime}
                onCancel={props.hideDatePicker}
              />
              <TouchableOpacity
                onPress={
                  props.WednesdayCloseOpen == 1
                    ? () => props.WednesCloseTimeShowPicker()
                    : null
                }
                style={[
                  !props.WednesdayCloseOpen == 1
                    ? styles.OpenOptnViewDis
                    : styles.OpenOptnView,
                  { marginLeft: 5 },
                ]}
              >
                <View>
                  <Text
                    style={
                      !props.WednesdayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    Closes
                  </Text>
                  <Text
                    style={
                      !props.WednesdayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    {props.WednesCloseTime ? props.WednesCloseTime : null}
                  </Text>
                </View>
                <Image
                  source={
                    props.WednesdayCloseOpen == 1
                      ? Images.ARROW_UP_IMG
                      : Images.ARROW_DOWN_IMG
                  }
                  style={{ width: 20, height: 20, tintColor: LIGHT_WHITE_COLOR_CODE }}
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={props.WednesCloseShowPic}
                mode="time"
                onConfirm={props.WednesCloseConfirmTime}
                onCancel={props.hideDatePicker}
              />
            </View>
            {/* <Text style={styles.YellowTextStyle}>Add more hours</Text> */}
          </View>
          <View style={[styles.MainCOntainer, { marginTop: 15 }]}>
            <View style={styles.MondayView}>
              <Text style={styles.MondayText}>Thursday</Text>
              {!props.ThursdayCloseOpen == 1 ? (
                <TouchableOpacity
                  onPress={() => props.ThursdayOpenFun()}
                  style={styles.ClosedView}
                >
                  <Image
                    source={Images.VERIFIED_IMG}
                    style={{ height: 21, width: 20 }}
                  />
                  <Text style={styles.ClosedTxt}>Closed</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => props.ThursdayCloseFun()}
                  style={styles.ClosedView}
                >
                  <Image
                    source={Images.RADIO_UNCHECK_IMG}
                  />
                  <Text style={styles.ClosedTxt}>Closed</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.MainOpenClseView}>
              <TouchableOpacity
                onPress={
                  props.ThursdayCloseOpen == 1
                    ? () => props.ThursOpenShowPicker()
                    : null
                }
                style={[
                  !props.ThursdayCloseOpen == 1
                    ? styles.OpenOptnViewDis
                    : styles.OpenOptnView,
                  { marginRight: 5 },
                ]}
              >
                <View>
                  <Text
                    style={
                      !props.ThursdayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    Opens
                  </Text>
                  <Text
                    style={
                      !props.ThursdayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    {props.ThursOpenTime ? props.ThursOpenTime : null}
                  </Text>
                </View>
                <Image
                  source={
                    props.ThursdayCloseOpen == 1
                      ? Images.ARROW_UP_IMG
                      : Images.ARROW_DOWN_IMG
                  }
                  style={{ width: 20, height: 20, tintColor: LIGHT_WHITE_COLOR_CODE }}
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={props.ThursOpenShowPic}
                mode="time"
                onConfirm={props.ThursOpenConfirmTime}
                onCancel={props.hideDatePicker}
              />
              <TouchableOpacity
                onPress={
                  props.ThursdayCloseOpen == 1
                    ? () => props.ThursCloseShowPicker()
                    : null
                }
                style={[
                  !props.ThursdayCloseOpen == 1
                    ? styles.OpenOptnViewDis
                    : styles.OpenOptnView,
                  { marginLeft: 5 },
                ]}
              >
                <View>
                  <Text
                    style={
                      !props.ThursdayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    Closes
                  </Text>
                  <Text
                    style={
                      !props.ThursdayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    {props.ThursCloseTime ? props.ThursCloseTime : null}
                  </Text>
                </View>
                <Image
                  source={
                    props.ThursdayCloseOpen == 1
                      ? Images.ARROW_UP_IMG
                      : Images.ARROW_DOWN_IMG
                  }
                  style={{ width: 20, height: 20, tintColor: LIGHT_WHITE_COLOR_CODE }}
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={props.ThursCloseShowPic}
                mode="time"
                onConfirm={props.ThursCloseConfirmTime}
                onCancel={props.hideDatePicker}
              />
            </View>
            {/* <Text style={styles.YellowTextStyle}>Add more hours</Text> */}
          </View>

          <View style={[styles.MainCOntainer, { marginTop: 15 }]}>
            <View style={styles.MondayView}>
              <Text style={styles.MondayText}>Friday</Text>
              {!props.FridayCloseOpen == 1 ? (
                <TouchableOpacity
                  onPress={() => props.FridayOpenFun()}
                  style={styles.ClosedView}
                >
                  <Image
                    source={Images.VERIFIED_IMG}
                    style={{ height: 21, width: 20 }}
                  />
                  <Text style={styles.ClosedTxt}>Closed</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => props.FridayCloseFun()}
                  style={styles.ClosedView}
                >
                  <Image
                    source={Images.RADIO_UNCHECK_IMG}
                  />
                  <Text style={styles.ClosedTxt}>Closed</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.MainOpenClseView}>
              <TouchableOpacity
                onPress={
                  props.FridayCloseOpen == 1
                    ? () => props.FriOpenShowPicker()
                    : null
                }
                style={[
                  !props.FridayCloseOpen == 1
                    ? styles.OpenOptnViewDis
                    : styles.OpenOptnView,
                  { marginRight: 10 },
                ]}
              >
                <View>
                  <Text
                    style={
                      !props.FridayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    Opens
                  </Text>
                  <Text
                    style={
                      !props.FridayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    {props.FriOpenTime ? props.FriOpenTime : null}
                  </Text>
                </View>
                <Image
                  source={
                    props.FridayCloseOpen == 1
                      ? Images.ARROW_UP_IMG
                      : Images.ARROW_DOWN_IMG
                  }
                  style={{ width: 20, height: 20, tintColor: LIGHT_WHITE_COLOR_CODE }}
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={props.FriOpenShowPic}
                mode="time"
                onConfirm={props.FriOpenConfirmTime}
                onCancel={props.hideDatePicker}
              />
              <TouchableOpacity
                onPress={
                  props.FridayCloseOpen == 1
                    ? () => props.FriCloseShowPicker()
                    : null
                }
                style={[
                  !props.FridayCloseOpen == 1
                    ? styles.OpenOptnViewDis
                    : styles.OpenOptnView,
                ]}
              >
                <View>
                  <Text
                    style={
                      !props.FridayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    Closes
                  </Text>
                  <Text
                    style={
                      !props.FridayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    {props.FriCloseTime ? props.FriCloseTime : null}
                  </Text>
                </View>
                <Image
                  source={
                    props.FridayCloseOpen == 1
                      ? Images.ARROW_UP_IMG
                      : Images.ARROW_DOWN_IMG
                  }
                  style={{ width: 20, height: 20, tintColor: LIGHT_WHITE_COLOR_CODE }}
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={props.FriCloseShowPic}
                mode="time"
                onConfirm={props.FriCloseConfirmTime}
                onCancel={props.hideDatePicker}
              />
            </View>
            {/* <Text style={styles.YellowTextStyle}>Add more hours</Text> */}
          </View>

          <View style={[styles.MainCOntainer, { marginTop: 15 }]}>
            <View style={styles.MondayView}>
              <Text style={styles.MondayText}>Saturday</Text>
              {!props.SaturdayCloseOpen == 1 ? (
                <TouchableOpacity
                  onPress={() => props.SaturdayOpenFun()}
                  style={styles.ClosedView}
                >
                  <Image
                    source={Images.VERIFIED_IMG}
                    style={{ height: 21, width: 20 }}
                  />
                  <Text style={styles.ClosedTxt}>Closed</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => props.SaturdayCloseFun()}
                  style={styles.ClosedView}
                >
                  <Image
                    source={Images.RADIO_UNCHECK_IMG}
                  />
                  <Text style={styles.ClosedTxt}>Closed</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.MainOpenClseView}>
              <TouchableOpacity
                onPress={
                  props.SaturdayCloseOpen == 1
                    ? () => props.SaturOpenShowPicker()
                    : null
                }
                style={[
                  !props.SaturdayCloseOpen == 1
                    ? styles.OpenOptnViewDis
                    : styles.OpenOptnView,
                  { marginRight: 8 },
                ]}
              >
                <View>
                  <Text
                    style={
                      !props.SaturdayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    Opens
                  </Text>
                  <Text
                    style={
                      !props.SaturdayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    {props.SaturOpenTime ? props.SaturOpenTime : null}
                  </Text>
                </View>
                <Image
                  source={
                    props.SaturdayCloseOpen == 1
                      ? Images.ARROW_UP_IMG
                      : Images.ARROW_DOWN_IMG
                  }
                  style={{ width: 20, height: 20, tintColor: LIGHT_WHITE_COLOR_CODE }}
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={props.SaturOpenShowPic}
                mode="time"
                onConfirm={props.SaturOpenConfirmTime}
                onCancel={props.hideDatePicker}
              />
              <TouchableOpacity
                onPress={
                  props.SaturdayCloseOpen == 1
                    ? () => props.SaturCloseShowPicker()
                    : null
                }
                style={[
                  !props.SaturdayCloseOpen == 1
                    ? styles.OpenOptnViewDis
                    : styles.OpenOptnView,
                ]}
              >
                <View>
                  <Text
                    style={
                      !props.SaturdayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    Closes
                  </Text>
                  <Text
                    style={
                      !props.SaturdayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    {props.SaturCloseTime ? props.SaturCloseTime : null}
                  </Text>
                </View>
                <Image
                  source={
                    props.SaturdayCloseOpen == 1
                      ? Images.ARROW_UP_IMG
                      : Images.ARROW_DOWN_IMG
                  }
                  style={{ width: 20, height: 20, tintColor: LIGHT_WHITE_COLOR_CODE }}
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={props.SaturCloseShowPic}
                mode="time"
                onConfirm={props.SaturCloseConfirmTime}
                onCancel={props.hideDatePicker}
              />
            </View>
            {/* <Text style={styles.YellowTextStyle}>Add more hours</Text> */}
          </View>

          <View style={[styles.MainCOntainer, { marginTop: 15 }]}>
            <View style={styles.MondayView}>
              <Text style={styles.MondayText}>Sunday</Text>
              {!props.SundayCloseOpen == 1 ? (
                <TouchableOpacity
                  onPress={() => props.SundayOpenFun()}
                  style={styles.ClosedView}
                >
                  <Image
                    source={Images.VERIFIED_IMG}
                    style={{ height: 21, width: 20 }}
                  />
                  <Text style={styles.ClosedTxt}>Closed</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => props.SundayCloseFun()}
                  style={styles.ClosedView}
                >
                  <Image
                    source={Images.RADIO_UNCHECK_IMG}
                  />
                  <Text style={styles.ClosedTxt}>Closed</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.MainOpenClseView}>
              <TouchableOpacity
                onPress={
                  props.SundayCloseOpen == 1
                    ? () => props.SunOpenShowPicker()
                    : null
                }
                style={[
                  !props.SundayCloseOpen == 1
                    ? styles.OpenOptnViewDis
                    : styles.OpenOptnView,
                  { marginRight: 5 },
                ]}
              >
                <View>
                  <Text
                    style={
                      !props.SundayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    Opens
                  </Text>
                  <Text
                    style={
                      !props.SundayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    {props.SunOpenTime ? props.SunOpenTime : null}
                  </Text>
                </View>
                <Image
                  source={
                    props.SundayCloseOpen == 1
                      ? Images.ARROW_UP_IMG
                      : Images.ARROW_DOWN_IMG
                  }
                  style={{ width: 20, height: 20, tintColor: LIGHT_WHITE_COLOR_CODE }}
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={props.SunOpenShowPic}
                mode="time"
                onConfirm={props.SunOpenConfirmTime}
                onCancel={props.hideDatePicker}
              />
              <TouchableOpacity
                onPress={
                  props.SundayCloseOpen == 1
                    ? () => props.SunCloseShowPicker()
                    : null
                }
                style={[
                  !props.SundayCloseOpen == 1
                    ? styles.OpenOptnViewDis
                    : styles.OpenOptnView,
                  { marginLeft: 5 },
                ]}
              >
                <View>
                  <Text
                    style={
                      !props.SundayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    Closes
                  </Text>
                  <Text
                    style={
                      !props.SundayCloseOpen == 1
                        ? styles.ClosedTxtDis
                        : styles.ClosedTxt
                    }
                  >
                    {props.SunCloseTime ? props.SunCloseTime : null}
                  </Text>
                </View>
                <Image
                  source={
                    props.SundayCloseOpen == 1
                      ? Images.ARROW_UP_IMG
                      : Images.ARROW_DOWN_IMG
                  }
                  style={{ width: 20, height: 20, tintColor: LIGHT_WHITE_COLOR_CODE }}
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={props.SunCloseShowPic}
                mode="time"
                onConfirm={props.SunCloseConfirmTime}
                onCancel={props.hideDatePicker}
              />
            </View>
          </View>
          <View
            style={[styles.MainCOntainer, { marginTop: 15, marginBottom: 10 }]}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => setHandleActiveStatus(!handleActiveStatus)}
              >
                {!handleActiveStatus ? (
                  <Image
                    style={styles.ImgeRadio}
                    source={Images.RADIO_UNCHECK_IMG}
                  />
                ) : (
                  <Image
                    style={styles.ImgeRadio}
                    source={Images.RADIO_CHECK_IMG}
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.markMyBusiness}>
                Mark my business as closed
              </Text>
            </View>
            <Text style={styles.DescrptionText}>
              If your business is closed for a weekm a rnonth, or more, you can
              Let your customers know by choosing one of these options.
            </Text>
            <View style={styles.TemporilyCloseView}>
              <TouchableOpacity
                onPress={() => setHandleActiveStatus(!handleActiveStatus)}
              >
                {!handleActiveStatus ? (
                  <Image
                    style={styles.ImgeRadio}
                    source={Images.RADIO_UNCHECK_IMG}
                  />
                ) : (
                  <Image
                    style={styles.ImgeRadio}
                    source={Images.RADIO_CHECK_IMG}
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.markMyBusiness}>Temporarily Closed</Text>
            </View>
            <Text style={styles.DescrptionText}>
              Marking your business as Temporarily Closed means that you are not
              providing alternative services such as takeout, delivery, or
              virtual meetings. This teas customers that you will not be
              providing any services until your business opens again. Since
              AbbyPages search functionality is based on relevance, your
              business may appear lower in search results.
            </Text>
            <View>
              <Text style={styles.markMyBusiness}>Closed Until</Text>
              <View
                style={{
                  padding: 10,
                  marginTop: 10,
                  borderColor: LIGHT_BLACK_COLOR_CODE,
                  borderWidth: 0.5,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONT_FAMILY_REGULAR,
                    fontSize: 13,
                    color: LIGHT_GREY_COLOR_CODE,
                  }}
                >
                  Choose Date
                </Text>
                <Image source={Images.EVENT_IMG} />
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingTop: 20 }}>
              <TouchableOpacity
                onPress={() => setHandleActiveStatus(!handleActiveStatus)}
              >
                {!handleActiveStatus ? (
                  <Image
                    style={styles.ImgeRadio}
                    source={Images.RADIO_UNCHECK_IMG}
                  />
                ) : (
                  <Image
                    style={styles.ImgeRadio}
                    source={Images.RADIO_CHECK_IMG}
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.markMyBusiness}>Temporarily Closed</Text>
            </View>
            <Text style={styles.DescrptionText}>
              You're requesting that your business be marked as permanently
              closed on AbbyPages. Once your business has been marked as
              permanently closed, you'll no longer be able to access or make
              updates to your business page.
            </Text>
            <Text style={styles.AdditionalText}>Additional Details</Text>
            <View style={styles.textInputStyle}>
              <TextInput
                multiline={true}
                style={{
                  height: 200,
                  width: "100%",
                  fontFamily: FONT_FAMILY_REGULAR,
                }}
                placeholder={
                  "Please provide any additional. context (Such as whether this business is undergoing repairs or renovation, temporarily closing for a season, or if you're not sure when you•ll. reopen) to help us verify this change."
                }
              />
            </View>
            {props.ButtonStatus == true ? (
              <Button
                buttonText="Save Changes"
                style={{ width: "100%", marginTop: 10 }}
                onPress={() => props.SaveDetails()}
              />
            ) : (
              <Button
                buttonText="Save Changes"
                style={{ width: "100%", marginTop: 10 }}
              // onPress={() => props.SaveDetails()}
              />
            )}
            <Button
              buttonText="Cancel"
              buttonLabelStyle={styles.BackColorBtn}
              style={styles.CancelBtn}
              onPress={() => props.cancelFun()}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default OpeningHours;
