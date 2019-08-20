import { combineReducers } from 'redux';

import blogListing from '../../states/blogs/reducer';
import validation from '../../states/validations/reducer'
import addBlog from '../../states/addBlog/reducer'


export default combineReducers({ blogListing, validation , addBlog});

