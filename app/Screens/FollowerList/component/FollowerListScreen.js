import React from 'react';
import { Image, View, Text } from 'react-native';
import Header from '../../../Components/Header'
import CommonStyles from '../../../Utils/CommonStyles'
import styles from './styles'
const FollowerListScreen = () => {
    return (
        <View style={CommonStyles.container}>
            <Header
                RightImg={null}
                leftImg={require('../../../Assets/hamburger_icon.png')}
                HeaderText={'Followers'}
                type="Drawer"
            />
            <View style={[CommonStyles.body, {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f2f2f2",
            }]}>
                <View style={styles.cardCon}>
                    <View style={styles.imgCon}>
                        <Image source={require('../../../Assets/user_icon_box_large.png')} />
                    </View>
                    <Text style={[CommonStyles.text, { bottom: 25, fontSize: 16, color: "#6c6c6c", lineHeight: 25, textAlign: "center" }]}>
                        It doesn't look like anyone has
                        follwed you on AbbyPages  yet.Just keep
                        that awesome content and i'm sure your fans will come roilin` in "soon!";
                    </Text>
                </View>
            </View>
        </View>
    )
}
export default FollowerListScreen;