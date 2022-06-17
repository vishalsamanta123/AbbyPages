import React from 'react';
import {
    View,
    FlatList,
    TouchableOpacity,
    Text,
    Image,
    ImageBackground
} from 'react-native';
import CommonStyles from '../../../Utils/CommonStyles';
import styles from './styles';
import Header from '../../../Components/Header';
import { YELLOW_COLOR_CODE, WHITE_COLOR_CODE, FONT_FAMILY_REGULAR } from '../../../Utils/Constant';
const EventListingScreen = (props) => {
    const _renderCategory = (item, index) => {
        const selectedColor = index === props.isSelectedCatgory ? WHITE_COLOR_CODE : "#ffe98e"
        return (
            <TouchableOpacity
                onPress={() =>
                    props._handleDataTypeSelected(index, item)}
                style={styles.lablestyle}>
                <Text style={[
                    styles.txtCat,
                    {
                        color: selectedColor
                    }]}>{item.name}</Text>
            </TouchableOpacity>
        );
    };
    const _renderTime = (item, index) => {
        const selectedColor = index === props.isSelectedDay ? WHITE_COLOR_CODE : "#ffe98e"
        return (
            <TouchableOpacity
                onPress={() =>
                    props._handleDaySelected(index, item)}
                style={styles.lablestyle}>
                <Text style={[
                    styles.txtCat,
                    {
                        color: selectedColor
                    }]}>{item.name}</Text>
            </TouchableOpacity>
        );
    };
    const _renderEventList = (item, index) => {
        return (
            <TouchableOpacity onPress={() => props.onPressEvent()} style={styles.mnCon}>
                <ImageBackground
                    style={styles.bannerimg}
                    source={item.bannerimg}
                >
                    <View style={styles.btncon}>
                        <Text style={{
                            fontFamily: FONT_FAMILY_REGULAR,
                            lineHeight: 16
                        }}>
                            Buy Tickets
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.infobox}>
                    <Text style={styles.hdngtxt}>
                        {item.heading}
                    </Text>
                    <View style={styles.minicon}>
                        <Image
                            style={styles.icon}
                            resizeMode='contain'
                            source={require('../../../Assets/info_calendar_icon.png')}
                        />
                        <Text style={[styles.text, { fontSize: 14, lineHeight: 16 }]}>
                            {item.timing}
                        </Text>
                    </View>
                    <View style={styles.minicon}>
                        <Image
                            style={styles.icon}
                            resizeMode='contain'
                            source={require('../../../Assets/info_marker_icon.png')}
                        />
                        <Text style={[styles.text, { fontSize: 14, lineHeight: 16 }]}>
                            {item.address}
                        </Text>
                    </View>
                    <Text style={[styles.text, {
                        padding: 5,
                        paddingBottom: 8, lineHeight: 18
                    }]}>
                        {item.des}
                    </Text>
                    <View style={styles.intcon}>
                        <Text style={[styles.yellowtxt, { lineHeight: 16 }]}>
                            Others
                        </Text>
                        <Text style={[styles.text, { lineHeight: 16 }]}>
                            {item.interestedPeople}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity >
        )
    };
    return (
        <View style={CommonStyles.container}>
            <Header
                HeaderText='Events'
                RightImg={require('../../../Assets/plus_icon_header.png')}
            />
            <View style={[CommonStyles.body, {
                paddingBottom: '24%',
            }]}>
                <View style={{
                    borderTopWidth: 0.3,
                    borderColor: '#ffe98e',
                    borderBottomWidth: 0.3
                }}>
                    <FlatList
                        data={props.dataType}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        style={{
                            backgroundColor: YELLOW_COLOR_CODE,
                        }}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => _renderCategory(item, index)}
                    />
                    <View style={{
                        borderWidth: 0.3,
                        borderColor: '#ffe98e'
                    }} />
                    <FlatList
                        data={props.dayData}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        style={{
                            backgroundColor: YELLOW_COLOR_CODE,

                        }}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => _renderTime(item, index)}
                    />
                </View>
                <View style={{ paddingTop: 10 }}>
                    <FlatList
                        data={props.eventList}
                        showsVerticalScrollIndicator={false}
                        style={{
                        }}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => _renderEventList(item, index)}
                    />
                </View>
            </View>
        </View>
    )
}
export default EventListingScreen;