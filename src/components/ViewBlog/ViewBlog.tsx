import React from 'react';
import './ViewBlog.css';
import { IRootState } from '../../store';
import { getBlogById, hasBlogId } from '../../states/blogs/selectors';
import { connect } from 'react-redux';
import SectionHeader from '../../sharedComponents/SectionHeader/SectionHeader';
import ContentContainer from '../../sharedComponents/ContentContainer/ContentContainer';
import CategoriesContainer from '../../sharedComponents/CategoriesContainer/CategoriesContainer';
import DateContainer from '../../sharedComponents/DateContainer/DateContainer';
import BackButton from '../../sharedComponents/BackButton/BackButton';
import { RouteComponentProps } from 'react-router';
const mapState = (state: IRootState, props: any) => ({
	hasBlog: hasBlogId(state, props.match.params.id),
	blogDetails: getBlogById(state, props.match.params.id),
});
type ReduxType = ReturnType<typeof mapState>;

export const ViewBlog: React.FC<ReduxType & RouteComponentProps> = props => {
	const { blogDetails, hasBlog } = props;

	const renderNoBlogFound = () => {
		return <SectionHeader header="Sorry!! we can't find this blog. This blog might be deleted." />;
	};

	if (!hasBlog) {
		return renderNoBlogFound();
	}
	const handleBack = () => props.history.push('/');

	const { title, content, categories, date } = blogDetails!;
	return (
		<div className='view_blog'>
			<BackButton onClick={handleBack} />
			<SectionHeader header={title} />
			<DateContainer date={date} />
			<ContentContainer className='view_blog_content' content={content} readMore={false} />
			<CategoriesContainer categories={categories} hasTagIcon />
		</div>
	);
};

export default connect(mapState)(ViewBlog);
