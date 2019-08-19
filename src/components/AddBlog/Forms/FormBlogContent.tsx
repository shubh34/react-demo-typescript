import React from 'react';
import { Form, TextArea, TextAreaProps } from 'semantic-ui-react';

interface IFormBlogContent {
	blogContent: string;
	onChange: Function;
}
const FormBlogContent: React.FC<IFormBlogContent> = ({ blogContent, onChange }) => {
	const onBlogChange = (e: React.FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => {
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

export default FormBlogContent;
