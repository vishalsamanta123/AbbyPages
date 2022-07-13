import React from 'react';
import {
    View,
    StatusBar,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import Header from '../../../Components/Header';
import CommonStyles from '../../../Utils/CommonStyles';
import { WHITE_COLOR_CODE, BLACK_COLOR_CODE, FONT_FAMILY_REGULAR } from '../../../Utils/Constant';
const AddLocationScreen = (props) => {
    return (
        <KeyboardAvoidingView style={[CommonStyles.container]}>
            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle='dark-content'
            />
            <Header
                RightImg={null}
                HeaderText={'Add a new location'}
            />
            <View style={[CommonStyles.body, { backgroundColor: WHITE_COLOR_CODE, justifyContent: 'center' }]}>
                <ScrollView keyboardShouldPersistTaps={"always"}>
                    {/* <Input
                        onChangeText={(locationName) => props.setAddress({
                            ...props.Address,
                            location: locationName
                        })}
                        value={props.Address.location}
                        secureTextEntry={false}
                        placeholder="Location Name (home or office)"
                        InputType="withScroll"
                    /> */}
                    <GooglePlacesAutocomplete
                        placeholder='Street Address'
                        fetchDetails={true}
                        onPress={(data, details = null) => {
                            props.setAddress({
                                ...props.Address,
                                location: details.formatted_address,
                                latitude: details.geometry.location.lat,
                                longitude: details.geometry.location.lng
                            })
                        }}
                        onChangeText={
                            (address) => props.setAddress({
                                ...props.Address,
                                location: address
                            })}
                        value={props.Address.address}
                        query={{
                            key: 'AIzaSyDdLk5tb75SiJvRk9F2B4almu-sBAi1-EM',
                            language: 'en',
                        }}
                        styles={{
                            textInputContainer: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                height: 70,
                                margin: 10,
                                marginLeft: 17,
                                marginRight: 17,
                                borderColor: '#d8d8d8',
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: "center"
                            },
                            textInput: {
                                fontSize: 16,
                                color: BLACK_COLOR_CODE,
                                fontFamily:FONT_FAMILY_REGULAR
                            },
                            listView: {
                                backgroundColor: WHITE_COLOR_CODE,
                            }
                        }}
                        minLength={2}
                        autoFocus={false}
                        returnKeyType={'default'}
                    />
                    <Input
                        onChangeText={(zip_code) => props.setAddress({
                            ...props.Address,
                            pincode: zip_code
                        })}
                        value={props.Address.pincode}
                        secureTextEntry={false}
                        placeholder="Zip Code"
                        InputType="withScroll"
                        keyboardType="phone-pad"
                    />
                    <Button
                        buttonText="Save Changes"
                        buttonLabelStyle={styles.SaveBtnTxt}
                        onPress={props.onPressSave}
                        style={{ marginTop: 5 }}
                    />
                    <Button
                        buttonText="Cancel"
                        buttonLabelStyle={styles.CancelBtnTxt}
                        onPress={props.onPressCancelBtn}
                        style={styles.CancelBtnStyle}
                    />
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}
export default AddLocationScreen;