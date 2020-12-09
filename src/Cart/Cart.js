import React, { Component } from 'react';
import './Cart.css';
import CartItem from './CartItem';


class Cart extends Component {

    static defaultProps = { currentSelections: [] };

    render() {

        const summary = Object.keys(this.props.currentSelections).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.currentSelections[feature];
      
            return (
                <li key={featureHash}>
                <CartItem 
                    featureHash={featureHash}
                    feature={feature}
                    selectedOption={selectedOption}
                />
                </li>
            );
        });

        return (
            <div>
                <ul className="summary-list">
                    {summary}
                </ul>
            </div>
        )

    }
}

export default Cart;