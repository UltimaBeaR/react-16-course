import classes from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

import React from 'react';

const logo = ({ height }) => (
    <div className={classes.Logo} style={{ height: height }}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;