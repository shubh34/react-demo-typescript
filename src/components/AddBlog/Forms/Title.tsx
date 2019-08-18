import React from 'react';
import { Form, Input } from 'semantic-ui-react';

interface ITitleProps {
	title: string;
	onChange: Function;
}
const Title: React.FC<ITitleProps> = ({ title, onChange }) => {
	const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.name, e.target.value);
	};
	return (
		<Form.Field>
			<label>Title</label>
			<Input
				spellCheck
				type='text'
				name='title'
				placeholder='Enter your blog title'
				onChange={onTitleChange}
				value={title}
			/>
		</Form.Field>
	);
};

export default Title;
