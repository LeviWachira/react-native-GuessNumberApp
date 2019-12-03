import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.accents,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        color: Colors.accents,
        fontSize: 22
    }
})

export default NumberContainer
