import React from 'react'
import {
    View,
    Text, 
    StyleSheet,
    TextInput
} from 'react-native'

const Input = props => {
    return (
        <TextInput {...props} style={{ ...styles.input, ...props.style }} />
    )
}
const styles = StyleSheet.create({
    input: {
        height: 50,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        padding: 0,
    }
})

export default Input
