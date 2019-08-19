import { IRootState } from "../../store";


export const getAddBlogTitle = (state: IRootState) => state.addBlog.title;
export const getAddBlogContent = (state: IRootState) => state.addBlog.content;
export const getAddBlogCategories = (state: IRootState) => state.addBlog.categories;
    