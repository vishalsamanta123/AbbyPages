import React, { useState, Fragment } from 'react';
import { GREY_COLOR_CODE, FONT_FAMILY_REGULAR, LINE_COMMON_COLOR_CODE, YELLOW_COLOR_CODE } from '../../Utils/Constant';
import { Dimensions, View, Text, Image } from 'react-native';
import styles from './components/styles';
import RestaurantMenuScreen from './components/RestaurantMenuScreen';
const RestaurantMenuView = () => {
    const [handleDashiStock, setHandleDashiStock] = useState([
        {
            id: '1'
        },
        {
            id: '2'
        },
        {
            id: '3'
        }
    ]);
    const _handleDashiStock = (item) => {
        return (
            <Fragment>
                <View style={styles.DashiStockView}>
                    <Image style={styles.DashiStockImg} source={require('../../Assets/extraImages/salooonimg.jpg')} />
                    <View style={styles.StockInfoContainer}>
                        <Text style={styles.StockNameTxt}>Delicate Umami Dashi</Text>
                        <Text style={styles.CostOfStockTxt}>$14.75</Text>
                        <Text style={styles.DescriptionTxt}>
                            Light & delicate. This both is ideal for light palate and
                            health conscious meal.
                        </Text>
                        <View style={styles.ReviewContainer}>
                            <Image style={styles.StarImageStyle} source={require('../../Assets/star_icon_xs.png')} />
                            <Text style={styles.ReviewTxtStyle}> 10 reviews</Text>
                            <View style={styles.PhotoReviewView}>
                                <Image style={styles.StarImageStyle} source={require('../../Assets/camera_icon_xs.png')} />
                                <Text style={styles.ReviewTxtStyle}> 1 photo</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Fragment>
        )
    }
    const _handleVegetableSelect = (item) => {
        return (
            <Fragment>
                <View style={styles.DashiStockView}>
                    <Image style={styles.DashiStockImg} source={require('../../Assets/extraImages/salooonimg.jpg')} />
                    <View style={styles.StockInfoContainer}>
                        <Text style={styles.StockNameTxt}>Napa Cabbage</Text>
                        <Text style={styles.CostOfStockTxt}>$4.95</Text>
                        <Text style={styles.DescriptionTxt}>
                            Vegetarian
                          </Text>
                        <View style={styles.ReviewContainer}>
                            <Image style={styles.StarImageStyle} source={require('../../Assets/star_icon_xs.png')} />
                            <Text style={styles.ReviewTxtStyle}> 10 reviews</Text>
                            <View style={styles.PhotoReviewView}>
                                <Image style={styles.StarImageStyle} source={require('../../Assets/camera_icon_xs.png')} />
                                <Text style={styles.ReviewTxtStyle}> 1 photo</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Fragment>
        )
    }
    const _handlePopular = (item) => {
        return (
            <Fragment>
                <View style={styles.DashiStockView}>
                    <Image style={styles.DashiStockImg} source={require('../../Assets/extraImages/salooonimg.jpg')} />
                    <View style={styles.StockInfoContainer}>
                        <Text style={styles.StockNameTxt}>Fish Ball</Text>
                        <Text numberOfLines={3} style={[styles.DescriptionTxt,{lineHeight:22}]}>
                            Nino T. Preface:Came in on a sunday night around 9PM for party of 4(1
                            person was still not there yet but)
                          </Text>
                    </View>
                </View>
            </Fragment>
        )
    }
    return (
        <RestaurantMenuScreen
            _handleDashiStock={_handleDashiStock}
            handleDashiStock={handleDashiStock}
            _handleVegetableSelect={_handleVegetableSelect}
            _handlePopular={_handlePopular}
        />
    )
}
export default RestaurantMenuView;