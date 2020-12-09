import React, { Component } from 'react';
import './Part.css';
import slugify from 'slugify'; // Normalizes string as a slug 

// convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class Part extends Component {

    static defaultProps = {
        item: [],
        itemHash: [],
        feature: '',
        featureSelection: []
    }

    render() {

        return (
            <div>
                <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={slugify(this.props.feature)}
                    checked={this.props.item.name === this.props.featureSelection.name}
                    onChange={e => this.props.handleUpdateFeature(this.props.feature, this.props.item)}
                />
                <label htmlFor={this.props.itemHash} className="feature__label">
                    {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
                </label>
            </div>
        )

    }

}

export default Part;