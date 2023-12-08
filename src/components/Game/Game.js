import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from './GuessInput';
import GuessResults from './GuessResults';
import GuessSlots from './GuessSlots';
import EndBanner from './EndBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = useState([])

  const handleGuessSubmit = (guess) => {
    const nextGuesses = [...guesses, { value: guess, id: `${guess}-${Math.random()}` }]

    let nextCondition = "idle"

    if (guess === answer) {
      nextCondition = "win"
      setCondition(nextCondition)
    }

    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED && nextCondition !== "win") setCondition("lose")

    setGuesses(nextGuesses)
  }

  const [condition, setCondition] = useState("idle")

  return (
    <>
      <EndBanner condition={condition} answer={answer} guesses={guesses} />
      <GuessSlots guesses={guesses} answer={answer} />
      <GuessResults guesses={guesses}>
      </GuessResults>
      <GuessInput handleGuessSubmit={handleGuessSubmit} condition={condition}>
      </GuessInput>
    </>);
}

export default Game;
