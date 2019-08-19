import React from 'react';
import { shallow } from 'enzyme';
import DateContainer from './DateContainer';

it('renders without crashing', () => {
	const div = shallow(<DateContainer date='23 Jan 1992' />);
	expect(div).toMatchSnapshot();
});
