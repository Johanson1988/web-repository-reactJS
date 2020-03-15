import React, {Component} from 'react';

export default class navbarItem extends Component {
    state = {
        link: this.props.navbarItem.link,
        content: this.props.navbarItem.content
    }
    
    render() {
        const closeMenu = _ => document.body.classList.remove('nav-open');
        
        return(
            <li className="navv__item" onClick={closeMenu}>
                <a href={this.state.link} className="nav__link">{this.state.content}</a>
            </li>
        )
    }
}