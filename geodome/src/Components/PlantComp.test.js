import React from 'react';
import ReactDOM from 'react-dom';
import PlantComp from './PlantComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlantComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

