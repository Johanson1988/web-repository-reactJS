import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SocialNetwork from './../components/SocialNetwork';
import shortid from 'shortid';

export default class Work extends Component {
    render() {
        console.log(this.props);
        const { projectName, imgSrc, color } = this.props.work;
        const { technologies } = this.props;
        
        return(
        <Link to={"projects/" + projectName} className="portfolio__item">
            <h3 className={`portfolio__title ${color}`}>{projectName}</h3>
            <div className={`portfolio__logo ${color}`}>
                <ul className={`tech-list__work ${color}`}>            
                {
                    technologies.map(techIcon => <SocialNetwork key={shortid.generate()} socialNetwork={techIcon} />)
                }
                </ul>
            </div>
            <img src={imgSrc} alt="" className="portfolio__img" />
        </Link>
        )
    }
}