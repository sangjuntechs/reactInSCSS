import React from 'react';
import './button.scss';

function Button( { children, size }) {
    return (
     <button className={['Button', size].join(" ")}>{children}</button>
    )
}

export default Button;