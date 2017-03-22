import React from 'react';

import Navigation from './navigation';

function Header(props){
        return (
            <header className="main-header">
                <Navigation />
                <h1>{props.title}</h1>
            </header>
        );
}

Header.defaultProps = {
    title: "Hot or Cold"
};

export default Header;