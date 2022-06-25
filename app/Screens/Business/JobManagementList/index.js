import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './components/styles';
import JobManagementList from './components/JobManagementList';
import { apiCall } from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import CommonStyles from '../../../Utils/CommonStyles';

const JobManagementListView = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [businessList, setBusinessList] = useState('');
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
    useEffect(() => {
        getBussinessJobList();
    }, [])
    const getBussinessJobList = async () => {
        // setVisible(true)
        try {
            const params = {
                business_type: '2'
            }
            const response = await apiCall('POST', ENDPOINTS.BUSINESS_LIST,params)
            if (response.status === 200) {
                setBusinessList(response.data.data)
            }
        }
        catch (error) {
            console.log('error: ', error);
        }
    }
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
        <View style={CommonStyles.container}>
            {visible && <Loader state={visible} />}
            <JobManagementList
                _handleTableData={_handleTableData}
                tableData={tableData}
                onPressAdd={onPressAdd}
                businessList={businessList}
            />
        </View>
    )
}
export default JobManagementListView;