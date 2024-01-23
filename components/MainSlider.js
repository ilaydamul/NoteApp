import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Slick from 'react-native-slick';

var styles = StyleSheet.create({
    wrapper: {
        height: "100%"
    },
    slideItem: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        objectFit:"contain"
    },
    slide1: {
        backgroundColor: '#9DD6EB',
        
    },
    slide2: {
        backgroundColor: '#97CAE5',
    },
    slide3: {
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center"
    }
})

export default function MainSlider() {
    return (
        <Slick style={styles.wrapper} showsButtons={false} paginationStyle={{ display: 'none' }}>
            <View style={[styles.slideItem, styles.slide1]}>
                <Image source={require("../assets/img/slide1.webp")}/>
            </View>
            <View style={[styles.slideItem, styles.slide2]}>
                <Image source={require("../assets/img/slide2.webp")}/>
            </View>
            <View style={[styles.slideItem, styles.slide3]}>
                <Image source={require("../assets/img/slide3.webp")}/>
            </View>
        </Slick>
    )
}