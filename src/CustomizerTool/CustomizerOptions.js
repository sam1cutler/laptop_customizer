import React, { Component } from 'react';
import FEATURES from './features';
import './CustomizerOptions.css';
import FeatureOptions from './FeatureOptions';


class CustomizerOptions extends Component {

    static defaultProps = { currentSelections: [] };

    render() {
        
        const features = Object.keys(FEATURES).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
                  
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                <FeatureOptions 
                    currentFeature={FEATURES[feature]}
                    feature={feature}
                    featureSelection={this.props.currentSelections[feature]}
                    handleUpdateFeature={this.props.handleUpdateFeature}
                />
              </fieldset>
            );
          });
        
        return (
            <div>
                <h2>Customize your laptop</h2>
                {features}
            </div>
        )
    }
}

export default CustomizerOptions;