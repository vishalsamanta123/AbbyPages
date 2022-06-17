import React from 'react';
import GoalPreviewScreen from './components/GoalPreviewScreen';

const GoalPreview = ({navigation}) => {
    const onPressBussinessInfo = () => {
        navigation.navigate('BussinessInfo')
    }
    return(
        <GoalPreviewScreen
        onPressBussinessInfo={onPressBussinessInfo}
        />
    )
}
export default GoalPreview;