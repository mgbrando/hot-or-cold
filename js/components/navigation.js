import React from 'react';
import {connect} from 'react-redux';

import Instructions from './instructions';
import NewGame from './new-game';
import * as actions from '../actions/index';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.resetGame = this.resetGame.bind(this);
        this.toggleInstructionsModal = this.toggleInstructionsModal.bind(this);
    }

    resetGame() {
        //const repositoryName = this.repositoryNameInput.value;
        this.props.dispatch(actions.resetGame());
    }
    toggleInstructionsModal(event){
    	event.preventDefault();
    	this.props.dispatch(actions.toggleInstructionsModal());
    }
    render() {
        return (
            <nav className="main-nav">
                <Instructions title={this.props.title} steps={this.props.steps} toggleModal={this.toggleInstructionsModal} showInstructionsModal={this.props.showInstructionsModal}/>
                <NewGame resetGame={this.resetGame} />
            </nav>
        );
    }
}

Navigation.defaultProps = {
	title: 'What do I do?',
    steps: ['I pick a random secret number between 1 to 100 and keep it hidden.',
    		'You need to guess until you can find the hidden secret number.',
    		'You will get feedback on how close ("hot") or far ("cold") your guess is.']
};
const mapStateToProps = state => ({
    showInstructionsModal: state.showInstructionsModal
});

export default connect(mapStateToProps)(Navigation);