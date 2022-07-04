import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import {  YELLOW_COLOR_CODE } from '../Utils/Constant';

function MyTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions.tabBarVisible === false) {
        return null;
    }
    return (
        <View style={{ flexDirection: 'row', height: 55, backfaceVisibility: 'visible', backgroundColor: YELLOW_COLOR_CODE }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        {
                            label === 'Listings' ?
                                <Image
                                    style={{ height: 28, width: 28 }}
                                    source={require('../Assets/listmenucopy.png')} />
                                : label === 'BusinessHome' ?
                                    <Image
                                        source={require('../Assets/search_icon_header.png')} />
                                    : label === 'OpeningHours' ?
                                        <Image
                                            source={require('../Assets/plus_icon_header.png')} />
                                        : label === 'UserProfile' ?
                                            <Image

                                                source={require('../Assets/trash_icon_header.png')} />
                                            : label === 'OrderHistory' ?
                                                <Image
                                                    source={require('../Assets/hamburger_icon.png')} />
                                                : null
                        }
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
export default MyTabBar;