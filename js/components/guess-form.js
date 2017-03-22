import React from 'react';

function GuessForm(props){
        return (
            <form className="guess-form" onSubmit={(event) => {event.preventDefault(); props.guessNumber();}}>
                <input id="guess-input" name="guess-input" type="text" placeholder="Enter your Guess" onChange={props.getInput} />
                <button type="submit">Guess</button>
            </form>
        );
}

export default GuessForm;