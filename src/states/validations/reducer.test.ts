import reducer from  './reducer';
import { formValid } from '../../../__mock__/validation';
import { resetValidation, updateValidation, initValidation } from './actions';

describe('Reducer validation', () => {
    it('should reset validation', () => {
       expect(reducer(formValid, resetValidation())).toMatchSnapshot();
    });
    it('should update fieldValidation validation', () => {
        expect(reducer(formValid, updateValidation('title', false))).toMatchSnapshot();
     });
     it('should update fieldValidation validation', () => {
        expect(reducer(formValid, initValidation('title', true))).toMatchSnapshot();
     });
})