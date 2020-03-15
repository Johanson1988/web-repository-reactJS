import React, {Component} from 'react';

export default class Service extends Component {
    state = {
        title : this.props.service.title,
        paragraph : this.props.service.paragraph
    }
    render() {
        return(
        <div className="service">
            <h3>{this.state.title}</h3>
            <p>
                {this.state.paragraph}
            </p>
        </div>
        )
    }
}