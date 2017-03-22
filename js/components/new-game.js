import React from 'react';

function NewGame(props){
        return (
            <div className="new-game">
            	<span onClick={props.resetGame}>+NewGame</span>
            </div>
        );
}

export default NewGame;