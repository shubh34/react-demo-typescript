

import { createStore } from 'redux';
import reducers from './reducers';
import moment from 'moment';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IBlogsState } from '../states/blogs/types';


export const blogState: IBlogsState =  {
   blogs: [{
        id: '1',
        categories: ['Food', 'Travel'],
        date: moment(),
        title: 'Food Blog',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Blandit aliquam etiam erat velit scelerisque in. Phasellus vestibulum lorem sed risus ultricies. Egestas purus viverra accumsan in nisl nisi. Lectus urna duis convallis convallis tellus id interdum velit. Nulla at volutpat diam ut venenatis tellus. Ultrices neque ornare aenean euismod elementum nisi quis. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Habitant morbi tristique senectus et netus et malesuada. Varius morbi enim nunc faucibus. Dolor purus non enim praesent elementum facilisis. A erat nam at lectus urna duis convallis convallis tellus. Ut eu sem integer vitae justo. Aenean pharetra magna ac placerat vestibulum lectus mauris. Scelerisque felis imperdiet proin fermentum leo vel orci. Felis eget nunc lobortis mattis. Iaculis nunc sed augue lacus viverra vitae congue eu consequat.A diam sollicitudin tempor id eu nisl nunc mi ipsum. Eget mi proin sed libero enim sed faucibus turpis. Semper auctor neque vitae tempus. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Egestas tellus rutrum tellus pellentesque eu. Id diam maecenas ultricies mi eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Arcu cursus vitae congue mauris rhoncus aenean. Magna fringilla urna porttitor rhoncus dolor. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Lorem ipsum dolor sit amet consectetur. In nisl nisi scelerisque eu ultrices vitae auctor. Scelerisque eu ultrices vitae auctor. Egestas dui id ornare arcu odio. Vestibulum morbi blandit cursus risus at ultrices mi tempus.'
    }]
}
export interface IRootState {
    blogs: import('../states/blogs/types').IBlogsState
}
const store = () => {
    const composedEnhancers = composeWithDevTools();
    return createStore<IRootState, any, any, any>(
        reducers, {blogs: blogState},
        composedEnhancers
    );
}
export default store;
