import { getCategoriesInString } from './utils';
describe('Utils', () => {
	it('getCategoriesInString', () => {
		expect(getCategoriesInString(['Food', 'Travel'])).toBe('Food, Travel');
	});
});
