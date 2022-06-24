import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Picker, ImageBackground } from 'react-native';
import CommonStyles from '../../../../Utils/CommonStyles';
import styles from './styles';
import Button from '../../../../Components/Button';
import Input from '../../../../Components/Input';
import Header from '../../../../Components/Header';
import { WHITE_COLOR_CODE } from '../../../../Utils/Constant';
const AddItemScreen = (props) => {
    return (
        <View style={CommonStyles.container}>
            <Header
                HeaderText={props.HedarType == 'Edit' ? 'Edit Item' : 'Add Item'}
                RightImg={null}
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
                <ScrollView>

                    <Input
                        onChangeText={(itemName) => props.setItemName(itemName)}
                        value={props.itemName}
                        secureTextEntry={false}
                        placeholder="Item Name"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(itemDescription) => props.setItemDescription(itemDescription)}
                        value={props.itemDescription}
                        secureTextEntry={false}
                        // multiline={true}
                        placeholder="Item Description"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(itemPrice) => props.setItemPrice(itemPrice)}
                        value={props.itemPrice}
                        secureTextEntry={false}
                        placeholder="Item Price"
                        InputType="withScroll"
                        keyboardType={'phone-pad'}
                    />
                    <Input
                        onChangeText={(itemDiscount) => props.setItemDiscount(itemDiscount)}
                        value={props.itemDiscount}
                        secureTextEntry={false}
                        placeholder="Item Discount"
                        InputType="withScroll"
                        keyboardType={'phone-pad'}
                    />
                    <View style={{ marginTop: 8, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ paddingTop: 8, paddingLeft: 15, height: 70, borderRadius: 10, borderWidth: 1, borderColor: '#d8d8d8', width: '90%', }}>
                            <Picker style={styles.pickerStyle}
                                selectedValue={props.itemType}
                                onValueChange={(itemValue, itemPosition) =>
                                    props.setItemType(itemValue)}>
                                <Picker.Item label="Item Type" value="" />
                                <Picker.Item label="Veg" value="1" />
                                <Picker.Item label="Non-Veg" value="0" />
                            </Picker>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => props.onPressProfileImage()} style={{ marginTop: 15, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 70, borderRadius: 10, borderWidth: 1, borderColor: '#d8d8d8', width: '90%', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ paddingLeft: 25, fontSize: 17 }}>Item Image</Text>
                            <Image
                                style={{ position: "absolute", right: 30, }}
                                source={require('../../../../Assets/upload_icon_field.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    {
                        props.itemImage ?
                            <View style={{ paddingLeft: 25, paddingTop: 8 }}>
                                <Image
                                    style={styles.ProfileImgStyle}
                                    resizeMode='contain'
                                    source={{ uri: props.itemImage }}
                                />
                            </View>
                            :
                            <View style={{ paddingLeft: 25, paddingTop: 8 }}>
                                {props.itemImg ?
                                    <Image
                                        style={styles.ProfileImgStyle}
                                        resizeMode='contain'
                                        source={{ uri: props.imgUrl + props.itemImg }}
                                    />
                                    :
                                    null
                                }
                            </View>
                    }
                    {/* {
                        props.itemImage ?
                            <View style={{ padding: 5, paddingLeft: 20, marginTop: 5 }}>
                                <ImageBackground
                                    style={styles.ProfileImgStyle}
                                    source={{ uri: props.itemImage }}
                                >
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                                        <TouchableOpacity onPress={() => props.localProductImgDelete()} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ height: 25, width: 25, backgroundColor: 'red', borderRadius: 15, }}>
                                                <Text style={{ paddingTop: 3, paddingLeft: 8, color: '#fff' }}>X</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                </ImageBackground>
                            </View>
                            :
                            <View style={{ padding: 5, paddingLeft: 20, marginTop: 5 }}>
                                {props.itemImg ?
                                    <ImageBackground
                                        style={styles.ProfileImgStyle}
                                        source={{ uri: props.imgUrl + props.itemImg }}
                                    >
                                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                                            <TouchableOpacity onPress={() => props.localProductImgDelete()} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <View style={{ height: 25, width: 25, backgroundColor: 'red', borderRadius: 15, }}>
                                                    <Text style={{ paddingTop: 3, paddingLeft: 8, color: '#fff' }}>X</Text>
                                                </View>
                                            </TouchableOpacity>

                                        </View>
                                    </ImageBackground>
                                    :
                                    null
                                }
                            </View>
                    } */}
                    <Button
                        buttonText="Save"
                        onPress={props.onPressSave}
                        style={{ marginBottom: 15, marginTop: 10 }}
                    />
                </ScrollView>
            </View>
        </View>
    );
};
export default AddItemScreen;