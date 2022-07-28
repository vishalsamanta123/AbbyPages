import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, FlatList, TextInput, ImageBackground } from 'react-native';
import CommonStyles from '../../../../Utils/CommonStyles';
import styles from './styles';
import Button from '../../../../Components/Button';
import Input from '../../../../Components/Input';
import Header from '../../../../Components/Header';
import { WHITE_COLOR_CODE } from '../../../../Utils/Constant';
const AddBusinessProductScreen = (props) => {
    return (
        <View style={CommonStyles.container}>
            <Header
                HeaderText={props.HedarType == 'Edit' ? 'Edit Product' : 'Add Product'}
                RightImg={null}
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
                <ScrollView>
                    <View style={styles.categoryvwe}>
                        <TouchableOpacity onPress={() => props.onPressCategories()}
                            style={styles.catetchvwe}>
                            <View style={styles.cetetxt}>
                                <Text style={{ fontSize: 18, }}>Category</Text>
                                {props.CategoryName ?
                                    <Text style={{ fontSize: 15, paddingLeft: 5 }}>{props.CategoryName}</Text>
                                    :
                                    null}
                            </View>
                            <View>
                                {props.businessCategory ?
                                    <Image style={styles.dropiconvwe}
                                        source={require('../../../../Assets/link_dropdown_icon_up.png')} />
                                    :
                                    <Image style={styles.dropiconvwe}
                                        source={require('../../../../Assets/link_dropdown_ico.png')} />
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
                    {props.businessCategory ?
                        <View style={{
                            marginLeft: 20,
                            borderWidth: 1,
                            height: props.CategoryData.length > 0 ? 200 : 0,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            width: '90%',
                            borderColor: '#d8d8d8',
                        }}>
                            <View style={styles.srchtxtinptvwe}>
                                <TextInput
                                    // onChangeText={(search) => props.CategorySearch(search)}
                                    autoCapitalize={'none'}
                                    style={{ fontSize: 18 }}
                                    placeholder='Search' />
                            </View>
                            <FlatList
                                nestedScrollEnabled={true}
                                data={props.CategoryData}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) =>
                                    <TouchableOpacity
                                        onPress={() => props.onClickCategory(item)}
                                        style={styles.labelStyle}>
                                        <View style={{flex: 5.5,justifyContent: "center"}}>
                                            <Text style={styles.txt}>{item.category_name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                }
                            />
                        </View>
                        :
                        null
                    }
                    <View style={styles.categoryvwe}>
                        <TouchableOpacity
                            onPress={() => props.onPressSubCategories()}
                            style={styles.catetchvwe}>
                            <View style={{ paddingLeft: 20 }}>
                                <Text style={{ fontSize: 18 }}>Sub Category</Text>
                                {props.SubCategoryName ?
                                    <Text style={{ fontSize: 15, paddingLeft: 5 }}>{props.SubCategoryName}</Text>
                                    :
                                    null}
                            </View>
                            <View>
                                {props.SubCategory ?
                                    <Image style={{ width: 25, height: 25 }}
                                        source={require('../../../../Assets/link_dropdown_icon_up.png')} />
                                    :
                                    <Image style={{ width: 25, height: 25 }}
                                        source={require('../../../../Assets/link_dropdown_ico.png')} />
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
                    {props.SubCategory ?
                        <View style={{
                            marginLeft: 20,
                            borderWidth: 1,
                            height: props.SubCategoryData.length > 0 ? 200 : 0,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            width: '90%',
                            borderColor: '#d8d8d8',
                        }}>
                            <View style={styles.srchtxtinptvwe}>
                                <TextInput
                                    // onChangeText={(search) => props.CategorySearch(search)}
                                    autoCapitalize={'none'}
                                    style={{ fontSize: 18 }}
                                    placeholder='Search' />
                            </View>
                            <FlatList
                                nestedScrollEnabled={true}
                                data={props.SubCategoryData}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) =>
                                    <TouchableOpacity
                                        onPress={() => props.onClickSubCategory(item)}
                                        style={styles.labelStyle}>
                                        <View style={{ flex: 5.5,justifyContent: "center"}}>
                                            <Text style={styles.txt}>{item.category_name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                }
                            />
                        </View>
                        :
                        null
                    }
                    {/* <View style={styles.categoryvwe}>
                        <TouchableOpacity
                            onPress={() => props.onPressBusinessCategories()}
                            style={styles.catetchvwe}>
                            <View style={{ paddingLeft: 20 }}>
                                <Text style={{ fontSize: 18 }}>Business Category</Text>
                            </View>
                            <View>
                                {props.BusiCategory ?
                                    <Image style={styles.dropiconvwe}
                                        source={require('../../../../Assets/link_dropdown_icon_up.png')} />
                                    :
                                    <Image style={styles.dropiconvwe}
                                        source={require('../../../../Assets/link_dropdown_ico.png')} />
                                }
                            </View>
                        </TouchableOpacity>
                    </View> */}
                    <Input
                        onChangeText={(productName) => props.setProductName(productName)}
                        value={props.productName}
                        secureTextEntry={false}
                        placeholder="Product Name"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(productPrice) => props.setProductPrice(productPrice)}
                        value={props.productPrice}
                        secureTextEntry={false}
                        // multiline={true}
                        placeholder="Product Price"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(productDiscount) => props.setProductDiscount(productDiscount)}
                        value={props.productDiscount}
                        secureTextEntry={false}
                        placeholder="Discount"
                        InputType="withScroll"
                    // keyboardType={'phone-pad'}
                    />
                    <Input
                        onChangeText={(productQuanlity) => props.setProductQuanlity(productQuanlity)}
                        value={props.productQuanlity}
                        secureTextEntry={false}
                        placeholder="Product Quanlity"
                        InputType="withScroll"
                    // keyboardType={'phone-pad'}
                    />
                    <Input
                        onChangeText={(productFinalPrice) => props.setProductFinalPrice(productFinalPrice)}
                        value={props.productFinalPrice}
                        secureTextEntry={false}
                        placeholder="Product Final Price"
                        InputType="withScroll"
                    // keyboardType={'phone-pad'}
                    />
                    <Input
                        onChangeText={(productDescription) => props.setProductDescription(productDescription)}
                        value={props.productDescription}
                        secureTextEntry={false}
                        placeholder="Product Description"
                        InputType="withScroll"
                    />
                    <View style={styles.selectvwe}>
                        <TouchableOpacity onPress={() => props.setModalVisible()}
                            style={styles.tchvwe}>
                            <Text style={styles.slctdtxt}>
                                {props?.selectedSize ? props?.selectedSize : "Select your size"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Input
                        onChangeText={(productColor) => props.setProductColor(productColor)}
                        value={props.productColor}
                        secureTextEntry={false}
                        placeholder="Product Color"
                        InputType="withScroll"
                    // keyboardType={'phone-pad'}
                    />
                    <Input
                        onChangeText={(productWeight) => props.setProductWeight(productWeight)}
                        value={props.productWeight}
                        secureTextEntry={false}
                        placeholder="Product Weight"
                        InputType="withScroll"
                    // keyboardType={'phone-pad'}
                    />
                    <Input
                        onChangeText={(productBrand) => props.setProductBrand(productBrand)}
                        value={props.productBrand}
                        secureTextEntry={false}
                        placeholder="Product Brand"
                        InputType="withScroll"
                    // keyboardType={'phone-pad'}
                    />
                    <TouchableOpacity onPress={() => props.onPressProfileImage()} style={styles.uploadiconvwe}>
                        <View style={styles.secimgvwe}>
                            <Text style={styles.prdctimgtxt}>Product Image</Text>
                            <Image style={styles.uploadicin}
                                source={require('../../../../Assets/upload_icon_field.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    {props.SelectImgUri ?
                        <ScrollView horizontal={true}>
                            {props.SelectImgUri.map((item, index) => {
                                return (
                                    <View style={styles.slctimguri}>
                                        <ImageBackground style={styles.ProfileImgStyle} source={{ uri: item.path }}>
                                            <View style={styles.slcttch}>
                                                <TouchableOpacity onPress={() => props.localProductImgDelete(index)} style={styles.slcttch}>
                                                    <View style={styles.xtxt}>
                                                        <Text style={styles.xtetx}>X</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                )
                            })
                            }
                        </ScrollView>
                        :
                        null}
                    {props.ProductImg ?
                        <ScrollView horizontal={true}>
                            {props.ProductImg.map((item, ind) => {
                                return (
                                    <View style={styles.prdctvwe}>
                                        <ImageBackground
                                            style={styles.ProfileImgStyle}
                                            source={{ uri: item.product_image }}>
                                            <View style={styles.slcttch}>
                                                <TouchableOpacity onPress={() => props.DeleteProductMsg(item)} style={styles.slcttch}>
                                                    <View style={styles.xtxt}>
                                                        <Text style={styles.xtetx}>X</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                )
                            })
                            }
                        </ScrollView>
                        :
                        null}
                    <Button
                        buttonText="Save"
                        onPress={props.onPressSave}
                        style={styles.savebtn}
                    />
                </ScrollView>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    props.setModalVisible(!props.modalVisible);
                }}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.centeredView}>
                    <View style={styles.alertBackground}>
                        <View style={styles.selectyoursize}>
                            <Text style={styles.sizeslct}>Select your size</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.cancelvwe}
                            underlayColor={"#F5F5F5"}
                            onPress={() => props.setModalVisible(false)}>
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
        </View>
    );
};
export default AddBusinessProductScreen;