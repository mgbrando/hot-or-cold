import React from 'react';
import InstructionsModal from './instructions-modal';

function Instructions(props){
	let instructionsModal;
	if(props.showInstructionsModal)
		instructionsModal = <InstructionsModal toggleModal={props.toggleModal} />;
        return (
            <div className="instructions">
                <span className="modal-button" onClick={props.toggleModal}>What?</span>
                {instructionsModal}
            </div>
        );
}

export default Instructions;