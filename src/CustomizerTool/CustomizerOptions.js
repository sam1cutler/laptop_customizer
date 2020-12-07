import React, { Component } from 'react';
import FEATURES from './features';
import slugify from 'slugify'; // Normalizes string as a slug 
import './CustomizerOptions.css';
import FeatureOption from './FeatureOption';

// convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class CustomizerOptions extends Component {

    render() {
        
        const features = Object.keys(FEATURES).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = FEATURES[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <div key={itemHash} className="feature__item">
                  <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.currentSelections[feature].name}
                    onChange={e => this.updateFeature(feature, item)}
                  />
                  <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                  </label>
                </div>
              );
            });
      
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
              </fieldset>
            );
          });
        
        return (
            <div>
                <h2>Customize your laptop plz</h2>
                <FeatureOption />
                <FeatureOption />
                <FeatureOption />
            </div>
        )
    }
}

export default CustomizerOptions;