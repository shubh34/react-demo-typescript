import React from 'react';
import { shallow } from 'enzyme';
import { BlogsListing } from './BlogsListing';
import { blogListsForListing } from '../../../tests_helpers/blogs';
const setUp = (setUpProps?: any, container = shallow) => {
	const props = {
		addBlog: jest.fn(),
		deleteBlog: jest.fn(),
		blogs: blogListsForListing,
	};
	const wrapper = container(<BlogsListing {...props} />);
	return { wrapper, props };
};
it('renders without crashing', () => {
	const div = setUp();
	expect(div).toMatchSnapshot();
});
