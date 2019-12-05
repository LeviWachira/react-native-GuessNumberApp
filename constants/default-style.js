import { StyleSheet } from 'react-native'

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
        fontWeight : 'bold'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',

    }
})