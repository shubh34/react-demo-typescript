import './BlogsListing.css';
import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../../store';
import { addBlog, deleteBlog } from '../../states/blogs/action';
import moment from 'moment';
import { Dispatch } from 'redux';
import { getBlogList } from '../../states/blogs/selectors';
import Blog from '../sharedComponents/Blog/Blog';
import { Button } from 'semantic-ui-react';

const mapState = (state: IRootState) => ({
	blogs: getBlogList(state),
});
const mapDispatch = (dispatch: Dispatch) => ({
	addBlog: () =>
		dispatch(
			addBlog({
				id: '2',
				title: 'New Blog',
				date: moment(),
				categories: ['Food', 'Travel'],
				content: 'Test',
			})
		),
	deleteBlog: (id: string) => dispatch(deleteBlog(id)),
});

type ReduxType = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;
interface WelcomeProps {
	name?: string;
}

export const BlogsListing: React.FC<ReduxType & WelcomeProps> = ({
	blogs,
	addBlog,
	deleteBlog,
}) => {
	const onClick = () => {
		addBlog();
	};
	return (
		<div>
			{blogs.map((blog: any) => (
				<Blog key={blog.id} blog={blog} deleteBlog={deleteBlog} />
			))}
			<Button onClick={onClick}>Add Blog</Button>
		</div>
	);
};
export default connect(
	mapState,
	mapDispatch
)(BlogsListing);
