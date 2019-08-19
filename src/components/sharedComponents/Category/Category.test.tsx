import React from 'react';
import { shallow } from 'enzyme';
import Category from './Category';

describe('Category', () => {
    it('should render Button without icon', () => {
        const wrapper = shallow(<Category name='Food' />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render Button with delete icon', () => {
        const wrapper = shallow(<Category name='Food' hasDeleteIcon/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should call onClick method', () => {
        const onCLick = jest.fn();
        const wrapper = shallow(<Category name='Food' hasDeleteIcon onCategoryClick={onCLick}/>);
        wrapper.find('Button').simulate('click', {
            preventDefault: jest.fn()
        });
        expect(onCLick).toBeCalledWith('Food');
    });

})

