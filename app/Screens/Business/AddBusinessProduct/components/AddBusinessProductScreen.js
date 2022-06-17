import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Picker, FlatList, TextInput, ImageBackground } from 'react-native';
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
                // HeaderText='Add Product'
                RightImg={null}
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
                <ScrollView>
                    <View style={{ height: 70, marginTop: 15, borderColor: '#d8d8d8', borderWidth: 1, marginLeft: 15, marginRight: 15, borderRadius: 8 }}>
                        <TouchableOpacity
                            onPress={() => props.onPressCategories()}
                            style={{ justifyContent: 'space-between', paddingRight: 10, flexDirection: 'row', height: 70, alignItems: 'center' }}>
                            <View style={{ paddingLeft: 20 }}>
                                <Text style={{ fontSize: 18, }}>Category</Text>
                                {props.CategoryName ?
                                    <Text style={{ fontSize: 15, paddingLeft: 5 }}>{props.CategoryName}</Text>
                                    :
                                    null}
                            </View>
                            <View>
                                {props.businessCategory ?
                                    <Image style={{ width: 25, height: 25 }}
                                        source={require('../../../../Assets/link_dropdown_icon_up.png')} />
                                    :
                                    <Image style={{ width: 25, height: 25 }}
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
                            <View style={{ paddingLeft: 14, borderWidth: 1, borderRadius: 5, borderColor: "#a9a9a9" }}>
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
                                        <View style={{
                                            flex: 5.5,
                                            justifyContent: "center"
                                        }}>
                                            <Text style={styles.txt}>
                                                {item.category_name}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                                }
                            />
                        </View>
                        :
                        null
                    }
                    <View style={{ height: 70, marginTop: 15, borderColor: '#d8d8d8', borderWidth: 1, marginLeft: 15, marginRight: 15, borderRadius: 8 }}>
                        <TouchableOpacity
                            onPress={() => props.onPressSubCategories()}
                            style={{ justifyContent: 'space-between', paddingRight: 10, flexDirection: 'row', height: 70, alignItems: 'center' }}>
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
                            <View style={{ paddingLeft: 14, borderWidth: 1, borderRadius: 5, borderColor: "#a9a9a9" }}>
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
                                        <View style={{
                                            flex: 5.5,
                                            justifyContent: "center"
                                        }}>
                                            <Text style={styles.txt}>
                                                {item.category_name}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                                }
                            />
                        </View>
                        :
                        null
                    }



                    <View style={{ height: 70, marginTop: 15, borderColor: '#d8d8d8', borderWidth: 1, marginLeft: 15, marginRight: 15, borderRadius: 8 }}>
                        <TouchableOpacity
                            onPress={() => props.onPressBusinessCategories()}
                            style={{ justifyContent: 'space-between', paddingRight: 10, flexDirection: 'row', height: 70, alignItems: 'center' }}>
                            <View style={{ paddingLeft: 20 }}>
                                <Text style={{ fontSize: 18 }}>Business Category</Text>
                            </View>
                            <View>
                                {props.BusiCategory ?
                                    <Image style={{ width: 25, height: 25 }}
                                        source={require('../../../../Assets/link_dropdown_icon_up.png')} />
                                    :
                                    <Image style={{ width: 25, height: 25 }}
                                        source={require('../../../../Assets/link_dropdown_ico.png')} />
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
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
                    // keyboardType={'phone-pad'}
                    />
                    <View style={{ marginTop: 8, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ paddingTop: 8, paddingLeft: 15, height: 70, borderRadius: 10, borderWidth: 1, borderColor: '#d8d8d8', width: '90%', }}>
                            <Picker style={styles.pickerStyle}
                                selectedValue={props.productSize}
                                onValueChange={(itemValue, itemPosition) =>
                                    props.setProductSize(itemValue)}
                            >
                                <Picker.Item label="Product Size" value="" />
                                <Picker.Item label="M" value="m" />
                                <Picker.Item label="L" value="L" />
                                <Picker.Item label="XL" value="XL" />
                            </Picker>
                        </View>
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
                    <TouchableOpacity onPress={() => props.onPressProfileImage()} style={{ marginTop: 15, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 70, borderRadius: 10, borderWidth: 1, borderColor: '#d8d8d8', width: '90%', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ paddingLeft: 25, fontSize: 17 }}>Product Image</Text>
                            <Image
                                style={{ position: "absolute", right: 30, }}
                                source={require('../../../../Assets/upload_icon_field.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    {props.SelectImgUri ?
                        <ScrollView horizontal={true}>
                            {props.SelectImgUri.map((item,index) => {
                                return (
                                    <View style={{ padding: 5, paddingLeft: 20, marginTop: 5 }}>
                                        <ImageBackground
                                            style={styles.ProfileImgStyle}
                                            source={{ uri: item.path }}
                                        >
                                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                                                <TouchableOpacity onPress={() => props.localProductImgDelete(index)} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                    <View style={{ height: 25, width: 25, backgroundColor: 'red', borderRadius: 15, }}>
                                                        <Text style={{ paddingTop: 3, paddingLeft: 8, color: '#fff' }}>X</Text>
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
                            {props.ProductImg.map((item,ind) => {
                                return (
                                    <View style={{ padding: 5, paddingLeft: 20, marginTop: 5 }}>
                                        <ImageBackground
                                            style={styles.ProfileImgStyle}
                                            // resizeMode='center'
                                            source={{ uri: item.product_image }}
                                        >
                                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                                                <TouchableOpacity onPress={() => props.DeleteProductMsg(item)} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                    <View style={{ height: 25, width: 25, backgroundColor: 'red', borderRadius: 15, }}>
                                                        <Text style={{ paddingTop: 3, paddingLeft: 8, color: '#fff' }}>X</Text>
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
                        style={{ marginBottom: 15, marginTop: 10 }}
                    />
                </ScrollView>
            </View>
        </View>
    );
};
export default AddBusinessProductScreen;