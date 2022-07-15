import React, { useState } from 'react';
import BusinessProfile from './components/BusinessProfile';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';
import {
    View,
    Image,
    Text, TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './components/styles';
import {
    apiCall
} from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import Error from '../../../Components/Modal/error';
import Success from '../../../Components/Modal/success';
import { useFocusEffect } from '@react-navigation/native';

const BusinessProfileView = ({ navigation }) => {
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false)

    const [camerastate, setCamerastate] = useState(false)
    const [itemImage, setItemImage] = useState('')
    const [LocitemImage, setLocItemImage] = useState('')
    const [imgBaseUrl, setimgBaseUrl] = useState('')
    const [SelectImgUri, setSelectImgUri] = useState('')
    const [businessLogoId, setBusinessLogoId] = useState('')

    const [profileData, setProfileData] = useState('');
    const [sliderUrl, setSliderUrl] = useState('');

    const [portfolioData, setPortfolioData] = useState([
        {
            id: '0'
        },
        {
            id: '1'
        },
        {
            id: '2'
        },
    ])
    useFocusEffect(
        React.useCallback(() => {
            businessLogo()
            return () => businessLogo();
        }, [])
    );

    const businessLogo = async () => {
        setVisible(true)
        const { data } = await apiCall
            ('POST', ENDPOINTS.GET_USER_PROFILE);
        if (data.status === 200) {
            setProfileData(data.data)
            setLocItemImage(data.business_logo + data.data.logo)
            setVisible(false)
            setSliderUrl(data.business_image_url)
        };

    }

    const _handleportfolioData = () => {
        return (
            <View style={styles.MainFlatlistView}>
                <Image style={styles.FlatlistImge} source={require('../../../Assets/extraImages/employeeonboard.png')} />
                <Text style={styles.portfolioTextMain}>Your project name</Text>
                <Text style={styles.PortfolioPhoto}>12 Photos</Text>
            </View>
        )
    }
    const onPressAddPhoto = () => {
        navigation.navigate('PhotosVideo');
    }
    const onPressEditBtn = () => {
        alert('LP')
        navigation.navigate('BasicInformation');
    }

    const onPressSave = async (image) => {
        setVisible(true)
        try {
            let formdata = new FormData();
            formdata.append("logo", image)
            const { data } = await apiCall('POST', ENDPOINTS.ADD_BUSINESS_LOGO, formdata);
            if (data.status === 200) {
                await AsyncStorage.setItem('addBusinessLogo', JSON.stringify(data))
                setErrorMessage(data.message);
                setVisible(false);
                businessLogo();
            } else {
                setVisible(false);
                setErrorMessage(data.message);
                setVisibleErr(true);
            };
        } catch (error) {
            setErrorMessage(error);
            setVisibleErr(true);
            setVisible(false);
        };
    }

    const onPressProfileImage = () => {
        setCamerastate(true)
    }
    const onPressGallery = () => {
        setCamerastate(false)
        ImagePicker.openPicker({
        }).then(images => {
            ImagePicker.openCropper({
                path: images.path,
                freeStyleCropEnabled: true,
            }).then(image => {
                if (image.size >= 1000000) {
                    ImageResizer.createResizedImage(image.path, 800, 800, 'JPEG', 95)
                        .then(response => {
                            setItemImage(response.uri)
                            const uploadData = {
                                uri: response.uri,
                                type: image.mime,
                                name: response.name
                            }
                            setSelectImgUri()
                            onPressSave(uploadData)
                            setLocItemImage('')
                        })
                        .catch(err => {
                        });
                } else {
                    setItemImage(image.path)
                    const uploadData = {
                        uri: image.path,
                        type: image.mime,
                        name: image.path.substring(image.path.lastIndexOf('/') + 1)
                    }
                    onPressSave(uploadData)
                    setLocItemImage('')


                }
            });
        });
    }

    const onPressCamera = () => {
        setCamerastate(false)
        ImagePicker.openCamera({
            cropping: true,
            freeStyleCropEnabled: true,

        }).then(image => {
            if (image.size >= 1000000) {
                ImageResizer.createResizedImage(image.path, 800, 800, 'JPEG', 95)
                    .then(response => {
                        setItemImage(response.uri)
                        const uploadData = {
                            uri: response.uri,
                            type: image.mime,
                            name: response.name
                        }
                        onPressSave(uploadData)
                        setLocItemImage('')
                    })
                    .catch(err => {
                    });
            } else {
                setItemImage(image.path)
                const uploadData = {
                    uri: image.path,
                    type: image.mime,
                    name: image.path.substring(image.path.lastIndexOf('/') + 1)
                }
                onPressSave(uploadData)
                setLocItemImage('')
            }
        });
    }
    const photosVideos = () => {
        navigation.navigate('PhotosVideo')
    }
    const OpenigHours = () => {
        navigation.navigate('OpeningHours')
    }
    const AddEditBusinessCategoryFun = () => {
        navigation.navigate('AddEditBusinessCategory', { businessCategory: profileData.business_category })
    }
    return (
        <View style={{ flex: 1 }}>
            <BusinessProfile
                _handleportfolioData={_handleportfolioData}
                portfolioData={portfolioData}
                onPressEditBtn={onPressEditBtn}
                onPressAddPhoto={onPressAddPhoto}
                onPressProfileImage={onPressProfileImage}
                itemImage={itemImage}
                LocitemImage={LocitemImage}
                imgBaseUrl={imgBaseUrl}

                profileData={profileData}
                sliderUrl={sliderUrl}
                photosVideos={photosVideos}
                OpenigHours={OpenigHours}
                AddEditBusinessCategoryFun={AddEditBusinessCategoryFun}
            />
            {visible && <Loader state={visible} />}

            <Dialog
                dialogStyle={{
                    position: 'absolute', bottom: 0,
                    flex: 0.5,
                    width: "100%",
                    paddingBottom: 20
                }}
                visible={camerastate}
                onTouchOutside={() => setCamerastate(false)}
                onHardwareBackPress={() => setCamerastate(false)}
            >
                <Error
                    message={errorMessage}
                    visible={visibleErr}
                    closeModel={() => setVisibleErr(false)}
                />
                <Success
                    message={successMessage}
                    visible={visibleSuccess}
                    closeModel={() => ('Home', setVisibleSuccess(false))}
                />
                <DialogContent>
                    <View>
                        <TouchableOpacity
                            onPress={() => onPressCamera()}
                            style={{ padding: 10, borderBottomWidth: 1 }}>
                            <Text>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onPressGallery()}
                            style={{ padding: 10, borderBottomWidth: 1 }}>
                            <Text>Gallery</Text>
                        </TouchableOpacity>
                    </View>
                </DialogContent>
            </Dialog>
        </View>
    )
}
export default BusinessProfileView;