import React, { useState, Fragment, useEffect } from 'react';
import ServiceProviderDetailsScreen from './components/ServiceProviderDetailsScreen';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './components/styles';
import moment from 'moment';
import {
    WHITE_COLOR_CODE,
    FONT_FAMILY_REGULAR,
    LIGHT_GREEN_COLOR_CODE,
    LIGHT_GREY_COLOR_CODE,
    YELLOW_COLOR_CODE,
    BLACK_COLOR_CODE,
} from '../../Utils/Constant';
import CommonStyles from '../../Utils/CommonStyles';
import { apiCall } from '../../Utils/httpClient';
import ENDPOINTS from '../../Utils/apiEndPoints';
import Loader from '../../Utils/Loader';
import Success from '../../Components/Modal/success';
import Error from '../../Components/Modal/error';
const ServiceProviderDetails = ({ navigation, route }) => {
    const [businessReviewRating, setBusinessReviewRating] = useState(3);
    const [reviewModal, setReviewModal] = useState(false)

    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false);
    const [reviewData, setReviewData] = useState({
        description: "",
        title: "",
        business_rating: "",
        business_type: 3,
        business_id: '',
    });
    const [serviceDetail, setServiceDetail] = useState('');
    const [handleOptions, setHandleOptions] = useState([
        {
            id: "1",
            OptionsName: 'Highlights from the Business'
        },
        {
            id: "2",
            OptionsName: 'Photos'
        }
    ]);
    useEffect(() => {
        if (route.params) {
            const { detail } = route.params
            setServiceDetail(detail);//state
            handleServiceDetails(detail);//function
        };
    }, []);
    const handleServiceDetails = async (data) => {
        setVisible(true);
        const params = {
            business_type: 3,
            business_id: data.business_id
        };
        try {
            const { data } = await apiCall
                ('POST', ENDPOINTS.BUSINESS_DETAILS, params);
            if (data.status === 200) {
                setServiceDetail(data.data);
                setVisible(false);
            } else {
                setErrorMessage(data.message);
                setVisibleErr(true);
                setVisible(false);
            }
        } catch (error) {
            setVisibleErr(true);
            setErrorMessage(error);
        };
    };
    const handlePhotos = (item, index) => {
        return (
            <View key={index}>
                <View style={{ paddingRight: 10, paddingTop: 10, }} >
                    <Image style={{ width: 125, height: 135, borderRadius: 10 }} source={{ uri: item.image }} />
                    <View >
                        <Text >{item.userDescription}</Text>
                    </View>
                </View>
            </View>
        )
    };
    const _handleOptions = (item) => {
        return (
            <View style={styles.highlighsvwe}>
                <Text style={styles.highlightxt}>{item.OptionsName} </Text>
            </View >
        )
    };
    const _handleReview = (item, index) => {
        return (
            <View style={{
                borderBottomWidth: 0.5,
                paddingBottom: 20,
                borderBottomColor: "#dadada"
            }}>
                <View style={{
                    flex: 4.5,
                    paddingBottom: 15,
                    paddingTop: 15,

                    flexDirection: 'row',

                }}>
                    {item.profile_image ?
                        <Image style={{
                            width: 75, height: 75,
                            borderRadius: 50
                        }}
                            source={{ uri: item.profile_image }} />
                        :
                        <Image
                            style={{
                                width: 75, height: 75,
                                borderRadius: 50
                            }}
                            source={require('../../Assets/extraImages/salooonimg.jpg')} />
                    }
                    <View style={{ paddingLeft: 10 }}>
                        <View style={{ width: '75%' }}>
                            <Text style={{
                                fontSize: 16, color: BLACK_COLOR_CODE,
                                fontFamily: FONT_FAMILY_REGULAR
                            }}>{item.title}</Text>
                        </View>
                        <Text style={{
                            fontSize: 13, color: LIGHT_GREY_COLOR_CODE,
                            fontFamily: FONT_FAMILY_REGULAR
                        }} >
                            by <Text style={{
                                fontSize: 13, color: YELLOW_COLOR_CODE,
                                fontFamily: FONT_FAMILY_REGULAR
                            }}>{item.first_name + item.last_name}</Text>  | {moment(item.create_date).endOf('day').fromNow()} </Text>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{
                                backgroundColor: LIGHT_GREEN_COLOR_CODE,
                                width: 38,
                                height: 23,
                                borderRadius: 3,
                            }}>
                                <Text style={{
                                    color: WHITE_COLOR_CODE, textAlign: 'center', fontFamily: FONT_FAMILY_REGULAR,
                                }}>
                                    {
                                        item.business_rating
                                    }
                                </Text>
                            </View>
                            <Text style={{ color: LIGHT_GREY_COLOR_CODE }}>
                                {item.business_rating == 0 && 'No Rating Yet'}
                                {item.business_rating == 1 && 'Bad'}
                                {item.business_rating == 2 && 'Ok'}
                                {item.business_rating == 3 && 'Good'}
                                {item.business_rating == 4 && 'Very Good'}
                                {item.business_rating == 5 && 'Excellent'} </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{
                        fontFamily: FONT_FAMILY_REGULAR, lineHeight: 18,
                        color: LIGHT_GREY_COLOR_CODE, fontSize: 12
                    }}>
                        {item.description}
                    </Text>
                </View>
            </View>
        )
    };
    function validationFormReview() {
        if (reviewData.title == "") {
            setErrorMessage('Please enter title');
            setVisibleErr(true);
            return false;
        } if (businessReviewRating == "") {
            setErrorMessage('Please Select Rating');
            setVisibleErr(true);
            return false;
        } if (reviewData.description == '') {
            setErrorMessage('Please enter description');
            setVisibleErr(true);
            return false;
        };
        return true;
    };
    const onSubmitReviewData = async () => {
        const valid = validationFormReview();
        if (valid) {
            setVisible(true);
            const params = reviewData;
            params.business_rating = businessReviewRating;
            params.business_id = serviceDetail.business_id;
            try {
                const { data } = await apiCall
                    ('POST', ENDPOINTS.POST_REVIEW, params);
                if (data.status === 200) {
                    setVisible(false);
                    handleServiceDetails(serviceDetail);
                    setReviewModal(false);
                } else {
                    setErrorMessage(data.message);
                    setVisibleErr(true);
                    setVisible(false);
                }
            } catch (error) {
                setVisibleErr(true);
                setErrorMessage(error);
            };
        };
    };
    const onPressQuotes = () => {
        navigation.navigate('StepOne', { serviceDetail: serviceDetail })
    };
    function handleGetDirections(lattitude, longitude) {
        if (Platform.OS === 'android') {
            Linking.canOpenURL('http://maps.google.com/maps?daddr=' + lattitude + ',' + longitude + '').then(supported => {
                if (supported) {
                    Linking.openURL('http://maps.google.com/maps?daddr=' + lattitude + ',' + longitude + '');
                } else {
                    console.log('Don\'t know how to go');
                }
            }).catch(err => console.error('An error occurred', err));
        } else {
            Linking.canOpenURL('http://maps.apple.com/maps?daddr=' + lattitude + ',' + longitude + '').then(supported => {
                if (supported) {
                    Linking.openURL('http://maps.apple.com/maps?daddr=' + lattitude + ',' + longitude + '');
                } else {
                    console.log('Don\'t know how to go');
                }
            }).catch(err => console.error('An error occurred', err));
        }
    };
    return (
        <View style={CommonStyles.container}>
            {visible && <Loader state={visible} />}
            <ServiceProviderDetailsScreen
                setBusinessReviewRating={setBusinessReviewRating}
                reviewModal={reviewModal}
                setReviewModal={setReviewModal}
                reviewData={reviewData}
                setReviewData={setReviewData}
                onSubmitReviewData={onSubmitReviewData}
                serviceDetail={serviceDetail}
                handleGetDirections={handleGetDirections}

                handlePhotos={(item, index) => handlePhotos(item, index)}
                _handleOptions={_handleOptions}
                handleOptions={handleOptions}
                onPressQuotes={onPressQuotes}
                _handleReview={_handleReview}

            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => setVisibleSuccess(false)}
            />
        </View>
    );
};
export default ServiceProviderDetails;