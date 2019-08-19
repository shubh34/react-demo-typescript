import { resetValidation, RESET_VALIDATION, initValidation, INIT_VALIDATION, updateValidation, UPDATE_VALIDATION } from './actions';

describe('blogs action', () => {
    it('should reset validation', () => {
        expect(resetValidation()).toEqual({
            type: RESET_VALIDATION,
        });
    });
    it('should init validation', () => {
        expect(initValidation('title', false)).toEqual({
            type: INIT_VALIDATION,
            field: {
                isValid: false,
                name: "title",
            },
        });
    });
    it('should update validation', () => {
        expect(updateValidation('title', true)).toEqual({
            type: UPDATE_VALIDATION,
            field: {
                isValid: true,
                name: "title",
            },
        });
    });
});