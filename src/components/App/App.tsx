import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from '../../store';
import BlogsListing from '../BlogsListing/BlogsListing';

const App: React.FC = () => {
  return (
    <Provider store={store()}>
    <div className="App">
      <BlogsListing name="Shubham"/>
    </div>
    </Provider>
  );
}

export default App;
