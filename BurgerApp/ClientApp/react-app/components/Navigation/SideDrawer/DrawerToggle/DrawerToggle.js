import classes from './DrawerToggle.css';

import React from 'react';

const drawerToggle = ({ clicked }) => (
    <div className={classes.DrawerToggle} onClick={clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;