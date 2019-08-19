import { combineReducers } from 'redux';

import blogs from '../../states/blogs/reducer';
import validation from '../../states/validations/reducer'
import addBlog from '../../states/addBlog/reducer'


export default combineReducers({ blogs, validation , addBlog});

