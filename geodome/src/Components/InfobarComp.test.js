import React from 'react';
import ReactDOM from 'react-dom';
import InfoBarComp from './InfoBarComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfoBarComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});