import React from 'react';
import { shallow } from 'enzyme';
import AddBlog from './AddBlog';

it('renders without crashing', () => {
	const div = shallow(<AddBlog />);
	expect(div).toMatchSnapshot();
});
