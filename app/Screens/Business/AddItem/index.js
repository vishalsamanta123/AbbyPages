import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AddItemScreen from './components/AddItemScreen';
import CommonStyles from '../../../Utils/CommonStyles';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';

import {
    apiCall
} from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import Error from '../../../Components/Modal/error';
import Success from '../../../Components/Modal/success';
import { FONT_FAMILY_REGULAR, WHITE_COLOR_CODE } from '../../../Utils/Constant';
const AddItem = ({ route, props, navigation }) => {
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false);

    const [menuTypeVisible, setMenuTypeVisible] = useState(false);


    const CategoryId = route.params.itemData ? route.params.itemData.business_item_category_id : route.params.CategoryId
    const HedarType = route.params ? route.params.type : null
    const imgUrl = route.params ? route.params.imgUrl : null
    const itemNames = route.params.itemData ? route.params.itemData.item_name : null
    const itemDescriptions = route.params.itemData ? route.params.itemData.description : null
    const itemPrices = route.params.itemData ? route.params.itemData.price : null
    const itemDiscounts = route.params.itemData ? route.params.itemData.item_discount : null
    const itemTypes = route.params.itemData ? route.params.itemData.item_type : null
    const itemImg = route.params.itemData ? route.params.itemData.item_image : null
    const itemId = route.params.itemData ? route.params.itemData.item_id : null

    const [itemImage, setItemImage] = useState('')
    const [itemName, setItemName] = useState(itemNames)
    const [itemDescription, setItemDescription] = useState(itemDescriptions)
    const [itemPrice, setItemPrice] = useState(itemPrices)
    const [itemDiscount, setItemDiscount] = useState(itemDiscounts)
    const [SelectImgUri, setSelectImgUri] = useState('')
    const [itemType, setItemType] = useState(itemTypes)
    const [camerastate, setCamerastate] = useState(false)

    const [itemImgs, setItemImg] = useState(itemImg)
    // const [BusinessCategoryId, setBusinessCategoryId] = useState(navigation.state.params.CategoryId)
    // alert(navigation.state.params.CategoryId)

    const staticContentData = [
        {
            id: 1,
            name: "Veg"
        },
        {
            id: 2,
            name: "Non-veg"
        },
    ];
    const handleSelectedName = (item) => {
        setItemType(item.name);
        setMenuTypeVisible(false);
    }
    const renderStaticContentData = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => handleSelectedName(item)}
                style={{ flex: 1, padding: 10 }}>
                <Text style={{ fontFamily: FONT_FAMILY_REGULAR, fontSize: 15, color: WHITE_COLOR_CODE }}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        )
    }
    const onPressSave = async () => {
        const valid = validationFrom();
        if (valid) {
            setVisible(true)
            try {
                let formdata = new FormData();
                itemId ? formdata.append("item_id", itemId) : null
                formdata.append("item_name", itemName)
                formdata.append("description", itemDescription)
                formdata.append("price", itemPrice)
                formdata.append("item_discount", itemDiscount)
                formdata.append("item_type", itemType)
                formdata.append("item_image", SelectImgUri)
                formdata.append("business_type", '1')
                formdata.append("business_item_category_id", CategoryId)
                const { data } = await apiCall ('POST', ENDPOINTS.ADD_ITEMS, formdata);
                if (data.status === 200) {
                    navigation.navigate('MyRestaurantItem')
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
    }

    function validationFrom() {
        if (itemName == undefined) {
            setErrorMessage('Please enter item name');
            setVisibleErr(true)
            return false;
        }
        if (itemDescription == undefined) {
            setErrorMessage('Please enter item decription');
            setVisibleErr(true);
            return false;
        }
        if (itemPrice == undefined) {
            setErrorMessage('Please enter item price');
            setVisibleErr(true);
            return false;
        }
        if (itemDiscount == undefined) {
            setErrorMessage('Please enter item discount');
            setVisibleErr(true);
            return false;
        }
        if (itemType == undefined) {
            setErrorMessage('Please select item type');
            setVisibleErr(true);
            return false;
        }
        if (itemImgs == null) {
            if (SelectImgUri == '') {
                setErrorMessage('Please select item image');
                setVisibleErr(true);
                return false;
            }
        }
        return true;
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
                            setSelectImgUri(uploadData)
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
                    setSelectImgUri(uploadData)

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
                        setSelectImgUri(uploadData)

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
                setSelectImgUri(uploadData)

            }
        });
    }
    const localProductImgDelete = () => {
        setSelectImgUri('')
    }
    return (
        <View style={CommonStyles.container}>
            {visible && <Loader state={visible} />}
            <AddItemScreen
                itemImage={itemImage}
                itemName={itemName}
                setItemName={setItemName}
                itemDescription={itemDescription}
                setItemDescription={setItemDescription}
                itemPrice={itemPrice}
                setItemPrice={setItemPrice}
                itemDiscount={itemDiscount}
                setItemDiscount={setItemDiscount}
                itemType={itemType}
                setItemType={setItemType}
                onPressSave={onPressSave}
                onPressProfileImage={onPressProfileImage}
                
                menuTypeVisible={menuTypeVisible}
                setMenuTypeVisible={setMenuTypeVisible}

                HedarType={HedarType}
                itemImg={itemImg}
                imgUrl={imgUrl}
                localProductImgDelete={localProductImgDelete}
                staticContentData={staticContentData}
                renderStaticContentData={renderStaticContentData}
            />
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
export default AddItem;