import React from 'react';
import { shallow } from 'enzyme'
import ViewBlog from './ViewBlog';

it('renders without crashing', () => {
  const div = shallow(<ViewBlog />)
  expect(div).toMatchSnapshot()
});
