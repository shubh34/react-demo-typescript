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