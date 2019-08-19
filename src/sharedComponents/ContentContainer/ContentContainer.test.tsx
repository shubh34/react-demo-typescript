import React from 'react';
import { shallow } from 'enzyme';
import ContentContainer from './ContentContainer';


const setup = (setUpProps = {}, container = shallow) => {
	const props = {
	   content :'blog content',
	   readMore : false,
	};
	const wrapper = container(<ContentContainer {...props} />);
	return { wrapper, props };
};

describe('Blog', () => {
	it('renders without crashing', () => {
		const { wrapper } = setup();
		expect(wrapper).toMatchSnapshot();
	});
	it('should render component with read more', () => {
        const { wrapper } = setup({readMore: true});
		expect(wrapper).toMatchSnapshot();
	});
});
