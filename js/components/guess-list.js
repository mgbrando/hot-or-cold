import React from 'react';
import Guess from './guess'

function GuessList(props){
        const guesses = props.guesses.map((guess, index) => {
        	console.log(guess);
            return <Guess number={guess} key={index} />;
        });
        return (
            <ul className="guess-list">
            	{guesses}
            </ul>
        );
}

export default GuessList;