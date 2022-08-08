import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';
import styles from './components/styles';
import JobManagementList from './components/JobManagementList';
import { apiCall } from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import CommonStyles from '../../../Utils/CommonStyles';
import moment from 'moment';

const JobManagementListView = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [businessJobList, setJobBusinessList] = useState([]);
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
    const DeleteMsg = (item) =>
    Alert.alert(
        "",
        "Are you sure you want delete this Job?",
        [
            {
                text: "Cancel",
                style: "cancel"
            },
            { text: "OK", onPress: () => jobStatus({
                id: item?.job_id,
                status: item?.job_status,
                is_delete: 1
            }) }
        ],
        { cancelable: false }
    );

    const getBussinessJobList = async () => {
        // setVisible(true);
        try {
            const params = {
                limit: 2,
                offset: 0
            }
            const response = await apiCall('POST', ENDPOINTS.GET_BUSINESS_JOB_LIST, params)
            // console.log('Job list', response.data.data);
            if (response.status === 200) {
                setJobBusinessList(response.data.data)
                setVisible(false);
            }
            else {
                setVisible(false);
            }
        }
        catch (error) {
            console.log('error: ', error);
            setVisible(false);
        }
    }
    const jobStatus = async ({id, status, is_delete}) => {
        // setVisible(true);
        try {
            const params = {
                is_delete: is_delete,
                job_id: id,
                job_status: status,
            }
            const response = await apiCall('POST', ENDPOINTS.jobRemoveStatusUpdate, params)
            console.log('Job list', response.data);
            if (response.status === 200) {
                getBussinessJobList()
                setVisible(false);
            }
            else {
                setVisible(false);
            }
        }
        catch (error) {
            console.log('error: ', error);
            setVisible(false);
        }
    }

    const _handleTableData = (item) => {
        const date = moment(item?.create_date).startOf('day').fromNow();
        // console.log('item: ', item);
        return (
            <View style={styles.MainContain}>
                <Text style={styles.DescrptnTextStyle}>
                    Company name : {item?.company_name}
                </Text>
                <View style={[styles.JobContainer, { marginBottom: 5 }]}>
                    <Text style={styles.TableNottEXT}>{item?.job_title}</Text>
                    <Text style={styles.DescrptionText}>${item?.monthly_in_hand_salary_from} - ${item?.monthly_in_hand_salary_to}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={styles.HeadingTxt} >Indore</Text>
                    <Text style={[styles.HeadingTxt,]}>
                        Full-Time
                    </Text>
                </View>
                <Text style={[styles.DescrptnTextStyle, { marginBottom: 5 }]}>Posted {date}</Text>
                <Text style={styles.DescrptnTextStyle}>
                    {item?.job_address}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <TouchableOpacity
                        style={styles.switchstyle}
                        onPress={() => jobStatus({
                            id: item?.job_id,
                            status: item?.job_status === 1 ? false : true
                        })}
                    >
                        {item?.job_status === 1 ? (
                            <Image source={require("../../../Assets/active_switch.png")} />
                        ) : (
                            <Image
                                source={require("../../../Assets/unactive_switch.png")}
                            />
                        )}
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('AddJobs',{item})}>
                            <Image
                                source={require('../../../Assets/list_edit_icon.png')}
                             />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft: 10}} onPress={() => DeleteMsg(item)}>
                        <Image
                                source={require('../../../Assets/list_delete_icon.png')}
                             />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    // const _handleTableData = (item) => {
    // console.log('item: ', item);
    //     return (
    //         <View style={styles.MainContain}>
    //             <View style={styles.JobContainer}>
    //                 <Text style={styles.TableNottEXT}>{item?.job_title}</Text>
    //                 <Text style={styles.DescrptionText}>$29.99</Text>
    //             </View>
    //             <Text style={styles.DescrptnTextStyle}>
    //                 {item?.job_description}
    //             </Text>
    //             <Text style={styles.HeadingTxt} >Responsibilty</Text>
    //             <Text style={styles.DescrptnTextStyle}>
    //                 Loren upsum dolor sit amet, consector adipicing elit, sed
    //             </Text>
    //             <Text style={styles.HeadingTxt}>Expereince</Text>
    //             <Text style={styles.DescrptnTextStyle}>
    //                 Loren upsum dolor sit amet, consector adipicing elit, sed
    //             </Text>
    //             <TouchableOpacity
    //                 style={styles.AddBtnTouchable}>
    //                 <Image source={require('../../../Assets/arrow_right_icon.png')} />
    //             </TouchableOpacity>
    //         </View>
    //     )
    // }
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
                businessJobList={businessJobList}
            />
        </View>
    )
}
export default JobManagementListView;