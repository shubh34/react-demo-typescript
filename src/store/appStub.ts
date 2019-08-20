import moment from 'moment';
import { IBlogsState } from '../states/blogs/types';

export const blogStateForApplication: IBlogsState = {
	blogs: [
		{
			id: '3',
			categories: ['Definition', 'WikiPedia'],
			date: moment().subtract(2, 'days'),
			title: 'Blog  Definition',
			content:
				'A blog (a truncation of "weblog")[1] is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. The rise of Twitter and other "microblogging" systems helps integrate MABs and single-author blogs into the news media. Blog can also be used as a verb, meaning to maintain or add content to a blog.The emergence and growth of blogs in the late 1990s coincided with the advent of web publishing tools that facilitated the posting of content by non-technical users who did not have much experience with HTML or computer programming. Previously, a knowledge of such technologies as HTML and File Transfer Protocol had been required to publish content on the Web, and early Web users therefore tended to be hackers and computer enthusiasts. In the 2010s, the majority are interactive Web 2.0 websites, allowing visitors to leave online comments, and it is this interactivity that distinguishes them from other static websites.[2] In that sense, blogging can be seen as a form of social networking service. Indeed, bloggers do not only produce content to post on their blogs, but also often build social relations with their readers and other bloggers.[3] However, there are high-readership blogs which do not allow comments.',
		},
		{
			id: '1',
			categories: ['Food', 'Travel'],
			date: moment().subtract(2, 'days'),
			title: 'Food Blog',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Blandit aliquam etiam erat velit scelerisque in. Phasellus vestibulum lorem sed risus ultricies. Egestas purus viverra accumsan in nisl nisi. Lectus urna duis convallis convallis tellus id interdum velit. Nulla at volutpat diam ut venenatis tellus. Ultrices neque ornare aenean euismod elementum nisi quis. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Habitant morbi tristique senectus et netus et malesuada. Varius morbi enim nunc faucibus. Dolor purus non enim praesent elementum facilisis. A erat nam at lectus urna duis convallis convallis tellus. Ut eu sem integer vitae justo. Aenean pharetra magna ac placerat vestibulum lectus mauris. Scelerisque felis imperdiet proin fermentum leo vel orci. Felis eget nunc lobortis mattis. Iaculis nunc sed augue lacus viverra vitae congue eu consequat.A diam sollicitudin tempor id eu nisl nunc mi ipsum. Eget mi proin sed libero enim sed faucibus turpis. Semper auctor neque vitae tempus. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Egestas tellus rutrum tellus pellentesque eu. Id diam maecenas ultricies mi eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Arcu cursus vitae congue mauris rhoncus aenean. Magna fringilla urna porttitor rhoncus dolor. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Lorem ipsum dolor sit amet consectetur. In nisl nisi scelerisque eu ultrices vitae auctor. Scelerisque eu ultrices vitae auctor. Egestas dui id ornare arcu odio. Vestibulum morbi blandit cursus risus at ultrices mi tempus.',
		},
		{
			id: '2',
			categories: ['Dance', 'Learning'],
			date: moment().subtract(2, 'days'),
			title: 'Dance Blog',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Blandit aliquam etiam erat velit scelerisque in. Phasellus vestibulum lorem sed risus ultricies. Egestas purus viverra accumsan in nisl nisi. Lectus urna duis convallis convallis tellus id interdum velit. Nulla at volutpat diam ut venenatis tellus. Ultrices neque ornare aenean euismod elementum nisi quis. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Habitant morbi tristique senectus et netus et malesuada. Varius morbi enim nunc faucibus. Dolor purus non enim praesent elementum facilisis. A erat nam at lectus urna duis convallis convallis tellus. Ut eu sem integer vitae justo. Aenean pharetra magna ac placerat vestibulum lectus mauris. Scelerisque felis imperdiet proin fermentum leo vel orci. Felis eget nunc lobortis mattis. Iaculis nunc sed augue lacus viverra vitae congue eu consequat.A diam sollicitudin tempor id eu nisl nunc mi ipsum. Eget mi proin sed libero enim sed faucibus turpis. Semper auctor neque vitae tempus. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Egestas tellus rutrum tellus pellentesque eu. Id diam maecenas ultricies mi eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Arcu cursus vitae congue mauris rhoncus aenean. Magna fringilla urna porttitor rhoncus dolor. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Lorem ipsum dolor sit amet consectetur. In nisl nisi scelerisque eu ultrices vitae auctor. Scelerisque eu ultrices vitae auctor. Egestas dui id ornare arcu odio. Vestibulum morbi blandit cursus risus at ultrices mi tempus.',
		},
	],
};
