import classes from './NavigationItem.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItem = ({ link, exact, active, children }) => (
    <li className={classes.NavigationItem}>
        <NavLink
            to={link}
            exact={exact}
            activeClassName={classes.active}
        >
            {children}
        </NavLink>
    </li>
);

export default navigationItem;