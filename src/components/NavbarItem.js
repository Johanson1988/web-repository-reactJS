import React, {Component} from 'react';

//import {Link} from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';

export default class navbarItem extends Component {
    render() {
        const {link,content} = this.props.navbarItem;
        const closeMenu = _ => document.body.classList.remove('nav-open');        
        return(
            <li className="navv__item" onClick={closeMenu}>
                <NavLink to={"/"+ link} className="nav__link">{content}</NavLink>
            </li>
        )
    }
}