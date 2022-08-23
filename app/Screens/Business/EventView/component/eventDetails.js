import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../../../Components/Header'
import { BLACK_COLOR_CODE, YELLOW_COLOR_CODE } from '../../../../Utils/Constant'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'

const eventDetails = (props) => {
    const navigation =  useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <Header
                HeaderText='Event details'
                RightImg={null}
                leftImg={require('../../../../Assets/header_back_btn.png')}
            />
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={{
                    borderBottomWidth: 1.5,
                    borderColor: 'grey'
                }}>
                    <Image
                        source={{ uri: props?.deatil?.events_image }}
                        style={styles.image}
                        resizeMode={'stretch'}
                    />

                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                    <Text style={styles.headingTxt}>Name : {props?.deatil?.event_name}</Text>
                    <Text style={styles.headingTxt}>Location : {props?.deatil?.event_location}</Text>
                    <Text style={styles.headingTxt}>Date :  {moment
                        .unix(props?.deatil?.event_date)
                        .format("dddd, MMMM Do, YYYY")}</Text>
                    <Text style={styles.headingTxt}>Interested : {props?.deatil?.interested}</Text>
                    <Text style={styles.headingTxt}>View : {props?.deatil?.view}</Text>
                </View>

                <View style={{ marginTop: 10 }}>
                    <View style={styles.statusContainer}>
                        <Text style={styles.headingTxt}>Status</Text>
                        <TouchableOpacity
                            style={styles.switchstyle}
                            onPress={() =>
                                props.eventStatus({
                                    id: props?.deatil?.event_id,
                                    status: props?.deatil?.status === 1 ? false : true,
                                })
                            }
                        >
                            {props?.deatil?.status === 1 ? (
                                <Image source={require("../../../../Assets/active_switch.png")} />
                            ) : (
                                <Image source={require("../../../../Assets/unactive_switch.png")} />
                            )}
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity
                            style={styles.BtnStyle}
                        onPress={() => navigation.navigate("CreateEvent", { type: 'Edit_event', item: props?.deatil })}
                        >
                            <Text>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.BtnStyle}
                            onPress={() => props.DeleteMsg(props?.deatil)}
                        >
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default eventDetails

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 200,
    },
    headingTxt: { fontSize: 18, color: 'grey', fontWeight: 'bold' },
    switchstyle: {
        marginHorizontal: 10,
        // marginBottom: 10
    },
    BtnStyle: {
        padding: 20,
        backgroundColor: YELLOW_COLOR_CODE,
        alignItems: "center",
        width: '40%'
    },
    statusContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: 'center',
        marginBottom: 10
    }
})