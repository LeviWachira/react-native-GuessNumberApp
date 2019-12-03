import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import NumberContainer from './NumberContainer';
import Card from './Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
}

const GameScreen = props => {

    const [currentGuess, SetCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );
    const currentLow = useRef(1);
    const currentHigh = useRef(10);

    const nextGuessHandle = direction => {
        if ((direction === 'lower' && props.userChoice > currentGuess) ||
            (direction === 'greater' && props.userChoice < currentGuess)) {
            Alert.alert(`Don't lie`,
                `You Know that is wrong ...`,
                [
                    { text: 'Sorry', style: 'cancel' }
                ]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        }
        else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        SetCurrentGuess(nextNumber);
    };

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandle.bind(this, 'lower')} />
                <Button title="GREATER" onPress={nextGuessHandle.bind(this, 'greater')} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen
