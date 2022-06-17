import React from 'react';
import {
    View,
    StatusBar,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
} from 'react-native';
import CommonStyles from '../../../Utils/CommonStyles';
import styles from './styles';
import Button from '../../../Components/Button'
import {
    WHITE_COLOR_CODE,
    YELLOW_COLOR_CODE
} from '../../../Utils/Constant';
const JobListScreen = (props) => {
    const _renderJobList = (item, index) => {
        return (
            <TouchableOpacity onPress={() => props.onPressJob()} style={styles.dataCon}>
                <View style={{ flex: 2, justifyContent: "center" }}>
                    <Image
                        style={styles.posterimg}
                        source={item.posterimg}
                    />
                </View>
                <View style={{ flex: 4 }}>
                    <View style={[styles.basiccon, { justifyContent: "space-between" }]}>
                        <Text style={[styles.text, { fontSize: 12,lineHeight:14 }]}>
                            {item.companyname}
                        </Text>
                        <Text style={[styles.text, { fontSize: 12, lineHeight: 14 }]}>
                            {item.postingtime}
                        </Text>
                    </View>
                    <Text style={[styles.hdngtxt, { fontSize: 15, lineHeight: 18}]}>
                        {item.title}
                    </Text>
                    <View style={styles.basiccon}>
                        <Image
                            style={styles.icon}
                            resizeMode='contain'
                            source={require('../../../Assets/info_marker_icon.png')}
                        />
                        <Text style={[styles.text, { fontSize: 12, lineHeight: 14}]}>
                            {item.address}
                        </Text>
                    </View>
                    <View style={styles.basiccon}>
                        <Image
                            style={styles.icon}
                            resizeMode='contain'
                            source={require('../../../Assets/info_marker_icon.png')}
                        />
                        <Text style={[styles.text, { fontSize: 12, lineHeight: 14, color: YELLOW_COLOR_CODE }]}>
                            {item.worktype}
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={[styles.basiccon, { flex: 4.5 }]}>
                            <Image
                                style={styles.icon}
                                resizeMode='contain'
                                source={require('../../../Assets/money_icon.png')}
                            />
                            <Text style={[styles.text, { fontSize: 12, lineHeight: 14, color: YELLOW_COLOR_CODE }]}>
                                {item.req_amount}
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => props._hanldeSetLike()}
                            style={{ flex: 1.5, alignItems: "flex-end", marginRight: 10 }}>
                            {props.like == index ?
                                <Image
                                    source={require('../../../Assets/like_icon_disable.png')}
                                />
                                :
                                <Image
                                    source={require('../../../Assets/like_icon_filled.png')}
                                />
                            }
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={CommonStyles.container}>
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor={YELLOW_COLOR_CODE}
                translucent={false}
            />
            <View style={[CommonStyles.header]}>
                <TouchableOpacity
                    onPress={() => props.goBack()}
                    style={styles.HeaderView}>
                    <Image
                        style={{ width: 35, height: 25, }}
                        source={require('../../../Assets/header_back_btn.png')}
                    />
                </TouchableOpacity>
                <View style={[styles.HeaderMiddleCon]}>
                    <Text style={[styles.MainHeadTxt]}>
                        Jobs
                        </Text>
                </View>
                <View style={styles.HeaderRightView}>
                    <Image
                        resizeMode='cover'
                        style={styles.headericon}
                        source={require('../../../Assets/map_list_icon.png')}
                    />
                    <TouchableOpacity onPress={() => props.openFilter()}>
                        <Image
                            resizeMode='cover'
                            style={styles.headericon}
                            source={require('../../../Assets/filter_icon.png')}
                        />
                    </TouchableOpacity>

                    <Image
                        resizeMode='cover'
                        style={styles.headericon}
                        source={require('../../../Assets/search_icon_header.png')}
                    />
                </View>
            </View>
            <View style={[CommonStyles.body]}>
                <View style={{ padding: 20, backgroundColor: "#f2f2f2" }}>
                    <Text style={styles.hdngtxt}>
                        56 Results found
                    </Text>
                </View>
                <View style={{ flex: 1, backgroundColor: WHITE_COLOR_CODE }}>
                    <FlatList
                        data={props.jobList}
                        showsVerticalScrollIndicator={false}
                        style={{
                        }}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => _renderJobList(item, index)}
                    />
                </View>
            </View>
        </View>
    )
}
export default JobListScreen;