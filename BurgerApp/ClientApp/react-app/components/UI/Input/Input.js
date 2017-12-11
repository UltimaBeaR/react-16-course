import classes from './Input.css';

import React from 'react';

const input = ({ invalid, shouldValidate, touched, changed, label, elementType, elementConfig, value }) => {
    let inputElement = null;

    const inputClasses = [classes.InputElement];

    if (invalid && shouldValidate && touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (elementType) {
        case ('textarea'):
            inputElement = (
                <textarea
                    className={inputClasses.join(' ')}
                    {...elementConfig}
                    value={value}
                    onChange={changed}
                />
            );
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
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
                    className={inputClasses.join(' ')}
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