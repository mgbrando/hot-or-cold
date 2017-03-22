import React from 'react';

function GuessCounter(props){
        return (
            <div className="guess-counter-container">
                <span>Guess #<span className="guess-counter">{props.guesses}</span>!</span>
            </div>
        );
}

GuessCounter.defaultProps = {
    guesses: 0
};

export default GuessCounter;