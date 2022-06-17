import React, { useState, useEffect } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, BackHandler } from 'react-native';
import Dialog, { DialogContent, SlideAnimation, } from 'react-native-popup-dialog';
import CommonStyles from '../../../Utils/CommonStyles';
import styles from './styles';
import { YELLOW_COLOR_CODE, LINE_COMMON_COLOR_CODE } from '../../../Utils/Constant';
export default function FilterPopUp(props) {
    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);
    const backAction = () => {
        props.setVisible(false)
    };
    return (
        <Dialog
            visible={props.visible}
            width={1}
            height={1}
            useNativeDriver={true}
            dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
            onTouchOutside={() => {
                props.closeModel()
            }}
        >
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor={YELLOW_COLOR_CODE}
                translucent={false}
            />
            <View style={CommonStyles.header}>
                <TouchableOpacity onPress={() => onBackPress()} style={styles.HeaderArrow}>
                    <Image source={require('../../../Assets/header_back_btn.png')} /></TouchableOpacity>
                <View style={styles.HeaderViewMidle}>
                    <Text style={styles.HeaderMiddleTxt}>Filter Jobs</Text>
                </View>
                <View onPress={() => props.OnpressBack()} style={styles.FilterImgeView}>
                    <Image source={require('../../../Assets/filter_icon.png')} />
                    <Image style={{ marginLeft: 5 }} source={require('../../../Assets/search_icon_header.png')} />
                </View>
            </View>
            <View style={{ flex: 5.5 }}>
                <View style={styles.AnyKeywordView}>
                    <Text style={styles.MainBtnText}>Any Keywords...</Text>
                    <Image source={require('../../../Assets/dropdown_icon.png')} />
                </View>
                <View style={styles.AnyKeywordView}>
                    <Text style={styles.MainBtnText}>Open Now</Text>
                    <Image source={require('../../../Assets/clock_icon2.png')} />
                </View>
                <View style={styles.AnyKeywordView}>
                    <Text style={styles.MainBtnText}>Highest Rated</Text>
                    <Image style={{ width: 20, height: 20 }} source={require('../../../Assets/star_icon.png')} />
                </View>
                <View style={[styles.AnyKeywordView, { marginBottom: 15 }]}>
                    <Text style={styles.MainBtnText}>Most Reviewed</Text>
                    <Image source={require('../../../Assets/comment_icon.png')} />
                </View>
                <View style={styles.PriceRangeView}>
                    <Text style={styles.PriceRngetXT}>Price Range</Text>
                    <Text style={styles.PriceRngeText}>From $1 to $2000</Text>
                </View>
                <View style={styles.FiltersTgView}>
                    <Text style={styles.PriceRngetXT}>Filters by tags</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.FilterOptnView}>
                            <Text style={styles.FiltersText}>Filters by tags</Text>
                        </View>
                        <View style={[styles.FilterOptnView, { marginLeft: 10, backgroundColor: LINE_COMMON_COLOR_CODE }]}>
                            <Text style={styles.FiltersText}>Develpoers</Text>
                        </View>
                    </View>

                </View>

            </View>
        </Dialog>
    )
};
