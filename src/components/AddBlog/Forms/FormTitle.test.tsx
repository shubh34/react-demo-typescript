import React from 'react';
import { shallow } from 'enzyme';
import FormTitle from './FormTitle';

describe('FormTitle', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<FormTitle title='My Blog Tiltle' onChange={jest.fn()} titleLabel={'titleLabel'}/>);
		expect(wrapper).toMatchSnapshot();
	});

	it('should call onChange', () => {
		const onChange = jest.fn();
		const wrapper = shallow(<FormTitle title='My Blog Tiltle' onChange={onChange} titleLabel={'titleLabel'} />);
		wrapper.find('Input').simulate('change', {
			target: {
				name: 'Title',
				value: 'test',
			},
		});
		expect(onChange).toBeCalledWith('Title', 'test');
	});
});
