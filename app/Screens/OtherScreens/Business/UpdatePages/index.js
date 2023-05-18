import React, { useState, Fragment } from 'react';
import UpdatePages from './components/UpdatePages';
import {
    View,
    Image,
    Text,
} from 'react-native';
import styles from './components/styles';
const UpdatePagesView = () => {
    // const [textOptn, setTextOptn] = useState(false)
    // const onPressTextOptn = () => {
    //     setTextOptn(!textOptn)
    // }

    return (
        <UpdatePages
            // onPressTextOptn={onPressTextOptn}
            // textOptn={textOptn}
        />
    )
}
export default UpdatePagesView;