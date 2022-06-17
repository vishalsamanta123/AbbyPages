import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, YellowBox, Animated, useWindowDimensions, ImageBackground } from 'react-native';
import CommonStyles from '../../../../Utils/CommonStyles';
import styles from './styles';
import Button from '../../../../Components/Button';
import Input from '../../../../Components/Input';
import Header from '../../../../Components/Header';
import { WHITE_COLOR_CODE, YELLOW_COLOR_CODE, BLACK_COLOR_CODE } from '../../../../Utils/Constant';
import { color } from 'react-native-reanimated';
import moment from 'moment'

const BusinessProductDetails = (props) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header
                HeaderText='Product Details'
                RightImg={null}
                // RightImg={require('../../../../Assets/cart_icon_header.png')}
            />
            <View style={[CommonStyles.body]}>
                <ScrollView>
                    <View style={styles.maincontainers}>
                        <View style={{ height: 230 }}>
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
                                scrollEventThrottle={1}
                            >
                                {props.ProductData ? props.ProductData.product_image.map((item, imageIndex) => {
                                    return (
                                        <View style={{ width: windowWidth, height: '100%' }}
                                            key={imageIndex}>
                                            <ImageBackground style={styles.PosterImgeStyle}
                                                source={{
                                                    uri: item.product_image
                                                }}
                                                resizeMode='stretch'
                                                resizeMethod='resize'
                                            />
                                        </View>
                                    )
                                })
                                    :
                                    <Image style={styles.PosterImgeStyle}
                                        source={require('../../../../Assets/extraImages/blackBuild.png')}
                                    />
                                }
                            </ScrollView>
                        </View>
                        <View style={{ flexDirection: 'row', position: 'absolute', justifyContent: 'center', width: '100%', top: 150 }}>
                            {props.ProductData ? props.ProductData.product_image.map((image, imageIndex) => {
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
                                    <Animated.View
                                        key={imageIndex}
                                        style={[styles.normalDot, { width }]}
                                    />
                                );
                            })
                                :
                                null}
                        </View>
                    </View>
                    {props.ProductData ?
                        <View style={styles.infocon}>
                            <Text style={[styles.hdngtxt, { fontSize: 20, lineHeight: 24 }]}>
                                {props.ProductData.product_name}
                            </Text>
                            <View style={styles.basiccon}>

                                <View style={[styles.basiccon]}>
                                    <Text style={[styles.hdngtxt, { width: null, fontSize: 20, paddingRight: 5 }]}>
                                        ${props.ProductData.final_price}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={[styles.PriceOfDishTxt, { textDecorationLine: 'line-through' }]}>M.R.P :</Text>
                                <Text style={[styles.PriceOfDishTxt]}> ${props.ProductData.price}</Text>
                                <Text style={[styles.PriceOfDishTxt]}> ({props.ProductData.discount}% off)</Text>
                            </View>
                            <View style={styles.basiccon}>
                                <Text style={[styles.text, { width: null, fontSize: 14, lineHeight: 19 }]}>
                                    Categories: {props.ProductData.sub_category_name}
                                </Text>
                            </View>
                            <View style={[styles.localFooter], { marginTop: 15, width: '100%', flexDirection: 'row' }}>
                                <View style={{ width: '50%' }}>
                                    <Button
                                        style={{ borderWidth: 1, borderColor: WHITE_COLOR_CODE }}
                                        buttonText="Edit"
                                        onPress={() => props.editProduct()}
                                    />
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Button
                                        style={{ borderWidth: 1, borderColor: WHITE_COLOR_CODE }}
                                        buttonText="Delete"
                                        onPress={() => props.DeleteProductMsg()}
                                    />
                                </View>
                            </View>
                        </View>
                        :
                        null
                    }
                    {props.ProductData ?
                        <View style={[styles.maincontainers], { padding: 15 }}>
                            <Text style={[styles.hdngtxt]}>
                                Description
                           </Text>
                            <View style={styles.basiccon}>
                                <Text style={styles.text}>
                                    {props.ProductData.description}
                                </Text>
                            </View>
                        </View>
                        :
                        null}
                </ScrollView>
            </View>
        </View>
    );
};
export default BusinessProductDetails;