import React from 'react';
import ReactDOM from 'react-dom';
import LogoComp from './LogoComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LogoComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});