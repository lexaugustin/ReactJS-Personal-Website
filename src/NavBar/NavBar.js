import React from 'react'

import NavBarStyles from './NavBar.module.css'

const navbar = () => {
    return (
        <nav>
            <div id={NavBarStyles['navbar-content']}>
                <div id={NavBarStyles.logo}><img src="img/logo/logo-white.svg"/></div>
                <div id={NavBarStyles.menu}>
                    <ul>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Skills / Interests</li>
                    </ul>
                    <p id={NavBarStyles.contact}>Contact</p>
                </div>
            </div>
        </nav>
    )
}

export default navbar;