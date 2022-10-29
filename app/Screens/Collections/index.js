import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    ImageBackground
} from 'react-native';
import styles from './components/styles';
import CollectionsScreen from './components/CollectionsScreen';
import CommonStyles from '../../Utils/CommonStyles';
import { FONT_FAMILY_REGULAR, WHITE_COLOR_CODE } from '../../Utils/Constant';
import { Images } from '../../Utils/images';
const Collections = ({ navigation }) => {
    const [isSelectedCatgory, setIsSelectedCatgory] = useState(0);
    const [dataType, setDataType] =
        useState([
            { id: 0, name: 'Discover' },
            { id: 1, name: 'My Collections' },
            { id: 2, name: 'Following Collections' },
            { id: 3, name: 'Beardo' },
        ]);
    const _handleDataTypeSelected = (index, item) => {
        setIsSelectedCatgory(index)
    };
    const [eventList, setEventList] =
        useState([
            {
                id: 0,
                bannerimg: Images.DEFAULT_BOX_IMG,
                heading: 'My Bookmarks',
                timing: 'Non-Public',
            },
            {
                id: 1,
                bannerimg: Images.DEFAULT_BOX_IMG,
                heading: 'Test Collection',
                timing: 'Non-Public',
            },
        ], []);
    const _renderEventList = (item, index) => {
        return (
            <TouchableOpacity style={styles.mnCon}>
                <ImageBackground
                    style={styles.bannerimg}
                    source={item.bannerimg}
                >
                    <View style={styles.btncon}>
                        <Image source={Images.OTHER_BOOKMARK_IMG} />
                        <Text style={{ fontFamily: FONT_FAMILY_REGULAR, color: WHITE_COLOR_CODE }}> 12</Text>
                    </View>
                </ImageBackground>
                <View style={styles.infobox}>
                    <Text style={styles.hdngtxt}>
                        {item.heading}
                    </Text>
                    <Text style={[styles.text, { fontSize: 14, lineHeight: 25 }]}>
                        {item.timing}
                    </Text>
                </View>
            </TouchableOpacity >
        )
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
    const onPressCreate = () => {

    }
    return (
        <View style={CommonStyles.container}>
            <CollectionsScreen
                dataType={dataType}
                _handleDataTypeSelected={_handleDataTypeSelected}
                isSelectedCatgory={isSelectedCatgory}
                eventList={eventList}
                _renderEventList={_renderEventList}
                _renderCategory={_renderCategory}
                onPressCreate={onPressCreate}
            />
        </View>
    );
};
export default Collections;