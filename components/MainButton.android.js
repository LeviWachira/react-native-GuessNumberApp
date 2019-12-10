import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback
} from 'react-native';
import Colors from '../constants/Colors';

const MainButton = props => {

    let ButtonComponent = TouchableOpacity;

    if ( Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent onPress={props.onPress} activeOpacity={0.8}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        overflow: 'hidden',
        borderRadius: 25,
    },
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
