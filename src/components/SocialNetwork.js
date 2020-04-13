import React, {Component} from 'react';

export default class SocialNetwork extends Component {
    render() {
        const {link, iconClass, title, iconData} = this.props.socialNetwork;
        console.log('Social:', this.props.socialNetwork);
        return(
            <li className="social-list__item">
                {
                    link ?
                    <a href={link} className="social-list__link" target="_blank" rel="noopener noreferrer">
                        <i className={iconClass} title={title} data-icon={iconData} />
                    </a>
                    : <i className={iconClass} title={title} data-icon={iconData} />
                }
            </li>
        )
    }
}