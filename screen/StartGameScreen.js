import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import DefualtStyles from '../constants/default-style';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {

    const [enterValue, setEnterValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectNumber, setSelectNumber] = useState();

    const numberInputHandle = textInput => {
        setEnterValue(textInput.replace(/[^0-9]/g, ''))
    }

    const resetInputHandle = () => {
        setEnterValue('');
        setConfirmed(false);
    }

    const confirmInputHandle = () => {
        const chosenNumber = parseInt(enterValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(`Invalid number`,
                `Number has to be a number between 1 and 99 `,
                [
                    { text: `Okay`, style: 'destructive', onPress: resetInputHandle }
                ])
            return;
        }
        setConfirmed(true);
        setEnterValue('');
        setSelectNumber(chosenNumber);
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={DefualtStyles.summaryContainer}>
                <Text>Your Number</Text>
                <NumberContainer >
                    {selectNumber}
                </NumberContainer>
                <MainButton onPress={() => props.onStartGame(selectNumber)}>
                    START GAME
                </MainButton>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() =>
            Keyboard.dismiss()}>
            <View style={DefualtStyles.screen}>
                <Text style={DefualtStyles.title}>Start Game</Text>
                <Card style={DefualtStyles.inputContainer}>
                    <Text>
                        This Guess Number
                </Text>
                    <Input onChangeText={numberInputHandle}
                        value={enterValue}
                        style={DefualtStyles.input}
                        blurOnSubmit={true}
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='numeric'
                        maxLength={2}
                    />
                    <View style={DefualtStyles.buttonContainer}>
                        <Button title="RESET" color={Colors.accents}
                            onPress={resetInputHandle}
                        />
                        <Button title="CONFIRM" color={Colors.primary}
                            onPress={confirmInputHandle}
                        />
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback >
    )
}

export default StartGameScreen
