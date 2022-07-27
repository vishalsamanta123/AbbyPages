import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, FlatList } from 'react-native';
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
                      <View style={styles.selectvwe}>
                        <TouchableOpacity onPress={() => props.setMenuTypeVisible()}
                            style={styles.tchvwe}>
                            <Text style={styles.slctdtxt}>
                                {props?.itemType ? props?.itemType : "Item Type I have Added"}
                            </Text>
                        </TouchableOpacity>
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
            </View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.menuTypeVisible}
                onRequestClose={() => {
                    props.setMenuTypeVisible(!props.menuTypeVisible);
                }}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.centeredView}>
                    <View style={styles.alertBackground}>
                        <View style={styles.selectyoursize}>
                            <Text style={styles.sizeslct}>Select your dish type</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.cancelvwe}
                            underlayColor={"#F5F5F5"}
                            onPress={() => props.setMenuTypeVisible(false)}>
                            <Image style={styles.closeicon}
                                source={require('../../../../Assets/cancelModalBtn.png')}
                            />
                        </TouchableOpacity>
                        <FlatList
                            data={props.staticContentData}
                            renderItem={(item) => props.renderStaticContentData(item)}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View >
    );
};
export default AddItemScreen;