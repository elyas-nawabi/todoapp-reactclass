import React from 'react';

function Button({text,bgcolor,color, onClick}) {
   
    return (
        <button 
        onClick={onClick}
        style = {{backgroundColor:bgcolor, color:color}}
        >
            {text}
        </button>
    );
}
Button.defaultProps = {
    color:'white'
}
export default Button;