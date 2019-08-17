import React from 'react';
import { IBlog } from '../../../states/blogs/types';
import SectionHeader from '../SectionHeader/SectionHeader';
import { Button, Icon } from 'semantic-ui-react';
import { getCategoriesInString } from '../../../utils/utils';

interface categoriesProps  {
  categories: string []
};

const CategoriesContainer: React.FC<categoriesProps> = (props) => {
  const { categories } = props
  
  return (
    <div><Icon name="tags"/> <strong><span>{`  ${getCategoriesInString(categories)}`}</span></strong></div>
  );
}

export default CategoriesContainer;
