import React, { useState } from 'react'

const GuessInput = ({ handleGuessSubmit, condition }) => {
    const [input, setInput] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({ guess: input })
        setInput("")
        handleGuessSubmit(input)
    }

    return (
        <form className="guess-input-wrapper" onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="guess-input">5 letter word:</label>
            <input
                id="guess-input"
                title={"5 letter word"}
                type="text"
                value={input}
                minLength={5}
                maxLength={5}
                required
                pattern="[a-zA-Z]{5}"
                disabled={condition !== "idle"}
                onChange={(event) => setInput(event.target.value.toUpperCase())} />
        </form>
    )
}

export default GuessInput