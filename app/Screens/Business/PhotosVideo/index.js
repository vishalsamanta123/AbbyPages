import React, { useState } from 'react';
import PhotosVideoScreen from './components/PhotosVideoScreen';
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
    apiCall, setDefaultHeader
} from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import Error from '../../../Components/Modal/error';
import Success from '../../../Components/Modal/success';
const PhotosVideo = ({ navigation }) => {
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false)

    const [itemImage, setItemImage] = useState('')
    const [camerastate, setCamerastate] = useState(false)
    const onPressToPreview = () => {
        navigation.navigate('AddTextPreview')
    }

    const onPressProfileImage = () => {
        setCamerastate(true)
    }


    const onPressSave = async (image) => {
        setVisible(true)
        try {
            let formdata = new FormData();
            image.map((image) => {
                var filename = image.path.substring(image.path.lastIndexOf('/') + 1);
                return (
                    formdata.append("image", {
                        uri: image.path,
                        type: image.mime,
                        name: filename
                    })
                )
            })
            formdata.append("business_type", 1)
            const { data } = await apiCall
                ('POST', ENDPOINTS.ADD_PHOTO_VIDEO, formdata, { 'Content-Type': 'multipart/form-data' });
            if (data.status === 200) {
                navigation.goBack(null)
                setErrorMessage(data.message);
                setVisible(false);
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

    const onPressGallery = () => {
        setCamerastate(false)
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            onPressSave(images)
            // ImagePicker.openCropper({
            //     path: images.path,
            //     freeStyleCropEnabled: true,
            // }).then(image => {
            //     if (image.size >= 1000000) {
            //         ImageResizer.createResizedImage(image.path, 800, 800, 'JPEG', 95)
            //             .then(response => {
            //                 setItemImage(response.uri)
            //                 const uploadData = {
            //                     uri: response.uri,
            //                     type: image.mime,
            //                     name: response.name
            //                 }
            //                 // setSelectImgUri()
            //                 onPressSave(uploadData)
            //                 // setLocItemImage('')
            //             })
            //             .catch(err => {
            //             });
            //     } else {
            //         setItemImage(image.path)
            //         const uploadData = {
            //             uri: image.path,
            //             type: image.mime,
            //             name: image.path.substring(image.path.lastIndexOf('/') + 1)
            //         }

            //         onPressSave(uploadData)
            //         // setLocItemImage('')


            //     }
            // });
        });
    }

    const onPressCamera = () => {
        setCamerastate(false)
        ImagePicker.openCamera({
            cropping: true,
            freeStyleCropEnabled: true,

        }).then(image => {
            // onPressSave(image)
            if (image.size >= 1000000) {
                ImageResizer.createResizedImage(image.path, 800, 800, 'JPEG', 95)
                    .then(response => {
                        setItemImage(response.uri)
                        const uploadData = [{
                            path: response.uri,
                            mime: image.mime,
                            name: response.name
                        }]
                        onPressSave(uploadData)
                        // setLocItemImage('')
                    })
                    .catch(err => {
                    });
            } else {
                setItemImage(image.path)
                const uploadData = [{
                    path: image.path,
                    mime: image.mime,
                    name: image.path.substring(image.path.lastIndexOf('/') + 1)
                }]
                onPressSave(uploadData)
                // setLocItemImage('')
            }
        });
    }














    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <PhotosVideoScreen
                onPressToPreview={onPressToPreview}
                onPressProfileImage={onPressProfileImage}
                itemImage={itemImage}
            />
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
                            <Text>
                                Camera
                       </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onPressGallery()}
                            style={{ padding: 10, borderBottomWidth: 1 }}>
                            <Text>
                                Gallery
                     </Text>
                        </TouchableOpacity>
                    </View>
                </DialogContent>
            </Dialog>
        </View>
    )
}
export default PhotosVideo;