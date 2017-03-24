import React from 'react';

function GuessForm(props){
        return (
            <form className="guess-form" onSubmit={(event) => {event.preventDefault(); props.guessNumber();}}>
                <input id="guess-input" name="guess-input" type="number" min="1" step="1" placeholder="Enter your Guess" onChange={props.getInput} required />
                <button type="submit">Guess</button>
            </form>
        );
}

export default GuessForm;