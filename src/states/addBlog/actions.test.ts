import { IAddBlogState } from './types';
import { INIT_ADD_BLOG, UPDATE_FORM_FIELD, ADD_BLOG_CATEGORY, DELETE_BLOG_CATEGORY, initAddBlogForm, updateFormField, addCategory, deleteCategory } from './actions';
import { addBlog } from '../blogs/action';

Date.now = jest.fn(() => 1487076708000);
jest.mock('node-uuid', () => ({ v1: jest.fn(() => 'uuid') }));

describe('addBlog action', () => {
    it('should create addBlog action', () => {
        expect(initAddBlogForm()).toEqual({
            type: INIT_ADD_BLOG,
        });
    });
    it('should create updateFormField action', () => {
        expect( updateFormField('title', 'My Blog')).toEqual({
            type: UPDATE_FORM_FIELD,
            field: {
                value: "My Blog",
                name: "title",
            },
        });
    });
    it('should create an action to add blog', () => {
        const addBlogObject: IAddBlogState = {
            title: 'My Blog',
            content: 'My Content',
            categories: ['2323', '23213'],
        };
        expect(addBlog(addBlogObject)).toMatchSnapshot();
    });
    it('should create an action to add category', () => {
      
        expect(addCategory('test')).toEqual({
            type: ADD_BLOG_CATEGORY,
            category: 'test',
        });
    });

    it('should create an action to delete category', () => {
      
        expect(deleteCategory('test')).toEqual({
            type: DELETE_BLOG_CATEGORY,
            category: 'test',
        });
    });
    
});