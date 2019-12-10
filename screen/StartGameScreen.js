import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import DefaultStyles from '../constants/default-style';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {

    const [enterValue, setEnterValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectNumber, setSelectNumber] = useState();
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

    const numberInputHandle = textInput => {
        setEnterValue(textInput.replace(/[^0-9]/g, ''))
    }

    const resetInputHandle = () => {
        setEnterValue('');
        setConfirmed(false);
    }

    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        };
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

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
            <Card style={DefaultStyles.summaryContainer}>
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
        <ScrollView>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() =>
                    Keyboard.dismiss()}>
                    <View style={DefaultStyles.screen}>
                        <Text style={DefaultStyles.title}>Start Game</Text>
                        <Card style={DefaultStyles.inputContainer}>
                            <Text>
                                This Guess Number
                </Text>
                            <Input onChangeText={numberInputHandle}
                                value={enterValue}
                                style={DefaultStyles.input}
                                blurOnSubmit={true}
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='numeric'
                                maxLength={2}
                            />
                            <View style={DefaultStyles.buttonContainer}>
                                <Button style={{ width: buttonWidth }}
                                    title="RESET"
                                    color={Colors.accents}
                                    onPress={resetInputHandle}
                                />
                                <Button style={{ width: buttonWidth }}
                                    title="CONFIRM"
                                    color={Colors.primary}
                                    onPress={confirmInputHandle}
                                />
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback >
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen
