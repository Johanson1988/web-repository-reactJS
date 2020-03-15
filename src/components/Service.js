import React, {Component} from 'react';

export default class Service extends Component {
    render() {
        const {title,paragraph} = this.props.service;
        return(
        <div className="service">
            <h3>{title}</h3>
            <p>
                {paragraph}
            </p>
        </div>
        )
    }
}