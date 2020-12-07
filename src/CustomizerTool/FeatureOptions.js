import React, { Component } from 'react';
import './FeatureOptions.css';
import slugify from 'slugify'; // Normalizes string as a slug 

// convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class FeatureOptions extends Component {

  static defaultProps = { 
    currentFeature: [],
    feature: [],
    featureSelection: []
  };

  render() {
    const options = this.props.currentFeature.map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(this.props.feature)}
            checked={item.name === this.props.featureSelection.name}
            onChange={e => this.updateFeature(this.props.feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    });

    return (
      <div>
          {options}
      </div>
    )
  }  

}

export default FeatureOptions;