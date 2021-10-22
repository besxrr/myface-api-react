import React from 'react';
import "./PopUp.scss"

export function PopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-button" onClick={() => props.setTrigger(false)}>❌</button>
                { props.children }
            </div>
        </div>
    ) : "";
};

