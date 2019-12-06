import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        marginVertical: 10,
        fontSize: 19,
        fontFamily: 'Cochin',
        fontWeight: 'bold'
    },
    inputContainer: {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal : 15
    },
    // button: {
    //     // width: 100
    //     width : Dimensions.get('window').width / 4
    // },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',

    }
})