import './CategoriesContainer.css';
import React from 'react';

import { Icon } from 'semantic-ui-react';
import Category from '../Category/Category';

interface categoriesProps {
	categories: string[];
	hasTagIcon?: boolean;
	hasDeleteIcon?: boolean;
	onCategoryClick?: Function;
}

const CategoriesContainer: React.FC<categoriesProps> = props => {
	const { categories, hasTagIcon, hasDeleteIcon = false, onCategoryClick } = props;
	return (
		<div className='categories_container'>
			{hasTagIcon && <Icon name='tags' />}
			<div className='categories_button_group'>
				{categories.map(category => (
					<Category
						key={category}
						name={category}
						hasDeleteIcon={hasDeleteIcon}
						onCategoryClick={onCategoryClick}
					/>
				))}
			</div>
		</div>
	);
};

export default CategoriesContainer;
