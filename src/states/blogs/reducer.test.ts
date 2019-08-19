import reducer from  './reducer';
import moment from 'moment';

import { addBlog, deleteBlog, ediBlog } from './action';
Date.now = jest.fn(() => 1487076708000);
jest.mock('node-uuid', () => ({ v1: jest.fn(() => 'uuid') }));
export const state = {
        blogs: [{
             id: '15',
             categories: ['Food', 'Travel'],
             date: moment('21 Jan 2019').subtract(2, 'days'),
             title: 'Food Blog',
             content: 'Lorem ipsum .'
         },
     ]
}
describe('Reducer selector', () => {
    it('should add a blog on addBlog action', () => {
        const newBlog ={
            id: '1122',
            categories: ['Food', 'Travel'],
            date: moment('21 Jan 2019').subtract(2, 'days'),
            title: 'Food Blog',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.'
        };
       expect(reducer(state, addBlog(newBlog))).toMatchSnapshot();
    });
    it('should delete a blog on delete action', () => {
       expect(reducer(state, deleteBlog('15'))).toMatchSnapshot();
    });
    it('should edit  blog on edit action', () => {
        const newBlog ={
            id: '15',
            categories: ['Food', 'Travel'],
            date: moment('21 Jan 2019').subtract(2, 'days'),
            title: 'Food Blog',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.'
        };
        expect(reducer(state, ediBlog(newBlog))).toMatchSnapshot();
     });
})