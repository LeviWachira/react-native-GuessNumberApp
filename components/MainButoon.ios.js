import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';

const MainButton = props => {

    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.8}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,
    },
    buttonText: {
        color: Colors.buttonText,
        fontSize: 15
    }
})

export default MainButton
