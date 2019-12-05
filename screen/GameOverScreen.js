import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import Colors from '../constants/Colors'

const GameOverScreen = props => {
    const { roundsNumbers, userNumber, onRestart } = props
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Game is over!!</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                    source={require('../assets/success.png')}
                    resizeMode='cover'
                />
            </View>
            <Text style={styles.text}>Your phone need <Text style={styles.highlight}>{roundsNumbers}</Text> round to </Text>
            <Text style={styles.text}> guess a number <Text style={styles.highlight}>{userNumber}</Text></Text>
            <Button title="NEW GAME" onPress={onRestart} color={Colors.primary} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 15
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 15,
        fontWeight: 'normal',
        marginBottom: 10
    },
    highlight: {
        color: Colors.textValue,
    }
})

export default GameOverScreen
