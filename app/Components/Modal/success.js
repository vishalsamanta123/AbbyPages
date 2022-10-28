import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Dialog, { DialogContent, SlideAnimation, } from 'react-native-popup-dialog';
import Button from '../Button';
import { FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD, YELLOW_COLOR_CODE } from '../../Utils/Constant';
import { Images } from '../../Utils/images';
export default function success({ message, visible, closeModel }) {
    return (
        <View>
            <Dialog
                visible={visible}
                width={0.8}
                useNativeDriver={true}
                dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                onTouchOutside={() => {
                    closeModel()
                }}
                onHardwareBackPress={() => {
                    closeModel()
                }}
                dialogTitle={
                    <View style={{ alignItems: "center" }}>
                        <Image
                            resizeMode='contain'
                            style={{ width: 100 }}
                            source={Images.SUCCESS_IMG} />
                    </View>
                }
                footer={
                    <View style={{ flexDirection: "row" }}>
                        <Button
                            style={{ backgroundColor: YELLOW_COLOR_CODE, flex: 1 }}
                            // style={{ backgroundColor: "#00fd69", flex: 1 }}
                            buttonText='OK'
                            buttonLabelStyle={{ fontFamily: FONT_FAMILY_BOLD, fontSize: 20 }}
                            onPress={() => closeModel()}
                        />
                        {/* <Button
                            style={{ backgroundColor: "#00fd69", flex: 1 }}
                            buttonText='OK'
                            buttonLabelStyle={{ fontFamily: FONT_FAMILY_BOLD, fontSize: 20 }}
                            onPress={() => _handleButton()}
                        /> */}
                    </View>
                }
            >
                <DialogContent>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{
                            fontFamily: FONT_FAMILY_REGULAR,
                            // width: '70%',
                            textAlign: "center",
                            fontSize: 17,
                            lineHeight: 25
                        }}>
                            {message}
                        </Text>
                    </View>
                </DialogContent>

            </Dialog>
        </View>
    )
};