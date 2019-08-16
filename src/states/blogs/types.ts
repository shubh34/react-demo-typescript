import { Moment } from 'moment'
export interface IBlog {
    id: string,
    categories: string [],
    createdDate: Moment,
    lastUpdate: Moment,
    content: string,
    title: string,

}
export interface IBlogsState {
    blogs: IBlog [],
}