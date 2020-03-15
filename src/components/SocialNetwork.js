import React, {Component} from 'react';

export default class SocialNetwork extends Component {
    state = {
        link : this.props.socialNetwork.link,
        iconClass : this.props.socialNetwork.iconClass,
        title : this.props.socialNetwork.title,
        iconData : this.props.socialNetwork.iconData,
    }
    render() {
        
        return(
            <li className="social-list__item">
                <a href={this.state.link} className="social-list__link" target="_blank" rel="noopener noreferrer">
                    <i className={this.state.iconClass} title={this.state.title} data-icon={this.state.iconData} />
                </a>
            </li>
        )
    }
}