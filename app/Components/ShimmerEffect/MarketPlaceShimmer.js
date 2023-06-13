import LinearGradient from "react-native-linear-gradient";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { COLORS, Constants } from "../../Utils/Constant";

const MarketPlaceShimmer = ({type}) => {
    const arr = type === 'list' ? ["", "", "",] : [""];
    console.log('type: ', type);
    return (
        <>
            {arr.map((item) => {
                return (
                    <>
                        {type === 'list' ? <View style={styles.activityCon}>
                            <View style={styles.rowVw}>
                                <ShimmerPlaceHolder
                                    LinearGradient={LinearGradient}
                                    height={120}
                                    width={120}
                                    style={{
                                        height: Constants.windowHeight / 4,
                                        width: '100%',
                                    }}
                                    shimmerColors={COLORS.shimmerColors}
                                />
                                <View style={styles.textVw}>
                                    <ShimmerPlaceHolder
                                        LinearGradient={LinearGradient}
                                        height={15}
                                        width={100}
                                        style={styles.activityNameTxt}
                                        shimmerColors={COLORS.shimmerColors}
                                    />
                                    <ShimmerPlaceHolder
                                        LinearGradient={LinearGradient}
                                        height={10}
                                        width={100}
                                        style={styles.activityRvwTxt}
                                        shimmerColors={COLORS.shimmerColors}
                                    />
                                    <ShimmerPlaceHolder
                                        LinearGradient={LinearGradient}
                                        height={10}
                                        width={200}
                                        style={styles.activityRvwTxt}
                                        shimmerColors={COLORS.shimmerColors}
                                    />
                                </View>
                            </View>
                            <View style={styles.rowVw}>
                                <ShimmerPlaceHolder
                                    LinearGradient={LinearGradient}
                                    height={120}
                                    width={120}
                                    style={{
                                        height: Constants.windowHeight / 4,
                                        width: '100%',
                                    }}
                                    shimmerColors={COLORS.shimmerColors}
                                />
                                <View style={styles.textVw}>
                                    <ShimmerPlaceHolder
                                        LinearGradient={LinearGradient}
                                        height={15}
                                        width={100}
                                        style={styles.activityNameTxt}
                                        shimmerColors={COLORS.shimmerColors}
                                    />
                                    <ShimmerPlaceHolder
                                        LinearGradient={LinearGradient}
                                        height={10}
                                        width={100}
                                        style={styles.activityRvwTxt}
                                        shimmerColors={COLORS.shimmerColors}
                                    />
                                    <ShimmerPlaceHolder
                                        LinearGradient={LinearGradient}
                                        height={10}
                                        width={200}
                                        style={styles.activityRvwTxt}
                                        shimmerColors={COLORS.shimmerColors}
                                    />
                                </View>
                            </View>
                        </View> : type === "detail" ? <View style={styles.activityCon}>
                            <View style={styles.rowVw}>
                                <ShimmerPlaceHolder
                                    LinearGradient={LinearGradient}
                                    height={220}
                                    width={120}
                                    style={{
                                        height: 300,
                                        width: '100%',
                                    }}
                                    shimmerColors={COLORS.shimmerColors}
                                />
                                <View style={styles.textVw}>
                                    <ShimmerPlaceHolder
                                        LinearGradient={LinearGradient}
                                        height={20}
                                        width={100}
                                        style={styles.activityRvwTxt}
                                        shimmerColors={COLORS.shimmerColors}
                                    />
                                    <ShimmerPlaceHolder
                                        LinearGradient={LinearGradient}
                                        height={15}
                                        width={80}
                                        style={styles.activityRvwTxt}
                                        shimmerColors={COLORS.shimmerColors}
                                    />
                                    <ShimmerPlaceHolder
                                        LinearGradient={LinearGradient}
                                        height={15}
                                        width={280}
                                        style={styles.activityRvwTxt}
                                        shimmerColors={COLORS.shimmerColors}
                                    />
                                </View>
                                <View style={{marginHorizontal: 20, marginVertical: 20}}>
                                    <ShimmerPlaceHolder
                                        LinearGradient={LinearGradient}
                                        height={90}
                                        // width={120}
                                        style={{
                                            // height: 300,
                                            width: '100%',
                                            borderRadius: 10
                                        }}
                                        shimmerColors={COLORS.shimmerColors}
                                    />
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                    <ShimmerPlaceHolder
                                        LinearGradient={LinearGradient}
                                        height={30}
                                        // width={120}
                                        style={{
                                            // height: 300,
                                            width: '30%',
                                            borderRadius: 10,
                                            marginHorizontal: 20
                                        }}
                                        shimmerColors={COLORS.shimmerColors}
                                    />
                                    <ShimmerPlaceHolder
                                        LinearGradient={LinearGradient}
                                        height={30}
                                        // width={120}
                                        style={{
                                            // height: 300,
                                            width: '30%',
                                            borderRadius: 10
                                        }}
                                        shimmerColors={COLORS.shimmerColors}
                                    />
                                </View>
                                <ShimmerPlaceHolder
                                    LinearGradient={LinearGradient}
                                    height={220}
                                    width={120}
                                    style={{
                                        height: 300,
                                        width: '100%',
                                        marginTop: 20
                                    }}
                                    shimmerColors={COLORS.shimmerColors}
                                />
                            </View>
                        </View> : null}
                    </>
                );
            })}
        </>
    );
};

export default MarketPlaceShimmer;

const styles = StyleSheet.create({
    activityCon: {
        flexDirection: 'row',
        width: '100%',
    },
    rowVw: {
        margin: 5,
        flex: 1
    },
    activityNameTxt: {
        marginTop: 10
    },
    activityRvwTxt: {
        marginTop: 10
    },
    textVw: {
        marginLeft: 10
    },

});
