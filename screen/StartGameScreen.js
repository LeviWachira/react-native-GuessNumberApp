import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/Colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

const StartGameScreen = props => {

    const [enterValue, SetEnterValue] = useState('');
    const [confirmed, SetConfirmed] = useState(false);
    const [selectNumber, SetSelectNumber] = useState();

    const numberInputHandle = textInput => {
        SetEnterValue(textInput.replace(/[^0-9]/g, ''))
    }

    const resetInputHandle = () => {
        SetEnterValue('');
        SetConfirmed(false);
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
        SetConfirmed(true);
        SetEnterValue('');
        SetSelectNumber(chosenNumber);
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>Your Number</Text>
                <NumberContainer >
                    {selectNumber}
                </NumberContainer>
                <Button onPress={() => props.onStartGame(selectNumber)}
                    title="START GAME"
                    color={Colors.primary} />
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() =>
            Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>
                        This Guess Number
                </Text>
                    <Input onChangeText={numberInputHandle}
                        value={enterValue}
                        style={styles.input}
                        blurOnSubmit={true}
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='numeric'
                        maxLength={2}
                    />
                    <View style={styles.buttonContainer}>
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        marginVertical: 10,
        fontSize: 15,
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

export default StartGameScreen
