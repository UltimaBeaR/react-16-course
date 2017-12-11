import classes from './Button.css';

import React from 'react';

const button = ({disabled, clicked, btnType, children}) => (
    <button
        disabled={disabled}
        className={[classes.Button, classes[btnType]].join(' ')}
        onClick={clicked}
    >
        {children}
    </button>
);

export default button;