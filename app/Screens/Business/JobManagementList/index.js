import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import JobManagementList from './components/JobManagementList';
import styles from './components/styles';
const JobManagementListView = ({ navigation }) => {
    const [tableData, setTableData] = useState([
        {
            id: '0'
        },
        {
            id: '1'
        },
        {
            id: '2'
        }
    ])
    const _handleTableData = () => {
        return (
            <View style={styles.MainContain}>
                <View style={styles.JobContainer}>
                    <Text style={styles.TableNottEXT}>Sr. Management Manager</Text>
                    <Text style={styles.DescrptionText}>$29.99</Text>
                </View>
                <Text style={styles.DescrptnTextStyle}>
                    Loren upsum dolor sit amet, consector adipicing elit, sed
                </Text>
                <Text style={styles.HeadingTxt} >Responsibilty</Text>
                <Text style={styles.DescrptnTextStyle}>
                    Loren upsum dolor sit amet, consector adipicing elit, sed
                </Text>
                <Text style={styles.HeadingTxt}>Expereince</Text>
                <Text style={styles.DescrptnTextStyle}>
                    Loren upsum dolor sit amet, consector adipicing elit, sed
                </Text>
                <TouchableOpacity
                    style={styles.AddBtnTouchable}>
                    <Image source={require('../../../Assets/arrow_right_icon.png')} />
                </TouchableOpacity>
            </View>
        )
    }
    const onPressAdd = () => {
        navigation.navigate('AddJobs')
    }
    return (
        <JobManagementList
            _handleTableData={_handleTableData}
            tableData={tableData}
            onPressAdd={onPressAdd}


        />
    )
}
export default JobManagementListView;