import React from 'react';
import ReactDOM from 'react-dom';
import CustomizerOptions from './CustomizerOptions';
import FEATURES from './features';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomizerOptions />, div);
  ReactDOM.unmountComponentAtNode(div);
});
