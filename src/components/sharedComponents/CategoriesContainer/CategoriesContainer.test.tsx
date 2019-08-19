import React from 'react';
import { shallow } from 'enzyme';
import CategoriesContainer from './CategoriesContainer';

const setUpContainer = (setUpProps = {}, container= shallow) => {
    const props =  {
        categories: ['Food', 'Travel'],
        ...setUpProps
    }
    const wrapper = shallow(<CategoriesContainer {...props} />);
    return {
        props,
        wrapper,
    }
}
describe('CategoriesContainer', () => {
    it('should Render CategoriesContainer with Category Icon', () => {
        const wrapper = setUpContainer({ hasTagIcon: true });
        expect(wrapper).toMatchSnapshot();
    });
    it('should render CategoriesContainer without Category Icon', () => {
        const wrapper = setUpContainer({ hasTagIcon: false });
        expect(wrapper).toMatchSnapshot();
    });
    it('should render category button  with deleteIcon', () => {
        const wrapper = setUpContainer({ hasDeleteIcon: true });
        expect(wrapper).toMatchSnapshot();
    });
})