import React, {Component} from 'react';

//import {Link} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default class navbarItem extends Component {
    state = {
        link: this.props.navbarItem.link,
        content: this.props.navbarItem.content
    }
    
    render() {
        const closeMenu = _ => document.body.classList.remove('nav-open');
        
        return(
            <li className="navv__item" onClick={closeMenu}>
                <Link to={"/"+ this.state.link} className="nav__link">{this.state.content}</Link>
            </li>
        )
    }
}