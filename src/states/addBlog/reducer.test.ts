import reducer from  './reducer';
import {  initAddBlogForm, updateFormField, addCategory, deleteCategory } from './actions';
import { addBlogDefaultState } from '../../../tests_helpers/AddBlog';

describe('Reducer validation', () => {
    it('should init add blog form', () => {
        const blog = {
            title: 'My Blog',
            content: 'My content',
            categories: ['str']
        }
       expect(reducer(blog, initAddBlogForm())).toMatchSnapshot();
    });
    it('should update form field', () => {
        expect(reducer(addBlogDefaultState, updateFormField('title', 'My Blogs'))).toMatchSnapshot();
     });
     it('should add category', () => {
        expect(reducer(addBlogDefaultState, addCategory('Travel'))).toMatchSnapshot();
     });
     it('should delete category', () => {
        const blog = {
            title: 'My Blog',
            content: 'My content',
            categories: ['str']
        }
        expect(reducer(blog, deleteCategory('str'))).toMatchSnapshot();
     });
})