import React from 'react';
import { connect } from 'react-redux';
import { stat } from 'fs';
import { IRootState } from '../../store';
import { addBlog } from '../../states/blogs/action';
import moment from 'moment' ;
import { Dispatch } from 'redux';

const mapState = (state :IRootState) => ({
  blogs: state.blogs.blogs,
})
const mapDispatch = (dispatch: Dispatch) => ({
  addBlog: () => dispatch(addBlog({
    id: '2',
    title: 'New Blog',
    createdDate: moment(),
    lastUpdate: moment(),
    categories: ["Food", "Travel"],
    content: 'Test'
} ))
})

type ReduxType = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;
interface WelcomeProps {
  name? : string
}
 
const BlogsListing: React.FC<ReduxType & WelcomeProps> = (props) => {
  const onClick = () =>  {
    props.addBlog();
  }
  return (
    <div>Blog Listing   {props.name}
      <button onClick={onClick}>Add Blog  </button>
    </div>
  );
}

export default connect(mapState,mapDispatch) (BlogsListing);
