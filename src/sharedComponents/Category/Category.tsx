import React from 'react';
import { Button, ButtonProps } from 'semantic-ui-react';
interface ICategoryProps {
	name: string;
	hasDeleteIcon?: boolean;
	onCategoryClick?: Function;
}

const categoryButtonStyle = {
	backgroundColor: '#4183c4',
	color: '#eeeeee',
	borderRadius: '48px',
	padding: '8px 16px',
	margin: '8px 8px 8px 0px',
};
const Category: React.FC<ICategoryProps> = props => {
	const { name, hasDeleteIcon, onCategoryClick } = props;

	const onClick = (e: React.MouseEvent<HTMLButtonElement>, data: ButtonProps) => {
		e.preventDefault();
		if (onCategoryClick) {
			onCategoryClick(data.name);
		}
	};
	if (hasDeleteIcon) {
		return (
			<Button
				type='button'
				style={categoryButtonStyle}
				name={name}
				icon='delete'
				content={name}
				labelPosition='right'
				onClick={onClick}
			/>
		);
	}

	return (
		<Button type='button' style={categoryButtonStyle} name={name} onClick={onClick}>
			{name}
		</Button>
	);
};

export default Category;
