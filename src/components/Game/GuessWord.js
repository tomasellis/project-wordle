import React from "react";
import { range } from "../../utils";
import { checkGuess } from '../../game-helpers'

const GuessWord = ({ guess, answer }) => {

    const res = checkGuess(guess?.value, answer)

    return (
        <p className="guess">
            {range(5).map((num) =>
                <span
                    key={num}
                    className={`cell ${res ? res[num].status : ""}`}
                >
                    {guess ?
                        guess.value[num]
                        : undefined
                    }
                </span>
            )}
        </p>
    )
}

export default GuessWord