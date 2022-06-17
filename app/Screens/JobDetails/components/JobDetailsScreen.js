import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native';
import CommonStyles from '../../../Utils/CommonStyles';
import styles from './styles';
import Header from '../../../Components/Header';
import Button from '../../../Components/Button'
import {
     BLACK_COLOR_CODE, YELLOW_COLOR_CODE, FONT_FAMILY_BOLD
} from '../../../Utils/Constant';
const JobDetailsScreen = (props) => {
    return (
        <View style={CommonStyles.container}>
            <Header
                HeaderText='Job Details'
                RightImg={null}
            />
            <View style={[CommonStyles.body]}>
                <ScrollView>
                    <Image
                        style={styles.bannerimg}
                        source={require('../../../Assets/extraImages/salooonimg.jpg')}
                    />
                    <View style={styles.infocon}>
                        <Text style={[styles.hdngtxt, { fontSize: 20 }]}>
                            UI/UX Product Designer
                        </Text>
                        <View style={styles.basiccon}>
                            <View style={styles.basiccon}>
                                <Image
                                    style={styles.icon}
                                    source={require('../../../Assets/verified_icon.png')}
                                />
                                <Text style={[styles.text, { fontSize: 14 }]}>
                                    Verified
                            </Text>
                            </View>
                            <View style={styles.basiccon}>
                                <Image
                                    style={[styles.icon, { width: 22 }]}
                                    source={require('../../../Assets/viewed_icon.png')}
                                />
                                <Text style={[styles.text, { fontSize: 14 }]}>
                                    Viewed
                            </Text>
                            </View>
                        </View>
                        <View style={styles.basiccon}>
                            <Image
                                style={[styles.icon, { height: 15, width: 15 }]}
                                source={require('../../../Assets/clock_icon.png')}
                            />
                            <Text style={[styles.text, { fontSize: 14 }]}>
                                Hot Pot,japanese,Cocktail Bars
                            </Text>
                        </View>
                        <Button
                            style={{
                                marginBottom: 6,
                                width:'100%',
                                marginTop: 8
                            }}
                            buttonText='Compare'
                        />
                        <Button
                            style={{
                                marginBottom: 8,
                                width:'100%',
                                marginTop: 6
                            }}
                            buttonText='Apply Now'
                        />
                        <View style={[styles.basiccon, {
                            marginBottom: 10,
                            marginTop: 15,
                            justifyContent: "space-around"
                        }]}>
                            <View style={[styles.btnmncon, { borderRightWidth: 1, borderColor: 'lightgrey' }]}>
                                <Image
                                    source={require('../../../Assets/save_icon.png')}
                                />
                                <Text style={[styles.text, { color: BLACK_COLOR_CODE }]}>
                                    Report
                                </Text>
                            </View>
                            <View style={[styles.btnmncon, { borderRightWidth: 1, borderColor: 'lightgrey' }]}>
                                <Image
                                    style={[styles.icon, { height: 22, width: 25 }]}
                                    source={require('../../../Assets/share_icon.png')}
                                />
                                <Text style={[styles.text, { color: BLACK_COLOR_CODE }]}>
                                    Share
                                </Text>
                            </View>
                            <View style={styles.btnmncon}>
                                <Image
                                    source={require('../../../Assets/save_icon.png')}
                                />
                                <Text style={[styles.text, { color: BLACK_COLOR_CODE }]}>
                                    Save
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.maincontainers}>
                        <Text style={styles.hdngtxt}>
                            Recruitment Information
                        </Text>
                        <View style={styles.basiccon}>
                            <View style={styles.descriptioncon}>
                                <Image
                                    style={styles.icon}
                                    source={require('../../../Assets/musical-sign-of-one-dots.png')} />
                                <Text style={[styles.hdngtxt, { fontSize: 15 }]}>
                                    Work Location :
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.text}>
                                    125 Mountainst St,
                                    Brooklyn,NY,United States
                                </Text>
                            </View>
                        </View>
                        <View style={styles.basiccon}>
                            <View style={styles.descriptioncon}>
                                <Image
                                    style={styles.icon}
                                    source={require('../../../Assets/musical-sign-of-one-dots.png')} />
                                <Text style={[styles.hdngtxt, { fontSize: 15 }]}>
                                    Industry :
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.text}>
                                    IT - Software
                                </Text>
                            </View>
                        </View>
                        <View style={styles.basiccon}>
                            <View style={styles.descriptioncon}>
                                <Image
                                    style={styles.icon}
                                    source={require('../../../Assets/musical-sign-of-one-dots.png')} />
                                <Text style={[styles.hdngtxt, { fontSize: 15 }]}>
                                    Job Level :
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.text}>
                                    Staff
                                </Text>
                            </View>
                        </View>
                        <View style={styles.basiccon}>
                            <View style={styles.descriptioncon}>
                                <Image
                                    style={styles.icon}
                                    source={require('../../../Assets/musical-sign-of-one-dots.png')} />
                                <Text style={[styles.hdngtxt, { fontSize: 15 }]}>
                                    Type:
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
                                    Abby
                                </Text>
                            </View>
                        </View>
                        <View style={styles.basiccon}>
                            <View style={styles.descriptioncon}>
                                <Image
                                    style={styles.icon}
                                    source={require('../../../Assets/musical-sign-of-one-dots.png')} />
                                <Text style={[styles.hdngtxt, { fontSize: 15 }]}>
                                    Salary :
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.text, { color: YELLOW_COLOR_CODE }]}>
                                    $1,000 - $2,0000
                                </Text>
                            </View>
                        </View>
                        <View style={styles.basiccon}>
                            <View style={styles.descriptioncon}>
                                <Image
                                    style={styles.icon}
                                    source={require('../../../Assets/musical-sign-of-one-dots.png')} />
                                <Text style={[styles.hdngtxt, { fontSize: 15 }]}>
                                    Skills Requires :
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.text}>
                                    Photoshop,illustration,
                                    Sketch,Design
                                </Text>
                            </View>
                        </View>
                        <View style={styles.basiccon}>
                            <View style={styles.descriptioncon}>
                                <Image
                                    style={styles.icon}
                                    source={require('../../../Assets/musical-sign-of-one-dots.png')} />
                                <Text style={[styles.hdngtxt, { fontSize: 15 }]}>
                                    Language :
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.text}>
                                    English
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.maincontainers}>
                        <Text style={styles.hdngtxt}>
                            Job Description
                        </Text>
                        <View style={[styles.basiccon, { padding: 5 }]}>
                            <Image
                                style={styles.icon}
                                source={require('../../../Assets/musical-sign-of-one-dots.png')} />
                            <Text style={styles.text}>
                                Create designs,concepts,and sample layouts based on
                                knowledge of layout principles and esthetic design concepts
                            </Text>
                        </View>
                        <View style={[styles.basiccon, { padding: 5 }]}>
                            <Image
                                style={styles.icon}
                                source={require('../../../Assets/musical-sign-of-one-dots.png')} />
                            <Text style={styles.text}>
                                Designs are required for variety of products and activities ,
                                such as websites,advertising,marketing proposal.
                            </Text>
                        </View>
                        <View style={[styles.basiccon, { padding: 5 }]}>
                            <Image
                                style={styles.icon}
                                source={require('../../../Assets/musical-sign-of-one-dots.png')} />
                            <Text style={styles.text}>
                                Oversee the day-to-day work of the design team
                                and provides art direction guidance
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.maincontainers,{paddingRight:30}]}>
                        <Text style={styles.hdngtxt}>
                            Job Requirement
                        </Text>
                        <View style={[styles.basiccon, { padding: 5 }]}>
                            <Image
                                style={styles.icon}
                                source={require('../../../Assets/musical-sign-of-one-dots.png')} />
                            <Text style={styles.text}>
                                Flair for layout and conceptualization
                            </Text>
                        </View>
                        <View style={[styles.basiccon, { padding: 5 }]}>
                            <Image
                                style={styles.icon}
                                source={require('../../../Assets/musical-sign-of-one-dots.png')} />
                            <Text style={styles.text}>
                                Able to think out of the box and work under tight deadlines
                            </Text>
                        </View>
                        <View style={[styles.basiccon, { padding: 5 }]}>
                            <Image
                                style={styles.icon}
                                source={require('../../../Assets/musical-sign-of-one-dots.png')} />
                            <Text style={styles.text}>
                                Excel in design software like illustrator,photoshop,In Design
                            </Text>
                        </View>
                        <View style={[styles.basiccon, { padding: 5 }]}>
                            <Image
                                style={styles.icon}
                                source={require('../../../Assets/musical-sign-of-one-dots.png')} />
                            <Text style={styles.text}>
                                Able to contribute ideas as well as
                                effectively handle work with a fair
                                amount of text
                            </Text>
                        </View>
                        <View style={[styles.basiccon, { padding: 5 }]}>
                            <Image
                                style={styles.icon}
                                source={require('../../../Assets/musical-sign-of-one-dots.png')} />
                            <Text style={styles.text}>
                                Well-versed in visual communications over both traditional
                                and digital platforms
                            </Text>
                        </View>
                        <View style={[styles.basiccon, { padding: 5 }]}>
                            <Image
                                style={styles.icon}
                                source={require('../../../Assets/musical-sign-of-one-dots.png')} />
                            <Text style={styles.text}>
                                Has initiative work independently with minimum supervisions
                            </Text>
                        </View>
                    </View>
                    <View style={styles.maincontainers}>
                        <Text style={styles.hdngtxt}>
                            Arates Property Company
                        </Text>
                        <View style={[styles.basiccon, { padding: 5 }]}>
                            <Image
                                resizeMode='contain'
                                style={styles.icon}
                                source={require('../../../Assets/map_field_icon.png')} />
                            <Text style={styles.text}>
                                125 Mountain St,Brooklyn,NY
                            </Text>
                        </View>
                        <View style={[styles.basiccon, { padding: 5 }]}>
                            <Image
                                style={styles.icon}
                                source={require('../../../Assets/info_call_icon.png')} />
                            <Text style={styles.text}>
                                (+01)407-600-5690
                            </Text>
                        </View>
                        <View style={[styles.basiccon, { padding: 5 }]}>
                            <Image
                                style={styles.icon}
                                source={require('../../../Assets/info_globe_icon.png')} />
                            <Text style={styles.text}>
                                www.thaitaste.com
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.maincontainers, { borderBottomWidth: 0 }]}>
                        <Text style={styles.hdngtxt}>
                            Business Hours
                        </Text>
                        <View style={styles.basiccon}>
                            <View style={styles.descriptioncon}>
                                <Text style={[styles.text, { fontSize: 15,fontFamily:FONT_FAMILY_BOLD}]}>
                                    Mon
                                </Text>
                            </View>
                            <View style={{ flex: 4 }}>
                                <Text style={styles.text}>
                                    5:30 pm - 9:30 pm
                                </Text>
                            </View>
                        </View>
                        <View style={styles.basiccon}>
                            <View style={styles.descriptioncon}>
                                <Text style={[styles.text, { fontSize: 15, fontFamily: FONT_FAMILY_BOLD }]}>
                                    Tue
                                </Text>
                            </View>
                            <View style={{ flex: 4 }}>
                                <Text style={styles.text}>
                                    5:30 pm - 9:30 pm
                                </Text>
                            </View>
                        </View>
                        <View style={styles.basiccon}>
                            <View style={styles.descriptioncon}>
                                <Text style={[styles.text, { fontSize: 15, fontFamily: FONT_FAMILY_BOLD }]}>
                                    Wed
                                </Text>
                            </View>
                            <View style={{ flex: 4 }}>
                                <Text style={styles.text}>
                                    5:30 pm - 9:30 pm
                                </Text>
                            </View>
                        </View>
                        <View style={styles.basiccon}>
                            <View style={styles.descriptioncon}>
                                <Text style={[styles.text, { fontSize: 15, fontFamily: FONT_FAMILY_BOLD }]}>
                                    Thu
                                </Text>
                            </View>
                            <View style={{ flex: 4 }}>
                                <Text style={styles.text}>
                                    5:30 pm - 9:30 pm
                                </Text>
                            </View>
                        </View>
                        <View style={styles.basiccon}>
                            <View style={styles.descriptioncon}>
                                <Text style={[styles.text, { fontSize: 15, fontFamily: FONT_FAMILY_BOLD }]}>
                                    Fri
                                </Text>
                            </View>
                            <View style={{ flex: 4 }}>
                                <Text style={styles.text}>
                                    5:30 pm - 9:30 pm
                                </Text>
                            </View>
                        </View>
                        <View style={styles.basiccon}>
                            <View style={styles.descriptioncon}>
                                <Text style={[styles.text, { fontSize: 15, fontFamily: FONT_FAMILY_BOLD }]}>
                                    Sat
                                </Text>
                            </View>
                            <View style={{ flex: 4 }}>
                                <Text style={styles.text}>
                                    5:30 pm - 9:30 pm
                                </Text>
                            </View>
                        </View>
                        <View style={styles.basiccon}>
                            <View style={styles.descriptioncon}>
                                <Text style={[styles.text, { fontSize: 15, fontFamily: FONT_FAMILY_BOLD }]}>
                                    Sun
                                </Text>
                            </View>
                            <View style={{ flex: 4 }}>
                                <Text style={styles.text}>
                                    Off
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};
export default JobDetailsScreen;