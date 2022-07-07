import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import CommonStyles from '../../../Utils/CommonStyles';
import styles from './styles';
import moment from "moment";
import Header from '../../../Components/Header';
import Button from '../../../Components/Button'
import { WHITE_COLOR_CODE } from '../../../Utils/Constant';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
const EventListingScreen = (props) => {
    const { width, height } = Dimensions.get('window');
    const eventDate = moment(props?.eventDetails?.created_at).format("MMMM Do YYYY, h:mm:ss a");
    return (
        <View style={CommonStyles.container}>
            {console.log('eventDetails', props.eventDetails.recently_events)}
            <Header HeaderText='Events Details' RightImg={null} />
            <View style={[CommonStyles.body]}>
                <ScrollView>
                    {/*<FlatList
                        horizontal
                        data={props?.eventDetails?.recently_events}
                        renderItem={({ item }) => (
                            <View style={{ flex: 1 }}>
                                <Image style={{ width: windowWidth / 1, height: windowHeight / 4 }}
                                    source={{ uri: item?.events_image }}
                                />
                            </View>
                        )}
                        /> */}

                    <SafeAreaView style={{ alignItems: 'center' }}>
                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            data={props?.eventDetails?.recently_events && props?.eventDetails?.recently_events}
                            scrollEventThrottle={16}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            onScroll={(event) => { props.setSliderPage(event) }}
                            renderItem={({ item, index }) => {
                                return (
                                    index <= 4 &&
                                    <View key={index} style={{ width, alignItems: 'center' }}>
                                        <Image
                                            resizeMode='stretch'
                                            source={{ uri: item.events_image }}
                                            style={styles.imageStyle}
                                        />
                                    </View>
                                )
                            }
                            }
                        />
                        {/* {props.shopDetail.image.length} */}
                        <View style={styles.paginationWrapper}>
                            {Array.from(Array(5).keys()).map((key, index) => (
                                <View style={[styles.paginationDots, { opacity: props.pageIndex === index ? 1 : 0.2 }]} key={index} />
                            ))}
                        </View>
                    </SafeAreaView>

                    {/* <Image style={styles.bannerimg} source={require('../../../Assets/extraImages/salooonimg.jpg')} /> */}
                    <View style={styles.infocon}>
                        <Text style={[styles.hdngtxt, { textTransform: 'capitalize' }]}>{props?.eventDetails?.event_name}</Text>
                        <View style={styles.basiccon}>
                            <Image
                                resizeMode='contain'
                                style={styles.icon}
                                source={require('../../../Assets/info_calendar_icon.png')}
                            />
                            <Text style={[styles.text, { fontSize: 14, lineHeight: 18 }]}>
                                {eventDate}
                            </Text>
                        </View>
                        <View style={styles.basiccon}>
                            <Image
                                resizeMode='contain'
                                style={styles.icon}
                                source={require('../../../Assets/map_marker_icon.png')}
                            />
                            <Text style={[styles.text, { fontSize: 14, lineHeight: 20 }]}>
                                Virtual - on Zoom! {props?.eventDetails?.event_location}
                            </Text>
                        </View>
                        <View style={styles.basiccon}>
                            <Image
                                resizeMode='contain'
                                style={[styles.icon]}
                                source={require('../../../Assets/info_tag_icon.png')}
                            />
                            <Text style={[styles.text, { fontSize: 14, lineHeight: 18 }]}>
                                Free
                            </Text>
                        </View>
                        <View style={[styles.basiccon, { justifyContent: "space-around" }]}>
                            <TouchableOpacity style={styles.btncon}><Text style={styles.btntxt}> Interested?</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.btncon}><Text style={styles.btntxt}>Buy Tickets</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        padding: 20,
                        flex: 1,
                        backgroundColor: WHITE_COLOR_CODE,
                        borderBottomWidth: 20,
                        borderColor: "#f2f2f2"
                    }}>
                        <Text style={styles.hdngtxt}>
                            What/Why:
                        </Text>
                        <Text style={[styles.text, { lineHeight: 18 }]}>
                            {/* {props.eventDetails.event_description} */}
                            VELF HAUNTS AT HOME: This event is part of the elp Hunts
                            At Home Vitual ent seriest For the
                            whele Set of eventa, cack here Abby.com/eventa/san tran.
                            {'\n'} {'\n'}
                            ABCUT THIG EVENT HUing to velebrute Halowe virtualy this
                            year? We got yeut Your Eat Bay CM. Emma w, your San Aitonio
                            EM, Fernanda E. and your Chitage Burbs CM, Nicoie a invita
                            you to a fult on akeietin party That's right - prati yoar
                            favorite drink and join us for night of skeietal hun we all
                            tramutorm inte skutatona witt the holp ef Sabrina Locer
                            (Rabbit Ryn end her makeup magiet Grab your eninting fane
                            maknup (o tuy an utterdanin kit fum the Unk weti providel and
                            glue yourseif sor a buddyt an msta-worthy ckeietal mahravert
                            Or juet feiel fe To join and watch {'\n'} {'\n'} Sabrina wil No be giving
                            you optiona for your skalatat look Vou can oither create the
                            look seen in the featured image on this page or give it your
                            own twist with the help at Sabrina, {'\n'} {'\n'}Plus, w'll have a virtual
                            phota booth hy Alfspe Photo tyele.com/bis/aiteaco-oh. Thase who
                            poat pice from the booth (and tag un) witi be aitomaticaliy entered
                            in a weet autumn-themet giveaway  {'\n'} {'\n'}WHEN: Thureday, Octaber 29 @5:30
                            PETt / 1:dOrM CST/DOPM EST  {'\n'} {'\n'}WHERE YOur harme Well tbe connecting
                            virtually on Zoom  {'\n'} {'\n'}WHO: This event a epes tu atyane with
                            a velp account {'\n'} {'\n'}This virta wwip Experience was crested to pravide a aate positive
                            apace for averyarie who wiehes to participote We are committed ta
                            providing an oppermunity where ail are wecamer Please make sure to
                            respect everyane who wishes to be a part of this opportunity  {'\n'} {'\n'}
                        </Text>
                    </View>
                    <View style={{
                        padding: 20,
                        flex: 1,
                        backgroundColor: WHITE_COLOR_CODE
                    }}>
                        <Text style={styles.hdngtxt}>What You Need</Text>
                        <Text style={[styles.text, { lineHeight: 18 }]}>
                            Desktop or laptop or phone with ahility to acoess 2oem And
                            a strong internet conivection.{'\n'}{'\n'}
                            Downinating Zoom nat regutred to  participats{'\n'}{'\n'}
                            When jaining yui be aed to anter a name- plesse ute your
                            first name and iast initial. just he on Yelet This will
                            be helptul ninon wee taking attendance a Official Website
                            {'\n'}
                        </Text>
                        <Button
                            style={{}}
                            buttonText='Official Website'
                        />
                    </View>

                </ScrollView>
            </View>
        </View>
    )
}
export default EventListingScreen;