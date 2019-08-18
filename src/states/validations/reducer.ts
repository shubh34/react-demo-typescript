import { IValidationState } from './types';
import { RESET_VALIDATION, INIT_VALIDATION, UPDATE_VALIDATION } from './actions';

const initialValidation: IValidationState = {
    form: {
        title: {
            isValid :  false, 
        },
        categories: {
            isValid :  false, 
        },
        content: {
            isValid: false,
        }
    },
}



const reducer = (state = initialValidation, action: any): IValidationState => {
	switch (action.type) {
    case RESET_VALIDATION : 
        return {
            ...state,
            ...initialValidation,
        }
    case INIT_VALIDATION: 
        return {
            ...state,
            form: {
                ...state.form,
                [action.field.name]: {
                    isValid: action.field.isValid,
                }
            }
        }
    case UPDATE_VALIDATION: 
        return {
            ...state,
            form: {
                ...state.form,
                [action.field.name]: {
                    isValid: action.field.isValid,
                }
            }
        }
     
	default:
		return state;
	}
};
export default reducer;
