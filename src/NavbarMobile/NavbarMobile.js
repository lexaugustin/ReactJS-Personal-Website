import React from 'react'
import NavbarMobileStyles from './NavbarMobile.module.css'

const navbarMobile = props => (
    <nav id={NavbarMobileStyles['navbar-mobile']}>
        <div id={NavbarMobileStyles['close-button']} onClick={props.close}><i class="fas fa-times"></i></div>
        <ul className={NavbarMobileStyles['navbar-mobile-menu']}>
            <li><img src="img/icons/Programming.svg"/><a href='/'>About</a></li>
            <li><img src="img/icons/Programming.svg"/><a href='/'>Projects</a></li>
            <li><img src="img/icons/Programming.svg"/><a href='/'>Interests/Skills</a></li>
            <li><img src="img/icons/Programming.svg"/><a href='/'>Contact</a></li>
        </ul>
    </nav>
)

export default navbarMobile;