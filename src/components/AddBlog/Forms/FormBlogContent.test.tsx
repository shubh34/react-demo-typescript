import React from 'react';
import { shallow } from 'enzyme';
import FormBlogContent from './FormBlogContent';

describe('FormBlogContent', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<FormBlogContent blogContent='My Blog content' onChange={jest.fn()} blogContentLabel={'blogContentLabel'} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should call onChange', () => {
		const onChange = jest.fn();
		const wrapper = shallow(<FormBlogContent blogContent='My Blog Tiltle' onChange={onChange} blogContentLabel={'blogContentLabel'} />);
		wrapper.find('TextArea').simulate('change', { preventDefault: jest.fn() }, { value: 'test' });
		expect(onChange).toBeCalledWith('content', 'test');
	});
});
