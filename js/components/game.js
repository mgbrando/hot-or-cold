import React from 'react';

import Header from './header';
import GuessSection from './guess-section';

function Game(props){
        return (
            <div className="game">
                <div className="game-container">
                    <Header />
                    <GuessSection />
                </div>
            </div>
        );
}

export default Game;