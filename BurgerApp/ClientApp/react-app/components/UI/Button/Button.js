import classes from './Button.css';

import React from 'react';

const button = ({clicked, btnType, children}) => (
    <button
        className={[classes.Button, classes[btnType]].join(' ')}
        onClick={clicked}
    >
        {children}
    </button>
);

export default button;