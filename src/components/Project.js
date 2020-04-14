import React, {Component} from 'react';
import shortid from 'shortid';

export default class Project extends Component {
    render() {
        const {projectDescription, implementedFeatures, upcomingFeatures, imgSrc, imgAlt, trelloLink, githubLink, slidesLink, deployLink} = this.props.details;
        return(
            <div className="portfolio-item-individual">
                <h2 className="project__title">Project Description</h2>
                <p className="project__description">{projectDescription}</p>
                <img className="project__img" src={imgSrc} alt={imgAlt} />
                <h2 className="project__title">Implemented features</h2>
                <ul className="project-features__list">
                    {
                        implementedFeatures.map(feature => <li className="project-features__item" key={shortid.generate()}>{feature}</li>)
                    }
                </ul>
                <h2 className="project__title">Upcoming features</h2>
                <ul className="project-features__list">
                    {
                        upcomingFeatures.map(feature => <li className="project-features__item" key={shortid.generate()}>{feature}</li>)
                    }
                </ul>
                <h2 className="project__title">Links</h2>
                <ul className="social-list">
                    {
                        trelloLink ? 
                        <li className="social-list__item project__link">
                        <a href={trelloLink} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-trello" />
                        </a>
                    </li>
                    : null
                    }
                    {
                        githubLink ?
                    <li className="social-list__item project__link">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github" />
                        </a>
                    </li>
                    : null
                    }
                    {
                        slidesLink ?
                        <li className="social-list__item project__link">
                        <a href={slidesLink} target="_blank" rel="noopener noreferrer">
                            <i className="iconify" data-icon="bx:bx-slideshow" data-inline="false" />
                        </a>
                        </li>
                    :null
                    }
                    {
                        deployLink ?
                        <li className="social-list__item project__link">
                        <a href={deployLink} target="_blank" rel="noopener noreferrer">
                            <i className="iconify" data-icon="logos:deploy" data-inline="false" />
                        </a>
                    </li>
                    : null
                    }
                </ul>
            </div>
        )
    }
}