import React from 'react';
import { Form, TextArea, TextAreaProps } from 'semantic-ui-react';

interface IFormBlogContent {
	blogContent: string;
	onChange: Function;
	blogContentLabel: string;
}
const FormBlogContent: React.FC<IFormBlogContent> = ({
	blogContent,
	onChange,
	blogContentLabel,
}) => {
	const onBlogChange = (e: React.FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => {
		e.preventDefault();
		onChange('content', data.value);
	};
	return (
		<Form.Field>
			<label>{blogContentLabel}</label>
			<TextArea
				rows={25}
				spellCheck
				name='content'
				placeholder='Enter your content'
				onChange={onBlogChange}
				value={blogContent}
			/>
		</Form.Field>
	);
};

export default FormBlogContent;
