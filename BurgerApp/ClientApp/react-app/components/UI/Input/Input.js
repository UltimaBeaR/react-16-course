import classes from './Input.css';

import React from 'react';

const input = ({ changed, label, elementType, elementConfig, value }) => {
    let inputElement = null;

    switch (elementType) {
        case ('textarea'):
            inputElement = (
                <textarea
                    className={classes.InputElement}
                    {...elementConfig}
                    value={value}
                    onChange={changed}
                />
            );
            break;
        case ('select'):
            inputElement = (
                <select
                    className={classes.InputElement}
                    value={value}
                    onChange={changed}
                >
                    {elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = (
                <input
                    className={classes.InputElement}
                    {...elementConfig}
                    value={value}
                    onChange={changed}
                />
            );
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{label}</label>
            {inputElement}
        </div>
    );
};

export default input;