import classes from './BuildControl.css';

import React from 'react';

const buildControl = ({ label, disabled, added, removed }) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{label}</div>
            <button className={classes.Less} onClick={removed} disabled={disabled}>Less</button>
            <button className={classes.More} onClick={added}>More</button>
        </div>
    );
};

export default buildControl;