import uuid from 'node-uuid';
import moment from 'moment';
import { IBlog } from "./types";

export const ADD_BLOG: string = "ADD_BLOG";
export const EDIT_BLOG: string = "EDIT_BLOG";
export const DELETE_BLOG: string = "DELETE_BLOG";
export const VIEW_BLOG: string = "VIEW_BLOG";

export const addBlog = (blog: IBlog) => {
    return {
        type: ADD_BLOG,
        blog: {
            ...blog,
            id: uuid.v1(),
            date: moment(),
        },
    }
}

export const deleteBlog = (blogId: string) => {
    return {
        type: DELETE_BLOG,
        blogId: blogId,
    }
}

export const ediBlog = (blog: IBlog) => {
    return {
        type: EDIT_BLOG,
        blog,
    }
}




