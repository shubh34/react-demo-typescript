import React from 'react';
import { connect } from 'react-redux';
import { Button, Form} from 'semantic-ui-react';
import SectionHeader from '../sharedComponents/SectionHeader/SectionHeader';
import { IRootState } from '../../store';
import { isFormValid } from '../../states/validations/selectors';
import {
	initValidation,
	updateValidation,
	resetValidation,
} from '../../states/validations/actions';
import Title from './Forms/Title';
import Categories from './Forms/Categories';
import BlogContent from './Forms/BlogContent';
import {
	initAddBlogForm,
	updateFormField,
	addCategory,
	deleteCategory,
} from '../../states/addBlog/actions';
import {
	getAddBlogTitle,
	getAddBlogCategories,
	getAddBlogContent,
} from '../../states/addBlog/selectors';
import { addBlog } from '../../states/blogs/action';
import { IBlog } from '../../states/blogs/types';
import { RouteComponentProps, RouteProps } from 'react-router';

const mapState = (state: IRootState) => ({
	isFormValid: isFormValid(state),
	title: getAddBlogTitle(state),
	categories: getAddBlogCategories(state),
	blogContent: getAddBlogContent(state),
});

const mapDispatch = (dispatch: any) => ({
	initValidation: (name: string, isValid: boolean) => dispatch(initValidation(name, isValid)),
	updateValidation: (name: string, isValid: boolean) => dispatch(updateValidation(name, isValid)),
	resetValidation: () => dispatch(resetValidation()),
	initAddBlogForm: () => dispatch(initAddBlogForm()),
	updateFormField: (name: string, value: string) => dispatch(updateFormField(name, value)),
	addCategory: (categoryName: string) => dispatch(addCategory(categoryName)),
	addBlog: (blog: IBlog) => dispatch(addBlog(blog)),
	deleteCategory: (categoryName: string) => dispatch(deleteCategory(categoryName)),
});

type ReduxType = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

export class AddBlog extends React.Component<ReduxType & RouteComponentProps> {
	constructor(props: any) {
		super(props);
		this.onFormFieldChange = this.onFormFieldChange.bind(this);
		this.onAddCategory = this.onAddCategory.bind(this);
		this.onDeleteCategory = this.onDeleteCategory.bind(this);
		this.handleAddBlog = this.handleAddBlog.bind(this);
	}
	componentWillUnmount() {
		this.props.initAddBlogForm();
		this.props.resetValidation();
	}
	onFormFieldChange(name: string, value: string) {
		this.props.updateFormField(name, value);
		this.props.updateValidation(name, !!(value && value.length));
	}
	onAddCategory(category: string) {
		this.props.addCategory(category);
		if (this.props.categories.length === 0) {
			this.props.updateValidation('categories', true);
		}
	}
	onDeleteCategory(category: string) {
		this.props.deleteCategory(category);
		this.props.updateValidation('categories', this.props.categories.length > 1);
	}
	handleAddBlog() {
		console.log(this.props);
		const { title, blogContent: content, categories, addBlog, history } = this.props;
		const blog = {
			title,
			content,
			categories,
		};
		addBlog(blog);
		history.push('/');
	}

	render() {
		const { isFormValid, title, categories, blogContent } = this.props;
		return (
			<div>
				<SectionHeader header='Add New Blog' />
				<Form>
					<Title title={title} onChange={this.onFormFieldChange} />
					<BlogContent blogContent={blogContent} onChange={this.onFormFieldChange} />
					<Categories
						categories={categories}
						addCategory={this.onAddCategory}
						deleteCategory={this.onDeleteCategory}
					/>
					<Button id="add-blog" type="button" onClick={this.handleAddBlog} disabled={!isFormValid}>
						Add Blog
					</Button>
				</Form>
			</div>
		);
	}
}
export default connect(
	mapState,
	mapDispatch
)(AddBlog);
