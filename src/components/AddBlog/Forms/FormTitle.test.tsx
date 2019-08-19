import React from 'react';
import { shallow } from 'enzyme';
import FormTitle from './FormTitle';


describe('FormTitle', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<FormTitle title="My Blog Tiltle" onChange={jest.fn()} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should call onChange', () => {
        const onChange = jest.fn()
        const wrapper = shallow(<FormTitle title="My Blog Tiltle" onChange={onChange} />);
        wrapper.find('Input').simulate('change', {
            target: {
                name: 'Title',
                value: 'test'
            }});
        expect(onChange).toBeCalledWith('Title', 'test')
    });
})

