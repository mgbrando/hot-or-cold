import 'isomorphic-fetch';
/*
	Actions that need to be taken:
		1. Select a random number between 1 and 100.
		2. Guess a number.
		3. Give feedback on guess.
*/

export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => {
	//const randomNumber = Math.floor(Math.random() * 100) + 1;
	return {
		type: RESET_GAME/*,
		randomNumber*/
	};
};

export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = (number) => ({
		type: GUESS_NUMBER,
		number
});

export const TYPE_INPUT = 'TYPE_INPUT';
export const getInput = (input) => ({
		type: TYPE_INPUT,
		input
});

export const FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
export const fetchFewestGuessesSuccess = (fewestGuesses) => ({
		type: FETCH_FEWEST_GUESSES_SUCCESS,
		fewestGuesses
});

export const FETCH_FEWEST_GUESSES_SAVE_SUCCESS = 'FETCH_FEWEST_GUESSES_SAVE_SUCCESS';
export const fetchFewestGuessesSaveSuccess = (fewestGuesses) => ({
		type: FETCH_FEWEST_GUESSES_SAVE_SUCCESS,
		fewestGuesses
});

export const fetchFewestGuesses = () => dispatch => {
	const url ='http://localhost:8080/fewest-guesses';
	return fetch(url).then(response => {
		return response.json();
	})
	.then(data =>
		dispatch(fetchFewestGuessesSuccess(data.fewestGuesses))
	);
};
export const saveFewestGuesses = guesses => dispatch => {
	const url ='http://localhost:8080/fewest-guesses';
	const settings = {method: 'post', body: JSON.stringify({guesses: guesses}), headers: {"Content-Type" : "application/json"}};
	return fetch(url, settings).then(response => {
		return response.json();
	})
	.then(data => {
		if(data.fewestGuesses)
			return dispatch(fetchFewestGuessesSaveSuccess(data.fewestGuesses));
		else
			return dispatch(fetchFewestGuessesSaveSuccess(data.message));
	})
};
/*export const GET_FEEDBACK = 'GET_FEEDBACK';
export const getFeedback = (numberGuessed, numberToGuess) => ({
		type: GET_FEEDBACK,
		numberGuessed, 
		numberToGuess
});*/
/*const randomNumberAction = generateRandomNumber();
const guessNumberAction = guessNumber();
const getFeedbackAction = getFeedback();*/