import React from 'react';
import ReactDOM from 'react-dom';
import FeatureOptions from './FeatureOptions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeatureOptions />, div);
  ReactDOM.unmountComponentAtNode(div);
});
