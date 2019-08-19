import React, { Component } from 'react';
import { Form, Input, Message } from 'semantic-ui-react';
import { ENTER_KEY, COMMA_KEY } from '../../../configs/config';
import CategoriesContainer from '../../sharedComponents/CategoriesContainer/CategoriesContainer';
interface IFormCategories {
	categories: string[];
	addCategory: Function;
	deleteCategory: Function;
}
interface IState {
	category: string;
}
export class FormCategories extends Component<IFormCategories, IState> {
	constructor(props: IFormCategories) {
		super(props);
		this.state = {
			category: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleDeleteCategory = this.handleDeleteCategory.bind(this);

		this.handleKeyUp = this.handleKeyUp.bind(this);
	}
	handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		this.setState({
			category: e.target.value,
		});
	}
	handleDeleteCategory(category: string) {
		this.props.deleteCategory(category);
	}
	handleKeyUp(e: any) {
		const key = e.keyCode;

		if ((key === ENTER_KEY || key === COMMA_KEY) && this.state.category.trim()) {
			this.props.addCategory(this.state.category.trim().replace(',', ''));
			this.setState({
				category: '',
			});
		}
	}
	render() {
		const { categories } = this.props;
		return (
			<div className='form-categories'>
				<Form.Field>
					<label>Categories</label>
					{!!categories.length && (
						<CategoriesContainer
							categories={categories}
							hasDeleteIcon
							onCategoryClick={this.handleDeleteCategory}
						/>
					)}
					<Input
						spellCheck
						placeholder='Enter your content'
						onKeyDown={this.handleKeyUp}
						onChange={this.handleChange}
						value={this.state.category}
					/>
					<Message visible info>
						*Please press spacebar or enter to create category.
					</Message>
				</Form.Field>
			</div>
		);
	}
}

export default FormCategories;
