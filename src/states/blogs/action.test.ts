import moment from 'moment';
import { addBlog, deleteBlog, DELETE_BLOG, ediBlog } from './action';


Date.now = jest.fn(() => 1487076708000);
jest.mock('node-uuid', () => ({ v1: jest.fn(() => 'uuid') }));

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
        expect(ediBlog({
            id: '2',
            title:'Test Blog',
            content: 'Content of blog',
            date: moment('22 Jan 2018'),
            categories: ['cat1', 'cat2'],
        })).toMatchSnapshot();
    });
});