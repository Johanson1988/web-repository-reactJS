import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Work extends Component {
    state = {
        link : this.props.work.link,
        imgSrc : this.props.work.imgSrc
    }
    render() {
        return(
        <Link to={this.state.link} className="portfolio__item">
            <img src={this.state.imgSrc} alt="" className="portfolio__img" />
        </Link>
        )
    }
}