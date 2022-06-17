import React from 'react';
import { View, Text, Image } from 'react-native';
import CommonStyles from '../../../Utils/CommonStyles';
import Button from '../../../Components/Button';
import Header from '../../../Components/Header';
import {
    WHITE_COLOR_CODE,
    GREY_COLOR_CODE,
    BLACK_COLOR_CODE,
    YELLOW_COLOR_CODE,
    FONT_FAMILY_REGULAR,
    SMALL_TEXT_COLOR_CODE,
    FONT_FAMILY_BOLD
} from '../../../Utils/Constant';
import styles from './styles';
import { color } from 'react-native-reanimated';
import { maxBy } from 'lodash';
const offerScreen = () => {
    return (
        <View style={CommonStyles.container}>
            <Header
                RightImg={null}
                HeaderText={'take an offer'}
            />
            <View style={[CommonStyles.body, { paddingTop: 10 }]}>
                <View style={{ flex: 5.4 }}>


                    <View style={styles.hdngtextcon}>
                        <Text style={[styles.text, { color: BLACK_COLOR_CODE, fontSize: 20, paddingBottom: 10 }]}>
                            AbbyPages user search for Home Services
                            1,001 times a month within 25 miles of you
                    </Text>
                        <View style={{ flexDirection: "row", paddingLeft: 20 }}>
                            <Text style={{
                                fontSize: 60, color: SMALL_TEXT_COLOR_CODE, position: "absolute",
                                bottom: 8,
                            }}>
                                .
                        </Text>
                            <Text style={styles.text}>
                                ENJOY THIS OFFER FOR NEW BUSINESSES ON ABBY PAGES
                        </Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingLeft: 20 }}>
                            <Text style={{
                                fontSize: 60, color: SMALL_TEXT_COLOR_CODE, position: "absolute",
                                bottom: 8,
                            }}>
                                .
                        </Text>
                            <Text style={styles.text}>
                                About 80% if AbbyPages users make a purchase at a business they found on the platform
                                with a week.
                    </Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, paddingVertical: 10 }} >
                        <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
                            <View style={{
                                flex: 0.5,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Image
                                    source={require('../../../Assets/confirm_s_icon_1.png')}
                                />
                            </View>
                            <View style={{ flex: 5.5, justifyContent: "center", alignItems: "center", paddingLeft: 5 }}>
                                <Text style={[styles.text, { fontSize: 14, color: BLACK_COLOR_CODE }]}>
                                    Reach 3X* into more potential customers with AbbyPages Ads
                            </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
                            <View style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={require('../../../Assets/confirm_s_icon_2.png')}
                                />
                            </View>
                            <View style={{ flex: 5.5, justifyContent: "center", paddingLeft: 5 }}>
                                <Text style={[styles.text, { fontSize: 14, color: BLACK_COLOR_CODE }]}>
                                    Only pay when interested on your add
                            </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
                            <View style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={require('../../../Assets/confirm_s_icon_3.png')}
                                />
                            </View>
                            <View style={{ flex: 5.5, justifyContent: "center", paddingLeft: 5 }}>
                                <Text style={[styles.text, { fontSize: 14, color: BLACK_COLOR_CODE }]}>
                                    Get started in minutes
                            </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 0.6, backgroundColor: YELLOW_COLOR_CODE, flexDirection: "row" }}>
                    <View style={{
                        flex: 4, flexDirection: "row",
                        alignItems: "center", paddingLeft: 10,justifyContent:"center"
                    }}>
                        <Image
                            style={{ height: 25, width: 15,marginRight:5,marginLeft:15 }}
                            source={require('../../../Assets/confirm_s_icon_4.png')}
                        />
                        <Text style={{
                            color: BLACK_COLOR_CODE,
                            fontFamily: FONT_FAMILY_REGULAR,
                        }}>
                            Start now with $300 free credit .Expires in 0.1:59:36
                        </Text>
                    </View>
                    <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{
                            backgroundColor: WHITE_COLOR_CODE,
                            color: BLACK_COLOR_CODE,
                            padding: 5,
                            fontFamily: FONT_FAMILY_REGULAR,
                            borderRadius: 5
                        }}>
                            GET STARTED
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default offerScreen;