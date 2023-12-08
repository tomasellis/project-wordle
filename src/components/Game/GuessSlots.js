import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import GuessWord from "./GuessWord";

const GuessSlots = ({ guesses, answer }) => {

    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map((row) => <GuessWord key={row} guess={guesses[row]} answer={answer} />)}
        </div>
    )
}

export default GuessSlots