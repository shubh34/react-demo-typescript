import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

interface IBlogContent {
	blogContent: string;
	onChange: Function;
}
const BlogContent: React.FC<IBlogContent> = ({ blogContent, onChange }) => {
	const onBlogChange = (e: React.FormEvent<HTMLTextAreaElement>, data: any) => {
		e.preventDefault();
		onChange('content', data.value);
	};
	return (
		<Form.Field>
			<label>Content</label>
			<TextArea
				rows={25}
				spellcheck
				name='content'
				placeholder='Enter your content'
				onChange={onBlogChange}
				value={blogContent}
			/>
		</Form.Field>
	);
};

export default BlogContent;
