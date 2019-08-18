import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import store from '../../store';
import BlogsListing from '../BlogsListing/BlogsListing';
import PageHeader from '../PageHeader/PageHeader';
import CreateBlog from '../CreateBlog/CreateBlog';
import ViewBlog from '../ViewBlog/ViewBlog';

const App: React.FC = () => {
	return (
		<Provider store={store()}>
			<Router>
				<div className='App'>
					<PageHeader />
					<div className='page_container'>
						<Switch>
							<Route exact path='/' component={BlogsListing} />
							<Route path='/addBlog' component={CreateBlog} />
							<Route path='/viewBlog/:id' component={ViewBlog} />
							<Route component={BlogsListing} />
						</Switch>
					</div>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
