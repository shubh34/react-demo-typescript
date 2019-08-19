import { IValidationState } from "../src/states/validations/types";

export const initiaValidation: IValidationState = {
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
export const formValid: IValidationState= {
    form: {
        title: {
            isValid :  true, 
        },
        categories: {
            isValid :  true, 
        },
        content: {
            isValid: true,
        }
    },
}