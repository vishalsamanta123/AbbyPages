import React from 'react';
import { View, Text } from 'react-native';
import CommonStyles from '../../../../Utils/CommonStyles';
import styles from './styles';
import Button from '../../../../Components/Button';
import Input from '../../../../Components/Input';
import Header from '../../../../Components/Header';
import { WHITE_COLOR_CODE } from '../../../../Utils/Constant';
const AddCategoryScreen = (props) => {
    return (
        <View style={CommonStyles.container}>
            <Header
                HeaderText='Add Categories'
                RightImg={null}
            />
            <View style={[CommonStyles.body, { justifyContent: "center", backgroundColor: WHITE_COLOR_CODE }]}>
                <Input
                    onChangeText={(categoryName) => props.setCategoryName(categoryName)}
                    value={props.categoryName}
                    secureTextEntry={false}
                    placeholder="Category Name"
                    InputType="withScroll"
                />
                <Button
                    buttonText="Save"
                    style={{ marginTop: 10 }}
                    onPress={props.onPressSave}
                />
            </View>
        </View>
    );
};
export default AddCategoryScreen;