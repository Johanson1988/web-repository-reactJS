import React, {Component} from 'react';

import NavbarItem from './NavbarItem';

export default class Header extends Component {
    render() {

        const openMenu  = _ => document.body.classList.toggle('nav-open');

        return(
            <header>
                <div className="logo">
                    <img src="./images/devjane.png" alt="Profile pic" />
                </div>
                <button className="nav-toggle" aria-label="toogle navigation" onClick={openMenu}>
                    <span className="hamburger"></span>
                </button>
                <nav className="nav">
                    <ul className="nav__list">
                        <NavbarItem navbarItem={{link:'#home', content:'Home'}} />
                        <NavbarItem navbarItem={{link:'#services', content:'What I do'}} />
                        <NavbarItem navbarItem={{link:'#about', content:'About me'}} />
                        <NavbarItem navbarItem={{link:'#work', content:'My work'}} />
                    </ul>
                </nav>
            </header>
        )
    }
}