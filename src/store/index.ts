import { createStore } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IBlogsState } from '../states/blogs/types';
import { IValidationState } from '../states/validations/types';
import { IAddBlogState } from '../states/addBlog/types';
import { blogStateForApplication } from './appStub';

export interface IRootState {
	blogListing: IBlogsState;
	validation: IValidationState;
	addBlog: IAddBlogState;
}
const store = () => {
	const composedEnhancers = composeWithDevTools();
	return createStore<IRootState, any, any, any>(
		reducers,
		{ blogListing: blogStateForApplication },
		composedEnhancers
	);
};
export default store;
