import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from './components/Header'
import StartGameScreen from './screen/StartGameScreen'
import GameScreen from './components/GameScreen'

export default function App() {
  const [userNumber, SetUserNumber] = useState();

  const startGameHandle = selectNumber => {
    SetUserNumber(selectNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandle} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber}/>;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})



