import React from 'react';
import './ViewBlog.css';
import { IRootState } from '../../store';
import { getBlogById, hasBlogId } from '../../states/blogs/selectors';
import { connect } from 'react-redux';
import SectionHeader from '../sharedComponents/SectionHeader/SectionHeader';
import ContentContainer from '../sharedComponents/ContentContainer/ContentContainer';
import CategoriesContainer from '../sharedComponents/CategoriesContainer/CategoriesContainer';
const mapState = (state : IRootState, props: any) => ({
	hasBlog: hasBlogId(state, props.match.params.id),
	blogDetails: getBlogById(state, props.match.params.id)
});
type ReduxType = ReturnType<typeof mapState>;

export const ViewBlog: React.FC<ReduxType> = (props) => {
	const renderNoBlogFound = () => {
		return <div> No Blog found</div>
	}
	if(!hasBlogId) {
		return renderNoBlogFound();
	}

	const {blogDetails} = props;
	const {title, content, categories } = blogDetails!
	return <div>
		<SectionHeader header={title}> </SectionHeader>
		<ContentContainer content={content} readMore={false} />
		<CategoriesContainer categories={categories} hasTagIcon/>
	</div>;
};

export default connect(mapState) (ViewBlog);
