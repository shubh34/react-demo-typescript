
export const INIT_ADD_BLOG: string = "INIT_ADD_BLOG";
export const UPDATE_FORM_FIELD: string = "UPDATE_FORM_FIELD";
export const ADD_BLOG_CATEGORY: string = "ADD_BLOG_CATEGORY";
export const DELETE_BLOG_CATEGORY: string = "DELETE_BLOG_CATEGORY";

export const initAddBlogForm = () => {
    return {
        type: INIT_ADD_BLOG,
    }
}

export const updateFormField = (name: string, value: string) => {
    return {
        type: UPDATE_FORM_FIELD,
        field: {
            name,
            value,
        }
    }
}

export const addCategory = (category: string) => {
    return {
        type: ADD_BLOG_CATEGORY,
        category,
    }
}

export const deleteCategory = (category: string) => {
    return {
        type: DELETE_BLOG_CATEGORY,
        category,
    }
}


