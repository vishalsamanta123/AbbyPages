import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Modal } from "react-native";
import styles from "./styles";
import moment from "moment";
import { COLORS, Constants, FONT_SIZE } from "../../../../../Utils/Constant";
import _ from "lodash";
import ScaleText from "../../../../../Components/ScaleText";
import MainHeader from "../../../../../Components/MainHeader";
import MainInput from "../../../../../Components/MainInput";
import PageScroll from "../../../../../Components/PageScroll";
import MainButton from "../../../../../Components/MainButton";
import AddMinusView from "../../../../../Components/AddMinusView";
import { getAmount } from "../../../../../Utils/Globalfunctions";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { IconX, ICON_TYPE } from "../../../../../Components/Icons/Icon";
import { SALE_END, SALE_STARTS } from "../../../../../Utils/svgImages";

const BuyTicketScreen = (props) => {
  const [bestQuality, setBestQuality] = useState("");
  const [pressInfo, setPressInfo] = useState({});
  const eventDate = moment(props?.eventDetails?.created_at).format(
    Constants.TIME_DATE_FORMAT
  );
  const getqty = (item) => {
    var getIndex = _.findIndex(props?.ticketAdded, {
      ticket_title: item.ticket_title,
    });
    const FinalAmount = props?.ticketAdded.reduce(
      (accumulatedTotal, curr) => accumulatedTotal + curr.total_price,
      0
    );
    props.setTotalAmount(FinalAmount);
    if (getIndex >= 0) {
      return props?.ticketAdded[getIndex]?.ticket_quantity
        ? props?.ticketAdded[getIndex]?.ticket_quantity
        : 0;
    }
  };
  const addProductOnCart = async (item, value) => {
    const objSet = {
      ...item,
      ticket_quantity: value,
      total_price: item?.ticket_price * value,
    };
    if (props?.ticketAdded?.length === 0) {
      props.setTicketAdded([objSet]);
    } else {
      var getIndex = _.findIndex(props?.ticketAdded, {
        ticket_title: item.ticket_title,
      });
      if (getIndex >= 0) {
        const newObj = { ...props?.ticketAdded[getIndex], objSet };
        newObj.ticket_quantity = value;
        newObj.total_price = newObj.ticket_price * value;
        const newArray = [...props?.ticketAdded];
        newArray[getIndex] = newObj;
        props.setTicketAdded(newArray);
      } else {
        props.setTicketAdded((curr) => [...curr, objSet]);
      }
    }
  };
  const removeFromCart = (item, value) => {
    if (props?.ticketAdded?.length > 0) {
      var getIndex = _.findIndex(props?.ticketAdded, {
        ticket_title: item.ticket_title,
      });
      if (getIndex >= 0) {
        if (props?.ticketAdded[getIndex].ticket_quantity > 0 && value > 0) {
          const newObj = { ...props?.ticketAdded[getIndex] };
          newObj.ticket_quantity = newObj.ticket_quantity - 1;
          newObj.total_price = newObj.total_price - newObj.ticket_price;
          const newArray = [...props?.ticketAdded];
          newArray[getIndex] = newObj;
          props.setTicketAdded(newArray);
        } else if (value === 0) {
          props?.ticketAdded.splice(getIndex, 1);
          props.setTicketAdded(props?.ticketAdded);
        }
      }
    }
  };
  const DetailInfo = ({ item }) => {
    return (
      <Modal transparent visible={pressInfo?.item ? true : false}>
        <View style={styles.modalVw}>
          <View style={styles.detailInfoVw}>
            <View style={styles.straightStyl}>
              <ScaleText style={styles.modalTopTxt}>
                Ticket Discription
              </ScaleText>
              <TouchableOpacity onPress={() => setPressInfo({})}>
                <ScaleText style={styles.modalTopTxt}>Close</ScaleText>
              </TouchableOpacity>
            </View>
            <View style={styles.detailInfoTxtVw}>
              <ScaleText style={styles.detailInfoTxt}>Ticket Name:</ScaleText>
              <ScaleText style={styles.detailInfoTxt}>
                {item?.ticket_title}
              </ScaleText>
            </View>
            <View style={styles.detailInfoTxtVw}>
              <ScaleText style={styles.detailInfoTxt}>Ticket Price:</ScaleText>
              <ScaleText style={styles.detailInfoTxt}>
                {item?.ticket_price}
              </ScaleText>
            </View>
            <View style={styles.detailInfoTxtVw}>
              <ScaleText style={styles.detailInfoTxt}>
                Available Quantity:
              </ScaleText>
              <ScaleText style={styles.detailInfoTxt}>
                {item?.other?.quantity}
              </ScaleText>
            </View>
            <View style={styles.detailInfoTxtVw}>
              <ScaleText style={styles.detailInfoTxt}>
                Buy max Quantity:
              </ScaleText>
              <ScaleText style={styles.detailInfoTxt}>{1}</ScaleText>
            </View>
            <View style={styles.detailInfoTxtVw}>
              <ScaleText style={styles.detailInfoTxt}>
                Ticket Transferable:
              </ScaleText>
              <ScaleText style={styles.detailInfoTxt}>{"Yes"}</ScaleText>
            </View>
            <View style={styles.detailInfoTxtVw}>
              <ScaleText style={styles.detailInfoTxt}>
                Ticket start sale time:
              </ScaleText>
              <ScaleText style={styles.detailInfoTxt}>
                {moment(item?.other?.ticket_sale_start_date).format(
                  Constants.SH_TIME_DATE_FORMAT
                )}
              </ScaleText>
            </View>
            <View style={styles.detailInfoTxtVw}>
              <ScaleText style={styles.detailInfoTxt}>
                Ticket end sale time:
              </ScaleText>
              <ScaleText style={styles.detailInfoTxt}>
                {moment(item?.other?.ticket_sale_end_date).format(
                  Constants.SH_TIME_DATE_FORMAT
                )}
              </ScaleText>
            </View>
            <View style={[styles.detailInfoTxtVw, { borderBottomWidth: 0 }]}>
              <ScaleText style={styles.detailInfoTxt}>Description:</ScaleText>
              <ScaleText style={styles.detailInfoTxt}>
                {item?.other?.ticket_description}
              </ScaleText>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <>
      <MainHeader
        onPressBack={() => {
          props.setBuyTicketModal("");
          props.setTicketAdded([]);
        }}
        headerText={"Buy Ticket"}
        notifyIcon={false}
        backText={false}
        TxtMarginRight={"8%"}
      />
      <PageScroll>
        <View style={styles.modalsVw}>
          <ScaleText style={styles.eventNameTx}>
            {props?.eventDetails?.event_name}
          </ScaleText>
          <ScaleText style={styles.startDateTxt}>
            Event Starts : {eventDate}
          </ScaleText>
          <ScaleText style={styles.selectTxt}>Select Ticket</ScaleText>
          <>
            <ScaleText style={styles.titleTxt}>
              Show best available for
            </ScaleText>
            <View style={{ marginRight: 100 }}>
              <MainInput
                placeholder="Qty : "
                header={false}
                height={45}
                keyboardType={"number-pad"}
                onChangeText={(text) => {
                  setBestQuality(text);
                }}
                value={bestQuality}
              />
            </View>
            <View style={{ marginRight: "50%", marginTop: 10 }}>
              <MainButton
                buttonTxt="Submit"
                backgroundColor={COLORS.YELLOW}
                txtColor={COLORS.WHITE}
              />
            </View>
            <View style={{ marginVertical: 12 }}>
              <ScaleText style={styles.titleTxt}>Ticket Category</ScaleText>
              <FlatList
                data={props.ticketsType}
                renderItem={({ item, index }) => {
                  const findStart = (startDate, startTime) => {
                    const cobStartTimeDate = `${startDate} ${startTime}`;
                    const dateTimeUnix = Math.floor(
                      new Date(cobStartTimeDate).getTime() / 1000
                    );
                    const currentTime = moment(new Date()).unix();
                    if (dateTimeUnix <= currentTime) {
                      return true;
                    } else {
                      return false;
                    }
                  };
                  const findEnd = (endDate, endTime) => {
                    const cobStartTimeDate = `${endDate} ${endTime}`;
                    const dateTimeUnix = Math.floor(
                      new Date(cobStartTimeDate).getTime() / 1000
                    );
                    const currentTime = moment(new Date()).unix();
                    if (dateTimeUnix >= currentTime) {
                      return true;
                    } else {
                      return false;
                    }
                  };
                  return (
                    <View style={styles.ticketCategoryVw}>
                      <View style={CommonStyles.straightCon}>
                        <View style={{ flex: 1.5, paddingVertical: 5 }}>
                          <View style={CommonStyles.straightCon}>
                            <ScaleText
                              numberOfLines={1}
                              style={[styles.ticketCtgryTxt, { maxWidth: 150 }]}
                            >
                              {item?.ticket_title}
                            </ScaleText>
                            <TouchableOpacity
                              onPress={() => setPressInfo({ index, item })}
                            >
                              <IconX
                                origin={ICON_TYPE.ENTYPO}
                                name={"info-with-circle"}
                                paddingLeft={10}
                                paddingRight={10}
                                color={COLORS.RGBA}
                                size={18}
                              />
                            </TouchableOpacity>
                          </View>
                          <ScaleText style={styles.ticketAmtTxt}>
                            $ {getAmount(item?.ticket_price)}
                          </ScaleText>
                        </View>
                        <View>
                          {findStart(
                            item?.other?.ticket_sale_start_date,
                            item?.other?.ticket_start_sale_time
                          ) &&
                          findEnd(
                            item?.other?.ticket_sale_end_date,
                            item?.other?.ticket_end_sale_time
                          ) ? (
                            <View style={{ flex: 1, alignItems: "flex-end" }}>
                              <AddMinusView
                                colorMin={COLORS.YELLOW}
                                colorMax={COLORS.YELLOW}
                                minVal={0}
                                value={getqty(item)}
                                height={36}
                                onPressAdd={(val) => {
                                  addProductOnCart(item, val, index);
                                  const newObj = {
                                    ...props.ticketsType[index],
                                    total_price: item?.ticket_price * val,
                                    ticket_quantity: val,
                                  };
                                  const newArray = [...props.ticketsType];
                                  newArray[index] = newObj;
                                  props.setTicketsType(newArray);
                                }}
                                onPressMinus={(val) => {
                                  removeFromCart(item, val, index);
                                  const newObj = {
                                    ...props.ticketsType[index],
                                    total_price: item?.ticket_price * val,
                                    ticket_quantity: val,
                                  };
                                  const newArray = [...props.ticketsType];
                                  newArray[index] = newObj;
                                  props.setTicketsType(newArray);
                                }}
                              />
                              <ScaleText style={styles.smallTxt}>
                                Total Amount:{" "}
                                {item?.total_price ? item?.total_price : "0.00"}
                              </ScaleText>
                            </View>
                          ) : findStart(
                              item?.other?.ticket_sale_end_date,
                              item?.other?.ticket_end_sale_time
                            ) ? (
                            <View>
                              <SALE_END
                                width={80}
                                height={80}
                                style={{ right: 10 }}
                              />
                            </View>
                          ) : (
                            <View>
                              <SALE_STARTS width={110} height={110} />
                              <ScaleText style={styles.ticketExtraTxt}>
                                {moment(
                                  item?.other?.ticket_sale_start_date
                                ).format(Constants.MONTH_DAY_FORMAT)}
                              </ScaleText>
                            </View>
                          )}
                        </View>
                      </View>
                      <View
                        style={[
                          CommonStyles.straightCon,
                          { justifyContent: "space-between" },
                        ]}
                      >
                        {findStart(
                          item?.other?.ticket_sale_start_date,
                          item?.other?.ticket_start_sale_time
                        ) &&
                          findEnd(
                            item?.other?.ticket_sale_end_date,
                            item?.other?.ticket_end_sale_time
                          ) && (
                            <ScaleText style={styles.ticketSubTxt}>
                              Sale End On:
                              {moment(item?.other?.ticket_sale_end_date).format(
                                Constants.SH_TIME_DATE_FORMAT
                              )}
                            </ScaleText>
                          )}
                        {findStart(
                          item?.other?.ticket_sale_start_date,
                          item?.other?.ticket_start_sale_time
                        ) &&
                          findEnd(
                            item?.other?.ticket_sale_end_date,
                            item?.other?.ticket_end_sale_time
                          ) && (
                            <ScaleText
                              style={[
                                styles.ticketSubTxt,
                                { fontSize: FONT_SIZE.verysmall },
                              ]}
                            >
                              Ticket Availablity:{" "}
                              {item?.other?.quantity
                                ? Number(item?.other?.quantity) > 1000
                                  ? "1000+"
                                  : Number(item?.other?.quantity)
                                : "0"}
                            </ScaleText>
                          )}
                      </View>
                    </View>
                  );
                }}
                ItemSeparatorComponent={() => {
                  return (
                    <>
                      {pressInfo?.item?.ticket_title ? (
                        <DetailInfo item={pressInfo?.item} />
                      ) : null}
                    </>
                  );
                }}
              />
            </View>
            <ScaleText style={[styles.titleTxt, { marginLeft: 0 }]}>
              Ticket Total
            </ScaleText>
            {props?.ticketAdded?.map((item) => {
              return (
                <View style={styles.straightVw}>
                  <ScaleText style={styles.ticketsNameTxt}>
                    ({item.ticket_quantity}) {item.ticket_title}
                  </ScaleText>
                  <ScaleText style={styles.smallTxt}>
                    ${item.total_price}
                  </ScaleText>
                </View>
              );
            })}
            <View style={styles.straightVw}>
              <ScaleText style={styles.subTitleTxt}>Service fee</ScaleText>
              <ScaleText style={styles.subTitleTxt}>
                {props?.eventDetails?.serviceAmount
                  ? props?.eventDetails?.serviceAmount
                  : "0.00"}
              </ScaleText>
            </View>
            <View style={[styles.straightVw, { borderBottomWidth: 0.5 }]}>
              <ScaleText style={styles.subTitleTxt}>Taxes</ScaleText>
              <ScaleText style={[styles.subTitleTxt]}>
                {props?.eventDetails?.taxesAmount
                  ? props?.eventDetails?.taxesAmount
                  : "0.00"}
              </ScaleText>
            </View>
            <View style={styles.straightVw}>
              <ScaleText style={styles.subTitleTxt}>Total</ScaleText>
              <ScaleText style={styles.subTitleTxt}>
                {props?.totalAmount ? props?.totalAmount : "0.00"}
              </ScaleText>
            </View>
          </>
          <View style={styles.modalBttnVw}>
            <MainButton
              paddingHorizontal={30}
              buttonTxt={"Cancel"}
              backgroundColor={COLORS.COMMON}
              txtColor={COLORS.BLACK}
              borderRadius={10}
              borderColor={COLORS.LIGHT_GREY}
              onPressButton={() => props.onPressCancelTick()}
            />
            <MainButton
              paddingHorizontal={40}
              borderRadius={10}
              backgroundColor={COLORS.YELLOW}
              txtColor={COLORS.WHITE}
              borderColor={COLORS.TRANSPARENT}
              buttonTxt={"Next"}
              onPressButton={() => props.onPressTicketResp(3)}
            />
          </View>
        </View>
      </PageScroll>
    </>
  );
};
export default BuyTicketScreen;
