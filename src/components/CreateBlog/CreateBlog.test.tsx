import React from 'react';
import { shallow } from 'enzyme';
import CreateBlog from './CreateBlog';

it('renders without crashing', () => {
	const div = shallow(<CreateBlog />);
	expect(div).toMatchSnapshot();
});
