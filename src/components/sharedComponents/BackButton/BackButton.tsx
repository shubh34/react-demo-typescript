import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

interface IBackButton {
	onClick: Function;
}
const buttonStyle= {
    paddingLeft: '0px',
    background: "transparent",
    color: "#4183c4"
}
const BackButton: React.FC<IBackButton> = ({ onClick }) => {
    const onBackClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		onClick(e);
	};
	return <Button style={buttonStyle} name="back" type="button" onClick={onBackClick} size="large" ><Icon name="angle left" /> Back</Button>;
};

export default BackButton;
