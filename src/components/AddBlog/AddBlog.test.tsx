import React from 'react';
import { shallow } from 'enzyme';
import { AddBlog } from './AddBlog';

const setup = (setUpProps = {}, container = shallow) => {
	let mock: any = jest.fn();
	let history: any = {
		push: jest.fn(),
	};
	const props = {
		isFormValid: false,
		title: 'Title',
		categories: ['Travel', 'Food'],
		blogContent: 'This is the blog content',
		initValidation: jest.fn(),
		updateValidation: jest.fn(),
		resetValidation: jest.fn(),
		initAddBlogForm: jest.fn(),
		updateFormField: jest.fn(),
		addCategory: jest.fn(),
		addBlog: jest.fn(),
		deleteCategory: jest.fn(),
		history: history,
		location: mock,
		match: mock,
		...setUpProps,
	};
	const wrapper = container<AddBlog>(<AddBlog {...props} />);
	return { wrapper, props };
};

describe('Add Blog', () => {
	it('should render add blog', () => {
		const { wrapper } = setup();
		expect(wrapper).toMatchSnapshot();
	});
	it('should initialise addForm on unmount', () => {
		const { wrapper, props } = setup();
		wrapper.unmount();
		expect(props.initAddBlogForm).toBeCalled();
		expect(props.resetValidation).toBeCalled();
	});
	it('should add blog on handleAddBlog', () => {
		const { wrapper, props } = setup();
		wrapper.instance().handleAddBlog();
		expect(props.addBlog).toBeCalledWith({
			categories: ['Travel', 'Food'],
			content: 'This is the blog content',
			title: 'Title',
		});
	});
	it('should change field value on onFormFieldChange', () => {
		const { wrapper, props } = setup();
		wrapper.instance().onFormFieldChange('title', 'My Title');
		expect(props.updateFormField).toBeCalled();
		expect(props.updateValidation).toBeCalledWith('title', true);
	});
	it('should add category on onAddCategory', () => {
		const { wrapper, props } = setup();
		wrapper.instance().onAddCategory('Travel');
		expect(props.addCategory).toBeCalledWith('Travel');
	});
	it('should delete category on deleteCategory', () => {
		const { wrapper, props } = setup();
		wrapper.instance().onDeleteCategory('Travel');
		expect(props.deleteCategory).toBeCalledWith('Travel');
	});
});
