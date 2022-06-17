import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import styles from './styles';
import Button from '../../../../Components/Button';
import Header from '../../../../Components/Header';
import CommonStyles from '../../../../Utils/CommonStyles';
import { FONT_FAMILY_REGULAR } from '../../../../Utils/Constant'

const PreviewScreen = (props) => {
    return (
        <View style={[CommonStyles.container]}>
            <Header
                leftImg={require('../../../../Assets/header_back_btn.png')}
                HeaderText="Preview"
                RightImg={null}
            />
            <View style={[CommonStyles.body]}>
                <View style={{ flex: 1, }}>
                    <View style={styles.maintxtvwe}>
                        <Text style={styles.maintxt}>Your a preview on AbbyPages </Text>
                        <Image style={styles.circleicon} source={require('../../../../Assets/info_icon_circled.png')} />
                    </View>
                    <View>
                        <View style={styles.mainboxvwe}>
                            <View style={styles.lefttxtvwe}>
                                <View style={styles.lefttxtvwesec}>
                                    <Image source={require('../../../../Assets/company_default_icon.png')} />
                                </View>
                                <View style={styles.ittextvwe}>
                                    <Text style={styles.companytxt}>Itinformatix</Text>
                                    <Text style={styles.alltwoxt}>Home Srvice, Resturants,</Text>
                                    <Text style={styles.alltwoxt}>SoftWare Devlopment</Text>
                                    <Text style={styles.alltwoxt}>19/20 Main St</Text>
                                </View>
                            </View>
                            <Text style={styles.teconloglytxt}>I am perfect in Devlopment for any technology </Text>
                            <View style={{ paddingTop: 10 }}>
                                <Button
                                    buttonText="Vist Website"
                                    style={styles.buttonstyle}
                                    buttonLabelStyle={{ fontFamily: FONT_FAMILY_REGULAR, }}
                                // onPress={()=>props.onPressGoalPreview()}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default PreviewScreen;