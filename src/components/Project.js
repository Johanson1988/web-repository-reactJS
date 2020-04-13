import React, {Component} from 'react';
import shortid from 'shortid';

export default class Project extends Component {
    render() {
        const {projectDescription, implementedFeatures, upcomingFeatures, imgSrc, imgAlt, trelloLink, githubLink, slidesLink, deployLink} = this.props.details;
        return(
            <div className="portfolio-item-individual">
                <h2>Project Description</h2>
                <p>{projectDescription}</p>
                <img src={imgSrc} alt={imgAlt} />
                <h2>Implemented features</h2>
                <ul>
                    {
                        implementedFeatures.map(feature => <li key={shortid.generate()}>{feature}</li>)
                    }
                </ul>
                <h2>Upcoming features</h2>
                <ul>
                    {
                        upcomingFeatures.map(feature => <li key={shortid.generate()}>{feature}</li>)
                    }
                </ul>
                <h2>Links</h2>
                <ul>
                    {
                        trelloLink ? 
                        <li>
                        <a href={trelloLink} target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-trello" />
                        </a>
                    </li>
                    : null
                    }
                    <li>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github" />
                        </a>
                    </li>
                    <li>
                        <a href={slidesLink} target="_blank" rel="noopener noreferrer">
                            <i class="iconify" data-icon="bx:bx-slideshow" data-inline="false" />
                        </a>
                    </li>
                    <li>
                        <a href={deployLink} target="_blank" rel="noopener noreferrer">
                            <i class="iconify" data-icon="logos:deploy" data-inline="false" />
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}