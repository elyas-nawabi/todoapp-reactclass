import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
function Header(props) {
    const {title, content, onAdd, showAddForm} = props;
    const onClick = () =>{
        alert("hi its an event")
    }
    return (
        <div>
            <h1>{title}</h1>
            <Button 
            onClick={onAdd}
            text={showAddForm?"close":"open"} bgcolor="#ffbc00" color="blue"
            color={showAddForm ? 'red': 'green'}
            />
            {/* <Button text="delete Task" bgcolor="blue" color="white" />
            <Button text="Rename Task" bgcolor="red" color="white" />
            <Button text="View Task" bgcolor="black" color="white" /> */}
        </div>
    );
}
Header.defaultProps = {
    title:"this is a default value"
}
Header.propTypes = {
    title:PropTypes.string
}

export default Header;