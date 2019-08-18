import React, { Component } from 'react';
import { Form, Input, Message, Button, Icon } from 'semantic-ui-react';
import { deleteCategory } from '../../../states/addBlog/actions';
import { render } from 'enzyme';
import { ENTER_KEY, COMMA_KEY } from '../../../configs/config';
interface ICategories {
	categories: string[];
	addCategory: Function;
	deleteCategory: Function;
}
interface IState {
    category: string;
}
export class Categories extends Component<ICategories, IState> {
	constructor(props: ICategories) {
		
		super(props);
		this.state= {
			category: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);

	}
	handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({
			category: e.target.value,
		})
	}
	handleKeyUp(e: any) {
		const key = e.keyCode;
	
		if ((key === ENTER_KEY || key === COMMA_KEY) && this.state.category ) {
			this.props.addCategory(this.state.category);
			this.setState({
				category: '',
			})
		}
	  }
	render() {
		const {categories} = this.props;
		return (
			<div>
			<Form.Field>
				<label>Categories</label>

				<div>{categories.map((category , index)=> 
						<Button name={category}>{category} <Icon name="delete"></Icon></Button>
				)}<Input
					spellCheck
					placeholder='Enter your content'
					onKeyUp={this.handleKeyUp}
					onChange={this.handleChange}
					value={this.state.category}
				/>

				</div>
			</Form.Field>
		</div>
		);
	}
}

export default Categories;
