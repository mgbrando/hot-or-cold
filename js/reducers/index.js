import * as actions from '../actions/index';

const initialRepositoryState = {
                                number: Math.floor(Math.random() * 100) + 1,
                                guesses: [],
                                correct: false,
                                feedback: "Make your Guess!",
                                input: "",
                                showInstructionsModal: false
};

export const gameReducer = (state=initialRepositoryState, action) => {
    if (action.type === actions.RESET_GAME) {
        return Object.assign({}, state, {number: Math.floor(Math.random() * 100) + 1, guesses: [], correct: false, feedback: "Make your Guess!", input: ""});
    }
    else if (action.type === actions.GUESS_NUMBER) {
        // Find the index of the matching repository
        let correct = false;
        let feedback = "";
        if(action.number === state.number){
            correct = true;
            feedback = "You Won. Click new game to play again.";
        }
        else if(Math.abs(state.number - action.number) <= 5){
            feedback = "hot";
        }
        else if(Math.abs(state.number - action.number) <= 10){
            feedback = "warm";
        }
        else if(Math.abs(state.number - action.number) <= 25){
            feedback = "cold";
        }
        else{
            feedback = "frigid";
        }
        return Object.assign({}, state, {guesses: [...state.guesses, action.number], correct: correct, feedback: feedback, input: ''});
    }
    else if(action.type === actions.TYPE_INPUT){
        return Object.assign({}, state, {input: action.input});
    }
    else if(action.type === actions.TOGGLE_INSTRUCTIONS_MODAL){
        return Object.assign({}, state, {showInstructionsModal: !state.showInstructionsModal});
    }
    else if(action.type === actions.FETCH_FEWEST_GUESSES_SUCCESS){
        return Object.assign({}, state, {fewestGuesses: action.fewestGuesses});
    }
    else if(action.type === actions.FETCH_FEWEST_GUESSES_SAVE_SUCCESS){
        if(typeof action.fewestGuesses === Number)
            return Object.assign({}, state, {fewestGuesses: action.fewestGuesses});
        else{
            console.log(action.fewestGuesses);
        }
    }

    return state;
};