import { IBlogsState } from "./types";
import { ADD_BLOG, EDIT_BLOG, DELETE_BLOG } from "./action";
import { blogState } from "../../store";
import { statement } from "@babel/template";
import { bindActionCreators } from "redux";

const init: IBlogsState = {
    blogs: []
};


const reducer = (state = init, action: any) : IBlogsState => {
	switch (action.type) {
	case ADD_BLOG: 
		return {
			...state,
			blogs: [...state.blogs, action.blog],
		}
	case EDIT_BLOG: 
		return {
			...state,
			blogs: state.blogs.map(blog => {
				if(blog.id === action.blog.id) {
					return action.blog;
				}
				return blog;
			}),
		}
	case DELETE_BLOG: 
		return {
			...state,
			blogs: state.blogs.filter( blog => blog.id !== action.blogId )
		}
	default:
		return state;
	}
};
export default reducer;
