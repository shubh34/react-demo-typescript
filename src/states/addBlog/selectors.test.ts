
import { getAddBlogTitle, getAddBlogCategories, getAddBlogContent } from './selectors';
import { defaultState } from '../../../__mock__/state';

describe('validation selector', () => {
    it('should be false when  Form is invalid', () => {
        expect(getAddBlogTitle(defaultState)).toBe(defaultState.addBlog.title);
    });
    it('should be true when  Form is valid', () => {
        expect(getAddBlogCategories(defaultState)).toBe(defaultState.addBlog.categories);
    });
    it('should be true when  Form is valid', () => {
        expect(getAddBlogContent(defaultState)).toBe(defaultState.addBlog.content);
    });
})