import React, { useState } from 'react';
import {
    View,
} from 'react-native';
import CommonStyles from '../../../Utils/CommonStyles';
import Goals from './component/Goals/Goals';
const BusinessInfoIndex = () => {
    //goal
    const [textOptn, setTextOptn] = useState(false)
    const [callingOptn, setCallingOptn] = useState(false)
    const [WebsiteClick, setWebsiteClick] = useState(false)
    const onPressTextOptnGoal = () => {
        setTextOptn(!textOptn)
    }
    const onPressCallingGoal = () => {
        setCallingOptn(!callingOptn)
    }
    const onPressWebsiteGoal = () => {
        setWebsiteClick(!WebsiteClick)
    }
    const onPressNextGoal = () => {
        navigation.navigate('AddText')
    }
    const onPressPreviewGoal = () => {
        navigation.navigate('GoalPreview')
    }

    return (
        <View style={CommonStyles.container}>
            <Goals
                onPressTextOptn={onPressTextOptnGoal}
                onPressCalling={onPressCallingGoal}
                onPressWebsite={onPressWebsiteGoal}
                textOptn={onPressTextOptnGoal}
                callingOptn={callingOptn}
                WebsiteClick={WebsiteClick}
                onPressNext={onPressNextGoal}
                onPressPreview={onPressPreviewGoal}
            />
            
        </View>
    )
}
export default BusinessInfoIndex;