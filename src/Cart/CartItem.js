import React, { Component } from 'react';
import './CartItem.css';

// convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class CartItem extends Component {

    static defaultProps = { 
        feature: [], 
        selectedOption: []
    };

    render() {

        return (
            <div className="summary__option">
                <div className="summary__option__label">{this.props.feature} </div>
                <div className="summary__option__value">{this.props.selectedOption.name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(this.props.selectedOption.cost)}
                </div>
            </div>
        )

    }
}

export default CartItem;