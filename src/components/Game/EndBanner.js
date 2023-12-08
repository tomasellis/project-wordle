import React from "react";

const EndBanner = ({ condition, answer, guesses }) => {

    switch (condition) {
        case 'win':
            return (
                <div class="happy banner">
                    <p>
                        <strong>Congratulations!</strong> Got it in
                        <strong> {guesses.length} guesses</strong>.
                    </p>
                </div>)
        case 'lose':
            return (
                <div class="sad banner">
                    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
                </div>
            )
        default:
            return <div>Game in progress...</div>;
    }
}

export default EndBanner