import {rawBlogLists} from './blogs';
import { initiaValidation, formValid } from './validation';
import { IRootState } from '../src/store';

export const defaultState: IRootState = {
    blogListing: {
        blogs: rawBlogLists
     },
     validation: initiaValidation,
     addBlog: {
        content: '',
        title: '',
        categories: ['test'],
     }
};


export const formValidState: IRootState = {
    ...defaultState,
    validation: formValid,
};