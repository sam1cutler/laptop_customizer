import React, { Component } from 'react';
import './FeatureOptions.css';
import Part from './Part';
import slugify from 'slugify'; // Normalizes string as a slug 


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
          <Part
            item={item}
            itemHash={itemHash}
            feature={this.props.feature}
            featureSelection={this.props.featureSelection}
          />
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