import classes from './Input.css';

import React from 'react';

const input = (props) => {
    let inputElement = null;

    const newProps = {...props};
    delete newProps.inputType;

    switch (props.inputType) {
        case ('textarea'):
            inputElement = <textarea className={classes.InputElement} {...newProps} />;
            break;
        default:
            inputElement = <input className={classes.InputElement} {...newProps} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;