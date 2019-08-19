import moment  from "moment";
import { IRootState } from "../../store";

import { dateFormat, maxContentCharacterLimit } from "../../configs/config";

export const getBlogList = (state: IRootState) => 
    {
        return state.blogs.blogs.map(blog => {
            return {
                ...blog,
                date: moment(blog.date).format(dateFormat),
                readMore: blog.content.length > maxContentCharacterLimit,
                content: blog.content.substring(0, maxContentCharacterLimit),
            };
        });
    }
export const hasBlogId = (state: IRootState, id: string)  => state.blogs.blogs.some(blog => blog.id === id);

export const getBlogById = (state: IRootState, id: string) => {
    {
        const blog = state.blogs.blogs.find(blog => blog.id === id);
        if(blog) {
            return  {
                ...blog,
                date: moment(blog.date).format(dateFormat),
            }
        }
        return blog;
    }
}