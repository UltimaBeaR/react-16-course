import classes from './Order.css';

import React from 'react';

const order = ({ ingredients, price }) => {
    const newIngredients = [];
    
    for (let ingredientName in ingredients) {
        newIngredients.push(
            {
                name: ingredientName,
                amount: ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = newIngredients.map(ig => {
        return (
            <span
                style={{
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    border: '1px solid #ccc',
                    padding: '5px'
                }}
                key={ig.name}
            >
                {ig.name} ({ig.amount})
            </span>
        );
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;