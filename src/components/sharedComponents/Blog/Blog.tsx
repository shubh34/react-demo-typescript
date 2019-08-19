import './Blog.css';
import React from 'react';
import { IBlog } from '../../../states/blogs/types';
import SectionHeader from '../SectionHeader/SectionHeader';
import { Button } from 'semantic-ui-react';
import ContentContainer from '../ContentContainer/ContentContainer';
import CategoriesContainer from '../CategoriesContainer/CategoriesContainer';
import { Link } from 'react-router-dom';
import DateContainer from '../DateContainer/DateContainer';

interface IBlogWithReadMore extends IBlog {
	readMore: boolean;
}

interface blogProps {
	blog: IBlogWithReadMore;
	deleteBlog: Function;
}

const Blog: React.FC<blogProps> = props => {
	const {
		blog: { id, title, content, categories, date, readMore },
		deleteBlog,
	} = props;
	const deleteBlogById = () => {
		deleteBlog(id);
	};
	return (
		<div id={id} className='blog'>
			<DateContainer date={date} />
			<div className='blog_details'>
				<div className='blog_detail_header'>
					<Link to={`/viewBlog/${id}`}>
						<SectionHeader header={title} />
					</Link>
					<Button
						id='blog_delete_button'
						className='blog_delete_button'
						icon='trash'
						onClick={deleteBlogById}
					/>
				</div>
				<ContentContainer content={content} readMore={readMore} blogId={id} />
				<CategoriesContainer categories={categories} hasTagIcon />
			</div>
		</div>
	);
};

export default Blog;
