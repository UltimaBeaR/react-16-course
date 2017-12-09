import classes from './Burger.css';

import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ({ ingredients }) => {
    let transformedIngredients = Object.keys(ingredients)
        .map(ingredientType => {
            return [...Array(ingredients[ingredientType])].map((_, idx) => {
                return <BurgerIngredient key={ingredientType + idx} type={ingredientType} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length == 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;