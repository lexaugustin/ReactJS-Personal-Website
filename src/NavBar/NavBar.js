// import React from 'react'
import React, { Component } from 'react';

import NavBarStyles from './NavBar.module.css'
import NavbarMobile from '../NavbarMobile/NavbarMobile'
import NavbarToggleButton from '../NavbarMobile/NavbarToggleButton'

class navbar extends Component {

    state = {
        showNavbarMobile: false,
        scrolled: false,
        name: 'nav',
        logo: 'logo-white'
    };

    // -------- Navbar Click Buttons --------
    
    navbarButtonClickHandler = () => {
        this.setState((prevState) => {
            return {
                showNavbarMobile: !prevState.showNavbarMobile
            };
        });
    }

    closeButtonClickHandler = () => {
        this.setState({showNavbarMobile: false})
    }

    // -------- Navbar Scrolling --------
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== true){
                this.setState({scrolled: true, name: 'navbarScrolling', logo: 'logo-bleu'});
            } else {
                this.setState({scrolled: false, name: 'nav', logo:'logo-white'});
            }
            console.log(this.state.scrolled);
            console.log(this.state.name);
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    render() {

        let mobileMenu;

        if(this.state.showNavbarMobile){
          mobileMenu = <NavbarMobile close={this.closeButtonClickHandler}/>
        }

        return (
            // <nav className={this.state.scrolled ? 'nav navbarScrolling' : 'nav'}>
            <nav className={NavBarStyles[this.state.name]}>
                <div id={NavBarStyles['navbar-content']}>
                    {/* <div id={NavBarStyles.logo}><a href="/"><img src="img/logo/logo-white.svg"/></a></div> */}
                    <div id={NavBarStyles.logo}><a href="/"><img src={"img/logo/" + this.state.logo + ".svg"}/></a></div>
                    <div id={NavBarStyles.menu}>
                        <ul>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Projects</a></li>
                            <li><a href="/">Skills / Interests</a></li>
                        </ul>
                        <p id={NavBarStyles.contact}>Contact</p>
                    </div>
                    <div id={NavBarStyles['menu-button']}><NavbarToggleButton navbarClickHandler={this.navbarButtonClickHandler}/></div>
                </div>
                {mobileMenu}
            </nav>
        )
    }
}

export default navbar;