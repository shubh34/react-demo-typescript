
export const INIT_VALIDATION: string = "INIT_VALIDATION";
export const UPDATE_VALIDATION: string = "UPDATE_VALIDATION";
export const RESET_VALIDATION: string = "RESET_VALIDATION";

export const initValidation = (name: string, isValid: boolean) => {
    return {
        type: INIT_VALIDATION,
        field: {
            name,
            isValid,
        }
    }
}

export const updateValidation = (name: string, isValid: boolean) => {
    return {
        type: UPDATE_VALIDATION,
        field: {
            name,
            isValid,
        }
    }
}
export const resetValidation = () => {
    return {
        type: RESET_VALIDATION,
    }
}


