import './BlogsListing.css';
import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../../store';
import { addBlog } from '../../states/blogs/action';
import moment from 'moment' ;
import { Dispatch } from 'redux';
import { getBlogList } from '../../states/blogs/selectors';
import Blog from '../sharedComponents/Blog/Blog';
import { Button } from 'semantic-ui-react';

const mapState = (state :IRootState) => ({
  blogs: getBlogList(state),
})
const mapDispatch = (dispatch: Dispatch) => ({
  addBlog: () => dispatch(addBlog({
    id: '2',
    title: 'New Blog',
    date: moment(),
    categories: ["Food", "Travel"],
    content: 'Test'
} ))
})

type ReduxType = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;
interface WelcomeProps {
  name? : string
}
 
const BlogsListing: React.FC<ReduxType & WelcomeProps> = ({ blogs, addBlog}) => {
  const onClick = () =>  {
    addBlog();
  }
  return (
    <div>Blog Listing
    
        {blogs.map( (blog :any) => <Blog blog={blog} /> )}
 
      <Button onClick={onClick}>Add Blog</Button>
    </div>
  );
}

export default connect(mapState,mapDispatch) (BlogsListing);

