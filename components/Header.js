import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native'
import Colors from '../constants/Colors'

const Header = props => {
    return (
        <View style={{...styles.headerBase , ...Platform.select({ ios : styles.headerIOS , android : styles.headerAndroid})}}>
            <Text style={styles.headerTitle}>
                {props.title}
            </Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    headerBase: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 70
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    },
    headerIOS:{
        backgroundColor : 'white' ,
        borderBottomColor : '#ccc' ,
        borderBottomWidth : 1
    },
    headerAndroid: {
        backgroundColor : Colors.header , 
    }
})

export default Header
