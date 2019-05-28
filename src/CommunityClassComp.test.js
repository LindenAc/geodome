import React from 'react';
import ReactDOM from 'react-dom';
import CommunityClassComp from './Components/CommunityClassComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommunityClassComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});


