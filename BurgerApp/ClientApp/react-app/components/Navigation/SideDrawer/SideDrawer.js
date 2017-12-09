import classes from './SideDrawer.css';

import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import EmptyHoc from '../../../hoc/EmptyHoc/EmptyHoc';

const sideDrawer = ({ open, closed }) => {
    const attachedClasses = [
        classes.SideDrawer,
        open ? classes.Open : classes.Close
    ];

    return (
        <EmptyHoc>
            <Backdrop show={open} clicked={closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </EmptyHoc>
    );
};

export default sideDrawer;