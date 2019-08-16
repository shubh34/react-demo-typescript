import { IBlogsState } from "./types";
import { ADD_BLOG } from "./action";

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
	default:
		console.log('state', state);
		return state;
	}
};
export default reducer;
