import React from 'react';
import { Moment } from 'moment';
import './DateContainer.css';

interface IDateContainer {
	date?: string | Moment;
	className?: string;
}
const DateContainer: React.FC<IDateContainer> = ({ date, className = '' }) => {
	return (
		<div className='date_container'>
			<label className='date_container_label'>
				<span className='date_container_meta'>Date: </span>
				<strong>{date}</strong>
			</label>
		</div>
	);
};

export default DateContainer;
