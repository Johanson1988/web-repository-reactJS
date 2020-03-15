import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Work extends Component {
    render() {
        const {link, imgSrc} = this.props.work;
        return(
        <Link to={link} className="portfolio__item">
            <img src={imgSrc} alt="" className="portfolio__img" />
        </Link>
        )
    }
}