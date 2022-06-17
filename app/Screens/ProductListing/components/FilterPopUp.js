import React, { useState } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import Dialog, { DialogContent, SlideAnimation, } from 'react-native-popup-dialog';
import CommonStyles from '../../../Utils/CommonStyles'
import Input from '../../../Components/Input'
import { FONT_FAMILY_REGULAR, YELLOW_COLOR_CODE, WHITE_COLOR_CODE, FONT_FAMILY_BOLD } from '../../../Utils/Constant';
export default function FilterPopUp({ visible, closeModel }) {

    return (
        // <View>
        <Dialog
            visible={visible}
            width={1}
            useNativeDriver={true}
            dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
            onTouchOutside={() => {
                closeModel()
            }}
            onHardwareBackPress={() => {
                // var _backPressSubscription;
                closeModel()
            }}
        // dialogStyle={{ height: "100%", width: "100%" }}
        >
            <DialogContent>
                <View style={{ left: -20, width: 380, height: '100%' }}>
                    <StatusBar
                        barStyle="dark-content"
                        hidden={false}
                        backgroundColor={YELLOW_COLOR_CODE}
                        translucent={false}
                    />
                    <View style={CommonStyles.header}>
                        <View style={{ flex: 0.8, justifyContent: "center", alignItems: "center" }}>
                            <Image source={require('../../../Assets/header_back_btn.png')} /></View>
                        <View style={{ flex: 5.2, justifyContent: "center", alignItems: "center", paddingRight: 50 }}><Text style={{ color: WHITE_COLOR_CODE, fontFamily: FONT_FAMILY_BOLD, fontSize: 18 }}>Filter Jobs</Text></View>
                    </View>
                    <View style={CommonStyles.body}>
                        <View style={{ backgroundColor: WHITE_COLOR_CODE, borderBottomWidth: 20, borderColor: "#f2f2f2" }}>
                            <Input 
                            // textInputStyle={{width:50}}
                            />
                        </View>
                    </View>
                </View>
            </DialogContent>

        </Dialog>
        // </View>
    )
};
