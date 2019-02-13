import React from 'react';

import  NavbarToggleButtonStyles from './NavbarToggleButton.module.css'

const navbarToggleButton = props => (
    <button id={NavbarToggleButtonStyles['toggle-button']} onClick={props.navbarClickHandler}> 
        <div className={NavbarToggleButtonStyles.line}></div>
        <div className={NavbarToggleButtonStyles.line}></div>
        <div className={NavbarToggleButtonStyles.line}></div>
    </button>
)

export default navbarToggleButton;