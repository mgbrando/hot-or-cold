import React from 'react';
import {connect} from 'react-redux';

import Feedback from './feedback';
import GuessForm from './guess-form';
import GuessCounter from './guess-counter';
import GuessList from './guess-list';
import * as actions from '../actions/index';

export class GuessSection extends React.Component {
    constructor(props) {
        super(props);
        this.resetGame = this.resetGame.bind(this);
        this.guessNumber = this.guessNumber.bind(this);
        this.getInput = this.getInput.bind(this);
    }

    resetGame() {
        //const repositoryName = this.repositoryNameInput.value;
        this.props.dispatch(actions.resetGame());
    }
    guessNumber() {
        //const repositoryName = this.repositoryNameInput.value;
        this.props.dispatch(actions.guessNumber(parseInt(this.props.input)));
        //if(this.props.guesses.length < this.props.fewestGuesses)
        if(this.props.correct)
            this.props.dispatch(actions.saveFewestGuesses(parseInt(this.props.guesses.length)));
        document.getElementById('guess-input').value='';
    }
    getInput(event){
        this.props.dispatch(actions.getInput(event.target.value));
    }
    componentDidMount(){
        this.props.dispatch(actions.fetchFewestGuesses());
    }
    render() {

        return (
            <div className="guessForm">
                <Feedback message={this.props.message} />
                <GuessForm guessNumber={this.guessNumber} getInput={this.getInput} />
                <GuessCounter guesses={this.props.guesses.length} fewestGuesses={this.props.fewestGuesses}/>
                <GuessList guesses={this.props.guesses} />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    message: state.feedback,
    guessNumber: state.number,
    guesses: state.guesses,
    input: state.input,
    fewestGuesses: state.fewestGuesses,
    correct: state.correct
});

export default connect(mapStateToProps)(GuessSection);