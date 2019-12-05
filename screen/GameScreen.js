import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert
} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import DefualtStyles from '../constants/default-style';
import MainButton from '../components/MainButton';
import Icon from 'react-native-vector-icons/FontAwesome';


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

    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

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
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1)
    };

    return (
        <View style={styles.screen}>
            <Text style={DefualtStyles.title}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>

                <MainButton onPress={nextGuessHandle.bind(this, 'lower')}>
                    <Icon
                        size={25}
                        name='minus'
                        type='font-awesome'
                        color={Colors.buttonText}
                    />
                </MainButton>
                <MainButton onPress={nextGuessHandle.bind(this, 'greater')}>
                    <Icon
                        size={25}
                        name='plus'
                        type='font-awesome'
                        color={Colors.buttonText}
                    />
                </MainButton>
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
        width: 400,
        maxWidth: '90%'
    },
});

export default GameScreen
