import React from 'react';
import ReactDOM from 'react-dom';
import CommunityClassCardComp from './Components/CommunityClassCardComp';
import CommunityClassPOJO from './Components/CommunityClassPOJO';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const testObject = new CommunityClassPOJO();
  testObject.createCity("Calgary", 50, 35, 45000);
  ReactDOM.render(<CommunityClassCardComp key={testObject.id} city={testObject} />, div);
  ReactDOM.unmountComponentAtNode(div);
});


