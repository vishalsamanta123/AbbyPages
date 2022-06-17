import React from 'react';
import {
    View,
    FlatList,
    ScrollView
} from 'react-native';
import styles from './styles';
import CommonStyles from '../../../Utils/CommonStyles';
import Header from '../../../Components/Header';
import Button from '../../../Components/Button';
import { YELLOW_COLOR_CODE, WHITE_COLOR_CODE } from '../../../Utils/Constant';
const CollectionsScreen = (props) => {
    return (
        <View style={CommonStyles.container}>
            <Header
                RightImg={null}
                leftImg={require('../../../Assets/hamburger_icon.png')}
                HeaderText='Collections'
                type="Drawer"
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
                <View style={{
                    borderTopWidth: 0.3,
                    borderColor: '#ffe98e',
                    borderBottomWidth: 0.3
                }}>
                    <FlatList
                        data={props.dataType}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        style={{
                            backgroundColor: YELLOW_COLOR_CODE,
                        }}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => props._renderCategory(item, index)}
                    />
                    <View style={{
                        borderWidth: 0.3,
                        borderColor: '#ffe98e'
                    }} />
                </View>
                <ScrollView>
                    <FlatList
                        data={props.eventList}
                        showsVerticalScrollIndicator={false}
                        style={{
                        }}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => props._renderEventList(item, index)}
                    />
                    <Button
                        buttonText="Create a Collection"
                        style={{ marginBottom: 10 }}
                        buttonLabelStyle={styles.ADDBtnTxt}
                        onPress={props.onPressCreate}
                    />
                </ScrollView>
            </View>
        </View>
    )
}
export default CollectionsScreen;