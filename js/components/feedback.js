import React from 'react';

function Feedback(props){
        return (
            <div className="feedback">
                <span>{props.message}</span>
            </div>
        );
}

export default Feedback;