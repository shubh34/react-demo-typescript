import React from 'react';
import './ViewBlog.css';
import { IRootState } from '../../store';
import { getBlogById, hasBlogId } from '../../states/blogs/selectors';
import { connect } from 'react-redux';
import SectionHeader from '../sharedComponents/SectionHeader/SectionHeader';
import ContentContainer from '../sharedComponents/ContentContainer/ContentContainer';
import CategoriesContainer from '../sharedComponents/CategoriesContainer/CategoriesContainer';
import DateContainer from '../sharedComponents/DateContainer/DateContainer';
const mapState = (state: IRootState, props: any) => ({
	hasBlog: hasBlogId(state, props.match.params.id),
	blogDetails: getBlogById(state, props.match.params.id),
});
type ReduxType = ReturnType<typeof mapState>;

export const ViewBlog: React.FC<ReduxType> = props => {
	const { blogDetails, hasBlog } = props;

	const renderNoBlogFound = () => {
		return <div> No Blog found</div>;
	};

	if (!hasBlog) {
		return renderNoBlogFound();
	}

	const { title, content, categories, date } = blogDetails!;
	return (
		<div className="view_blog">
			<SectionHeader header={title} />
			<DateContainer date={date} />
			<ContentContainer className="view_blog_content" content={content} readMore={false} />
			<CategoriesContainer  categories={categories} hasTagIcon />
		</div>
	);
};

export default connect(mapState)(ViewBlog);
