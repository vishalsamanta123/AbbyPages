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
const TableManagement = (props) => {
    return (
        <KeyboardAvoidingView style={[CommonStyles.container]}>
            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle='dark-content'
            />
            <Header
                RightImg={null}
                HeaderText={'Table Management List'}
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
                <TouchableOpacity style={styles.PlusView} onPress={() => props.onPressAddTable()}>
                    <Image style={styles.PlusImge} source={require('../../../../Assets/qty_minus_icon3.png')} />
                </TouchableOpacity>
                {
                    props.tableData.length > 0 ?
                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            data={props.tableData}
                            renderItem={({ item, index }) => props._handleTableData(item, index)
                            }
                        />
                        :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>There is no table data.</Text>
                        </View>
                }

            </View>
        </KeyboardAvoidingView>
    )
}
export default TableManagement
