import React, {Component} from 'react';
import shortid from 'shortid';

export default class Project extends Component {
    render() {
        const {projectDescription, implementedFeatures, upcomingFeatures, imgSrc, imgAlt, trelloLink, frontEndLink, backEndLink, slidesLink, deployLink} = this.props.details;
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
                            <p className="text-repo-link__project">Trello</p>
                        </a>
                    </li>
                    : null
                    }
                    {
                        frontEndLink ?
                    <li className="social-list__item project__link">
                        <a href={frontEndLink} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github" />
                            <p className="text-repo-link__project">Frontend Repository</p>
                        </a>
                    </li>
                    : null
                    }
                                        {
                        backEndLink ?
                    <li className="social-list__item project__link">
                        <a href={backEndLink} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github" />
                            <p className="text-repo-link__project">Backend Repository</p>
                        </a>
                    </li>
                    : null
                    }
                    {
                        slidesLink ?
                        <li className="social-list__item project__link">
                        <a href={slidesLink} target="_blank" rel="noopener noreferrer">
                            <i className="iconify" data-icon="bx:bx-slideshow" data-inline="false" />
                            <p className="text-repo-link__project">Slides</p>
                        </a>
                        </li>
                    :null
                    }
                    {
                        deployLink ?
                        <li className="social-list__item project__link">
                        <a href={deployLink} target="_blank" rel="noopener noreferrer">
                            <i className="iconify" data-icon="logos:deploy" data-inline="false" />
                            <p className="text-repo-link__project">Deploy</p>
                        </a>
                    </li>
                    : null
                    }
                </ul>
            </div>
        )
    }
}