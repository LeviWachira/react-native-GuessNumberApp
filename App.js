import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './components/Header'
import StartGameScreen from './screen/StartGameScreen'
import GameScreen from './screen/GameScreen'
import GameOverScreen from './screen/GameOverScreen'

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandle = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandle = selectNumber => {
    setUserNumber(selectNumber);
  };

  const gameOverHandle = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandle} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber}
        onGameOver={gameOverHandle}
      />);
  }
  else if (guessRounds > 0) {
    content = (
      <GameOverScreen roundsNumbers={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandle}
      />);
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



