import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Picker } from 'react-native';
import CommonStyles from '../../../../Utils/CommonStyles';
import styles from './styles';
import Button from '../../../../Components/Button';
import Input from '../../../../Components/Input';
import Header from '../../../../Components/Header';
import { WHITE_COLOR_CODE } from '../../../../Utils/Constant';
const AddTableScreen = (props) => {
    return (
        <View style={CommonStyles.container}>
            <Header
                HeaderText={props.HedarType == 'Edit' ? 'Edit Table' : 'Add Table'}
                RightImg={null}
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
                <ScrollView>
                    <Input
                        onChangeText={(tableNumber) => props.setTableNumber(tableNumber)}
                        value={props.tableNumber}
                        secureTextEntry={false}
                        placeholder="Table Number"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(sitingPerson) => props.setSitingPerson(sitingPerson)}
                        value={props.sitingPerson}
                        secureTextEntry={false}
                        placeholder="Siting Person"
                        InputType="withScroll"
                    />
                    <TouchableOpacity onPress={() => props.onPressProfileImage()} style={{ marginTop: 15, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 70, borderRadius: 10, borderWidth: 1, borderColor: '#d8d8d8', width: '90%', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ paddingLeft: 25, fontSize: 17 }}>Table Image</Text>
                            <Image
                                style={{ position: "absolute", right: 30, }}
                                source={require('../../../../Assets/upload_icon_field.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    {
                        props.itemImage ?
                            <View style={{ paddingLeft: 25, paddingTop: 8 }}>
                                <Image
                                    style={styles.ProfileImgStyle}
                                    resizeMode='contain'
                                    source={{ uri: props.itemImage }}
                                />
                            </View>
                            :
                            <View style={{ paddingLeft: 25, paddingTop: 8 }}>
                                {props.tableImg ?
                                    <Image
                                        style={styles.ProfileImgStyle}
                                        resizeMode='contain'
                                        source={{ uri: props.ImgBaseUrl + props.tableImg }}
                                    />
                                    :
                                    null
                                }
                            </View>
                    }
                    <Button
                        buttonText="Save"
                        onPress={props.onPressSave}
                        style={{ marginBottom: 15, marginTop: 10 }}
                    />
                </ScrollView>
            </View>
        </View>
    );
};
export default AddTableScreen;