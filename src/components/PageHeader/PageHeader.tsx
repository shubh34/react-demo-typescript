import './PageHeader.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Search } from 'semantic-ui-react';
import SectionHeader from '../sharedComponents/SectionHeader/SectionHeader';

import pageHeaderContent from './PageHeader.content';

const PageHeader: React.FC = () => {
	const { homeHeaderTitle, addBlogHeaderTitle, pageHeaderTitle } = pageHeaderContent;
	return (
		<nav className='nav'>
			<SectionHeader header={pageHeaderTitle} className='nav_section_header' />
			<ul>
				<li>
					<NavLink className='nav_link' exact activeClassName='nav_link--active' to='/'>
						{homeHeaderTitle}
					</NavLink>
				</li>
				<li>
					<NavLink className='nav_link' activeClassName='nav_link--active' to='/addBlog'>
						<Icon name='plus' />
						{addBlogHeaderTitle}
					</NavLink>
				</li>
				<li className='nav_search_box'>
					<Search loading={false} />
				</li>
			</ul>
		</nav>
	);
};

export default PageHeader;
