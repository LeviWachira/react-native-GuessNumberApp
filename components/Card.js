import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = props => {
    return (
        <View style={{ ...styles.card , ...props.style}}>
            {props.children}
        </View >
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 6,
        shadowOpacity: 2.6,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 8,
    }
})

export default Card
