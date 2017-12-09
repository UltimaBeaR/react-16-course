import classes from './Backdrop.css';

import React from 'react';

const backdrop = ({ show, clicked }) => (
    show ? <div className={classes.Backdrop} onClick={clicked}></div> : null
);

export default backdrop;