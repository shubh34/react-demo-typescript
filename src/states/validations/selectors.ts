import moment  from "moment";
import { IRootState } from "../../store";


export const isFormValid = (state: IRootState) => 
    {
        const { validation: { form }} = state;
        return !Object.keys(form).some(formKey => form[formKey].isValid === false )
    }