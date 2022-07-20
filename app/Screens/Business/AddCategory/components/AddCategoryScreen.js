import React from 'react';
import { View, FlatList, Modal, Text, TouchableOpacity, Alert, Image } from 'react-native';
import CommonStyles from '../../../../Utils/CommonStyles';
import Button from '../../../../Components/Button';
import Input from '../../../../Components/Input';
import Header from '../../../../Components/Header';
import { WHITE_COLOR_CODE } from '../../../../Utils/Constant';
import styles from './styles';
const AddCategoryScreen = (props) => {
    return (
        <View style={CommonStyles.container}>
            <Header
                HeaderText={props.editDeleteType ? 'Categories' : 'Add Categories'}
                RightImg={null}
            />
            {props.editDeleteType ?
                <FlatList
                    data={props.getCategoryList}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => props._renderCategory(item, index)}
                />
                :
                < View style={[CommonStyles.body, { justifyContent: "center", backgroundColor: WHITE_COLOR_CODE }]}>
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
            }
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.editModalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    props.setEditModalVisible(!props.editModalVisible);
                }} >
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.centeredView}>
                    <View style={styles.alertBackground}>
                        <View style={styles.selectyoursize}>
                            <Text style={styles.sizeslct}>Edit Categories</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.cancelvwe}
                            underlayColor={"#F5F5F5"}
                            onPress={() => props.setEditModalVisible(false)}>
                            <Image style={styles.closeicon}
                                source={require('../../../../Assets/cancelModalBtn.png')}
                            />
                        </TouchableOpacity>
                        <Input
                            onChangeText={(editCategory) => {
                                props.setEditCategoryLabel({ ...props.editCategoryLabel, category_name: editCategory })
                            }}
                            value={props.editCategoryLabel.category_name}
                            secureTextEntry={false}
                            placeholder="Category Name"
                            InputType="withScroll"
                        />
                        <Button
                            buttonText="Save"
                            style={{ marginTop: 10 }}
                            onPress={() => props._handleEditCategories()}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>

        </View>
    );
};
export default AddCategoryScreen;