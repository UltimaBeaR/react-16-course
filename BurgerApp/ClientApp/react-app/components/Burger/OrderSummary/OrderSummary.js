import React, { Component } from 'react';

import EmptyHoc from '../../../hoc/EmptyHoc/EmptyHoc';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('WillUpdate');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(key =>
                <li key={key}>
                    <span style={{ textTransform: 'capitalize' }}>{
                        key
                    }
                    </span>: {this.props.ingredients[key]}
                </li>
            );

        return (
            <EmptyHoc>
                <h3>Your Order</h3>
                <p>Delisious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </EmptyHoc>
        );
    }
}

export default OrderSummary;