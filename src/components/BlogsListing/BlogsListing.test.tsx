import React from 'react';
import { shallow } from 'enzyme'
import App from './BlogsListing';

it('renders without crashing', () => {
  const div = shallow(<App />)
  expect(div).toMatchSnapshot()
});
