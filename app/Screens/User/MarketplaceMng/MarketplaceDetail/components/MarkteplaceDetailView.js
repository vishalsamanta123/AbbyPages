import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import MainHeader from "../../../../../Components/MainHeader";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import CarouselView from "../../../../../Components/CarouselView";
import ScaleText from "../../../../../Components/ScaleText";
import { getAmount } from "../../../../../Utils/Globalfunctions";
import { ICON_TYPE, IconX } from "../../../../../Components/Icons/Icon";
import { COLORS } from "../../../../../Utils/Constant";
import PageScroll from "../../../../../Components/PageScroll";
import AddMinusView from "../../../../../Components/AddMinusView";
import MainButton from "../../../../../Components/MainButton";

const MarkteplaceDetailView = (props) => {
  const { productDetail = {} } = props;
  console.log(
    "🚀 ~ file: MarkteplaceDetailView.js:17 ~ productDetail:",
    productDetail
  );
  const productSpecification = productDetail?.product_specification;
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${28.5384},${81.3789}&zoom=8&scale=2&size=600x300&maptype=roadmap&markers=scale%3A1%color:red%7Clabel:A%7C28.543707340175,-81.3514976796&format=png&key=AIzaSyCbDx7Lk4eTMzptrQKXZvOPYgEMggrq8o4`;

  return (
    <View style={[CommonStyles.container, {}]}>
      <MainHeader
        // headerText={"Marketplace"}
        isSearch={false}
        loginButton={false}
        TxtMarginRight={"5%"}
        // onPressBack={() => onBackPress()}
      />
      <PageScroll
        contentContainerStyle={[CommonStyles.otherScrollCon, ,]}
        showsVerticalScrollIndicator={false}
      >
        <CarouselView data={productDetail?.product_images} />
        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.nameView}>
            <ScaleText style={styles.productName}>
              {productDetail?.product_name}
            </ScaleText>
            <View style={styles.priceView}>
              <ScaleText style={styles.finalPrice}>
                ${getAmount(productDetail?.final_price)}
              </ScaleText>
              <ScaleText style={styles.price}>
                ${getAmount(productDetail?.price)}
              </ScaleText>
            </View>
          </View>
          <View style={[styles.sendmsgView]}>
            <ScaleText style={styles.sendMsgTxt}>
              Send seller a message
            </ScaleText>
            <View style={styles.inputWrap}>
              <TextInput
                style={styles.msgInputStyle}
                placeholder="Hi! is this available"
              />
              <TouchableOpacity style={styles.inputBtnStyle} onPress={() => {}}>
                <IconX
                  origin={ICON_TYPE.ICONICONS}
                  color={COLORS.GREY}
                  name={"send"}
                  size={25}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.shareView}>
            <TouchableOpacity style={styles.shareBtnsTouch}>
              <IconX
                origin={ICON_TYPE.ENTYPO}
                name={"share"}
                size={25}
                color={COLORS.BLACK}
              />
              <ScaleText style={styles.shareTxt}>Share</ScaleText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareBtnsTouch}>
              <IconX
                origin={ICON_TYPE.FONT_AWESOME}
                name={"bookmark-o"}
                size={25}
                color={COLORS.BLACK}
              />
              <ScaleText style={styles.shareTxt}>Save</ScaleText>
            </TouchableOpacity>
          </View>
          <View style={styles.sellerInfoView}>
            <ScaleText style={styles.sellerInfoTxt}>
              Seller Information
            </ScaleText>
            <View style={styles.mainContainer}>
              <View style={[CommonStyles.straightCon, { marginTop: 10 }]}>
                <Image
                  source={{ uri: productDetail?.logoimage }}
                  style={styles.considrImgVw}
                />
                <View>
                  <ScaleText style={styles.businessNameInDetailTxt}>
                    {productDetail?.business_name}
                  </ScaleText>
                </View>
              </View>
              <ScaleText style={[styles.smallTxt, { marginTop: 8 }]}>
                Joined AbbyPages in 2018
              </ScaleText>
            </View>
          </View>
          <View style={styles.sellerInfoView}>
            <Image
              source={{ uri: imagePreviewUrl }}
              style={{ width: "100%", height: 150, marginTop: 10 }}
            />
            <ScaleText
              style={[
                styles.buttonsTxt,
                {
                  marginLeft: 10,
                },
              ]}
            >
              Orlano, Florida
            </ScaleText>
          </View>
          <View style={styles.sellerInfoView}>
            <ScaleText style={styles.sellerInfoTxt}>Details</ScaleText>
            {productSpecification?.condition ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Condition</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.condition}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.brand ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Brand</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.brand}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.material ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Material</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.material}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.outdoor_table_type ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Outdoor Table Type</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.outdoor_table_type}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.shape ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Shape</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.shape}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.bracelet_style ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Bracelet style</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.bracelet_style}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.gemstone ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Gemstone</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.gemstone}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.jewellery_material ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Jewellery material</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.jewellery_material}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.juicer ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Juicer type</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.juicer}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.bed_size ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Bed Size</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.bed_size}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.bed_type ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Bed Type</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.bed_type}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.decor_style ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Decor style</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.decor_style}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.country_of_origin ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Country of origin</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.country_of_origin}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.time_period ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Time period</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.time_period}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.bicycle_wheel_size ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Bicycle wheel size</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.bicycle_wheel_size}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.bicycle_material ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Bicycle Material</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.bicycle_material}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.bicycle_type ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Bicycle type</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.bicycle_type}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.pet_type ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Pet type</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.pet_type}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.pet_size ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Pet size</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.pet_size}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.dimensions ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Dimensions</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.dimensions}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.age_range ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Age range</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.age_range}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.character ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Character</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.character}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.gender ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Gender</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.gender}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.hair_type ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Hair Type</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.hair_type}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.bags_material ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Bags Material</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.bags_material}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.luggage_material ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Luggage Material</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.luggage_material}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.coat_style ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>coat Style</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.coat_style}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.size ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Size</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.size}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.fit ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Fit</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.fit}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.compitable_mobile_phone ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>
                  Compitable mobile phone
                </ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.compitable_mobile_phone}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.watchband_material ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Watchband material</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.watchband_material}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.watchband_size ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Watchband size</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.watchband_size}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.property_for_sale_or_rent ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>
                  Property for sale or rent
                </ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.property_for_sale_or_rent}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.property_type ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Property type</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.property_type}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.property_address ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Property address</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.property_address}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.furniture ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Furniture</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.furniture}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.listed_by ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Listed by</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.listed_by}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.parking_availability ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>
                  Parking Availability
                </ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.parking_availability}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.carpet_area ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Carpet Area</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.carpet_area}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.air_conditioning ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Air Conditioning</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.air_conditioning}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.property_description ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>
                  Property description
                </ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.property_description}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.no_of_bedrooms ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>No of bedrooms</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.no_of_bedrooms}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.no_of_bathrooms ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>No of bathrooms</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.no_of_bathrooms}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.make ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Make</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.make}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.model ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>model</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.model}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.mileage ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Mileage</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.mileage}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.year ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Year</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.year}
                </ScaleText>
              </View>
            ) : null}
            {productSpecification?.colour ? (
              <View style={styles.detailView}>
                <ScaleText style={styles.keyTxt}>Colour</ScaleText>
                <ScaleText style={styles.valueTxt}>
                  {productSpecification?.colour}
                </ScaleText>
              </View>
            ) : null}
          </View>
          {productSpecification?.descriptions ? (
            <>
              <ScaleText style={styles.sellerInfoTxt}>
                Product Description
              </ScaleText>
              <View style={styles.detailView}>
                <ScaleText style={styles.descTxt}>
                  {productSpecification?.descriptions}
                  sdhubvsbivils oaibugiobrgiub ijub iujboilaub vgluvb liuvbla
                  kuivlkuiv lkiuvui
                </ScaleText>
              </View>
            </>
          ) : null}
          <View style={{ alignItems: "center", flexDirection: "row", justifyContent: 'space-around' }}>
            <AddMinusView
              // value={props.getqty(item)}
              // minVal={1}
              // onPressAdd={(val) => props.addToCart(item, val)}
              // onPressMinus={(val) => props.removeFromCart(item, val)}
              width={"80%"}
            />
            <MainButton
              buttonTxt={"Add to Cart"}
              // onPressButton={() => props.applyNowPress()}
              width={"90%"}
              borderColor={COLORS.YELLOW}
              txtColor={COLORS.WHITE}
              backgroundColor={COLORS.YELLOW}
              borderRadius={10}
              paddingHeight={9}
              paddingHorizontal={35}
            />
          </View>
          <View style={{ marginVertical: 20 }}></View>
        </View>
      </PageScroll>
    </View>
  );
};

export default MarkteplaceDetailView;
