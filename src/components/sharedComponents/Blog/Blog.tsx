import './Blog.css'
import React from 'react';
import { IBlog } from '../../../states/blogs/types';
import SectionHeader from '../SectionHeader/SectionHeader';
import { Button, Icon, Label } from 'semantic-ui-react';
import ContentContainer from '../ContentContainer/ContentContainer';
import CategoriesContainer from '../CategoriesContainer/CategoriesContainer';

interface IBlogWithReadMore extends IBlog {
      readMore: boolean  
};

interface blogProps {
    blog: IBlogWithReadMore
}

const Blog: React.FC<blogProps> = (props) => {
    const { blog: {id, title, content, categories, date, readMore }} = props
  return (
    <div id={id} className="blog">
        <div className="blog_date">
            <label className="blog_date_label">
                <span className="blog_date_meta">Date: </span>
                <strong>{date}</strong>
            </label>
        </div>
        <div className="blog_details">
           <div className="blog_detail_header"><SectionHeader header={title} /> <Button className="blog_delete_button" icon="trash" /> </div>
            <ContentContainer content={content} readMore={readMore} blogId={id}/>
            <CategoriesContainer categories = {categories} />
           
        </div>
    </div>
  );
}

export default Blog;
