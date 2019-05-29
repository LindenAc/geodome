import React from 'react';
import ReactDOM from 'react-dom';
import MainPageComp from './MainPageComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainPageComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});


