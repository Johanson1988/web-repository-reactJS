import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class SocialNetwork extends Component {
    state = {
        link : this.props.socialNetwork.link,
        iconClass : this.props.socialNetwork.iconClass,
        title : this.props.socialNetwork.title,
        iconData : this.props.socialNetwork.iconData,
    }
    render() {
        return(
            <li class="social-list__item">
                <a href={this.state.link} class="social-list__link" target="_blank">
                    <i class={this.state.iconClass} title={this.state.title} data-icon={this.state.iconData} />
                </a>
            </li>
        )
    }
}