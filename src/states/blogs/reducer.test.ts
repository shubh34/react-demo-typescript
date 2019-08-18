import reducer from  './reducer';
import moment from 'moment';

import { addBlog } from './action';

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
})