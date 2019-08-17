import moment from 'moment';
import { addBlog, deleteBlog, DELETE_BLOG, edit_blog } from './action';

describe('blogs action', () => {
    it('should create add blog action', () => {
        expect(addBlog({
            id: '2',
            title:'Test Blog',
            content: 'Content of blog',
            date: moment('22 Jan 2018'),
            categories: ['cat1', 'cat2'],
        })).toMatchSnapshot();
    })
    it('should create delete blog action', () => {
        expect(deleteBlog('2')).toEqual({
            type: DELETE_BLOG,
            blogId:'2'
        });
    });
    it('should create edit blog action', () => {
        expect(edit_blog({
            id: '2',
            title:'Test Blog',
            content: 'Content of blog',
            date: moment('22 Jan 2018'),
            categories: ['cat1', 'cat2'],
        })).toMatchSnapshot();
    });
});