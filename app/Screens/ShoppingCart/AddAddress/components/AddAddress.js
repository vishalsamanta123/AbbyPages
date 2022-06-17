import React from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Header from '../../../../Components/Header';
import CommonStyles from '../../../../Utils/CommonStyles';
import Input from '../../../../Components/Input';
import Button from '../../../../Components/Button';
import styles from './styles';
import { FONT_FAMILY_REGULAR, GREY_COLOR_CODE, FONT_FAMILY_BOLD, LINE_COMMON_COLOR_CODE, YELLOW_COLOR_CODE, WHITE_COLOR_CODE } from '../../../../Utils/Constant';
const AddAddress = (props) => {
    return (
        <KeyboardAvoidingView style={[CommonStyles.container]}>
            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle='dark-content'
            />
            <Header
                RightImg={require('../../../../Assets/trash_icon_header.png')}
                HeaderText={'Add Address'}
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE }]}>
                <ScrollView>
                    <Input
                        onChangeText={(Country) => props.setCountry(Country)}
                        value={props.Country}
                        placeholder="Country"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(firstName) => props.setFirstName(firstName)}
                        value={props.firstName}
                        placeholder="First Name"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(lastName) => props.setLastName(lastName)}
                        value={props.lastName}
                        placeholder="Last Name"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(CompanyName) => props.setCompanyName(CompanyName)}
                        value={props.CompanyName}
                        placeholder="Company Name"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(Address) => props.setAddress(Address)}
                        value={props.Address}
                        placeholder="Address"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(cityName) => props.setCityName(cityName)}
                        value={props.cityName}
                        placeholder="City / Town"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(EmailAddress) => props.setEmailAddress(EmailAddress)}
                        value={props.EmailAddress}
                        placeholder="Email"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(mobileNumber) => props.setMobileNumber(mobileNumber)}
                        value={props.mobileNumber}
                        placeholder="Mobile Number"
                        InputType="withScroll"
                    />
                    <Input
                        onChangeText={(notes) => props.setNotes(notes)}
                        value={props.notes}
                        placeholder="Notes (optional)"
                        InputType="withScroll"
                    />
                    <View style={styles.ConfirmationContain}>
                        <TouchableOpacity onPress={() => props.onPressCheckBox()}>
                            {props.SaveCheckBox ?
                                <Image style={{ width: 25, height: 25 }} source={require('../../../../Assets/checked_box.png')} />
                                :
                                <Image style={{ width: 25, height: 25 }} source={require('../../../../Assets/uncheck_box.png')} />
                            }
                        </TouchableOpacity>
                        <Text style={styles.HeadingParatTXT}>Save this address for future orders</Text>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Button buttonText="Save Address"
                            onPress={() => props.onPressSave()}
                        />
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}
export default AddAddress
