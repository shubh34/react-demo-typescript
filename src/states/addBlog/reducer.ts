import { IAddBlogState } from './types';
import { INIT_ADD_BLOG, UPDATE_FORM_FIELD, ADD_BLOG_CATEGORY, DELETE_BLOG_CATEGORY } from './actions';


const addBlogInitialState: IAddBlogState = {
   title:  '',
   categories: [],
   content: '',
}



const reducer = (state = addBlogInitialState, action: any): IAddBlogState => {
	switch (action.type) {
    case INIT_ADD_BLOG : 
        return {
            ...state,
            ...addBlogInitialState,
        }
    case UPDATE_FORM_FIELD: 
        return {
            ...state,
            [action.field.name]: action.field.value,
        }
    case ADD_BLOG_CATEGORY: 
        return {
            ...state,
            categories: [...state.categories, action.category]
        }
    case DELETE_BLOG_CATEGORY: 
        return {
            ...state,
            categories: state.categories.filter(category => category !== action.category)
        }
	default:

		return state;
	}
};
export default reducer;
