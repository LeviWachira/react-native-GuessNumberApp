import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Colors from '../constants/Colors'

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.header,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        width: '100%',
        height: 90
    },
    headerTitle: {
        fontSize: 18,
        color: 'white'
    }
})


export default Header
