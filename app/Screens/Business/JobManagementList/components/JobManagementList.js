import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StatusBar,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import Header from '../../../../Components/Header';
import CommonStyles from '../../../../Utils/CommonStyles';
import { WHITE_COLOR_CODE } from '../../../../Utils/Constant';
const JobManagementList = (props) => {
    return (
        <KeyboardAvoidingView style={[CommonStyles.container]}>
            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle='dark-content'
            />
            <Header
                RightImg={null}
                HeaderText={'My Jobs'}
                leftImg={require('../../../../Assets/hamburger_icon.png')}
                type="Drawer"
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
                <View style={styles.PlusView}>
                    <Text style={styles.JobDscrptn}>Job Description wr</Text>
                    <TouchableOpacity onPress={() => props.onPressAdd()}  >
                        <Image style={styles.PlusImge} source={require('../../../../Assets/qty_minus_icon3.png')} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={props?.tableData}
                    renderItem={({ item, index }) => props._handleTableData(item, index)}
                />
            </View>
        </KeyboardAvoidingView >
    )
}
export default JobManagementList
