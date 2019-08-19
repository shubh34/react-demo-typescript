
import { isFormValid } from './selectors';
import { defaultState, formValidState } from '../../../__mock__/state';
describe('validation selector', () => {
    it('should be false when  Form is invalid', () => {
        expect(isFormValid(defaultState)).toBe(false);
    });
    it('should be true when  Form is valid', () => {
        expect(isFormValid(formValidState)).toBe(true);
    });
})