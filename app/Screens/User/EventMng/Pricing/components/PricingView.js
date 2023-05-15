import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  RefreshControl,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import CommonStyles from "../../../../../Utils/CommonStyles";
import MainHeader from "../../../../../Components/MainHeader";
import { COLORS, FONT_SIZE } from "../../../../../Utils/Constant";
import { Images } from "../../../../../Utils/images";
import styles from "./styles";
import Button from "../../../../../Components/Button";
import { IconX } from "../../../../../Components/Icons/Icon";
import { ticketPricingPros, whoPayOptions } from "../../../../../Utils/staticData";
import ScaleText from "../../../../../Components/ScaleText";
import SelectButton from "../../../../../Components/SelectButton";

const PricingView = () => {
  const [ticketPrice, setTicketPrice] = useState(0.0);
  const [abbyPages_carges, setAbbyPages_carges] = useState(0.0);
  const [cardProcessing_carges, setCardProcessing_carges] = useState(0.0);
  const [paymentCondition, setPaymentCondition] = useState(whoPayOptions[0]?.value);
  const [paymentConditionLabel, setPaymentConditionLabel] = useState(whoPayOptions[0]?.title);
  const [buyerPay, setBuyerPay] = useState(0.0);
  const [youReceive, setYouReceive] = useState(0.0);

  useEffect(() => {
    handleCharges(ticketPrice);
  }, [paymentCondition]);

  const handleCharges = (tp) => {
    console.log("tp", tp);
    const tkt_p = Number(tp);
    var abby = (0).toFixed(2);
    var card = (0).toFixed(2);
    var extra_carges;
    if (tkt_p > 5) {
      abby = (tkt_p * 2) / 100 + 1;
      card = ((tkt_p * 3) / 100).toFixed(2);
      extra_carges = Number(abby) + Number(card);
      const buyerPay = paymentCondition == 1 ? tkt_p + extra_carges : tkt_p;
      const youReceive = paymentCondition == 1 ? tkt_p : tkt_p - extra_carges;

      setAbbyPages_carges(abby.toFixed(2));
      setCardProcessing_carges(card);
      setBuyerPay(buyerPay);
      setYouReceive(youReceive);
    } else if (tkt_p <= 5 && tkt_p > 0) {
      extra_carges = Number(abby) + Number(0.25);
      const buyerPay = paymentCondition == 1 ? tkt_p + extra_carges : tkt_p;
      const youReceive = paymentCondition == 1 ? tkt_p : tkt_p - extra_carges;
      setAbbyPages_carges((0).toFixed(2));
      setCardProcessing_carges(0.25);
      setBuyerPay(buyerPay);
      setYouReceive(youReceive);
    } else {
      extra_carges = Number(abby) + Number(card);
      const buyerPay = paymentCondition == 1 ? tkt_p + extra_carges : tkt_p;
      const youReceive = paymentCondition == 1 ? tkt_p : tkt_p - extra_carges;

      setAbbyPages_carges((0).toFixed(2));
      setCardProcessing_carges((0).toFixed(2));
      setBuyerPay(buyerPay.toFixed(2));
      setYouReceive(youReceive.toFixed(2));
    }

    setTicketPrice(tkt_p.toFixed(2));
  };

  const renderSteps = (item) => {
    return (
      <View style={styles.cardView}>
        <View style={styles.imageView}>
          <IconX
            origin={item.origin}
            color={item.color}
            size={item.size}
            name={item.name}
          />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <ScaleText style={styles.cardheading}>{item.heading}</ScaleText>
          <ScaleText style={styles.cardDesc}>{item.description}</ScaleText>
        </View>
      </View>
    );
  };
  return (
    <View style={CommonStyles.container}>
      <MainHeader headerText={"Pricing"} loginButton={false} isLogin={true} />
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        automaticallyAdjustKeyboardInsets
        contentContainerStyle={{ flexGrow: 1 }}
        nestedScrollEnabled={true}
      >
        <ImageBackground
          source={Images.HOW_IT_WORKS_BANNER}
          style={styles.backgroundImgVw}
          opacity={0.5}
        >
          <View style={styles.imgInnerVw}>
            <ScaleText style={[CommonStyles.bigTxtVw, { color: COLORS.WHITE }]}>
              Easy and direct pricing
            </ScaleText>
            <ScaleText
              style={[
                CommonStyles.mediumTxt,
                { marginTop: 16, paddingHorizontal: 10, color: COLORS.WHITE, marginBottom: 16, },
              ]}
            >
              There are no commitments necessary, and our system is absolutely
              free for all event planners. Pass the fees on to your ticket
              buyers and reinvest the savings in your event.
            </ScaleText>
            <Button
              style={styles.createbtn}
              buttonLabelStyle={styles.createBtnTxt}
              onPress={() => {}}
              buttonText={"Create Event"}
              width={"50%"}
              paddingHeight={12}
            />
          </View>
        </ImageBackground>
        <View style={styles.priceCalWrap}>
          <View style={styles.priceCalView}>
            <ScaleText style={styles.txtWithYellow}>$1 + 2%</ScaleText>
            <ScaleText style={styles.txtLight}>
              {"("}Per ticket{")"}
            </ScaleText>
            <View>
              <ScaleText style={styles.plus}>+</ScaleText>
            </View>
            <ScaleText style={styles.txtWithYellow}>3%</ScaleText>
            <ScaleText style={styles.txtLight}>
              {"("}Credit card processing{")"}
            </ScaleText>
          </View>
          <View style={styles.priceDescView}>
            <ScaleText style={styles.priceDescHeadingTxt}>
              Daily, unlimited, free ticketing.
            </ScaleText>
            <ScaleText style={styles.priceDescTxt}>
              Our incredibly straightforward system keeps ticketing fees to a
              minimum of $1 plus 2% of the cost per ticket. Pass on those costs
              to your customers to make it totally free for you! The cost of
              using our or another credit card processor is only 3%.
            </ScaleText>
          </View>
        </View>
        <View style={styles.priceCalWrap}>
          <View style={styles.priceDescView}>
            <ScaleText style={styles.priceDescHeadingTxt}>
              Everything just got a lot simpler for you to understand your
              ticket prices.
            </ScaleText>
            <ScaleText style={styles.priceDescTxt}>
              Take aside the pen and paper and use our online calculator to
              determine your accurate ticket price. Simply enter your ticket
              price, choose whether or not to pass on the price to your
              customers, and we'll take care of the rest!
            </ScaleText>
          </View>
        </View>
        <View style={styles.priceCalWrap}>
          <View style={styles.priceDescView}>
            <ScaleText
              style={[styles.priceDescHeadingTxt, { marginBottom: 20 }]}
            >
              Estimate Your Abbypages Fees
            </ScaleText>
            <View style={styles.feesCalWrap}>
              <View style={styles.feesInputView}>
                <ScaleText style={styles.inputHeading}>
                  Ticket Price ($)
                </ScaleText>
                <TextInput
                  style={styles.textinputStyle}
                  placeholder="20.00"
                  keyboardType="number-pad"
                  onChangeText={(val) => {
                    handleCharges(val);
                  }}
                  allowFontScaling={false}
                />
              </View>
              <View style={styles.partition} />
              <View style={styles.secondWrap}>
                <View style={styles.sectionView}>
                  <ScaleText
                    style={[styles.txtWithYellow, { textAlign: "left" }]}
                  >
                    ${abbyPages_carges}
                  </ScaleText>
                  <ScaleText
                    style={[styles.inputHeading, { textAlign: "left" }]}
                  >
                    AbbyPages Fee
                  </ScaleText>
                </View>
                <View style={styles.sectionView}>
                  <ScaleText
                    style={[styles.txtWithYellow, { textAlign: "right" }]}
                  >
                    ${cardProcessing_carges}
                  </ScaleText>
                  <ScaleText
                    style={[styles.inputHeading, { textAlign: "right" }]}
                  >
                    Credit Card Processing
                  </ScaleText>
                </View>
              </View>
              <View style={styles.partition} />
              <View style={styles.thirdWrap}>
                <View style={{ flex: 1 }}>
                  <ScaleText style={[styles.inputHeading]}>
                    Your Buyers Pay:
                  </ScaleText>
                </View>
                <View style={{ flex: 1 }}>
                  <ScaleText
                    style={[styles.txtWithYellow, { textAlign: "right" }]}
                  >
                    ${buyerPay}
                  </ScaleText>
                </View>
              </View>
              <View style={styles.partition} />
              <View style={styles.thirdWrap}>
                <View style={{ flex: 1 }}>
                  <ScaleText style={[styles.inputHeading]}>
                    You Receive:
                  </ScaleText>
                </View>
                <View style={{ flex: 1 }}>
                  <ScaleText
                    style={[styles.txtWithYellow, { textAlign: "right" }]}
                  >
                    ${youReceive}
                  </ScaleText>
                </View>
              </View>
              <View style={styles.partition} />
              <SelectButton
                headTxt={""}
                data={whoPayOptions}
                listType={''}
                searchInput={false}
                value={paymentConditionLabel}
                labelField={"title"}
                valueField={"title"}
                onPressItem={(item) => {
                  console.log("🚀 ~ file: PricingView.js:311 ~ item:", item)
                  setPaymentCondition(item?.value)
                  setPaymentConditionLabel(item?.title)
                }}
              />
              {/* <TouchableOpacity onPress={() => setPaymentCondition(1)}>
                <ScaleText>i want buyers to pay all fees {paymentCondition === 1 && 'current'}</ScaleText>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setPaymentCondition(2)}>
                <ScaleText>I wish to pay all fees.{paymentCondition === 2 && 'current'}</ScaleText>
              </TouchableOpacity> */}
              {/* <DropDownApp /> */}
              <View style={styles.createnowBtnview}>
                <Button
                  style={styles.createbtn}
                  buttonLabelStyle={styles.createBtnTxt}
                  onPress={() => {}}
                  buttonText={"Create Event Now"}
                  width={"70%"}
                  paddingHeight={10}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.priceCalWrap, { backgroundColor: COLORS.BLACK }]}>
          <View style={styles.priceDescView}>
            <ScaleText
              style={[styles.priceDescHeadingTxt, { color: COLORS.WHITE }]}
            >
              All of your ticketing requires at no additional cost.
            </ScaleText>
            <FlatList
              data={ticketPricingPros}
              renderItem={({ item }) => renderSteps(item)}
            />
          </View>
        </View>
        <View style={styles.priceCalWrap}>
          <View style={styles.priceDescView}>
            <ScaleText style={styles.priceDescHeadingTxt}>
              Quickly collect your payments.
            </ScaleText>
            <ScaleText style={styles.priceDescTxt}>
              You will always receive payment via direct deposit or check 3–5
              business days after your event. If you feel that's not quick
              enough for your requirements, you can apply for our FastPay option
              to start collecting money a week before your event.
            </ScaleText>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PricingView;
