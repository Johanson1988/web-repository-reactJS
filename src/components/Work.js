import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Work extends Component {
    render() {
        const {projectName, imgSrc} = this.props.work;
        return(
        <Link to={"projects/" + projectName} className="portfolio__item">
            <h3 className="portfolio__title">{projectName}</h3>
            <div className="portfolio__logo">
                
                <i className="fab fa-node-js"></i>
                <i className="fab fa-js-square"></i>
                <i className="iconify" data-icon="cib:mongodb" data-inline="false"></i>
                <i className="iconify" data-icon="logos:handlebars" data-inline="false"></i>
                <i className="fab fa-react"></i>
                <i className="iconify" data-icon="cib:socket-io" data-inline="false"></i>
                <i className="iconify" data-icon="ion:qr-code-sharp" data-inline="false"></i>
                <i className="iconify" data-icon="mdi:google-maps" data-inline="false"></i>
                <i className="iconify" data-icon="logos:google-calendar" data-inline="false"></i>
                <i className="iconify" data-icon="whh:canvas" data-inline="false"></i>
            </div>
            <img src={imgSrc} alt="" className="portfolio__img" />
        </Link>
        )
    }
}