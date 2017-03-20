/*
	Actions that need to be taken:
		1. Select a random number between 1 and 100.
		2. Guess a number.
		3. Give feedback on guess.
*/

export const GET_NUMBER = 'GET_NUMBER';
export const getNumber = () => {
	const randomNumber = Math.floor(Math.random() * 6) + 1;
	return {
		type: GET_NUMBER,
		randomNumber
	};
};

export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = (number) => ({
		type: GUESS_NUMBER,
		number
});

export const GET_FEEDBACK = 'GET_FEEDBACK';
export const getFeedback = (numberGuessed, numberToGuess) => ({
		type: GET_FEEDBACK,
		numberGuessed, 
		numberToGuess
});
/*const randomNumberAction = generateRandomNumber();
const guessNumberAction = guessNumber();
const getFeedbackAction = getFeedback();*/