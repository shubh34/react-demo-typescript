import { Moment } from 'moment'
export interface IBlog {
    id ? : string,
    categories: string [],
    date ?: Moment | string,
    content: string,
    title: string,

}
export interface IBlogsState {
    blogs: IBlog [],
}