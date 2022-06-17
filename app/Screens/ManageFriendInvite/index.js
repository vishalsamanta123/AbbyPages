import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import ManageFriendInvite from './component/ManageFriendInvite';
import styles from './component/styles';
import { WHITE_COLOR_CODE } from '../../Utils/Constant';
const ManageFriendInviteView = () => {
    const [isSelectedCatgory, setIsSelectedCatgory] = useState(0);
    const [dataType, setDataType] =
        useState([
            { id: 0, name: 'Manage your current friends' },
            { id: 1, name: 'Pending friend request' },
            // { id: 2, name: 'Following Collections' },
            // { id: 3, name: 'Beardo' },
        ]);
    const _handleDataTypeSelected = (index, item) => {
        setIsSelectedCatgory(index)
    };
    const _renderCategory = (item, index) => {
        const selectedColor = index === isSelectedCatgory ? WHITE_COLOR_CODE : "#ffe98e"
        return (
            <TouchableOpacity
                onPress={() =>
                    _handleDataTypeSelected(index, item)}
                style={styles.lablestyle}>
                <Text style={[
                    styles.txtCat,
                    {
                        color: selectedColor
                    }]}>{item.name}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <ManageFriendInvite
            _renderCategory={_renderCategory}
            _handleDataTypeSelected={_handleDataTypeSelected}
            dataType={dataType}
        />
    )
}
export default ManageFriendInviteView;