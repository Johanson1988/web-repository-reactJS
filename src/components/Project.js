import React, {Component} from 'react';

export default class Project extends Component {
    render() {
        const {firstParagraph, secondParagraph, thirdParagraph, imgSrc, imgAlt} = this.props.details;
        return(
        <div className="portfolio-item-individual">
            <p>{firstParagraph}</p>
            <img src={imgSrc} alt={imgAlt} />
            <p>{secondParagraph}</p>
            <p>{thirdParagraph}</p>
        </div>
        )
    }
}