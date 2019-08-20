import './BlogsListing.css';
import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../../store';
import { deleteBlog } from '../../states/blogs/action';
import { Dispatch } from 'redux';
import { getBlogList } from '../../states/blogs/selectors';
import Blog from '../../sharedComponents/Blog/Blog';
import SectionHeader from '../../sharedComponents/SectionHeader/SectionHeader';
import NoBlogsComponent from '../../sharedComponents/NoBlogsComponent/NoBlogsComponent';

const mapState = (state: IRootState) => ({
	blogs: getBlogList(state),
});
const mapDispatch = (dispatch: Dispatch) => ({
	deleteBlog: (id: string) => dispatch(deleteBlog(id)),
});

type ReduxType = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

export const BlogsListing: React.FC<ReduxType> = ({ blogs, deleteBlog }) => {
	return (
		<div>
			<SectionHeader header='Blogs' />
			{blogs.length === 0 && <NoBlogsComponent />}
			{blogs.map((blog: any) => (
				<Blog key={blog.id} blog={blog} deleteBlog={deleteBlog} />
			))}
		</div>
	);
};
export default connect(
	mapState,
	mapDispatch
)(BlogsListing);
