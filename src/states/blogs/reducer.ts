import { IBlogsState } from "./types";
import { ADD_BLOG, EDIT_BLOG, DELETE_BLOG } from "./action";

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
