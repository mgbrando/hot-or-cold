import * as actions from '../actions/index';

const initialRepositoryState = {
                                number: Math.floor(Math.random() * 100) + 1,
                                guesses: [],
                                correct: false,
                                feedback: ""
};

export const repositoryReducer = (state=initialRepositoryState, action) => {
    if (action.type === actions.RESET_GAME) {
        return Object.assign({}, state, {number: Math.floor(Math.random() * 100) + 1, guesses: [], correct: false, feedback: ""});
    }
    else if (action.type === actions.GUESS_NUMBER) {
        // Find the index of the matching repository
        let correct = false;
        let feedback = "";
        if(action.number === state.number){
            correct = true;
            feedback = "Good guess! You win!";
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
        return Object.assign({}, state, {guesses: [...state.guesses, action.number], correct: correct, feedback: feedback});
    }

    return state;
};