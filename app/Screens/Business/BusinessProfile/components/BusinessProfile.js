import React, { useRef } from 'react';
import {
    View,
    Image,
    StatusBar,
    Text,
    KeyboardAvoidingView,
    FlatList, TouchableOpacity, ScrollView, Animated, useWindowDimensions
} from 'react-native';
import styles from './styles';
import Header from '../../../../Components/Header';
import Button from '../../../../Components/Button';
import CommonStyles from '../../../../Utils/CommonStyles';
import { YELLOW_COLOR_CODE } from '../../../../Utils/Constant';
const BusinessInformation = (props) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();
    let stars = [];
    for (var i = 1; i <= 5; i++) {
        let path = <Image key={i} source={require('../../../../Assets/star_icon_filled.png')} />;
        if (i > props.profileData.rating) {
            path = <Image key={i} source={require('../../../../Assets/star_icon_text.png')} />
        }
        stars.push(path);
    }
    return (
        <KeyboardAvoidingView style={CommonStyles.container}>
            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle='dark-content'
            />
            <Header
                RightImg={null}
                HeaderText={'Business Info'}
                leftImg={require('../../../../Assets/hamburger_icon.png')}
                type="Drawer"
            />
            <View style={CommonStyles.body}>
                <ScrollView>
                    <View style={styles.ImageContainer}>
                        <ScrollView
                            horizontal={true}
                            style={styles.scrollViewStyle}
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onScroll={Animated.event([
                                {
                                    nativeEvent: {
                                        contentOffset: {
                                            x: scrollX
                                        }
                                    }
                                }
                            ])}
                            scrollEventThrottle={1}>
                            {props?.profileData ? props?.profileData?.business_imgae?.map((item, imageIndex) => {
                                return (
                                    <View style={{ width: windowWidth, height: '100%' }}
                                        key={imageIndex}>
                                        <Image style={styles.PosterImgeStyle}
                                            source={{ uri: props.sliderUrl + item.image }}
                                            resizeMode='stretch'
                                        />
                                    </View>
                                );
                            })
                                :
                                <Image style={styles.PosterImgeStyle}
                                    source={require('../../../../Assets/extraImages/blackBuild.png')}
                                />
                            }
                        </ScrollView>
                        <View style={styles.bussinessimg}>
                            {props?.profileData ? props?.profileData?.business_imgae?.map((image, imageIndex) => {
                                const width = scrollX.interpolate({
                                    inputRange: [
                                        windowWidth * (imageIndex - 1),
                                        windowWidth * imageIndex,
                                        windowWidth * (imageIndex + 1)
                                    ],
                                    outputRange: [8, 16, 8],
                                    extrapolate: "clamp"
                                });
                                return (
                                    <Animated.View key={imageIndex}
                                        style={[styles.normalDot, { width }]}
                                    />
                                );
                            })
                                :
                                null
                            }
                        </View>
                        <View style={styles.comnvwe}>
                            <TouchableOpacity onPress={() => props.onPressProfileImage()}
                                style={styles.UserProfileImage}>
                                {props.LocitemImage ?
                                    <Image
                                        style={styles.ProfileIMG} borderRadius={50}
                                        source={{ uri: props.imgBaseUrl + props.LocitemImage }} />
                                    :
                                    props.itemImage ?
                                        <Image
                                            style={styles.ProfileIMG} borderRadius={50}
                                            source={{ uri: props.itemImage }} />
                                        :
                                        <Image
                                            style={styles.ProfileIMG} borderRadius={50}
                                            source={require('../../../../Assets/company_default_photo.png')} />
                                }
                                <TouchableOpacity onPress={() => props.onPressProfileImage()} style={styles.camiconvwe}>
                                    <View style={styles.camsecvwe}>
                                        <Image style={styles.camimg} source={require('../../../../Assets/camera_icon_list.png')} />
                                    </View>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.BuildingImge}>
                        </View>
                        <View style={styles.ViewContain}>
                            <Text style={styles.UserNameText}>{props.profileData.business_name}</Text>
                            <View style={styles.StarViewContain}>
                                <Text style={{ fontSize: 20 }}>{stars}</Text>
                            </View>
                            <View style={styles.FollowersCountView}>
                                <View style={styles.EditBtnView}>
                                    <TouchableOpacity onPress={() => props.onPressEditBtn()}>
                                        <Text style={styles.LastUpdateTxt}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.EditBtnView}>
                                    <TouchableOpacity onPress={() => props.onPressAddPhoto()}>
                                        <Text style={styles.LastUpdateTxt}>Add Photos</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.FollowersCountView, { paddingTop: 20 }]}>
                                <View style={styles.OptionViewContain}>
                                    <TouchableOpacity style={styles.ImageView}>
                                        <Image style={styles.notificationicon} source={require('../../../../Assets/notification_icon.png')} />
                                    </TouchableOpacity>
                                    <Text style={styles.OptionText}>Notifications</Text>
                                </View>
                                <View style={styles.OptionViewContain}>
                                    <TouchableOpacity style={styles.ImageView}>
                                        <Image source={require('../../../../Assets/company_reviews_icon.png')} />
                                    </TouchableOpacity>
                                    <Text style={styles.OptionText}>See reviews</Text>
                                </View>
                                <View style={styles.OptionViewContain}>
                                    <TouchableOpacity style={styles.ImageView}>
                                        <Image source={require('../../../../Assets/company_consumer_icon.png')} />
                                    </TouchableOpacity>
                                    <Text style={styles.OptionText}>View as consumer</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.BookMarkContainer, { paddingBottom: 20 }]}>
                        <Text style={styles.MainContainText}>Updates during Coronavirus</Text>
                        <View style={styles.ViewContainer}>
                            <Image source={require('../../../../Assets/st_icon_5.png')} />
                            <View style={styles.ViewParagrapgh}>
                                <Text style={styles.ParagrapghTextMain}>
                                    Give you custorners up-to-date information arabout
                                    your hours, services, and any new updates about your business
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.YellowText}>
                                        Go to COVID-19 updates
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Button buttonText="Edit" style={{ width: "100%" }} />
                    </View>
                    <View style={styles.BookMarkContainer}>
                        <Text style={styles.MainContainText}>Categories & Services</Text>
                        <Text style={styles.CategoriesDcptnText}>
                            Customers use this information to find your business on
                            AbbyPages and request your services
                        </Text>
                        {props.profileData ?
                            props.profileData.business_category.map((item) => {
                                return (
                                    <Text style={styles.CategoryText}>{item.category_name}</Text>
                                )
                            })
                            :
                            null
                        }
                        <View style={styles.ViewContainer}>
                            <Image source={require('../../../../Assets/st_icon_6.png')} />
                            <View style={styles.ViewParagrapgh}>
                                <Text style={styles.ParagrapghTextMain}>
                                    What services do you offer? This helps you attract the right customers, as your business will
                                    only show up in searches for services you provide
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.YellowText}>Go to COVID-19 updates</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Button
                            buttonText="Edit"
                            style={{ width: "100%" }}
                            onPress={() => props.AddEditBusinessCategoryFun()}
                        />
                    </View>
                    <View style={[styles.BookMarkContainer, { paddingBottom: 20 }]}>
                        <Text style={styles.MainContainText}>Amenities and more</Text>
                        <View style={styles.ViewContainer}>
                            <Image source={require('../../../../Assets/st_icon_7.png')} />
                            <View style={styles.ViewParagrapgh}>
                                <Text style={styles.ParagrapghTextMain}>
                                    What are the notable festures of your business?
                                    This info can differentiate
                                    you from similar businesses
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.YellowText}>Add info</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Button buttonText="Edit" style={{ width: "100%" }} />
                    </View>
                    <View style={[styles.BookMarkContainer, { paddingBottom: 20 }]}>
                        <Text style={styles.MainContainText}>Hours of operation</Text>
                        <View style={styles.ViewContainer}>
                            <Image source={require('../../../../Assets/st_icon_8.png')} />
                            <View style={styles.ViewParagrapgh}>
                                <Text style={styles.ParagrapghTextMain}>
                                    Let yours customers know when they can stop by or give you a call.
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.YellowText}>Add info</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Button buttonText="Edit" style={{ width: "100%" }} />
                    </View>
                    <View style={[styles.BookMarkContainer, { paddingBottom: 20 }]}>
                        <Text style={styles.MainContainText}>Upcoming special hours</Text>
                        <View style={styles.ViewContainer}>
                            <Image source={require('../../../../Assets/st_icon_9.png')} />
                            <View style={styles.ViewParagrapgh}>
                                <Text style={styles.ParagrapghTextMain}>
                                    What are your holiday hours? Let your customers know about special
                                    hours and clousers.
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.YellowText}>Add special hours</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Button buttonText="Edit" style={{ width: "100%" }} onPress={() => props.OpenigHours()} />
                    </View>
                    <View style={[styles.BookMarkContainer, { paddingBottom: 0 }]}>
                        <Text style={styles.MainContainText}>From this business</Text>
                        <View style={styles.ViewContainer}>
                            <Image source={require('../../../../Assets/st_icon_10.png')} />
                            <View style={styles.ViewParagrapgh}>
                                <Text style={styles.ParagrapghTextMain}>
                                    What are your holiday hours? Let your customers know about special
                                    hours and clousers.
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.YellowText}>Add specialities</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../../Assets/st_icon_11.png')} />
                            <View style={styles.ViewParagrapgh}>
                                <Text style={styles.ParagrapghTextMain}>
                                    What are your holiday hours? Let your customers know about special
                                    hours and clousers.
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.YellowText}>Add history</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../../Assets/st_icon_12.png')} />
                            <View style={styles.ViewParagrapgh}>
                                <Text style={styles.ParagrapghTextMain}>
                                    What are your holiday hours? Let your customers know about special
                                    hours and clousers.
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.YellowText}>Add intro</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.BookMarkContainer, { paddingBottom: 20 }]}>
                        <Text style={styles.MainContainText}>Photos and Videos</Text>
                        <View style={styles.ViewContainer}>
                            <Image source={require('../../../../Assets/st_icon_13.png')} />
                            <View style={styles.ViewParagrapgh}>
                                <Text style={styles.ParagrapghTextMain}>
                                    Photos are one of the biggest factors consumers use
                                    to evaluate a business. Make sure your photos show your
                                    business at its best.
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.YellowText}>Add photos and videos</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Button buttonText="Edit" style={{ width: "100%" }} onPress={() => props.photosVideos()} />
                    </View>
                    <View style={[styles.BookMarkContainer, { paddingBottom: 20 }]}>
                        <Text style={styles.MainContainText}>Slideshow</Text>
                        <View style={styles.ViewContainer}>
                            <Image source={require('../../../../Assets/st_icon_14.png')} />
                            <View style={styles.ViewParagrapgh}>
                                <Text style={styles.ParagrapghTextMain}>
                                    Make a great first impression by controlling the order of your photos
                                    and videos to leat with your best.
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.YellowText}>Learn More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Button buttonText="$" style={{ width: "100%" }} />
                    </View>
                    <View style={[styles.BookMarkContainer, { paddingBottom: 20 }]}>
                        <Text style={styles.MainContainText}>Portfolio</Text>
                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            data={props.portfolioData}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            renderItem={({ item, index }) => props._handleportfolioData(item, index)
                            }
                        />
                        <View>
                            <Text style={styles.ParagrapghTextMain}>
                                Impress potential customers and establish your
                                expertise by showcasing your workm with your own
                                workds and pictures.
                            </Text>
                            <TouchableOpacity>
                                <Text style={styles.YellowText}>Learn More</Text>
                            </TouchableOpacity>
                            <Button buttonText="$" style={{ width: "100%" }} />
                        </View>
                    </View>
                    <View style={[styles.BookMarkContainer, { paddingBottom: 20 }]}>
                        <Text style={styles.MainContainText}>Call to Action</Text>
                        <View style={styles.ViewContainer}>
                            <Image source={require('../../../../Assets/st_icon_15.png')} />
                            <View style={styles.ViewParagrapgh}>
                                <Text style={styles.ParagrapghTextMain}>
                                    Take customers where you want them to go and make it easy to connect
                                    with you in a way that aligns with your goals.
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.YellowText}>Learn More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: '80%' }}>
                                <Button buttonText="Buy Now" />
                            </View>
                            <View style={{ width: '20%' }}>
                                <Button buttonText="$" />
                            </View>
                        </View>
                    </View>
                    <View style={styles.BookMarkContainer}>
                        <Text style={styles.MainContainText}>Business Highlights</Text>
                        <Text style={styles.BusinessHighlight}>24/7 Availability</Text>
                        {props.profileData ? props.profileData.changing_tables == 1 ?
                            < Text style={styles.BusinessHighlight}>Has Tv</Text>
                            : null : null}
                        {props.profileData ? props.profileData.alcohol == 1 ?
                            < Text style={styles.BusinessHighlight}>Beer & Wine Only</Text>
                            : props.profileData.alcohol == 2 ?
                                < Text style={styles.BusinessHighlight}>Full Bar</Text>
                                :
                                null :
                            null
                        }
                        {props.profileData ? props.profileData.offers_delivery == 1 ?
                            <Text style={styles.BusinessHighlight}>Offer Delivery</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.service_area == 1 ?
                            <Text style={styles.BusinessHighlight}>Service Area</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.accept_credit_card == 1 ?
                            <Text style={styles.BusinessHighlight}>Accept Credit Cards</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.takes_reservations == 1 ?
                            <Text style={styles.BusinessHighlight}>Takes Reservations</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.caters == 1 ?
                            <Text style={styles.BusinessHighlight}>Caters</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.wi_fi == 1 ?
                            <Text style={styles.BusinessHighlight}>Wifi</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.offers_military_discount == 1 ?
                            <Text style={styles.BusinessHighlight}>Offers Military Discount</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.good_for_happy_hour == 1 ?
                            <Text style={styles.BusinessHighlight}>Good For Happy Hour</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.wheelchair_accessible == 1 ?
                            <Text style={styles.BusinessHighlight}>Wheelchair Accessible</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.dogs_allowed == 1 ?
                            <Text style={styles.BusinessHighlight}>Dogs Allowed</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.accept_cryptocurrency == 1 ?
                            <Text style={styles.BusinessHighlight}>Accept Cryptocurrency</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.outdoor_seating == 1 ?
                            <Text style={styles.BusinessHighlight}>Outdoor Seating</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.gender_neutral_restrooms == 1 ?
                            <Text style={styles.BusinessHighlight}>Gender Neutral Restrooms</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.bike_parking == 1 ?
                            <Text style={styles.BusinessHighlight}>Bike Parking</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.offers_takeout == 1 ?
                            <Text style={styles.BusinessHighlight}>Offers Takeout</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.open_to_all == 1 ?
                            <Text style={styles.BusinessHighlight}>Open To Call</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.waiter_service == 1 ?
                            <Text style={styles.BusinessHighlight}>Waiter Service</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.sitdown_dining == 1 ?
                            <Text style={styles.BusinessHighlight}>Sitdown Dining</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.vegan_options == 1 ?
                            <Text style={styles.BusinessHighlight}>Vegan Options</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.staff_wears_gloves == 1 ?
                            <Text style={styles.BusinessHighlight}>Staff Wears Gloves</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.lactation_room == 1 ?
                            <Text style={styles.BusinessHighlight}>Lactation Room</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.happy_hour_specials == 1 ?
                            <Text style={styles.BusinessHighlight}>Happy Hour Specials</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.masks_required == 1 ?
                            <Text style={styles.BusinessHighlight}>Masks Required</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.contactless_payments == 1 ?
                            <Text style={styles.BusinessHighlight}>Contactless Payments</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.high_chairs == 1 ?
                            <Text style={styles.BusinessHighlight}>High Chairs</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.changing_tables == 1 ?
                            <Text style={styles.BusinessHighlight}>Changing Tables</Text>
                            : null : null
                        }
                        {props.profileData ? props.profileData.black_owned == 1 ?
                            <Text style={styles.BusinessHighlight}>Black Owned</Text>
                            : null : null
                        }
                        <View style={styles.ViewContainer}>
                            <View>
                                <Text style={styles.ParagrapghTextMain}>
                                    Stand out when customers are looking for businesses
                                    like yours. Choose from 30+ badges to highlight what makes
                                    you unique.
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.YellowText}>Learn More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView >
    )
}
export default BusinessInformation
