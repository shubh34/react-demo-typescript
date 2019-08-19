import React from 'react';
import { shallow } from 'enzyme';
import FormCategories from './FormCategories';
import { ENTER_KEY } from '../../../configs/config';

const setup = (setUpProps= {}, container= shallow) => {
    const props={
        categories: ['Travel'],
	    addCategory: jest.fn(),
        deleteCategory: jest.fn(),
        ...setUpProps,
    }
    const wrapper = shallow(<FormCategories {...props}/>);
    return {wrapper, props}
}

describe('FormCategories', () => {
    it('renders without crashing', () => {
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    });

    it('should call onChange', () => {
        const { wrapper } = setup();
        wrapper.find('Input').simulate('change', {
            target: {
                value: 'test'
            }});
        expect(wrapper.state()).toMatchSnapshot();
    });

    it('should call addCategory on onKeyUp', () => {
        const { wrapper, props } = setup();
        wrapper.find('Input').simulate('change', {
            target: {
                value: 'test'
            }});
        wrapper.update();
        wrapper.find('Input').simulate('keyup', {
                keyCode: ENTER_KEY
            });
       expect(props.addCategory).toBeCalledWith('test');
    });

    it('should not call addCategory on onKeyUp', () => {
        const { wrapper, props } = setup();
        wrapper.find('Input').simulate('change', {
            target: {
                value: 'test'
            }});
            wrapper.find('Input').simulate('keypress', {
                    keyCode: '1'
            });
           expect(props.addCategory).not.toBeCalled();
    });
})

