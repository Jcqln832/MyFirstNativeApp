import React, { Component } from 'react'
import { View, Button, StyleSheet, Linking } from 'react-native';

export default function Nav() {
    return (
        <View>
            <Button
                title="Anthem"
                style={styles.button1}
                onPress={() => Linking.openURL('https://anthem.com')}
            />
            <Button
                title="Search"
                style={styles.button1}
                onPress={() => Linking.openURL('https://anthem.com')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {

    },
    button1: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 6,
        borderColor: '#dfdfdf',
        borderWidth: 1,
    },
    button2: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 6,
        borderColor: '#dfdfdf',
        borderWidth: 1,
    }
});