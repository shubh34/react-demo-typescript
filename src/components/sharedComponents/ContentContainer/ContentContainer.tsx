import React from 'react';
import { Link } from 'react-router-dom';

interface IContentProps {
	blogId ? : string;
	content: string;
	readMore: boolean;
	className?: string;
}
const ContentContainer: React.FC<IContentProps> = props => {
	const { content, readMore, className, blogId } = props;
	return (
		<div className={className}>
			<p>
				{content}
				{readMore && <span>...</span>}
				{readMore && (
					<Link to={`/viewBlog/${blogId}`}>
						<strong>Read More</strong>
					</Link>
				)}
			</p>
		</div>
	);
};

export default ContentContainer;
