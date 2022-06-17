import React, { useState } from 'react';
import AddTextPreviewScreen from './components/AddTextPreviewScreen';

const AddTextPreview = ({navigation}) => {
    const onPressGoalPreview = () => {
        navigation.navigate('GoalPreview')
    }
    return (
        <AddTextPreviewScreen
            onPressGoalPreview={onPressGoalPreview}
        />
    )
}
export default AddTextPreview;