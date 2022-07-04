import React from 'react';
import { Image, View, Text } from 'react-native';
import Header from '../../../Components/Header'
import CommonStyles from '../../../Utils/CommonStyles'
import styles from './styles'
const FollowingListScreen = () => {
    return (
        <View style={CommonStyles.container}>
            <Header
                RightImg={null}
                leftImg={require('../../../Assets/hamburger_icon.png')}
                HeaderText={'Following'}
                type="Drawer"
            />
            <View style={[CommonStyles.body, {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f2f2f2",
            }]}>
                <View style={styles.cardCon}>
                    <View style={styles.imgCon}>
                        <Image
                            style={{}}
                            source={require('../../../Assets/user_icon_box_large.png')}
                        />
                    </View>
                    <Text style={[CommonStyles.text, { bottom: 25, fontSize: 16, color: "#6c6c6c", lineHeight: 25, textAlign: "center" }]}>
                        You haven't started following anyone yet.
                        Follow reviewers to tag along on their local
                        adventures.
                    </Text>
                </View>
            </View>
        </View>
    )
}
export default FollowingListScreen;