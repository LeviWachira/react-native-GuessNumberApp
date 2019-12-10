import React from 'react'
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from 'react-native'
import Colors from '../constants/Colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
    const { roundsNumbers, userNumber, onRestart } = props
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={styles.title}>Game is over!!</Text>
                <View style={styles.imageContainer}>
                    <Image style={styles.image}
                        source={require('../assets/success.png')}
                        resizeMode='cover'
                    />
                </View >
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{roundsNumbers}</Text> rounds to </Text>
                    <Text style={styles.resultText}> guess a number <Text style={styles.highlight}>{userNumber}</Text></Text>
                    </View>
                    {/* <Button title="NEW GAME" onPress={onRestart} color={Colors.primary} /> */}
                    <MainButton onPress={onRestart}
                        color={Colors.primary}
                    >
                        NEW GAME
                    </MainButton>
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginVertical : 10 ,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.65,
        height: Dimensions.get('window').width * 0.65,
        borderRadius: Dimensions.get('window').width * 0.65 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    image: {
        width: '100%',
        height: '100%',
    },
    resultContainer: {
        marginVertical: Dimensions.get('window').height / 60,
        marginHorizontal: 30,
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
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
