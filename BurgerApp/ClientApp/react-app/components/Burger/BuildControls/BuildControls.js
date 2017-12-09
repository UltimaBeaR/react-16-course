import classes from './BuildControls.css';

import React from 'react';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
];

const buildControls = ({ price, disabled, ordered, purchasable, ingredientAdded, ingredientRemoved }) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{price.toFixed(2)}</strong></p>
            {
                controls.map(control => (
                    <BuildControl
                        key={control.type}
                        label={control.label}
                        added={() => ingredientAdded(control.type)}
                        removed={() => ingredientRemoved(control.type)}
                        disabled={disabled[control.type]}
                    />
                ))
            }
            <button
                className={classes.OrderButton}
                disabled={!purchasable}
                onClick={ordered}
            >ORDER NOW</button>
        </div>
    );
};

export default buildControls;