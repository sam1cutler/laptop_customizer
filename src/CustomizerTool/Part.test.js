import React from 'react';
import ReactDOM from 'react-dom';
import Part from './Part';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Part />, div);
  ReactDOM.unmountComponentAtNode(div);
});
